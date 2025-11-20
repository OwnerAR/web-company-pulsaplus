import { redirect } from 'next/navigation';

export async function GET() {
  const csTelegram = process.env.NEXT_PUBLIC_CONTACT_TELEGRAM;
  const telegramUrl = `https://t.me/${csTelegram}`;
  redirect(telegramUrl);
}

