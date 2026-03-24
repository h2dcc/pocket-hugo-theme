+++
title = "标题卡片使用说明"
date = 2026-02-09T09:30:00+08:00
draft = false
description = "从用户视角介绍 Pocket Hugo Theme 的标题卡片用法，并展示全部 16 套预设样式。"
slug = "title-card-guide"
tags = ["中文", "标题卡片", "主题"]
categories = ["演示"]
comments = true
coverCard = "G"
+++

Pocket Hugo Theme 可以在文章没有封面图时，自动生成一张 **标题卡片**。这篇页面从使用者角度，集中说明它应该怎么配。

<!--more-->

## 最简单的写法

```yaml
coverCard: "a"
```

规则如下：

- `a` 到 `h`：8 套浅色卡片
- `A` 到 `H`：8 套深色卡片
- 其他任意值：自动随机一套

只要设置了 `coverCard`，主题就会优先使用标题卡片，不再调用 `image`。

## 如果不想重复显示标题

可以再加一行：

```yaml
listTitle: false
```

这样卡片里保留标题，列表外部和文章页顶部就不再重复输出单独的标题块。

## 一个完整示例

```yaml
title: "我的文章"
slug: "my-article"
coverCard: "C"
listTitle: false
```

## 16 套预设总览

{{< title-card-showcase >}}

## 什么时候适合用它

- 写短文、笔记、说说，不想专门做封面图时
- 文档页、说明页，更适合文字型封面时
- 多语言页面，希望不同语言共用同一种视觉方案时
- 想让列表页更整齐，但又不想每篇文章都准备图片时
