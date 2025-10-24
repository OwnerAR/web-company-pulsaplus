# Web Company - Pulsa Plus

Website Company Profile profesional yang dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🚀 Features

- ✨ Modern UI dengan Tailwind CSS
- 🎨 Responsive Design (Mobile-First)
- ⚡ Fast Performance dengan Next.js 15
- 🔍 SEO Optimized
- 📱 5 Halaman Utama:
  - Home (Landing Page)
  - Profile (About Company)
  - Harga (Pricing Plans)
  - Service (Our Services)
  - API Docs (API Documentation)
- 🎭 Smooth Animations dengan Framer Motion
- 📦 Font Awesome Icons
- 🛡️ TypeScript untuk Type Safety

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Package Manager:** npm

## 📋 Prerequisites

Pastikan Anda sudah menginstall:

- Node.js 18.x atau lebih tinggi
- npm atau yarn

## 🔧 Installation

1. Clone repository ini atau download source code

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:3000
```

## 📦 Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## 📁 Project Structure

```
web-company/
├── app/                      # Next.js App Router
│   ├── (marketing)/         # Marketing pages group
│   │   ├── page.tsx        # Home page
│   │   ├── profile/        # Profile page
│   │   ├── harga/          # Pricing page
│   │   ├── service/        # Services page
│   │   └── api-docs/       # API Documentation
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/             # Layout components (Header, Footer)
│   ├── sections/           # Page sections (Hero, Features, CTA)
│   ├── shared/             # Shared components
│   └── ui/                 # UI components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── validations/        # Zod schemas
│   └── api/                # API client functions
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
│   ├── images/
│   └── fonts/
└── config/                 # Configuration files
```

## 🎨 Customization

### Mengubah Konten

1. **Company Information**: Edit di `components/layout/Footer.tsx` dan `app/(marketing)/profile/page.tsx`
2. **Services**: Edit di `app/(marketing)/service/page.tsx`
3. **Pricing**: Edit di `app/(marketing)/harga/page.tsx`
4. **API Docs**: Edit di `app/(marketing)/api-docs/page.tsx`

### Mengubah Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- CSS Variables: Defined in `app/globals.css`

### Menambah Halaman Baru

Buat file baru di folder `app/(marketing)/nama-halaman/page.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis akan berjalan

### Manual Build

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Jika diperlukan, buat file `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.Pulsa Plusmedia.com
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Pulsa Plus**
- Website: [https://Pulsa Plusmedia.com](https://Pulsa Plusmedia.com)
- Email: info@Pulsa Plusmedia.com

## 🙏 Acknowledgments

- Next.js Team
- Tailwind CSS Team
- Font Awesome
- Framer Motion

---

Made with ❤️ by Pulsa Plus



