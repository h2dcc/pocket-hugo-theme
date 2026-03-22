---
image: cover.webp
title: "Reference de configuration des images"
description: "Une page qui explique chaque option de configuration d image utilisee par le theme pour les couvertures et les images dans le contenu."
date: 2026-03-19T09:55:00+08:00
slug: "image-config-reference"
categories:
  - Images
tags:
  - Images
  - Configuration
  - Theme
---

Cette page remplace l ancienne demonstration de couverture. Elle sert maintenant de reference concise pour chaque option liee aux images dans le fichier `hugo.toml` du site d exemple.

- `cardFill` : definit le recadrage des cartes de la page d accueil.
- `taxonomyFill` : definit le recadrage pour les listes de categories et de tags.
- `enableMaxHeight` : active ou non la limite de hauteur pour les images dans le contenu.
- `limitHeight` : force une hauteur unique sur tous les ecrans.
- `unifiedMaxHeight` : hauteur partagee quand la limite unique est activee.
- `mobileMaxHeight` / `tabletMaxHeight` / `desktopMaxHeight` : hauteurs selon la largeur de l ecran.
- `fullWidthFit` : comportement `object-fit` pour les images pleine largeur.
- `responsive` / `format` / `quality` / `coverWidths` / `contentWidths` : reglages du pipeline Hugo pour les images derivees.
