import type { Metadata } from "next";
import { HargaClient } from "@/components/sections/HargaClient";

export const metadata: Metadata = {
  title: 'Harga - Paket Layanan',
  description: 'Lihat harga dan paket layanan Adzka Media Indoperkasa. Solusi digital dengan harga kompetitif untuk kebutuhan bisnis Anda.',
  keywords: ['harga', 'paket layanan', 'pricing', 'solusi digital', 'harga kompetitif'],
  openGraph: {
    title: 'Harga Paket Layanan - Adzka Media Indoperkasa',
    description: 'Solusi digital dengan harga kompetitif untuk kebutuhan bisnis Anda.',
    type: 'website',
  },
};

export default function HargaPage() {
  return <HargaClient />;
}
