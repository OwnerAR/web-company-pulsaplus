'use client'

import Link from "next/link";
import Image from "next/image";

export function DownloadApp() {
  const appURL = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-[length:200%_100%] animate-gradient-x py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get the app in Playstore
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Download Aplikasi Adzka Reload dan bergabung dengan ribuan member diseluruh Indonesia
            </p>
            <Link
              href={appURL || "#"}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-blue-600 font-medium hover:bg-gray-100 transition-colors"
            >
              Download App
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <Image
                src="/images/section-hero.png"
                alt="Download Adzka Reload"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

