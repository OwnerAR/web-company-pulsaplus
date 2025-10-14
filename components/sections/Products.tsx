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
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-semibold mb-2">
            Dapatkan Aplikasi di Google Playstore
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Produk untuk anda dari Adzka Reload
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <FontAwesomeIcon icon={product.icon} className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

