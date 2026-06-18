# Minimalist Landing Page — Design Specification

**Konsep:** Studio branding independen. Editorial. Manusiawi. Tidak ada gradient neon, tidak ada card hover yang terlalu ramai — desain ini bicara lewat whitespace dan typografi.

---

## Token System

### Warna

| Nama       | Hex       | Fungsi                                      |
|------------|-----------|---------------------------------------------|
| Paper      | `#F0EDE8` | Background utama                            |
| Ink        | `#1A1A1A` | Teks utama, elemen bold                     |
| Forest     | `#2C4A3E` | Accent satu-satunya — CTA, hover, highlight |
| Sand       | `#C8B89A` | Divider, caption, elemen muted              |
| White      | `#FFFFFF` | Surface card, kontras pada section gelap    |

**Aturan warna:** Forest hanya muncul di 2–3 tempat per halaman. Tidak ada gradient. Background tidak pernah hitam penuh — section gelap pakai Ink `#1A1A1A`.

---

### Typografi

| Role        | Font                   | Contoh penggunaan                        |
|-------------|------------------------|------------------------------------------|
| Display     | Cormorant Garamond     | Headline hero, section title besar       |
| Body        | DM Sans                | Paragraf, label, navigasi                |
| Utility     | DM Sans (uppercase)    | Eyebrow text, nomor urut, metadata kecil |

**Skala type:**

```
Display XL  → 96px / italic / Cormorant Garamond
Display L   → 64px / regular / Cormorant Garamond  
Heading     → 36px / medium / DM Sans
Subheading  → 20px / regular / DM Sans
Body        → 16px / regular / DM Sans
Caption     → 12px / uppercase, letter-spacing 0.12em / DM Sans
```

**Signature typografi:** Headline hero ditulis dua baris — baris pertama italic tipis Cormorant, baris kedua bold upright DM Sans. Kontras gaya ini menciptakan ritme editorial, bukan AI default.

---

## Layout & Struktur

### Wireframe ASCII

```
┌──────────────────────────────────────────────────────────────┐
│  NAV: logo (kiri)          About  Work  Contact (kanan)      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   HERO                                                       │
│                                                              │
│   ┌────────────────────────────┐    ┌──────────────────┐    │
│   │  Designing brands          │    │                  │    │
│   │  that stay.                │    │  [mockup image]  │    │
│   │                            │    │                  │    │
│   │  [CTA button]              │    └──────────────────┘    │
│   └────────────────────────────┘                            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  STATS (3 kolom, angka besar, label kecil)                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │   12+      │  │   94%      │  │   40K      │             │
│  │  Years     │  │  Retained  │  │  Reach     │             │
│  └────────────┘  └────────────┘  └────────────┘             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  WORK (asimetris — gambar besar kiri, teks kanan)            │
│  ┌──────────────────────────┐   ┌────────────────────┐      │
│  │                          │   │  Project name       │      │
│  │   [Project image]        │   │  Category           │      │
│  │                          │   │  Deskripsi singkat  │      │
│  └──────────────────────────┘   └────────────────────┘      │
│                                                              │
│  (diulang — posisi mirror untuk project berikutnya)          │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ABOUT (background Ink #1A1A1A, teks White)                  │
│  ┌────────────────────────────────────────────────────┐      │
│  │  "We don't decorate.                               │      │
│  │   We build."             [foto tim, portrait mode] │      │
│  │                                                    │      │
│  │  Deskripsi pendek studio, 2–3 kalimat              │      │
│  └────────────────────────────────────────────────────┘      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  CTA AKHIR (background Forest #2C4A3E)                       │
│  ┌────────────────────────────────────────────────────┐      │
│  │                                                    │      │
│  │       Ready to start?          [Get in touch →]   │      │
│  │                                                    │      │
│  └────────────────────────────────────────────────────┘      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  FOOTER: logo, links, © 2025                                 │
└──────────────────────────────────────────────────────────────┘
```

---

## Seksi per Seksi

### 1. Navigation

- Logo kiri — nama studio dalam huruf kecil, DM Sans, weight 500
- Link kanan — 3 item, uppercase, letter-spacing lebar
- Tidak ada hamburger menu yang berlebihan di desktop
- Sticky, background Paper dengan `backdrop-filter: blur(8px)` saat scroll

---

### 2. Hero

**Komposisi:**
- Teks kiri, mockup/image kanan (60/40 split)
- Tidak centered — ini bukan hero generik

**Copy headline (2 baris, kontras gaya):**
```
Designing brands          ← italic, Cormorant Garamond, 96px
that stay.                ← bold, DM Sans, 96px
```

**Sub-copy:**
```
Identitas visual untuk bisnis yang ingin bertahan lama,
bukan sekadar terlihat bagus minggu ini.
```

**CTA:**
- Tombol outlined — border 1.5px Ink, background transparan
- Hover: background berubah ke Forest, teks White
- Tidak ada shadow, tidak ada rounded pill

**Image kanan:**
- Mockup laptop/tablet yang menampilkan project terbaik
- Foto sedikit miring (rotate -2deg) untuk kesan manusiawi
- Tidak ada frame atau card container

---

### 3. Stats Bar

- 3 kolom, rata tengah
- Angka besar: Cormorant Garamond 64px, Forest
- Label: DM Sans uppercase 12px, Sand
- Dibatasi horizontal divider tipis (1px Sand), bukan card

---

### 4. Work (Portfolio)

**Pola alternating layout:**

```
Project 1:  [Image lebar — 60%]  |  [Teks — 40%]
Project 2:  [Teks — 40%]         |  [Image lebar — 60%]
```

Setiap project menampilkan:
- Nomor urut kecil (01, 02, 03) — DM Sans uppercase, Sand — hanya jika urutannya relevan secara naratif
- Nama project — Cormorant Garamond 36px
- Kategori — DM Sans uppercase 12px, Sand
- 1 kalimat deskripsi

Hover pada gambar: scale `1.02`, tidak ada overlay teks

---

### 5. About (Dark Section)

- Background: Ink `#1A1A1A`
- Teks: White
- Layout 2 kolom: kutipan besar kiri, foto portrait kanan
- Kutipan pakai tanda `"` besar dekoratif dari Cormorant Garamond, tapi tidak berlebihan

**Copy:**
```
"We don't decorate.
 We build."

Kami adalah studio kecil yang percaya identitas visual
bukan soal estetika — tapi soal kejujuran merek.
```

---

### 6. CTA Akhir

- Background: Forest `#2C4A3E`
- Teks: White
- Headline tunggal: "Ready to start?" — Cormorant Garamond italic 64px
- Satu tombol: "Get in touch →" — DM Sans, bordered White
- Padding vertikal besar (120px atas-bawah), tidak ada dekorasi lain

---

### 7. Footer

- Background: Ink `#1A1A1A`
- Satu baris: logo kiri, link tengah, copyright kanan
- Tidak ada newsletter form, tidak ada sosial media icon berlebihan

---

## Prinsip Anti-AI-Slop

Setiap keputusan di bawah ini adalah **larangan aktif**:

| Jangan lakukan                              | Alasannya                                          |
|---------------------------------------------|----------------------------------------------------|
| Gradient latar belakang                     | Tanda khas AI default gen-1                        |
| Card dengan shadow besar + border-radius tinggi | Template SaaS generik                          |
| Headline "Transform your business today"    | Copy tidak punya karakter spesifik                 |
| Ikon baris fitur (✓ feature, ✓ feature)     | Struktur yang terlalu familiar dan tidak bernyawa  |
| Terlalu banyak animasi scroll reveal        | Menutupi kelemahan desain dengan efek              |
| Background krem + serif terracotta          | Triplet AI paling umum saat ini                    |
| Tombol pill/rounded penuh                   | Default Tailwind yang tidak diputuskan             |

---

## Referensi Visual (dari inspirasi)

- **Minimalist Pine** — diambil: whitespace agresif, foto mockup tanpa frame kaku
- **Lynqet** — diambil: aksen teal gelap sebagai satu-satunya warna accent
- **WANGLOW** — diambil: editorial split layout, typografi yang berani ambil ruang
- **VELORIA / NOIR** — tidak diambil: terlalu dark fashion, konteks berbeda

---

## Catatan Implementasi

- Font: Google Fonts — `Cormorant Garamond` (italic + regular) + `DM Sans` (400, 500, 700)
- Grid: 12 kolom, gutter 24px, max-width container 1280px
- Spacing unit: kelipatan 8px
- Breakpoint mobile: stack semua kolom, headline scale turun ke 56px
- `prefers-reduced-motion`: matikan semua transisi, pertahankan fungsi
