import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.RESEND_FROM_EMAIL?.trim();
    const to = process.env.RESEND_TO_EMAIL?.trim().toLowerCase();

    if (!apiKey || !from || !to) {
      console.error("Configuration Resend incomplète.");
      return NextResponse.json({ error: "Service e-mail non configuré." }, { status: 500 });
    }

    const body = await request.json();
    const nom = clean(body.nom, 120);
    const telephone = clean(body.telephone, 40);
    const email = clean(body.email, 160);
    const ville = clean(body.ville, 120);
    const service = clean(body.service, 120);
    const message = clean(body.message, 3000);

    if (!nom || !telephone || !email || !ville || !service) {
      return NextResponse.json(
        { error: "Les champs obligatoires sont manquants." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${nom} (${ville})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #172b4d; max-width: 800px;">
          <h1 style="font-size: 24px; margin: 0 0 24px;">Nouvelle demande de devis</h1>
          <table style="border-collapse: collapse; width: 100%; font-size: 16px;">
            <tbody>
              <tr><th style="background: #f7f4ed; border: 1px solid #ded9cd; padding: 14px 18px; text-align: left; width: 175px;">Nom</th><td style="border: 1px solid #ded9cd; padding: 14px 18px;">${escapeHtml(nom)}</td></tr>
              <tr><th style="background: #f7f4ed; border: 1px solid #ded9cd; padding: 14px 18px; text-align: left;">Téléphone</th><td style="border: 1px solid #ded9cd; padding: 14px 18px;">${escapeHtml(telephone)}</td></tr>
              <tr><th style="background: #f7f4ed; border: 1px solid #ded9cd; padding: 14px 18px; text-align: left;">E-mail</th><td style="border: 1px solid #ded9cd; padding: 14px 18px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><th style="background: #f7f4ed; border: 1px solid #ded9cd; padding: 14px 18px; text-align: left;">Ville</th><td style="border: 1px solid #ded9cd; padding: 14px 18px;">${escapeHtml(ville)}</td></tr>
              <tr><th style="background: #f7f4ed; border: 1px solid #ded9cd; padding: 14px 18px; text-align: left; vertical-align: top;">Prestation</th><td style="border: 1px solid #ded9cd; padding: 14px 18px;">${escapeHtml(service)}</td></tr>
              <tr><th style="background: #f7f4ed; border: 1px solid #ded9cd; padding: 14px 18px; text-align: left; vertical-align: top;">Message</th><td style="border: 1px solid #ded9cd; padding: 14px 18px; white-space: pre-line;">${escapeHtml(message || "Non renseigné")}</td></tr>
            </tbody>
          </table>
        </div>
      `,
      text: [
        `Nom : ${nom}`,
        `Téléphone : ${telephone}`,
        `E-mail : ${email}`,
        `Ville : ${ville}`,
        `Prestation : ${service}`,
        "",
        "Message :",
        message || "Non renseigné",
      ].join("\n"),
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json({ error: "L'e-mail n'a pas pu être envoyé." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact :", error);
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
}
