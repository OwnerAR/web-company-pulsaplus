'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Yolla Ghiena",
    role: "Pengguna Adzka",
    content: "Aplikasi yg sangat membantu sekali. Simple. Harga yg ekonomis, sangat cocok untuk berjualan pulsa. keuntungan yg di dapat juga besar. poin nya banyak, pelayanan server nya juga cepat. smoga lancar terus adzka reload....",
  },
  {
    name: "Wartinah",
    role: "Pengguna Adzka",
    content: "Selama jadi mitra Adzkareload Alhamdulilah bisa produktif Walaupon hanya dari rumah ...Semua transaksi slalu lancar Cs y ramah Dan kalau ada problem cs selalu cepat respon....Terimakasih Semoga Terus menjadi Ladang cuan Q😘",
  },
  {
    name: "Akang Yanto",
    role: "Pengguna Adzka",
    content: "Aplikasi yg mantap murah juga Yg paling mantap klo komplain langsung satset GK kaya aplikasi sebeleh pokona mah josss",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="text-center mb-8">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>

            <p className="text-gray-700 text-lg text-center mb-8 italic">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

