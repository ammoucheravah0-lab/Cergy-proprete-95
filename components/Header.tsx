import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Nos services", href: "/#services" },
  { label: "Nettoyage à Cergy", href: "/nettoyage/cergy" },
  { label: "Zones d'intervention (95)", href: "/zones-intervention" },
  { label: "Avis clients", href: "/#avis" },
  { label: "Contact", href: "/#devis" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brass-500/15 bg-navy-950/85 backdrop-blur-md transition-all duration-300">
      {/* Filet lumineux doré supérieur */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brass-500/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <Link href="/" aria-label="Cergy Propreté 95 - Retour à l'accueil" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/logo.svg"
            alt="Logo Cergy Propreté 95, entreprise de nettoyage à Cergy"
            width={200}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation principale */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide text-cergy-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="transition-colors duration-200 hover:text-brass-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+33752081144"
            className="hidden items-center gap-2 rounded-lg border border-brass-500/30 bg-navy-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory-50 transition-all duration-300 hover:border-brass-400 hover:text-brass-400 sm:inline-flex"
          >
            <svg className="h-3.5 w-3.5 text-brass-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.57a1 1 0 01-.27 1.11l-2.3 2.22z"/>
            </svg>
            +33 7 52 08 11 44
          </a>

          <Link 
            href="/#devis" 
            className="btn-primary rounded-lg bg-brass-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-navy-950 transition-all duration-300 hover:bg-brass-400 hover:shadow-md hover:shadow-brass-500/20"
          >
            Devis sous 24h
          </Link>
        </div>
      </div>
    </header>
  );
}