import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-neutral hover:text-primary">
            Anasayfa
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-neutral-light" />
            {item.url ? (
              <Link href={item.url} className="text-neutral hover:text-primary">
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-primary">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
