import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service - Pulsa Plus',
  description: 'Syarat dan ketentuan layanan Pulsa Plus - Aturan penggunaan platform dan layanan digital.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
                <p className="text-gray-700 mb-4">
                  Dengan mengakses dan menggunakan layanan Pulsa Plus (&quot;Layanan&quot;), Anda menyetujui untuk terikat oleh syarat dan ketentuan ini (&quot;Syarat&quot;). Jika Anda tidak menyetujui syarat ini, harap tidak menggunakan Layanan kami.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Deskripsi Layanan</h2>
                <p className="text-gray-700 mb-4">
                  Pulsa Plus menyediakan layanan digital termasuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Transaksi pulsa dan paket data</li>
                  <li>Layanan pembayaran digital</li>
                  <li>Aplikasi mobile untuk berbagai kebutuhan</li>
                  <li>API dan integrasi sistem</li>
                  <li>Konsultasi teknologi</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Penggunaan yang Diizinkan</h2>
                <p className="text-gray-700 mb-4">
                  Anda dapat menggunakan Layanan kami untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Transaksi pribadi yang sah</li>
                  <li>Penggunaan komersial dengan izin tertulis</li>
                  <li>Integrasi dengan sistem yang kompatibel</li>
                  <li>Tujuan yang tidak melanggar hukum</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Penggunaan yang Dilarang</h2>
                <p className="text-gray-700 mb-4">
                  Anda dilarang menggunakan Layanan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Aktivitas ilegal atau melanggar hukum</li>
                  <li>Transaksi yang mencurigakan atau penipuan</li>
                  <li>Spam atau komunikasi yang tidak diinginkan</li>
                  <li>Mengganggu atau merusak sistem</li>
                  <li>Pelanggaran hak kekayaan intelektual</li>
                  <li>Penyebaran malware atau virus</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Akun dan Keamanan</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">5.1 Registrasi Akun</h3>
                  <p className="text-gray-700 mb-4">
                    Untuk menggunakan layanan tertentu, Anda harus membuat akun dengan informasi yang akurat dan lengkap. Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun Anda.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">5.2 Keamanan Akun</h3>
                  <p className="text-gray-700 mb-4">
                    Anda bertanggung jawab untuk semua aktivitas yang terjadi di bawah akun Anda. Segera laporkan penggunaan yang tidak sah kepada kami.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Pembayaran dan Billing</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Semua transaksi harus dibayar sesuai dengan ketentuan yang berlaku</li>
                  <li>Harga dapat berubah dengan pemberitahuan sebelumnya</li>
                  <li>Pembayaran yang gagal dapat mengakibatkan penangguhan layanan</li>
                  <li>Refund akan diproses sesuai dengan kebijakan yang berlaku</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Kekayaan Intelektual</h2>
                <p className="text-gray-700 mb-4">
                  Semua konten, fitur, dan fungsionalitas Layanan adalah milik Pulsa Plus dan dilindungi oleh hukum hak cipta, merek dagang, dan kekayaan intelektual lainnya. Anda tidak boleh:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Menyalin, memodifikasi, atau mendistribusikan konten kami</li>
                  <li>Menggunakan merek dagang atau logo kami tanpa izin</li>
                  <li>Membuat karya turunan dari Layanan kami</li>
                  <li>Menggunakan teknologi kami untuk produk kompetitif</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Batasan Tanggung Jawab</h2>
                <p className="text-gray-700 mb-4">
                  Layanan kami disediakan &quot;sebagaimana adanya&quot;. Kami tidak menjamin bahwa Layanan akan:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Bebas dari kesalahan atau gangguan</li>
                  <li>Selalu tersedia atau tidak terputus</li>
                  <li>Memenuhi kebutuhan spesifik Anda</li>
                  <li>Kompatibel dengan semua sistem</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Penghentian Layanan</h2>
                <p className="text-gray-700 mb-4">
                  Kami berhak menghentikan atau menangguhkan akses Anda ke Layanan jika:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Anda melanggar Syarat ini</li>
                  <li>Terjadi aktivitas yang mencurigakan</li>
                  <li>Diminta oleh otoritas yang berwenang</li>
                  <li>Untuk keamanan sistem</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Perubahan Syarat</h2>
                <p className="text-gray-700 mb-4">
                  Kami dapat memperbarui Syarat ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email. Penggunaan berkelanjutan Layanan setelah perubahan dianggap sebagai persetujuan Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Hukum yang Berlaku</h2>
                <p className="text-gray-700 mb-4">
                  Syarat ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui pengadilan yang berwenang di Jakarta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Kontak</h2>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat Layanan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@pulsaplus.co.id<br/>
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
