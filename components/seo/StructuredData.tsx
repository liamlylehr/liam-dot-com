import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.author,
    description: SITE_CONFIG.subtitle,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/liamylehr.png`,
    jobTitle: "Software Engineer",
    sameAs: SOCIAL_LINKS.map((link) => link.url),
    knowsAbout: [
      "Software Engineering",
      "Character Development",
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: "A Freestyle Rhapsody.",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}