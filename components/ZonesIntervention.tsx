import Link from "next/link";

const ZONES = [
  { ville: "Cergy", slug: "cergy" },
  { ville: "Pontoise", slug: "pontoise" },
  { ville: "Osny", slug: "osny" },
  { ville: "Vauréal", slug: "vaureal" },
  { ville: "Éragny-sur-Oise", slug: "eragny-sur-oise" },
  { ville: "Saint-Ouen-l'Aumône", slug: "saint-ouen-laumone" },
  { ville: "Jouy-le-Moutier", slug: "jouy-le-moutier" },
  { ville: "Courdimanche", slug: "courdimanche" },
  { ville: "Neuville-sur-Oise", slug: "neuville-sur-oise" },
  { ville: "Menucourt", slug: "menucourt" },
];

// TODO (évolution SEO) : une fois les pages villes prêtes,
// créer app/nettoyage-[ville]/page.tsx pour chaque zone ci-dessous
// (Pontoise, Osny, Vauréal...) sur le même modèle que
// app/nettoyage-cergy/page.tsx, afin de capter chaque requête locale.
export default function ZonesIntervention() {
  return (
    <section id="zones" className="relative bg-slate-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
            Proximité & Réactivité
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Entreprise de nettoyage dans tout le Val-d&apos;Oise (95)
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Basés à Cergy, nous intervenons rapidement dans toute l&apos;agglomération de Cergy-Pontoise et ses communes limitrophes :
          </p>
          <div className="signature-sweep mx-auto mt-6" />
        </div>

        {/* Grille des villes interactive */}
        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {ZONES.map((zone) => (
            <li key={zone.slug}>
              <Link
                    href={`/nettoyage/${zone.slug}`}
                className="group flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-slate-900 hover:text-white hover:shadow-lg hover:shadow-[#C9A227]/10"
              >
                <svg
                  className="h-4 w-4 text-[#C9A227] transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{zone.ville}</span>
              </Link>
            </li>
          ))}
        </ul>

         

        

        {/* Note de bas de section */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-600">
            Votre commune n&apos;apparaît pas dans la liste ?{" "}
            <Link
              href="/#devis"
              className="font-bold text-[#C9A227] transition-colors hover:text-slate-900 hover:underline"
            >
              Contactez-nous
            </Link>{" "}
            — nous couvrons l&apos;ensemble du Val-d&apos;Oise et l&apos;Île-de-France.
          </p>
        </div>

      </div>
    </section>
  );
}