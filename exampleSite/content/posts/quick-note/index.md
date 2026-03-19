---
image: cover.webp
title: "Quick Note: Markdown Rendering Showcase"
description: "A compact post for testing common Markdown elements in the English article layout."
date: 2026-03-19T09:15:00+08:00
slug: "quick-note"
comments: false
categories:
  - Moments
tags:
  - English
  - Markdown Demo
---

This post is a compact Markdown rendering showcase for `pocket-hugo-theme`. It is meant to stress the article layout with the symbols and block styles people use most often.

## Inline Formatting

You can check **bold text**, *italic text*, ***combined emphasis***, `inline code`, and a standard [link to Hugo](https://gohugo.io/).

You can also test superscript-like notation such as H~2~O, keyboard-style hints like `Ctrl + K`, and escaped characters such as `*literal asterisks*`.

## Lists

### Unordered List

- Cover-first cards should still feel calm on mobile.
- Metadata needs to stay readable at narrow widths.
- Spacing matters as much as typography.

### Ordered List

1. Draft the post.
2. Add a cover image.
3. Review the mobile reading rhythm.

### Task List

- [x] Add front matter
- [x] Add a local cover image
- [ ] Replace demo copy with production writing

## Quote

> Good article themes disappear while you read.
>
> Great ones also make browsing pleasant before you click.

## Code Blocks

```toml
theme = "pocket-hugo-theme"
defaultContentLanguage = "en"
mainSections = ["posts"]
```

```js
const article = {
  title: "Markdown Rendering Showcase",
  cover: "cover.webp",
  mobileReady: true,
};
```

## Table

| Element | Why it matters |
| --- | --- |
| Headings | Establish content rhythm |
| Lists | Reveal spacing and indentation |
| Tables | Stress overflow behavior on mobile |
| Code blocks | Show padding, font, and wrapping |

## Image

The local bundle image should appear both as the cover and as an inline asset:

![Sample cover reused inline](cover.webp)

## Horizontal Rule

---

## Final Notes

If this article looks balanced on both desktop and phone, the theme is usually in a strong place for real essays, changelogs, notes, and documentation pages.
