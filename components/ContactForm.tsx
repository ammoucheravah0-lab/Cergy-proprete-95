"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      // --------------------------------------------------------------
      // TODO: Ce fetch appelle app/api/contact/route.ts (déjà créé).
      // Il ne te reste qu'à brancher l'envoi réel dans ce fichier route.ts :
      //   - soit via un service d'e-mail transactionnel (Resend, Sendgrid, Brevo...)
      //   - soit via une intégration CRM (HubSpot, Pipedrive...)
      // Voir les commentaires détaillés dans app/api/contact/route.ts
      // --------------------------------------------------------------
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        throw new Error(result?.error || "Échec de l'envoi");
      }

      setState("success");
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du devis :", error);
      setErrorMessage(error instanceof Error ? error.message : "Échec de l'envoi");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulaire de demande de devis">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-slate-700">
            Nom complet *
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            className="w-full rounded-lg border border-cergy-100 bg-ivory-50 px-4 py-2.5 text-sm outline-none focus:border-navy-950"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Téléphone *
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            className="w-full rounded-lg border border-cergy-100 bg-ivory-50 px-4 py-2.5 text-sm outline-none focus:border-navy-950"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-cergy-100 bg-ivory-50 px-4 py-2.5 text-sm outline-none focus:border-navy-950"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ville" className="mb-1.5 block text-sm font-medium text-slate-700">
            Ville (Cergy, Pontoise...) *
          </label>
          <input
            id="ville"
            name="ville"
            type="text"
            required
            className="w-full rounded-lg border border-cergy-100 bg-ivory-50 px-4 py-2.5 text-sm outline-none focus:border-navy-950"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
            Type de prestation *
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-lg border border-cergy-100 bg-ivory-50 px-4 py-2.5 text-sm outline-none focus:border-navy-950"
          >
            <option value="" disabled>Sélectionner...</option>
            <option value="restaurant">Nettoyage de Restaurant</option>
            <option value="commerces-&-boutiques">Nettoyage de Commerces & Boutiques</option>
            <option value="bureaux">Nettoyage de bureaux</option>
            <option value="cabinets-medicale/clinique">Nettoyage de Cabinets Médicale/Clinique</option>
            <option value="canape-et-moquettes">Nettoyage de Canapé & Moquettes</option>
            <option value="copropriete">Nettoyage de copropriété</option>
            <option value="fin-chantier">Fin de chantier</option>
            <option value="vitrerie">Nettoyage vitrerie</option>
            <option value="particuliers">Ménage particuliers</option>
                        <option value="Désinfection-&-Remise en État">Désinfection & Remise en État</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Votre besoin (surface, fréquence souhaitée...)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-cergy-100 bg-ivory-50 px-4 py-2.5 text-sm outline-none focus:border-navy-950"
        />
      </div>

      {/* TODO: Ajouter ici une case à cocher RGPD si tu stockes les données
          ("J'accepte que mes données soient utilisées pour être recontacté(e)")
          + lien vers /politique-de-confidentialite */}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary w-full sm:w-auto"
      >
        {state === "submitting" ? "Envoi en cours..." : "Recevoir mon devis gratuit"}
      </button>

      {state === "success" && (
        <p role="status" className="text-sm font-medium text-green-700">
          Merci ! Votre demande a bien été envoyée, nous revenons vers vous sous 24h.
        </p>
      )}
      {state === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {errorMessage || "Une erreur est survenue lors de l'envoi."} Merci de nous appeler directement au +33 7 52 08 11 44 ou de nous contacter par mail <strong>Cergyproprete@gmail.com</strong>.
        </p>
      )}
    </form>
  );
}
