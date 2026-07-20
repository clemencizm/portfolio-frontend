# Portfolio — Frontend Engineer

Portfolio personnel présentant mes projets de développement frontend, construit avec Nuxt 4.

🔗 [Voir le site](https://votre-url.com) *(à mettre à jour une fois déployé)*

## Stack

- [Nuxt 4](https://nuxt.com)
- [Nuxt Content](https://content.nuxt.com) — gestion des projets en Markdown
- [Tailwind CSS](https://tailwindcss.com)
- Déployé sur [Vercel](Nuxt 3/Nitro a un preset natif optimisé pour Vercel (déploiement zero-config, détection automatique)
Mise en place :
Poussez le repo sur GitHub
Connectez le repo sur vercel.com (import direct, aucune config nécessaire — Vercel détecte Nuxt automatiquement)
Chaque push sur main redéploie automatiquement
Pas besoin de nuxt generate manuel : Vercel gère le build. Et bonus pour votre CV : vous pouvez mentionner "déploiement continu (CI/CD) via Vercel

## Structure
- content/projects/ → une fiche Markdown par projet (frontmatter structuré)
- pages/projects/[slug].vue → template unique réutilisé pour chaque projet
- components/ → Timeline, TechStack, ChallengeCard, ProjectHeader

## Développement local

\`\`\`bash
npm install
npm run dev
\`\`\`

Le site tourne sur `http://localhost:3000`.

## Build

\`\`\`bash
npm run generate
\`\`\`

Génère une version statique dans `.output/public`.

## Projets présentés

- **NUI** — application d'apprentissage de vocabulaire allemand (A2/B1)
- **parlezvsfr.com** — plateforme e-learning en production
- **allemagne-pratique.org** — site de contenu pour une association

## Pourquoi ce projet

Ce portfolio sert de vitrine technique : chaque fiche projet documente non seulement le résultat, mais aussi l'évolution technique et les décisions d'architecture prises en cours de développement.