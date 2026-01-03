import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SEOConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
}

/**
 * Generate SEO metadata for pages
 * @param config - SEO configuration options
 * @returns Next.js Metadata object
 */
export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = SITE_CONFIG.name,
    description = "A Freestyle Rhapsody.",
    image = "/og-image.png",
    url = SITE_CONFIG.url,
    type = "website",
    keywords = [],
  } = config;

  const fullTitle = title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      type,
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@liamylr",
      images: [image],
    },
  };
}

/**
 * Common keywords used across the site
 */
export const COMMON_KEYWORDS = [
  "Liam Lehr",
  "Software Engineer",
  "Character Developer",
  "Web Development",
  "Full Stack Developer",
  "React",
  "Next.js",
  "TypeScript",
] as const;