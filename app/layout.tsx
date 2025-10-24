import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s - Pulsa Plus',
    default: 'Pulsa Plus - Digital Solutions',
  },
  description: 'Pulsa Plus - Perusahaan teknologi terpercaya dengan pengalaman 10+ tahun. Solusi digital profesional untuk transaksi pulsa, paket data, dan layanan digital lainnya.',
  keywords: ['digital services', 'web development', 'API', 'software solutions', 'pulsa', 'paket data', 'mobile apps', 'Pulsa Plus'],
  authors: [{ 
    name: 'Pulsa Plus',
    url: 'https://pulsaplus.co.id',
  }],
  creator: 'Pulsa Plus',
  publisher: 'Pulsa Plus',
  other: {
    'privacy-policy': 'https://pulsaplus.co.id/privacy-policy',
    'terms-of-service': 'https://pulsaplus.co.id/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Pulsa Plus',
    description: 'Professional digital services and solutions',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'id_ID',
    siteName: 'Pulsa Plus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulsa Plus',
    description: 'Professional digital services and solutions',
    images: ['/og-image.jpg'],
    creator: '@Pulsa Plusmedia',
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
        other: {
          'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        },
      }),
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="id">
      <head>
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/images/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pulsa Plus" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/images/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/images/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/images/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        
        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        {/* Live Chat - Chatwoot */}
        <Script id="chatwoot-sdk" strategy="afterInteractive">
          {`
            (function(d,t) {
              var BASE_URL="https://chat.pulsaplus.co.id";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'cCqJXfbemBmjXNdJX6d1SQ3F',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}


