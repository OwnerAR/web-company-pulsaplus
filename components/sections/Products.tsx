'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faWifi, faWallet, faGamepad, faMobileAlt, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    title: "Pulsa All Operator",
    description: "Operator seperti Telkomsel, XL, Axis, Smartfren, By.U, Indosat dan Three",
    icon: faPhone,
  },
  {
    title: "Paket Data & Voucher",
    description: "Injek langsung ke nomor all operator, atau bentuk fisik & cetak fisik kosong.",
    icon: faWifi,
  },
  {
    title: "E-Wallet",
    description: "Isi Saldo e-wallet di Indonesia, cth OVO, Gopay, DANA, Link aja, Shopeepay",
    icon: faWallet,
  },
  {
    title: "Topup dan Voucher Game",
    description: "Isi dan beli voucher game untuk lebih dari 50 game di Indonesia.",
    icon: faGamepad,
  },
  {
    title: "Paket Telp & SMS",
    description: "Paket telp dan sms dari seluruh Operator di Indonesia.",
    icon: faMobileAlt,
  },
  {
    title: "PPOB",
    description: "Bayar tagihan PLN, BPJS, PDAM, Telkom dan Multifinance.",
    icon: faMoneyBillWave,
  },
];

export function Products() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h4 className="text-primary-600 dark:text-primary-400 font-semibold mb-3 text-sm uppercase tracking-wide">
            Dapatkan Aplikasi di Google Playstore
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Produk untuk anda dari Pulsa Plus
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-primary dark:hover:shadow-primary/50 transition-all duration-300 p-6 sm:p-8 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative flex h-28 w-28 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200 via-primary-300 to-primary-100 dark:from-primary-800 dark:via-primary-700 dark:to-primary-600 blur-lg opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-700 via-primary-600 to-primary-400 dark:from-primary-500 dark:via-primary-400 dark:to-primary-300 text-white shadow-lg shadow-primary/30 dark:shadow-primary/50 group-hover:scale-110 group-hover:shadow-primary/60 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={product.icon}
                      className="text-4xl sm:text-5xl text-blue-600 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 drop-shadow-md transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

