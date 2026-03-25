+++
title = "Projects"
description = "A practical example of using Hugo Content Adapters to generate project pages from structured data in a multilingual theme."
draft = false
[menu.main]
weight = -40
+++

This section is primarily here to show how the `projects` feature works.

<!--more-->

## What this feature is

The `projects` section is built with Hugo Content Adapters:

- official docs: [https://gohugo.com.cn/content-management/content-adapters/](https://gohugo.com.cn/content-management/content-adapters/)
- adapter file: `content/projects/_content.gotmpl`
- section index: `content/projects/_index.md`
- data source: `data/projects/en.json` and `data/projects/zh_cn.json`

Instead of hand-writing one Markdown file per project, Hugo reads the structured data during the build and turns each record into a normal page.

## Why this is useful in a theme

This approach is helpful when a section is:

- repetitive in structure
- easier to maintain as JSON, YAML, or TOML
- still expected to behave like normal content pages inside the theme

Once generated, these project pages still use the same layouts, lists, taxonomy pages, RSS output, and multilingual navigation as handwritten content.

## How this demo is organized

This example site uses English as the default language and Chinese as the second language, so the projects feature is split like this:

- `content/projects/_content.gotmpl` for English
- `content/projects/_content.zh-cn.gotmpl` for Chinese
- `content/projects/_index.md` for the English section page
- `content/projects/_index.zh-cn.md` for the Chinese section page

This mirrors Hugo's multilingual content-adapter pattern: one adapter per language when you want different generated pages for each language.

## How to adapt it for your own site

1. Keep the `projects` section and its `_index.xx.md` files.
2. Replace the records in `data/projects/*.json` with your own project data.
3. Adjust the mapping logic in `_content.gotmpl` if your fields differ.
4. Reuse the same single-page layout and shortcodes so the generated pages still feel native inside the theme.

## What to inspect

If you want to understand the feature quickly, look at these three places in order:

1. `exampleSite/data/projects/en.json`
2. `exampleSite/data/projects/zh_cn.json`
3. `exampleSite/content/projects/_content.gotmpl`
