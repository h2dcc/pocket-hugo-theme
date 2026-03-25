---
title: "标题卡片指南"
description: "一份关于 Pocket Hugo Theme 中 fallback 标题卡片的实用说明，包括 front matter 设置方式和全部 16 个预设。"
date: 2026-02-09T08:30:00+08:00
slug: "title-card-guide"
comments: false
coverCard: "G"
categories:
  - Demo
tags:
  - Hugo
  - Cover Card
  - Theme
---

Pocket Hugo Theme 可以在文章没有封面图时，自动生成一个 **标题卡片**。

<!--more-->

## 这个功能适合什么场景

当你希望文章在列表页和单页里看起来都足够完整，但又不想为每一篇文章都单独准备真实图片文件时，就很适合使用标题卡片。

它尤其适合：

- 笔记和短文
- 文档页面
- 希望保持统一节奏的多语言页面
- 那些更适合文字导向卡片，而不是照片封面的栏目

## Quick start

{{< note type="info" title="Zero config works too" >}}
即使你什么都不配置，只要站点层的封面回退设置开启，主题也能自动生成 fallback 标题卡片。
{{< /note >}}

在 front matter 中，最简单的写法只需要一个字母：

```yaml
coverCard: "a"
```

规则如下：

- `a` 到 `h`：8 个浅色预设
- `A` 到 `H`：8 个深色预设
- 其他任意值：自动回退到随机预设

一旦你设置了 `coverCard`，主题就会使用生成的标题卡片，并停止使用 `image`。

## 隐藏重复的列表标题

如果你只想让标题出现在卡片内部，而不想在首页、分类、归档等列表页里重复显示外部标题，可以添加：

```yaml
listTitle: false
```

这样会隐藏列表卡片里的重复标题。在单页中，如果该页面使用的是生成型标题卡片，也会一并隐藏独立的标题区块。

如果你想在全站范围修改，可以在 `hugo.toml` 中设置 `params.article.listTitle = false`。这个站点级开关只影响列表页里的渐变标题卡片，不影响普通图片封面。

## Example front matter

```yaml
title: "My Article"
date: 2026-02-09T08:30:00+08:00
slug: "my-article"
coverCard: "C"
listTitle: false
```

## All 16 presets

下面展示的是主题内置的 16 个预设，顺序与主题内部使用顺序一致。

{{< title-card-showcase >}}

## When to use which preset

- `a` / `A`：偏暖、偏编辑感，适合随笔和个人写作
- `b` / `B`：更柔和、更亲切，适合教程或文档
- `c` / `C`：对比更强，适合产品说明或发布记录
- `d` / `D`：低饱和、更安静，适合归档式或回顾型内容
- `e` / `E`：更轻快鲜明，适合工具、工作流和更新
- `f` / `F`：中性克制，适合技术参考
- `g` / `G`：更清晰、更数字化，适合软件和平台类主题
- `h` / `H`：黑白极简，适合简短笔记或索引页

## Default behavior

如果页面没有定义 `coverCard`，主题就会按照 `hugo.toml` 中的站点级封面规则继续处理。

也就是说，用户即使什么都不做，也可能默认得到一张自动生成的标题卡片。当主题的 fallback 模式设置为 gradient 时，卡片预设会自动分配。

这意味着你可以把两种策略结合起来使用：

- 为普通文章设置一个全站 fallback 模式
- 只在需要特定风格的页面上单独指定 `coverCard`

## One practical recommendation

一个很实用的做法是：先为整个站点启用自动 fallback，再只给少数你希望更有辨识度的页面手动分配字母。这样既能保持写作速度，也能让重要页面更有个性。
