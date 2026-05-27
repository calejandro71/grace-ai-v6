/**
 * Grace Chat Worker
 * Proxies Claude (text) + ElevenLabs (TTS) with rate limiting.
 *
 * Environment variables (set via wrangler secrets):
 *   ANTHROPIC_API_KEY   — Anthropic API key
 *   ELEVEN_API_KEY      — ElevenLabs API key
 *   ELEVEN_VOICE_ID     — ElevenLabs voice ID for Grace
 *
 * KV namespace binding:
 *   RATE_LIMIT          — for daily + per-IP counters
 *
 * Configurable env vars (set in wrangler.toml or dashboard):
 *   DAILY_CAP           — max LLM calls per day globally (default: 100)
 *   HOURLY_IP_CAP       — max calls per IP per hour (default: 5)
 *   MAX_RESPONSE_CHARS  — max chars Claude can return (default: 600)
 *   ALLOWED_ORIGIN      — CORS origin, e.g. https://grace-ai-v6.pages.dev (default: *)
 */

const SYSTEM_PROMPT =
  "You are Grace, an educational annuity guide for Annuity Alliance. " +
  "CRITICAL COMPLIANCE: You NEVER recommend specific products, never say 'you should', " +
  "never give financial, tax, or legal advice. You explain annuity concepts clearly and " +
  "warmly in plain English. Defer all recommendations and suitability decisions to licensed " +
  "specialists. Keep answers to 2-4 warm, plain-English sentences. End by offering to show " +
  "matching products or connect a specialist when relevant. Plain text only — no markdown.";

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '*';
    const allowedOrigin = env.ALLOWED_ORIGIN || '*';
    const corsOrigin = allowedOrigin === '*' ? '*' : (origin === allowedOrigin ? origin : allowedOrigin);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(corsOrigin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders(corsOrigin) });
    }

    // --- Config ---
    const DAILY_CAP       = parseInt(env.DAILY_CAP        || '100');
    const HOURLY_IP_CAP   = parseInt(env.HOURLY_IP_CAP    || '5');
    const MAX_CHARS       = parseInt(env.MAX_RESPONSE_CHARS|| '600');

    // --- Rate limiting ---
    const ip    = request.headers.get('CF-Connecting-IP') || 'unknown';
    const now   = new Date();
    const today = now.toISOString().slice(0, 10);   // YYYY-MM-DD
    const hour  = now.toISOString().slice(0, 13);   // YYYY-MM-DDTHH

    const dailyKey = `daily:${today}`;
    const ipKey    = `ip:${ip}:${hour}`;

    const [dailyCount, ipCount] = await Promise.all([
      env.RATE_LIMIT.get(dailyKey).then(v => parseInt(v || '0')),
      env.RATE_LIMIT.get(ipKey).then(v => parseInt(v || '0')),
    ]);

    if (dailyCount >= DAILY_CAP) {
      return jsonErr('daily_cap_reached', 429, corsOrigin);
    }
    if (ipCount >= HOURLY_IP_CAP) {
      return jsonErr('rate_limited', 429, corsOrigin);
    }

    // --- Parse body ---
    let body;
    try { body = await request.json(); }
    catch { return new Response('Bad request', { status: 400, headers: corsHeaders(corsOrigin) }); }

    const { messages } = body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Bad request', { status: 400, headers: corsHeaders(corsOrigin) });
    }

    // --- Call Claude ---
    let graceText;
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages,
        }),
      });
      if (!res.ok) throw new Error(`Claude ${res.status}`);
      const data = await res.json();
      graceText = (data.content[0].text || '').trim().slice(0, MAX_CHARS);
    } catch (err) {
      console.error('Claude error:', err);
      return jsonErr('llm_error', 500, corsOrigin);
    }

    // --- Call ElevenLabs TTS ---
    let audioBuffer;
    try {
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${env.ELEVEN_VOICE_ID}`,
        {
          method: 'POST',
          headers: {
            'xi-api-key': env.ELEVEN_API_KEY,
            'Content-Type': 'application/json',
            'Accept': 'audio/mpeg',
          },
          body: JSON.stringify({
            text: graceText,
            model_id: 'eleven_turbo_v2',
            voice_settings: { stability: 0.50, similarity_boost: 0.80, style: 0.15, use_speaker_boost: true },
          }),
        }
      );
      if (!res.ok) throw new Error(`ElevenLabs ${res.status}`);
      audioBuffer = await res.arrayBuffer();
    } catch (err) {
      console.error('ElevenLabs error:', err);
      // TTS failed — return text so frontend can fall back gracefully
      return new Response(JSON.stringify({ error: 'tts_error', text: graceText }), {
        status: 200,
        headers: corsHeaders(corsOrigin, { 'Content-Type': 'application/json' }),
      });
    }

    // --- Increment counters (fire-and-forget) ---
    Promise.all([
      env.RATE_LIMIT.put(dailyKey, String(dailyCount + 1), { expirationTtl: 86400 }),
      env.RATE_LIMIT.put(ipKey,    String(ipCount + 1),    { expirationTtl: 3600  }),
    ]);

    // --- Return JSON { text, audio: base64 } — avoids header length limits ---
    const bytes = new Uint8Array(audioBuffer);
    let binary = '';
    const CHUNK = 8192;
    for (let i = 0; i < bytes.length; i += CHUNK) {
      binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
    }
    return new Response(JSON.stringify({ text: graceText, audio: btoa(binary) }), {
      headers: corsHeaders(corsOrigin, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      }),
    });
  },
};

function corsHeaders(origin, extra = {}) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    ...extra,
  };
}

function jsonErr(code, status, origin) {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: corsHeaders(origin, { 'Content-Type': 'application/json' }),
  });
}
