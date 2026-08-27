import type { MetadataRoute } from "next";
import { COMBINED_ROUTES, VILLE_SLUGS } from "@/lib/local-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nettoyage-cergy.fr";

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/zones-intervention`, changeFrequency: "monthly", priority: 0.7 },
    // Pages "hub" par ville : toutes les prestations d'une ville
    ...VILLE_SLUGS.map((slug) => ({
      url: `${base}/nettoyage/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Pages longue traîne "prestation x ville" (ex: /nettoyage-bureaux-cergy)
    ...Object.keys(COMBINED_ROUTES).map((slug) => ({
      url: `${base}/nettoyage-${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/mentions-legales`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/politique-de-confidentialite`, changeFrequency: "yearly" as const, priority: 0.2 },
  ];
}
