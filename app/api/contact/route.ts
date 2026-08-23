import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  try {
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

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY est manquante.");
      return NextResponse.json({ error: "Service e-mail non configuré." }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Cergy Propreté <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL || "Cergyproprete@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande de devis - ${ville}`,
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
