import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://nettoyage-cergy.fr"),
  title: {
    default: "Cergy Propreté - Entreprise de Nettoyage à Cergy et dans le Val-d'Oise (95)",
    template: "%s | Cergy Propreté",
  },
  description:
    "Cergy Propreté, entreprise de nettoyage professionnelle basée à Cergy, intervient dans tout le Val-d'Oise (95) : bureaux, restaurants, copropriétés, fin de chantier, particuliers. Devis gratuit sous 24h.",
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
    title: "Cergy Propreté - Entreprise de Nettoyage à Cergy et dans le Val-d'Oise (95)",
    description:
      "Nettoyage professionnel pour entreprises, copropriétés et particuliers à Cergy et dans tout le Val-d'Oise. Devis gratuit, intervention rapide.",
    images: [
      {
        url: "/og-image.jpg",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CallButton />
        <Analytics />
      </body>
    </html>
  );
}