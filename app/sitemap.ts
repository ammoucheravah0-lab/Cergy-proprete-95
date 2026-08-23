import type { MetadataRoute } from "next";

const VILLE_SLUGS = [
  "cergy",
  "pontoise",
  "osny",
  "vaureal",
  "eragny-sur-oise",
  "saint-ouen-laumone",
  "jouy-le-moutier",
  "courdimanche",
  "neuville-sur-oise",
  "menucourt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cergy-proprete95.fr"; // TODO: nom de domaine définitif

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/nettoyage-cergy`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/zones-intervention`, changeFrequency: "monthly", priority: 0.7 },
    ...VILLE_SLUGS.map((slug) => ({
      url: `${base}/nettoyage/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
