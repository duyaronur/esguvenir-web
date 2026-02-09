import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "primary" | "accent";
}

export default function CTASection({
  title,
  description,
  ctaText = "İletişime Geç",
  ctaHref = "/iletisim",
  variant = "primary",
}: CTASectionProps) {
  const bgClass = variant === "primary" ? "bg-gradient-primary" : "bg-gradient-accent";

  return (
    <section className={`section ${bgClass} text-white`}>
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
          {description && (
            <p className="mb-8 text-lg leading-relaxed text-neutral-lightest">
              {description}
            </p>
          )}
          <Link href={ctaHref} className="btn bg-white text-primary hover:bg-neutral-lightest">
            {ctaText}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
