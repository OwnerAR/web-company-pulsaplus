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
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h4 className="text-primary-600 font-semibold mb-3 text-sm uppercase tracking-wide">
            Dapatkan Aplikasi di Google Playstore
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Produk untuk anda dari Pulsa Plus
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-primary transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="mb-5 flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-600 transition-colors duration-300">
                  <FontAwesomeIcon icon={product.icon} className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center group-hover:text-primary-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

