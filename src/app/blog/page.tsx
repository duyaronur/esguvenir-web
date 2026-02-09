import Hero from "@/components/ui/Hero";
import BlogList from "@/components/BlogList";
import { getBlogPosts } from "@/lib/content";
import { PAGE_METADATA } from "@/lib/seo/constants";

export const metadata = PAGE_METADATA.blog;

export default function BlogPage() {
  const allPosts = getBlogPosts();

  return (
    <>
      <Hero title="Blog & Haberler" subtitle="İnşaat ve Emlak Dünyası" description="Sektörel haberler, uzman içerikler ve faydalı bilgiler." />

      <BlogList posts={allPosts} />
    </>
  );
}

