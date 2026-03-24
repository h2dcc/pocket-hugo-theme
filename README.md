# Pocket Hugo Theme

A calm, content-first Hugo theme for multilingual blogs, long-form writing, talks, links, and cover-driven reading.

`pocket-hugo-theme` is designed to pair naturally with [Pocket Hugo](https://github.com/h2dcc/pocket-hugo), but it also works as a standalone Hugo theme for personal sites that value readable typography, lightweight publishing, and flexible theme configuration.

![Pocket Hugo Theme screenshot](https://raw.githubusercontent.com/h2dcc/pocket-hugo-theme/master/images/screenshot.png)

## Features

- Multilingual publishing with translation links, canonical handling, and `hreflang` metadata
- Cover-first article cards with homepage, taxonomy, and article layouts tuned for personal blogs
- Local search with optional full-text indexing
- Talks page with homepage widget support and standalone RSS / JSON outputs
- Friend links shortcode with local or remote images
- Optional Giscus or Twikoo comments
- Configurable widget title visibility, article summaries, backlinks, TOC, reading time, and back-to-top button
- Multiple built-in color palettes plus optional visitor-side palette switching
- Configurable list width presets for single-column and double-column homepage/list layouts
- Configurable inline image height strategy and theme-aware image brightness settings
- Example site covering multilingual pages, shortcodes, content adapters, talks feeds, and image settings

## Requirements

- Hugo Extended `>= 0.149.0`
- Development and testing environment: Hugo Extended `0.157.x` and `0.158.x`

## Installation

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

```toml
theme = "pocket-hugo-theme"
```

## Quick Start

Run the bundled example site locally:

```bash
hugo server --source exampleSite --themesDir ../..
```

The repository includes:

- `exampleSite/hugo.toml`: English-commented example configuration
- `exampleSite/hugo.zh-cn.toml`: Chinese-commented example configuration
- `README.zh-CN.md`: Chinese introduction and configuration notes

## Core Configuration

A typical site-level setup may look like this:

```toml
[params]
  favicon = "/img/logo-default.svg"
  appleTouchIcon = "/img/avatar.webp"
  summaryLength = 0
  articleWords = false
  backToTop = false
  viewTransitions = false

  [params.search]
    provider = "local"
    fullText = false

  [params.article]
    showSummary = true
    backlinks = true
    backlinksLimit = 5
    toc = true
    readingTime = true

  [params.layout]
    listMode = "double"

  [params.colorScheme]
    toggle = true
    default = "auto"
    preset = "morandi-mist"
    showPicker = true
```

## Layout Options

`[params.layout]`

- `listMode = "double"`
  - Use the wider homepage/list layout (`1320px`) and enable the double-column list presentation on large screens.
- `listMode = "single"`
  - Use the more compact homepage/list layout (`1080px`) for a calmer single-column reading rhythm.

## Built-in Color Palettes

`[params.colorScheme]`

- `toggle`
  - Show or hide the light/dark mode switch in the header.
- `default`
  - `auto`, `light`, or `dark`.
- `preset`
  - Choose the default palette.
- `showPicker`
  - Show or hide the visitor-side palette picker in the header.

Available presets:

- `golden-summer-fields`
- `soft-pastel-shades`
- `black-gold-elegance`
- `fresh-greens`
- `light-steel`
- `deep-sea-blue`
- `morandi-mist`
- `monochrome-core`

Example:

```toml
[params.colorScheme]
  toggle = true
  default = "auto"
  preset = "deep-sea-blue"
  showPicker = true
```

## Search Options

`[params.search]`

- `provider`
  - Currently `local`.
- `fullText`
  - `false`: search title, description, slug, categories, and tags only.
  - `true`: include full article text in the local search index.

## SEO Options

`[params.seo]`

- `tagline`
  - Optional site tagline used by SEO title patterns.
- `homeDescription`
  - Homepage meta description used by search engines and social previews.
- `descriptionLength`
  - Maximum length used when truncating SEO descriptions.
- `separator`
  - Separator string used by title templates.

`[params.seo.title]`

- `home`
- `post`
- `page`
- `group`
- `archive`

Available placeholders:

- `[site_name]`
- `[tagline]`
- `[separator]`
- `[post_title]`
- `[page_title]`
- `[group_title]`
- `[archive_title]`

Example:

```toml
[params.seo]
  tagline = "A cover-driven theme for long-term personal writing"
  homeDescription = "Pocket Hugo Theme is a multilingual, cover-driven Hugo theme for long-form writing and calm publishing."
  descriptionLength = 180
  separator = " · "

  [params.seo.title]
    home = "[site_name]"
    post = "[post_title][separator][site_name]"
    page = "[page_title][separator][site_name]"
    group = "[group_title][separator][site_name]"
    archive = "[archive_title][separator][site_name]"
```

## Article List and Summary Options

`[params.article]`

- `showListSummary`
  - Control whether article cards render summaries below the title/meta row.
  - This affects homepage, archives, taxonomy pages, and other list/card views.
- `showPageDescription`
  - Control whether the single article/page view renders `.Description` below the title.
  - This is separate from card excerpts.
- `showSummary`
  - Legacy alias for `showListSummary`.
  - Still supported for compatibility, but new configs should prefer `showListSummary`.
- `backlinks`
  - Enable backlinks on article pages.
- `backlinksLimit`
  - Limit the number of backlink items shown.
- `toc`
  - Enable the article table of contents.
- `readingTime`
  - Show reading time metadata.

`[params]`

- `summaryLength`
  - Control how long generated list summaries should be.
  - `summaryLength = 0` means “do not truncate automatically and show the full summary”, not “hide summaries”.

## Image Settings

### Cover Images

`[params.images.cover]`

- `useFill`
  - Whether homepage/list covers should use Hugo `Fill` cropping.
  - Set to `false` to preserve the original image instead of generating a cropped cover.
- `cardFill`
  - Hugo `Fill` spec for homepage and normal list cards.
- `taxonomyFill`
  - Hugo `Fill` spec for taxonomy cards.
- `openGraphVariant`
  - Variant used for `og:image` and `twitter:image`.
  - Usually `card` for a cropped social image, or `single` for the uncropped article cover.
- `useDefault`
- `listTitle`
  - Whether generated gradient cards on homepage, taxonomy, archive, and other list pages show the outer title.
  - This site-level switch only affects generated gradient cards, not normal image covers.
- `fallbackMode`
  - Fallback cover mode when the current post or page does not define one.
  - Use `image` for a normal default image, or `gradient` for a generated title card.
- `openGraphUseDefault`
  - When the page has no own image, still use `default` as `og:image` / `twitter:image`.
- `defaultMode`
  - Legacy alias kept for backward compatibility.
- `default`
  - Local path or remote URL for the fallback cover image when `fallbackMode = "image"`.

Example:

```toml
[params.images.cover]
  useFill = true
  cardFill = "640x300 Center q85"
  taxonomyFill = "640x300 Center q85"
  openGraphVariant = "card"
  useDefault = true
  fallbackMode = "gradient"
  openGraphUseDefault = true
  default = "/img/default-cover.webp"
```

### Per-page Title Cards

You can force a generated title card from front matter even when the page has an `image`.

Simple form:

```yaml
coverCard: "a"
```

- `a` to `h`: the 8 light presets
- `A` to `H`: the 8 dark presets
- any other value: automatic random preset

When `coverCard` is set, the generated title card takes priority over `image`.

To hide the repeated outer title for a single page:

```yaml
listTitle: false
```

- On list pages, this hides the outer card title.
- On single pages, if the page is using a generated title card, it also hides the separate page title block.

If you do nothing, the theme can still generate a fallback title card automatically when:

- `params.images.cover.useDefault = true`
- `params.images.cover.fallbackMode = "gradient"`

### Inline Content Images

`[params.images.content]`

- `enableMaxHeight`
  - Enable or disable max-height control for inline article images.
- `limitHeight`
  - When `true`, use one shared height on all breakpoints.
- `unifiedMaxHeight`
  - Shared height used when `limitHeight = true`.
- `mobileMaxHeight`
- `tabletMaxHeight`
- `desktopMaxHeight`
  - Per-breakpoint max-height values used when `limitHeight = false`.
- `fullWidthFit`
  - `object-fit` strategy for full-width inline images, such as `cover` or `contain`.

Example:

```toml
[params.images.content]
  enableMaxHeight = true
  limitHeight = false
  unifiedMaxHeight = "320px"
  mobileMaxHeight = "160px"
  tabletMaxHeight = "250px"
  desktopMaxHeight = "350px"
  fullWidthFit = "cover"
```

### Image Brightness by Theme

`[params.images.brightness]`

- `light`
  - CSS `brightness()` value for images in light mode.
- `dark`
  - CSS `brightness()` value for images in dark mode.

Example:

```toml
[params.images.brightness]
  light = "1"
  dark = "0.92"
```

### Hugo Image Pipeline

`[params.images.pipeline]`

- `responsive`
  - Enable responsive derived images.
- `format`
  - Output format such as `webp`.
- `quality`
  - Image quality.
- `coverWidths`
  - Generated widths for cover images.
- `contentWidths`
  - Generated widths for inline content images.

## Comments

The theme supports three optional comment providers:

- `giscus`
- `twikoo`
- `custom`

Example:

```toml
[params.comments]
  enabled = false
  provider = "giscus"

  [params.comments.giscus]
    mapping = "pathname"
    theme = "preferred_color_scheme"

  [params.comments.twikoo]
    # envId = "https://your-service.example.com"
```

## Custom Extension Partials

The theme includes three no-op partials you can override in your own site project without editing the theme itself:

- `layouts/partials/custom/fonts.html`
  - for remote font links such as Google Fonts or self-hosted font loaders
- `layouts/partials/custom/css.html`
  - for loading a custom stylesheet after the theme CSS
- `layouts/partials/custom/comments.html`
  - for integrating a custom comment provider when `provider = "custom"`

These are intended as stable extension points for site-specific customization.

Minimal examples:

```html
<!-- layouts/partials/custom/fonts.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

```html
<!-- layouts/partials/custom/css.html -->
<link rel="stylesheet" href="{{ "css/custom.css" | relURL }}">
```

```css
/* static/css/custom.css */
:root {
  --content-width: 1180px;
}
```

```toml
[params.comments]
  enabled = true
  provider = "custom"
```

```html
<!-- layouts/partials/custom/comments.html -->
<div id="custom-comments"></div>
<script src="https://example.com/comments.js" defer></script>
```

## Talks and Lightweight Publishing

The theme includes a dedicated talks page layout and homepage widget pattern for lightweight updates.

- Talks pages can output standalone RSS and JSON feeds.
- The homepage widget can reuse the first talk item.
- This works especially well with Pocket Hugo's timeline-style quick publishing flow.

## Example Site Coverage

The bundled `exampleSite/` demonstrates:

- multilingual menus and translation links
- article pages, talks, links, and about pages
- title-card fallback behavior and all 16 title-card presets
- shortcodes
- content adapters
- image configuration reference pages
- comment provider examples
- palette switching and layout configuration

## Repository Layout

- `theme.toml`: Hugo theme metadata
- `hugo.toml`: minimum Hugo version for the theme itself
- `images/`: theme preview assets
- `exampleSite/`: runnable demo site

## Notes

- The theme is optimized for personal publishing rather than large portal homepages.
- If you use Pocket Hugo, this theme is intended to be its recommended presentation layer.
- For Chinese users, see [README.zh-CN.md](README.zh-CN.md).
