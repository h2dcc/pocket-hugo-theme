+++
title = "Projects"
description = "A small example section generated at build time by Hugo content adapters."
draft = false
[menu.main]
weight = -40
+++

This section is generated from structured data instead of handwritten Markdown pages.

<!--more-->

## How this works

The example site uses three pieces:

1. `exampleSite/data/projects/en.json`
2. `exampleSite/data/projects/zh_cn.json`
3. `exampleSite/content/projects/_content.gotmpl`

At build time, Hugo reads the JSON records and lets `_content.gotmpl` turn each record into a normal page with a title, slug, date, description, tags, links, and body content.

## Why this is useful

Content adapters are a good fit when your data is already structured and repeating. Instead of hand-writing ten similar pages, you can keep the content in JSON, YAML, TOML, or even transform it from another source before the build.

The generated pages still behave like normal Hugo content:

- they have permalinks
- they appear in lists
- they can be linked from posts
- they can use the same single layout as handwritten content

## Minimal setup

Create a data file:

```json
[
  {
    "slug": "my-project",
    "title": "My Project",
    "description": "A short summary",
    "date": "2026-03-01T10:00:00+08:00",
    "tags": ["Demo", "Project"],
    "links": [
      { "title": "GitHub", "url": "https://github.com/example/repo" }
    ],
    "content": "This page body is generated from structured data."
  }
]
```

Then turn those items into pages inside `_content.gotmpl`.

## Good use cases

This feature is not limited to project pages. It also works well for:

- project portfolios
- changelog entries
- reading lists
- case databases
- software release notes
- gallery metadata pages
- bookmarks or curated link collections
- a talks or notes stream sourced from external structured data

## Remote JSON is where it gets interesting

The local JSON files in this demo are only the safe starting point. A content adapter can also pull remote JSON during the build and turn it into pages.

For example, you could:

- fetch GitHub issues and publish them as a changelog section
- fetch a reading list from a remote JSON endpoint
- fetch release metadata from another service
- fetch public notes and turn them into a generated stream

This demo includes a ready-to-read example in `content/projects/_content.gotmpl`: if you enable the remote mode in `exampleSite/hugo.toml`, Hugo can import public GitHub issues and generate pages from them at build time.

## What to inspect

- the generated pages in `/projects/`
- the JSON files in `data/projects/`
- the adapter logic in `content/projects/_content.gotmpl`

The goal is to show that adapter-driven content can feel native inside the theme, not like a bolted-on data export.
