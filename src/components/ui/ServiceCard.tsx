import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  image,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group card">
      {image && (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent">
        <Icon className="h-6 w-6 text-accent transition-colors group-hover:text-white" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
      <p className="mb-4 text-neutral">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
        Detayları Gör
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
