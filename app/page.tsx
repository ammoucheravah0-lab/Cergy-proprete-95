import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ZonesIntervention from "@/components/ZonesIntervention";
import Testimonials from "@/components/Testimonials";
import DevisSection from "@/components/DevisSection";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Cergy & Val-d'Oise | Cergy Propreté 95",
  description:
    "Cergy Propreté 95, entreprise de nettoyage basée à Cergy : bureaux, copropriétés, fin de chantier, particuliers. Intervention rapide dans tout le Val-d'Oise (95). Devis gratuit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* H1 principal porté par Hero — "nettoyage" + "Cergy" + "Val-d'Oise" */}
      <Hero />
      <Services />
      <WhyUs />
      <ZonesIntervention />
      <Testimonials />
      <DevisSection />
    </>
  );
}
