---
image: cover.webp
title: "快速记录：Markdown 渲染示例"
description: "一篇用来测试中文文章常见 Markdown 元素渲染效果的示例文章。"
date: 2026-03-19T09:15:00+08:00
slug: "quick-note"
categories:
  - 瞬间
tags:
  - Flat Markdown
  - 中文
  - Markdown Demo
---

这篇文章专门用来测试 `pocket-hugo-theme` 对常见 Markdown 语法的渲染情况。它会尽量覆盖写作中最常用的那些块元素。

## 行内样式

你可以在这里检查 **粗体**、*斜体*、***粗斜体***、`行内代码` 以及 [Hugo 官网](https://gohugo.io/) 这类常见链接样式。

还可以顺手观察转义字符、标点与中英文混排时的行宽表现。

## 列表

### 无序列表

- 封面卡片在手机上要保持浏览节奏。
- 元信息需要在窄屏下依然易读。
- 段落间距和列表缩进会直接影响阅读感受。

### 有序列表

1. 写下草稿。
2. 补上封面图。
3. 在手机上检查阅读节奏。

### 任务列表

- [x] 写好 front matter
- [x] 使用本地 cover.webp
- [ ] 后续替换为正式内容

## 引用

> 好的文章主题会在你阅读时“退后一步”。
>
> 更好的主题则会让你在点开文章之前，就感受到浏览的愉悦。

## 代码块

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

## 表格

| 元素 | 作用 |
| --- | --- |
| 标题 | 建立阅读节奏 |
| 列表 | 测试缩进和间距 |
| 表格 | 测试手机上的溢出行为 |
| 代码块 | 测试内边距、字体和换行 |

## 图片

下面这张图会重复使用 bundle 里的 `cover.webp`，方便一起检查封面图和正文内联图的显示。

![Markdown rendering sample](cover.webp)

## 分隔线

---

## 最后说明

如果这篇文章在桌面端和手机上都看起来比较协调，那么这套主题通常就能较好地承载真实的随笔、教程、更新记录和长文。