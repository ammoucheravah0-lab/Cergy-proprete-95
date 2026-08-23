import type { Metadata } from "next";
import Link from "next/link";
import DevisSection from "@/components/DevisSection";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nettoyage Val-d'Oise (95) | Zones d'intervention - Cergy Propreté 95",
  description:
    "Cergy Propreté 95 intervient dans tout le Val-d'Oise depuis Cergy : Pontoise, Osny, Vauréal, Éragny, Saint-Ouen-l'Aumône... Découvrez nos zones d'intervention.",
  alternates: { canonical: "/zones-intervention" },
};

const VILLES = [
  {
    nom: "Cergy",
    texte:
      "Notre base d'intervention historique : bureaux, copropriétés et particuliers du centre-ville, des Linandes et du quartier de l'Horloge.",
  },
  {
    nom: "Pontoise",
    texte:
      "Nettoyage professionnel pour les commerces, bureaux et copropriétés de la préfecture du Val-d'Oise.",
  },
  {
    nom: "Osny",
    texte:
      "Entretien régulier ou ponctuel pour les résidences et locaux professionnels d'Osny.",
  },
  {
    nom: "Vauréal",
    texte:
      "Interventions pour particuliers et copropriétés dans les quartiers résidentiels de Vauréal.",
  },
  {
    nom: "Éragny-sur-Oise",
    texte: "Nettoyage de bureaux et de parties communes pour les copropriétés d'Éragny-sur-Oise.",
  },
  {
    nom: "Saint-Ouen-l'Aumône",
    texte:
      "Prestations pour zones d'activité, commerces et copropriétés de Saint-Ouen-l'Aumône.",
  },
];

export default function ZonesInterventionPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Accueil", url: "https://nettoyage-cergy.fr" },
    { name: "Zones d'intervention", url: "https://nettoyage-cergy.fr/zones-intervention" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-6 pt-6 text-sm text-slate-600">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-navy-950">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li className="text-navy-950">Zones d&apos;intervention</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <span className="section-eyebrow">Val-d&apos;Oise (95)</span>
        <h1 className="text-4xl sm:text-5xl">
          Nettoyage professionnel dans tout le Val-d&apos;Oise
        </h1>
        <p className="mt-6 leading-relaxed text-slate-600">
          Basée à Cergy, Cergy Propreté 95 accompagne les entreprises,
          copropriétés et particuliers de l&apos;ensemble de
          l&apos;agglomération de Cergy-Pontoise et au-delà. Découvrez nos
          principales zones d&apos;intervention ci-dessous.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {VILLES.map((ville) => (
            <article key={ville.nom} className="rounded-xl border border-cergy-100 bg-ivory-100 p-6">
              {/* H2 par ville : renforce le maillage sémantique local */}
              <h2 className="text-2xl">Nettoyage à {ville.nom}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{ville.texte}</p>
              <Link href="/#devis" className="mt-4 inline-block text-sm font-semibold text-brass-500 hover:underline">
                Demander un devis à {ville.nom} →
              </Link>
            </article>
          ))}
        </div>

        {/* TODO (évolution SEO) : à terme, transformer chaque ville en page
            dédiée /nettoyage-pontoise, /nettoyage-osny, etc. sur le modèle
            de app/nettoyage-cergy/page.tsx pour maximiser le SEO local
            longue traîne. Cette page généraliste sert de hub en attendant. */}
      </section>

      <DevisSection />
    </>
  );
}
