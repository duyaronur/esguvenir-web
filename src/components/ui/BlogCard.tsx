import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/content";
import { formatDate } from "@/lib/utils/helpers";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryLabels: Record<string, string> = {
    insaat: "İnşaat",
    emlak: "Emlak",
    yatirim: "Yatırım",
    tasarim: "Tasarım",
    hukuk: "Hukuk",
    finans: "Finans",
    yaşam: "Yaşam",
    teknik: "Teknik",
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group card">
      <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={post.coverImage}
          alt={post.altText || post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {categoryLabels[post.category]}
          </span>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-4 text-sm text-neutral">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formatDate(post.date)}
        </span>
        {post.readingTime && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime} dk
          </span>
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-primary group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-neutral">{post.excerpt}</p>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
        Devamını Oku
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
