---
title: "Title Card Guide"
description: "A practical guide for using fallback title cards in Pocket Hugo Theme, including front matter setup and all 16 presets."
date: 2026-02-09T08:30:00+08:00
slug: "title-card-guide"
comments: false
coverCard: "G"
categories:
  - Demo
tags:
  - Hugo
  - Cover Card
  - Theme
---

Pocket Hugo Theme can turn a missing cover image into a generated **title card**. 

<!--more-->

## What this feature is for

Use a title card when you want the article to look complete in lists and single pages, but you do not want to prepare a real image file for every post.

That is especially useful for:

- notes and short essays
- documentation pages
- multilingual pages that should share a consistent visual rhythm
- sections where text-first cards feel more natural than photo covers

## Quick start

{{< note type="info" title="Zero config works too" >}}
If you do nothing, the theme can still generate a fallback title card automatically when the site-level cover settings are enabled.
{{< /note >}}

In front matter, the simplest form is just one letter:

```yaml
coverCard: "a"
```

Rules:

- `a` to `h`: the 8 light presets
- `A` to `H`: the 8 dark presets
- any other value: falls back to an automatic random preset

If you set `coverCard`, the theme will use the generated title card and stop using `image`.

## Hide the repeated list title

If you only want the title to appear inside the card on homepage, taxonomy, archive, and other list-style pages, add:

```yaml
listTitle: false
```

That will hide the repeated title in list cards. On single pages, if the page is using a generated title card, it will also hide the separate title block there.

If you want to change this site-wide, use `params.article.listTitle = false` in `hugo.toml`. That site-level switch only affects generated gradient cards in list pages, not normal image covers.

## Example front matter

```yaml
title: "My Article"
date: 2026-02-09T08:30:00+08:00
slug: "my-article"
coverCard: "C"
listTitle: false
```

## All 16 presets

The presets below follow the built-in order used by the theme.

{{< title-card-showcase >}}

## When to use which preset

- `a` / `A`: warm and editorial, good for essays and personal writing
- `b` / `B`: softer and more friendly, useful for tutorials or documentation
- `c` / `C`: stronger contrast, good for product or release notes
- `d` / `D`: muted and calm, fits archive-like or reflective writing
- `e` / `E`: lively and fresh, useful for tools, workflow, and updates
- `f` / `F`: neutral and restrained, good for technical references
- `g` / `G`: clearer and more digital, useful for software and platform topics
- `h` / `H`: monochrome and minimal, good for terse notes or index pages

## Default behavior

If the page does not define `coverCard`, the theme falls back to the site-level cover rules in `hugo.toml`.

That means a user can also do nothing at all and still get a generated title card by default. When the theme fallback is set to gradient mode, the card preset is assigned automatically.

That means you can combine both strategies:

- use a global fallback mode for ordinary posts
- set `coverCard` only on the pages where you want a specific preset

## One practical recommendation

Start with the automatic fallback for the site, then manually assign letters only to pages that you want to feel more deliberate. That keeps authoring fast while still giving important pages a distinct look.
