import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/ui/ContactForm";
import TeamCard from "@/components/ui/TeamCard";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG, PAGE_METADATA } from "@/lib/seo/constants";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppLink, getTelLink } from "@/lib/utils/helpers";

export const metadata = PAGE_METADATA.contact;

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "İletişim", url: `${SITE_CONFIG.url}/iletisim` },
  ]);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "İletişim" }]} />
        </div>
      </div>

      <Hero title="İletişim" subtitle="Bizimle İletişime Geçin" description="Proje ve hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz." />

      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">İletişim Bilgileri</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-darkest">Telefon</p>
                    <a href={getTelLink(SITE_CONFIG.contact.phoneRaw1)} className="text-primary hover:text-accent">{SITE_CONFIG.contact.phone1}</a><br />
                    <a href={getTelLink(SITE_CONFIG.contact.phoneRaw2)} className="text-primary hover:text-accent">{SITE_CONFIG.contact.phone2}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-darkest">E-posta</p>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-primary hover:text-accent">{SITE_CONFIG.contact.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-darkest">Adres</p>
                    <p className="text-neutral">{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getWhatsAppLink(SITE_CONFIG.contact.phoneRaw1, "Merhaba, ESGÜVENİR İnşaat hakkında bilgi almak istiyorum.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ile Yaz
                </a>
                <a href={getTelLink(SITE_CONFIG.contact.phoneRaw1)} className="btn btn-primary">
                  <Phone className="h-5 w-5" />
                  Hemen Ara
                </a>
              </div>
            </div>

            <div className="card">
              <h2 className="mb-6 text-2xl font-bold">İletişim Formu</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-lightest">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-3xl font-bold">Uzman Danışman Ekibimiz</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {SITE_CONFIG.team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
