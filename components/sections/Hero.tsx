'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm">
              <FontAwesomeIcon icon={faRocket} className="mr-2 h-4 w-4 text-blue-600" />
              <span>Solusi Digital Terpercaya</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Wujudkan Bisnis Digital Anda Bersama{" "}
              <span className="text-blue-600">Adzka Media</span>
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              Kami menyediakan layanan profesional untuk web development, mobile apps,
              dan API integration yang dapat membantu transformasi digital bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/service"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Lihat Layanan
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/harga"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
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



