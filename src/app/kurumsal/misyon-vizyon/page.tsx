import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { Target, Eye } from "lucide-react";

export const metadata = generateMetadata({
  title: "Misyon & Vizyon",
  description:
    "ESGÜVENİR İnşaat - Emlak'ın misyonu ve vizyonu. Kaliteli, güvenilir ve sürdürülebilir inşaat hizmetleri sunarak müşteri memnuniyetini ön planda tutuyoruz.",
  canonicalUrl: `${SITE_CONFIG.url}/kurumsal/misyon-vizyon`,
});

export default function MissionVisionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Kurumsal", url: `${SITE_CONFIG.url}/kurumsal/hakkimizda` },
    { name: "Misyon & Vizyon", url: `${SITE_CONFIG.url}/kurumsal/misyon-vizyon` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Kurumsal" }, { name: "Misyon & Vizyon" }]} />
        </div>
      </div>

      <Hero
        title="Misyon & Vizyon"
        subtitle="Hedeflerimiz ve Değerlerimiz"
        description="Güven, kalite ve sürdürülebilirlik odaklı inşaat anlayışımız."
        image="/images/hero-bg.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Misyon */}
            <div className="card">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-primary">Misyonumuz</h2>
              <div className="space-y-4 text-neutral">
                <p className="leading-relaxed">
                  Tekirdağ ve çevresinde yaşayan insanlara <strong>kaliteli</strong>,{" "}
                  <strong>güvenilir</strong> ve <strong>sürdürülebilir</strong> inşaat ve emlak
                  hizmetleri sunarak, hayallerindeki yaşam alanlarını gerçeğe dönüştürmek.
                </p>
                <p className="leading-relaxed">
                  Müşteri memnuniyetini her şeyin üzerinde tutarak, şeffaf, dürüst ve profesyonel
                  bir hizmet anlayışıyla sektörde öncü olmak.
                </p>
                <p className="leading-relaxed">
                  Çevreye duyarlı, modern standartlara uygun ve insan odaklı projeler geliştirerek,
                  topluma ve bölgeye katma değer yaratmak.
                </p>
              </div>
            </div>

            {/* Vizyon */}
            <div className="card">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-primary">Vizyonumuz</h2>
              <div className="space-y-4 text-neutral">
                <p className="leading-relaxed">
                  Türkiye'nin en güvenilir ve tercih edilen inşaat firmalarından biri olarak,
                  bölgesel liderliğimizi ulusal çapta tanınan bir marka kimliğine dönüştürmek.
                </p>
                <p className="leading-relaxed">
                  Teknoloji ve inovasyonu inşaat süreçlerimizde etkin kullanarak, sektörde fark
                  yaratan, örnek gösterilen bir firma olmak.
                </p>
                <p className="leading-relaxed">
                  Sürdürülebilir ve çevre dostu inşaat projelerine imza atarak, gelecek nesillere
                  yaşanabilir bir dünya bırakmak için sorumluluğumuzu yerine getirmek.
                </p>
              </div>
            </div>
          </div>

          {/* Stratejik Hedefler */}
          <div className="mt-12">
            <h2 className="mb-8 text-center text-3xl font-bold">Stratejik Hedeflerimiz</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="card">
                <h3 className="mb-3 text-xl font-semibold text-primary">Müşteri Memnuniyeti</h3>
                <p className="text-neutral">
                  Her projede %100 müşteri memnuniyeti sağlamak ve referans olunan bir firma
                  olmak.
                </p>
              </div>
              <div className="card">
                <h3 className="mb-3 text-xl font-semibold text-primary">Kalite Standartları</h3>
                <p className="text-neutral">
                  Uluslararası kalite standartlarını projelerimize entegre ederek sürekli
                  iyileştirme sağlamak.
                </p>
              </div>
              <div className="card">
                <h3 className="mb-3 text-xl font-semibold text-primary">Teknolojik Gelişim</h3>
                <p className="text-neutral">
                  İnşaat teknolojilerindeki yenilikleri takip ederek projelerimizde uygulamak.
                </p>
              </div>
              <div className="card">
                <h3 className="mb-3 text-xl font-semibold text-primary">Çevre Sorumluluğu</h3>
                <p className="text-neutral">
                  Enerji verimliliği yüksek, çevre dostu malzemeler kullanarak sürdürülebilir
                  projeler geliştirmek.
                </p>
              </div>
              <div className="card">
                <h3 className="mb-3 text-xl font-semibold text-primary">İş Gücü Gelişimi</h3>
                <p className="text-neutral">
                  Ekibimizin sürekli eğitim almasını sağlayarak sektördeki en iyi profesyonelleri
                  bünyemizde barındırmak.
                </p>
              </div>
              <div className="card">
                <h3 className="mb-3 text-xl font-semibold text-primary">Sosyal Sorumluluk</h3>
                <p className="text-neutral">
                  Faaliyet gösterdiğimiz bölgelerde sosyal sorumluluk projeleri yürüterek topluma
                  katkıda bulunmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Hayalinizdeki Projeyi Birlikte Gerçekleştirelim"
        description="Misyon ve vizyonumuz doğrultusunda size hizmet etmekten mutluluk duyarız."
      />
    </>
  );
}
