---
title: "parlezvsfr.com"
slug: "parlezvsfr"
tagline: "Plateforme e-learning de français en production, avec plus de 460 abonnés actifs"
status: "En production"
featured: true
order: 2

demoUrl: "https://parlezvsfr.com"
repoUrl: null
videoUrl: null

stack:
  - "Nuxt.js"
  - "JavaScript"
  - "TypeScript"
  - "Clever Cloud"
  - "Cloudflare"

role: "Solo — conception, développement, SEO, infrastructure, croissance produit"

timeline:
  - date: "2025-05-01"
    label: "Simplification de l'architecture"
    description: "Abandon du multilingue EN/ES, refonte complète du site."
  - date: "2025-08-04"
    label: "Migration d'infrastructure"
    description: "cPanel vers Clever Cloud, configuration DNS via Cloudflare."
  - date: "2025-09-01"
    label: "Lancement de ReplayActu.fr"
    description: "Produit dérivé, composants de quiz réutilisés."
  - date: "2025-11-01"
    label: "Audit SEO structuré"
    description: "PageSpeed, JSON-LD, sitemap auto-généré, Rich Snippets."
  - date: "2026-03-22"
    label: "Debugging de production"
    description: "Correction d'une fuite mémoire et d'un timeout serveur."
  - date: "2026-04-01"
    label: "Diversification et croissance"
    description: "Migration podcast vers Acast, recherche de financement."

challenges:
  - problem: "Architecture multilingue EN/ES dupliquait le code et diluait le SEO, sans répondre au vrai besoin des utilisateurs"
    solution: "Décision de tout recentrer sur une seule version, avec migration complète des meta tags, redirections et sitemap"
  - problem: "Migration de domaine complexe : DNS, NS, CNAME et enregistrements A à reconfigurer sans interruption de service"
    solution: "Reconfiguration via Cloudflare pour pointer le domaine vers le nouveau serveur Clever Cloud"
  - problem: "Fuite mémoire en production, cycle de vie d'un composant Vue mal géré"
    solution: "Ajout du hook onUnmounted manquant pour retirer un event listener laissé actif sur le Header"
  - problem: "La validation des quiz échouait sur des mots contenant une apostrophe typographique (ex: m'être)"
    solution: "Correction de la logique de comparaison de chaînes dans le composant Quiz.vue"

results:
  - "Plus de 520 abonnés actifs à la newsletter, en croissance continue depuis 350 en septembre 2025"
  - "Score PageSpeed Insights mobile amélioré de 64 à 69 après optimisation du cache des composants dynamiques"
  - "Accessibilité en progression continue (83 → 85), identifiée comme axe d'amélioration prioritaire"
  - "Sitemap.xml généré automatiquement pour tous les types de routes (index, slug, page unique)"
  - "Lancement réussi d'un second produit (ReplayActu.fr) réutilisant l'architecture de composants existante"
  - "Diagnostic et résolution d'incidents de production (fuite mémoire, timeout serveur)"
  - "Suivi technique complet via Google Search Console : validation de sitemap, gestion des redirections, Rich Snippets, indexation vidéo"

nextSteps:
  - "Newsletter courte niveau B1 avec grammaire et quiz"
  - "Événement QCM culture et langue françaises en direct"
  - "Lancement de French Feed"
---

## Mission

parlezvsfr.com aide les apprenants intermédiaires et avancés (B1–C2) à progresser en français à travers du contenu authentique : actualité expliquée, podcasts, quiz interactifs et sessions de conversation avec des professeurs natifs. La plateforme s'adresse à des apprenants qui veulent dépasser les manuels scolaires et comprendre le français tel qu'il est vraiment parlé aujourd'hui.

## Rôle et choix techniques

Projet solo depuis son lancement : conception, développement, infrastructure, SEO et croissance produit. Contrairement à NUI, ce projet n'est pas expérimental — c'est un produit en production avec de vrais utilisateurs et une contrainte de continuité de service, ce qui a orienté plusieurs décisions techniques vers la stabilité plutôt que la rapidité d'itération.

Le travail SEO porte sur la partie technique — structure de sitemap, redirections, données structurées (Rich Snippets), indexation via Search Console — la partie contenu à fort potentiel SEO reste un axe de travail à venir.

Le passage d'une architecture multilingue (anglais/espagnol) à une version unique n'était pas qu'une simplification technique : dupliquer le code allait à l'encontre d'une refonte pensée pour être maintenable, et un chemin d'URL dans la mauvaise langue nuisait au référencement plus qu'il ne l'aidait.

## Défis techniques

**Simplifier plutôt que complexifier**
Après plusieurs mois à essayer de faire fonctionner une version bilingue complète, la vraie décision technique a été d'arrêter d'itérer sur une architecture qui ne servait pas l'objectif produit, et de tout migrer vers une version unique — meta tags dynamiques, redirections, sitemap inclus.

**Migration d'infrastructure sans coupure**
Passage d'un hébergement cPanel à un serveur SSR sur Clever Cloud, avec reconfiguration complète des DNS (NS, CNAME, A) via Cloudflare pour que le domaine principal continue de fonctionner pendant la transition.

**Fuite mémoire en production**
Un `onMounted` sans son `onUnmounted` correspondant laissait un event listener actif sur le composant Header, dégradant les performances au fil du temps. Diagnostiqué et corrigé directement en production.

**Réutilisation de composants entre deux produits**
Le lancement de ReplayActu.fr comme site dérivé a été l'occasion de vérifier que l'architecture de composants (quiz, cartes de contenu) tenait la route au-delà d'un seul site — les mêmes composants Quiz sont utilisés sur les deux plateformes.

## Prochaines étapes
- Newsletter courte niveau B1 avec grammaire et quiz intégré
- Événement QCM culture et langue françaises en direct
- Lancement de NUI