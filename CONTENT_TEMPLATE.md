# İçerik Şablonları

Bu dosya, ek proje ve blog içerikleri oluşturmanız için şablonlar içerir.

## Proje Şablonu

Aşağıdaki şablonu kullanarak `content/projects/` dizininde yeni `.mdx` dosyaları oluşturabilirsiniz:

```mdx
---
title: "Proje Başlığı"
location: "Şehir, İlçe"
type: "konut" # konut | ticari | karma | tadilat
status: "tamamlandi" # tamamlandi | devam-ediyor | planlama
summary: "Kısa proje özeti (1-2 cümle)"
coverImage: "/images/hero-bg.jpg"
seoTitle: "SEO için başlık"
seoDescription: "SEO için açıklama"
tags: ["etiket1", "etiket2"]
deliveryDate: "2024"
area: "1000 m²"
units: 10
order: 5
---

## Proje Hakkında

Proje detayları...

## Özellikler

- Özellik 1
- Özellik 2

## Konum

Konum bilgileri...
```

### Daha Fazla Proje Fikri

1. **Çerkezköy İş Merkezi** (ticari)
2. **Malkara Konut Kompleksi** (konut - 64 daire)
3. **Kapaklı Lüks Dubleks Villalar** (konut)
4. **Tekirdağ Plaza** (ticari - ofis)
5. **Bahçeli Evler Sitesi** (konut - site)
6. **Endüstriyel Depo Yapısı** (ticari)
7. **Okul Binası Yenileme** (tadilat)
8. **Kapaklı Merkez Apartmanı** (konut)
9. **Showroom ve Servis Binası** (ticari)
10. **Toplu Konut Projesi Faz 1** (konut)
11. **Villa Renovasyonu** (tadilat)
12. **Fabrika Binası** (ticari)
13. **Kapaklı Prestij Konutları** (konut)
14. **Ticaret ve Konut Karma Projesi** (karma)
15. **Otel Tadilatı** (tadilat)
16. **Lojman Yapıları** (konut)
17. **Kapaklı Modern Sitesi** (konut - site)

## Blog Şablonu

Aşağıdaki şablonu kullanarak `content/blog/` dizininde yeni `.mdx` dosyaları oluşturabilirsiniz:

```mdx
---
title: "Blog Yazısı Başlığı"
date: "2024-02-07"
category: "insaat" # insaat | emlak | yatirim | tasarim | hukuk | finans | yaşam | teknik
excerpt: "Kısa özet (1-2 cümle)"
coverImage: "/images/hero-bg.jpg"
altText: "Görsel açıklaması"
seoTitle: "SEO Başlığı"
seoDescription: "SEO Açıklaması"
readingTime: 8
tags: ["etiket1", "etiket2"]
faq:
  - question: "Soru 1?"
    answer: "Cevap 1."
  - question: "Soru 2?"
    answer: "Cevap 2."
---

## Giriş

Giriş paragrafı...

## Bölüm 1

İçerik...

### Alt Başlık

Detay...

## Bölüm 2

İçerik...

## Sonuç

Özet ve sonuç...
```

### Blog Yazısı Fikirleri

#### İnşaat Kategorisi
1. "İnşaatta Kullanılan Beton Türleri ve Özellikleri"
2. "Şantiye Yönetiminde Dikkat Edilmesi Gerekenler"
3. "İnşaat Malzemelerinde Kalite Standartları"
4. "Prefabrik Yapıların Avantajları ve Dezavantajları"

#### Emlak Kategorisi
5. "Emlak Yatırımında Doğru Zamanlama"
6. "Kira Geliri Elde Etmek İçin İpuçları"
7. "Emlak Piyasasında Fiyat Değerlendirmesi"
8. "İkinci El Ev Alırken Nelere Dikkat Edilmeli?"

#### Yatırım Kategorisi
9. "Gayrimenkul Yatırımında Risk Yönetimi"
10. "Tekirdağ'da Gayrimenkul Yatırım Fırsatları"
11. "Konut Kredisi mi, Peşin Ödeme mi?"
12. "Emlak Portföyü Nasıl Oluşturulur?"

#### Tasarım Kategorisi
13. "Modern Ev Tasarımında 2024 Trendleri"
14. "Küçük Mekanları Büyük Göstermenin Yolları"
15. "Akıllı Ev Sistemleri ve Entegrasyonu"
16. "İç Mekan Renk Seçiminde Püf Noktalar"

#### Hukuk Kategorisi
17. "Tapu İşlemlerinde Dikkat Edilecek Hususlar"
18. "İnşaat Sözleşmesinde Olması Gerekenler"
19. "Kat Mülkiyeti ve Kat İrtifakı Farkları"
20. "Yapı Ruhsatı Alma Süreci"

## İçerik Oluşturma İpuçları

### SEO İçin
- Başlıkta hedef anahtar kelime kullanın
- İçerikte anahtar kelimeleri doğal şekilde yerleştirin
- H2, H3 başlıkları düzenli kullanın
- İç linkleme yapın (diğer blog/hizmet/proje sayfalarına)
- Görsellere alt text ekleyin
- 1500+ kelime hedefleyin (long-form)

### Okunabilirlik
- Kısa paragraflar (3-4 cümle)
- Madde işaretleri kullanın
- Alt başlıklar ile bölümleyin
- Örnekler verin
- Görsel veya infografik ekleyin

### Sosyal Kanıt
- İstatistikler kullanın
- Referanslar verin
- Uzman görüşleri ekleyin
- Müşteri hikayeleri paylaşın

## Dosya Adlandırma

Dosya adları slug formatında (küçük harf, tire ile ayrılmış):
- ✅ `kapakli-modern-villalar.mdx`
- ✅ `ev-alirken-dikkat-edilecekler.mdx`
- ❌ `Kapaklı Modern Villalar.mdx`
- ❌ `ev_alirken.mdx`

## Görsel Yönetimi

Görseller `public/images/` altında:
- `public/images/projects/` - Proje görselleri
- `public/images/blog/` - Blog görselleri

Optimum boyut:
- Proje kapak: 1200x900px
- Blog kapak: 1200x630px
- Format: JPG (fotoğraf), PNG (grafik)
- Boyut: <200KB (optimizasyon)
