+++
image = "cover.webp"
title = "Alpine Runtime Demo"
date = 2026-02-06T09:00:00+08:00
draft = false
description = "A sample page for checking the optional Alpine.js runtime in the theme."
slug = "alpine-runtime-demo"
tags = ["alpine", "javascript", "runtime"]
categories = ["Interaction"]
+++

This page is a small demonstration of the optional **Alpine.js** runtime. The goal is not to turn the whole theme into a framework, but to give users a lightweight way to add tiny interactive blocks.

<!--more-->

<div
  x-data="{ repo: null, error: false }"
  x-init="fetch('https://api.github.com/repos/gohugoio/hugo').then(r => r.json()).then(data => repo = data).catch(() => error = true)"
  class="demo-alpine-card"
>
  <p class="demo-alpine-card__meta">Live demo from a public GitHub API resource</p>
  <template x-if="repo">
    <div class="demo-alpine-card__panel demo-alpine-card__panel--visible">
      <strong x-text="repo.full_name"></strong>
      <span x-text="`${repo.stargazers_count} stars · ${repo.open_issues_count} open issues`"></span>
    </div>
  </template>
  <p class="demo-alpine-card__panel demo-alpine-card__panel--visible" x-show="!repo && !error">Loading repository data…</p>
  <p class="demo-alpine-card__panel demo-alpine-card__panel--visible" x-show="error">The public API request failed, but Alpine itself is still running.</p>
</div>

This demo pairs well with the [View Transition Demo](/article/view-transitions-demo/) because both belong to the theme's optional interaction layer.
