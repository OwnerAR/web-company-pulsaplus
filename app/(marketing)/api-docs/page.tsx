import type { Metadata } from "next";
import { ApiDocsClient } from "@/components/sections/ApiDocsClient";
import { SidebarNavigation } from "@/components/sections/SidebarNavigation";

export const metadata: Metadata = {
  title: 'API Documentation - Panduan API',
  description: 'Dokumentasi lengkap API Adzka Media Indoperkasa. Panduan penggunaan API untuk transaksi pulsa, paket data, dan layanan digital lainnya.',
  keywords: ['api documentation', 'panduan api', 'api adzka', 'dokumentasi api', 'transaksi pulsa api'],
  openGraph: {
    title: 'API Documentation - Adzka Media Indoperkasa',
    description: 'Dokumentasi lengkap API untuk transaksi pulsa, paket data, dan layanan digital.',
    type: 'website',
  },
};

export default function ApiDocsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarNavigation />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto scroll-smooth">
        <ApiDocsClient />
      </main>
    </div>
  );
}
