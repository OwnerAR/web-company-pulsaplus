import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faWallet, faStore } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Deposit',
};

export default function DepositPage() {
  const csWA = process.env.CONTACT_WA;

  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-[length:200%_100%] animate-gradient-x rounded-2xl p-8 sm:p-12 mb-12 text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Deposit</h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Top up saldo Adzka Reload dengan mudah dan aman
          </p>
        </div>

        {/* Deposit Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Transfer Bank */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-blue-200 group flex flex-col">
            <div className="text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-5 flex justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                    <FontAwesomeIcon icon={faUniversity} className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Transfer Bank</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Transfer melalui bank BCA, BRI, Mandiri, dan bank lainnya
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 font-medium shadow-sm hover:shadow">
                Deposit via Bank
              </button>
            </div>
          </div>

          {/* E-Wallet */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-blue-200 group flex flex-col">
            <div className="text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-5 flex justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                    <FontAwesomeIcon icon={faWallet} className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">E-Wallet</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Deposit melalui OVO, DANA, GoPay, dan e-wallet lainnya
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 font-medium shadow-sm hover:shadow">
                Deposit via E-Wallet
              </button>
            </div>
          </div>

          {/* Alfamart */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-blue-200 group md:col-span-2 lg:col-span-1 flex flex-col">
            <div className="text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-5 flex justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                    <FontAwesomeIcon icon={faStore} className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Retail</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Deposit melalui gerai Retail terdekat
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 font-medium shadow-sm hover:shadow">
                Deposit via Retail
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 mb-12 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">Informasi Deposit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center sm:text-left p-4 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Minimal Deposit</h3>
              <p className="text-2xl font-bold text-blue-600">Rp 10.000</p>
            </div>
            <div className="text-center sm:text-left p-4 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Maksimal Deposit</h3>
              <p className="text-2xl font-bold text-blue-600">Rp 10.000.000</p>
            </div>
            <div className="text-center sm:text-left p-4 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Biaya Admin</h3>
              <p className="text-2xl font-bold text-green-600">Gratis</p>
            </div>
            <div className="text-center sm:text-left p-4 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Proses</h3>
              <p className="text-2xl font-bold text-blue-600">Realtime</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-[length:200%_100%] animate-gradient-x rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Butuh Bantuan?
          </h2>
          <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Hubungi customer service kami untuk bantuan deposit
          </p>
          <a
            href={`https://wa.me/${csWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 sm:px-8 py-3 sm:py-4 text-blue-600 font-semibold hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Hubungi CS WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
