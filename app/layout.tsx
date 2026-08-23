import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildLocalBusinessSchema } from "@/lib/schema";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ---------------------------------------------------------------
// METADATA GLOBALE (par défaut). Chaque page peut la surcharger
// via son propre `export const metadata` — voir app/page.tsx et
// app/nettoyage-cergy/page.tsx pour des exemples ciblés SEO local.
// ---------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL("https://nettoyage-cergy.fr"),
  title: {
    default: "Cergy Propreté | Entreprise de nettoyage à Cergy & Val-d'Oise",
    template: "%s | Cergy Propreté",
  },
  description:
    "Entreprise de nettoyage professionnelle basée à Cergy, intervenant dans tout le Val-d'Oise (95) : bureaux, copropriétés, fin de chantier, particuliers. Devis gratuit sous 24h.",
  keywords: [
    "entreprise de nettoyage Cergy",
    "nettoyage Val-d'Oise",
    "nettoyage Pontoise",
    "société de nettoyage 95",
    "nettoyage bureaux Cergy",
    "nettoyage copropriété Val-d'Oise",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nettoyage-cergy.fr",
    siteName: "Cergy Propreté",
    title: "Cergy Propreté | Entreprise de nettoyage à Cergy & Val-d'Oise",
    description:
      "Nettoyage professionnel pour entreprises, copropriétés et particuliers à Cergy et dans tout le Val-d'Oise. Devis gratuit, intervention rapide.",
    images: [
      {
        url: "/og-image.jpg", // TODO: voir stratégie d'images plus bas (1200x630)
        width: 1200,
        height: 630,
        alt: "Équipe Cergy Propreté intervenant à Cergy, Val-d'Oise",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    // TODO: coller ton code de vérification Google Search Console
    google: "TODO-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${manrope.variable} bg-ivory-50 font-sans text-slate-700 antialiased`}
      >
        {/* Données structurées globales CleaningService (LocalBusiness) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
