+++
title = "评论系统演示"
date = 2026-02-03T09:00:00+08:00
draft = false
description = "一篇用于检查评论区显示效果的示例文章。"
slug = "comments-demo"
covercard = "B"
tags = ["comments"]
categories = ["Demo"]
+++

这篇文章用来演示主题默认评论区域的显示效果。
<!--more-->

## 默认设置

默认情况下，Pocket Hugo Theme 会在所有页面启用评论。如果你想在某一篇页面或文章上关闭评论，只需要在对应 Markdown 文件的 front matter 中添加 `comments = false`。

这个主题默认使用 Twikoo 作为评论系统。若要使用 Twikoo，你需要按照 Twikoo 官方文档部署对应的云函数，才能正常运行。你也可以根据自己的偏好改用其他评论方案，例如 Utterances、Waline、Disqus 等。

- [Twikoo 文档](https://twikoo.js.org/en/intro.html)
- [Giscus 文档](https://giscus.app/)
- [Utterances 文档](https://utteranc.es/)
- [Waline 文档](https://waline.js.org/)
- [Disqus 文档](https://disqus.com/)
