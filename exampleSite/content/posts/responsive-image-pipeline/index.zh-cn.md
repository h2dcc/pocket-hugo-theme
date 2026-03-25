+++
image = "cover.webp"
title = "响应式图片管线演示"
date = 2026-03-21T09:00:00+08:00
draft = false
description = "一篇用于检查派生图片尺寸、正文内联显示和内置灯箱效果的示例文章。"
slug = "responsive-image-pipeline"
tags = ["images", "pipeline", "lightbox"]
categories = ["Images"]
comments = false
+++

这篇文章演示主题对正文 Markdown 图片的**响应式图片管线**支持。同一张源图会在正文中按布局规则显示，同时仍然可以在灯箱中查看更大的版本。

<!--more-->

## 正文图片测试

![岳麓书院](cover.webp)

![广州](guangzhou.webp)

![写作](writing.webp)

这代表了网页里图片的默认显示行为。如果你想调整图片显示高度，可以在 `hugo.toml` 中配置；如果不需要这一功能，也可以直接通过 `limitHeight = false` 关闭。

```toml
  [params.images.content]
    mobileMaxHeight = "160px"
    tabletMaxHeight = "250px"
    desktopMaxHeight = "350px"
```

这篇文章可以和 [图片配置参考](/article/image-config-reference/) 对照阅读；后者更专注于文章头图和卡片封面的设置。
