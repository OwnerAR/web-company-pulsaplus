import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye, faUsers } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Profile',
};

export default function ProfilePage() {
  const team = [
    { name: "John Doe", role: "CEO & Founder", image: "" },
    { name: "Jane Smith", role: "CTO", image: "" },
    { name: "Mike Johnson", role: "Lead Developer", image: "" },
    { name: "Sarah Williams", role: "Project Manager", image: "" },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-lg text-gray-600">
            Adzka Media Indoperkasa adalah perusahaan teknologi yang berfokus pada
            penyediaan solusi digital berkualitas tinggi. Dengan pengalaman lebih dari
            10 tahun, kami telah membantu ratusan klien untuk mentransformasi bisnis
            mereka ke era digital.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-lg border bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faEye} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Visi</h2>
            <p className="text-gray-600">
              Menjadi perusahaan teknologi terdepan di Indonesia yang memberikan
              solusi digital inovatif dan berkualitas tinggi untuk membantu bisnis
              berkembang di era digital.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faBullseye} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Misi</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Memberikan layanan berkualitas tinggi dengan harga kompetitif</li>
              <li>• Menggunakan teknologi terkini dan best practices</li>
              <li>• Membangun hubungan jangka panjang dengan klien</li>
              <li>• Terus berinovasi dan berkembang</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600">
              Didukung oleh profesional berpengalaman di bidangnya
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 mx-auto h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👤</span>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Project Selesai</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Klien Puas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Tim Profesional</div>
          </div>
        </div>
      </div>
    </div>
  );
}


