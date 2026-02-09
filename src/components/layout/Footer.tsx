import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { getTelLink, getWhatsAppLink } from "@/lib/utils/helpers";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetler" },
    { name: "Projelerimiz", href: "/projeler" },
    { name: "Blog", href: "/blog" },
    { name: "SSS", href: "/sss" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const services = [
    { name: "Konut İnşaatı", href: "/hizmetler/konut-insaati" },
    { name: "Ticari Yapılar", href: "/hizmetler/ticari-yapilar" },
    { name: "Proje Yönetimi", href: "/hizmetler/proje-yonetimi" },
    { name: "Tadilat & Yenileme", href: "/hizmetler/tadilat-yenileme" },
  ];

  const legal = [
    { name: "KVKK", href: "/kvkk" },
    { name: "Gizlilik Politikası", href: "/gizlilik" },
    { name: "Çerez Politikası", href: "/cerez-politikasi" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Şirket Bilgileri */}
          <div>
            <div className="mb-4 flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.png"
                alt="ESGÜVENİR İnşaat Logo"
                width={48}
                height={48}
                className="h-10 w-auto sm:h-12"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight sm:text-lg">ESGÜVENİR</span>
                <span className="text-xs text-neutral-light sm:text-sm">İnşaat - Emlak</span>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-neutral-light">
              Tekirdağ Kapaklı'da 50+ proje ve 500+ konut tecrübesiyle güvenilir inşaat ve emlak
              hizmetleri.
            </p>
            <div className="flex gap-3">{SITE_CONFIG.social.facebook && (
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-accent"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {SITE_CONFIG.social.instagram && (
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-accent"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-light transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-light transition-colors hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getTelLink(SITE_CONFIG.contact.phoneRaw1)}
                  className="flex items-start gap-2 text-sm text-neutral-light transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.phone1}</span>
                </a>
              </li>
              <li>
                <a
                  href={getTelLink(SITE_CONFIG.contact.phoneRaw2)}
                  className="flex items-start gap-2 text-sm text-neutral-light transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.phone2}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-start gap-2 text-sm text-neutral-light transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-light">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.region}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-light md:flex-row">
            <p>
              © {currentYear} {SITE_CONFIG.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
