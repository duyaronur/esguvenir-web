import { Metadata } from "next";
import { SITE_CONFIG, PAGE_METADATA } from "./constants";

interface MetadataParams {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

export function generateMetadata(params: MetadataParams = {}): Metadata {
  const {
    title,
    description = SITE_CONFIG.description,
    keywords = SITE_CONFIG.keywords,
    canonicalUrl,
    ogImage,
    ogType = "website",
    articleData,
    noindex = false,
  } = params;

  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const url = canonicalUrl || SITE_CONFIG.url;
  const imageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${SITE_CONFIG.url}${ogImage}`
    : `${SITE_CONFIG.url}/images/og-default.jpg`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: ogType,
      locale: SITE_CONFIG.locale,
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
      ...(articleData && {
        publishedTime: articleData.publishedTime,
        modifiedTime: articleData.modifiedTime,
        authors: articleData.author ? [articleData.author] : undefined,
        tags: articleData.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@esguvenir", // Opsiyonel
    },
  };

  return metadata;
}

// Breadcrumb helper
export function generateBreadcrumbs(
  items: Array<{ name: string; url?: string }>
): Array<{ name: string; url?: string }> {
  return [{ name: "Anasayfa", url: "/" }, ...items];
}

// Canonical URL helper
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}
