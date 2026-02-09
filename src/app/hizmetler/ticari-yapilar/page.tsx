import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Ticari Yapılar",
  description:
    "Tekirdağ Kapaklı'da ticari bina, ofis, mağaza ve fabrika inşaatı. İşletmenizin ihtiyaçlarına özel profesyonel çözümler.",
  canonicalUrl: getCanonicalUrl("/hizmetler/ticari-yapilar"),
});

export default function CommercialBuildingsPage() {
  const features = [
    "İşletme ihtiyaçlarına özel tasarım",
    "Geniş açıklık sistemleri",
    "Güçlü altyapı ve yük taşıma kapasitesi",
    "Yangın güvenlik sistemleri",
    "Enerji verimliliği",
    "Yüksek tavan ve depolama alanları",
    "Modern cephe ve estetik",
    "Otopark ve yükleme alanları",
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Hizmetler", url: `${SITE_CONFIG.url}/hizmetler` },
    { name: "Ticari Yapılar", url: `${SITE_CONFIG.url}/hizmetler/ticari-yapilar` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Hizmetler", url: "/hizmetler" }, { name: "Ticari Yapılar" }]} />
        </div>
      </div>

      <Hero title="Ticari Yapılar" subtitle="İşletmeniz İçin Profesyonel Mekanlar" description="Ofisler, mağazalar, fabrikalar ve ticari kompleksler" />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose-custom">
            <p className="lead">İşletmenizin büyümesine katkı sağlayacak, fonksiyonel ve estetik ticari yapılar inşa ediyoruz. Ofis binalarından fabrikalara, mağazalardan ticari komplekslere kadar geniş yelpazede hizmet veriyoruz.</p>

            <h2>Ticari İnşaat Hizmetlerimiz</h2>
            <ul>
              <li><strong>Ofis Binaları:</strong> Modern, prestijli ve fonksiyonel ofisler.</li>
              <li><strong>Mağaza ve Showroom:</strong> Müşteri odaklı tasarım ve düzenleme.</li>
              <li><strong>Fabrika ve Üretim Tesisleri:</strong> Endüstriyel standartlarda inşaat.</li>
              <li><strong>Depo ve Lojistik Merkezleri:</strong> Geniş alan ve yüksek tavan.</li>
              <li><strong>Ticari Kompleksler:</strong> AVM ve karma kullanım projeleri.</li>
            </ul>

            <h2>Özelliklerimiz</h2>
            <div className="grid gap-3 sm:grid-cols-2 not-prose">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-darkest">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ticari Projeniz İçin Görüşelim" description="İşletmenize özel ticari yapı inşaatı için bizimle iletişime geçin." variant="accent" />
    </>
  );
}
