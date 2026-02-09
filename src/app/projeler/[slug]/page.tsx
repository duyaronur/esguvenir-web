import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug } from "@/lib/content";
import { MDXContent } from "@/components/MDXContent";
import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import ProjectCard from "@/components/ui/ProjectCard";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { MapPin, Calendar, Home } from "lucide-react";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return genMeta({
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
    canonicalUrl: `${SITE_CONFIG.url}/projeler/${project.slug}`,
    ogImage: project.coverImage,
  });
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const projectSchema = generateProjectSchema({
    title: project.title,
    description: project.summary,
    url: `${SITE_CONFIG.url}/projeler/${project.slug}`,
    image: project.coverImage,
    dateCompleted: project.deliveryDate,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Projeler", url: `${SITE_CONFIG.url}/projeler` },
    { name: project.title, url: `${SITE_CONFIG.url}/projeler/${project.slug}` },
  ]);

  // İlgili projeler
  const relatedProjects = getProjects()
    .filter((p) => p.slug !== project.slug && p.type === project.type)
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([projectSchema, breadcrumbSchema]) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Projeler", url: "/projeler" }, { name: project.title }]} />
        </div>
      </div>

      <Hero title={project.title} subtitle={project.location} description={project.summary} image={project.coverImage} />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="mb-8 flex flex-wrap gap-4">
            {project.location && (
              <div className="flex items-center gap-2 rounded-lg bg-neutral-lightest px-4 py-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{project.location}</span>
              </div>
            )}
            {project.deliveryDate && (
              <div className="flex items-center gap-2 rounded-lg bg-neutral-lightest px-4 py-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">{project.deliveryDate}</span>
              </div>
            )}
            {project.units && (
              <div className="flex items-center gap-2 rounded-lg bg-neutral-lightest px-4 py-2">
                <Home className="h-5 w-5 text-primary" />
                <span className="font-medium">{project.units} Ünite</span>
              </div>
            )}
          </div>

          <article className="prose prose-lg max-w-none">
            <MDXContent source={project.content} />
          </article>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section bg-neutral-lightest">
          <div className="container-custom">
            <h2 className="mb-8 text-center text-3xl font-bold">Benzer Projeler</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title="Benzer Bir Proje Mi İstiyorsunuz?" description="Size özel proje teklifimiz için iletişime geçin." variant="accent" />
    </>
  );
}
