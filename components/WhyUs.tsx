const ARGUMENTS = [
  {
    titre: "Une équipe locale, basée à Cergy",
    description:
      "Notre gérance et nos équipes connaissent parfaitement le terrain val-d'oisien, garantissant une réactivité maximale et un suivi de proximité.",
    icone: (
      <svg className="h-6 w-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titre: "Devis clair & personnalisé sous 24h",
    description:
      "Un interlocuteur unique pour étudier vos besoins. Nous vous fournissons un devis détaillé, sans engagement et ajusté à vos surfaces.",
    icone: (
      <svg className="h-6 w-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titre: "Produits professionnels & écoresponsables",
    description:
      "Utilisation de produits certifiés et de matériels de pointe (normes HACCP, bionettoyage), respectueux de vos locaux et de l'environnement.",
    icone: (
      <svg className="h-6 w-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    titre: "Sérieux, assurance & suivi qualité",
    description:
      "Équipes formées et assurées en Responsabilité Civile Professionnelle. Contrats clairs et contrôles rigoureux pour une satisfaction garantie.",
    icone: (
      <svg className="h-6 w-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-slate-900 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
            Pourquoi Cergy Propreté 95 ?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            La rigueur d&apos;une entreprise à taille humaine, ancrée dans le Val-d&apos;Oise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Nous combinons réactivité locale, équipements professionnels et exigence de qualité pour l&apos;entretien de vos espaces.
          </p>
          <div className="signature-sweep mx-auto mt-6" />
        </div>

        {/* Grille des arguments prestige */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {ARGUMENTS.map((arg, index) => (
            <div
              key={arg.titre}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-800/50 p-8 transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-[#C9A227]/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 group-hover:border-[#C9A227]/40 transition-colors">
                    {arg.icone}
                  </div>
                  <span className="text-3xl font-extrabold text-[#C9A227]/30 transition-colors group-hover:text-[#C9A227]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-[#C9A227] transition-colors">
                  {arg.titre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {arg.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}