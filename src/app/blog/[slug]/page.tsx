import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug, extractHeadings } from "@/lib/content";
import { MDXContent } from "@/components/MDXContent";
import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import TableOfContents from "@/components/ui/TableOfContents";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { formatDate } from "@/lib/utils/helpers";
import { Calendar, Clock } from "lucide-react";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return genMeta({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    canonicalUrl: `${SITE_CONFIG.url}/blog/${post.slug}`,
    ogImage: post.coverImage,
    ogType: "article",
    articleData: {
      publishedTime: post.date,
      author: post.author,
      tags: post.tags,
    },
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    datePublished: post.date,
    image: post.coverImage,
    author: post.author,
  });

  const schemas = [articleSchema];
  if (post.faq && post.faq.length > 0) {
    schemas.push(generateFAQSchema(post.faq));
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
    { name: post.title, url: `${SITE_CONFIG.url}/blog/${post.slug}` },
  ]);
  schemas.push(breadcrumbSchema);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: post.title }]} />
        </div>
      </div>

      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <article className="prose prose-lg max-w-none">
              <MDXContent source={post.content} />
            </article>
            {headings.length > 0 && (
              <div className="hidden lg:block">
                <TableOfContents items={headings} />
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection title="Daha Fazla Bilgi İçin İletişime Geçin" description="İnşaat ve emlak konularında profesyonel danışmanlık almak için bize ulaşın." />
    </>
  );
}
