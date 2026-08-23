import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DevisSection from "@/components/DevisSection";

const VILLES = {
    cergy: { nom: "Cergy", description: "le centre-ville, les parcs d'activités et les quartiers résidentiels" },
    pontoise: { nom: "Pontoise", description: "le centre historique, l'Hôtel de Ville et les Louvrais" },
    osny: { nom: "Osny", description: "l'Oseraie, le centre-ville et les quartiers résidentiels" },
    vaureal: { nom: "Vauréal", description: "les Portes du Vexin, le village et les coteaux" },
    "eragny-sur-oise": { nom: "Éragny-sur-Oise", description: "les falaises, le Plessis-Botbard et les bas pays" },
    "saint-ouen-laumone": { nom: "Saint-Ouen-l'Aumône", description: "les parcs d'activités, l'Épluchette et le centre-ville" },
    "jouy-le-moutier": { nom: "Jouy-le-Moutier", description: "les Brouillons, le vieux village et les coteaux" },
    courdimanche: { nom: "Courdimanche", description: "le Bois d'Aulne, les Linandes et le Village" },
    "neuville-sur-oise": { nom: "Neuville-sur-Oise", description: "le campus, les bords de l'Oise et le village" },
    menucourt: { nom: "Menucourt", description: "le centre et les zones pavillonnaires environnantes" },
} as const;

const PRESTATIONS = [
    {
        titre: "Nettoyage de Restaurant",
        texte: "Nettoyage sur-mesure et désinfection rigoureuse pour garantir le respect des normes sanitaires et offrir une expérience irréprochable à vos clients.",
        details: [
            "Pianos, plaques et feux vifs : récurage en profondeur des brûleurs et grilles",
            "Friteuses : vidange, nettoyage de la cuve et rinçage",
            "Fours et salamandres : décarbonisation intérieure et extérieure",
            "Plancha, grills et rôtissoires",
            "Hottes et systèmes d'extraction",
            "Lavage et remise en éclat des sols, quel que soit le revêtement",
            "Traitement des banquettes et assises textiles par injection-extraction",
            "Désinfection complète, détartrage de la robinetterie et des cuvettes, traitement des odeurs etc..",
        ],
        image: "/images/Nettoyage-de-restaurant-sur-Cergy.jpg",
    },
    {
        titre: "Nettoyage de bureaux & Tertiaire",
        texte: "Entretien quotidien ou hebdomadaire sur-mesure pour préserver l'image de votre entreprise et le confort de vos collaborateurs.",
        details: [
            "Dépoussiérage et désinfection des postes de travail",
            "Nettoyage des sols (aspiration, lavage)",
            "Gestion et tri des corbeilles à papier",
            "Désinfection rigoureuse des sanitaires et points de contact",
            "Entretien des espaces pause / cuisinettes",
        ],
        image: "/images/Nettoyage-de-bureaux-sur-Cergy.jpg",
    },
    {
        titre: "Copropriétés & Immeubles",
        texte: "Des prestations régulières pour maintenir le standing de votre résidence et le bien-être des occupants.",
        details: [
            "Nettoyage des halls d'entrée, escaliers et ascenseurs",
            "Gestion des conteneurs à ordures ménagères (entrée/sortie)",
            "Nettoyage des locaux poubelles et désinfection",
            "Entretien des vitreries de parties communes",
            "Balayage des parkings et abords d'immeuble",
        ],
        image: "/images/nettoyage-copropriete-immeuble-cergy-95.jpg",
    },
    {
        titre: "Fin de chantier & Remise en état",
        texte: "Un nettoyage en profondeur pour livrer ou réintégrer des locaux impeccables après des travaux ou une rénovation.",
        details: [
            "Élimination des voiles de ciment, plâtre et peinture",
            "Dépoussiérage intégral murs, plafonds et conduits",
            "Lavage haute pression ou décapage des sols",
            "Nettoyage approfondi des menuiseries et vitres",
            "Évacuation des petits déchets de chantier restant",
        ],
        image: "/images/nettoyage-fin-de-chantier-bureau-cergy-95.jpg",
    },
    {
        titre: "Vitrerie & Façades vitrées",
        texte: "Lavage professionnel de toutes vos surfaces vitrées pour une clarté optimale et sans traces.",
        details: [
            "Nettoyage des vitres intérieures / extérieures",
            "Lavage des baies vitrées et vitrines de commerces",
            "Entretien des encadrements, châssis et rebords",
            "Dégraissage et suppression des empreintes",
            "Intervention en hauteur sécurisée",
        ],
        image: "/images/nettoyage-vitres-bureau-cergy-95.jpg",
    },
];

const ENGAGEMENTS = [
    {
        titre: "Réactivité locale",
        description: "Basés dans le Val-d'Oise, nous intervenons rapidement à la suite de votre demande.",
    },
    {
        titre: "Agents qualifiés",
        description: "Personnel formé aux normes d'hygiène strictes et aux techniques de nettoyage modernes.",
    },
    {
        titre: "Produits écoresponsables",
        description: "Utilisation prioritaire de produits certifiés Écolabel pour protéger la santé et l'environnement.",
    },
    {
        titre: "Suivi qualité",
        description: "Contrôles réguliers pour garantir un niveau de propreté constant et irréprochable.",
    },
];

type VilleSlug = keyof typeof VILLES;

interface PageProps {
    params: { ville: string };
}

export function generateStaticParams() {
    return Object.keys(VILLES).map((ville) => ({ ville }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const ville = VILLES[params.ville as VilleSlug];

    if (!ville) return {};

    return {
        title: `Entreprise de nettoyage à ${ville.nom} (95) | Cergy Propreté 95`,
        description: `Cergy Propreté 95 intervient à ${ville.nom} (${ville.description}) pour le nettoyage de bureaux, copropriétés, commerces et fin de chantier. Devis sous 24h.`,
        alternates: { canonical: `/nettoyage/${params.ville}` },
    };
}

export default function VillePage({ params }: PageProps) {
    const ville = VILLES[params.ville as VilleSlug];

    if (!ville) notFound();

    return (
        <>
            {/* Fil d'Ariane */}
            <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-6 pt-6 text-sm text-slate-600">
                <ol className="flex items-center gap-2">
                    <li>
                        <Link href="/" className="hover:text-navy-950 transition-colors">Accueil</Link>
                    </li>
                    <li aria-hidden="true" className="text-slate-400">/</li>
                    <li className="font-medium text-navy-950">Nettoyage à {ville.nom}</li>
                </ol>
            </nav>

            {/* Hero Section */}
            <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:py-16">
                <div>
                    <span className="section-eyebrow text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {ville.nom} — Val-d&apos;Oise (95)
                    </span>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Entreprise de nettoyage professionnel à {ville.nom}
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-slate-600">
                        Cergy Propreté 95 accompagne les professionnels, copropriétés, commerces et particuliers de <strong>{ville.nom}</strong>. Profitez de solutions de propreté sur-mesure, réactives et adaptées aux exigences de vos locaux.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/#devis" className="btn-primary inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                            Obtenir un devis sous 24h
                        </Link>
                        <a href="tel:+33100000000" className="inline-flex items-center justify-center px-6 py-3 font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                            Appeler un conseiller
                        </a>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-4/3 lg:aspect-square">
                    <Image
                        src="/images/AgentdeNettoyage_Cergy.jpg"
                        alt={`Prestation de nettoyage professionnel par Cergy Propreté 95 à ${ville.nom}`}
                        fill
                        priority
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Section Zone d'intervention spécifique */}
            <section className="bg-slate-50 border-y border-slate-200/60 py-12 px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                        Un service de propreté réactif à {ville.nom}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                        Nos équipes mobiles couvrent l&apos;ensemble de la commune de <strong>{ville.nom}</strong>, incluant notamment <em>{ville.description}</em>. Nous garantissons une présence régulière et un matériel adapté aux contraintes de votre site.
                    </p>
                </div>
            </section>

            {/* Grid Prestations détaillées */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
                <div className="max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Nos prestations d&apos;entretien à {ville.nom}
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Des services de propreté complets et modulables
                    </h2>
                    <p className="mt-3 text-slate-600">
                        Découvrez le détail des opérations réalisées par nos agents lors de chaque intervention.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {PRESTATIONS.map((prestation) => (
                        <article key={prestation.titre} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={prestation.image}
                                    alt={`${prestation.titre} à ${ville.nom}`}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-slate-900">{prestation.titre}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{prestation.texte}</p>

                                <div className="mt-6 border-t border-slate-100 pt-5">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Ce que comprend la prestation :
                                    </h4>
                                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                        {prestation.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-blue-600 font-bold">•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Engagements / Reassurance */}
            <section className="bg-slate-900 text-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">Pourquoi faire confiance à Cergy Propreté 95 ?</h2>
                        <p className="mt-3 text-slate-400">
                            Nous nous engageons quotidiennement pour vous garantir un niveau de qualité constant.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {ENGAGEMENTS.map((item, i) => (
                            <div key={i} className="rounded-xl bg-slate-800/60 p-6 border border-slate-700/50">
                                <div className="text-blue-400 font-bold text-lg mb-2">0{i + 1}.</div>
                                <h3 className="text-lg font-semibold text-white">{item.titre}</h3>
                                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Devis */}
            <DevisSection />
        </>
    );
}