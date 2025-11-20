import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FAQ - Pertanyaan Umum - Pulsa Plus',
  description: 'Pertanyaan umum dan jawaban seputar layanan Pulsa Plus, aplikasi mobile, transaksi pulsa, dan paket data.',
  keywords: ['FAQ', 'pertanyaan umum', 'bantuan', 'Pulsa Plus', 'pulsa', 'paket data', 'aplikasi mobile'],
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  const faqData = [
    {
      category: "Aplikasi Mobile",
      questions: [
        {
          question: "Bagaimana cara download aplikasi Pulsa Plus?",
          answer: "Anda bisa download aplikasi Pulsa Plus melalui Google Play Store. Cari 'Pulsa Plus' atau aplikasi lainnya dari developer 'Pulsa Plus'. Pastikan download dari sumber resmi untuk keamanan."
        },
        {
          question: "Apakah aplikasi Pulsa Plus gratis?",
          answer: "Ya, semua aplikasi Pulsa Plus tersedia gratis di Google Play Store. Tidak ada biaya download atau registrasi untuk menggunakan aplikasi kami."
        },
        {
          question: "Aplikasi Pulsa Plus mendukung Android versi berapa?",
          answer: "Aplikasi Pulsa Plus mendukung Android 5.0 (API level 21) ke atas. Pastikan perangkat Anda memiliki versi Android yang kompatibel untuk pengalaman terbaik."
        }
      ]
    },
    {
      category: "Transaksi Pulsa & Paket Data",
      questions: [
        {
          question: "Bagaimana cara melakukan transaksi pulsa?",
          answer: "Login ke aplikasi Pulsa Plus, pilih menu 'Pulsa', masukkan nomor tujuan, pilih nominal pulsa, lalu lakukan pembayaran. Transaksi akan diproses dalam hitungan detik."
        },
        {
          question: "Apakah ada batas minimum transaksi?",
          answer: "Batas minimum transaksi pulsa adalah Rp 5.000 dan maksimal Rp 1.000.000 per transaksi. Untuk paket data, batas minimum Rp 10.000."
        },
        {
          question: "Berapa lama waktu proses transaksi?",
          answer: "Transaksi pulsa dan paket data biasanya diproses dalam 1-5 menit. Jika lebih dari 10 menit, silakan hubungi customer service untuk bantuan."
        }
      ]
    },
    {
      category: "Pembayaran & Billing",
      questions: [
        {
          question: "Metode pembayaran apa saja yang tersedia?",
          answer: "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, DANA, GoPay), dan kartu kredit/debit. Semua transaksi aman dan terenkripsi."
        },
        {
          question: "Bagaimana cara cek saldo?",
          answer: "Login ke aplikasi Pulsa Plus, pilih menu 'Saldo' atau 'Profil' untuk melihat saldo terkini. Saldo akan terupdate real-time setelah setiap transaksi."
        },
        {
          question: "Apakah ada biaya admin untuk transaksi?",
          answer: "Tidak ada biaya admin tambahan. Harga yang tertera adalah harga final yang akan Anda bayar. Kami transparan dalam semua biaya."
        }
      ]
    },
    {
      category: "Akun & Keamanan",
      questions: [
        {
          question: "Bagaimana cara daftar akun baru?",
          answer: "Download aplikasi Pulsa Plus, buka aplikasi, pilih 'Daftar', isi data yang diperlukan (nama, email, nomor HP), verifikasi melalui SMS, dan akun siap digunakan."
        },
        {
          question: "Bagaimana jika lupa password?",
          answer: "Di halaman login, pilih 'Lupa Password', masukkan email atau nomor HP yang terdaftar, ikuti instruksi reset password yang dikirim via SMS atau email."
        },
        {
          question: "Apakah data pribadi saya aman?",
          answer: "Ya, kami menggunakan enkripsi SSL dan mengikuti standar keamanan internasional. Data pribadi Anda dilindungi dan tidak akan dibagikan kepada pihak ketiga."
        }
      ]
    },
    {
      category: "Customer Service",
      questions: [
        {
          question: "Jam operasional customer service?",
          answer: "Customer service kami tersedia 24/7 melalui WhatsApp. Respon biasanya dalam 5-15 menit pada jam kerja (08:00-17:00 WIB)."
        },
        {
          question: "Bagaimana cara menghubungi customer service?",
          answer: "Anda bisa menghubungi kami melalui WhatsApp di nomor yang tertera di website, atau melalui aplikasi Pulsa Plus di menu 'Bantuan'."
        },
        {
          question: "Apakah ada biaya untuk customer service?",
          answer: "Tidak ada biaya untuk menghubungi customer service. Layanan bantuan gratis untuk semua pengguna Pulsa Plus."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              FAQ - Pertanyaan Umum
            </h1>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan Pulsa Plus
            </p>
          </div>

          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Masih Ada Pertanyaan?
              </h2>
              <p className="text-gray-700 mb-6">
                Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim customer service kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_WA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Customer Service
                </a>
                <a
                  href="mailto:support@pulsaplus.co.id"
                  className="inline-flex items-center px-6 py-3 bg-[#2373B6] dark:bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
