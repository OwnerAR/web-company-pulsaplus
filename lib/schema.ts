export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Adzka Media Indoperkasa",
  "description": "Professional digital services and solutions",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://adzka.co.id",
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://adzka.co.id"}/images/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-858-8844-4608",
    "contactType": "customer service",
    "email": "info@adzka.co.id"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID",
    "addressLocality": "Indonesia"
  },
  "sameAs": [
    "https://www.facebook.com/adzkamedia",
    "https://www.instagram.com/adzkamedia",
    "https://www.twitter.com/adzkamedia"
  ],
  "foundingDate": "2014",
  "numberOfEmployees": "100+",
  "industry": "Technology",
  "services": [
    "Web Development",
    "Mobile App Development", 
    "API Development",
    "Digital Services",
    "Pulsa & Paket Data"
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Adzka Media Indoperkasa",
  "description": "Professional digital services and solutions",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://adzka.co.id",
  "publisher": {
    "@type": "Organization",
    "name": "Adzka Media Indoperkasa"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://adzka.co.id"}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Adzka Reload",
  "description": "Aplikasi mobile untuk transaksi pulsa, paket data, dan layanan digital lainnya",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "IDR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "10000"
  },
  "downloadUrl": process.env.NEXT_PUBLIC_ADZKA_RELOAD_APK_URL || "https://play.google.com/store/apps/details?id=com.otoreport.apkadzkareload"
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Services",
  "description": "Professional digital services and solutions",
  "provider": {
    "@type": "Organization",
    "name": "Adzka Media Indoperkasa"
  },
  "serviceType": "Digital Services",
  "areaServed": "Indonesia",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "API Development"
        }
      }
    ]
  }
}
