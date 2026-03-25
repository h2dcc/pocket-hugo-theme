+++
title = "头部链接设置"
date = 2026-02-05T09:00:00+08:00
draft = false
covercard = "A"
comments = false
description = "介绍如何在 Pocket Hugo Theme 中配置头部主导航、社交链接和右上角工具按钮。"
slug = "header-links-settings"
tags = ["header", "navigation", "configuration"]
categories = ["Config"]
+++

这篇文章从主题使用者的角度，说明网站头部各部分是如何工作的。

<!--more-->

## 1. 头部主导航是如何工作的

头部主导航**不是**通过扫描 `content/page/` 下的所有页面自动生成的。

相反，头部读取的是 Hugo 的 `main` 菜单：

```go-html-template
{{ range .Site.Menus.main }}
```

这意味着：只有当你在某个页面的 front matter 中把它加入 `menu.main`，它才会出现在头部导航里。

例如：

```yaml
---
title: "Guide"
slug: "guide"
menu:
  main:
    weight: -45
---
```

在这个主题里：

- `menu.main` 决定页面是否进入头部导航候选
- `weight` 决定排序
- 数值越小，显示越靠前

例如，示例站里的这些页面都用了这一模式：

- `talks`：`weight: -90`
- `links`：`weight: -50`
- `guide`：`weight: -45`
- `about`：`weight: -40`

所以，如果你想把自己的固定页面加入头部导航，通常的做法是：

1. 创建页面。
2. 添加 `menu.main`。
3. 设置一个 `weight`。

例如：

```yaml
---
title: "Docs"
slug: "docs"
menu:
  main:
    weight: -42
---
```

## 2. 如何配置社交链接

头部里的社交链接来自 `hugo.toml` 中的 `params.social`。

例如：

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

每一项通常包含：

- `name`：用于无障碍标签和悬浮提示
- `url`：链接目标
- `icon`：主题使用的图标 id

如果你想加入自己的小图标，最简单的方式是把一个 SVG 文件放进 `assets/icons/`，然后在配置里引用去掉 `.svg` 后缀的文件名。

例如，你可以在网上搜索一个合适的 SVG 图标，保存成：

`assets/icons/brand-mastodon.svg`

然后这样写：

```toml
[[params.social]]
name = "Mastodon"
url = "https://example.social/@your-name"
icon = "brand-mastodon"
```

在这个主题里：

- 像 `/index.xml` 这样的站内链接会在当前标签页打开
- 外部链接会自动在新标签页打开

如果你删掉所有 `[[params.social]]`，社交链接区域就会自动消失。

## 3. 右上角三个工具按钮

头部右上角最多会显示三个控制项：

- 语言切换
- 配色切换器
- 深浅模式切换

这三者的显示规则并不完全相同。

### 语言切换按钮

语言切换由翻译切换相关 partial 控制。

它只有在当前页面确实存在翻译版本时才会显示。

也就是说：

- 如果站点只有一种语言，它不会显示
- 如果某一页没有对应的翻译页面，这一页上它也不会显示

头部显示方式还会受到这个设置影响：

```toml
[params.languageSwitcher]
  headerSelectThreshold = 2
```

这个值决定头部使用的是：

- 直接切换图标
- 还是带语言缩写的下拉菜单

简单理解就是：

- 如果语言总数小于等于阈值，头部显示简单切换入口
- 如果语言总数大于阈值，头部显示下拉菜单

所以，这个按钮会在没有翻译内容时自然消失。

### 配色切换器

配色切换器是可选功能。

它由这个设置控制：

```toml
[params.colorScheme]
  showPicker = true
```

主题也兼容旧名称：

```toml
showPalettePicker = true
```

如果这两个值都不存在，或都为 `false`，那么配色切换器就不会显示。

所以这是一个可以通过配置明确关闭的头部工具按钮。

### 深浅模式切换按钮

深浅模式切换由以下设置控制：

```toml
[params.colorScheme]
  toggle = true
```

主题也兼容旧名称：

```toml
colorSchemeToggle = true
```

在示例站里，这个按钮默认是开启的，所以大多数用户都会看到它，除非你主动在配置里关闭。

和前两个工具相比：

- 语言切换会在没有翻译时自动消失
- 配色切换器可以直接通过配置关闭
- 深浅模式切换通常会保持显示，因为默认配置就是开启的

如果你确实不想显示它，只需把对应开关设为 `false`。
