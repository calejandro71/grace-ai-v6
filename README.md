# Grace — Deployment & Maintenance Guide

Grace is a client-facing annuity guide for Annuity Alliance. She answers
questions, pulls up products that match a visitor's filters, and hands warm
leads to your specialists — without ever giving advice or recommendations.

This folder is a complete, deployable site.

```
grace-deploy/
├── index.html               ← the Grace app (the whole UI + logic)
├── knowledge.js             ← editable Q&A cache (your team edits THIS)
├── netlify.toml             ← routing config
└── netlify/functions/
    ├── grace-chat.js        ← LLM proxy (only fires for novel questions)
    └── grace-lead.js        ← lead capture → GoHighLevel + email
```

---

## 1. Deploy to Netlify (5 minutes)

1. Put this whole folder in a Git repo (GitHub/GitLab) **or** drag-and-drop it
   into Netlify.
2. In Netlify → **Site settings → Environment variables**, add:

   | Variable | Required? | What it's for |
   |---|---|---|
   | `GHL_WEBHOOK_URL` | Yes (for leads) | Forward leads into GoHighLevel + trigger the Voice AI follow-up call |
   | `RESEND_API_KEY` | Optional | Send emails directly (or let GHL send them — recommended) |
   | `LEAD_EMAIL` | Optional | Backup email for lead packets (defaults to cos@advisorrpm.com) |
   | `ANTHROPIC_API_KEY` | Only if you switch off cache-only | Powers the optional live-LLM mode |

3. Deploy. Done.

**Grace works with ZERO env vars** — she answers from the free knowledge cache,
and leads fall back to opening the user's email client. The webhook just turns
on automated GHL routing.

---

## 2. How Grace's brain works (Option C — your choice)

Grace runs in **`cache_only`** mode (set in `index.html` → `CONFIG.brain.mode`).
Every message is handled in the cheapest way that works:

1. **Slot extraction** (free) — pulls goal/age/state/amount from any message.
2. **Product intent** (free) — "show me / compare / which" opens the product view.
3. **Knowledge cache** (free) — 33 pre-approved answers handle the common questions.
4. **Graceful handoff** (free) — for anything novel, Grace says "let me connect
   you with a specialist" and shows a button that opens the lead form. The lead
   drops into GHL, which triggers your Voice AI follow-up call.

**There is no per-message API cost.** Grace never calls a paid LLM in this mode.
Compliance stays fully under your control because every answer is one you wrote.

**If you ever want Grace to answer novel questions herself** (instead of handing
off), set `CONFIG.brain.mode = 'cache_first'` and add `ANTHROPIC_API_KEY` in
Netlify — the included `grace-chat.js` function handles it. Optional; not needed
for Option C.

---

## 3. The knowledge cache (your biggest lever)

`knowledge.js` is how Grace answers for free. 33 entries today. Every question
it handles is one that doesn't become a specialist handoff.

### To add an answer
Open `knowledge.js`, copy a block, fill in `id`, `keywords` (lowercase phrases
a user might type), and `answer` (2-4 sentences, no recommendations/advice).
No app changes, no redeploy of logic — just edit the file.

### What to add
Watch which questions trigger the specialist handoff (you'll see them come in
as GHL leads tagged `grace-voice-followup` with the transcript). The recurring
ones are your cache gaps — add them, and Grace handles them herself next time.

### Adding your annuityalliance.com content
Paste a resource article (text or URL) to your developer and they'll chunk it
into entries in Grace's voice. One concept = one entry.

---

## 4. GoHighLevel setup

### A. Lead capture + Voice AI follow-up call (the core flow)
1. GHL → **Automation → Workflows → New** → trigger = **Inbound Webhook**.
2. Copy the webhook URL → set as `GHL_WEBHOOK_URL` in Netlify (and/or paste into
   `CONFIG.ghl.leadWebhookUrl` in `index.html` and set `enabled: true`).
3. Create these **custom fields** once (Settings → Custom Fields): `annuity_goal`,
   `annuity_timeline`, `investment_amount`, `age`, `matched_products`,
   `grace_transcript`.
4. In the workflow, add actions:
   - **Create/Update Contact** (maps name, email, phone, state automatically)
   - **Send Email** to the lead with their illustration summary
   - **Voice AI → Outbound Call** for contacts tagged `grace-voice-followup`
     (this is where GHL Voice AI shines — the follow-up call leg)
   - **Internal Notification** to your specialists

Every Grace lead arrives tagged `grace-lead`, `grace-voice-followup`, plus
`wants-call` or `wants-illustrations`, plus the campaign — so you can branch the
workflow however you like.

### B. Optional: let visitors TALK to Grace by voice on the page
GHL's **Voice AI Chat Widget** (now embeddable inline) lets visitors hold a live
voice conversation in the browser. To add a "Talk to Grace by voice" button:
1. GHL → build a **Conversation AI / Voice AI agent** with Grace's annuity
   knowledge and the compliance rules (never recommend, never advise).
2. Create an **Embedded/Inline Voice AI Chat Widget** and copy its embed URL or
   script src.
3. Paste it into `CONFIG.ghl.voiceWidgetSrc` in `index.html`. The button appears
   automatically under Grace's photo.

   ⚠️ **Compliance note:** If you enable this, the GHL voice agent answers freely
   — it is NOT limited to your cache. You must prompt-engineer its compliance
   rules carefully and monitor it, since it can speak to prospects directly.
   The typed Grace chat stays cache-controlled regardless.

### C. Voice for typed answers (the read-aloud)
Grace's "Turn on Grace's voice" button uses the free browser voice for reading
typed answers aloud. GHL Voice AI is for live voice conversations (B above) and
the follow-up call (A above), not for reading typed text — they're different
tools for different jobs.

---

## 5. Cost control (Option C = near-zero)

In `cache_only` mode, Grace's per-message cost is **$0**:
- Slot extraction, product lookups, and the 33-entry cache are all free.
- Novel questions hand off to a specialist instead of calling a paid LLM.
- The only costs are your GHL subscription and Voice AI *call* minutes (spent on
  high-value follow-up calls, not casual website questions).

**To let Grace answer novel questions herself** (adds small API cost): set
`CONFIG.brain.mode = 'cache_first'`, add `ANTHROPIC_API_KEY` in Netlify. The
included `grace-chat.js` uses Claude Haiku (cheapest fast model), capped output,
a per-session call cap, and trimmed context — all to keep that cost low. But for
a compliance-sensitive funnel, cache-only + handoff is the safer default.

---

## 5. White-labeling for advisors

Everything brand-specific is centralized:
- **Logo / name / phone / hours** — top of `index.html` (the `<header>`).
- **Colors** — the `:root` CSS variables (`--ink`, `--gold`, `--cream`, etc.).
- **Lead routing** — `CONFIG` block at the top of the script (`leadEmail`, `ghl`).
- **Grace's answers** — `knowledge.js`.

To spin up an advisor's version: copy the folder, swap those four things, point
`GHL_WEBHOOK_URL` at the advisor's GHL (or your own with an advisor tag), deploy.

---

## 6. When CANNEX is live

Replace `PRODUCT_DB` and the `filterProducts()` function in `index.html` with
calls to the CANNEX API. The rest of the UI (results panel, lead packet, emails)
reads from the same product shape, so nothing else needs to change.

---

## Compliance notes

- Grace never recommends or advises — enforced in the cache answers, the browser
  prompt, AND the hardened server prompt in `grace-chat.js` (server prompt wins).
- Every product view shows a "Not a recommendation" banner.
- The contact form and footer carry the required disclosures (NAIC #275).
- All recommendations/suitability are deferred to licensed specialists.
