import Image from "next/image";
import Link from "next/link";

const VILLES_VAL_DOISE = [
  "Cergy",
  "Pontoise",
  "Osny",
  "Vauréal",
  "Éragny-sur-Oise",
  "Saint-Ouen-l'Aumône",
  "Jouy-le-Moutier",
  "Courdimanche",
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Colonne 1 : Présentation & Logos */}
        <div className="flex flex-col items-start">
          
          {/* LOGO CERGY PROPRETÉ - Responsive & Dimensions SVG préservées */}
          <div className="w-full">
            <div className="relative h-20 w-64 shrink-0 overflow-hidden rounded-lg bg-slate-800 shadow-sm">
              <Image
                src="/logo.svg"
                alt="Logo Cergy Propreté"
                fill
                className="object-contain p-1" // object-contain pour garder le SVG intact sans déformation
              />
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-white">
              Cergy Propreté
            </h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Entreprise de nettoyage professionnelle, dirigée depuis Cergy, au service des entreprises, copropriétés et particuliers du Val-d&apos;Oise.
          </p>

          {/* Partenaire SEO : TGT Propreté avec Logo Agrandi */}
          <div className="mt-6 w-full rounded-xl border border-slate-800 bg-slate-800/50 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold text-[#C9A227]">Partenaire officiel :</p>
            
            <div className="mt-3 flex items-center gap-4">
              {/* LOGO TGT PROPRETÉ - Taille augmentée à h-16 w-16 (64px) */}
              <a
                href="https://nettoyagesidf.fr"
                target="_blank"
                rel="noopener"
                className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-900 transition-transform hover:scale-105"
              >
                <Image
                  src="/images/Logo-TGT-Propreté.jpg"
                  alt="Logo TGT Propreté"
                  fill
                  className="object-cover"
                />
              </a>

              <p className="text-xs text-slate-300">
                En collaboration avec{" "}
                <a
                  href="https://nettoyagesidf.fr"
                  target="_blank"
                  rel="noopener"
                  className="font-bold text-white underline decoration-[#C9A227] decoration-2 underline-offset-2 transition-colors hover:text-[#C9A227]"
                >
                  TGT Propreté
                </a>{" "}
                pour nos interventions en Île-de-France.
              </p>
            </div>
          </div>
        </div>

        {/* Colonne 2 : Coordonnées */}
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Coordonnées</h3>
          {/* Bloc NAP (Nom / Adresse / Téléphone) — cohérent avec lib/schema.ts
              et la fiche Google Business Profile. Ne pas dupliquer avec des
              variantes différentes ailleurs sur le site (cohérence = SEO local). */}
          <address className="not-italic text-sm leading-relaxed text-slate-400">
            {/* TODO: adresse exacte du gérant à Cergy */}
            06 Place du Thyrse<br />
            95800 Cergy, France
            <br />
            <a href="tel:+33752081144" className="mt-2 inline-block font-medium text-white hover:text-[#C9A227] transition-colors">
              +33 7 52 08 11 44
            </a>
            <br />
            <a href="mailto:Cergyproprete@gmail.com" className="font-medium text-white hover:text-[#C9A227] transition-colors">
              Cergyproprete@gmail.com
            </a>
          </address>
        </div>

        {/* Colonne 3 : Zones d'intervention */}
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Zones d&apos;intervention</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-400">
            {VILLES_VAL_DOISE.map((ville) => (
              <li key={ville} className="hover:text-slate-200 transition-colors">{ville}</li>
            ))}
          </ul>
          <Link
            href="/zones-intervention"
            className="mt-4 inline-block text-sm font-semibold text-[#C9A227] hover:underline"
          >
            Voir toutes les villes du Val-d&apos;Oise →
          </Link>
        </div>

        {/* Colonne 4 : Liens utiles */}
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Liens utiles</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/nettoyage-cergy" className="hover:text-[#C9A227] transition-colors">Nettoyage à Cergy</Link></li>
            <li><Link href="/#services" className="hover:text-[#C9A227] transition-colors">Nos services</Link></li>
            <li><Link href="/#devis" className="hover:text-[#C9A227] transition-colors">Demander un devis</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-[#C9A227] transition-colors">Mentions légales</Link></li>
            {/* TODO: créer /mentions-legales et /politique-de-confidentialite (obligatoire RGPD) */}
          </ul>
        </div>

      </div>

      {/* Barre de Copyright */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Cergy Propreté — Entreprise de nettoyage à Cergy et dans le Val-d&apos;Oise. Tous droits réservés.
      </div>
    </footer>
  );
}