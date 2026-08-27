/**
 * Données centralisées pour le maillage SEO local
 * -------------------------------------------------
 * Une seule source de vérité pour :
 *  - les villes couvertes (Val-d'Oise / 95)
 *  - les prestations proposées
 *
 * Sert à générer :
 *  - les pages /nettoyage/[ville]        (hub "toutes les prestations d'une ville")
 *  - les pages /nettoyage-[prestation]-[ville] (landing page longue traîne)
 *  - le sitemap.xml
 *  - le maillage interne (Header, Footer, Services, ZonesIntervention)
 */

export const VILLES = {
  cergy: {
    nom: "Cergy",
    description: "le centre-ville, les parcs d'activités et les quartiers résidentiels",
  },
  pontoise: {
    nom: "Pontoise",
    description: "le centre historique, l'Hôtel de Ville et les Louvrais",
  },
  osny: {
    nom: "Osny",
    description: "l'Oseraie, le centre-ville et les quartiers résidentiels",
  },
  vaureal: {
    nom: "Vauréal",
    description: "les Portes du Vexin, le village et les coteaux",
  },
  "eragny-sur-oise": {
    nom: "Éragny-sur-Oise",
    description: "les falaises, le Plessis-Botbard et les bas pays",
  },
  "saint-ouen-laumone": {
    nom: "Saint-Ouen-l'Aumône",
    description: "les parcs d'activités, l'Épluchette et le centre-ville",
  },
  "jouy-le-moutier": {
    nom: "Jouy-le-Moutier",
    description: "les Brouillons, le vieux village et les coteaux",
  },
  courdimanche: {
    nom: "Courdimanche",
    description: "le Bois d'Aulne, les Linandes et le Village",
  },
  "neuville-sur-oise": {
    nom: "Neuville-sur-Oise",
    description: "le campus, les bords de l'Oise et le village",
  },
  menucourt: {
    nom: "Menucourt",
    description: "le centre et les zones pavillonnaires environnantes",
  },
} as const;

export type VilleSlug = keyof typeof VILLES;
export const VILLE_SLUGS = Object.keys(VILLES) as VilleSlug[];

export const PRESTATIONS = {
  bureaux: {
    nom: "Nettoyage de Bureaux",
    nomCourt: "bureaux et locaux tertiaires",
    texte:
      "Entretien quotidien ou hebdomadaire sur-mesure pour préserver l'image de votre entreprise et le confort de vos collaborateurs.",
    details: [
      "Dépoussiérage et désinfection des postes de travail",
      "Nettoyage des sols (aspiration, lavage)",
      "Gestion et tri des corbeilles à papier",
      "Désinfection rigoureuse des sanitaires et points de contact",
      "Entretien des espaces pause / cuisinettes",
    ],
    image: "/images/Nettoyage-de-bureaux-sur-Cergy.jpg",
  },
  restaurant: {
    nom: "Nettoyage de Restaurant",
    nomCourt: "restaurants et cuisines professionnelles",
    texte:
      "Nettoyage sur-mesure et désinfection rigoureuse pour garantir le respect des normes sanitaires (HACCP) et offrir une expérience irréprochable à vos clients.",
    details: [
      "Pianos, plaques et feux vifs : récurage en profondeur des brûleurs et grilles",
      "Friteuses : vidange, nettoyage de la cuve et rinçage",
      "Fours et salamandres : décarbonisation intérieure et extérieure",
      "Hottes et systèmes d'extraction",
      "Désinfection complète, détartrage de la robinetterie et traitement des odeurs",
    ],
    image: "/images/Nettoyage-de-restaurant-sur-Cergy.jpg",
  },
  coproprietes: {
    nom: "Nettoyage de Copropriétés",
    nomCourt: "copropriétés et immeubles",
    texte:
      "Des prestations régulières pour maintenir le standing de votre résidence et le bien-être des occupants.",
    details: [
      "Nettoyage des halls d'entrée, escaliers et ascenseurs",
      "Gestion des conteneurs à ordures ménagères (entrée/sortie)",
      "Nettoyage des locaux poubelles et désinfection",
      "Entretien des vitreries de parties communes",
      "Balayage des parkings et abords d'immeuble",
    ],
    image: "/images/nettoyage-copropriete-immeuble-cergy-95.jpg",
  },
  "fin-de-chantier": {
    nom: "Nettoyage Fin de Chantier",
    nomCourt: "locaux en fin de chantier",
    texte:
      "Un nettoyage en profondeur pour livrer ou réintégrer des locaux impeccables après des travaux ou une rénovation.",
    details: [
      "Élimination des voiles de ciment, plâtre et peinture",
      "Dépoussiérage intégral murs, plafonds et conduits",
      "Lavage haute pression ou décapage des sols",
      "Nettoyage approfondi des menuiseries et vitres",
      "Évacuation des petits déchets de chantier restants",
    ],
    image: "/images/nettoyage-fin-de-chantier-bureau-cergy-95.jpg",
  },
  vitrerie: {
    nom: "Nettoyage Vitrerie",
    nomCourt: "vitres et façades vitrées",
    texte:
      "Lavage professionnel de toutes vos surfaces vitrées pour une clarté optimale et sans traces.",
    details: [
      "Nettoyage des vitres intérieures / extérieures",
      "Lavage des baies vitrées et vitrines de commerces",
      "Entretien des encadrements, châssis et rebords",
      "Dégraissage et suppression des empreintes",
      "Intervention en hauteur sécurisée",
    ],
    image: "/images/nettoyage-vitres-bureau-cergy-95.jpg",
  },
} as const;

export type PrestationSlug = keyof typeof PRESTATIONS;
export const PRESTATION_SLUGS = Object.keys(PRESTATIONS) as PrestationSlug[];

/** Construit le slug combiné utilisé par /nettoyage-[prestation]-[ville] */
export function buildCombinedSlug(prestation: PrestationSlug, ville: VilleSlug) {
  return `${prestation}-${ville}`;
}

/** Table de correspondance slug combiné -> { prestation, ville } pour la route dynamique */
export const COMBINED_ROUTES: Record<string, { prestationSlug: PrestationSlug; villeSlug: VilleSlug }> = {};
for (const prestationSlug of PRESTATION_SLUGS) {
  for (const villeSlug of VILLE_SLUGS) {
    COMBINED_ROUTES[buildCombinedSlug(prestationSlug, villeSlug)] = { prestationSlug, villeSlug };
  }
}
