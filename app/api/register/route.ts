import { NextRequest, NextResponse } from 'next/server';

type RegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  phone: string;
  school: string;
  committee: string;
  experience: string;
};

// Simple validation
function validate(data: Partial<RegistrationData>): string | null {
  if (!data.firstName?.trim()) return 'First name is required';
  if (!data.lastName?.trim()) return 'Last name is required';
  if (!data.email?.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return 'Invalid email address';
  if (!data.age) return 'Age is required';
  const age = parseInt(data.age, 10);
  if (isNaN(age) || age < 10 || age > 25) return 'Age must be between 10 and 25';
  if (!data.phone?.trim()) return 'Phone is required';
  if (!data.school?.trim()) return 'School is required';
  if (!data.committee) return 'Please select a committee';
  if (!data.experience) return 'Please select your experience level';
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<RegistrationData>;

    // Validate
    const error = validate(data);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // -------------------------------------------------------------
    // TODO: Wire this up to your preferred backend service:
    //
    // Options to consider:
    //   1. Send to a Google Sheet via Google Apps Script webhook
    //   2. Save to a database (Vercel Postgres, Supabase, MongoDB)
    //   3. Send an email via Resend, SendGrid, or Postmark
    //   4. Forward to a Telegram bot via the Bot API
    //   5. Push to a Notion database
    //
    // Example: Telegram bot notification
    //   const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    //   const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    //   await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       chat_id: CHAT_ID,
    //       text: `New GS MUN registration:\n${JSON.stringify(data, null, 2)}`,
    //     }),
    //   });
    //
    // Example: Resend email
    //   await fetch('https://api.resend.com/emails', {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       from: 'noreply@gsmun.uz',
    //       to: 'gsmun.uz@gmail.com',
    //       subject: `New delegate: ${data.firstName} ${data.lastName}`,
    //       text: JSON.stringify(data, null, 2),
    //     }),
    //   });
    // -------------------------------------------------------------

    // For now, log to server console (visible in Vercel logs)
    console.log('[GS MUN Registration]', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return NextResponse.json({
      ok: true,
      message: 'Registration received',
    });
  } catch (err) {
    console.error('[GS MUN Registration Error]', err);
    return NextResponse.json(
      { error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
