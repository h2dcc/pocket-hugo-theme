+++
image = "cover.webp"
title = "View Transition Demo"
date = 2026-02-02T09:00:00+08:00
draft = false
description = "A sample post for testing card-to-article transitions and smoother page changes."
slug = "view-transitions-demo"
tags = ["view-transitions", "animation", "navigation"]
categories = ["Interaction"]
+++

This article exists to show the optional **View Transitions API** support in Pocket Hugo Theme. It is an experimental feature and stays **disabled by default**.

<!--more-->

## How to enable it

Add this to your `hugo.toml`:

```toml
[params]
  viewTransitions = true
```

Then rebuild the site in a browser that supports the View Transitions API.

## Notes

After enabling this feature, some browsers may still show an occasional flash during navigation in dark mode.

If you want another connected sample, continue to the [Responsive Image Pipeline Demo](/article/responsive-image-pipeline/).
