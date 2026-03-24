# Pocket Hugo Theme

一款适合个人长期写作的 Hugo 主题，强调图文式阅读体验、多语言支持、轻量发布和较强的可配置性。

`pocket-hugo-theme` 原本就是为 [Pocket Hugo](https://github.com/h2dcc/pocket-hugo) 这套浏览器优先的写作流程而设计，但它本身也可以单独作为 Hugo 主题使用，适合个人博客、长文写作、说说流、友链页和多语言站点。

![Pocket Hugo Theme screenshot](https://raw.githubusercontent.com/h2dcc/pocket-hugo-theme/master/images/screenshot.png)

## 主题特点

- 支持多语言发布、翻译链接、`canonical` 与 `hreflang`
- 首页和列表页采用封面优先的卡片布局
- 支持本地搜索，并可选是否全文索引
- 内置说说页面、首页说说 widget、独立 RSS / JSON 输出
- 支持友链 shortcode、本地或远程头像图片
- 支持 Giscus 或 Twikoo 评论
- 支持摘要显示、Backlinks、目录、阅读时间、返回顶部等开关
- 内置多套配色方案，并支持访客在前端切换配色
- 支持单列表 / 双列表两种默认页宽模式
- 支持正文图片限高、图片亮度调节、响应式图像 pipeline
- 自带完整示例站，覆盖短代码、内容适配器、图片配置、说说流等功能

## 要求

- Hugo Extended `>= 0.149.0`
- 当前开发与测试环境：Hugo Extended `0.157.x` 和 `0.158.x`

## 安装

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

```toml
theme = "pocket-hugo-theme"
```

## 快速开始

运行示例站：

```bash
hugo server --source exampleSite --themesDir ../..
```

仓库中提供了：

- `exampleSite/hugo.toml`：英文注释版配置
- `exampleSite/hugo.zh-cn.toml`：中文注释版配置

## 常用配置

一个典型站点通常至少会用到：

```toml
[params]
  favicon = "/img/logo-default.svg"
  appleTouchIcon = "/img/avatar.webp"
  summaryLength = 0
  articleWords = false
  backToTop = false
  viewTransitions = false

  [params.search]
    provider = "local"
    fullText = false

  [params.article]
    showSummary = true
    backlinks = true
    backlinksLimit = 5
    toc = true
    readingTime = true

  [params.layout]
    listMode = "double"

  [params.colorScheme]
    toggle = true
    default = "auto"
    preset = "morandi-mist"
    showPicker = true
```

## 列表布局设置

`[params.layout]`

- `listMode = "double"`
  - 使用较宽的 `1320px` 列表页宽，大屏时展示双列表布局。
- `listMode = "single"`
  - 使用较紧凑的 `1080px` 列表页宽，更适合偏单列阅读风格的首页和列表页。

## 配色方案设置

`[params.colorScheme]`

- `toggle`
  - 是否显示深浅色切换按钮。
- `default`
  - `auto`、`light`、`dark` 之一。
- `preset`
  - 选择默认配色方案。
- `showPicker`
  - 是否在头部显示配色预览切换按钮。

当前内置配色：

- `golden-summer-fields`
- `soft-pastel-shades`
- `black-gold-elegance`
- `fresh-greens`
- `light-steel`
- `deep-sea-blue`
- `morandi-mist`
- `monochrome-core`

示例：

```toml
[params.colorScheme]
  toggle = true
  default = "auto"
  preset = "deep-sea-blue"
  showPicker = true
```

## 搜索设置

`[params.search]`

- `provider`
  - 目前为 `local`。
- `fullText`
  - `false`：只索引标题、描述、slug、分类、标签等字段。
  - `true`：把正文纯文本也加入本地搜索索引。

## SEO 设置

`[params.seo]`

- `tagline`
  - 可选站点副标题，可用于标题结构。
- `homeDescription`
  - 首页元描述，用于搜索引擎结果和社交分享摘要。
- `descriptionLength`
  - SEO 描述的最大截断长度。
- `separator`
  - 页面标题结构中使用的分隔符。

`[params.seo.title]`

- `home`
- `post`
- `page`
- `group`
- `archive`

可用占位符：

- `[site_name]`
- `[tagline]`
- `[separator]`
- `[post_title]`
- `[page_title]`
- `[group_title]`
- `[archive_title]`

示例：

```toml
[params.seo]
  tagline = "一款适合个人长期写作的图文式主题"
  homeDescription = "Pocket Hugo Theme 是一款适合长文写作、说说流与多语言个人站的图文式 Hugo 主题。"
  descriptionLength = 180
  separator = " · "

  [params.seo.title]
    home = "[site_name]"
    post = "[post_title][separator][site_name]"
    page = "[page_title][separator][site_name]"
    group = "[group_title][separator][site_name]"
    archive = "[archive_title][separator][site_name]"
```

## 文章列表与摘要设置

`[params.article]`

- `showListSummary`
  - 是否在文章列表标题下方显示摘要。
  - 这里只影响首页、归档、分类、标签等文章卡片。
- `showPageDescription`
  - 是否在文章内页标题下方显示 `.Description`。
  - 这和首页/列表页摘要是分开的。
- `showSummary`
  - `showListSummary` 的旧兼容写法。
  - 目前仍然支持，但新配置建议直接使用 `showListSummary`。
- `backlinks`
  - 是否显示反向链接。
- `backlinksLimit`
  - 最多显示多少条反链。
- `toc`
  - 是否显示目录。
- `readingTime`
  - 是否显示阅读时长。

`[params]`

- `summaryLength`
  - 控制列表摘要的截断长度。
  - `summaryLength = 0` 表示“不自动截断，完整显示摘要”，不等于“隐藏摘要”，也不是“长度为 0”。

## 图片相关设置

### 封面图

`[params.images.cover]`

- `useFill`
  - 列表页封面是否使用 Hugo `Fill` 裁切。
  - 设为 `false` 时，会尽量保留原图，而不是生成裁切后的封面。
- `cardFill`
  - 首页和普通列表卡片封面图使用的 Hugo `Fill` 规格。
- `taxonomyFill`
  - 分类/标签页封面图使用的 Hugo `Fill` 规格。
- `openGraphVariant`
  - `og:image` 和 `twitter:image` 使用的封面变体。
  - 一般填 `card` 作为裁切后的分享图，或填 `single` 使用文章页原始封面。
- `useDefault`
  - 当文章或页面没有设置封面图时，是否启用默认封面。
- `default`
  - 默认封面图地址，可写本地路径或远程链接。

示例：

```toml
[params.images.cover]
  useFill = true
  cardFill = "640x300 Center q85"
  taxonomyFill = "640x300 Center q85"
  openGraphVariant = "card"
  useDefault = false
  default = "/img/default-cover.webp"
```

### 正文图片显示策略

`[params.images.content]`

- `enableMaxHeight`
  - 是否启用正文图片限高。
- `limitHeight`
  - 是否一键统一三端高度。
- `unifiedMaxHeight`
  - 统一高度值。
- `mobileMaxHeight`
- `tabletMaxHeight`
- `desktopMaxHeight`
  - 分别控制手机、平板、桌面的正文图片高度阈值。
- `fullWidthFit`
  - 当正文图片被判定为 full-width 时使用的 `object-fit` 策略，如 `cover` 或 `contain`。

示例：

```toml
[params.images.content]
  enableMaxHeight = true
  limitHeight = false
  unifiedMaxHeight = "320px"
  mobileMaxHeight = "160px"
  tabletMaxHeight = "250px"
  desktopMaxHeight = "350px"
  fullWidthFit = "cover"
```

### 浅色 / 深色主题下的图片亮度

`[params.images.brightness]`

- `light`
  - 浅色模式下图片使用的 CSS `brightness()` 值。
- `dark`
  - 深色模式下图片使用的 CSS `brightness()` 值。

示例：

```toml
[params.images.brightness]
  light = "1"
  dark = "0.92"
```

### Hugo 图片 Pipeline

`[params.images.pipeline]`

- `responsive`
  - 是否启用响应式派生图。
- `format`
  - 输出格式，如 `webp`。
- `quality`
  - 图像质量。
- `coverWidths`
  - 封面图生成宽度列表。
- `contentWidths`
  - 正文图片生成宽度列表。

## 评论系统

支持三种可选评论提供方：

- `giscus`
- `twikoo`
- `custom`

示例：

```toml
[params.comments]
  enabled = false
  provider = "giscus"

  [params.comments.giscus]
    mapping = "pathname"
    theme = "preferred_color_scheme"

  [params.comments.twikoo]
    # envId = "https://your-service.example.com"
```

## Custom 扩展接口

主题内置了 3 个空实现的 partial，方便用户在自己站点中覆盖，而不必直接修改主题源码：

- `layouts/partials/custom/fonts.html`
  - 用来接远程字体，例如 Google Fonts 或自托管字体加载代码
- `layouts/partials/custom/css.html`
  - 用来在主题 CSS 之后加载自定义样式表
- `layouts/partials/custom/comments.html`
  - 当 `provider = "custom"` 时，用来接入自定义评论系统

这 3 个文件可以视为主题预留的稳定扩展接口。

最小示例：

```html
<!-- layouts/partials/custom/fonts.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

```html
<!-- layouts/partials/custom/css.html -->
<link rel="stylesheet" href="{{ "css/custom.css" | relURL }}">
```

```css
/* static/css/custom.css */
:root {
  --content-width: 1180px;
}
```

```toml
[params.comments]
  enabled = true
  provider = "custom"
```

```html
<!-- layouts/partials/custom/comments.html -->
<div id="custom-comments"></div>
<script src="https://example.com/comments.js" defer></script>
```

## 说说与轻量发布

主题内置了说说页面和首页说说 widget，适合轻量更新场景。

- 说说页可以单独输出 RSS 和 JSON
- 首页 widget 可以复用第一条说说
- 和 Pocket Hugo 的 timeline 式快速发布流程配合时尤其自然

## 示例站覆盖内容

`exampleSite/` 目前展示了：

- 多语言菜单与语言切换
- 文章页、说说页、友链页、关于页
- 各类 shortcode
- Content Adapter 示例
- 图片配置说明页
- 评论系统示例
- 配色切换与列表布局设置

## 仓库结构

- `theme.toml`：主题元数据
- `hugo.toml`：主题自身的最小 Hugo 要求
- `images/`：主题预览图
- `exampleSite/`：可直接运行的示例站

## 说明

- 这个主题更适合个人发布、博客写作和中长文阅读，不是门户型首页主题。
- 如果你使用 Pocket Hugo，它可以作为最匹配的一层展示主题。
