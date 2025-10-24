'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobile,
  faCloud,
  faShieldAlt,
  faChartLine,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faCode,
    title: "Web Development",
    description: "Pembuatan website modern dan responsif dengan teknologi terkini seperti Next.js, React, dan Node.js.",
  },
  {
    icon: faMobile,
    title: "Mobile Apps",
    description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android menggunakan Flutter.",
  },
  {
    icon: faCloud,
    title: "API Integration",
    description: "Integrasi API yang seamless dan dokumentasi lengkap untuk kebutuhan bisnis Anda.",
  },
  {
    icon: faShieldAlt,
    title: "Security First",
    description: "Keamanan data dan aplikasi menjadi prioritas utama dalam setiap project yang kami kerjakan.",
  },
  {
    icon: faChartLine,
    title: "Scalable Solutions",
    description: "Arsitektur yang scalable dan dapat berkembang seiring pertumbuhan bisnis Anda.",
  },
  {
    icon: faHeadset,
    title: "24/7 Support",
    description: "Tim support kami siap membantu Anda kapan saja untuk memastikan sistem berjalan lancar.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan solusi digital terbaik dengan teknologi modern dan tim yang berpengalaman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gradient bg-white p-8 shadow-sm hover:shadow-primary transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 shadow-primary">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="h-6 w-6 text-primary-600"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



