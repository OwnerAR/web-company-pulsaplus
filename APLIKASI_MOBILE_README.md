# Halaman Aplikasi Mobile

Halaman ini menampilkan daftar aplikasi mobile yang tersedia untuk download dengan link yang disimpan di environment variables.

## Fitur

- ✅ Menampilkan daftar aplikasi mobile
- ✅ Link download dari environment variables
- ✅ Responsive design
- ✅ Animasi dengan Framer Motion
- ✅ Icons dari Font Awesome
- ✅ TypeScript support

## Environment Variables

Tambahkan variabel berikut ke file `.env.local`:

```env
# App Download Links
NEXT_PUBLIC_ADZKA_RELOAD_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkadzkareload
NEXT_PUBLIC_PASTI_CUAN_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkcuapayment
NEXT_PUBLIC_APLIKASIKU_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.aplikasiku
NEXT_PUBLIC_AGEN_PULSA_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkagenpulsa
NEXT_PUBLIC_INSTAPULSA_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkinstapulsa
NEXT_PUBLIC_JENIUS_PAYMENT_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkjeniuspayment
NEXT_PUBLIC_ALFA_PULSA_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkalfapulsa
NEXT_PUBLIC_DETIK_PAY_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkdetikpay
NEXT_PUBLIC_AZKIYA_PAYMENT_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkazkiyapayment
NEXT_PUBLIC_IZDIHAAR_PAYMENT_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkizdihaarpayment
NEXT_PUBLIC_HELLO_PAYMENT_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkhellopayment
NEXT_PUBLIC_DERA_PAYMENT_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkderapayment
NEXT_PUBLIC_ARLI_PAYMENT_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkarlipayment
NEXT_PUBLIC_SENTRA_PULSA_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apksentrapulsa
NEXT_PUBLIC_OP_KOMUNIKA_PULSA_INDONESIA_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkopkomunikapulsa
NEXT_PUBLIC_RAY_APK_URL=https://play.google.com/store/apps/details?id=com.otoreport.apkray
```

## Struktur File

```
app/(marketing)/aplikasi-mobile/
├── page.tsx                    # Halaman utama
components/sections/
├── AplikasiMobileClient.tsx    # Komponen client
types/
├── index.ts                    # Type definitions
```

## Aplikasi yang Tersedia

1. **Adzka Reload** - Aplikasi utama untuk transaksi pulsa dan paket data
2. **Pasti Cuan** - Aplikasi transaksi digital dengan keamanan tinggi
3. **Aplikasiku** - Platform digital dengan fitur lengkap
4. **Agen Pulsa** - Aplikasi khusus untuk agen pulsa
5. **Insta Pulsa** - Transaksi pulsa instan
6. **Jenius Payment** - Aplikasi pembayaran digital
7. **Alfa Pulsa** - Sistem alfa untuk transaksi pulsa
8. **Detik Pay** - Pembayaran super cepat
9. **Azkiya Payment** - Pembayaran dengan keamanan terdepan
10. **Izdihaar Payment** - Platform pembayaran dengan fitur lengkap
11. **Hello Payment** - Interface ramah pengguna
12. **Dera Payment** - Keamanan tinggi untuk semua kalangan
13. **Arli Payment** - Teknologi terbaru
14. **Sentra Pulsa** - Pusat transaksi pulsa
15. **OP Komunika Pulsa Indonesia** - Komunikasi dan transaksi bisnis
16. **Ray** - Teknologi canggih dan keamanan terjamin

## Cara Menggunakan

1. Pastikan environment variables sudah diatur
2. Akses halaman di `/aplikasi-mobile`
3. User dapat melihat daftar aplikasi dan download link
4. Setiap aplikasi menampilkan informasi lengkap termasuk features, requirements, dan screenshots

## Customization

Untuk menambah aplikasi baru:
1. Tambahkan environment variable di `.env.local`
2. Update array `apps` di `AplikasiMobileClient.tsx`
3. Sesuaikan data aplikasi sesuai kebutuhan

## Notes

- Semua link download menggunakan Google Play Store
- Screenshots menggunakan placeholder image yang sama
- Icons menggunakan logo perusahaan yang sama
- Responsive design untuk mobile dan desktop
