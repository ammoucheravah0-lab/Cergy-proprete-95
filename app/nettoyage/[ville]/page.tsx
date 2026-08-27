import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DevisSection from "@/components/DevisSection";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { PRESTATIONS, PRESTATION_SLUGS, VILLES, VilleSlug, buildCombinedSlug } from "@/lib/local-seo";

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
    title: `Entreprise de nettoyage à ${ville.nom} (95)`,
        description: `Cergy Propreté 95 intervient à ${ville.nom} (${ville.description}) pour le nettoyage de bureaux, copropriétés, commerces et fin de chantier. Devis sous 24h.`,
        alternates: { canonical: `/nettoyage/${params.ville}` },
    };
}

export default function VillePage({ params }: PageProps) {
    const villeSlug = params.ville as VilleSlug;
    const ville = VILLES[villeSlug];

    if (!ville) notFound();

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Accueil", url: "https://nettoyage-cergy.fr" },
        { name: `Nettoyage à ${ville.nom}`, url: `https://nettoyage-cergy.fr/nettoyage/${villeSlug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

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
                        Entreprise de nettoyage professionnel à <strong>{ville.nom}</strong>
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-slate-600">
                        <strong>Cergy Propreté</strong> accompagne les professionnels, copropriétés, commerces et particuliers de <strong>{ville.nom}</strong>. Profitez de solutions de propreté sur-mesure, réactives et adaptées aux exigences de vos locaux dans le <strong>Val-d&apos;Oise (95)</strong>.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/#devis" className="btn-primary inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                            Obtenir un devis sous 24h
                        </Link>
                        <a href="tel:+33752081144" className="inline-flex items-center justify-center px-6 py-3 font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                            Appeler un conseiller
                        </a>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-4/3 lg:aspect-square">
                    <Image
                        src="/images/AgentdeNettoyage_Cergy.jpg"
                        alt={`Agent de nettoyage professionnel Cergy Propreté en intervention à ${ville.nom}, Val-d'Oise`}
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

            {/* Grid Prestations détaillées — chaque carte pointe vers sa landing page dédiée */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
                <div className="max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Nos prestations d&apos;entretien à {ville.nom}
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Des services de propreté complets et modulables
                    </h2>
                    <p className="mt-3 text-slate-600">
                        Découvrez le détail des opérations réalisées par nos agents lors de chaque intervention à {ville.nom}.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {PRESTATION_SLUGS.map((prestationSlug) => {
                        const prestation = PRESTATIONS[prestationSlug];
                        const href = `/nettoyage-${buildCombinedSlug(prestationSlug, villeSlug)}`;
                        return (
                            <Link
                                href={href}
                                key={prestationSlug}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={prestation.image}
                                        alt={`${prestation.nom} à ${ville.nom}`}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6 sm:p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                        {prestation.nom} à {ville.nom}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{prestation.texte}</p>

                                    <div className="mt-6 border-t border-slate-100 pt-5">
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Ce que comprend la prestation :
                                        </h4>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                            {prestation.details.slice(0, 4).map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-blue-600 font-bold">•</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                                        En savoir plus <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Engagements / Reassurance */}
            <section className="bg-slate-900 text-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">Pourquoi faire confiance à Cergy Propreté ?</h2>
                        <p className="mt-3 text-slate-400">
                            Nous nous engageons quotidiennement pour vous garantir un niveau de qualité constant à {ville.nom}.
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
