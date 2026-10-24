---
title: 'NUI — Vocab App'
description: 'Application de mémorisation de vocabulaire de langues étrangères (A2-B1)'
slug: 'nui'
tagline: 'Application de mémorisation de vocabulaire de langues étrangères'
status: 'En développement' # "En production" | "En développement" | "Archivé"
featured: true
order: 2

# Liens
prodUrl: null
demoUrl: 'https://app-e42da743-93d7-484e-bb49-2ea2b085c21f.cleverapps.io/'
repoUrl: 'https://github.com/clemencizm/nui'
videoUrl: null # à ajouter si vous filmez une démo

# Stack technique
stack:
  - 'JavaScript'
  - 'TypeScript'
  - 'Python'
  - 'JSON'
  - 'localStorage'

# Rôle
role: 'Solo — conception, développement, data pipeline'

# Chronologie (réutilisée pour le composant Timeline.vue)
timeline:
  - date: '2025-11-29'
    label: 'V1 — Manuelle'
    description: "Import manuel du vocabulaire, 4 types d'exercices en JS vanilla."
  - date: '2025-11-29'
    label: 'V2 — Semi-automatisée'
    description: "Import JSON, sauvegarde d'état via localStorage."
  - date: '2025-11-30'
    label: 'V3 — Automatisée'
    description: 'Filtres niveau/thème, sessions de 10 mots, chargement JSON auto.'
  - date: '2026-07-08'
    label: 'Refonte UX mobile'
    description: 'Navigation clavier entre champs, validation au premier essai.'
  - date: '2026-07-18'
    label: 'Pipeline de données'
    description: 'Script Python RAW → CLEAN → review qualité → JSON de production.'

# Défis techniques (question/réponse)
challenges:
  - problem: "Bug d'affichage avec les caractères accentués  (ä, ö, ü, ß) en étape 7 (desktop)"
    solution: 'Refonte de la logique de validation du texte à trous pour gérer les caractères spéciaux allemands.'
  - problem: 'Rupture du flow utilisateur : le focus ne passait pas au champ suivant en fin de mot'
    solution: "Ajout d'une gestion d'événements clavier pour un saut automatique entre inputs y compris en mobile."
  - problem: "Fiabilité des données : Passage d'un import JSON collé manuellement à un vrai pipeline"
    solution: 'un script Python nettoie les données brutes, génère un rapport, produit un fichier propre et structurer en adéquation avec notre JSON (en attente de validation humaine avant intégration au JSON de production).'

# Résultats / preuves
results:
  - 'Pipeline de données avec étape de contrôle qualité avant mise en production'
  - 'Architecture pensée pour extraction future du site parlezvsfr.com vers une PWA autonome'

nextSteps:
  - 'Évolution vers une PWA'
  - 'Système de points et notifications'
  - 'Ajout de niveaux et de langues (anglais, espagnol)'

# galleryColumns: 3
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

NUI est une application d'apprentissage de vocabulaire pensée pour préparer les examens de français A2 et B1 (d'autres niveaux et langues sont prévus). L'utilisateur choisit un niveau et un thème, puis apprend une série de 8 mots à travers 4 exercices progressifs — de la simple reconnaissance jusqu'au texte à trous avec indices.

L'objectif n'est pas de recréer une énième app de flashcards, mais de forcer la mémorisation active : aucune réponse n'est jamais donnée automatiquement, l'utilisateur doit toujours deviner avant de voir la solution.

## Comment ça marche

1. Sélection du niveau et du thème
2. Une liste de 8 mots est tirée aléatoirement depuis la base de vocabulaire
3. Chaque mot est présenté avec sa traduction
4. 4 exercices s'enchaînent, avec un niveau de difficulté croissant :
   - Reconnaissance du mot parmi 4 propositions
   - Reconnaissance inverse (traduction → mot)
   - Sélection du bon mot dans une phrase
   - Texte à trous, avec indices progressifs à chaque erreur

Le score est calculé uniquement sur le premier essai de chaque mot, pour éviter qu'un utilisateur ne progresse en devinant par élimination.

## Rôle et choix techniques

Projet solo, de la conception à l'implémentation. Développé initialement en JavaScript vanilla pour itérer vite sans la lourdeur d'un framework, avec l'intention explicite de pouvoir extraire l'app du site parlezvsfr.com à tout moment — d'où une architecture volontairement découplée, avec les données stockées en JSON plutôt qu'en dur dans le code.

Le choix du Python pour le pipeline de données (plutôt que de tout garder en JS) vient d'un besoin concret : nettoyer et valider de gros volumes de vocabulaire avant mise en production, avec une étape de contrôle qualité qui ne fait pas partie du runtime de l'app elle-même.

## Prochaines étapes

- Évolution vers une PWA (installation, usage offline)
- Système de points et de notifications pour encourager la pratique régulière
- Support de langues et traductions supplémentaires (anglais, espagnol)
