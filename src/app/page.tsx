import Hero from "@/components/ui/Hero";
import Stats from "@/components/ui/Stats";
import ServiceCard from "@/components/ui/ServiceCard";
import ProjectCard from "@/components/ui/ProjectCard";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/ui/CTASection";
import { Home, Building2, ClipboardList, Wrench } from "lucide-react";
import { getProjects, getBlogPosts } from "@/lib/content";
import { generateLocalBusinessSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG, PAGE_METADATA } from "@/lib/seo/constants";

export const metadata = PAGE_METADATA.home;

export default function HomePage() {
  const featuredProjects = getProjects().slice(0, 3);
  const latestBlogPosts = getBlogPosts().slice(0, 3);
  const localBusinessSchema = generateLocalBusinessSchema();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <Hero
        title="Güven, Huzur ve Mutluluğun Temeli"
        subtitle="Tekirdağ Kapaklı'da 10+ Yıllık Tecrübe"
        description="50+ proje ve 500+ konut tecrübesiyle hayalinizdeki yaşam alanını inşa ediyoruz. Kaliteli malzeme, profesyonel ekip ve zamanında teslim garantisi."
        ctaText="Projelerimizi İncele"
        ctaHref="/projeler"
        secondaryCtaText="İletişime Geç"
        secondaryCtaHref="/iletisim"
        image="/images/banner.png"
      />

      {/* Stats Section */}
      <Stats />

      {/* Hizmetler */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hizmetlerimiz</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral">
              Konut inşaatından ticari yapılara, proje yönetiminden tadilat hizmetlerine kadar geniş
              yelpazede profesyonel çözümler sunuyoruz.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Projeler */}
      <section className="section bg-gradient-to-b from-neutral-lightest to-white">
        <div className="container-custom">
          <div className="mb-12 flex items-end justify-between animate-fade-in-up">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Öne Çıkan Projeler</h2>
              <p className="max-w-2xl text-lg text-neutral">
                Tekirdağ Kapaklı ve çevresinde tamamladığımız kaliteli inşaat projelerimiz.
              </p>
            </div>
            <a href="/projeler" className="btn btn-accent hidden lg:flex hover:scale-105 transition-transform">
              Tümünü Gör
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div key={project.slug} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center lg:hidden">
            <a href="/projeler" className="btn btn-accent hover:scale-105 transition-transform">
              Tüm Projeleri Gör
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Blog & Haberler</h2>
              <p className="max-w-2xl text-lg text-neutral">
                İnşaat, emlak ve yatırım dünyasından güncel haberler ve uzman içerikler.
              </p>
            </div>
            <a href="/blog" className="btn btn-secondary hidden lg:flex">
              Tümünü Gör
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestBlogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center lg:hidden">
            <a href="/blog" className="btn btn-secondary">
              Tüm Yazıları Gör
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Hayalinizdeki Projeyi Birlikte Gerçekleştirelim"
        description="Uzman ekibimizle inşaat ve emlak ihtiyaçlarınız için hemen iletişime geçin."
        ctaText="Ücretsiz Teklif Alın"
        ctaHref="/iletisim"
        variant="accent"
      />
    </>
  );
}
