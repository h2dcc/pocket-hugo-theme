# Pocket Hugo Theme

A calm, content-first Hugo theme built for cover-driven reading, multilingual writing,
and lightweight personal publishing.

`pocket-hugo-theme` is designed as the best-fit companion theme for
[Pocket Hugo](https://github.com/h2dcc/pocket-hugo), but it also works as a
standalone Hugo theme for multilingual blogs, notes, and long-form writing.

## Features

- Multilingual publishing with translation links, canonical handling, `hreflang` metadata, and a configurable 3-plus-language header switcher
- Cover-first article cards that feel especially natural on mobile screens
- Pocket Hugo-friendly content structure for flat Markdown, single-language bundles, and multilingual bundles
- Search page powered by front matter output
- Archives, categories, tags, and related posts
- Talk page layout for lightweight social updates
- Friend links shortcode with local or remote images
- Optional right-sidebar QR block
- Configurable widget title visibility
- Responsive layout with light and dark color schemes

## Requirements

- Hugo Extended `>= 0.157.0`

## Installation

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

```toml
theme = "pocket-hugo-theme"
```

## Quick Start

The repository includes an `exampleSite/` folder you can run locally. It now ships with both an English-commented `hugo.toml` and a Chinese-commented `hugo.zh-cn.toml`:

```bash
hugo server --source exampleSite --themesDir ../..
```

Core configuration usually looks like this. For a full copy-ready example, see `exampleSite/hugo.toml`; for the Chinese-commented version, see `exampleSite/hugo.zh-cn.toml`:

```toml
[params.sidebar.avatar]
  enabled = true
  local = true
  src = "img/avatar.webp"

[params]
  favicon = "/img/logo-default.svg"
  appleTouchIcon = "/img/avatar.webp"

[params.widgets.titleVisibility]
  archives = true
  categories = true
  related = true
  search = true
  tagCloud = true
  toc = true

[params.languageSwitcher]
  headerSelectThreshold = 3

[[params.social]]
  name = "GitHub"
  icon = "brand-github"
  url = "https://github.com/yourname/yourrepo"
```

## Content Types

The theme works well with three common Hugo writing patterns:

- Flat Markdown pages such as `content/posts/note.md`
- Single-language bundles such as `content/posts/story/index.md`
- Multilingual bundles such as `content/posts/story/index.md` and `content/posts/story/index.zh-cn.md`

## Pocket Hugo Fit

Pocket Hugo encourages a writing-first workflow, and this theme is shaped around that:

- It keeps homepage cards clean and scan-friendly on mobile
- It works well with compact front matter and cover-driven publishing
- It preserves a calm article layout for both short updates and longer essays

## Repository Layout

- `theme.toml`: Hugo theme metadata
- `hugo.toml`: minimum Hugo version for the theme itself
- `images/`: preview assets for Hugo theme listing
- `exampleSite/`: runnable demo site

## Notes

- The theme is optimized for article-heavy personal sites rather than portal homepages.
- Personal social links and sidebar QR images are configurable instead of hardcoded.
- If you use Pocket Hugo, this theme is intended to be its sister project and recommended presentation layer.

## Release Prep

- images/screenshot.png and images/tn.png are included for Hugo theme listing previews.
- 	heme.toml, LICENSE, and exampleSite/ are included for a release-ready initial commit.
- The example site content covers multilingual bundles, single-language bundles, flat Markdown, static pages, and cover-driven cards.

## Language Switcher

- Article and card translation links are rendered as plain text language names without pill borders.
- When the site has three or more languages, the header icon becomes a passive indicator and the actual switching is handled by the select box beside it.
- Configure the threshold with `[params.languageSwitcher].headerSelectThreshold`.