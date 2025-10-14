'use client'

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const csWA = process.env.CONTACT_WA;
  const appURL = process.env.APP_URL;

  const mainLinks = [
    {
      name: "CS Whatsapp",
      href: `https://wa.me/${csWA}`,
      icon: faWhatsapp,
    },
    {
      name: "Download Apps",
      href: appURL,
      icon: faDownload,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-[length:200%_100%] animate-gradient-x text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Adzka Reload"
              width={200}
              height={57}
              className="mb-4 h-12 w-auto"
            />
            <p className="text-white/80 mb-4">
              Adzka Media Indoperkasa adalah perusahaan yang bergerak di bidang digital solutions
            </p>
          </div>

          {/* Link Utama */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Link Utama</h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={link.icon} className="h-5 w-5 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel Telegram */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Channel Telegram</h4>
            <a
              href="https://t.me/InfoAdzkaPayment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              Join Channel Telegram
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>Adzka Media Indoperkasa © {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}


