import { redirect } from 'next/navigation';

export async function GET() {
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA || '6288970010000';
  const message = encodeURIComponent('halo cs saya ingin mengetahui tentang pulsa plus');
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${csWA}&text=${message}&type=phone_number&app_absent=0`;
  
  redirect(whatsappUrl);
}

