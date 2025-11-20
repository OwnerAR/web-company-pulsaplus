'use client'

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

type Transaction = {
  id: number;
  phone: string;
  product: string;
  amount: string;
  timeAgo: string;
  agent: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    phone: "087865767701",
    product: "Transfer DANA",
    amount: "Rp150.000",
    timeAgo: "Baru saja",
    agent: "Mitra Andi • Tangerang",
  },
  {
    id: 2,
    phone: "08970567567",
    product: "Transfer DANA",
    amount: "Rp50.000",
    timeAgo: "Baru saja",
    agent: "Mitra Sari • Bekasi",
  },
  {
    id: 3,
    phone: "121160146618",
    product: "Token PLN 100K",
    amount: "Rp111.500",
    timeAgo: "Baru saja",
    agent: "Mitra Dani • Surabaya",
  },
  {
    id: 4,
    phone: "000776470584",
    product: "Voucher Game FF 140 DM",
    amount: "Rp30.500",
    timeAgo: "Baru saja",
    agent: "Mitra Salma • Cimahi",
  },
  {
    id: 5,
    phone: "085195789578",
    product: "Transfer DANA",
    amount: "Rp75.000",
    timeAgo: "Baru saja",
    agent: "Mitra Rafi • Makassar",
  },
  {
    id: 6,
    phone: "0822222172",
    product: "Transfer DANA",
    amount: "Rp220.000",
    timeAgo: "Baru saja",
    agent: "Mitra Reni • Depok",
  },
  {
    id: 7,
    phone: "71006334",
    product: "Tagihan PDAM",
    amount: "Rp185.250",
    timeAgo: "Baru saja",
    agent: "Mitra Beni • Bandung",
  },
  {
    id: 8,
    phone: "081321860076",
    product: "Transfer DANA",
    amount: "Rp30.000",
    timeAgo: "Baru saja",
    agent: "Mitra Dira • Pekalongan",
  },
  {
    id: 9,
    phone: "082295364851",
    product: "Transfer DANA",
    amount: "Rp120.000",
    timeAgo: "Baru saja",
    agent: "Mitra Fajar • Malang",
  },
  {
    id: 10,
    phone: "085642723050",
    product: "Transfer DANA",
    amount: "Rp95.000",
    timeAgo: "Baru saja",
    agent: "Mitra Gina • Pontianak",
  },
  {
    id: 11,
    phone: "2001281110501",
    product: "Tagihan Indihome",
    amount: "Rp345.000",
    timeAgo: "Baru saja",
    agent: "Mitra Yoga • Yogyakarta",
  },
  {
    id: 12,
    phone: "1143410000861699",
    product: "Topup XL Prioritas",
    amount: "Rp275.000",
    timeAgo: "Baru saja",
    agent: "Mitra Nita • Jakarta",
  },
  {
    id: 13,
    phone: "002093580494",
    product: "Bayar BPJS Kesehatan",
    amount: "Rp168.000",
    timeAgo: "Baru saja",
    agent: "Mitra Wira • Semarang",
  },
  {
    id: 14,
    phone: "58882368",
    product: "Bayar BPJS Kesehatan",
    amount: "Rp115.000",
    timeAgo: "Baru saja",
    agent: "Mitra Rara • Batam",
  },
  {
    id: 15,
    phone: "367306000800401800",
    product: "Tagihan PBB Kota",
    amount: "Rp320.400",
    timeAgo: "Baru saja",
    agent: "Mitra Seno • Serang",
  },
  {
    id: 16,
    phone: "539210508686",
    product: "Token PLN 200K",
    amount: "Rp209.500",
    timeAgo: "Baru saja",
    agent: "Mitra Putra • Palembang",
  },
];

function maskPhoneNumber(phone: string) {
  if (phone.length <= 4) return phone;
  const visible = phone.slice(0, 4);
  const masked = phone
    .slice(4)
    .replace(/[0-9]/g, "•")
    .replace(/[A-Za-z]/g, "•");
  return `${visible}${masked}`;
}

function maskAmount(amount: string) {
  const match = amount.match(/^(\D*)([\d.]+)/);
  if (!match) {
    return amount;
  }

  const [, prefix, numericPart] = match;
  const digitsOnly = numericPart.replace(/\D/g, "");
  if (digitsOnly.length <= 2) {
    return `${prefix}${digitsOnly}`;
  }

  const visible = digitsOnly.slice(0, 2);
  const masked = "•".repeat(Math.max(3, digitsOnly.length - 2));
  return `${prefix}${visible}${masked}`;
}

function maskAgent(agent: string) {
  const [namePart, locationPart] = agent.split("•").map((part) => part.trim());

  if (!locationPart) {
    return agent;
  }

  if (locationPart.length <= 3) {
    return `${namePart} • ${locationPart}`;
  }

  const visible = locationPart.slice(0, 3);
  const masked = locationPart.slice(3).replace(/[A-Za-z0-9]/g, "•");
  return `${namePart} • ${visible}${masked}`;
}

export function FloatingTransactions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTransaction = useMemo(
    () => transactions[currentIndex % transactions.length],
    [currentIndex],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transactions.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-[60] max-w-xs sm:max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTransaction.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="pointer-events-auto rounded-2xl bg-white/95 dark:bg-gray-800/95 px-5 py-4 shadow-xl shadow-blue-500/10 dark:shadow-gray-900/50 ring-1 ring-blue-100 dark:ring-gray-700 backdrop-blur"
        >
          <div className="flex items-start gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5" />
            </div>
            <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {maskPhoneNumber(currentTransaction.phone)}
                </span>
                <span className="text-xs">{currentTransaction.timeAgo}</span>
              </div>
              <p className="mt-1 font-medium text-gray-900 dark:text-white">
                {currentTransaction.product}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {maskAmount(currentTransaction.amount)} • {maskAgent(currentTransaction.agent)}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

