'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Yolla Ghiena",
    role: "Pengguna Pulsa Plus",
    content: "Pulsa Plus jadi partner andalan saya buat jualan pulsa di rumah. Fiturnya simpel, harga bersaing, dan setiap transaksi terasa sat-set tanpa drama.",
  },
  {
    name: "Wartinah",
    role: "Pengguna Pulsa Plus",
    content: "Sejak gabung Pulsa Plus, saya bisa tambah pemasukan sambil tetap urus keluarga. Kalau ada kendala, CS-nya langsung sigap bantu sampai selesai.",
  },
  {
    name: "Akang Yanto",
    role: "Pengguna Pulsa Plus",
    content: "Aplikasinya ringan, harga produknya masuk akal. Yang paling bikin nagih itu respon komplainnya cepat, jadi pelanggan saya tetap puas.",
  },
  {
    name: "Boby I",
    role: "Pengguna Pulsa Plus",
    content: "Dulu harus ke konter buat isi saldo, sekarang bisa langsung dari genggaman. Transaksinya cepat, laporan penjualannya juga jelas.",
  },
  {
    name: "Susi Susanti",
    role: "Pengguna Pulsa Plus",
    content: "Saya senang karena katalog produknya lengkap, mulai dari pulsa sampai tagihan. Semua bisa saya tawarkan ke pelanggan tanpa ribet.",
  },
  {
    name: "Budi Santoso",
    role: "Pengguna Pulsa Plus",
    content: "Sudah tiga tahun pakai Pulsa Plus, saya belum kepikiran pindah. Fitur pencatatannya rapi, jadi gampang buat hitung keuntungan tiap bulan.",
  },
  {
    name: "Rini Rahmawati",
    role: "Pengguna Pulsa Plus",
    content: "Pulsa Plus bantu saya melayani pelanggan via WhatsApp tanpa telat. Sekali klik pesanan beres, saya bisa lanjut ke kerjaan lain.",
  },
  {
    name: "Dedi Sutrisno",
    role: "Pengguna Pulsa Plus",
    content: "Saya percaya sama Pulsa Plus karena servernya stabil. Orderan ramai menjelang gajian tetap lancar, tidak takut pending.",
  },
  {
    name: "Eka Prasetyo",
    role: "Pengguna Pulsa Plus",
    content: "Kalau butuh top up PPOB dadakan, Pulsa Plus selalu ready. Tinggal pilih produk, bayar, dan bukti transaksinya langsung terkirim.",
  },
  {
    name: "Fajar Widodo",
    role: "Pengguna Pulsa Plus",
    content: "Pulsa Plus membantu saya melayani pelanggan di tempat saya bekerja. Harga produknya bersaing, dan transaksinya cepat.",
  },
  {
    name: "Gita Putri",
    role: "Pengguna Pulsa Plus",
    content: "sebelum join Pulsa Plus, saya selalu ke konter buat isi pulsa. sekarang bisa langsung dari genggaman. Transaksinya cepat, laporan penjualannya juga jelas.",
  },
  {
    name: "Hari Santoso",
    role: "Pengguna Pulsa Plus",
    content: "saat sebelum menggunakan pulsa plus, saya selalu mengalami masalah ketika ingin melakukan transaksi. sekarang sudah tidak ada masalah lagi.",
  },
  {
    name: "Iwan Widodo",
    role: "Pengguna Pulsa Plus",
    content: "di tawarin pulsa plus sama sales, saya langsung tertarik. Harga produknya bersaing, dan transaksinya cepat.",
  },
  {
    name: "Joko Widodo",
    role: "Pengguna Pulsa Plus",
    content: "Saya senang karena katalog produknya lengkap, mulai dari pulsa sampai tagihan. Semua bisa saya tawarkan ke pelanggan tanpa ribet.",
  },
  {
    name: "Kusuma Wardana",
    role: "Pengguna Pulsa Plus",
    content: "padahal web pulsa banyak banget, tapi pulsa plus yang paling mudah dan praktis.",
  },
  {
    name: "Lukman Hakim",
    role: "Pengguna Pulsa Plus",
    content: "dulu saya pernah tertipu dengan web pulsa yang tidak bisa diandalkan. sekarang sudah tidak ada masalah lagi.",
  },
  {
    name: "Mery Widodo",
    role: "Pengguna Pulsa Plus",
    content: "saya sarankan untuk join Pulsa Plus, karena saya sudah mendapatkan banyak keuntungan dari Pulsa Plus.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8 md:p-12 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 shadow-primary">
                    <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{testimonials[currentIndex].role}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg text-center mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full bg-[#2373B6] dark:bg-[#1e3a8a] text-white hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full bg-[#2373B6] dark:bg-[#1e3a8a] text-white hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-[#2373B6] dark:bg-[#60a5fa]" 
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

