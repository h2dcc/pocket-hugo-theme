---
title: "Markdown 渲染展示"
description: "一篇紧凑的示例文章，用来测试中文文章页面中常见 Markdown 元素的渲染效果。"
date: 2026-03-19T09:15:00+08:00
slug: "markdown-demo"
coverCard: "E"
comments: false
categories:
  - Demo
tags:
  - Chinese
  - Markdown Demo
---

这篇文章是 `pocket-hugo-theme` 的紧凑型 Markdown 渲染展示页，专门用来测试文章布局对常见符号和区块元素的呈现效果。

## Inline Formatting

你可以在这里检查 **粗体**、*斜体*、***组合强调***、`行内代码`，以及标准的 [Hugo 链接](https://gohugo.io/)。

你还可以顺便测试类似 H~2~O 这样的上下标写法、`Ctrl + K` 这种键盘提示，以及 `*literal asterisks*` 这类转义字符。

## Lists

### Unordered List

- 封面优先的卡片在手机上依然应该保持平静的浏览节奏。
- 元信息在窄屏下也要足够易读。
- 间距和排版的重要性不低于字体本身。

### Ordered List

1. 起草文章。
2. 添加封面图。
3. 在手机上检查阅读节奏。

### Task List

- [x] 添加 front matter
- [x] 添加本地封面图
- [ ] 将示例文案替换成正式内容

## Quote

> 好的文章主题，会在你阅读时悄悄退到后面。
>
> 更好的主题，则会在你点开文章之前就让浏览体验足够舒服。

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

| 元素 | 为什么重要 |
| --- | --- |
| 标题 | 建立内容节奏 |
| 列表 | 暴露缩进和留白问题 |
| 表格 | 测试移动端溢出行为 |
| 代码块 | 检查内边距、字体和换行 |

## Image

这个页面 bundle 中的本地图片既会作为封面，也会作为正文内联图片出现：

![示例图片](cover.webp)

## Horizontal Rule

---

## Final Notes

如果这篇文章在桌面端和手机端都显得平衡自然，那么这套主题通常就已经适合承载真正的随笔、更新记录、笔记和文档页面。
