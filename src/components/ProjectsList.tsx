"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/content";
import { Search } from "lucide-react";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [filters, setFilters] = useState({
    type: "hepsi",
    status: "hepsi",
    search: "",
  });

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Type filter
    if (filters.type !== "hepsi") {
      filtered = filtered.filter((p) => p.type === filters.type);
    }

    // Status filter
    if (filters.status !== "hepsi") {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          p.summary.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [projects, filters]);

  return (
    <section className="section">
      <div className="container-custom">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="rounded-lg border border-neutral-light px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Proje tipi filtresi"
          >
            <option value="hepsi">Tüm Tipler</option>
            <option value="konut">Konut</option>
            <option value="ticari">Ticari</option>
            <option value="karma">Karma</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="rounded-lg border border-neutral-light px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Proje durumu filtresi"
          >
            <option value="hepsi">Tüm Durumlar</option>
            <option value="tamamlandi">Tamamlandı</option>
            <option value="devam-ediyor">Devam Ediyor</option>
            <option value="planlaniyor">Planlanıyor</option>
          </select>

          <div className="relative min-w-[200px] flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral" />
            <input
              type="text"
              placeholder="Proje ara..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full rounded-lg border border-neutral-light px-4 py-2 pl-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Proje arama"
            />
          </div>
        </div>

        {/* Results */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-neutral">Aradığınız kriterlere uygun proje bulunamadı.</p>
            <button
              onClick={() => setFilters({ type: "hepsi", status: "hepsi", search: "" })}
              className="mt-4 text-primary hover:text-accent"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
