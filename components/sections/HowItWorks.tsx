'use client'

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faChartLine, faChartBar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faCog,
    title: "Atur Harga Jual ke Pelanggan",
    description: "Atur sendiri harga jual mu ke pelanggan dan dapatkan struk kosong yang bisa kamu atur harga jualnya.",
  },
  {
    icon: faChartLine,
    title: "Tingkatkan Penghasilan",
    description: "Anda punya usaha seperti warung, atau anda karyawan ingin mencari penghasilan tambahan.",
  },
  {
    icon: faChartBar,
    title: "Lengkapi Produk Usahamu",
    description: "Kami menyediakan ribuan produk untuk anda jual kembali, pulsa, paket data, e-wallet dan juga produk digital lainnya.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              Dapatkan Penghasilan Tambahan
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Bagaimana Pulsa Plus Bekerja?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Distributor Agen Pulsa, Data, Ewallet, Produk Digital, terlengkap se-Indonesia. 
              Dengan Pulsa Plus dapatkan penghasilan tambahan melimpah
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/harga"
              className="inline-flex items-center justify-center rounded-lg bg-[#2373B6] dark:bg-[#1e3a8a] px-8 py-3 text-white font-medium hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] transition-colors"
            >
              Cek Harga
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[9/10]">
              <Image
                src="/images/section-hero.png"
                alt="Pulsa Plus App"
                width={800}
                height={888}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

