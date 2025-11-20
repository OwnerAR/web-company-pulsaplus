import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye, faUsers } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Profile - Tentang Kami',
  description: 'Tentang Pulsa Plus - Perusahaan teknologi terdepan dengan pengalaman 10+ tahun dalam solusi digital. Tim profesional siap membantu bisnis Anda.',
  keywords: ['tentang kami', 'profile perusahaan', 'Pulsa Plus media', 'tim profesional', 'pengalaman 10 tahun'],
  openGraph: {
    title: 'Tentang Kami - Pulsa Plus',
    description: 'Perusahaan teknologi terdepan dengan pengalaman 10+ tahun dalam solusi digital.',
    type: 'website',
  },
};

export default function ProfilePage() {
  const team = [
    { name: "Mely", role: "Customer Service", image: "" },
    { name: "Arsan", role: "Customer Service", image: "" },
    { name: "Rifal", role: "Customer Service", image: "" },
    { name: "Lisda", role: "Customer Service", image: "" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="bg-[#2373B6] dark:bg-[#1e3a8a] rounded-2xl p-8 sm:p-12 mb-12 text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Tentang Kami</h1>
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto">
            Pulsa Plus adalah perusahaan teknologi yang berfokus pada
            penyediaan solusi digital berkualitas tinggi. Dengan pengalaman lebih dari
            10 tahun, kami telah membantu ratusan klien untuk mentransformasi bisnis
            mereka ke era digital.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group">
            <div className="mb-5 flex justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 group-hover:bg-[#2373B6] dark:group-hover:bg-[#1e3a8a] transition-colors duration-300">
                <FontAwesomeIcon icon={faEye} className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Visi</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Menjadi perusahaan teknologi terdepan di Indonesia yang memberikan
              solusi digital inovatif dan berkualitas tinggi untuk membantu bisnis
              berkembang di era digital.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group">
            <div className="mb-5 flex justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 group-hover:bg-[#2373B6] dark:group-hover:bg-[#1e3a8a] transition-colors duration-300">
                <FontAwesomeIcon icon={faBullseye} className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Misi</h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                Memberikan layanan berkualitas tinggi dengan harga kompetitif
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                Menggunakan teknologi terkini dan best practices
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                Membangun hubungan jangka panjang dengan klien
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                Terus berinovasi dan berkembang
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 p-8 sm:p-10 mb-16 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-10">
            <div className="mb-5 flex justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50">
                <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Tim Kami</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Didukung oleh profesional berpengalaman di bidangnya
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 mx-auto h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 dark:group-hover:from-blue-500 dark:group-hover:to-blue-600 transition-all duration-300">
                  <span className="text-2xl sm:text-4xl group-hover:text-white transition-colors duration-300">👤</span>
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Tahun Pengalaman</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Transaksi Berhasil</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Klien Setia</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Tim Kami</div>
          </div>
        </div>
      </div>
    </div>
  );
}


