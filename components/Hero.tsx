import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-12 lg:py-20">
      {/* Halo lumineux d'arrière-plan pour l'effet prestige */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brass-500/10 to-transparent blur-3xl" 
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Colonne gauche : Contenu & Appel à l'action */}
        <div className="z-10">
          <span className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-brass-500/30 bg-brass-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-brass-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
            Entreprise de nettoyage — Cergy &amp; Val-d&apos;Oise
          </span>

          <h1 className="mt-6 max-w-xl font-display text-4xl font-light tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            Entreprise de nettoyage professionnel à Cergy (95),{" "}
            <span className="italic text-brass-400">pensé pour l&apos;excellence.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-cergy-300 sm:text-lg">
            Bureaux, copropriétés, fin de chantier ou remise en état : notre équipe locale intervient rapidement à Cergy, Pontoise, Osny et dans tout le 95 avec des standards sur mesure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link 
              href="/#devis" 
              className="btn-primary inline-flex items-center justify-center rounded-lg bg-brass-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-brass-400 hover:shadow-lg hover:shadow-brass-500/20"
            >
              Recevoir un devis gratuit
            </Link>
            
            <a 
              href="tel:+33752081144" 
              className="btn-secondary inline-flex items-center gap-2 rounded-lg border border-ivory-50/20 bg-navy-900/50 px-6 py-3.5 text-sm font-medium text-ivory-50 transition-all duration-300 backdrop-blur-md hover:border-brass-400 hover:bg-navy-900 hover:text-brass-400"
            >
              <svg className="h-4 w-4 fill-current text-brass-400" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.57a1 1 0 01-.27 1.11l-2.3 2.22z"/>
              </svg>
              Appeler maintenant
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-y-3 text-sm text-cergy-300 sm:grid-cols-2 sm:gap-x-6">
            {[
              "Devis sous 24h",
              "Intervention rapide dans le 95",
              "Équipe locale basée à Cergy",
              "Assurance responsabilité civile pro",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-brass-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne droite : Visuel prestige */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Cadre décoratif doré arrière */}
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-brass-500/30 to-transparent opacity-75 blur-sm" />

          <div className="relative overflow-hidden rounded-2xl border border-brass-500/20 bg-navy-900 shadow-2xl">
            <Image
              src="/images/AgentdeNettoyage_Cergy.jpg"
              alt="Technicien de nettoyage professionnel Cergy Propreté 95 intervenant dans un bureau à Cergy"
              width={500}
              height={650}
              className="h-[550px] w-full object-cover sm:h-[600px]"
              priority
            />
            {/* Dégradé feutré sur le bas de l'image */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          </div>

          {/* Badge statistique en effet verre (Glassmorphism) */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-brass-500/20 bg-navy-900/90 p-5 shadow-2xl backdrop-blur-md sm:block">
            <p className="font-display text-3xl font-bold tracking-tight text-brass-400">+250</p>
            <p className="mt-1 text-xs font-medium tracking-wide text-cergy-300 uppercase">
              clients accompagnés dans le Val-d&apos;Oise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}