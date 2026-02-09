export const SITE_CONFIG = {
  name: "ESGÜVENİR İnşaat - Emlak",
  description:
    "Tekirdağ Kapaklı'da 50+ proje ve 500+ konut tecrübesiyle güvenilir inşaat ve emlak hizmetleri. Konut inşaatı, ticari yapılar, proje yönetimi ve tadilat.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://esguvenir.com",
  locale: "tr_TR",
  siteType: "website",

  // İletişim Bilgileri
  contact: {
    phone1: "0 (542) 660 91 01",
    phone2: "0 (554) 492 25 63",
    phoneRaw1: "05426609101",
    phoneRaw2: "05544922563",
    email: "info@esguvenir.com",
    address: {
      street: "Tekirdağ",
      city: "Kapaklı",
      region: "Tekirdağ",
      country: "Türkiye",
      postalCode: "",
    },
  },

  // Ekip
  team: [
    {
      name: "Harun T.",
      role: "Gayrimenkul Danışmanı",
      phone: "0 (542) 660 91 01",
      phoneRaw: "05426609101",
    },
    {
      name: "Güven T.",
      role: "Gayrimenkul Danışmanı",
      phone: "0 (554) 492 25 63",
      phoneRaw: "05544922563",
    },
  ],

  // Sosyal Kanıt
  stats: {
    projects: 50,
    homes: 500,
    yearsOfExperience: 10,
  },

  // Sosyal Medya (opsiyonel)
  social: {
    facebook: "https://www.facebook.com/guventurutt",
    instagram: "https://instagram.com/esguvenirinsaat",
    twitter: "",
    linkedin: "",
    sahibinden: "https://esguvenirinsaat.sahibinden.com",
  },

  // SEO Keywords
  keywords: [
    "inşaat firması tekirdağ",
    "emlak kapaklı",
    "konut inşaatı",
    "ticari yapılar",
    "proje yönetimi",
    "tadilat renovasyon",
    "tekirdağ müteahhit",
    "kapaklı inşaat",
  ],
};

// Sayfa Başlıkları ve Açıklamaları
export const PAGE_METADATA = {
  home: {
    title: "ESGÜVENİR İnşaat - Emlak | Tekirdağ Kapaklı'da Güvenilir İnşaat Firması",
    description:
      "50+ proje ve 500+ konut tecrübesiyle Tekirdağ Kapaklı'da konut inşaatı, ticari yapılar, proje yönetimi ve tadilat hizmetleri. Güven, huzur ve mutluluğun temeli.",
  },
  about: {
    title: "Hakkımızda | ESGÜVENİR İnşaat - Emlak",
    description:
      "ESGÜVENİR İnşaat - Emlak olarak Tekirdağ Kapaklı'da 10+ yıldır kaliteli ve güvenilir inşaat hizmetleri sunuyoruz. 50+ proje, 500+ mutlu müşteri.",
  },
  services: {
    title: "Hizmetlerimiz | ESGÜVENİR İnşaat - Emlak",
    description:
      "Konut inşaatı, ticari yapılar, proje yönetimi ve tadilat-yenileme hizmetleri. Profesyonel ekip, kaliteli malzeme, zamanında teslim.",
  },
  projects: {
    title: "Projelerimiz | ESGÜVENİR İnşaat - Emlak",
    description:
      "Tekirdağ Kapaklı ve çevresinde tamamlanan 50+ inşaat projemizi inceleyin. Konut, ticari ve karma projeler.",
  },
  blog: {
    title: "Blog | ESGÜVENİR İnşaat - Emlak",
    description:
      "İnşaat, emlak, yatırım ve yaşam alanı tasarımı hakkında uzman içerikler. Sektörel haberler ve faydalı bilgiler.",
  },
  contact: {
    title: "İletişim | ESGÜVENİR İnşaat - Emlak",
    description:
      "ESGÜVENİR İnşaat - Emlak ile iletişime geçin. Tekirdağ Kapaklı'da inşaat ve emlak hizmetleri için profesyonel danışmanlık.",
  },
  faq: {
    title: "Sık Sorulan Sorular | ESGÜVENİR İnşaat - Emlak",
    description:
      "İnşaat, emlak ve projeler hakkında en çok sorulan soruların yanıtları. ESGÜVENİR İnşaat - Emlak SSS.",
  },
};
