import React from 'react';

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

      <p className="mb-6">
        <strong>Cergy Propreté</strong> accorde une importance particulière à la protection de vos données personnelles. Cette politique vous informe des traitements réalisés conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Données collectées</h2>
        <p>
          Lors de l'envoi d'une demande via nos formulaires, nous collectons les données suivantes : prénom, nom, téléphone, adresse e-mail, type de prestation et message. Ces données sont nécessaires au traitement de vos demandes de devis.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Finalité du traitement</h2>
        <p>
          Vos données sont utilisées exclusivement pour traiter vos demandes, établir des devis et vous recontacter. Aucune donnée n'est cédée ni vendue à des tiers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Durée de conservation</h2>
        <p>
          Les données issues des demandes de devis sont conservées pendant une durée maximal de 3 ans à compter du dernier contact.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Vos droits</h2>
        <p>
          Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à : <strong>Cergyproprete@gmail.com</strong>.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Vous pouvez également introduire une réclamation auprès de la CNIL sur cnil.fr.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p>
          Ce site n'utilise aucun cookie de tracking publicitaire. Seuls des cookies techniques strictement nécessaires au fonctionnement du site sont utilisés.
        </p>
      </section>
    </main>
  );
}