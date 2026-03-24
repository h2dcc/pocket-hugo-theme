---
title: "Guide"
slug: "guide"
listTitle: false
comments: true
menu:
  main:
    weight: -45
---

This page explains how to install, configure, and use `pocket-hugo-theme` in a real Hugo site.

## Install The Theme

If you manage themes with git submodules:

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

Then enable it in your site config:

```toml
theme = "pocket-hugo-theme"
```

## Minimum Setup

At minimum, you usually want to define:

```toml
[params]
  featuredImageField = "image"
  favicon = "/img/logo-default.svg"

  [params.sidebar.avatar]
    enabled = true
    local = true
    src = "img/avatar.webp"
```

## Content Structures

The theme is designed to work well with several common Hugo patterns.

### Flat Markdown

```text
content/posts/note.md
```

Useful for quick notes and lightweight articles.

### Single-language Bundle

```text
content/posts/story/index.md
content/posts/story/cover.webp
```

Useful when an article needs local images or attachments.

### Multilingual Bundle

```text
content/posts/story/index.md
content/posts/story/index.zh-cn.md
content/posts/story/cover.webp
```

Useful when you want multiple language versions to share the same bundle resources.

## Pocket Hugo Workflow

This theme is the best-fit companion for Pocket Hugo because it expects a writing-first workflow:

- cover images are promoted clearly on homepage cards
- article pages stay calm and readable on mobile
- compact front matter works well for both notes and essays

## Widget Titles

You can decide whether widget titles should be visible:

```toml
[params.widgets.titleVisibility]
  archives = true
  categories = true
  related = true
  search = true
  tagCloud = true
  toc = true
```

## Suggested Next Steps

1. Replace the demo social links with your own profiles.
2. Add your own cover images and article bundles.
3. Tune sidebar widgets for homepage, static pages, and article pages.
