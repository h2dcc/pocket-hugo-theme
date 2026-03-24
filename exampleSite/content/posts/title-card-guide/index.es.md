---
title: "Guia de tarjetas de titulo"
description: "Una guia practica para usar las tarjetas de titulo y ver los 16 estilos predefinidos en Pocket Hugo Theme."
date: 2026-02-09T10:20:00+08:00
slug: "title-card-guide"
comments: true
coverCard: "G"
categories:
  - Demo
tags:
  - Spanish
  - Cover Card
  - Theme
---

Pocket Hugo Theme puede generar una **tarjeta de titulo** cuando una pagina no tiene imagen de portada. Esta pagina muestra la forma mas simple de usarla.

## Configuracion minima

```yaml
coverCard: "a"
```

- `a` a `h`: 8 estilos claros
- `A` a `H`: 8 estilos oscuros
- cualquier otro valor: estilo aleatorio

Si defines `coverCard`, la tarjeta generada tiene prioridad sobre `image`.

## Los 16 estilos

{{< title-card-showcase >}}
