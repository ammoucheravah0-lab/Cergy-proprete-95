import ContactForm from "@/components/ContactForm";

export default function DevisSection() {
  return (
    <section id="devis" className="relative bg-slate-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl lg:grid lg:grid-cols-12">
          
          {/* Colonne Gauche : Infos de contact & Argumentaire */}
          <div className="relative flex flex-col justify-between bg-slate-900 p-8 text-white sm:p-12 lg:col-span-5">
            {/* Arrière-plan décoratif subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 opacity-90" />
            
            <div className="relative z-10">
              <span className="inline-block rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
                Demande de Devis
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Un devis gratuit, sans engagement, sous 24h
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Décrivez-nous votre besoin : notre équipe basée à Cergy vous recontacte rapidement pour affiner votre demande et planifier une intervention sur-mesure dans le Val-d&apos;Oise.
              </p>

              <div className="signature-sweep mt-6" />

              {/* Bloc de coordonnées prestige */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/40 p-4 backdrop-blur-sm transition-colors hover:border-[#C9A227]/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-700 text-[#C9A227]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Zone d&apos;intervention</p>
                    <p className="text-sm font-medium text-white">Tout le Val-d&apos;Oise (95) & Île-de-France</p>
                  </div>
                </div>

                <a
                  href="tel:+33752081144"
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/40 p-4 backdrop-blur-sm transition-colors hover:border-[#C9A227]/40 hover:bg-slate-800/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-700 text-[#C9A227]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Téléphone direct</p>
                    <p className="text-sm font-semibold text-white">+33 7 52 08 11 44</p>
                  </div>
                </a>

                <a
                  href="mailto:cergyproprete@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/40 p-4 backdrop-blur-sm transition-colors hover:border-[#C9A227]/40 hover:bg-slate-800/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-700 text-[#C9A227]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email commercial</p>
                    <p className="text-sm font-semibold text-white">Cergyproprete@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-10 border-t border-slate-800 pt-6 text-xs text-slate-400">
              ⚡ Réponse garantie en moins de 24 heures ouvrées.
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="p-8 sm:p-12 lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}