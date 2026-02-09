import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { Heart, Shield, Users, Award, Lightbulb, Handshake } from "lucide-react";

export const metadata = generateMetadata({
  title: "Değerlerimiz",
  description:
    "ESGÜVENİR İnşaat - Emlak'ın kurumsal değerleri. Güven, dürüstlük, kalite, müşteri odaklılık ve sürdürülebilirlik ilkelerimiz.",
  canonicalUrl: `${SITE_CONFIG.url}/kurumsal/degerlerimiz`,
});

export default function ValuesPage() {
  const values = [
    {
      icon: Shield,
      title: "Güven",
      description:
        "Müşterilerimizle kurduğumuz ilişkinin temeli güvendir. Sözümüzün arkasında durur, verdiğimiz taahhütleri eksiksiz yerine getiririz.",
    },
    {
      icon: Heart,
      title: "Dürüstlük",
      description:
        "Şeffaf ve dürüst iletişim ilkemizdir. Müşterilerimize her zaman doğru bilgi verir, gizli maliyet ve sürpriz uygulamalardan kaçınırız.",
    },
    {
      icon: Award,
      title: "Kalite",
      description:
        "Birinci sınıf malzeme kullanımı ve profesyonel işçilikle, her projemizde en yüksek kalite standartlarını hedefleriz.",
    },
    {
      icon: Users,
      title: "Müşteri Odaklılık",
      description:
        "Müşterilerimizin beklentilerini anlamak ve aşmak önceliğimizdir. Her proje, müşteri memnuniyeti odağında yürütülür.",
    },
    {
      icon: Lightbulb,
      title: "İnovasyon",
      description:
        "Sektördeki yenilikleri takip eder, modern teknolojileri ve yöntemleri projelerimize entegre ederiz.",
    },
    {
      icon: Handshake,
      title: "İşbirliği",
      description:
        "Ekip çalışmasına inanır, tüm paydaşlarımızla işbirliği içinde hareket ederiz. Başarı, birlikte çalışmaktan geçer.",
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Kurumsal", url: `${SITE_CONFIG.url}/kurumsal/hakkimizda` },
    { name: "Değerlerimiz", url: `${SITE_CONFIG.url}/kurumsal/degerlerimiz` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Kurumsal" }, { name: "Değerlerimiz" }]} />
        </div>
      </div>

      <Hero
        title="Değerlerimiz"
        subtitle="İlkelerimiz ve İnançlarımız"
        description="İşimizi yürütürken bizi yönlendiren temel değerler."
        image="/images/hero-bg.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-lg text-neutral">
              ESGÜVENİR İnşaat - Emlak olarak, sadece binalar inşa etmiyoruz; güven, kalite ve
              dürüstlük üzerine kurulu uzun vadeli ilişkiler inşa ediyoruz. İşimizi yürütürken
              bizi yönlendiren temel değerlerimiz:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-primary">{value.title}</h3>
                  <p className="leading-relaxed text-neutral">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="rounded-2xl bg-gradient-accent p-8 text-white md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold">Taahhütlerimiz</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    ✓ Her projede <strong>en yüksek kalite standartlarını</strong> sağlamak
                  </p>
                  <p>
                    ✓ Müşterilerimize <strong>şeffaf ve dürüst iletişim</strong> sunmak
                  </p>
                  <p>
                    ✓ <strong>Zamanında teslimat</strong> taahhüdümüzü yerine getirmek
                  </p>
                  <p>
                    ✓ <strong>Çevreye saygılı</strong> ve sürdürülebilir projeler geliştirmek
                  </p>
                  <p>
                    ✓ Ekibimizin ve iş ortaklarımızın <strong>sürekli gelişimini</strong>{" "}
                    desteklemek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Değerlerimizle Aynı Çizgide misiniz?"
        description="Sizinle çalışmayı ve değerlerimizi projelerinizde hayata geçirmeyi dört gözle bekliyoruz."
      />
    </>
  );
}
