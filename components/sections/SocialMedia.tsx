'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export function SocialMedia() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Social Media
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Follow sosial media Adzka Reload untuk dapatkan beragam promo dan saldo bonus untuk anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a
            href="https://wa.me/6285888444608"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="h-8 w-8 text-green-600"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Customer Service</h3>
                <p className="text-gray-600">0858-8844-4608</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@adzkareload.id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="h-8 w-8 text-white"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Join Tiktok</h3>
                <p className="text-gray-600">@adzkareload.id</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Join Tiktok Adzka Multipayment.</p>
          </a>
        </div>
      </div>
    </section>
  );
}


