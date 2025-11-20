'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faBook, faHandshake } from "@fortawesome/free-solid-svg-icons";

const keunggulan = [
  {
    icon: faMoneyBill,
    title: "Produk Lengkap",
    description: "Ribuan produk mulai dari Pulsa hingga PPOB.",
  },
  {
    icon: faBook,
    title: "Praktis",
    description: "1 Saldo untuk semua pilihan produk di Pulsa Plus",
  },
  {
    icon: faHandshake,
    title: "Bisa Diandalkan",
    description: "Transaksi dipantau 24 jam, dengan pilihan supplier terbaik.",
  },
];

export function Keunggulan() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Kenapa memilih Pulsa Plus?
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Keunggulan Pulsa Plus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keunggulan.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


