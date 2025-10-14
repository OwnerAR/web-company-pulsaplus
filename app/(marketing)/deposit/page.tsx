import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faWallet, faStore } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Deposit',
};

export default function DepositPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Deposit</h1>
          <p className="text-white/90 text-lg">
            Top up saldo Adzka Reload dengan mudah dan aman
          </p>
        </div>

        {/* Deposit Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                <FontAwesomeIcon icon={faUniversity} className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Transfer Bank</h3>
              <p className="text-sm text-gray-600 mb-4">
                Transfer melalui bank BCA, BRI, Mandiri, dan bank lainnya
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Deposit via Bank
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                <FontAwesomeIcon icon={faWallet} className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">E-Wallet</h3>
              <p className="text-sm text-gray-600 mb-4">
                Deposit melalui OVO, DANA, GoPay, dan e-wallet lainnya
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Deposit via E-Wallet
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                <FontAwesomeIcon icon={faStore} className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Alfamart</h3>
              <p className="text-sm text-gray-600 mb-4">
                Deposit melalui gerai Alfamart terdekat
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Deposit via Alfamart
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Informasi Deposit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Minimal Deposit</h3>
              <p className="text-gray-600">Rp 10.000</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Maksimal Deposit</h3>
              <p className="text-gray-600">Rp 10.000.000</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Biaya Admin</h3>
              <p className="text-gray-600">Gratis</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Proses</h3>
              <p className="text-gray-600">1x24 jam</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Bantuan?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Hubungi customer service kami untuk bantuan deposit
          </p>
          <a
            href="https://wa.me/6285888444608"
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
