#!/usr/bin/env python3
"""
Generate pre-recorded MP3 files for all Grace knowledge base entries.
Uses ElevenLabs API with the Heather voice.

Usage:
  python3 generate_audio.py

Requires env vars:
  ELEVEN_API_KEY   — your ElevenLabs API key
  ELEVEN_VOICE_ID  — Heather's voice ID
"""

import os
import re
import time
import requests

API_KEY  = os.environ.get('ELEVEN_API_KEY', '')
VOICE_ID = os.environ.get('ELEVEN_VOICE_ID', '')

if not API_KEY or not VOICE_ID:
    print("ERROR: Set ELEVEN_API_KEY and ELEVEN_VOICE_ID environment variables")
    exit(1)

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
KNOWLEDGE_JS = os.path.join(SCRIPT_DIR, 'knowledge.js')
AUDIO_DIR    = os.path.join(SCRIPT_DIR, 'audio')
os.makedirs(AUDIO_DIR, exist_ok=True)

# ── Parse knowledge.js ────────────────────────────────────────────────────────

with open(KNOWLEDGE_JS, 'r', encoding='utf-8') as f:
    content = f.read()

# Match:  id: 'xxx'  ...  answer: "..."
pattern = r"id:\s*'([^']+)'[^}]*?answer:\s*\"((?:[^\"\\]|\\.)*)\""
entries = re.findall(pattern, content, re.DOTALL)

if not entries:
    print("ERROR: Could not parse any entries from knowledge.js")
    exit(1)

# ── Helpers ───────────────────────────────────────────────────────────────────

def strip_html(text):
    """Remove HTML tags; <em> content is kept, just unwrapped."""
    text = re.sub(r'<em>(.*?)</em>', r'\1', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\\n', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def generate(entry_id, raw_answer, retries=3):
    out_path = os.path.join(AUDIO_DIR, f'{entry_id}.mp3')

    if os.path.exists(out_path) and os.path.getsize(out_path) > 0:
        print(f"  SKIP  {entry_id}  (exists)")
        return True

    text = strip_html(raw_answer)

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        'xi-api-key':   API_KEY,
        'Content-Type': 'application/json',
        'Accept':       'audio/mpeg',
    }
    payload = {
        "text":     text,
        "model_id": "eleven_turbo_v2",   # half the credit cost of v1; still high quality
        "voice_settings": {
            "stability":        0.50,
            "similarity_boost": 0.80,
            "style":            0.15,     # slight warmth/expressiveness
            "use_speaker_boost": True,
        },
    }

    for attempt in range(1, retries + 1):
        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=60)
            if resp.status_code == 200:
                with open(out_path, 'wb') as f:
                    f.write(resp.content)
                size_kb = len(resp.content) // 1024
                chars   = len(text)
                print(f"  OK    {entry_id}  ({chars} chars → {size_kb} KB)")
                return True

            elif resp.status_code == 429:
                wait = 60
                print(f"  RATE LIMIT — pausing {wait}s (attempt {attempt})…")
                time.sleep(wait)

            else:
                print(f"  ERR   {entry_id}: HTTP {resp.status_code}")
                try:
                    detail = resp.json()
                    print(f"        {detail.get('detail', resp.text[:300])}")
                except Exception:
                    print(f"        {resp.text[:300]}")
                return False

        except Exception as exc:
            print(f"  ERR   {entry_id}: {exc}")
            if attempt < retries:
                time.sleep(5)

    return False

# ── Estimate credit usage ─────────────────────────────────────────────────────

total_chars = sum(len(strip_html(ans)) for _, ans in entries)
print(f"Knowledge entries : {len(entries)}")
print(f"Total characters  : {total_chars:,}  "
      f"(Starter plan = 30,000 credits; turbo_v2 = 0.5 credits/char)")
credits_needed = total_chars * 0.5
print(f"Credits needed    : {credits_needed:,.0f}  "
      f"({'OK' if credits_needed <= 30000 else 'MAY EXCEED STARTER LIMIT'})")
print(f"Audio output dir  : {AUDIO_DIR}\n")

print("Starting generation…\n")

# ── Generate ──────────────────────────────────────────────────────────────────

success, failed = 0, []

for i, (entry_id, answer) in enumerate(entries, 1):
    print(f"[{i:2}/{len(entries)}] {entry_id}")
    ok = generate(entry_id, answer)
    if ok:
        success += 1
    else:
        failed.append(entry_id)
    if i < len(entries):
        time.sleep(1.2)   # ~50 req/min safe rate

print(f"\n{'='*50}")
print(f"Done: {success}/{len(entries)} files generated")
if failed:
    print(f"Failed ({len(failed)}): {', '.join(failed)}")
else:
    print("All entries succeeded!")
print(f"MP3s saved to: {AUDIO_DIR}")
