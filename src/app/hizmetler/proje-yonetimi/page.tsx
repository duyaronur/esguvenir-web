import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Proje Yönetimi",
  description:
    "İnşaat proje yönetimi hizmetleri. Planlama, koordinasyon, kalite kontrol ve zamanında teslim garantisi ile profesyonel yönetim.",
  canonicalUrl: getCanonicalUrl("/hizmetler/proje-yonetimi"),
});

export default function ProjectManagementPage() {
  const services = [
    "Proje planlama ve zaman çizelgesi",
    "Bütçe yönetimi ve maliyet kontrolü",
    "Tedarikçi ve alt yüklenici koordinasyonu",
    "Kalite kontrol ve denetim",
    "Risk yönetimi ve önleyici tedbirler",
    "İş güvenliği ve saha yönetimi",
    "Dokümantasyon ve raporlama",
    "Müşteri iletişimi ve şeffaflık",
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Hizmetler", url: `${SITE_CONFIG.url}/hizmetler` },
    { name: "Proje Yönetimi", url: `${SITE_CONFIG.url}/hizmetler/proje-yonetimi` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Hizmetler", url: "/hizmetler" }, { name: "Proje Yönetimi" }]} />
        </div>
      </div>

      <Hero title="Proje Yönetimi" subtitle="Profesyonel İnşaat Yönetimi" description="Baştan sona tüm süreç kontrolü ve koordinasyonu" />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose-custom">
            <p className="lead">İnşaat projelerinizi başlangıçtan bitişe kadar profesyonel bir şekilde yönetiyor, kalite, maliyet ve zaman hedeflerine ulaşmanızı sağlıyoruz.</p>

            <h2>Proje Yönetimi Nedir?</h2>
            <p>Proje yönetimi, inşaat sürecinin tüm aşamalarının planlanması, koordine edilmesi ve denetlenmesidir. Başarılı bir inşaat için sadece iyi bir tasarım yetmez; doğru yönetim, kaliteli malzeme, deneyimli ekip ve zamanında teslimat kritik öneme sahiptir.</p>

            <h2>Hizmetlerimiz</h2>
            <div className="grid gap-3 sm:grid-cols-2 not-prose">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-darkest">{service}</span>
                </div>
              ))}
            </div>

            <h2 className="mt-8">Proje Yönetim Sürecimiz</h2>
            <ol>
              <li><strong>Planlama:</strong> Detaylı proje planı, zaman çizelgesi ve bütçe hazırlığı.</li>
              <li><strong>Hazırlık:</strong> İzinler, tedarikçi seçimi ve malzeme temini.</li>
              <li><strong>Uygulama:</strong> Günlük koordinasyon, kalite kontrol ve ilerleme takibi.</li>
              <li><strong>Kontrol:</strong> Düzenli raporlama, sorun çözme ve iyileştirme.</li>
              <li><strong>Teslim:</strong> Nihai muayene, eksik giderme ve resmi teslim.</li>
            </ol>
          </div>
        </div>
      </section>

      <CTASection title="Projenizi Profesyonelce Yönetelim" description="Deneyimli proje yönetim ekibimizle başarıya ulaşın." />
    </>
  );
}
