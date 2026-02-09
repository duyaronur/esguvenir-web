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
    <Link href={`/blog/${post.slug}`} className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
      <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={post.coverImage}
          alt={post.altText || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute left-3 top-3">
          <span className="badge badge-primary badge-lg font-semibold shadow-lg">
            {categoryLabels[post.category]}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold">Devamını Oku</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-4 text-sm text-neutral-dark">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formatDate(post.date)}
        </span>
        {post.readingTime && (
          <span className="flex items-center gap-1 badge badge-outline badge-sm">
            <Clock className="h-3 w-3" />
            {post.readingTime} dk
          </span>
        )}
      </div>

      <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-neutral-dark leading-relaxed">{post.excerpt}</p>

      <div className="pt-3 border-t border-neutral-light">
        <span className="inline-flex items-center gap-1 text-sm font-bold text-accent">
          Devamını Oku
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
