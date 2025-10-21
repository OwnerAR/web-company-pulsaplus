'use client'

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDownload, 
  faMobile, 
  faDesktop, 
  faCheckCircle,
  faStar,
  faUsers,
  faClock,
  faShield
} from "@fortawesome/free-solid-svg-icons";
import { 
  faAndroid, 
  faApple, 
  faGooglePlay 
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { MobileApp, AppDownloadLinks } from "@/types";

export function AplikasiMobileClient() {
  // Get download links from environment variables
  const appUrls = {
    adzkaReload: process.env.NEXT_PUBLIC_ADZKA_RELOAD_APK_URL || '#',
    pastiCuan: process.env.NEXT_PUBLIC_PASTI_CUAN_APK_URL || '#',
    aplikasiku: process.env.NEXT_PUBLIC_APLIKASIKU_APK_URL || '#',
    agenPulsa: process.env.NEXT_PUBLIC_AGEN_PULSA_APK_URL || '#',
    instaPulsa: process.env.NEXT_PUBLIC_INSTAPULSA_APK_URL || '#',
    jeniusPayment: process.env.NEXT_PUBLIC_JENIUS_PAYMENT_APK_URL || '#',
    alfaPulsa: process.env.NEXT_PUBLIC_ALFA_PULSA_APK_URL || '#',
    detikPay: process.env.NEXT_PUBLIC_DETIK_PAY_APK_URL || '#',
    azkiyaPayment: process.env.NEXT_PUBLIC_AZKIYA_PAYMENT_APK_URL || '#',
    izdihaarPayment: process.env.NEXT_PUBLIC_IZDIHAAR_PAYMENT_APK_URL || '#',
    helloPayment: process.env.NEXT_PUBLIC_HELLO_PAYMENT_APK_URL || '#',
    deraPayment: process.env.NEXT_PUBLIC_DERA_PAYMENT_APK_URL || '#',
    arliPayment: process.env.NEXT_PUBLIC_ARLI_PAYMENT_APK_URL || '#',
    sentraPulsa: process.env.NEXT_PUBLIC_SENTRA_PULSA_APK_URL || '#',
    opKomunika: process.env.NEXT_PUBLIC_OP_KOMUNIKA_PULSA_INDONESIA_APK_URL || '#',
    ray: process.env.NEXT_PUBLIC_RAY_APK_URL || '#'
  };
  const versionApk = {
    adzkaReload: process.env.NEXT_PUBLIC_ADZKA_RELOAD_VERSION_APK || '2.1.0',
    pastiCuan: process.env.NEXT_PUBLIC_PASTI_CUAN_VERSION_APK || '1.5.2',
    aplikasiku: process.env.NEXT_PUBLIC_APLIKASIKU_VERSION_APK || '3.0.1',
    agenPulsa: process.env.NEXT_PUBLIC_AGEN_PULSA_VERSION_APK || '2.3.0',
    instaPulsa: process.env.NEXT_PUBLIC_INSTAPULSA_VERSION_APK || '1.8.5',
    jeniusPayment: process.env.NEXT_PUBLIC_JENIUS_PAYMENT_VERSION_APK || '2.0.3',
    alfaPulsa: process.env.NEXT_PUBLIC_ALFA_PULSA_VERSION_APK || '1.9.2',
    detikPay: process.env.NEXT_PUBLIC_DETIK_PAY_VERSION_APK || '1.7.4',
    azkiyaPayment: process.env.NEXT_PUBLIC_AZKIYA_PAYMENT_VERSION_APK || '1.6.3',
    izdihaarPayment: process.env.NEXT_PUBLIC_IZDIHAAR_PAYMENT_VERSION_APK || '2.2.1',
    helloPayment: process.env.NEXT_PUBLIC_HELLO_PAYMENT_VERSION_APK || '1.4.8',
    deraPayment: process.env.NEXT_PUBLIC_DERA_PAYMENT_VERSION_APK || '1.8.2',
    arliPayment: process.env.NEXT_PUBLIC_ARLI_PAYMENT_VERSION_APK || '2.1.5',
    sentraPulsa: process.env.NEXT_PUBLIC_SENTRA_PULSA_VERSION_APK || '1.9.7',
    opKomunika: process.env.NEXT_PUBLIC_OP_KOMUNIKA_PULSA_INDONESIA_VERSION_APK || '3.1.2',
    ray: process.env.NEXT_PUBLIC_RAY_VERSION_APK || '2.5.0'
  }

  // App data based on environment variables
  const apps: MobileApp[] = [
    {
      id: 'adzka-reload',
      name: 'Adzka Reload',
      description: 'Aplikasi mobile untuk transaksi pulsa, paket data, dan layanan digital lainnya dengan kemudahan dan keamanan terjamin.',
      version: versionApk.adzkaReload,
      size: '45 MB',
      icon: '/images/logo-adzka-reload.png',
      screenshots: ['/images/section-hero-adzka-reload-1.png', '/images/section-hero-adzka-reload-2.png', '/images/section-hero-adzka-reload-3.png'],
      features: ['Transaksi Pulsa & Paket Data', 'Pembayaran Tagihan', 'Top Up E-Wallet', 'Transfer & Jual Pulsa', 'Riwayat Transaksi Lengkap', 'Notifikasi Real-time'],
      downloadLinks: { android: appUrls.adzkaReload },
      downloadApkUrlRaw: `https://r2.adzka.co.id/adzka-reload/adzkareload${versionApk.adzkaReload}.apk`,
      requirements: { android: 'Android 6.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'pasti-cuan',
      name: 'Pasti Cuan',
      description: 'Aplikasi untuk transaksi digital dengan sistem keamanan tinggi dan kemudahan penggunaan.',
      version: versionApk.pastiCuan,
      size: '38 MB',
      icon: '/images/logo-pasti-cuan.png',
      screenshots: ['/images/section-hero-pasti-cuan-1.png', '/images/section-hero-pasti-cuan-2.png', '/images/section-hero-pasti-cuan-3.png'],
      features: ['Transaksi Digital', 'Keamanan Tinggi', 'Interface User Friendly', 'Riwayat Transaksi', 'Support 24/7'],
      downloadLinks: { android: appUrls.pastiCuan },
      downloadApkUrlRaw: `https://r2.adzka.co.id/pasti-cuan/pasticuan${versionApk.pastiCuan}.apk`,
      requirements: { android: 'Android 5.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'aplikasiku',
      name: 'Aplikasiku',
      description: 'Platform digital untuk berbagai layanan transaksi dengan fitur lengkap dan mudah digunakan.',
      version: versionApk.aplikasiku,
      size: '52 MB',
      icon: '/images/logo-aplikasiku.png',
      screenshots: ['/images/section-hero-aplikasiku-1.png', '/images/section-hero-aplikasiku-2.png', '/images/section-hero-aplikasiku-3.png'],
      features: ['Multi Platform', 'Fitur Lengkap', 'Interface Modern', 'Keamanan Data', 'Update Otomatis'],
      downloadLinks: { android: appUrls.aplikasiku },
      downloadApkUrlRaw: `https://r2.adzka.co.id/aplikasiku/aplikasiku${versionApk.aplikasiku}.apk`,
      requirements: { android: 'Android 7.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'agen-pulsa',
      name: 'Agen Pulsa',
      description: 'Aplikasi khusus untuk agen pulsa dengan fitur manajemen transaksi dan laporan keuangan.',
      version: versionApk.agenPulsa,
      size: '41 MB',
      icon: '/images/logo-agen-pulsa.png',
      screenshots: ['/images/section-hero-agen-pulsa-1.png', '/images/section-hero-agen-pulsa-2.png', '/images/section-hero-agen-pulsa-3.png'],
      features: ['Manajemen Agen', 'Laporan Keuangan', 'Transaksi Pulsa', 'Komisi Otomatis', 'Dashboard Analytics'],
      downloadLinks: { android: appUrls.agenPulsa },
      downloadApkUrlRaw: `https://r2.adzka.co.id/agen-pulsa/agenpulsa${versionApk.agenPulsa}.apk`,
      requirements: { android: 'Android 6.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'insta-pulsa',
      name: 'Insta Pulsa',
      description: 'Aplikasi transaksi pulsa instan dengan proses cepat dan aman untuk kebutuhan sehari-hari.',
      version: versionApk.instaPulsa,
      size: '35 MB',
      icon: '/images/logo-insta-pulsa.png',
      screenshots: ['/images/section-hero-insta-pulsa-1.png', '/images/section-hero-insta-pulsa-2.png', '/images/section-hero-insta-pulsa-3.png'],
      features: ['Transaksi Instan', 'Proses Cepat', 'Keamanan Tinggi', 'Multi Provider', 'Riwayat Lengkap'],
      downloadLinks: { android: appUrls.instaPulsa },
      downloadApkUrlRaw: `https://r2.adzka.co.id/insta-pulsa/instapulsa${versionApk.instaPulsa}.apk`,
      requirements: { android: 'Android 5.1 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'jenius-payment',
      name: 'Jenius Payment',
      description: 'Aplikasi pembayaran digital dengan integrasi sistem keuangan modern dan aman.',
      version: versionApk.jeniusPayment,
      size: '48 MB',
      icon: '/images/logo-jenius-payment.png',
      screenshots: ['/images/section-hero-jenius-payment-1.png', '/images/section-hero-jenius-payment-2.png', '/images/section-hero-jenius-payment-3.png'],
      features: ['Pembayaran Digital', 'Integrasi Keuangan', 'Keamanan Bank Grade', 'Multi Metode', 'Real-time Processing'],
      downloadLinks: { android: appUrls.jeniusPayment },
      downloadApkUrlRaw: `https://r2.adzka.co.id/jenius-payment/jeniuspayment${versionApk.jeniusPayment}.apk`,
      requirements: { android: 'Android 8.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'alfa-pulsa',
      name: 'Alfa Pulsa',
      description: 'Aplikasi transaksi pulsa dengan sistem alfa yang memberikan kemudahan dan kecepatan.',
      version: versionApk.alfaPulsa,
      size: '39 MB',
      icon: '/images/logo-alfa-pulsa.png',
      screenshots: ['/images/section-hero-alfa-pulsa-1.png', '/images/section-hero-alfa-pulsa-2.png', '/images/section-hero-alfa-pulsa-3.png'],
      features: ['Sistem Alfa', 'Transaksi Cepat', 'Interface Sederhana', 'Multi Provider', 'Backup Data'],
      downloadLinks: { android: appUrls.alfaPulsa },
      downloadApkUrlRaw: `https://r2.adzka.co.id/alfa-pulsa/alfapulsa${versionApk.alfaPulsa}.apk`,
      requirements: { android: 'Android 6.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'detik-pay',
      name: 'Detik Pay',
      description: 'Aplikasi pembayaran dengan proses super cepat dalam hitungan detik untuk efisiensi maksimal.',
      version: versionApk.detikPay,
      size: '43 MB',
      icon: '/images/logo-detik-pay.png',
      screenshots: ['/images/section-hero-detik-pay-1.png', '/images/section-hero-detik-pay-2.png', '/images/section-hero-detik-pay-3.png'],
      features: ['Proses Detik', 'Efisiensi Maksimal', 'Keamanan Tinggi', 'Multi Transaksi', 'Monitoring Real-time'],
      downloadLinks: { android: appUrls.detikPay },
      downloadApkUrlRaw: `https://r2.adzka.co.id/detik-pay/detikpay${versionApk.detikPay}.apk`,
      requirements: { android: 'Android 7.1 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'azkiya-payment',
      name: 'Azkiya Payment',
      description: 'Aplikasi pembayaran digital dengan sistem keamanan terdepan dan kemudahan transaksi.',
      version: versionApk.azkiyaPayment,
      size: '46 MB',
      icon: '/images/logo-azkiya-payment.png',
      screenshots: ['/images/section-hero-azkiya-payment-1.png', '/images/section-hero-azkiya-payment-2.png', '/images/section-hero-azkiya-payment-3.png'],
      features: ['Keamanan Terdepan', 'Transaksi Mudah', 'Multi Metode', 'Real-time Processing', 'Backup Otomatis'],
      downloadLinks: { android: appUrls.azkiyaPayment },
      downloadApkUrlRaw: `https://r2.adzka.co.id/azkiya-payment/azkiyapayment${versionApk.azkiyaPayment}.apk`,
      requirements: { android: 'Android 6.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'izdihaar-payment',
      name: 'Izdihaar Payment',
      description: 'Platform pembayaran dengan fitur lengkap untuk berbagai kebutuhan transaksi digital.',
      version: versionApk.izdihaarPayment,
      size: '49 MB',
      icon: '/images/logo-izdihaar-payment.png',
      screenshots: ['/images/section-hero-izdihaar-payment-1.png', '/images/section-hero-izdihaar-payment-2.png', '/images/section-hero-izdihaar-payment-3.png'],
      features: ['Fitur Lengkap', 'Multi Platform', 'Keamanan Tinggi', 'Interface Modern', 'Support 24/7'],
      downloadLinks: { android: appUrls.izdihaarPayment },
      downloadApkUrlRaw: `https://r2.adzka.co.id/izdihaar-payment/izdihaarpayment${versionApk.izdihaarPayment}.apk`,
      requirements: { android: 'Android 7.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'hello-payment',
      name: 'Hello Payment',
      description: 'Aplikasi pembayaran dengan interface ramah pengguna dan proses transaksi yang mudah.',
      version: versionApk.helloPayment,
      size: '37 MB',
      icon: '/images/logo-hello-payment.png',
      screenshots: ['/images/section-hero-hello-payment-1.png', '/images/section-hero-hello-payment-2.png', '/images/section-hero-hello-payment-3.png'],
      features: ['Interface Ramah', 'Proses Mudah', 'Keamanan Data', 'Multi Transaksi', 'Riwayat Lengkap'],
      downloadLinks: { android: appUrls.helloPayment },
      downloadApkUrlRaw: `https://r2.adzka.co.id/hello-payment/hellopayment${versionApk.helloPayment}.apk`,
      requirements: { android: 'Android 5.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'dera-payment',
      name: 'Dera Payment',
      description: 'Aplikasi pembayaran dengan sistem keamanan tinggi dan kemudahan akses untuk semua kalangan.',
      version: versionApk.deraPayment,
      size: '44 MB',
      icon: '/images/logo-dera-payment.png',
      screenshots: ['/images/section-hero-dera-payment-1.png', '/images/section-hero-dera-payment-2.png', '/images/section-hero-dera-payment-3.png'],
      features: ['Keamanan Tinggi', 'Akses Mudah', 'Multi Kalangan', 'Transaksi Cepat', 'Monitoring Real-time'],
      downloadLinks: { android: appUrls.deraPayment },
      downloadApkUrlRaw: `https://r2.adzka.co.id/dera-payment/derapayment${versionApk.deraPayment}.apk`,
      requirements: { android: 'Android 6.1 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'arli-payment',
      name: 'Arli Payment',
      description: 'Platform pembayaran digital dengan teknologi terbaru untuk pengalaman transaksi terbaik.',
      version: versionApk.arliPayment,
      size: '51 MB',
      icon: '/images/logo-arli-payment.png',
      screenshots: ['/images/section-hero-arli-payment-1.png', '/images/section-hero-arli-payment-2.png', '/images/section-hero-arli-payment-3.png'],
      features: ['Teknologi Terbaru', 'Pengalaman Terbaik', 'Keamanan Bank Grade', 'Multi Platform', 'Update Otomatis'],
      downloadLinks: { android: appUrls.arliPayment },
      downloadApkUrlRaw: `https://r2.adzka.co.id/arli-payment/arlipayment${versionApk.arliPayment}.apk`,
      requirements: { android: 'Android 8.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'sentra-pulsa',
      name: 'Sentra Pulsa',
      description: 'Aplikasi pusat transaksi pulsa dengan sistem terintegrasi dan kemudahan manajemen.',
      version: versionApk.sentraPulsa,
      size: '42 MB',
      icon: '/images/logo-sentra-pulsa.png',
      screenshots: ['/images/section-hero-sentra-pulsa-1.png', '/images/section-hero-sentra-pulsa-2.png', '/images/section-hero-sentra-pulsa-3.png'],
      features: ['Pusat Transaksi', 'Sistem Terintegrasi', 'Manajemen Mudah', 'Multi Provider', 'Dashboard Lengkap'],
      downloadLinks: { android: appUrls.sentraPulsa },
      downloadApkUrlRaw: `https://r2.adzka.co.id/sentra-pulsa/sentrapulsa${versionApk.sentraPulsa}.apk`,
      requirements: { android: 'Android 6.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'op-komunika',
      name: 'OP Komunika Pulsa Indonesia',
      description: 'Aplikasi komunikasi dan transaksi pulsa dengan fitur lengkap untuk kebutuhan bisnis.',
      version: versionApk.opKomunika,
      size: '55 MB',
      icon: '/images/logo-op-komunika.png',
      screenshots: ['/images/section-hero-op-komunika-1.png', '/images/section-hero-op-komunika-2.png', '/images/section-hero-op-komunika-3.png'],
      features: ['Komunikasi Bisnis', 'Transaksi Lengkap', 'Fitur Bisnis', 'Multi Platform', 'Analytics Detail'],
      downloadLinks: { android: appUrls.opKomunika },
      downloadApkUrlRaw: `https://r2.adzka.co.id/op-komunika/opkomunikapulsa${versionApk.opKomunika}.apk`,
      requirements: { android: 'Android 7.0 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    },
    {
      id: 'ray',
      name: 'Ray',
      description: 'Aplikasi transaksi digital dengan teknologi canggih dan keamanan terjamin untuk semua kebutuhan.',
      version: versionApk.ray,
      size: '47 MB',
      icon: '/images/logo-ray.png',
      screenshots: ['/images/section-hero-ray-1.png', '/images/section-hero-ray-2.png', '/images/section-hero-ray-3.png'],
      features: ['Teknologi Canggih', 'Keamanan Terjamin', 'Multi Kebutuhan', 'Interface Modern', 'Performance Tinggi'],
      downloadLinks: { android: appUrls.ray },
      downloadApkUrlRaw: `https://r2.adzka.co.id/ray/ray${versionApk.ray}.apk`,
      requirements: { android: 'Android 7.1 atau lebih tinggi' },
      lastUpdated: new Date().toISOString(),
      developer: 'Adzka Media Indoperkasa'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Aplikasi Mobile Kami
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Download aplikasi mobile kami untuk pengalaman terbaik dalam menggunakan layanan digital
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                <span>10K+ Downloads</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <FontAwesomeIcon icon={faShield} className="mr-2" />
                <span>100% Secure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Listing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* App Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <Image
                          src={app.icon}
                          alt={app.name}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{app.name}</h3>
                        <p className="text-gray-600">v{app.version} • {app.size}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{app.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4" />
                        <span>Updated: {new Date(app.lastUpdated).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FontAwesomeIcon icon={faUsers} className="mr-2 w-4 h-4" />
                        <span>Developer: {app.developer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Screenshots */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold mb-4">Screenshots</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {app.screenshots.map((screenshot, idx) => (
                        <div key={idx} className="aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
                          <Image
                            src={screenshot}
                            alt={`${app.name} screenshot ${idx + 1}`}
                            width={200}
                            height={350}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features & Download */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold mb-4">Features</h4>
                    <div className="space-y-2 mb-6">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <FontAwesomeIcon 
                            icon={faCheckCircle} 
                            className="text-green-500 mr-2 w-4 h-4 flex-shrink-0" 
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Download Buttons */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold mb-3">Download</h4>
                      
                      {app.downloadLinks.android && (
                        <Link
                          href={app.downloadLinks.android}
                          target="_blank"
                          className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon icon={faGooglePlay} className="mr-2 w-5 h-5" />
                          <span>Google Play Store</span>
                        </Link>
                      )}
                      {app.downloadApkUrlRaw && (
                        <Link
                          href={app.downloadApkUrlRaw}
                          target="_blank"
                          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon icon={faDownload} className="mr-2 w-5 h-5" />
                          <span>Download APK</span>
                        </Link>
                      )}
                      {app.downloadLinks.ios && (
                        <Link
                          href={app.downloadLinks.ios}
                          target="_blank"
                          className="flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon icon={faApple} className="mr-2 w-5 h-5" />
                          <span>App Store</span>
                        </Link>
                      )}
                      
                      {app.downloadLinks.apk && (
                        <Link
                          href={app.downloadLinks.apk}
                          target="_blank"
                          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon icon={faDownload} className="mr-2 w-5 h-5" />
                          <span>Download APK</span>
                        </Link>
                      )}
                    </div>

                    {/* Requirements */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">System Requirements</h4>
                      <div className="space-y-2 text-sm">
                        {app.requirements.android && (
                          <div className="flex items-center">
                            <FontAwesomeIcon icon={faAndroid} className="mr-2 w-4 h-4 text-green-600" />
                            <span className="text-gray-700">{app.requirements.android}</span>
                          </div>
                        )}
                        {app.requirements.ios && (
                          <div className="flex items-center">
                            <FontAwesomeIcon icon={faApple} className="mr-2 w-4 h-4 text-gray-600" />
                            <span className="text-gray-700">{app.requirements.ios}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Siap untuk memulai?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download aplikasi kami sekarang dan nikmati kemudahan layanan digital
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {appUrls.adzkaReload && (
                <Link
                  href={appUrls.adzkaReload}
                  target="_blank"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                  Adzka Reload
                </Link>
              )}
              {appUrls.pastiCuan && (
                <Link
                  href={appUrls.pastiCuan}
                  target="_blank"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                  Pasti Cuan
                </Link>
              )}
              {appUrls.aplikasiku && (
                <Link
                  href={appUrls.aplikasiku}
                  target="_blank"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                  Aplikasiku
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Installation Guide Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Panduan Download Aplikasi Resmi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FontAwesomeIcon icon={faShield} className="text-blue-600 mr-2" />
                  Keamanan Android
                </h4>
                <p className="text-gray-700">
                  Android memiliki sistem keamanan bawaan yang melindungi perangkat dari aplikasi berbahaya. 
                  Semua aplikasi kami tersedia di Google Play Store resmi untuk keamanan maksimal.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
                  Download Aplikasi Resmi
                </h4>
                <p className="text-gray-700">
                  Semua aplikasi kami tersedia di Google Play Store resmi. Download langsung dari Play Store untuk keamanan dan kemudahan penggunaan.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">
                Cara Download Aplikasi Resmi:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-green-800">
                <li>Buka <strong>Google Play Store</strong> di perangkat Android</li>
                <li>Cari nama aplikasi yang diinginkan (contoh: &quot;Adzka Reload&quot;)</li>
                <li>Pastikan aplikasi resmi dari developer &quot;Adzka Media Indoperkasa&quot;</li>
                <li>Klik <strong>&quot;Install&quot;</strong> untuk download dan install</li>
                <li>Tunggu proses download dan install selesai</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
