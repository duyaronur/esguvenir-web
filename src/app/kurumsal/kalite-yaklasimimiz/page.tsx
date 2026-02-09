import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Kalite Yaklaşımımız",
  description:
    "ESGÜVENİR İnşaat - Emlak'ın kalite yönetim sistemi ve yaklaşımı. Uluslararası standartlar, sürekli iyileştirme ve müşteri memnuniyeti odaklı çalışma.",
  canonicalUrl: `${SITE_CONFIG.url}/kurumsal/kalite-yaklasimimiz`,
});

export default function QualityPage() {
  const qualityPrinciples = [
    "Birinci sınıf, sertifikalı malzeme kullanımı",
    "Deneyimli ve kalifiye iş gücü",
    "Düzenli şantiye denetimleri ve kalite kontrolleri",
    "Uluslararası inşaat standartlarına uygunluk",
    "Proje aşamalarında dokümantasyon ve raporlama",
    "Müşteri geri bildirimlerinin takibi ve değerlendirilmesi",
    "Sürekli iyileştirme ve gelişim kültürü",
    "Tedarikçi ve alt yüklenici kalite değerlendirmesi",
  ];

  const qualitySteps = [
    {
      title: "Planlama ve Tasarım",
      description:
        "Proje başlangıcında detaylı planlama, zemin etüdü, mimari ve statik projeler hazırlanır.",
    },
    {
      title: "Malzeme Seçimi",
      description:
        "Sadece sertifikalı, test edilmiş ve garantili malzemeler tercih edilir. Her malzeme için kalite belgesi alınır.",
    },
    {
      title: "Ön Yapım Kontrolleri",
      description:
        "İnşaat öncesi tüm hazırlık çalışmaları ve malzemeler detaylı şekilde kontrol edilir.",
    },
    {
      title: "Yapım Aşaması",
      description:
        "Uzman mühendisler ve teknik ekip eşliğinde, standartlara uygun inşaat süreci yürütülür.",
    },
    {
      title: "Süreç İçi Denetim",
      description:
        "Her aşamada kalite kontrolleri yapılır, foto-video dokümantasyonu tutulur ve müşteriye raporlanır.",
    },
    {
      title: "Test ve Ölçüm",
      description:
        "Beton dayanımı, su yalıtımı, elektrik ve mekanik testler gibi teknik ölçümler yapılır.",
    },
    {
      title: "Nihai Muayene",
      description:
        "Proje tamamlandığında, tüm detaylar kontrol edilir ve eksiklikler giderilir.",
    },
    {
      title: "Teslimat ve Garanti",
      description:
        "Kusursuz teslim garantisi ve sonrasında garanti kapsamında destek sağlanır.",
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Kurumsal", url: `${SITE_CONFIG.url}/kurumsal/hakkimizda` },
    { name: "Kalite Yaklaşımımız", url: `${SITE_CONFIG.url}/kurumsal/kalite-yaklasimimiz` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Kurumsal" }, { name: "Kalite Yaklaşımımız" }]} />
        </div>
      </div>

      <Hero
        title="Kalite Yaklaşımımız"
        subtitle="Mükemmellik İçin Çalışıyoruz"
        description="Her projede en yüksek kalite standartlarını hedefleyen sistematik yaklaşımımız."
        image="/images/hero-bg.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose-custom">
              <h2>Kalite Politikamız</h2>
              <p>
                ESGÜVENİR İnşaat - Emlak olarak, <strong>kalite</strong> sadece bir hedef değil,
                işimizin temel taşıdır. Müşterilerimize sunduğumuz her proje, titizlikle
                planlanan, denetlenen ve sürekli iyileştirilen bir sürecin ürünüdür.
              </p>
              <p>
                Uluslararası inşaat standartlarına uygun, sürdürülebilir ve uzun ömürlü yapılar
                inşa etmeyi taahhüt ediyoruz. Müşteri memnuniyetini en üst düzeyde tutarak,
                sektörde kalite referansı olmayı hedefliyoruz.
              </p>
            </div>

            <div className="my-12">
              <h2 className="mb-6 text-2xl font-bold text-primary">Kalite İlkelerimiz</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {qualityPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-neutral-darkest">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-lightest">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold">Kalite Yönetim Süreci</h2>
          <div className="mx-auto max-w-5xl space-y-6">
            {qualitySteps.map((step, index) => (
              <div key={index} className="card flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">{step.title}</h3>
                  <p className="text-neutral">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-primary p-8 text-white md:p-12">
              <h2 className="mb-6 text-3xl font-bold">Kalite Garantimiz</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Tamamladığımız her projede <strong>garanti belgesi</strong> sunuyoruz. İnşaat
                  sonrası ortaya çıkabilecek yapısal sorunlar, garanti kapsamında ücretsiz olarak
                  giderilir.
                </p>
                <p>
                  Müşterilerimiz, proje süresince ve sonrasında bizimle <strong>7/24 iletişim</strong>{" "}
                  halinde olabilirler. Sorularınıza ve taleplerinize en kısa sürede yanıt veriyoruz.
                </p>
                <p>
                  Kalite standartlarımızı sürekli geliştiriyor, müşteri geri bildirimlerini
                  değerlendirerek süreçlerimizi iyileştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Kalite Odaklı Projeler İçin İletişime Geçin"
        description="Profesyonel ekibimizle kaliteli inşaat hizmetleri almak için bizimle iletişime geçin."
      />
    </>
  );
}
