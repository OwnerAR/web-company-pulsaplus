import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s - Adzka Media Indoperkasa',
    default: 'Adzka Media Indoperkasa - Digital Solutions',
  },
  description: 'Professional digital services and solutions',
  keywords: ['digital services', 'web development', 'API', 'software solutions'],
  authors: [{ name: 'Adzka Media Indoperkasa' }],
  openGraph: {
    title: 'Adzka Media Indoperkasa',
    description: 'Professional digital services and solutions',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adzka Media Indoperkasa',
    description: 'Professional digital services and solutions',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


