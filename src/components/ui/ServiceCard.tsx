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
    <Link href={href} className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {image && (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
        <Icon className="h-7 w-7 text-accent transition-colors group-hover:text-white" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">{title}</h3>
      <p className="mb-4 text-neutral-dark leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-bold text-accent">
        Detayları Gör
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
