# Narrative Hunter AI

Autonomous Intelligence Protocol untuk deteksi dini narasi crypto. Mendeteksi tren di X/Twitter, Telegram, dan GitHub 24–72 jam sebelum breakout harga.

## Panduan Penggunaan Tools di Website
- Navigasi
  - Scroll halus antar section: Hero, Problem, How It Works, Live Dashboard, Token Utility, Roadmap, Footer.
  - Grid halus dan background partikel neon aktif sebagai elemen visual (non-interaktif).
- Hero Section
  - Tombol “Launch App” mengarah ke anchor `#launch` (placeholder integrasi app).
  - Tombol “View Live Signals” membawa Anda ke section Live Dashboard (`#signals`).
  - Grafik animasi di belakang headline menampilkan simulasi tren untuk rasa “real-time”.
- Problem Section
  - Lihat urutan “Social → Dev Activity → Liquidity → Price Explosion”.
  - Bar animasi menunjukkan progres fase—gunakan untuk edukasi alur pembentukan narasi.
- How It Works (3 Kartu)
  - Social Intelligence Layer, Developer Momentum Engine, AI Narrative Scoring System.
  - Hover pada kartu untuk melihat efek glow/scale.
- Live Dashboard Preview
  - Panel metrik:
    - Narrative Score (0–100): skor kekuatan narasi (mock).
    - Growth Acceleration %: percepatan pertumbuhan sinyal (mock).
    - Developer Index: aktivitas pengembang terkait narasi (mock).
    - Mentions (24h): estimasi jumlah penyebutan (mock).
  - Grafik Area: animasi kontinu meniru pergerakan sinyal—gunanya untuk representasi tren.
  - Heatmap Grid: intensitas warna mengekspresikan kepadatan sinyal; gunakan untuk spotting cluster panas.
- Token Utility
  - $HUNT: Unlock premium signals, API access, Governance, Staking.
  - Diagram pie gradient menunjukkan komposisi tokenomics secara visual (mock).
- Roadmap
  - Timeline animasi dari Phase 1 sampai Phase 3—gunakan untuk memahami milestone pengembangan.
- Footer
  - Whitepaper, Twitter, Telegram, GitHub, Launch App—klik untuk menuju tautan (ganti href sesuai aset Anda).

Catatan: Saat ini data pada “Live Dashboard” bersifat mock/preview untuk desain. Integrasi datasource real (X/Twitter, Telegram, GitHub) dapat ditambahkan kemudian.

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
