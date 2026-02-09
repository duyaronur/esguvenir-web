"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/ui/BlogCard";
import { BlogPost } from "@/lib/content";
import { Search } from "lucide-react";

interface BlogListProps {
  posts: BlogPost[];
}

const categoryLabels: Record<string, string> = {
  insaat: "İnşaat",
  emlak: "Emlak",
  yatirim: "Yatırım",
  yasam: "Yaşam",
  haberler: "Haberler",
};

export default function BlogList({ posts }: BlogListProps) {
  const [filters, setFilters] = useState({
    category: "hepsi",
    search: "",
  });

  const categories = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    posts.forEach((post) => {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });
    return Object.entries(categoryCounts).map(([value, count]) => ({
      value,
      label: categoryLabels[value] || value,
      count,
    }));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Category filter
    if (filters.category !== "hepsi") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.excerpt.toLowerCase().includes(searchLower) ||
          (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(searchLower)))
      );
    }

    return filtered;
  }, [posts, filters]);

  return (
    <section className="section">
      <div className="container-custom">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="rounded-lg border border-neutral-light px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Blog kategorisi filtresi"
          >
            <option value="hepsi">Tüm Kategoriler</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label} ({cat.count})
              </option>
            ))}
          </select>

          <div className="relative min-w-[200px] flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral" />
            <input
              type="text"
              placeholder="Blog ara..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full rounded-lg border border-neutral-light px-4 py-2 pl-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Blog arama"
            />
          </div>
        </div>

        {/* Results */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-neutral">Aradığınız kriterlere uygun yazı bulunamadı.</p>
            <button
              onClick={() => setFilters({ category: "hepsi", search: "" })}
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
