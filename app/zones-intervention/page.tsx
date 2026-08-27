import type { Metadata } from "next";
import Link from "next/link";
import DevisSection from "@/components/DevisSection";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { VILLES, VILLE_SLUGS } from "@/lib/local-seo";

export const metadata: Metadata = {
  title: "Nettoyage Val-d'Oise (95) | Zones d'intervention",
  description:
    "Cergy Propreté intervient dans tout le Val-d'Oise depuis Cergy : Pontoise, Osny, Vauréal, Éragny, Saint-Ouen-l'Aumône, Jouy-le-Moutier... Découvrez nos 10 zones d'intervention.",
  alternates: { canonical: "/zones-intervention" },
};

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
          Entreprise de nettoyage dans tout le <strong>Val-d&apos;Oise</strong>
        </h1>
        <p className="mt-6 leading-relaxed text-slate-600">
          Basée à <strong>Cergy</strong>, <strong>Cergy Propreté</strong> accompagne les entreprises,
          copropriétés et particuliers de l&apos;ensemble de l&apos;agglomération de Cergy-Pontoise et
          au-delà. Sélectionnez votre commune pour découvrir le détail de nos prestations près de chez
          vous.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {VILLE_SLUGS.map((slug) => {
            const ville = VILLES[slug];
            return (
              <article
                key={slug}
                className="group rounded-xl border border-cergy-100 bg-ivory-100 p-6 transition-shadow hover:shadow-md"
              >
                {/* H2 par ville : renforce le maillage sémantique local */}
                <h2 className="text-2xl">
                  <Link href={`/nettoyage/${slug}`} className="hover:text-brass-500 transition-colors">
                    Nettoyage à {ville.nom}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Nous intervenons sur {ville.description}.
                </p>
                <Link
                  href={`/nettoyage/${slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-brass-500 hover:underline"
                >
                  Voir nos prestations à {ville.nom} →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <DevisSection />
    </>
  );
}
