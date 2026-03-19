---
title: "Guía"
description: "Instalación básica y comprobación local de Pocket Hugo Theme."
slug: "guide"
---

## Instalación

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

```toml
theme = "pocket-hugo-theme"
```

## Vista local

```bash
hugo server --source exampleSite --themesDir ../..
```

## Qué conviene revisar

- La densidad de las tarjetas con portada
- El ritmo tipográfico en las páginas de artículo
- El comportamiento del selector de idioma
- El orden de los widgets laterales