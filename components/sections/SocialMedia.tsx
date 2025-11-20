'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export function SocialMedia() {
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA;
  const tiktokUser = process.env.NEXT_PUBLIC_TIKTOK_USER;

  return (
    <section className="bg-[#2373B6] dark:bg-[#1e3a8a] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Social Media
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Follow sosial media Pulsa Plus untuk dapatkan beragam promo dan saldo bonus untuk anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <a
            href={`https://api.whatsapp.com/send?phone=${csWA}&text=Halo, saya ingin bertanya tentang Pulsa Plus.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-green-600 via-green-700 to-white dark:hover:from-green-700 dark:hover:via-green-800 dark:hover:to-gray-900 hover:animate-gradient-x rounded-lg p-8 hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-green-600 transition-colors flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="h-8 w-8 text-green-600 dark:text-white group-hover:text-green-600 dark:group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-white transition-colors">Customer Service</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors">{csWA}</p>
              </div>
            </div>
          </a>

          <a
            href={`https://www.tiktok.com/${tiktokUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg p-8 hover:shadow-xl hover:bg-gradient-to-r from-pink-500 via-red-500 to-black dark:hover:from-pink-600 dark:hover:via-red-600 dark:hover:to-gray-900 hover:animate-gradient-x transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-black dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-pink-600 transition-colors flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="h-8 w-8 text-white dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-white transition-colors">Join Tiktok</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors">{tiktokUser}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors">Join Tiktok Pulsa Plus.</p>
          </a>
        </div>
      </div>
    </section>
  );
}


