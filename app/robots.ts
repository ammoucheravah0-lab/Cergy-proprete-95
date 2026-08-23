import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.cergy-proprete95.fr/sitemap.xml", // TODO: nom de domaine définitif
  };
}
