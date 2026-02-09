import type { Metadata } from "next";
import { inter, montserrat } from "@/lib/utils/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateOrganizationSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/lib/seo/constants";
import "./globals.css";

export const metadata: Metadata = generateMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  canonicalUrl: SITE_CONFIG.url,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="tr" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics (Opsiyonel) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-to-main">
          Ana içeriğe geç
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
