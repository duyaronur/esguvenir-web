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
  image = "/images/hero-bg.jpg",
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px]">
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
        {overlay && <div className="absolute inset-0 bg-primary/80" />}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
        <div className="container-custom">
          <div className="max-w-3xl">
            {subtitle && (
              <p className="mb-4 text-lg font-medium text-accent">{subtitle}</p>
            )}
            <h1 className="mb-6 text-balance font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mb-8 text-lg leading-relaxed text-neutral-lightest md:text-xl">
                {description}
              </p>
            )}
            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-wrap gap-4">
                {ctaText && ctaHref && (
                  <Link href={ctaHref} className="btn btn-accent">
                    {ctaText}
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Link href={secondaryCtaHref} className="btn btn-secondary bg-white text-primary hover:bg-neutral-lightest">
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
