+++
image = "cover.webp"
title = "i18n 多语言配置参考"
date = 2026-03-05T09:00:00+08:00
draft = false
comments = false
description = "逐项说明 Pocket Hugo Theme 中使用的 Hugo 多语言与 i18n 配置。"
slug = "i18n-multilanguage-config"
tags = ["i18n", "configuration", "theme"]
categories = ["config"]
+++

Pocket Hugo Theme 支持多语言使用。示例站默认启用两种语言；如果你不需要，可以直接在 `hugo.toml` 里删掉不需要的语言配置。

## 设置首选语言

Pocket Hugo Theme 原生支持十多种语言，包括英文、中文、日文、法文、西班牙文、俄文、德文、韩文、葡萄牙文、意大利文等。你可以在 `hugo.toml` 中指定默认语言；这个默认语言通常会直接对应内容目录中的 `index.md`。

```toml
languageCode = "en"
defaultContentLanguage = "en"
```

如果你希望不同语言使用不同的网站名称和标题，也可以在 `hugo.toml` 里分别配置：

```toml
[languages.en]
  languageName = "English"
  title = "Pocket Hugo"
  weight = 1

[languages.en.params.sidebar]
  subtitle = "A cover-driven theme for long-term personal writing"
```

## 语言切换设置

如果你配置了两种语言，网站头部和文中目录下方通常会显示一个一键切换按钮。如果你配置了三种或更多语言，头部默认会改成下拉菜单。

```toml
[params.languageSwitcher]
  headerSelectThreshold = 3
```

- [响应式图片管线演示](/article/responsive-image-pipeline/)
- [短代码演示](/article/shortcodes-demo/)
