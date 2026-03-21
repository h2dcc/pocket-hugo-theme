---
image: cover.webp
title: "Demostracion del runtime Alpine"
description: "Una pagina de ejemplo para comprobar la carga opcional de Alpine.js en el tema."
date: 2026-03-19T10:00:00+08:00
slug: "alpine-runtime-demo"
categories:
  - Interaction
tags:
  - Alpine
  - JavaScript
  - Runtime
---

Esta pagina sirve para comprobar la carga opcional de **Alpine.js** en Pocket Hugo Theme.

<div
  x-data="{ repo: null, error: false }"
  x-init="fetch('https://api.github.com/repos/gohugoio/hugo').then(r => r.json()).then(data => repo = data).catch(() => error = true)"
  class="demo-alpine-card"
>
  <p class="demo-alpine-card__meta">Demostracion con un recurso publico de GitHub</p>
  <template x-if="repo">
    <div class="demo-alpine-card__panel demo-alpine-card__panel--visible">
      <strong x-text="repo.full_name"></strong>
      <span x-text="`${repo.stargazers_count} stars · ${repo.open_issues_count} open issues`"></span>
    </div>
  </template>
  <p class="demo-alpine-card__panel demo-alpine-card__panel--visible" x-show="!repo && !error">Cargando datos del repositorio…</p>
  <p class="demo-alpine-card__panel demo-alpine-card__panel--visible" x-show="error">La solicitud publica fallo, pero Alpine.js sigue funcionando.</p>
</div>
