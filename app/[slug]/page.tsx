import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DevisSection from "@/components/DevisSection";
import { buildBreadcrumbSchema } from "@/lib/schema";
import {
  COMBINED_ROUTES,
  PRESTATIONS,
  PRESTATION_SLUGS,
  VILLES,
  VILLE_SLUGS,
  buildCombinedSlug,
} from "@/lib/local-seo";

interface PageProps {
  params: { slug: string };
}

/**
 * Cette route vit à la racine (app/[slug]/page.tsx) car Next.js App Router
 * ne supporte pas les segments dynamiques partiels dans un nom de dossier
 * (un dossier "nettoyage-[slug]" ne matche PAS "/nettoyage-bureaux-cergy").
 * On capture donc le slug complet ("nettoyage-bureaux-cergy") et on le
 * résout nous-mêmes. Next.js donne toujours la priorité aux routes statiques
 * (/mentions-legales, /zones-intervention, /nettoyage/[ville]...) avant de
 * retomber sur cette route catch-all à un seul segment : aucun conflit.
 */
const PREFIX = "nettoyage-";

function resolveSlug(rawSlug: string) {
  if (!rawSlug.startsWith(PREFIX)) return null;
  const combinedSlug = rawSlug.slice(PREFIX.length);
  return COMBINED_ROUTES[combinedSlug] ?? null;
}

export function generateStaticParams() {
  return Object.keys(COMBINED_ROUTES).map((combinedSlug) => ({
    slug: `${PREFIX}${combinedSlug}`,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const route = resolveSlug(params.slug);
  if (!route) return {};

  const prestation = PRESTATIONS[route.prestationSlug];
  const ville = VILLES[route.villeSlug];

  const title = `Nettoyage de ${prestation.nom.replace(/^Nettoyage( de| Fin de)?\s*/i, "")} à ${ville.nom} (95)`;

  return {
    title,
    description: `${prestation.nom} à ${ville.nom} par Cergy Propreté : ${prestation.texte} Intervention rapide sur ${ville.nom} et le Val-d'Oise (95). Devis gratuit sous 24h.`,
    alternates: { canonical: `/${params.slug}` },
  };
}

export default function PrestationVillePage({ params }: PageProps) {
  const route = resolveSlug(params.slug);
  if (!route) notFound();

  const prestation = PRESTATIONS[route.prestationSlug];
  const ville = VILLES[route.villeSlug];

  // Autres prestations disponibles pour la même ville (maillage interne)
  const autresPrestations = PRESTATION_SLUGS.filter((s) => s !== route.prestationSlug);
  // Mêmes prestations dans les villes voisines (maillage interne)
  const villesVoisines = VILLE_SLUGS.filter((s) => s !== route.villeSlug).slice(0, 6);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Accueil", url: "https://nettoyage-cergy.fr" },
    { name: `Nettoyage à ${ville.nom}`, url: `https://nettoyage-cergy.fr/nettoyage/${route.villeSlug}` },
    {
      name: `${prestation.nom} à ${ville.nom}`,
      url: `https://nettoyage-cergy.fr/${params.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Fil d'Ariane */}
      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-6 pt-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-navy-950 transition-colors">
              Accueil
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li>
            <Link href={`/nettoyage/${route.villeSlug}`} className="hover:text-navy-950 transition-colors">
              Nettoyage à {ville.nom}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="font-medium text-navy-950">{prestation.nom}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <span className="section-eyebrow text-xs font-semibold uppercase tracking-wider text-blue-600">
            {ville.nom} — Val-d&apos;Oise (95)
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Nettoyage de <strong>{prestation.nomCourt}</strong> à <strong>{ville.nom}</strong>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {prestation.texte} <strong>Cergy Propreté</strong> intervient rapidement à{" "}
            <strong>{ville.nom}</strong>, notamment sur {ville.description}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#devis"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Devis gratuit pour {ville.nom}
            </Link>
            <a
              href="tel:+33752081144"
              className="inline-flex items-center justify-center px-6 py-3 font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Appeler un conseiller
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-4/3 lg:aspect-square">
          <Image
            src={prestation.image}
            alt={`${prestation.nom} à ${ville.nom} (95) par Cergy Propreté`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Détail de la prestation */}
      <section className="bg-slate-50 border-y border-slate-200/60 py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl text-center">
            En quoi consiste le nettoyage de {prestation.nomCourt} à {ville.nom} ?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 text-center">
            Nos agents qualifiés interviennent chez vous à <strong>{ville.nom}</strong> avec du matériel
            professionnel et des produits écoresponsables.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {prestation.details.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 text-blue-600 font-bold">✓</span>
                <span className="text-sm text-slate-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Maillage : autres prestations dans la même ville */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Nos autres prestations de nettoyage à {ville.nom}
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Découvrez l&apos;ensemble des services de propreté que Cergy Propreté propose à{" "}
          <strong>{ville.nom}</strong>.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {autresPrestations.map((slug) => {
            const p = PRESTATIONS[slug];
            return (
              <Link
                key={slug}
                href={`/${PREFIX}${buildCombinedSlug(slug, route.villeSlug)}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700">
                  {p.nom} à {ville.nom}
                </h3>
                <span className="mt-2 text-sm text-blue-600">Découvrir la prestation →</span>
              </Link>
            );
          })}
        </div>
        <Link
          href={`/nettoyage/${route.villeSlug}`}
          className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          Voir toutes les prestations à {ville.nom} →
        </Link>
      </section>

      {/* Maillage : même prestation dans les villes voisines */}
      <section className="bg-slate-900 text-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {prestation.nom} dans les autres villes du Val-d&apos;Oise
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Cergy Propreté propose également le nettoyage de {prestation.nomCourt} dans les communes
            voisines de {ville.nom}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {villesVoisines.map((slug) => {
              const v = VILLES[slug];
              return (
                <Link
                  key={slug}
                  href={`/${PREFIX}${buildCombinedSlug(route.prestationSlug, slug)}`}
                  className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-400 hover:text-blue-400"
                >
                  {prestation.nom} à {v.nom}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <DevisSection />
    </>
  );
}

