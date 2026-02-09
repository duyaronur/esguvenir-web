"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { getTelLink } from "@/lib/utils/helpers";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "Kurumsal",
      href: "/kurumsal/hakkimizda",
      submenu: [
        { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
        { name: "Misyon & Vizyon", href: "/kurumsal/misyon-vizyon" },
        { name: "Değerlerimiz", href: "/kurumsal/degerlerimiz" },
        { name: "Kalite Yaklaşımımız", href: "/kurumsal/kalite-yaklasimimiz" },
      ],
    },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Projeler", href: "/projeler" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="border-b border-neutral-light bg-primary py-2 text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden items-center gap-4 md:flex">
              <span className="text-neutral-lightest">
                📍 Tekirdağ Kapaklı'da Güvenilir İnşaat
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={getTelLink(SITE_CONFIG.contact.phoneRaw1)}
                className="flex items-center gap-1 hover:text-accent"
                aria-label="Telefon ile ara"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{SITE_CONFIG.contact.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="ESGÜVENİR İnşaat Logo"
              width={48}
              height={48}
              className="h-10 w-auto sm:h-12"
              priority
            />
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight text-primary sm:text-lg">ESGÜVENİR</span>
              <span className="text-[10px] text-neutral sm:text-xs">İnşaat - Emlak</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-medium text-neutral-darkest transition-colors hover:text-primary"
                >
                  {item.name}
                  {"submenu" in item && <ChevronDown className="h-4 w-4" />}
                </Link>
                {"submenu" in item && (
                  <div className="absolute left-0 top-full hidden w-56 rounded-lg border border-neutral-light bg-white py-2 shadow-lg group-hover:block">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-neutral-darkest transition-colors hover:bg-neutral-lightest hover:text-primary"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/iletisim" className="btn btn-primary">
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-primary hover:bg-neutral-lightest lg:hidden"
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-neutral-light bg-white lg:hidden">
          <div className="container-custom py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block font-medium text-neutral-darkest hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {"submenu" in item && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="text-sm text-neutral hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/iletisim"
                className="btn btn-primary mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
