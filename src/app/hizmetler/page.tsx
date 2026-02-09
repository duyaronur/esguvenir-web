import Hero from "@/components/ui/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import { Home, Building2, ClipboardList, Wrench } from "lucide-react";
import { generateMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG, PAGE_METADATA } from "@/lib/seo/constants";

export const metadata = PAGE_METADATA.services;

export default function ServicesPage() {
  const services = [
    {
      title: "Konut İnşaatı",
      description:
        "Modern yaşam alanları, kaliteli malzeme ve zamanında teslim garantisi ile hayalinizdeki evi inşa ediyoruz.",
      icon: Home,
      href: "/hizmetler/konut-insaati",
    },
    {
      title: "Ticari Yapılar",
      description:
        "İşletmenizin ihtiyaçlarına özel ticari binalar, ofisler ve endüstriyel tesisler inşa ediyoruz.",
      icon: Building2,
      href: "/hizmetler/ticari-yapilar",
    },
    {
      title: "Proje Yönetimi",
      description:
        "İnşaat projelerinizi baştan sona profesyonel ekibimizle yönetiyor, kalite ve zamanında teslimi garanti ediyoruz.",
      icon: ClipboardList,
      href: "/hizmetler/proje-yonetimi",
    },
    {
      title: "Tadilat & Yenileme",
      description:
        "Mevcut yapılarınızı modern standartlara uygun şekilde yenileyip değer katıyoruz.",
      icon: Wrench,
      href: "/hizmetler/tadilat-yenileme",
    },
  ];

  return (
    <>
      <Hero
        title="Hizmetlerimiz"
        subtitle="Kapsamlı İnşaat Çözümleri"
        description="Konut inşaatından ticari yapılara, proje yönetiminden tadilat hizmetlerine kadar geniş yelpazede profesyonel çözümler."
        image="/images/hero-bg.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-lg text-neutral">
              50+ proje ve 500+ konut tecrübemizle, Tekirdağ Kapaklı'da her türlü inşaat
              ihtiyacınıza profesyonel çözümler sunuyoruz.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-lightest">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-3xl font-bold">Neden ESGÜVENİR?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <h3 className="mb-2 text-xl font-semibold text-primary">Deneyimli Ekip</h3>
              <p className="text-neutral">
                Uzman mühendis ve teknik personel kadromuzla profesyonel hizmet.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="mb-2 text-xl font-semibold text-primary">Kaliteli Malzeme</h3>
              <p className="text-neutral">
                Sadece birinci sınıf, sertifikalı malzemeler kullanıyoruz.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="mb-2 text-xl font-semibold text-primary">Zamanında Teslim</h3>
              <p className="text-neutral">
                Proje takvimlerine sadık kalarak zamanında teslim garantisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Projeniz İçin Hemen İletişime Geçin"
        description="Uzman ekibimizle inşaat ihtiyaçlarınız için ücretsiz danışmanlık alın."
        variant="accent"
      />
    </>
  );
}
