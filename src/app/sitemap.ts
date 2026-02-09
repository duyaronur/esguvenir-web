import { MetadataRoute } from "next";
import { getProjects, getBlogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esguvenir.com";
  
  const allProjects = getProjects();
  const allBlogPosts = getBlogPosts();

  // Statik sayfalar
  const staticPages = [
    "",
    "/kurumsal/hakkimizda",
    "/kurumsal/misyon-vizyon",
    "/kurumsal/degerlerimiz",
    "/kurumsal/kalite-yaklasimimiz",
    "/hizmetler",
    "/hizmetler/konut-insaati",
    "/hizmetler/ticari-yapilar",
    "/hizmetler/proje-yonetimi",
    "/hizmetler/tadilat-yenileme",
    "/projeler",
    "/blog",
    "/sss",
    "/iletisim",
    "/kvkk",
    "/gizlilik",
    "/cerez-politikasi",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Proje sayfaları
  const projectPages = allProjects.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog sayfaları
  const blogPages = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
