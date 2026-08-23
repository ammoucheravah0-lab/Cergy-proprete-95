import React from 'react';

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p><strong>Dénomination :</strong> Cergy Propreté</p>
        <p><strong>Adresse :</strong> 06 Place du Thyrse, 95800 Cergy, France</p>
        <p><strong>Téléphone :</strong> +33 7 52 08 11 44</p>
        <p><strong>Email :</strong> Cergyproprete@gmail.com</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Directeur de la publication</h2>
        <p>Rabah Ammouche</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>Le site est hébergé par <strong>Vercel Inc.</strong></p>
        <p>Site web : vercel.com</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site est la propriété exclusive de Cergy Propreté, sauf mention contraire. Toute reproduction sans autorisation écrite préalable est strictement interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Données personnelles (RGPD)</h2>
        <p>
          Les informations collectées via le formulaire de contact sont destinées au traitement de vos demandes. Conformément au RGPD, vous bénéficiez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à : Cergyproprete@gmail.com.
        </p>
      </section>
    </main>
  );
}