import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Tadilat & Yenileme",
  description:
    "Ev ve işyeri tadilat hizmetleri. İç mekan yenileme, banyo-mutfak tadilatı, cephe yenileme ve kapsamlı renovasyon.",
  canonicalUrl: getCanonicalUrl("/hizmetler/tadilat-yenileme"),
});

export default function RenovationPage() {
  const services = [
    "İç mekan yenileme ve dekorasyon",
    "Banyo ve mutfak tadilatı",
    "Cephe yenileme ve dış mekan",
    "Elektrik ve tesisat yenileme",
    "Zemin ve duvar kaplamaları",
    "Boya badana işleri",
    "Kapı pencere değişimi",
    "Isı ve su yalıtımı",
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Hizmetler", url: `${SITE_CONFIG.url}/hizmetler` },
    { name: "Tadilat & Yenileme", url: `${SITE_CONFIG.url}/hizmetler/tadilat-yenileme` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Hizmetler", url: "/hizmetler" }, { name: "Tadilat & Yenileme" }]} />
        </div>
      </div>

      <Hero title="Tadilat & Yenileme" subtitle="Mekanınıza Yeni Bir Hayat" description="Modern ve fonksiyonel yaşam alanları için renovasyon" />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose-custom">
            <p className="lead">Mevcut konut ve işyerlerinizi modern standartlara uygun hale getiriyor, estetik ve fonksiyonel yenilemeler yapıyoruz. Küçük onarımlardan kapsamlı renovasyonlara kadar tüm tadilat ihtiyaçlarınızda yanınızdayız.</p>

            <h2>Tadilat Hizmetlerimiz</h2>
            <div className="grid gap-3 sm:grid-cols-2 not-prose mb-6">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-darkest">{service}</span>
                </div>
              ))}
            </div>

            <h2>Tadilat Süreci</h2>
            <p>Tadilat projelerimizde şu adımları izliyoruz:</p>
            <ol>
              <li><strong>Keşif ve Analiz:</strong> Mekanınızı inceliyor, ihtiyaçlarınızı dinliyoruz.</li>
              <li><strong>Teklif ve Planlama:</strong> Detaylı teklif ve takvim sunuyoruz.</li>
              <li><strong>Uygulama:</strong> Deneyimli ekibimizle tadilat çalışmalarını gerçekleştiriyoruz.</li>
              <li><strong>Kalite Kontrol:</strong> Her aşamada kontrol ve müşteri onayı alıyoruz.</li>
              <li><strong>Teslim:</strong> Temizlik dahil, anahtar teslim hizmet.</li>
            </ol>

            <h2>Neden Tadilat?</h2>
            <ul>
              <li>Mevcut mekanınızın değerini artırmak</li>
              <li>Enerji verimliliğini yükseltmek</li>
              <li>Modern ve estetik görünüm kazandırmak</li>
              <li>Fonksiyonel alan kullanımı</li>
              <li>Yeni inşaata göre daha ekonomik</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Tadilat Projeniz İçin Ücretsiz Keşif" description="Mekanınızı yenilemek için hemen bizimle iletişime geçin." variant="accent" />
    </>
  );
}
