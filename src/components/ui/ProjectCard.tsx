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

  const statusColors = {
    tamamlandi: "badge-success",
    "devam-ediyor": "badge-warning",
    planlama: "badge-info",
  };

  return (
    <Link href={`/projeler/${project.slug}`} className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute right-3 top-3 flex gap-2">
          <span className="badge badge-accent badge-lg font-semibold shadow-lg">
            {typeLabels[project.type]}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-white">
            <ArrowRight className="h-5 w-5" />
            <span className="font-semibold">Detayları Gör</span>
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-sm text-neutral-dark">
          <MapPin className="h-4 w-4" />
          {project.location}
        </span>
        <span className={`badge ${statusColors[project.status]} badge-sm`}>
          {statusLabels[project.status]}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-neutral-dark leading-relaxed">{project.summary}</p>

      <div className="flex items-center justify-between pt-3 border-t border-neutral-light">
        {project.units && (
          <span className="text-sm text-neutral-darkest font-medium">
            <strong className="text-primary">{project.units}</strong> Konut
          </span>
        )}
        <span className="inline-flex items-center gap-1 text-sm font-bold text-accent">
          Detaylar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
