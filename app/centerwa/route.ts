import { redirect } from 'next/navigation';

export async function GET() {
  const csWA = process.env.NEXT_PUBLIC_WA_CENTER || '6288970020000';
  redirect(`https://wa.me/${csWA}`);
}

