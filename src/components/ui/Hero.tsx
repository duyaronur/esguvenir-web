import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: string;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image = "/images/banner.png",
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {overlay && <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/90" />}
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
        <div className="container-custom">
          <div className="max-w-3xl">
            {subtitle && (
              <p className="mb-4 text-lg font-semibold text-accent animate-fade-in-down uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            <h1 className="mb-6 text-balance font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-fade-in-up stagger-1">
              {title}
            </h1>
            {description && (
              <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl animate-fade-in-up stagger-2">
                {description}
              </p>
            )}
            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
                {ctaText && ctaHref && (
                  <Link href={ctaHref} className="btn btn-accent btn-lg hover:scale-105 transition-transform">
                    {ctaText}
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Link href={secondaryCtaHref} className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
