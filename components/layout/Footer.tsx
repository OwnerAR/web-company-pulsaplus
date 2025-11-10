'use client'

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faFile, faLock, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA;
  const appURL = process.env.NEXT_PUBLIC_APP_URL;

  const mainLinks = [
    {
      name: "FAQ",
      href: "/faq",
      icon: faQuestionCircle,
    },
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
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: faLock,
    },
    {
      name: "Terms of Service",
      href: "/terms-of-service",
      icon: faFile,
    },
  ];

  return (
    <footer className="bg-gradient-brand bg-[length:200%_100%] animate-gradient-x text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Pulsa Plus"
              width={200}
              height={60}
              className="mb-4 h-12 w-auto"
            />
            <p className="text-white/80 mb-4">
              Pulsa Plus adalah platform terpercaya untuk layanan pulsa, paket data, e-wallet,
              dan berbagai kebutuhan digital dengan harga terbaik.
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
                    target={link.name === "FAQ" ? "_self" : "_blank"}
                    rel={link.name === "FAQ" ? "" : "noopener noreferrer"}
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
              href="https://t.me/pulsaplusinfo"
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
          <p>Pulsa Plus © {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}


