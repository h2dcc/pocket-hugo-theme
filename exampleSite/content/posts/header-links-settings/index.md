+++
title = "Header Links Settings"
date = 2026-02-05T09:00:00+08:00
draft = false
covercard = "A"
comments = false
description = "How to configure the main header links, social links, and header tools in Pocket Hugo Theme."
slug = "header-links-settings"
tags = ["header", "navigation", "configuration"]
categories = ["Config"]
+++

This page explains how each part works from a theme user's point of view.

<!--more-->

## 1. How the main header navigation works

The main navigation is **not** built by scanning every page under `content/page/`.

Instead, the header reads Hugo's `main` menu:

```go-html-template
{{ range .Site.Menus.main }}
```

That means a page only appears in the main header if you add it to `menu.main` in that page's front matter.

Example:

```yaml
---
title: "Guide"
slug: "guide"
menu:
  main:
    weight: -45
---
```

In this theme:

- `menu.main` decides whether a page becomes a header candidate
- `weight` controls the order
- smaller weights appear earlier

For example, these demo pages use this pattern:

- `talks`: `weight: -90`
- `links`: `weight: -50`
- `guide`: `weight: -45`
- `about`: `weight: -40`

So if you want to add your own fixed page to the header, the normal way is:

1. Create the page.
2. Add `menu.main`.
3. Give it a `weight`.

Example:

```yaml
---
title: "Docs"
slug: "docs"
menu:
  main:
    weight: -42
---
```

## 2. How to configure social links

The social links in the header come from `params.social` in `hugo.toml`.

Example:

```toml
[[params.social]]
name = "GitHub"
url = "https://github.com/your-name"
icon = "brand-github"

[[params.social]]
name = "RSS"
url = "/index.xml"
icon = "rss"
```

Each item usually includes:

- `name`: used as the accessible label and tooltip
- `url`: the link target
- `icon`: the icon id used by the theme

If you want to add your own small icon, the simplest way is to put an SVG into
`assets/icons/` and then reference its file name without the `.svg` suffix.
For example, you can search online for a suitable SVG icon, save it as
something like `assets/icons/brand-mastodon.svg`, and then use:

```toml
[[params.social]]
name = "Mastodon"
url = "https://example.social/@your-name"
icon = "brand-mastodon"
```

In this theme:

- internal links such as `/index.xml` stay in the same tab
- external links open in a new tab automatically

If you remove all `[[params.social]]` entries, the social links area disappears.

## 3. The three tools in the top-right corner

The top-right area can show up to three controls:

- language switcher
- color palette picker
- dark/light mode switch

These three do **not** follow the same rules.

### Language switcher behavior

The language switcher is rendered by the translation toggle partial.

It only appears when the current page actually has translations.

That means:

- if your site has only one language, it does not show
- if a page has no translated counterpart, it does not show on that page

The header behavior is also affected by this setting in `hugo.toml`:

```toml
[params.languageSwitcher]
  headerSelectThreshold = 2
```

This value controls when the header uses:

- a direct switch icon
- or a dropdown menu with language abbreviations

Practical rule:

- if total languages are less than or equal to the threshold, the header shows a simple switch entry
- if total languages are greater than the threshold, the header shows a dropdown

So this button can disappear naturally when your site or page is not translated.

### Color palette picker behavior

The palette picker is optional.

It is controlled by:

```toml
[params.colorScheme]
  showPicker = true
```

The theme also accepts the legacy name:

```toml
showPalettePicker = true
```

If both are false or missing, the palette picker does not appear.

So this is a header tool that you can explicitly turn off in configuration.

### Dark/light mode switch behavior

The dark/light switch is controlled by:

```toml
[params.colorScheme]
  toggle = true
```

The theme also supports the older compatibility key:

```toml
colorSchemeToggle = true
```

In the example site, this switch is enabled by default, so most users will see it unless they deliberately change the config.

Compared with the other two tools:

- the language switcher may disappear automatically when translations are not available
- the palette picker can be switched off directly
- the dark/light toggle is usually kept visible because it is enabled by default in normal theme setup

If you want it hidden, set the related toggle option to `false`.
