# 🚀 ESGÜVENİR İnşaat - SEO Kurulum Rehberi

Bu rehber, sitenizin Google'da organik olarak üst sıralarda yer alması için yapmanız gereken adımları içerir.

---

## 📋 İçindekiler

1. [Google Search Console Kurulumu](#1-google-search-console-kurulumu)
2. [Google Analytics Kurulumu](#2-google-analytics-kurulumu)
3. [Google Business Profile (Google İşletmem)](#3-google-business-profile)
4. [Sitemap Gönderimi](#4-sitemap-gönderimi)
5. [İçerik Optimizasyonu](#5-i̇çerik-optimizasyonu)
6. [Backlink Stratejisi](#6-backlink-stratejisi)
7. [Yerel SEO](#7-yerel-seo)
8. [Sosyal Medya Entegrasyonu](#8-sosyal-medya-entegrasyonu)
9. [Teknik Kontroller](#9-teknik-kontroller)
10. [Düzenli Yapılacaklar](#10-düzenli-yapılacaklar)

---

## 1. Google Search Console Kurulumu

### Adım 1.1: Search Console'a Kayıt
1. https://search.google.com/search-console adresine gidin
2. Gmail hesabınızla giriş yapın
3. "Özellik Ekle" butonuna tıklayın
4. "URL ön eki" seçeneğini seçin
5. Sitenizin URL'sini girin: `https://esguvenir.com`

### Adım 1.2: Site Doğrulama
**HTML Etiketi Yöntemi (ÖNERİLEN):**
1. Search Console'da "HTML etiketi" seçeneğini seçin
2. Size verilen kodu kopyalayın (örnek: `google-site-verification=ABC123XYZ...`)
3. `.env.local` dosyanızı açın
4. Şu satırı bulun: `NEXT_PUBLIC_GSC_VERIFICATION=`
5. Kodu yapıştırın: `NEXT_PUBLIC_GSC_VERIFICATION=ABC123XYZ...`
6. Dosyayı kaydedin
7. Siteyi yeniden deploy edin (Coolify'da)
8. Search Console'da "Doğrula" butonuna tıklayın

✅ **Tamamlandı!** Doğrulama başarılı olmalı.

---

## 2. Google Analytics Kurulumu

### Adım 2.1: Analytics Hesabı Oluşturma
1. https://analytics.google.com adresine gidin
2. "Ölçüm başlat" butonuna tıklayın
3. Hesap adı: "ESGÜVENİR İnşaat"
4. Mülk adı: "ESGÜVENİR Web Sitesi"
5. Sektör: "Gayrimenkul"
6. Boyut: "Küçük"

### Adım 2.2: Veri Akışı Kurulumu
1. Platform: "Web" seçin
2. Web sitesi URL'si: `https://esguvenir.com`
3. Akış adı: "ESGÜVENİR Web"
4. "Akış oluştur" butonuna tıklayın

### Adım 2.3: Ölçüm Kimliği Entegrasyonu
1. Size verilen "Ölçüm Kimliği"ni (G-XXXXXXXXXX formatında) kopyalayın
2. `.env.local` dosyanızı açın
3. Şu satırı bulun: `NEXT_PUBLIC_GA_ID=`
4. Kimliği yapıştırın: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
5. Dosyayı kaydedin
6. Siteyi yeniden deploy edin

✅ **Test:** Site açıldıktan 5 dakika sonra Analytics'te "Gerçek Zamanlı" bölümünden ziyaretçileri görebilmelisiniz.

---

## 3. Google Business Profile (Google İşletmem)

### Adım 3.1: İşletme Kaydı
1. https://business.google.com adresine gidin
2. "İşletmenizi yönetin" butonuna tıklayın
3. İşletme bilgileri:
   - **İşletme adı:** ESGÜVENİR İnşaat - Emlak
   - **Kategori:** İnşaat Firması, Emlakçı, Gayrimenkul Danışmanı
   - **Konum:** Kapaklı, Tekirdağ
   - **Adres:** (Tam adresinizi girin)
   - **Telefon:** 0542 660 91 01
   - **Web sitesi:** https://esguvenir.com

### Adım 3.2: Doğrulama
1. Google size posta veya telefon ile doğrulama kodu gönderecek
2. Kodu girin ve işletmenizi doğrulayın

### Adım 3.3: Profil Optimizasyonu
**Zorunlu Eklemeler:**
- ✅ Logo: `esguvenirlogo.png` dosyasını yükleyin
- ✅ Kapak fotoğrafı: En iyi projelerinizden birini seçin
- ✅ Çalışma saatleri: (Örn: Pazartesi-Cuma 09:00-18:00)
- ✅ Açıklama: 
  ```
  Tekirdağ Kapaklı'da 10+ yıllık tecrübesiyle güvenilir inşaat ve emlak hizmetleri. 
  50+ proje, 500+ mutlu müşteri. Konut inşaatı, ticari yapılar, proje yönetimi ve tadilat.
  ```
- ✅ Fotoğraflar: En az 10 adet proje fotoğrafı ekleyin
- ✅ Hizmetler: Konut İnşaatı, Ticari Yapılar, Proje Yönetimi, Tadilat
- ✅ Özellikler: "Ücretsiz Danışmanlık", "Zamanında Teslim", "Kaliteli Malzeme"

---

## 4. Sitemap Gönderimi

### Adım 4.1: Search Console'da Sitemap Gönderimi
1. Google Search Console'a gidin
2. Sol menüden "Sitemap'ler" seçin
3. "Yeni sitemap ekle" kutusuna yazın: `sitemap.xml`
4. "Gönder" butonuna tıklayın

✅ **Otomatik:** Siteniz her gün güncellendiğinde Google otomatik olarak tarayacak.

---

## 5. İçerik Optimizasyonu

### 5.1 Anasayfa İçerik Önerileri
**Eklenmesi Gereken Bölümler:**
- ✅ Müşteri Yorumları (5-10 gerçek müşteri yorumu)
- ✅ Sertifikalar ve Ödüller (varsa)
- ✅ Tamamlanan Projeler Galerisi (resim1.png - resim5.png)
- ✅ SSS Bölümü (En çok sorulan 10 soru - şu an gizli, içerik hazır olunca açılacak)

### 5.2 Blog Yazıları
**Her ay eklenecek içerikler (minimum 1 yazı/ay):**
- "2026 İnşaat Maliyetleri Tekirdağ"
- "Kapaklı'da Arsa Fiyatları"
- "İmar Planı Nasıl Okunur?"
- "Konut Kredisi Başvuru Süreçleri"
- "Ev Alırken Dikkat Edilecek Hukuki Konular"

**İçerik Uzunluğu:** Minimum 1000 kelime
**Görseller:** Her yazıya 3-5 görsel
**İç Linkler:** Her yazıda 3-5 iç link (diğer sayfalara)

### 5.3 Hizmet Sayfaları
**Mevcut sayfalar için eklenecekler:**
- Müşteri yorumları (hizmet bazlı)
- Fiyat aralıkları (örnek: "50m² tadilat: 100.000-150.000 TL")
- Tamamlanan proje sayısı
- Ortalama tamamlanma süresi
- Kullanılan markalar/malzemeler

---

## 6. Backlink Stratejisi

### 6.1 Yerel Dizinler (ÜCRETSİZ)
**Hemen kayıt olunacak siteler:**
1. ✅ **Sahibinden.com:** https://esguvenirinsaat.sahibinden.com (MEVCUT)
2. ⚠️ **Hürriyet Emlak:** https://www.hurriyetemlak.com
3. ⚠️ **İlanver:** https://www.ilanver.com
4. ⚠️ **Arabam.com Emlak:** https://emlak.arabam.com
5. ⚠️ **Zingat:** https://www.zingat.com
6. ⚠️ **emlakjet:** https://www.emlakjet.com

**Kayıt sırasında mutlaka:**
- Web sitesi linkini ekleyin: https://esguvenir.com
- Tüm bilgileri eksiksiz doldurun
- En az 5 ilan yayınlayın (aktif görünmek için)

### 6.2 Sektörel Dizinler
7. ⚠️ **İMSAD (İnşaat Malzemesi Sanayicileri Derneği):** https://www.imsad.org
8. ⚠️ **TÜİK İnşaat Firmaları Rehberi**
9. ⚠️ **Yerel Ticaret Odası:** Tekirdağ Ticaret Odası'na üye olun

### 6.3 Blog ve İçerik Siteleri
10. ⚠️ **Medium:** Profilinize blog yazılarınızı paylaşın
11. ⚠️ **Ekşi Sözlük:** İnşaat/emlak başlıklarına katkı yapın (link ekleyemezsiniz ama bilinirlik artar)
12. ⚠️ **Mynet Emlak Blog:** Misafir yazar olarak başvurun

---

## 7. Yerel SEO

### 7.1 NAP (Name, Address, Phone) Tutarlılığı
**Tüm platformlarda aynı bilgiler olmalı:**
```
İşletme Adı: ESGÜVENİR İnşaat - Emlak
Adres: (Tam adresiniz), Kapaklı, Tekirdağ
Telefon: 0542 660 91 01
Web: https://esguvenir.com
```

**Kontrol edilecek platformlar:**
- Google İşletmem
- Facebook Sayfa
- Instagram Bio
- Sahibinden Profil
- Diğer tüm dizinler

### 7.2 Yerel Anahtar Kelimeler
**Mevcut içeriklerde kullanılacak:**
- "Tekirdağ inşaat firması"
- "Kapaklı müteahhit"
- "Tekirdağ konut inşaatı"
- "Kapaklı emlak"
- "Tekirdağ tadilat"
- "Kapaklı ticari yapı"
- "Çerkezköy inşaat" (komşu ilçe)
- "Çorlu müteahhit" (komşu ilçe)

---

## 8. Sosyal Medya Entegrasyonu

### 8.1 Aktif Sosyal Medya Yönetimi
**Facebook (https://www.facebook.com/guventurutt):**
- Haftada 3 paylaşım (proje fotoğrafları, haberler, bloglar)
- Yorumlara 24 saat içinde cevap
- Facebook Events: Açık ev etkinlikleri oluşturun

**Instagram (@esguvenirinsaat):**
- Günde 1 story (şantiye görüntüleri, günlük hayat)
- Haftada 3 post (profesyonel fotoğraflar)
- Reels: Proje önce/sonra videoları (çok etkili!)
- Hashtag kullanımı:
  ```
  #tekirdağinşaat #kapaklıemlak #tekirdağemlak
  #insaatfirmasi #müteahhit #gayrimenkul
  #konutinsaati #villaprojesi #tadilat
  ```

### 8.2 Sosyal Medyadan Siteye Trafik
- Her paylaşımda "Daha fazla bilgi için: esguvenir.com" ekleyin
- Instagram bio linkine: https://esguvenir.com
- Facebook "Hakkında" kısmına: https://esguvenir.com

---

## 9. Teknik Kontroller

### ✅ Şu An Aktif Olan SEO Özellikleri
- ✅ Sitemap.xml otomatik oluşturuluyor
- ✅ Robots.txt doğru yapılandırılmış
- ✅ Schema.org markup'ları (Organization, LocalBusiness, Article, BreadcrumbList)
- ✅ Open Graph tags (sosyal medya paylaşımları için)
- ✅ Twitter Card tags
- ✅ Canonical URL'ler
- ✅ Meta descriptions tüm sayfalarda
- ✅ Alt text'ler tüm görsellerde
- ✅ Mobile responsive tasarım
- ✅ HTTPS (güvenli bağlantı)
- ✅ Sayfa hızı optimize (Turbopack)

### 🔄 Deployment Sonrası Yapılacaklar
1. ⚠️ `.env.local` dosyasına Google Analytics ID ekleyin
2. ⚠️ `.env.local` dosyasına Search Console verification ekleyin
3. ⚠️ Coolify'da yeniden deploy edin
4. ⚠️ Site açıldıktan 1 saat sonra Google'da arayın: `site:esguvenir.com`

---

## 10. Düzenli Yapılacaklar

### 🗓️ Haftalık
- [ ] Google Search Console'u kontrol et (hata var mı?)
- [ ] Analytics'i kontrol et (hangi sayfalar popüler?)
- [ ] 3 sosyal medya paylaşımı yap
- [ ] Müşteri yorumları ekle (Google, Facebook)

### 🗓️ Aylık
- [ ] 1 blog yazısı yayınla
- [ ] Backlink kontrolü yap (hangi siteler link veriyor?)
- [ ] Rakip analizi (tekirdağ inşaat firmalarını araştır)
- [ ] Proje fotoğrafları güncelle

### 🗓️ 3 Ayda Bir
- [ ] Anahtar kelime performansı değerlendir
- [ ] İçerikleri güncelle (fiyatlar, projeler)
- [ ] Yeni anahtar kelimeler belirle
- [ ] Site hızı testi (PageSpeed Insights)

---

## 📊 Beklenen Sonuçlar

### İlk 1 Ay
- Google'da indeksleme tamamlanır
- Site: `site:esguvenir.com` aramasında 20+ sayfa görünür
- İlk organik ziyaretçiler gelmeye başlar

### 3-6 Ay
- "tekirdağ inşaat" → 2. sayfada görünürsünüz
- "kapaklı emlak" → 1. sayfada görünürsünüz
- Aylık 200-500 organik ziyaretçi

### 6-12 Ay
- "tekirdağ inşaat firması" → 1. sayfada
- "kapaklı müteahhit" → 1-3. sırada
- Aylık 1000+ organik ziyaretçi
- Haftada 5-10 form doldurma/telefon

---

## 🚨 ÖNEMLİ NOTLAR

### ❌ Yapılmaması Gerekenler
- Backlink satın almayın (Google ceza verir)
- Anahtar kelime doldurmayın (spam sayılır)
- İçerik kopyalamayın (duplicate content)
- Sahtekarlık yapmayın (sahte yorumlar, tıklamalar)

### ✅ Altın Kurallar
- **Sabırlı olun:** SEO 3-6 ay sürer
- **Düzenli olun:** Her ay yeni içerik ekleyin
- **Doğal olun:** Gerçek içerik, gerçek linkler
- **Yerel odaklı:** "Tekirdağ", "Kapaklı" kelimelerini kullanın
- **Müşteri odaklı:** İnsanların sorularını cevaplayın

---

## 📞 Destek ve Sorular

Bu rehber ile ilgili sorularınız için:
- Web sitesi sorunları: GitHub repository
- SEO danışmanlığı: Google Search Console Help
- Analytics: Google Analytics Academy (ücretsiz kurslar)

---

## 📝 Yapılacaklar Listesi (Hemen Başlayın!)

### Bugün Yapılacaklar (1-2 saat)
- [ ] Google Search Console'a kayıt ol
- [ ] Site doğrulama kodunu `.env.local`'e ekle
- [ ] Google Analytics hesabı aç
- [ ] Analytics ID'yi `.env.local`'e ekle
- [ ] Siteyi yeniden deploy et

### Bu Hafta Yapılacaklar
- [ ] Google İşletmem profili oluştur
- [ ] 5 dizin sitesine kayıt ol (Sahibinden, Hürriyet Emlak vb.)
- [ ] Facebook ve Instagram'da 5 paylaşım yap
- [ ] 10 proje fotoğrafı yükle

### Bu Ay Yapılacaklar
- [ ] 2 blog yazısı yaz ve yayınla
- [ ] 10 gerçek müşteri yorumu topla
- [ ] Tüm sosyal medya profillerini tamamla
- [ ] İlk backlink'leri al

---

**Son Güncelleme:** 9 Şubat 2026
**Hazırlayan:** GitHub Copilot AI Agent
**Proje:** ESGÜVENİR İnşaat - Emlak Web Sitesi
