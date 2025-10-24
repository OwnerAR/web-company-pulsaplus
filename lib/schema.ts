export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pulsa Plus",
  "description": "Professional digital services and solutions",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://pulsaplus.co.id",
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://pulsaplus.co.id"}/images/logo.png`,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+62-858-8844-4608",
      "contactType": "customer service",
      "email": "info@pulsaplus.co.id",
      "availableLanguage": ["Indonesian", "English"]
    },
    {
      "@type": "ContactPoint", 
      "telephone": "+62-895-0233-3331",
      "contactType": "sales",
      "email": "sales@pulsaplus.co.id",
      "availableLanguage": ["Indonesian", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890", 
      "contactType": "technical support",
      "email": "support@pulsaplus.co.id",
      "availableLanguage": ["Indonesian", "English"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Sudirman No. 123",
    "addressLocality": "Jakarta",
    "addressRegion": "DKI Jakarta", 
    "postalCode": "12190",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.facebook.com/Pulsa Plusmedia",
    "https://www.instagram.com/Pulsa Plusmedia",
    "https://www.twitter.com/Pulsa Plusmedia"
  ],
  "foundingDate": "2014",
  "numberOfEmployees": "100+",
  "industry": "Technology",
  "trustPilot": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "10000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "awards": [
    "Best Digital Services Provider 2023",
    "Trusted Technology Partner 2022"
  ],
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
  "name": "Pulsa Plus",
  "description": "Professional digital services and solutions",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://pulsaplus.co.id",
  "contactPhone": "+62-895-0233-3331",
  "publisher": {
    "@type": "Organization",
    "name": "Pulsa Plus"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://pulsaplus.co.id"}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Pulsa Plus",
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
  "downloadUrl": process.env.NEXT_PUBLIC_APK_URL || "https://play.google.com/store/apps/details?id=com.otoreport.apkPulsa Plusreload"
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Services",
  "description": "Professional digital services and solutions",
  "provider": {
    "@type": "Organization",
    "name": "Pulsa Plus"
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
