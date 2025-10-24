import type { Metadata } from "next";
import { HeroApp } from "@/components/sections/HeroApp";
import { Keunggulan } from "@/components/sections/Keunggulan";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadApp } from "@/components/sections/DownloadApp";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Pulsa Plus - Solusi digital profesional untuk transaksi pulsa, paket data, dan layanan digital lainnya. Download aplikasi mobile kami sekarang!',
  keywords: ['Pulsa Plus', 'pulsa', 'paket data', 'digital services', 'mobile apps', 'transaksi digital', 'indonesia'],
  openGraph: {
    title: 'Pulsa Plus - Solusi Digital Terpercaya',
    description: 'Solusi digital profesional untuk transaksi pulsa, paket data, dan layanan digital lainnya.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroApp />
      <Keunggulan />
      <HowItWorks />
      <SocialMedia />
      <Products />
      <Testimonials />
      <DownloadApp />
    </>
  );
}


