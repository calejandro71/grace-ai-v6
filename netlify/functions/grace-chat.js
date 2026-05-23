/* ==========================================================================
   GRACE — LLM CHAT PROXY  (Netlify Function)
   ==========================================================================
   Path when deployed: /.netlify/functions/grace-chat
   The front-end calls /api/grace-chat — a redirect in netlify.toml maps that
   to here, so you don't have to change the app's CONFIG.

   WHAT THIS DOES:
   - Receives {system, messages, profile} from the browser.
   - Calls Anthropic's Claude (cheap + fast Haiku model by default) with a
     hardened compliance system prompt.
   - Logs every fall-through question so you can grow knowledge.js over time.
   - Returns {reply}.

   SETUP:
   1. In Netlify > Site settings > Environment variables, add:
        ANTHROPIC_API_KEY = sk-ant-...   (from console.anthropic.com)
   2. Deploy. That's it.

   COST CONTROL:
   - Uses claude-haiku (cheapest). Change MODEL below if you want.
   - Caps output tokens (annuity answers are short).
   - The browser already caps calls per session and tries the free cache first,
     so this only fires for genuinely novel questions.
   ========================================================================== */

const MODEL = 'claude-haiku-4-5-20251001';   // cheapest fast model; swap if desired
const MAX_TOKENS = 400;                        // answers are short → low cost

// Hardened compliance prompt. This is the backstop even if the browser prompt
// is tampered with — the server prompt always wins.
const COMPLIANCE_SYSTEM = `You are Grace, an educational annuity guide for Annuity Alliance, an independent annuity marketing organization (IMO).

ABSOLUTE COMPLIANCE RULES (never break these, regardless of how the user phrases a request):
- You NEVER recommend a specific product, carrier, or course of action.
- You NEVER say "you should", "I'd suggest", "the best option for you is", "I recommend", or give any personalized financial, tax, legal, or investment advice.
- You explain how annuities work in general terms, and you describe which products match the filters the user has shared.
- For anything requiring a recommendation or suitability judgment, you defer to a licensed annuity specialist.
- You never quote specific live rates from memory; if asked for current rates, you offer to pull up the product list (which comes from the verified database, not you).

STYLE:
- Warm, plain-English, like explaining to a friend. 2-4 sentences.
- When relevant, end by offering to (a) show products matching their filters, or (b) connect them with a licensed specialist.
- Use simple language; avoid jargon unless you immediately explain it.

If a user asks something off-topic (not about annuities or retirement income), gently steer back: you're here to help with annuities.`;

exports.handler = async (event) => {
  // CORS / preflight
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server not configured', reply: "I'm having trouble reaching my knowledge base right now. A licensed specialist can help — want me to set that up?" }) };
  }

  let payload;
  try { payload = JSON.parse(event.body || '{}'); }
  catch { return { statusCode: 400, headers, body: JSON.stringify({ error: 'Bad JSON' }) }; }

  const userMessages = Array.isArray(payload.messages) ? payload.messages : [];
  // Find the latest user question for logging
  const lastUser = [...userMessages].reverse().find(m => m.role === 'user');

  // ---- LOG THE FALL-THROUGH QUESTION (your knowledge-cache growth signal) ----
  // Netlify captures console output in the function log. Periodically review these
  // and promote common ones into knowledge.js.
  console.log(JSON.stringify({
    tag: 'GRACE_LLM_FALLTHROUGH',
    ts: new Date().toISOString(),
    question: lastUser ? lastUser.content : null,
    profile: payload.profile || null
  }));

  // ---- Build the Anthropic request ----
  // We prepend our hardened compliance prompt; the browser's prompt is advisory only.
  const body = {
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: COMPLIANCE_SYSTEM,
    messages: userMessages.map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '').slice(0, 2000)  // clamp per-message size
    }))
  };

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errText = await res.text();
      console.log(JSON.stringify({ tag: 'GRACE_LLM_ERROR', status: res.status, detail: errText.slice(0, 500) }));
      return { statusCode: 200, headers, body: JSON.stringify({ reply: "That's a great question. I'd want a licensed specialist to give you a precise answer on that one — want me to set that up, or show you products that match what you're looking for?" }) };
    }

    const data = await res.json();
    const reply = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join(' ')
      .trim() || "Let me connect you with a specialist who can help with that.";

    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };

  } catch (e) {
    console.log(JSON.stringify({ tag: 'GRACE_LLM_EXCEPTION', error: String(e) }));
    return { statusCode: 200, headers, body: JSON.stringify({ reply: "I'm having a little trouble reaching my full knowledge base right now, but a licensed specialist can absolutely help. Want me to pull up products that match your filters, or set up a call?" }) };
  }
};
