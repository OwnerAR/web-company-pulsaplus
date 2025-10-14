import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="h-10 w-10 text-yellow-600"
          />
        </div>
        
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut
          telah dipindahkan atau dihapus.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2 h-5 w-5" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}



