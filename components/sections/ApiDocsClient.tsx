'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCode, faKey, faPlug } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function ApiDocsClient() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.pulsaplus.co.id';
  const oidCenter = process.env.NEXT_PUBLIC_OID_CENTER || '019008';
  const jabberID = process.env.NEXT_PUBLIC_JABBER_ID || 'info@pulsaplus.co.id';
  const waCenter = process.env.NEXT_PUBLIC_WA_CENTER || '085888444608';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@pulsaplus.co.id';

  const endpoints = [
    {
      method: "GET",
      path: "/trx",
      description: "Melakukan transaksi (Asynchronous)",
      params: {
        product: "Kode produk (contoh: DN50)",
        qty: "Quantity/jumlah (default: 1)",
        dest: "Nomor tujuan",
        refID: "Reference ID unik dari Anda",
        memberID: "Member ID Anda",
        sign: "(Opsional) Signature untuk keamanan",
        pin: "(Jika tidak pakai sign) PIN member",
        password: "(Jika tidak pakai sign) Password member",
      },
      responseSuccess: `status=1&message=Transaksi DN50.081234567890 Harga=50.090 akan diproses..`,
      responseCallback: `?t=190554&refid=44474&status=20&price=0&message=DN50.081234567890 SUKSES. SN/Ref: DNID AISXX/50000/2025101410121481030100166869912144199.. Saldo 14.324.472 - 50.090 = 14.274.382`,
      responseFailed: `?t=190554&refid=44474&status=40&price=0&message=DC12.081234567890 GAGAL. . Saldo 1.244.692. @19.06.42`,
    },
    {
      method: "GET",
      path: "/balance",
      description: "Mengecek saldo dan informasi akun member",
      params: {
        memberID: "Member ID Anda",
        sign: "Signature untuk keamanan",
      },
      responseSuccess: `Informasi Akun Anda

 Nama	: John Doe
 ID Agen	: AGT123456
 Saldo	: 14.324.472
 Bonus	: 250.000
 Debet	: 0`,
    },
    {
      method: "GET",
      path: "/ticket",
      description: "Request tiket deposit dengan informasi rekening bank",
      params: {
        memberID: "Member ID Anda",
        amount: "Jumlah deposit yang diinginkan",
        sign: "Signature untuk keamanan",
      },
      responseSuccess: `Silahkan Transfer Sesuai Nominal Rp.1.002.154
BCA : 2453913333
PT.Pulsa Plus 
BNI : 2020211038
PT.Pulsa Plus
BRI : 008401003726300
PT.Pulsa Plus
MANDIRI : 1630004353028
PT.Pulsa Plus`,
    },
  ];

  const formatWA = [
    {
      "name": "Tiket Deposit",
      "format": "TIKET.[nominal].[pin]",
      "description": "Format untuk request tiket deposit"
    },
    {
      "name": "Cek Saldo",
      "format": "SALDO",
      "description": "Format untuk request cek saldo"
    },
    {
      "name": "Cek Harga",
      "format": "CH.[kodeproduk]",
      "description": "Format untuk request cek harga"
    },
    {
      "name": "Ubah PIN",
      "format": "GP.[pinbaru].[pinlama]",
      "description": "Format untuk request ubah PIN"
    },
    {
      "name": "Ubah Password",
      "format": "PASSIP*[oldpassword]*[newpassword]*[pin]",
      "description": "Format untuk request ubah password"
    },
    {
      "name": "Ubah Alamat IP",
      "format": "IPADDRESS*[newip]*[pin]",
      "description": "Format untuk request ubah alamat IP"
    },
    {
      "name": "Ubah URL Callback",
      "format": "REPORTURL*[newurl]*[pin]",
      "description": "Format untuk request ubah URL callback"
    }
  ];
  // response list untuk match response dari API dengan regex pattern Captured Groups
  const responseList = [
    {
      "name": "Transaksi Masuk Antrian",
      "response": "status=1&message=Transaksi DN50.081234567890 Harga=10.000 akan diproses..",
      "regexPattern": "Transaksi (?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) Harga=(?<harga>[.,\\d]+) akan diproses",
      "capturedGroups": ["kodeproduk", "tujuan", "harga"],
      "color": "yellow"
    },
    {
      "name": "Transaksi Non Fisik Sukses",
      "response": "DN50.081234567890 SUKSES. SN/Ref: DNID AISXX/50000/2025101410121481030100166869912144199. Saldo 14.324.472 - 10.000 = 14.314.472  #Telkomsel",
      "regexPattern": "(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) SUKSES\\. SN/Ref: (?<sn>.+?)\\. Saldo (?<saldolama>[.,\\d]+) - (?<harga>[.,\\d]+) = (?<saldo>[.,\\d]+)\\s+#(?<namaproduk>.+)",
      "capturedGroups": ["kodeproduk", "tujuan", "sn", "saldolama", "harga", "saldo", "namaproduk"],
      "color": "green"
    },
    {
      "name": "Transaksi Fisik Sukses",
      "response": "TrxDN50.081234567890 SUKSES. SN/Ref: DNID AISXX/50000/202510. Saldo 14.324.472-10.000=14.314.472 @14.10.25",
      "regexPattern": "Trx(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) SUKSES\\. SN/Ref: (?<sn>.+?)\\. Saldo (?<saldolama>[.,\\d]+)-(?<harga>[.,\\d]+)=(?<saldo>[.,\\d]+) @(?<now>.+)",
      "capturedGroups": ["kodeproduk", "tujuan", "sn", "saldolama", "harga", "saldo", "now"],
      "color": "green"
    },
    {
      "name": "Transaksi Gagal",
      "response": "DN50.081234567890 GAGAL. Nomor tidak terdaftar. Saldo 1.244.692. @19.06.42",
      "regexPattern": "(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) GAGAL\\. (?<keterangan>.+?)\\. Saldo (?<saldo>[.,\\d]+)\\. @(?<systime>.+)",
      "capturedGroups": ["kodeproduk", "tujuan", "keterangan", "saldo", "systime"],
      "color": "red"
    },
    {
      "name": "Transaksi Dibatalkan Operator",
      "response": "DN50.081234567890 pd 19.06.42 gagal, dibatalkan. Saldo refund 10.000. Sal 1.254.692",
      "regexPattern": "(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) pd (?<waktu>.+?) gagal, dibatalkan\\. Saldo refund (?<harga>[.,\\d]+)\\. Sal (?<saldo>[.,\\d]+)",
      "capturedGroups": ["kodeproduk", "tujuan", "waktu", "harga", "saldo"],
      "color": "red"
    },
    {
      "name": "Transaksi Timeout",
      "response": "R#44474 Telkomsel DN50.081234567890 GAGAL karena timeout. Saldo 1.244.692 @19.06.42",
      "regexPattern": "R#(?<refid>\\d+) (?<namaproduk>.+?) (?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) GAGAL karena timeout\\. Saldo (?<saldo>[.,\\d]+) @(?<systime>.+)",
      "capturedGroups": ["refid", "namaproduk", "kodeproduk", "tujuan", "saldo", "systime"],
      "color": "red"
    },
    {
      "name": "Transaksi Gagal Karena Daftar Hitam",
      "response": "Telkomsel DN50.081234567890 GAGAL. Nomor tidak dapat diproses, mohon coba lagi besok. Saldo 1.244.692",
      "regexPattern": "(?<namaproduk>.+?) (?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) GAGAL\\. Nomor tidak dapat diproses, mohon coba lagi besok\\. Saldo (?<saldo>[.,\\d]+)",
      "capturedGroups": ["namaproduk", "kodeproduk", "tujuan", "saldo"],
      "color": "red"
    },
    {
      "name": "Saldo Tidak Cukup",
      "response": "DN50.081234567890 GAGAL. Saldo tidak cukup, Sisa Saldo Anda Rp. 1.244.692,Silakan isi saldo anda terlebih dahulu",
      "regexPattern": "(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) GAGAL\\. Saldo tidak cukup, Sisa Saldo Anda Rp\\. (?<saldo>[.,\\d]+),Silakan isi saldo",
      "capturedGroups": ["kodeproduk", "tujuan", "saldo"],
      "color": "red"
    },
    {
      "name": "Transaksi Gagal Karena Dobel",
      "response": "Trx DN50.081234567890 sdh Terjadi Pada:19.06.42, sts SUKSES SN: DNID123. saldo=1.244.692",
      "regexPattern": "Trx (?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) sdh Terjadi Pada:(?<waktu>.+?), sts (?<status>\\w+) SN: (?<sn>.+?)\\. saldo=(?<saldo>[.,\\d]+)",
      "capturedGroups": ["kodeproduk", "tujuan", "waktu", "status", "sn", "saldo"],
      "color": "orange"
    },
    {
      "name": "Transaksi Masih Dalam Proses",
      "response": "Transaksi.DN50.081234567890 masih dalam proses. Mohon ditunggu!!",
      "regexPattern": "Transaksi\\.(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) masih dalam proses",
      "capturedGroups": ["kodeproduk", "tujuan"],
      "color": "yellow"
    },
    {
      "name": "Tunggu Transaksi Sebelumnya",
      "response": "Yth John Doe,Transaksi.DN50.081234567890 masih dalam proses. Mohon ditunggu!!",
      "regexPattern": "Yth (?<namareseller>.+?),Transaksi\\.(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) masih dalam proses",
      "capturedGroups": ["namareseller", "kodeproduk", "tujuan"],
      "color": "yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-[#2373B6] dark:bg-[#1e3a8a] rounded-2xl p-8 sm:p-12 mb-12 text-center shadow-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Dokumentasi API</h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Dokumentasi lengkap untuk integrasi API layanan Pulsa Plus
          </p>
        </div>

        {/* Quick Start */}
        <div id="getting-started" className="mb-12 scroll-mt-24">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4">
                <FontAwesomeIcon
                  icon={faBook}
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Getting Started</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Base URL
                </h3>
                <code className="block bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-3 rounded-lg text-sm text-blue-600 dark:text-blue-400 font-mono">
                  {apiBaseUrl}
                </code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Jabber ID
                </h3>
                <code className="block bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-3 rounded-lg text-sm text-blue-600 dark:text-blue-400 font-mono">
                  {jabberID}
                </code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  OID Center
                </h3>
                <code className="block bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-3 rounded-lg text-sm text-blue-600 dark:text-blue-400 font-mono">
                  {oidCenter}
                </code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  Whatsapp Center
                </h3>
                <code className="block bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-3 rounded-lg text-sm text-blue-600 dark:text-blue-400 font-mono">
                  {waCenter}
                </code>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">📞 Hubungi Kami</h3>
              <p className="text-blue-800 dark:text-blue-300">
                Untuk informasi lebih lanjut tentang API, silakan hubungi tim kami di{" "}
                <a href={`mailto:${contactEmail}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-semibold">
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Endpoints */}
        <div id="api-endpoints" className="mb-12 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faPlug}
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">API Endpoints</h2>
          </div>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-all">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-4 py-1.5 rounded-lg text-sm font-bold bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700">
                      {endpoint.method}
                    </span>
                    <code className="text-base sm:text-lg font-mono text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{endpoint.description}</p>
                </div>

                {endpoint.params && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Query Parameters:</h4>
                    <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-sm space-y-2">
                      {Object.entries(endpoint.params).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1">
                          <code className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded">{key}</code>
                          <span className="text-gray-600 dark:text-gray-300 sm:ml-2"> {value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {endpoint.responseSuccess && (
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400 flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full mr-2"></span>
                        Response Success:
                      </h4>
                      <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
                        {endpoint.responseSuccess}
                      </pre>
                    </div>
                  )}

                  {endpoint.responseCallback && (
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400 flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full mr-2"></span>
                        Response Callback (Success):
                      </h4>
                      <pre className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-green-900 dark:text-green-200">
                        {endpoint.responseCallback}
                      </pre>
                    </div>
                  )}

                  {endpoint.responseFailed && (
                    <div>
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-400 flex items-center">
                        <span className="inline-block w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-2"></span>
                        Response Callback (Failed):
                      </h4>
                      <pre className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-red-900 dark:text-red-200">
                        {endpoint.responseFailed}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Format WA */}
        <div id="format-whatsapp" className="mb-12 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="h-6 w-6 text-green-600 dark:text-green-400"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Format Whatsapp</h2>
          </div>
          
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formatWA.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full mr-2"></span>
                    {item.name}
                  </h3>
                  <code className="block bg-white dark:bg-gray-800 border border-green-300 dark:border-green-700 p-3 rounded-lg text-sm font-mono text-green-700 dark:text-green-400 mb-2">
                    {item.format}
                  </code>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Generation */}
        <div id="generate-signature" className="mb-12 scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faKey}
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Generate Signature</h2>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
            <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-bold mb-2 text-purple-900 dark:text-purple-200 flex items-center">
                <span className="inline-block w-2 h-2 bg-purple-600 dark:bg-purple-500 rounded-full mr-2"></span>
                Signature untuk Keamanan Transaksi
              </h3>
              <p className="text-purple-800 dark:text-purple-300 text-sm">
                Signature digunakan untuk meningkatkan keamanan transaksi. Jika tidak menggunakan signature, 
                gunakan parameter <code className="bg-purple-100 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-700 px-2 py-1 rounded text-purple-900 dark:text-purple-200">pin</code> dan{' '}
                <code className="bg-purple-100 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-700 px-2 py-1 rounded text-purple-900 dark:text-purple-200">password</code>.
              </p>
            </div>

            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">PHP - Generate Signature untuk Transaksi:</h4>
            <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto mb-6 font-mono text-gray-900 dark:text-gray-200">
{`<?php
// For transaction
$str = 'OtomaX|' . $memberId . '|' . $product . '|' . $dest . '|' . $refID . '|' . $pin . '|' . $password;

$sign = str_replace('/', '_', str_replace('+', '-' , rtrim(base64_encode(sha1($str, true)), '=')));
echo $sign;
// result $sign = 'vlrN9Yuu4xHAT8_bXIUHKw2NjHo'
?>`}
            </pre>

            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Signature untuk Operasi Lainnya:</h4>
            <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`<?php
// For deposit ticket
// $str = 'OtomaX|ticket|' . $memberId . '|' . $pin . '|' . $password . '|' . $amount;

// For check balance
// $str = 'OtomaX|CheckBalance|' . $memberId . '|' . $pin . '|' . $password;
?>`}
            </pre>
          </div>
        </div>

        {/* Code Examples */}
        <div id="contoh-request" className="scroll-mt-24">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faCode}
                className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Contoh Request</h2>
          </div>

          <div className="space-y-6">
            {/* Transaction with Signature */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2"></span>
                Transaksi dengan Signature (PHP)
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`<?php
$memberId = 'YOUR_MEMBER_ID';
$product = 'DN50';
$dest = '085934284792';
$refID = 'TRX' . time();
$pin = 'YOUR_PIN';
$password = 'YOUR_PASSWORD';

// Generate signature
$str = 'OtomaX|' . $memberId . '|' . $product . '|' . $dest . '|' . $refID . '|' . $pin . '|' . $password;
$sign = str_replace('/', '_', str_replace('+', '-' , rtrim(base64_encode(sha1($str, true)), '=')));

// Build URL
$url = "${apiBaseUrl}/trx?product=" . $product . "&qty=1&dest=" . $dest . 
       "&refID=" . $refID . "&memberID=" . $memberId . "&sign=" . $sign;

$response = file_get_contents($url);
echo $response;
?>`}
              </pre>
            </div>

            {/* Transaction without Signature */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2"></span>
                Transaksi tanpa Signature (dengan PIN & Password)
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`<?php
$url = "${apiBaseUrl}/trx?product=DN50&qty=1&dest=085934284792" .
       "&refID=TRX123456&memberID=YOUR_MEMBER_ID" .
       "&pin=YOUR_PIN&password=YOUR_PASSWORD";

$response = file_get_contents($url);
echo $response;
?>`}
              </pre>
            </div>

            {/* JavaScript Example */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-2"></span>
                JavaScript (Fetch API)
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`const params = new URLSearchParams({
  product: 'DN50',
  qty: '1',
  dest: '085934284792',
  refID: 'TRX' + Date.now(),
  memberID: 'YOUR_MEMBER_ID',
  pin: 'YOUR_PIN',
  password: 'YOUR_PASSWORD'
});

fetch(\`${apiBaseUrl}/trx?\${params}\`)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
              </pre>
            </div>

            {/* Check Balance Example */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2"></span>
                Cek Saldo (PHP)
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`<?php
$memberId = 'YOUR_MEMBER_ID';
$pin = 'YOUR_PIN';
$password = 'YOUR_PASSWORD';

// Generate signature untuk check balance
$str = 'OtomaX|CheckBalance|' . $memberId . '|' . $pin . '|' . $password;
$sign = str_replace('/', '_', str_replace('+', '-' , rtrim(base64_encode(sha1($str, true)), '=')));

$url = "${apiBaseUrl}/balance?memberID=" . $memberId . "&sign=" . $sign;
$response = file_get_contents($url);
echo $response;

/* Response:
Informasi Akun Anda

 Nama	: John Doe
 ID Agen	: AGT123456
 Saldo	: 14.324.472
 Bonus	: 250.000
 Debet	: 0
*/
?>`}
              </pre>
            </div>

            {/* Deposit Ticket Example */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2"></span>
                Request Tiket Deposit (PHP)
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`<?php
$memberId = 'YOUR_MEMBER_ID';
$pin = 'YOUR_PIN';
$password = 'YOUR_PASSWORD';
$amount = '1000000'; // Jumlah deposit

// Generate signature untuk deposit ticket
$str = 'OtomaX|ticket|' . $memberId . '|' . $pin . '|' . $password . '|' . $amount;
$sign = str_replace('/', '_', str_replace('+', '-' , rtrim(base64_encode(sha1($str, true)), '=')));

$url = "${apiBaseUrl}/ticket?memberID=" . $memberId . "&amount=" . $amount . "&sign=" . $sign;
$response = file_get_contents($url);
echo $response;

/* Response:
Silahkan Transfer Sesuai Nominal Rp.1.002.154
BCA : 2453913333
PT.Pulsa Plus 
BNI : 2020211038
PT.Pulsa Plus
BRI : 008401003726300
PT.Pulsa Plus
MANDIRI : 1630004353028
PT.Pulsa Plus
*/
?>`}
              </pre>
            </div>

            {/* cURL Examples */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-gray-600 dark:bg-gray-500 rounded-full mr-2"></span>
                Transaksi dengan cURL
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`# Transaksi tanpa signature (dengan pin & password)
curl "${apiBaseUrl}/trx?product=DN50&qty=1&dest=081234567890&refID=TRX123456&memberID=YOUR_MEMBER_ID&pin=YOUR_PIN&password=YOUR_PASSWORD"

# Cek Saldo
curl "${apiBaseUrl}/balance?memberID=YOUR_MEMBER_ID&sign=YOUR_SIGNATURE"

# Request Tiket Deposit
curl "${apiBaseUrl}/ticket?memberID=YOUR_MEMBER_ID&amount=1000000&sign=YOUR_SIGNATURE"`}
              </pre>
            </div>

            {/* HTTPS cURL Example */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-gray-600 dark:bg-gray-500 rounded-full mr-2"></span>
                cURL dengan HTTPS (Lengkap)
              </h3>
              <pre className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono text-gray-900 dark:text-gray-200">
{`# Transaksi dengan parameter lengkap
curl -X GET "${apiBaseUrl}/trx" \\
  -G \\
  --data-urlencode "product=DN50" \\
  --data-urlencode "qty=1" \\
  --data-urlencode "dest=081234567890" \\
  --data-urlencode "refID=TRX123456" \\
  --data-urlencode "memberID=YOUR_MEMBER_ID" \\
  --data-urlencode "pin=YOUR_PIN" \\
  --data-urlencode "password=YOUR_PASSWORD"

# Response:
# status=1&message=Transaksi DN50.081234567890 Harga=50.090 akan diproses..`}
              </pre>
            </div>
          </div>

          {/* Response Parsing Section */}
          <div id="response-parsing" className="mt-12 scroll-mt-24">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mr-4">
                <FontAwesomeIcon
                  icon={faCode}
                  className="h-6 w-6 text-orange-600 dark:text-orange-400"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Cara Menangkap Response</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
              Gunakan regex pattern berikut untuk parsing response dari callback. Setiap response memiliki format yang berbeda, pastikan Anda menggunakan pattern yang sesuai.
            </p>

            <div className="space-y-6">
              {responseList.map((item, index) => {
                const colorClasses = {
                  green: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700',
                  red: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700',
                  yellow: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700',
                  blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700',
                  orange: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700'
                };
                const bgClasses = {
                  green: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
                  red: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800',
                  yellow: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800',
                  blue: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
                  orange: 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800'
                };
                
                return (
                  <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <span className={`px-4 py-2 rounded-lg text-sm font-bold border ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                        {item.name}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                      <span className="inline-block w-2 h-2 bg-gray-600 dark:bg-gray-500 rounded-full mr-2"></span>
                      Regex Pattern:
                    </h4>
                    <code className="block bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-3 rounded-lg text-xs sm:text-sm mb-4 overflow-x-auto font-mono text-gray-800 dark:text-gray-200">
                      {item.regexPattern}
                    </code>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
                      <div>
                        <strong className="text-gray-900 dark:text-white block mb-2">Captured Groups:</strong>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          {item.capturedGroups.map((group, gIndex) => (
                            <li key={gIndex} className="flex items-center">
                              <span className="inline-block w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                              <code className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded text-xs font-mono text-blue-600 dark:text-blue-400">{group}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-gray-900 dark:text-white block mb-2">Contoh Response:</strong>
                        <pre className={`${bgClasses[item.color as keyof typeof bgClasses]} border p-3 rounded-lg text-xs overflow-x-auto font-mono text-gray-900 dark:text-gray-200`}>
                          {item.response}
                        </pre>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* PHP Parsing Example */}
              <div className="rounded-xl border border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 shadow-md dark:shadow-gray-900/50">
                <h3 className="font-bold mb-4 text-blue-900 dark:text-blue-200 flex items-center text-lg">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-2"></span>
                  Contoh Parsing Response dengan PHP:
                </h3>
                <pre className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono shadow-sm text-gray-900 dark:text-gray-200">
{`<?php
$response = "DN50.081234567890 SUKSES. SN/Ref: DNID AISXX/50000/2025101410. Saldo 14.324.472 - 10.000 = 14.314.472  #Telkomsel";

// Check status transaksi
if (strpos($response, 'SUKSES') !== false) {
    // Transaksi Non Fisik Sukses
    $pattern = '/(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) SUKSES\\. SN\\/Ref: (?<sn>.+?)\\. Saldo (?<saldolama>[.,\\d]+) - (?<harga>[.,\\d]+) = (?<saldo>[.,\\d]+)\\s+#(?<namaproduk>.+)/';
    if (preg_match($pattern, $response, $matches)) {
        echo "Kode Produk: " . $matches['kodeproduk'] . "\\n";
        echo "Tujuan: " . $matches['tujuan'] . "\\n";
        echo "Serial Number: " . $matches['sn'] . "\\n";
        echo "Saldo Lama: " . $matches['saldolama'] . "\\n";
        echo "Harga: " . $matches['harga'] . "\\n";
        echo "Saldo: " . $matches['saldo'] . "\\n";
        echo "Nama Produk: " . $matches['namaproduk'] . "\\n";
    }
} elseif (strpos($response, 'GAGAL') !== false) {
    // Transaksi Gagal
    $pattern = '/(?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) GAGAL\\. (?<keterangan>.+?)\\. Saldo (?<saldo>[.,\\d]+)\\. @(?<systime>.+)/';
    if (preg_match($pattern, $response, $matches)) {
        echo "Kode Produk: " . $matches['kodeproduk'] . "\\n";
        echo "Tujuan: " . $matches['tujuan'] . "\\n";
        echo "Keterangan: " . $matches['keterangan'] . "\\n";
        echo "Saldo: " . $matches['saldo'] . "\\n";
        echo "System Time: " . $matches['systime'] . "\\n";
    }
} elseif (strpos($response, 'akan diproses') !== false) {
    // Transaksi Masuk Antrian
    $pattern = '/Transaksi (?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) Harga=(?<harga>[.,\\d]+) akan diproses/';
    if (preg_match($pattern, $response, $matches)) {
        echo "Kode Produk: " . $matches['kodeproduk'] . "\\n";
        echo "Tujuan: " . $matches['tujuan'] . "\\n";
        echo "Harga: " . $matches['harga'] . "\\n";
    }
} elseif (strpos($response, 'timeout') !== false) {
    // Transaksi Timeout
    $pattern = '/R#(?<refid>\\d+) (?<namaproduk>.+?) (?<kodeproduk>\\w+)\\.(?<tujuan>\\d+) GAGAL karena timeout\\. Saldo (?<saldo>[.,\\d]+) @(?<systime>.+)/';
    if (preg_match($pattern, $response, $matches)) {
        echo "Ref ID: " . $matches['refid'] . "\\n";
        echo "Nama Produk: " . $matches['namaproduk'] . "\\n";
        echo "Kode Produk: " . $matches['kodeproduk'] . "\\n";
        echo "Tujuan: " . $matches['tujuan'] . "\\n";
        echo "Saldo: " . $matches['saldo'] . "\\n";
    }
}
?>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-10 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 border-2 border-yellow-300 dark:border-yellow-700 p-6 sm:p-8 shadow-lg dark:shadow-gray-900/50">
            <h3 className="font-bold mb-4 text-yellow-900 dark:text-yellow-200 text-lg sm:text-xl flex items-center">
              <span className="text-2xl mr-3">⚠️</span>
              Penting - Harap Dibaca:
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-yellow-900 dark:text-yellow-200">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span>Response bersifat <strong>asynchronous</strong> - transaksi akan diproses dan hasilnya dikirim via callback</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span>Response callback akan dikirim ke URL yang Anda daftarkan ke Admin</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span>Gunakan <code className="bg-yellow-100 dark:bg-yellow-900/50 border border-yellow-400 dark:border-yellow-700 px-2 py-1 rounded font-mono text-yellow-900 dark:text-yellow-200">refID</code> yang unik untuk setiap transaksi</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span>Pastikan Regex sudah anda test dengan response yang dikirim oleh API</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span>Status response: <strong>1</strong> = diproses, <strong>20</strong> = sukses, <strong>40</strong> = gagal</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-yellow-600 dark:bg-yellow-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span>Disarankan menggunakan <strong>signature</strong> untuk keamanan yang lebih baik</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

