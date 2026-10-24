---
title: 'Parlez-vous français ?'
slug: 'parlezvsfr'
tagline: "Media with e-learning modules to Learn French x Today's culture & Day-to-Day Language"
status: 'In production'
featured: true
order: 1

prodUrl: 'https://parlezvsfr.com'
demoUrl: null
repoUrl: 'https://github.com/clemencizm/pvf-webapp'
videoUrl: null

stack:
  - 'Nuxt.js'
  - 'JavaScript'
  - 'TypeScript'
  - 'Clever Cloud'
  - 'Cloudflare'

role: 'Solo — Ideation, Design, Full-Stack developement, SEO, Business Developement'

timeline:
  - date: '2025-05-01'
    label: "Simplification de l'architecture"
    description: 'Abandon du multilingue EN/ES, refonte complète du site.'
  - date: '2025-08-04'
    label: "Migration d'infrastructure"
    description: 'cPanel vers Clever Cloud, configuration DNS via Cloudflare.'
  - date: '2025-09-01'
    label: 'Lancement de ReplayActu.fr'
    description: 'Produit dérivé, composants de quiz réutilisés.'
  - date: '2025-11-01'
    label: 'Audit SEO structuré'
    description: 'PageSpeed, JSON-LD, sitemap auto-généré, Rich Snippets.'
  - date: '2026-03-22'
    label: 'Debugging de production'
    description: "Correction d'une fuite mémoire et d'un timeout serveur."
  - date: '2026-04-01'
    label: 'Diversification et croissance'
    description: 'Migration podcast vers Acast, recherche de financement.'

challenges:
  - problem: 'Architecture multilingue EN/ES dupliquait le code et diluait le SEO, sans répondre au vrai besoin des utilisateurs'
    solution: 'Décision de tout recentrer sur une seule version, avec migration complète des meta tags, redirections et sitemap tout en continuant à alimenter la version espagnol pour une future implémentation'
  - problem: "Migration d'infrastructure (cPanel à un serveur SSR) sans interruption de service"
    solution: 'Reconfiguration complète des DNS (NS, CNAME, A) via Cloudflare pour faire pointer le domaine vers le nouveau serveur (Clever Cloud)'
  - problem: "Fuite mémoire en production, cycle de vie d'un composant Vue mal géré"
    solution: 'Un `onMounted` sans son `onUnmounted` correspondant laissait un event listener actif sur le composant Header, dégradant les performances au fil du temps. Diagnostiqué et corrigé directement en production'
  - problem: "La validation des quiz échouait sur des mots contenant une apostrophe typographique (ex: m'être)"
    solution: 'Correction de la logique de comparaison de chaînes dans le composant Quiz.vue'

metrics:
  - label: 'PageSpeed mobile'
    before: '64'
    after: '69'
    note: 'Cache des composants dynamiques, janv. à févr. 2026'
  - label: 'Accessibilité Lighthouse'
    before: '83'
    after: '85'
    note: "Axe d'amélioration prioritaire"
  - label: 'Abonnés newsletter'
    before: '350'
    after: '840+'
    note: 'Depuis septembre 2025'

results:
  - 'Sitemap.xml généré automatiquement pour tous les types de routes'
  - 'Second produit (ReplayActu.fr) lancé en réutilisant les composants existants'
  - 'Incidents de production diagnostiqués et résolus (fuite mémoire, timeout serveur'
  - 'Suivi Search Console : sitemap, redirections, Rich Snippets, indexation vidéo'

nextSteps:
  - 'Newsletter courte niveau B1 avec grammaire et quiz'
  - 'Événement QCM culture et langue françaises en direct'
  - 'Lancement de French Feed'

#  galleryColumns: 3
# gallery:
#   - src: "/images/nui-step-1.webp"
#     alt: "Étape 1 de NUI : choix du niveau et du thème"
#     width: 800
#     height: 600
#     caption: "Choix du niveau"
#   - src: "/images/nui-step-6.webp"
#     alt: "Étape 6 de NUI : phrase à compléter avec quatre propositions"
#     width: 800
#     height: 600
#     caption: "Exercice en contexte"
#   - src: "/images/nui-step-7.webp"
#     alt: "Étape 7 de NUI : texte à trous avec une case par lettre"
#     width: 800
#     height: 600
#     caption: "Texte à trous avec indices"
---

## Mission

parlezvsfr.com aide les apprenants intermédiaires et avancés (B1–C2) à progresser en français à travers du contenu authentique : actualité expliquée, podcasts, quiz interactifs et sessions de conversation avec des professeurs natifs. La plateforme s'adresse à des apprenants qui veulent dépasser les manuels scolaires et comprendre le français tel qu'il est vraiment parlé aujourd'hui.

## Rôle et choix techniques

Projet solo depuis son lancement : conception, développement, infrastructure, SEO et croissance produit. Contrairement à NUI, ce projet n'est pas expérimental — c'est un produit en production avec de vrais utilisateurs et une contrainte de continuité de service, ce qui a orienté plusieurs décisions techniques vers la stabilité plutôt que la rapidité d'itération.

Le travail SEO porte sur la partie technique — structure de sitemap, redirections, données structurées (Rich Snippets), indexation via Search Console — la partie contenu à fort potentiel SEO reste un axe de travail à venir.

Le passage d'une architecture multilingue (anglais/espagnol) à une version unique n'était pas qu'une simplification technique : dupliquer le code allait à l'encontre d'une refonte pensée pour être maintenable, et un chemin d'URL dans la mauvaise langue nuisait au référencement plus qu'il ne l'aidait.

## Next steps

- Newsletter courte niveau B1 avec grammaire et quiz intégré
- Événement QCM culture et langue françaises en direct
- Lancement de NUI
