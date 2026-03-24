+++
image = "cover.webp"
title = "图片配置说明"
date = 2026-03-20T09:00:00+08:00
draft = false
description = "逐项说明 Pocket Hugo Theme 示例站中与图片相关的 Hugo 配置项。"
slug = "image-config-reference"
tags = ["图片", "配置", "主题"]
categories = ["图片"]
+++

这篇页面不再只是泛泛展示封面图效果，而是逐项解释示例站 `hugo.toml` 里与图片相关的配置。你可以把它当成一份配套说明书来看。

<!--more-->

- `params.images.cover.cardFill`

这是首页卡片和普通文章卡片封面使用的 Hugo `Fill` 规格。它决定了列表封面的裁切尺寸、对焦位置和质量。

当你想让首页卡片更紧凑或更宽松时，就改这一项。

- `params.images.cover.taxonomyFill`

这是分类页、标签页等 taxonomy 列表使用的 `Fill` 规格。它允许 taxonomy 页的封面节奏和首页卡片分开控制。

当你希望分类页封面和首页封面有不同观感时，就改这一项。

- `params.images.content.enableMaxHeight`

这是正文图片限高逻辑的总开关。

- `true`：启用下面这些图片高度规则。
- `false`：正文图片不再做限高控制。

当你想彻底关闭正文图片限高时，就改这一项。

- `params.images.content.limitHeight`

这是“一键统一高度”开关。

- `true`：手机、平板、桌面三端都使用同一个 `unifiedMaxHeight`。
- `false`：三端分别使用各自的高度值。

当你希望所有设备都采用同一套图片高度时，就改这一项。

- `params.images.content.unifiedMaxHeight`

当 `limitHeight = true` 时，这个值就是三端统一使用的正文图片最大高度。

当你希望整站正文图片都按同一个高度规则走时，就改这一项。

- `params.images.content.mobileMaxHeight`

这是手机端正文图片使用的高度阈值。

当你觉得手机上图片太高、太抢正文时，就改这一项。

- `params.images.content.tabletMaxHeight`

这是平板或中间宽度布局下正文图片使用的高度阈值。

当中间断点的排版不够协调时，就改这一项。

- `params.images.content.desktopMaxHeight`

这是桌面端正文图片使用的高度阈值。

当你希望长文在桌面上更克制、更稳定时，就改这一项。

- `params.images.content.fullWidthFit`

这是正文图片被判定为 full-width 时使用的 `object-fit` 策略。

常见值：

- `cover`：优先铺满区域，允许裁掉边缘。
- `contain`：优先完整显示整张图。

当你要在“构图完整”和“占满版心”之间取舍时，就改这一项。

- `params.images.pipeline.responsive`

这是 Hugo 原生响应式图像 pipeline 的总开关。

- `true`：生成响应式图片派生图。
- `false`：使用更简单的输出方式。

当你希望更积极地优化图片加载时，就改这一项。

- `params.images.pipeline.format`

这是生成图像时默认使用的输出格式。

示例站里设成了 `webp`。

当你希望统一输出格式时，就改这一项。

- `params.images.pipeline.quality`

这是图像生成时使用的质量参数。

当你要在文件体积和画质之间做取舍时，就改这一项。

- `params.images.pipeline.coverWidths`

这是封面类图片要生成的响应式宽度列表。

当你希望封面图适配更多屏宽，或者减少派生图数量时，就改这一项。

- `params.images.pipeline.contentWidths`

这是正文图片要生成的响应式宽度列表。

当你的正文区更宽、更窄，或者想调整图片优化粒度时，就改这一项。

- 相关示例

- [响应式图片管线示例](/article/responsive-image-pipeline/)
- [Shortcodes 示例](/article/shortcodes-demo/)
