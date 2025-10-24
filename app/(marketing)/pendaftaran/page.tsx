import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faMoneyBillWave, faBolt } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Pendaftaran',
};

export default function PendaftaranPage() {
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-[length:200%_100%] animate-gradient-x rounded-2xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pendaftaran</h1>
          <p className="text-white/90 text-lg">
            Daftar menjadi member Pulsa Plus dan nikmati kemudahan transaksi
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 border mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Form Pendaftaran</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  id="telepon"
                  name="telepon"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              
              <div>
                <label htmlFor="kota" className="block text-sm font-medium text-gray-700 mb-2">
                  Kota *
                </label>
                <input
                  type="text"
                  id="kota"
                  name="kota"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan kota"
                />
              </div>
            </div>

            <div>
              <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Lengkap *
              </label>
              <textarea
                id="alamat"
                name="alamat"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan alamat lengkap"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan username"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan password"
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="syarat"
                name="syarat"
                required
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="syarat" className="ml-2 text-sm text-gray-600">
                Saya setuju dengan <a href="#" className="text-blue-600 hover:underline">Syarat dan Ketentuan</a> yang berlaku *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Daftar Sekarang
            </button>
          </form>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faGift} className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Bonus Selamat Datang</h3>
            <p className="text-sm text-gray-600">
              Dapatkan bonus saldo Rp 5.000 untuk member baru
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faMoneyBillWave} className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Harga Terbaik</h3>
            <p className="text-sm text-gray-600">
              Nikmati harga pulsa dan kuota yang kompetitif
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faBolt} className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Transaksi Cepat</h3>
            <p className="text-sm text-gray-600">
              Proses transaksi dalam hitungan detik
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12">
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
