'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faMoneyBillWave, faBolt } from "@fortawesome/free-solid-svg-icons";

export function HargaClient() {
  const priceIframeUrl = process.env.NEXT_PUBLIC_PRICE_IFRAME_URL;
  const appURL = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-[length:200%_100%] animate-gradient-x rounded-2xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Harga</h1>
          <p className="text-white/90 text-lg">
            Daftar harga produk Pulsa Plus terlengkap dan termurah
          </p>
        </div>

        {/* Price List Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {priceIframeUrl ? (
            <iframe
              src={priceIframeUrl}
              className="w-full border-0"
              style={{ minHeight: '800px', height: '100vh' }}
              title="Daftar Harga Pulsa Plus"
            />
          ) : (
            <div className="text-center py-12 px-4">
              <p className="text-red-600 mb-2">URL daftar harga tidak tersedia</p>
              <p className="text-gray-600 text-sm">Silakan hubungi customer service</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faMobileAlt} className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Update Real-time</h3>
            <p className="text-sm text-gray-600">Harga selalu update mengikuti kondisi pasar</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faMoneyBillWave} className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Harga Termurah</h3>
            <p className="text-sm text-gray-600">Dapatkan harga terbaik untuk semua produk</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faBolt} className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Transaksi Cepat</h3>
            <p className="text-sm text-gray-600">Proses transaksi dalam hitungan detik</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-[length:200%_100%] animate-gradient-x rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tertarik untuk Bergabung?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Download aplikasi Pulsa Plus sekarang dan nikmati kemudahan transaksi
          </p>
          <a
            href={appURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-blue-600 font-medium hover:bg-gray-100 transition-colors"
          >
            Download Aplikasi
          </a>
        </div>
      </div>
    </div>
  );
}

