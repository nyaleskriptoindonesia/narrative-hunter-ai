# Narrative Hunter AI

Autonomous Intelligence Protocol untuk deteksi dini narasi crypto. Mendeteksi tren di X/Twitter, Telegram, dan GitHub 24–72 jam sebelum breakout harga.

## Fitur Utama
- Dark mode cyberpunk (black + deep purple + neon blue)
- Animated particle background (WebGL/Three.js)
- Subtle grid lines dan glassmorphism UI
- Smooth scroll dan motion premium (Framer Motion)
- Preview “live dashboard” dengan graph, heatmap, dan metrik

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- Three.js (WebGL)
- TypeScript

## Preview Lokal
```bash
npm install
npm run dev
# buka http://localhost:3000
```

## Build Produksi
```bash
npm run build
npm run start
```

## Skrip
- `npm run dev` — menjalankan dev server
- `npm run build` — build produksi
- `npm run start` — menjalankan hasil build
- `npm run lint` — linting kode

## Struktur Proyek
- `src/app/page.tsx` — landing page utama dengan semua section
- `src/app/layout.tsx` — layout global + grid overlay
- `src/app/globals.css` — tema dark cyberpunk dan utilitas
- `src/components/BackgroundParticles.tsx` — partikel neon (WebGL)
- `src/components/AnimatedGraph.tsx` — simulasi grafik realtime

## Kustomisasi
- Ubah link Whitepaper/Twitter/Telegram/GitHub di footer (`page.tsx`)
- Atur intensitas neon, blur, dan gradient di `globals.css`
- Sesuaikan jumlah partikel/kecepatan di `BackgroundParticles.tsx`

## Deployment
Siap untuk deploy via Vercel atau platform Node.js lain. Untuk Vercel:
1. Push ke GitHub
2. Import repository di Vercel
3. Build otomatis dengan Next.js (tanpa konfigurasi tambahan)

## Lisensi
Proprietary — hak milik tim Narrative Hunter AI (kecuali dependency open-source).
