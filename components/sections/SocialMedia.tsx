'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export function SocialMedia() {
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA;

  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-[length:200%_100%] animate-gradient-x py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Social Media
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Follow sosial media Adzka Reload untuk dapatkan beragam promo dan saldo bonus untuk anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <a
            href={`https://api.whatsapp.com/send?phone=${csWA}&text=Halo, saya ingin bertanya tentang Adzka Reload.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-green-600 via-green-700 to-white hover:animate-gradient-x rounded-lg p-8 hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-green-100 group-hover:bg-white transition-colors flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="h-8 w-8 text-green-600 group-hover:text-green-600 transition-colors"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-white transition-colors">Customer Service</h3>
                <p className="text-gray-600 group-hover:text-white transition-colors">{csWA}</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@adzkareload.id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg p-8 hover:shadow-xl hover:bg-gradient-to-r from-pink-500 via-red-500 to-black hover:animate-gradient-x transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-black group-hover:bg-white transition-colors flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="h-8 w-8 text-white group-hover:text-black transition-colors"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-white transition-colors">Join Tiktok</h3>
                <p className="text-gray-600 group-hover:text-white transition-colors">@adzkareload.id</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 group-hover:text-white transition-colors">Join Tiktok Adzka Multipayment.</p>
          </a>
        </div>
      </div>
    </section>
  );
}


