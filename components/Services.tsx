import Image from "next/image";

const SERVICES = [
  {
    titre: "Nettoyage de Restaurant",
    description:
      "Nettoyage haute exigence de la salle, désinfection des cuisines (normes HACCP) et dégraissage des sols de votre restaurant à Cergy et dans le Val-d'Oise.",
    image: "/images/AgentdeNettoyage_Cergy.jpg",
    alt: "Nettoyage professionnel de restaurant à Cergy et dans le Val-d'Oise",
    specialite: true, // Marqueur pour identifier la spécialité
  },
  {
    titre: "Commerces & Boutiques",
    description:
      "Entretien régulier et nettoyage de vitrines pour commerces, boutiques et espaces de vente du 95.",
    image: "/images/nettoyage-commerce-boutique-cergy-95.jpg",
    alt: "Nettoyage et entretien de boutiques et commerces à Cergy",
  },
  {
    titre: "Nettoyage de Bureaux",
    description:
      "Entretien régulier de vos locaux professionnels à Cergy et dans le Val-d'Oise : sols, sanitaires, espaces communs et vitrerie.",
    image: "/images/Nettoyage-de-bureaux-sur-Cergy.jpg",
    alt: "Nettoyage professionnel de bureaux à Cergy",
  },
  {
    titre: "Nettoyage de Copropriétés",
    description:
      "Entretien des parties communes, halls d'immeuble et abords extérieurs pour les résidences et copropriétés du 95.",
    image: "/images/nettoyage-copropriete-immeuble-cergy-95.jpg",
    alt: "Nettoyage des parties communes d'une copropriété dans le Val-d'Oise",
  },
  {
    titre: "Nettoyage Fin de Chantier",
    description:
      "Remise en état complète après travaux : dépoussiérage, évacuation des résidus, nettoyage des sols et vitres avant livraison.",
    image: "/images/nettoyage-fin-de-chantier-bureau-cergy-95.jpg",
    alt: "Remise en état et nettoyage fin de chantier à Cergy",
  },
  {
    titre: "Nettoyage Vitrerie",
    description:
      "Lavage de vitres et baies vitrées pour professionnels et particuliers, avec matériel adapté aux façades en hauteur.",
    image: "/images/nettoyage-vitres-bureau-cergy-95.jpg",
    alt: "Nettoyage professionnel de vitres à Cergy, Val-d'Oise",
  },
  {
    titre: "Cabinets Médicaux & Cliniques",
    description:
      "Bionettoyage, désinfection stricte des salles de soins et respect des normes sanitaires pour cabinets et centres de santé du 95.",
    image: "/images/nettoyage-cabinet-medical-clinique-cergy-95.jpg",
    alt: "Désinfection et bionettoyage de cabinet médical à Cergy",
  },
  {
    titre: "Canapés & Fauteuils",
    description:
      "Dégraissage, détachage et désinfection à la shampouineuse injection/extraction pour redonner éclat à votre mobilier textile.",
    image: "/images/nettoyage-canape-fauteuil-shampouineuse-cergy-95.jpg",
    alt: "Nettoyage de canapé à la shampouineuse à Cergy",
  },
  {
    titre: "Désinfection & Remise en État",
    description:
      "Prestations de désinfection des surfaces sensibles et bionettoyage pour locaux professionnels et espaces recevant du public.",
    image: "/images/desinfection-remise-en-etat-bureau-cergy-95.jpg",
    alt: "Désinfection haute précision et remise en état de locaux à Cergy",
  },
];

export default function Services() {
  const EMAIL_DESTINATAIRE = "Cergyproprete@gmail.com";

  return (
    <section id="services" className="relative bg-slate-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cergy-200 bg-cergy-100/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-800 backdrop-blur-sm">
            Savoir-Faire & Excellence
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Nos Prestations de Propreté
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Des interventions haut de gamme adaptées aux exigences des professionnels et particuliers à Cergy et dans tout le Val-d&apos;Oise.
          </p>
          <div className="signature-sweep mx-auto mt-6" />
        </div>


        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-cergy-300 bg-gradient-to-r from-cergy-50 via-white to-cergy-50 p-6 shadow-md text-center">
          <p className="text-sm font-medium text-slate-700 sm:text-base">
            Une demande spécifique ou un devis sur mesure ? Contactez-nous directement :
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${EMAIL_DESTINATAIRE}?subject=${encodeURIComponent("Demande de devis - Cergy Propreté")}`}
              className="inline-flex bg-[rgb(201_162_39)] border border-cergy-300 items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[rgb(201_170_39)] hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {EMAIL_DESTINATAIRE}
            </a>
          </div>
          <span className="mt-2 block text-xs text-slate-500">
            Cliquez pour m&apos;envoyer un mail directement
          </span>
        </div>

        {/* Grille de cartes */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            return (
              <a
                key={service.titre}
                href="/#devis"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cergy-300 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="mt-5 px-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-cergy-700">
                        {service.titre}
                      </h3>
                      {/* Étoile dorée unique si c'est la spécialité */}
                      {service.specialite && (
                        <span className="flex items-center gap-1 text-xs font-semibold text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-full border border-[#C9A227]/30">
                          ★ Spécialité
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 px-1 pt-4 text-xs font-semibold text-slate-500 transition-colors group-hover:text-slate-900">
                  <span>Accéder au formulaire de devis</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}