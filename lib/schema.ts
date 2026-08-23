/**
 * Générateurs de données structurées Schema.org
 * -------------------------------------------------
 * Type principal : CleaningService (sous-type de LocalBusiness)
 * Utilisé sur : app/layout.tsx (global) + pages locales (Cergy, Val-d'Oise)
 *
 * TODO (toi) : Remplace les valeurs marquées // TODO par tes vraies
 * coordonnées avant mise en production (adresse exacte, téléphone,
 * SIRET, horaires réels, comptes réseaux sociaux).
 */

export const NAP = {
  name: "Cergy Propreté",
  legalName: "Cergy Propreté SARL", // TODO: raison sociale exacte
  telephone: "+33-1-00-00-00-00", // TODO: numéro de téléphone réel
  email: "Cergyproprete@gmail.com", // TODO: adresse e-mail réelle
  streetAddress: "12 Place des Trois Gares", // TODO: adresse exacte du gérant à Cergy
  addressLocality: "Cergy",
  addressRegion: "Île-de-France",
  postalCode: "95000",
  addressCountry: "FR",
  latitude: 49.0367, // TODO: coordonnées GPS précises
  longitude: 2.0761,
  priceRange: "€€",
  founder: "Gérant basé à Cergy", // TODO: nom du gérant
};

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": "https://nettoyage-cergy.fr/#organization",
    name: NAP.name,
    image: "https://nettoyage-cergy.fr/og-image.jpg", // TODO: image réelle 1200x630
    logo: "https://nettoyage-cergy.fr/logo.svg",
    url: "https://nettoyage-cergy.fr",
    telephone: NAP.telephone,
    email: NAP.email,
    priceRange: NAP.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Cergy" },
      { "@type": "City", name: "Pontoise" },
      { "@type": "City", name: "Osny" },
      { "@type": "City", name: "Vaureal" },
      { "@type": "City", name: "Éragny" },
      { "@type": "City", name: "Saint-Ouen-l'Aumône" },
      { "@type": "AdministrativeArea", name: "Val-d'Oise" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00", // TODO: horaires réels
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      // TODO: liens réels vers réseaux sociaux / Google Business Profile
      "https://www.google.com/maps/place/TODO-lien-google-business-profile",
      "https://www.facebook.com/TODO",
      "https://www.instagram.com/TODO",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de nettoyage",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage de bureaux" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage de copropriétés" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage fin de chantier" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remise en état / ménage particuliers" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage vitres" } },
      ],
    },
  };
}

/** Fil d'Ariane structuré (BreadcrumbList), utile pour le SEO local */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** FAQ structurée — à utiliser sur la page Cergy pour capter les "position 0" */
export function buildFaqSchema(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
