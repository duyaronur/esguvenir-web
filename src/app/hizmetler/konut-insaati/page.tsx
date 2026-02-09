import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Konut İnşaatı",
  description:
    "Tekirdağ Kapaklı'da modern konut inşaatı hizmetleri. Villalar, apartmanlar ve toplu konut projeleri için profesyonel çözümler.",
  canonicalUrl: getCanonicalUrl("/hizmetler/konut-insaati"),
});

export default function ResidentialConstructionPage() {
  const features = [
    "Modern mimari ve şık tasarım",
    "Depreme dayanıklı yapı sistemleri",
    "Enerji verimli malzemeler",
    "Su ve ısı yalıtımı",
    "Kaliteli iç ve dış cephe malzemeleri",
    "Peyzaj ve çevre düzenlemesi",
    "Otopark ve sosyal alanlar",
    "Garanti ve satış sonrası destek",
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Hizmetler", url: `${SITE_CONFIG.url}/hizmetler` },
    { name: "Konut İnşaatı", url: `${SITE_CONFIG.url}/hizmetler/konut-insaati` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Hizmetler", url: "/hizmetler" }, { name: "Konut İnşaatı" }]} />
        </div>
      </div>

      <Hero title="Konut İnşaatı" subtitle="Hayalinizdeki Evi Birlikte İnşa Edelim" description="Modern, konforlu ve güvenli yaşam alanları" />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose-custom">
            <p className="lead">ESGÜVENİR İnşaat - Emlak olarak, Tekirdağ Kapaklı'da modern konut inşaatı alanında uzmanlaşmış bir firmayız. Villalar, apartmanlar ve toplu konut projelerinde 500+ ailenin hayalini gerçeğe dönüştürdük.</p>

            <h2>Konut İnşaatı Hizmetlerimiz</h2>
            <ul>
              <li><strong>Villa İnşaatı:</strong> Özel tasarım, geniş bahçe ve modern konfor.</li>
              <li><strong>Apartman İnşaatı:</strong> Şehir merkezinde kaliteli konut projeleri.</li>
              <li><strong>Toplu Konut:</strong> Site ve kompleks projeleri.</li>
              <li><strong>İkiz Villa:</strong> Ekonomik ve estetik çözümler.</li>
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

      <CTASection title="Konut Projeniz İçin Teklif Alın" description="Hayalinizdeki evi inşa etmek için bizimle iletişime geçin." />
    </>
  );
}
