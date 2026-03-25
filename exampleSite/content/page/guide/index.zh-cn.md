---
title: "指南"
listTitle: false
comments: false
slug: "guide"
menu:
  main:
    weight: -45
---

这个页面用来说明怎么安装、配置并使用 `pocket-hugo-theme`。

## 
安装主题

如果你使用 git submodule 管理 Hugo 主题，可以直接这样安装：

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

然后在 Hugo 配置里启用它：

```toml
theme = "pocket-hugo-theme"
```

## 
最小配置

至少建议先设置这几项：

```toml
[params]
  featuredImageField = "image"
  favicon = "/img/logo-default.svg"

  [params.sidebar.avatar]
    enabled = true
    local = true
    src = "img/avatar.webp"
```

## 
内容结构

这个主题会比较适合 Hugo 里常见的三种写作方式：

### Flat Markdown

```text
content/posts/note.md
```

适合快速笔记和轻量文章。

### 
单语 Bundle

```text
content/posts/story/index.md
content/posts/story/cover.webp
```

适合需要本地图片或附件的文章。

### 
多语 Bundle

```text
content/posts/story/index.md
content/posts/story/index.zh-cn.md
content/posts/story/cover.webp
```

适合多个语种共享同一组 bundle 资源的场景。

## Pocket Hugo 
搭配

这个主题之所以适合 Pocket Hugo，重点不只是“能用”，而是在写作、发布和浏览节奏上更契合。

- 
首页会更突出封面卡片的浏览体验
- 
文章页在手机上更容易读
- 
简洁的 front matter 配置也能得到比较完整的展示

## Widget 
标题开关

你可以在配置里决定右侧 widget 的标题是否显示：

```toml
[params.widgets.titleVisibility]
  archives = true
  categories = true
  related = true
  search = true
  tagCloud = true
  toc = true
```

## 
建议的下一步

1. 
把示例 social 链接改成你自己的账号
2. 
给文章补上自己的封面图和 bundle 资源
3. 
按照你的写作习惯调整 homepage、static 和 page 的 widgets