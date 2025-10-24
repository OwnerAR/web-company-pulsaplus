'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Harga", href: "/harga" },
    { name: "Deposit", href: "/deposit" },
    { name: "Pendaftaran", href: "/pendaftaran" },
    { name: "Dokumentasi", href: "/api-docs" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-brand bg-[length:200%_100%] animate-gradient-x shadow-primary backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.svg"
              alt="Pulsa Plus"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
            <span className="hidden md:inline text-2xl font-bold text-white">
              Pulsa Plus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/20 px-3 py-2 rounded-lg'
                      : 'text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                      isActive
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}


