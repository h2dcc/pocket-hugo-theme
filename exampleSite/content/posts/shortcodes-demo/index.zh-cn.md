+++
title = "短代码演示"
date = 2026-03-06T09:00:00+08:00
draft = false
description = "一篇把多个实用短代码集中展示在一起的示例页面，适合内容密集型 Hugo 站点。"
slug = "shortcodes-demo"
tags = ["shortcodes", "content", "markdown"]
categories = ["Writing"]
comments = false
covercard = "H"
+++

这篇页面汇总了几个很适合内容型 Hugo 主题使用的实用短代码。它们都尽量保持简单、容易复制，适合随笔、笔记和文档类页面。

<!--more-->

## Fold

当某一段内容不想一开始就占太多纵向空间时，可以使用 `fold`。

```text
{{</* fold "Why this shortcode exists" */>}}
This hidden block is rendered inside a native `<details>` element.
{{</* /fold */>}}
```

{{< fold "Why this shortcode exists" >}}
这个隐藏区块会被渲染成原生的 `<details>` 元素，因此不依赖 JavaScript，也很适合长文阅读场景。
{{< /fold >}}

## Note

`note` 适合用来放提示、警告或旁注。

```text
{{</* note type="info" title="Content-first" */>}}
Pocket Hugo Theme keeps callouts readable without making them look like app UI.
{{</* /note */>}}
```

{{< note type="info" title="Content-first" >}}
Pocket Hugo Theme 会让这类提示块保持清晰易读，而不会看起来像一套应用界面组件。
{{< /note >}}

{{< note type="tip" title="Tip" >}}
这类短代码很适合教程、更新记录和写作指南。
{{< /note >}}

{{< note type="warn" title="Experimental" >}}
如果你要新增自定义短代码，尽量保持它们足够小、足够容易理解。读者不应该先研究布局，才能开始阅读内容。
{{< /note >}}

## Badge

Badge 适合在段落中放置简短的状态标签。

```text
{{</* badge "Stable" */>}}
{{</* badge text="Optional" type="info" */>}}
{{</* badge text="Experimental" type="warn" */>}}
```

{{< badge "Stable" >}}
{{< badge text="Optional" type="info" >}}
{{< badge text="Experimental" type="warn" >}}

## Button

当你想要比普通文本链接更醒目的行内跳转入口时，可以使用 `button`。

```text
{{</* button href="/guide/" label="Open the Guide" */>}}
{{</* button href="/links/" label="Browse Links" style="ghost" */>}}
```

{{< button href="/guide/" label="Open the Guide" >}}
{{< button href="/links/" label="Browse Links" style="ghost" >}}

## Video and audio

这些短代码可以让常见的媒体嵌入方式和主题整体风格保持一致。

```text
{{</* video src="/media/demo.mp4" title="Local video" */>}}Caption{{</* /video */>}}
{{</* audio src="/media/demo.mp3" title="Audio clip" */>}}Caption{{</* /audio */>}}
{{</* youtube id="rdwz7QiG0lk" */>}}YouTube embed{{</* /youtube */>}}
{{</* bilibili bvid="BV1xx411c7mu" */>}}Bilibili embed{{</* /bilibili */>}}
```

{{< video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" title="HTML5 video" >}}一个普通的 HTML5 视频包装，沿用主题默认的圆角和留白。{{< /video >}}

{{< audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" title="HTML5 audio" >}}一个风格统一的音频播放器，适合短音频、播客片段或语音笔记。{{< /audio >}}

{{< youtube id="rdwz7QiG0lk" >}}使用同样媒体外壳包裹的 YouTube 嵌入。{{< /youtube >}}

{{< bilibili bvid="BV1xx411c7mu" >}}使用相同响应式容器的 Bilibili 嵌入。{{< /bilibili >}}

## Timeline

当你想表达一个过程、更新记录或时间序列时，可以使用 `timeline`。

```text
{{</* timeline */>}}
{{</* timeline-item date="2026-01" title="Planning" */>}}Outline the scope.{{</* /timeline-item */>}}
{{</* timeline-item date="2026-02" title="Build" */>}}Ship the first version.{{</* /timeline-item */>}}
{{</* /timeline */>}}
```

{{< timeline >}}
{{< timeline-item date="2026-01" title="Planning" >}}先勾勒功能的第一版范围，并让数据格式保持精简。{{< /timeline-item >}}
{{< timeline-item date="2026-02" title="Build" >}}做出一个简单实现，更偏向长文内容而不是应用式界面。{{< /timeline-item >}}
{{< timeline-item date="2026-03" title="Polish" >}}继续打磨文案、留白和多语言示例。{{< /timeline-item >}}
{{< /timeline >}}

## Columns

当两组内容需要并排比较时，可以使用 `columns`。

```text
{{</* columns */>}}
{{</* column */>}}Left side{{</* /column */>}}
{{</* column */>}}Right side{{</* /column */>}}
{{</* /columns */>}}
```

{{< columns >}}
{{< column >}}
### Better for

- 简短对比
- 功能摘要
- 前后变化说明
{{< /column >}}
{{< column >}}
### Avoid for

- 很长的文章段落
- 过深的嵌套列表
- 必须线性阅读的内容
{{< /column >}}
{{< /columns >}}

## Gallery

当一篇文章里需要一个紧凑的图片网格，而你又不想手写多张 Markdown 图片块时，可以使用 `gallery`。

```text
{{</* gallery pattern="sample*.webp" columns="3" */>}}
```

这个短代码会读取当前页面 bundle 中匹配的图片文件，把它们渲染成响应式相册网格，并在点击时复用主题内置灯箱。

{{< gallery pattern="sample*.webp" columns="3" >}}

## Why this matters

这些短代码并不是为了把主题变成一个组件库。它们的目的只是给写作者提供一些可复用的小积木，让内容更容易表达，同时又不需要引入额外框架。
