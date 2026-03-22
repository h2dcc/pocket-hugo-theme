+++
image = "cover.webp"
title = "Image Configuration Reference"
date = 2026-02-04T09:00:00+08:00
draft = false
description = "A field-by-field guide to the image-related Hugo configuration used by Pocket Hugo Theme."
slug = "image-config-reference"
tags = ["images", "configuration", "theme"]
categories = ["Images"]
+++

This page explains every image-related option used in the example site's `hugo.toml`. 

<!--more-->

## `params.images.cover.cardFill`

This is the Hugo `Fill` spec used for homepage cards and normal article cards. It controls the generated crop size, focal position, and quality for list covers.

Use it when you want card covers to feel more cinematic or more compact.

## `params.images.cover.taxonomyFill`

This is the matching `Fill` spec for taxonomy pages such as categories and tags. It lets you keep taxonomy covers separate from homepage cards.

Use it when taxonomy pages need a different card rhythm.

## `params.images.content.enableMaxHeight`

This is the top-level switch for inline article image height limits.

- `true`: article images can be capped by the values below.
- `false`: no max-height control is applied.

Use it when you want to fully disable the theme's height-capping behavior.

## `params.images.content.limitHeight`

This is the one-click unified-height switch.

- `true`: mobile, tablet, and desktop all use the same `unifiedMaxHeight`.
- `false`: each breakpoint uses its own value.

Use it when you want one predictable height everywhere.

## `params.images.content.unifiedMaxHeight`

This is the shared height used when `limitHeight = true`.

Use it when you want a single visual rule for all inline article images.

## `params.images.content.mobileMaxHeight`

This is the inline-image height threshold used on phones.

Use it when mobile images feel too tall or too cramped.

## `params.images.content.tabletMaxHeight`

This is the inline-image height threshold used on tablets and small landscape layouts.

Use it when the middle breakpoint needs its own balance.

## `params.images.content.desktopMaxHeight`

This is the inline-image height threshold used on desktop.

Use it when large screens need calmer image blocks in long-form writing.

## `params.images.content.fullWidthFit`

This controls the `object-fit` behavior when an inline image is classified as full-width.

Common values:

- `cover`: keeps the frame full, even if some edges are cropped.
- `contain`: keeps the whole image visible.

Use it when you want to choose between stronger composition and full-image preservation.

## `params.images.pipeline.responsive`

This enables Hugo's responsive image pipeline for generated assets.

- `true`: generate responsive variants.
- `false`: use simpler output.

Use it when you want more optimized image delivery.

## `params.images.pipeline.format`

This defines the generated image format.

In the example site it is set to `webp`.

Use it when you want to standardize output across covers and inline images.

## `params.images.pipeline.quality`

This is the image quality value used during generation.

Use it when you want to trade file size against image clarity.

## `params.images.pipeline.coverWidths`

This list defines the responsive widths generated for cover-like images.

Use it when you want more or fewer cover breakpoints.

## `params.images.pipeline.contentWidths`

This list defines the responsive widths generated for inline article images.

Use it when your writing layout needs denser or lighter image variants.

## Related demos

- [Responsive Image Pipeline Demo](/article/responsive-image-pipeline/)
- [Shortcodes Demo](/article/shortcodes-demo/)
