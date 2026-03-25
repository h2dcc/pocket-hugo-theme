+++
image = "cover.webp"
title = "i18n MultiLanguage Configuration Reference"
date = 2026-03-05T09:00:00+08:00
draft = false
comments = false
description = "A field-by-field guide to the i18n MultiLanguage Hugo configuration used by Pocket Hugo Theme."
slug = "i18n-multilanguage-config"
tags = ["i18n", "configuration", "theme"]
categories = ["config"]
+++

The Pocket Hugo theme supports multilingual usage. Two languages ​​are enabled by default; if you do not require them, you can simply remove the unwanted languages ​​within the `hugo.toml` file.

## Set Preferred Language

Pocket Hugo theme natively supports over 10 language settings, including English, Chinese, Japanese, French, Spanish, Russian, German, Korean, Portuguese, Italian, and more. You can specify a preferred language in `hugo.toml`; this preferred language typically corresponds directly to the `index.md` file within the content directory.


```toml
languageCode = "en"
defaultContentLanguage = "en"
```

If you require a different site name and title for each language, you can configure them individually in `hugo.toml`.


```toml
[languages.en]
  languageName = "English"
  title = "Pocket Hugo"
  weight = 1

[languages.en.params.sidebar]
  subtitle = "A cover-driven theme for long-term personal writing"
```

## Language Switching Settings

If you configure two languages, you can switch between them with a single click using a button located in the website header and below the in-text table of contents. If you configure three or more languages, a dropdown menu will be enabled by default in the website header.

```toml
  [params.languageSwitcher]
    headerSelectThreshold = 3
```


- [Responsive Image Pipeline Demo](/article/responsive-image-pipeline/)
- [Shortcodes Demo](/article/shortcodes-demo/)
