import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy - Pulsa Plus',
  description: 'Kebijakan privasi Pulsa Plus - Perlindungan data pribadi dan informasi pengguna.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-[#2373B6] dark:bg-[#1e3a8a] rounded-2xl p-8 sm:p-12 mb-12 text-center shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/90 text-base sm:text-lg">
              Kebijakan Privasi Pulsa Plus
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Pengenalan</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Pulsa Plus (&quot;kami&quot;, &quot;kita&quot;, &quot;perusahaan&quot;) menghormati privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">2.1 Informasi yang Anda Berikan</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Informasi akun dan profil</li>
                    <li>Data transaksi dan pembayaran</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">2.2 Informasi yang Dikumpulkan Otomatis</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Data penggunaan website</li>
                    <li>Cookies dan teknologi serupa</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Penggunaan Informasi</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Menyediakan dan meningkatkan layanan kami</li>
                  <li>Memproses transaksi dan pembayaran</li>
                  <li>Mengirim notifikasi dan komunikasi penting</li>
                  <li>Menganalisis penggunaan website untuk perbaikan</li>
                  <li>Mematuhi kewajiban hukum</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Perlindungan Data</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kami menerapkan langkah-langkah keamanan yang tepat untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Ini termasuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Enkripsi data dalam transmisi dan penyimpanan</li>
                  <li>Kontrol akses yang ketat</li>
                  <li>Pemantauan keamanan berkelanjutan</li>
                  <li>Pelatihan keamanan untuk staf</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Berbagi Informasi</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam situasi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Dengan persetujuan eksplisit Anda</li>
                  <li>Untuk mematuhi kewajiban hukum</li>
                  <li>Dengan penyedia layanan tepercaya yang terikat kontrak kerahasiaan</li>
                  <li>Dalam situasi darurat untuk melindungi keselamatan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Hak Anda</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                  <li>Meminta koreksi data yang tidak akurat</li>
                  <li>Meminta penghapusan data pribadi Anda</li>
                  <li>Menolak pemrosesan data untuk tujuan tertentu</li>
                  <li>Meminta portabilitas data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Perubahan Kebijakan</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email. Penggunaan berkelanjutan layanan kami setelah perubahan dianggap sebagai persetujuan Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Kontak</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> support@pulsaplus.co.id<br/>
                    <strong>Telepon:</strong> +62-889-7001-0000<br/>
                    <strong>Alamat:</strong> Jl. Sawah Luhur , Kasemen Serang, Banten
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
