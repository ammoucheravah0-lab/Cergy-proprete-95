# Stratégie d'images — Cergy Propreté 95

Toutes les images doivent être **compressées** (WebP/AVIF, < 200 Ko idéalement),
en **haute qualité mais réalistes** (éviter les banques d'images trop "stock"
qui cassent la crédibilité locale), et si possible **authentiques** (vraies
photos de l'équipe/des locaux à Cergy) pour renforcer la confiance E-E-A-T
de Google (Expérience, Expertise, Autorité, Confiance).

Chaque image ci-dessous correspond à un `src` déjà présent en commentaire
ou en dur dans le code (à placer dans `/public/images/`).

## 1. Header / Logo
- **Fichier** : `public/logo.svg` (déjà généré)
- Pas de photo nécessaire, c'est le SVG fourni.

## 2. Hero (page d'accueil)
- **Fichier attendu** : `public/images/hero-nettoyage-cergy.jpg`
- **Description à générer/trouver** : Technicien(ne) de nettoyage en tenue
  professionnelle propre (bleu marine ou blanc), en train de nettoyer une
  vitre ou un bureau moderne et lumineux, lumière naturelle, ambiance
  premium (pas de matériel bas de gamme visible).
- **alt** : `Technicien de nettoyage professionnel Cergy Propreté 95 intervenant dans un bureau à Cergy`

## 3. Services (grille de 6 cartes) — `components/Services.tsx`
| Fichier | Description à générer/trouver | alt |
|---|---|---|
| `service-bureaux-cergy.jpg` | Open space moderne, sol qui brille, personne en train de passer l'aspirateur ou nettoyer un bureau | Nettoyage professionnel de bureaux à Cergy par l'équipe Cergy Propreté 95 |
| `service-copropriete-95.jpg` | Hall d'immeuble propre et lumineux, sol carrelé nettoyé, boîtes aux lettres alignées | Nettoyage des parties communes d'une copropriété dans le Val-d'Oise |
| `service-fin-chantier-cergy.jpg` | Pièce en travaux fraîchement nettoyée, sol protégé retiré, vitres propres | Nettoyage fin de chantier réalisé par Cergy Propreté 95 à Cergy |
| `service-menage-particuliers-cergy.jpg` | Intérieur de maison/appartement lumineux et rangé, cuisine ou salon nettoyé | Ménage à domicile pour particuliers à Cergy et dans le Val-d'Oise |
| `service-vitrerie-cergy.jpg` | Personne nettoyant une baie vitrée avec raclette, reflet propre | Nettoyage de vitres professionnel à Cergy, Val-d'Oise |
| `service-desinfection-95.jpg` | Technicien avec gants/pulvérisateur désinfectant une surface (poignée, table) | Désinfection professionnelle des locaux à Cergy par Cergy Propreté 95 |

## 4. Page `/nettoyage-cergy`
- **Fichier attendu** : `public/images/nettoyage-cergy-equipe.jpg`
- **Description** : Photo d'équipe (2-3 personnes) devant un point
  reconnaissable de Cergy (Préfecture, quartier de l'Horloge, gare) si
  possible réelle — sinon une scène de nettoyage en intérieur de bureau.
- **alt** : `Équipe Cergy Propreté 95 réalisant une prestation de nettoyage à Cergy`

## 5. Open Graph / réseaux sociaux
- **Fichier attendu** : `public/og-image.jpg` (1200×630 px)
- **Description** : Visuel avec logo + accroche "Nettoyage professionnel à
  Cergy & Val-d'Oise", fond navy/brass cohérent avec l'identité.
- **alt (meta og:image)** : `Équipe Cergy Propreté 95 intervenant à Cergy, Val-d'Oise`

## 6. Témoignages (optionnel)
- Éviter les vrais visages sans consentement écrit : privilégier des
  initiales/avatars génériques plutôt que des photos stock de "faux clients".

## Bonnes pratiques SEO images à respecter
1. Nommer les fichiers avec des mots-clés (`nettoyage-bureaux-cergy.jpg`,
   pas `IMG_2031.jpg`).
2. Toujours renseigner un `alt` descriptif incluant la ville quand c'est
   pertinent — jamais de sur-optimisation (pas de liste de mots-clés).
3. Utiliser le composant `next/image` (déjà en place) pour la conversion
   automatique WebP/AVIF et le lazy-loading natif (sauf Hero en `priority`).
4. Prévoir des dimensions cohérentes pour limiter le Cumulative Layout Shift
   (CLS) — les `width`/`height` sont déjà fixés dans le code.
