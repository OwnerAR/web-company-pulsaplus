'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCode, faKey, faPlug } from "@fortawesome/free-solid-svg-icons";

export function ApiDocsClient() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.adzkamedia.com';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'api@adzkamedia.com';

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
PT.Adzka Media Indoperkasa 
BNI : 2020211038
PT.Adzka Media Indoperkasa
BRI : 008401003726300
PT.Adzka Media Indoperkasa
MANDIRI : 1630004353028
PT.Adzka Media Indoperkasa`,
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Dokumentasi API</h1>
          <p className="text-lg text-gray-600">
            Dokumentasi lengkap untuk integrasi API layanan Adzka Media Indoperkasa
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <div className="rounded-lg border bg-white p-8 shadow-sm">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faBook}
                className="h-6 w-6 text-blue-600 mr-3"
              />
              <h2 className="text-2xl font-bold">Getting Started</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Base URL</h3>
                <code className="block bg-gray-100 p-3 rounded text-sm">
                  {apiBaseUrl}
                </code>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Hubungi Kami</h3>
                <p className="text-gray-600">
                  Untuk informasi lebih lanjut tentang API, silakan hubungi tim kami di{" "}
                  <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">
                    {contactEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon
              icon={faPlug}
              className="h-6 w-6 text-blue-600 mr-3"
            />
            <h2 className="text-3xl font-bold">API Endpoints</h2>
          </div>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded text-sm font-semibold bg-green-100 text-green-700">
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600">{endpoint.description}</p>
                </div>

                {endpoint.params && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Query Parameters:</h4>
                    <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
                      {Object.entries(endpoint.params).map(([key, value]) => (
                        <div key={key}>
                          <code className="text-blue-600 font-semibold">{key}</code>
                          <span className="text-gray-600"> - {value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {endpoint.responseSuccess && (
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Response:</h4>
                      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                        {endpoint.responseSuccess}
                      </pre>
                    </div>
                  )}

                  {endpoint.responseCallback && (
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Response Callback:</h4>
                      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                        {endpoint.responseCallback}
                      </pre>
                    </div>
                  )}

                  {endpoint.responseFailed && (
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">Response Callback:</h4>
                      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                        {endpoint.responseFailed}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Generation */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon
              icon={faKey}
              className="h-6 w-6 text-blue-600 mr-3"
            />
            <h2 className="text-3xl font-bold">Generate Signature</h2>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Signature untuk Keamanan Transaksi</h3>
              <p className="text-gray-600">
                Signature digunakan untuk meningkatkan keamanan transaksi. Jika tidak menggunakan signature, 
                gunakan parameter <code className="bg-gray-100 px-2 py-1 rounded">pin</code> dan{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">password</code>.
              </p>
            </div>

            <h4 className="font-semibold mb-3">PHP - Generate Signature untuk Transaksi:</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`<?php
// For transaction
$str = 'OtomaX|' . $memberId . '|' . $product . '|' . $dest . '|' . $refID . '|' . $pin . '|' . $password;

$sign = str_replace('/', '_', str_replace('+', '-' , rtrim(base64_encode(sha1($str, true)), '=')));
echo $sign;
// result $sign = 'vlrN9Yuu4xHAT8_bXIUHKw2NjHo'
?>`}
            </pre>

            <h4 className="font-semibold mb-3">Signature untuk Operasi Lainnya:</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
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
        <div>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon
              icon={faCode}
              className="h-6 w-6 text-blue-600 mr-3"
            />
            <h2 className="text-3xl font-bold">Contoh Request</h2>
          </div>

          <div className="space-y-6">
            {/* Transaction with Signature */}
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-semibold mb-3">Transaksi dengan Signature (PHP)</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
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
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-semibold mb-3">Transaksi tanpa Signature (dengan PIN & Password)</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
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
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-semibold mb-3">JavaScript (Fetch API)</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
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
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-semibold mb-3">Cek Saldo (PHP)</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
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
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-semibold mb-3">Request Tiket Deposit (PHP)</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
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
PT.Adzka Media Indoperkasa 
BNI : 2020211038
PT.Adzka Media Indoperkasa
BRI : 008401003726300
PT.Adzka Media Indoperkasa
MANDIRI : 1630004353028
PT.Adzka Media Indoperkasa
*/
?>`}
              </pre>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 rounded-lg bg-yellow-50 border border-yellow-200 p-6">
            <h3 className="font-semibold mb-3 text-yellow-800">⚠️ Penting:</h3>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>• Response bersifat <strong>asynchronous</strong> - transaksi akan diproses dan hasilnya dikirim via callback</li>
              <li>• Response callback akan dikirim ke URL yang Anda daftarkan ke Admin</li>
              <li>• Gunakan <code className="bg-yellow-100 px-2 py-1 rounded">refID</code> yang unik untuk setiap transaksi</li>
              <li>• Simpan callback URL di pengaturan member untuk menerima notifikasi hasil transaksi</li>
              <li>• Status response: 1 = diproses, 20 = sukses, 40 = gagal</li>
              <li>• Disarankan menggunakan signature untuk keamanan yang lebih baik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

