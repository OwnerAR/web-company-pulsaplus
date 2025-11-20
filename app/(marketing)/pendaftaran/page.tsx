import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faMoneyBillWave, faBolt } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Pendaftaran',
};

export default function PendaftaranPage() {
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA;
  const formUrl = process.env.NEXT_PUBLIC_FORM_URL;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-[#2373B6] dark:bg-[#1e3a8a] rounded-2xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pendaftaran</h1>
          <p className="text-white/90 text-lg">
          Pendaftaran Khusus MK Kuota hanya 50 Orang, otomatis close jika sudah memenuhi Kuota
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-8 border dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Form Pendaftaran</h2>
          
          {/* Iframe Registration Form */}
          <div className="relative w-full" style={{ height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              style={{ 
                position: 'absolute', 
                height: '100%', 
                border: 'none',
                borderRadius: '8px'
              }}
              src={formUrl}
              title="Form Pendaftaran Pulsa Plus"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-6 text-center border dark:border-gray-700">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <FontAwesomeIcon icon={faGift} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Bonus Selamat Datang</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Dapatkan berbagai bonus selamat datang dari kami
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-6 text-center border dark:border-gray-700">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <FontAwesomeIcon icon={faMoneyBillWave} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Harga Terbaik</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Nikmati harga pulsa dan kuota yang kompetitif
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-6 text-center border dark:border-gray-700">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <FontAwesomeIcon icon={faBolt} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Transaksi Cepat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Proses transaksi dalam hitungan detik
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2373B6] dark:bg-[#1e3a8a] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Bantuan Pendaftaran?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Hubungi customer service kami untuk bantuan pendaftaran
          </p>
          <a
            href={`https://wa.me/${csWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-blue-600 font-medium hover:bg-gray-100 transition-colors"
          >
            Hubungi CS WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
