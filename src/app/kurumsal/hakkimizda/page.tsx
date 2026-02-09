import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";

export const metadata = generateMetadata({
  title: "Hakkımızda",
  description:
    "ESGÜVENİR İnşaat - Emlak olarak Tekirdağ Kapaklı'da 10+ yıldır kaliteli ve güvenilir inşaat hizmetleri sunuyoruz. 50+ proje, 500+ mutlu müşteri.",
  canonicalUrl: `${SITE_CONFIG.url}/kurumsal/hakkimizda`,
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Kurumsal", url: `${SITE_CONFIG.url}/kurumsal/hakkimizda` },
    { name: "Hakkımızda", url: `${SITE_CONFIG.url}/kurumsal/hakkimizda` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Kurumsal" }, { name: "Hakkımızda" }]} />
        </div>
      </div>

      <Hero
        title="Hakkımızda"
        subtitle="ESGÜVENİR İnşaat - Emlak"
        description="Güven, kalite ve müşteri memnuniyeti odaklı inşaat ve emlak hizmetleri."
        image="/images/hero-bg.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose-custom">
              <h2>Kimiz?</h2>
              <p>
                <strong>ESGÜVENİR İnşaat - Emlak</strong>, Tekirdağ Kapaklı merkezli olarak 10+
                yıldır inşaat ve emlak sektöründe faaliyet gösteren, güvenilir ve kaliteli
                hizmet anlayışıyla müşterilerine değer katan bir firmadır.
              </p>
              <p>
                50'den fazla başarıyla tamamlanmış proje ve 500'ü aşkın mutlu aile ile
                bölgenin önde gelen inşaat firmalarından biri olarak, modern yaşam alanları
                inşa etme misyonumuzu sürdürüyoruz.
              </p>

              <h2>Tecrübemiz</h2>
              <p>
                Sektördeki uzun yıllar boyunca edindiğimiz deneyim, bizi sadece inşaat yapan
                bir firma olmaktan çıkarıp, müşterilerimizin hayallerini gerçeğe dönüştüren
                bir çözüm ortağı haline getirdi. Konut inşaatından ticari yapılara, proje
                yönetiminden tadilat hizmetlerine kadar geniş bir yelpazede hizmet sunuyoruz.
              </p>

              <h2>Neden Biz?</h2>
              <ul>
                <li>
                  <strong>10+ Yıllık Tecrübe:</strong> Sektörde edindiğimiz derin bilgi ve
                  deneyim.
                </li>
                <li>
                  <strong>50+ Tamamlanmış Proje:</strong> Başarıyla teslim ettiğimiz projeler.
                </li>
                <li>
                  <strong>500+ Mutlu Aile:</strong> Güvenimize layık gören müşterilerimiz.
                </li>
                <li>
                  <strong>Kaliteli Malzeme:</strong> Sadece birinci sınıf malzeme kullanımı.
                </li>
                <li>
                  <strong>Zamanında Teslim:</strong> Proje takvimlerine sadık kalma taahhüdü.
                </li>
                <li>
                  <strong>Profesyonel Ekip:</strong> Uzman mühendis ve teknik personel kadromuz.
                </li>
                <li>
                  <strong>Şeffaflık:</strong> Her aşamada açık ve dürüst iletişim.
                </li>
              </ul>

              <h2>Hizmet Bölgemiz</h2>
              <p>
                Ana faaliyet bölgemiz Tekirdağ Kapaklı olmakla birlikte, Çorlu, Çerkezköy,
                Malkara ve Tekirdağ merkez dahil olmak üzere geniş bir coğrafyada projeler
                gerçekleştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Daha Fazla Bilgi İçin İletişime Geçin"
        description="Projelerimiz ve hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz."
      />
    </>
  );
}
