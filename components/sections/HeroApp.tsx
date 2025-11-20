'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function HeroApp() {
  const appURL = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <section className="bg-white dark:bg-gray-900 py-20 sm:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
              Pulsa Plus Retail
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Bersama Pulsa Plus, segera daftar sebagai agen retail dan dapatkan penghasilan tambahan.
              Layanan retail terlengkap se-Indonesia.
              Pilih produk yang anda inginkan dan dapatkan penghasilan tambahan.
            </p>
            <Link
              href={appURL || "#"}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-[#2373B6] dark:bg-[#1e3a8a] px-8 py-3 text-white font-medium hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] transition-colors"
            >
              Download Aplikasi
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/section-hero.png"
                alt="Aplikasi Pulsa Plus"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

