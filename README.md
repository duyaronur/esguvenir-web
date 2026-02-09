# ESGÜVENİR İnşaat - Emlak Web Sitesi

Modern, SEO-odaklı ve mobil-first Next.js web sitesi.

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç: http://localhost:3000
```

### Build ve Deploy

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## 📁 Proje Yapısı

```
esguvenir-web/
├── src/
│   ├── app/              # Next.js App Router sayfaları
│   ├── components/       # React komponentleri
│   │   ├── layout/       # Header, Footer
│   │   └── ui/           # UI komponentleri
│   └── lib/              # Utility fonksiyonlar, SEO
├── content/
│   ├── projects/         # MDX proje içerikleri
│   └── blog/             # MDX blog yazıları
├── public/               # Statik dosyalar
└── contentlayer.config.ts
```

## ✨ Özellikler

- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Contentlayer (MDX içerik yönetimi)
- ✅ SEO Optimizasyonu (Metadata API, JSON-LD Schema)
- ✅ Dinamik Sitemap ve Robots.txt
- ✅ Mobil-first Responsive Tasarım
- ✅ WCAG AA Erişilebilirlik
- ✅ Core Web Vitals Optimizasyonu

## 📝 İçerik Ekleme

### Yeni Proje Eklemek

`content/projects/` dizinine yeni bir `.mdx` dosyası oluşturun:

```mdx
---
title: "Proje Adı"
location: "Kapaklı, Tekirdağ"
type: "konut" # konut | ticari | karma | tadilat
status: "tamamlandi" # tamamlandi | devam-ediyor | planlama
summary: "Kısa açıklama"
coverImage: "/images/projects/project-slug.jpg"
seoTitle: "SEO Başlığı"
seoDescription: "SEO Açıklaması"
tags: ["villa", "modern"]
deliveryDate: "2024"
area: "5000 m²"
units: 12
order: 1
---

## Proje Detayları

Proje hakkında detaylı bilgi...

## Özellikler

- Özellik 1
- Özellik 2
```

### Yeni Blog Yazısı Eklemek

`content/blog/` dizinine yeni bir `.mdx` dosyası oluşturun:

```mdx
---
title: "Blog Başlığı"
date: "2024-02-07"
category: "insaat" # insaat | emlak | yatirim | tasarim | hukuk | finans | yaşam | teknik
excerpt: "Kısa özet"
coverImage: "/images/blog/blog-slug.jpg"
altText: "Görsel açıklaması"
seoTitle: "SEO Başlığı"
seoDescription: "SEO Açıklaması"
readingTime: 8
tags: ["inşaat", "teknoloji"]
faq:
  - question: "Soru?"
    answer: "Cevap."
---

## Başlık

İçerik...
```

## 🔧 Yapılandırma

### Ortam Değişkenleri

`.env` dosyası oluşturun (`.env.example` şablonundan):

```env
NEXT_PUBLIC_SITE_URL=https://esguvenir.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

## 📊 SEO

- **Metadata API**: Her sayfa için title, description, OG tags
- **JSON-LD Schema**: Organization, LocalBusiness, Article, FAQ, Breadcrumb
- **Sitemap**: `/sitemap.xml` - Otomatik güncellenen dinamik sitemap
- **Robots.txt**: `/robots.txt`
- **Canonical URLs**: Tüm sayfalarda
- **İç Linkleme**: Blog → Hizmet → Proje → İletişim

## 🎨 Marka Renkleri

- Primary Navy: `#00436A`
- Accent Gold: `#C6A862`
- White: `#FFFFFF`
- Neutrals: `#44666F`, `#7998A8`, `#B8C9D0`

## 📱 Responsive Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🚢 Deployment

### Vercel (Önerilen)

```bash
# Vercel CLI ile deploy
npm i -g vercel
vercel
```

### Diğer Platformlar

Build çıktısı `.next` dizininde oluşur. Herhangi bir Node.js hosting'de çalışır.

## 📞 Destek

- **Email**: info@esguvenir.com
- **Telefon**: 0 (542) 660 91 01

## 📄 Lisans

© 2024 ESGÜVENİR İnşaat - Emlak. Tüm hakları saklıdır.
