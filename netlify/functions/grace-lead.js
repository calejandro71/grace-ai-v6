/* ==========================================================================
   GRACE — LEAD CAPTURE  (Netlify Function)
   ==========================================================================
   Path when deployed: /.netlify/functions/grace-lead  (mapped from /api/grace-lead)

   WHAT THIS DOES:
   - Receives the full lead payload (contact + annuity profile + matched
     products + transcript) from the browser.
   - Forwards it to GoHighLevel (Inbound Webhook) so it lands in your CRM.
   - Sends the lead packet to your email (cos@advisorrpm.com for now).
   - Optionally emails the user their illustration summary.

   SETUP (Netlify > Environment variables):
     GHL_WEBHOOK_URL   = https://services.leadconnectorhq.com/hooks/...   (optional)
     RESEND_API_KEY    = re_...   (optional — for sending email; see below)
     LEAD_EMAIL        = cos@advisorrpm.com

   EMAIL OPTIONS:
   - Easiest: let GoHighLevel send both emails via a workflow triggered by the
     webhook (no email API key needed here). Recommended.
   - Or: plug in Resend (resend.com) by setting RESEND_API_KEY — code below
     will use it. Any transactional email API works with small tweaks.
   ========================================================================== */

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  let p;
  try { p = JSON.parse(event.body || '{}'); }
  catch { return { statusCode: 400, headers, body: JSON.stringify({ error: 'Bad JSON' }) }; }

  const leadEmail = process.env.LEAD_EMAIL || 'cos@advisorrpm.com';
  const results = { ghl: false, emailToAdvisor: false, emailToUser: false };

  // ---- 1. Forward to GoHighLevel ----
  const ghlUrl = process.env.GHL_WEBHOOK_URL;
  if (ghlUrl) {
    try {
      const ghlBody = {
        firstName: p.lead?.name || '',
        email: p.lead?.email || '',
        phone: p.lead?.phone || '',
        state: p.lead?.state || '',
        tags: ['grace-lead', p.intent === 'call' ? 'wants-call' : 'wants-illustrations', 'grace-voice-followup', p.profile?.campaign || 'organic'],
        customField: {
          annuity_goal: p.profile?.goal || '',
          annuity_timeline: p.profile?.timeline || '',
          investment_amount: p.lead?.investmentAmount || '',
          age: p.lead?.age || '',
          matched_products: (p.matchedProducts || []).map(m => `${m.product} (${m.carrier})`).join(' | '),
          grace_transcript: (p.transcript || []).map(m => `${m.role}: ${stripTags(m.text)}`).join('\n')
        }
      };
      const r = await fetch(ghlUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(ghlBody) });
      results.ghl = r.ok;
    } catch (e) { console.log('GHL forward failed:', String(e)); }
  }

  // ---- 2. Email the lead packet (via Resend, if configured) ----
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      // To advisor
      await sendEmail(resendKey, {
        to: leadEmail,
        from: 'Grace <grace@annuityalliance.com>',   // must be a verified domain in Resend
        subject: `New Grace Lead — ${p.lead?.name || 'Unknown'} (${p.intent})`,
        text: buildAdvisorEmail(p)
      });
      results.emailToAdvisor = true;

      // To user (illustration summary) — only if they gave an email
      if (p.lead?.email) {
        await sendEmail(resendKey, {
          to: p.lead.email,
          from: 'Grace at Annuity Alliance <grace@annuityalliance.com>',
          subject: 'Your annuity illustrations from Annuity Alliance',
          text: buildUserEmail(p)
        });
        results.emailToUser = true;
      }
    } catch (e) { console.log('Email send failed:', String(e)); }
  }

  // Always log so nothing is lost even if integrations aren't set up yet
  console.log(JSON.stringify({ tag: 'GRACE_LEAD', ts: new Date().toISOString(), lead: p.lead, profile: p.profile, results }));

  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, results }) };
};

/* ---------- helpers ---------- */
function stripTags(s) { return String(s || '').replace(/<[^>]+>/g, ''); }

async function sendEmail(apiKey, { to, from, subject, text }) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, text })
  });
  if (!r.ok) throw new Error('Resend ' + r.status);
  return r.json();
}

function buildAdvisorEmail(p) {
  const prods = (p.matchedProducts || []).map((m, i) =>
    `${i + 1}. ${m.product} — ${m.carrier} (${m.rating})\n   Type: ${m.type} | Rate: ${m.rate || m.immediatePayoutRate || m.deferredPayoutRate}% | Bonus: ${m.bonus || 0}%\n   Matches: ${(m.matchReasons || []).join(', ')}`
  ).join('\n\n');
  const tr = (p.transcript || []).map(t => `${t.role === 'grace' ? 'GRACE' : 'USER'}: ${stripTags(t.text)}`).join('\n\n');
  return `=== NEW GRACE LEAD ===

Intent: ${p.intent === 'call' ? 'Wants a specialist call' : 'Wants illustrations emailed'}
Timestamp: ${p.timestamp}
Campaign: ${p.profile?.campaign}

--- LEAD CONTACT ---
Name: ${p.lead?.name}
Email: ${p.lead?.email}
Phone: ${p.lead?.phone}
State: ${p.lead?.state}
Age: ${p.lead?.age}
Investment: ${p.lead?.investmentAmount}

--- ANNUITY PROFILE ---
Goal: ${p.profile?.goal}
Timeline: ${p.profile?.timeline}
Premium: ${p.profile?.premium}
Source: ${p.profile?.source}

--- MATCHED PRODUCTS (${(p.matchedProducts || []).length}) ---
${prods}

--- GRACE TRANSCRIPT ---
${tr}

--- JSON SIDECAR ---
${JSON.stringify(p, null, 2)}
`;
}

function buildUserEmail(p) {
  const prods = (p.matchedProducts || []).map((m, i) =>
    `${i + 1}. ${m.product} — ${m.carrier} (rated ${m.rating})\n   ${m.bonus ? m.bonus + '% premium bonus | ' : ''}Rate: ${m.rate || m.immediatePayoutRate || m.deferredPayoutRate}%`
  ).join('\n\n');
  return `Hi ${p.lead?.name || 'there'},

Thanks for spending time with Grace. Based on what you shared, here are the annuity products that matched your filters:

${prods}

These are for your information only and are not a recommendation. A licensed annuity specialist will reach out shortly to walk you through the details and answer any questions about your specific situation.

Talk soon,
Grace
Annuity Alliance

---
Annuity Alliance does not provide financial, tax, legal, or investment advice. Product recommendations and suitability determinations are made exclusively by licensed annuity specialists. Rates are subject to change.
`;
}
