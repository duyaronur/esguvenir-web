import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusLabels = {
    tamamlandi: "Tamamlandı",
    "devam-ediyor": "Devam Ediyor",
    planlama: "Planlama",
  };

  const typeLabels = {
    konut: "Konut",
    ticari: "Ticari",
    karma: "Karma",
    tadilat: "Tadilat",
  };

  return (
    <Link href={`/projeler/${project.slug}`} className="group card">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            {typeLabels[project.type]}
          </span>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-sm text-neutral">
          <MapPin className="h-4 w-4" />
          {project.location}
        </span>
        <span className="text-sm font-medium text-primary">{statusLabels[project.status]}</span>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-primary group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-neutral">{project.summary}</p>

      <div className="flex items-center justify-between">
        {project.units && (
          <span className="text-sm text-neutral-darkest">
            <strong>{project.units}</strong> Konut
          </span>
        )}
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
          Detaylar
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
