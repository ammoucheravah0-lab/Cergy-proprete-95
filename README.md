# Cergy Propreté 95 — Site vitrine Next.js

Site vitrine SEO local pour une entreprise de nettoyage basée à Cergy,
ciblant le Val-d'Oise (95). Stack : **Next.js 14 (App Router) + TypeScript
+ Tailwind CSS**.

## 🚀 Démarrage

```bash
npm install
npm run dev
```

## 📁 Structure du projet

```
app/
  layout.tsx              → Metadata globale + JSON-LD CleaningService (site entier)
  globals.css              → Design tokens (couleurs, boutons, focus states)
  page.tsx                 → Page d'accueil (H1 générique + toutes les sections)
  nettoyage-cergy/page.tsx → Page SEO locale phare "entreprise de nettoyage Cergy"
                              (H1 dédié, FAQ + Schema FAQPage, breadcrumb)
  zones-intervention/page.tsx → Hub des villes du Val-d'Oise (maillage interne)
  api/contact/route.ts     → Endpoint à brancher pour recevoir les devis (voir TODO dedans)
  robots.ts / sitemap.ts   → SEO technique (à mettre à jour avec le domaine final)

components/
  Header.tsx / Footer.tsx  → NAP (Nom/Adresse/Téléphone), navigation, CTA appel
  Hero.tsx                 → Bloc d'ouverture page d'accueil
  Services.tsx             → Grille des 6 prestations
  WhyUs.tsx                → Arguments de conversion / réassurance
  ZonesIntervention.tsx    → Villes du Val-d'Oise (maillage SEO local)
  Testimonials.tsx         → Avis clients (à remplacer par de vrais avis)
  ContactForm.tsx          → Formulaire de devis (client component)
  DevisSection.tsx         → Section complète "Devis" (texte + formulaire)

lib/
  schema.ts                → Générateurs Schema.org (CleaningService, Breadcrumb, FAQ)

public/
  logo.svg                 → Logo de marque fourni

STRATEGIE_IMAGES.md        → Liste des visuels à produire/trouver + alt SEO
```

## ✅ Ce qui est déjà fait
- Architecture App Router propre, orientée SEO local (URLs `/nettoyage-cergy`,
  `/zones-intervention`).
- Metadata dynamiques (title/description) par page, avec `canonical`.
- Données structurées **Schema.org `CleaningService`** (site entier),
  **`BreadcrumbList`** et **`FAQPage`** (page Cergy).
- Balisage sémantique strict : un seul `<h1>` par page, `<h2>` structurants,
  `<address>` pour le NAP.
- Formulaire de devis fonctionnel côté front, avec endpoint API prêt à
  brancher (`app/api/contact/route.ts`).
- `sitemap.xml` et `robots.txt` générés automatiquement par Next.js.
- Accessibilité de base : focus visible, labels de formulaire, `alt` sur
  toutes les images.

## 🔧 Ce qu'il te reste à faire (cherche les commentaires `TODO`)
1. **Coordonnées réelles** : remplacer partout (`lib/schema.ts`, `Header.tsx`,
   `Footer.tsx`, `Hero.tsx`, `DevisSection.tsx`) le téléphone, l'e-mail et
   l'adresse exacte du gérant à Cergy.
2. **Formulaire de contact** : brancher un vrai envoi d'e-mail ou CRM dans
   `app/api/contact/route.ts` (3 options détaillées en commentaire : Resend,
   SMTP/Nodemailer, ou CRM externe).
3. **Images** : produire/insérer les visuels listés dans
   `STRATEGIE_IMAGES.md`, dans `/public/images/`.
4. **Nom de domaine définitif** : remplacer `cergy-proprete95.fr` dans
   `layout.tsx`, `lib/schema.ts`, `robots.ts`, `sitemap.ts`.
5. **Google Search Console & Google Business Profile** : coller le code de
   vérification dans `layout.tsx` (`verification.google`) et créer/relier
   la fiche GBP (indispensable pour le SEO local, en complément du site).
6. **Pages villes complémentaires** (optionnel mais recommandé pour la
   longue traîne) : dupliquer `app/nettoyage-cergy/page.tsx` pour Pontoise,
   Osny, Vauréal, etc. — voir le TODO dans `ZonesIntervention.tsx`.
7. **Mentions légales / RGPD** : créer `/mentions-legales` et
   `/politique-de-confidentialite`, ajouter la case à cocher RGPD dans le
   formulaire (`ContactForm.tsx`).

## 🎨 Identité visuelle
- **Couleurs** (voir `tailwind.config.ts`) : `navy` (bleu marine profond,
  sérieux), `cergy` (bleu clair, clarté), `brass` (doré, accent prestige à
  utiliser avec parcimonie), `ivory` (fond chaleureux).
- **Typographies** : `Fraunces` (serif de caractère) pour les titres,
  `Manrope` (sans-serif moderne) pour le texte courant.
- **Signature de marque** : le trait "sweep" doré (`.signature-sweep` dans
  `globals.css`), qui rappelle un geste de nettoyage, réutilisé comme
  séparateur visuel dans toutes les sections et dans le logo.
