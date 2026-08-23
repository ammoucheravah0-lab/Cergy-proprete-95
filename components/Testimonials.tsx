// TODO: remplacer par de vrais avis clients (Google Business Profile de préférence,
// avec autorisation écrite du client si tu cites son nom complet).
const AVIS = [
  {
    auteur: "Claire M.",
    ville: "Cergy",
    note: 5,
    texte:
      "Équipe très professionnelle pour l'entretien de nos bureaux. Ponctuels et sérieux, on recommande.",
  },
  {
    auteur: "Karim B.",
    ville: "Pontoise",
    note: 5,
    texte:
      "Nettoyage fin de chantier impeccable, livré dans les délais. Rapport qualité-prix excellent.",
  },
  {
    auteur: "Sophie L.",
    ville: "Osny",
    note: 5,
    texte:
      "Ménage régulier chez moi depuis plusieurs mois, toujours ponctuels et minutieux. Très satisfaite.",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Avis clients</span>
          <h2 className="text-3xl text-ivory-50 sm:text-4xl">
            Ce que disent nos clients du Val-d&apos;Oise
          </h2>
          <div className="signature-sweep mx-auto mt-5" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AVIS.map((avis) => (
            <figure
              key={avis.auteur}
              className="rounded-xl bg-navy-800 p-6 text-ivory-100"
            >
              <div aria-label={`Note : ${avis.note} sur 5`} className="text-brass-400">
                {"★".repeat(avis.note)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">
                « {avis.texte} »
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-cergy-300">
                {avis.auteur} — {avis.ville}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
