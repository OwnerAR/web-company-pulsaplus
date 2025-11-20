'use client'

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBook, faPlug, faKey, faCode, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export function SidebarNavigation() {
  const csWA = process.env.NEXT_PUBLIC_CONTACT_WA;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Always open on desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const apiDocsSections = [
    {
      icon: faBook,
      label: "Getting Started",
      href: "#getting-started",
      description: "Informasi dasar dan konfigurasi API",
      color: "blue"
    },
    {
      icon: faPlug,
      label: "API Endpoints",
      href: "#api-endpoints",
      description: "Daftar endpoint dan parameter",
      color: "blue"
    },
    {
      icon: faWhatsapp,
      label: "Format WhatsApp",
      href: "#format-whatsapp",
      description: "Format pesan untuk WhatsApp",
      color: "green"
    },
    {
      icon: faKey,
      label: "Generate Signature",
      href: "#generate-signature",
      description: "Cara membuat signature untuk keamanan",
      color: "purple"
    },
    {
      icon: faCode,
      label: "Contoh Request",
      href: "#contoh-request",
      description: "Contoh kode untuk berbagai bahasa",
      color: "indigo"
    },
    {
      icon: faCode,
      label: "Cara Menangkap Response",
      href: "#response-parsing",
      description: "Regex pattern untuk parsing response",
      color: "orange"
    }
  ];


  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-100 dark:bg-blue-900/50',
        hover: 'hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 dark:hover:from-blue-500 dark:hover:via-blue-600 dark:hover:to-blue-700'
      },
      green: {
        icon: 'text-green-600 dark:text-green-400',
        bg: 'bg-green-100 dark:bg-green-900/50',
        hover: 'hover:from-green-600 hover:via-green-700 hover:to-green-800 dark:hover:from-green-500 dark:hover:via-green-600 dark:hover:to-green-700'
      },
      purple: {
        icon: 'text-purple-600 dark:text-purple-400',
        bg: 'bg-purple-100 dark:bg-purple-900/50',
        hover: 'hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 dark:hover:from-purple-500 dark:hover:via-purple-600 dark:hover:to-purple-700'
      },
      indigo: {
        icon: 'text-indigo-600 dark:text-indigo-400',
        bg: 'bg-indigo-100 dark:bg-indigo-900/50',
        hover: 'hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 dark:hover:from-indigo-500 dark:hover:via-indigo-600 dark:hover:to-indigo-700'
      },
      orange: {
        icon: 'text-orange-600 dark:text-orange-400',
        bg: 'bg-orange-100 dark:bg-orange-900/50',
        hover: 'hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 dark:hover:from-orange-500 dark:hover:via-orange-600 dark:hover:to-orange-700'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <>
      {/* Mobile Toggle Button - Centered on Left Side with Slide Effect */}
      <motion.div
        className="md:hidden fixed top-1/2 -translate-y-1/2 left-0 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          drag="x"
          dragConstraints={{ left: 0, right: 60 }}
          dragElastic={0.2}
          onDragEnd={(event, info) => {
            // Jika di-geser lebih dari 30px ke kanan, buka sidebar
            if (info.offset.x > 30) {
              setIsOpen(true);
            }
          }}
          className="bg-[#2373B6] dark:bg-[#1e3a8a] text-white px-0.5 py-4 rounded-r-lg shadow-xl hover:bg-[#1d5a9a] dark:hover:bg-[#1a2f6b] transition-colors cursor-grab active:cursor-grabbing border-r-2 border-t-2 border-b-2 border-[#1d5a9a] dark:border-[#1a2f6b]"
          aria-label="Toggle sidebar"
        >
          <motion.div
            animate={{ 
              rotate: isOpen ? 180 : 0,
              x: isOpen ? 0 : 4
            }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="h-4 w-4"
            />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 inset-x-0 bottom-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isMobile ? (isOpen ? 0 : -320) : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed md:sticky top-20 left-0 z-40 w-80 h-[calc(100vh-5rem)] bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/50 border-r border-gray-200 dark:border-gray-700 overflow-y-auto"
      >
          <div className="p-6">


        {/* API Documentation Sections */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">API Documentation</h2>
          <nav className="space-y-2">
            {apiDocsSections.map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${colors.hover} hover:animate-gradient-x hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-1 hover:scale-105`}
                  onMouseEnter={(e) => {
                    const h3 = e.currentTarget.querySelector('h3');
                    const p = e.currentTarget.querySelector('p');
                    if (h3) h3.style.color = '';
                    if (p) p.style.color = '';
                  }}
                  onMouseLeave={(e) => {
                    const h3 = e.currentTarget.querySelector('h3');
                    const p = e.currentTarget.querySelector('p');
                    if (h3) h3.style.color = '';
                    if (p) p.style.color = '';
                  }}
                >
                  <div className={`h-12 w-12 rounded-full ${colors.bg} group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors flex items-center justify-center flex-shrink-0`}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`h-6 w-6 ${colors.icon} ${item.color === 'green' ? 'group-hover:text-green-600 dark:group-hover:text-green-400' : 'group-hover:text-gray-900 dark:group-hover:text-white'} transition-colors`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-black dark:text-white transition-all duration-300 group-hover:text-[#2373B6] dark:group-hover:text-white">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 truncate group-hover:text-gray-800 dark:group-hover:text-white/90">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>

      </div>
        </motion.aside>
    </>
  );
}
