'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <FontAwesomeIcon icon={faRocket} className="mr-2 h-4 w-4 text-[#2373B6] dark:text-[#60a5fa]" />
              <span className="text-gray-900 dark:text-white">Solusi Digital Terpercaya</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white">
              Wujudkan Bisnis Digital Anda Bersama{" "}
              <span className="text-[#2373B6] dark:text-[#60a5fa]">Pulsa Plus</span>
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Kami menyediakan layanan profesional untuk web development, mobile apps,
              dan API integration yang dapat membantu transformasi digital bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/harga"
                className="inline-flex items-center justify-center rounded-lg bg-[#2373B6] dark:bg-[#1e3a8a] px-8 py-3 text-white font-medium hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Lihat Harga
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/harga"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-8 py-3 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Lihat Harga
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



