'use client'

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export function CTA() {
  return (
    <section className="bg-[#2373B6] dark:bg-[#1e3a8a] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Siap Memulai Project Anda?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan project digital impian Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@pulsaplus.co.id"
              className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 px-8 py-3 font-medium text-[#2373B6] dark:text-[#60a5fa] hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-5 w-5" />
              Email Kami
            </a>
            <a
              href="tel:+621234567890"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-medium text-white hover:bg-white/20 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2 h-5 w-5" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



