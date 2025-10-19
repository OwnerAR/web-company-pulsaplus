import type { Metadata } from "next";
import { AplikasiMobileClient } from "@/components/sections/AplikasiMobileClient";

export const metadata: Metadata = {
  title: 'Aplikasi Mobile - Download App Adzka',
  description: 'Download aplikasi mobile Adzka untuk transaksi pulsa, paket data, dan layanan digital lainnya. Tersedia di Google Play Store dan App Store.',
  keywords: ['aplikasi mobile', 'download app', 'adzka reload', 'pulsa', 'paket data', 'digital services'],
  openGraph: {
    title: 'Aplikasi Mobile - Download App Adzka',
    description: 'Download aplikasi mobile Adzka untuk transaksi pulsa, paket data, dan layanan digital lainnya.',
    type: 'website',
  },
};

export default function AplikasiMobilePage() {
  return <AplikasiMobileClient />;
}
