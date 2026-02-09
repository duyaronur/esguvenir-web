import Hero from "@/components/ui/Hero";
import ProjectsList from "@/components/ProjectsList";
import { getProjects } from "@/lib/content";
import { PAGE_METADATA } from "@/lib/seo/constants";

export const metadata = PAGE_METADATA.projects;

export default function ProjectsPage() {
  const allProjects = getProjects();

  return (
    <>
      <Hero
        title="Projelerimiz"
        subtitle="50+ Başarılı Proje"
        description="Tekirdağ Kapaklı ve çevresinde tamamladığımız kaliteli inşaat projelerimiz."
      />

      <ProjectsList projects={allProjects} />
    </>
  );
}
