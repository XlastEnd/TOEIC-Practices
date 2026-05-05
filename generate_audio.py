"""
================================================================================
  TOEIC Study Planner — ElevenLabs Audio Generator
  สร้างไฟล์เสียง Listening Test โดยใช้ Text to Dialogue API
================================================================================

  วิธีใช้:
  1. ติดตั้ง Library:
       pip install elevenlabs

  2. ใส่ API Key ของคุณในบรรทัด ELEVENLABS_API_KEY ด้านล่าง
     (หาได้ที่ elevenlabs.io → Profile → API Keys)

  3. รัน Script:
       python generate_audio.py

  4. ไฟล์ MP3 จะถูกสร้างในโฟลเดอร์ ./audio/
     q1_conversation.mp3
     q3_phone_call.mp3
     q5_coffee_shop.mp3
     q7_workplace.mp3

  5. Upload โฟลเดอร์ audio/ ขึ้น GitHub repo
     แล้วแก้ index.html ตามคำแนะนำท้าย Script นี้
================================================================================
"""

import os
from pathlib import Path
from elevenlabs.client import ElevenLabs

# ── ตั้งค่า API Key ────────────────────────────────────────────────────────────
# วางรหัสที่นี่เลย
ELEVENLABS_API_KEY = "sk_b8734363387265d0818beedfdaaa9c950698178968b1c1c0"

# ── Voice IDs (Built-in Voices — ใช้ได้ทุก Plan รวม Free) ─────────────────────
# Rachel — เสียงผู้หญิง สำเนียง American สุภาพ
VOICE_WOMAN = "21m00Tcm4TlvDq8ikWAM"

# Daniel — เสียงผู้ชาย สำเนียง British ชัดเจน
VOICE_MAN   = "onwK4e9ZLuTAKqWW03F9"

# Model: eleven_v3 รองรับ Text to Dialogue หลายเสียงในไฟล์เดียว
MODEL = "eleven_v3"

# ── Output folder ─────────────────────────────────────────────────────────────
OUTPUT_DIR = Path("audio")
OUTPUT_DIR.mkdir(exist_ok=True)

# ── Dialogue Scripts (Q1, Q3, Q5, Q7) ────────────────────────────────────────
# แต่ละ entry คือ tuple: (voice_id, text)
# สลับเสียงตามตัวละครในบทสนทนา

DIALOGUES = {
    "q1_conversation.mp3": [
        # Q1 — Conversation at an Event
        (VOICE_WOMAN, "Excuse me, is this seat taken?"),
        (VOICE_MAN,   "No, please go ahead. Are you here for the product launch?"),
        (VOICE_WOMAN, "Yes, I flew in from Singapore just this morning."),
    ],
    "q3_phone_call.mp3": [
        # Q3 — Phone Call / Rescheduling Appointment
        (VOICE_MAN,   "Hi, I'd like to reschedule my appointment with Dr. Kim."),
        (VOICE_WOMAN, "Of course. Would Tuesday at 3 PM work for you?"),
        (VOICE_MAN,   "Actually, could we make it Wednesday morning instead?"),
    ],
    "q5_coffee_shop.mp3": [
        # Q5 — Casual Conversation about a Coffee Shop
        (VOICE_WOMAN, "I heard the new coffee shop on Fifth Avenue just opened. Have you been?"),
        (VOICE_MAN,   "Yes! I went last week. The espresso is excellent but the pastries are a bit overpriced."),
        (VOICE_WOMAN, "That's too bad. I might still give it a try."),
    ],
    "q7_workplace.mp3": [
        # Q7 — Workplace Conversation
        (VOICE_WOMAN, "Could you prepare the sales figures for the board meeting?"),
        (VOICE_MAN,   "Sure. Should I include data from last quarter too?"),
        (VOICE_WOMAN, "Yes, and please also add a comparison chart with the previous year."),
    ],
}


def generate_dialogue(client: ElevenLabs, filename: str, lines: list) -> None:
    """
    Generate a multi-speaker dialogue audio file using ElevenLabs Text to Dialogue API.
    """
    print(f"\n🎙  กำลัง Generate: {filename}")
    print(f"    จำนวน Lines: {len(lines)}")

    # สร้าง inputs list สำหรับ API
    inputs = [
        {"text": text, "voice_id": voice_id}
        for voice_id, text in lines
    ]

    # Preview ว่าจะ Generate อะไร
    for i, (voice_id, text) in enumerate(lines):
        speaker = "Woman 👩" if voice_id == VOICE_WOMAN else "Man  👨"
        print(f"    [{i+1}] {speaker}: {text[:60]}{'...' if len(text) > 60 else ''}")

    try:
        # เรียก Text to Dialogue API
        audio_bytes = client.text_to_dialogue.convert(
            inputs=inputs,
            model_id=MODEL,
        )

        # บันทึกไฟล์
        output_path = OUTPUT_DIR / filename
        with open(output_path, "wb") as f:
            f.write(audio_bytes)

        size_kb = output_path.stat().st_size / 1024
        print(f"    ✅ บันทึกแล้ว: {output_path} ({size_kb:.1f} KB)")

    except Exception as e:
        print(f"    ❌ Error: {e}")
        raise


def main():
    print("=" * 60)
    print("  TOEIC Listening Audio Generator")
    print("  ElevenLabs Text to Dialogue API")
    print("=" * 60)

    # ตรวจสอบ API Key
    if ELEVENLABS_API_KEY == "REPLACE_WITH_YOUR_ELEVENLABS_API_KEY":
        print("\n❌ กรุณาใส่ ELEVENLABS_API_KEY ก่อนรัน Script!")
        print("   แก้บรรทัด: ELEVENLABS_API_KEY = \"REPLACE_WITH_YOUR_ELEVENLABS_API_KEY\"")
        return

    # สร้าง Client
    client = ElevenLabs(api_key=ELEVENLABS_API_KEY)
    print(f"\n✅ เชื่อมต่อ ElevenLabs สำเร็จ")
    print(f"📁 Output folder: {OUTPUT_DIR.resolve()}")

    # Generate ทีละไฟล์
    success = 0
    for filename, lines in DIALOGUES.items():
        try:
            generate_dialogue(client, filename, lines)
            success += 1
        except Exception as e:
            print(f"\n❌ ข้าม {filename} เพราะ error: {e}")

    # สรุป
    print("\n" + "=" * 60)
    print(f"  ✅ สำเร็จ {success}/{len(DIALOGUES)} ไฟล์")
    print(f"  📁 ไฟล์ทั้งหมดอยู่ใน: {OUTPUT_DIR.resolve()}")
    print("=" * 60)

    # คำแนะนำขั้นตอนต่อไป
    print("""
ขั้นตอนต่อไป:
─────────────
1. Upload โฟลเดอร์ audio/ ขึ้น GitHub repo
   (วางไว้ข้างๆ index.html)

2. แก้ index.html — เปลี่ยน audio: null เป็น:

   Q1:  audio: './audio/q1_conversation.mp3'
   Q3:  audio: './audio/q3_phone_call.mp3'
   Q5:  audio: './audio/q5_coffee_shop.mp3'
   Q7:  audio: './audio/q7_workplace.mp3'

3. Commit และ Push → GitHub Pages จะ Deploy ให้อัตโนมัติ
""")


if __name__ == "__main__":
    main()
