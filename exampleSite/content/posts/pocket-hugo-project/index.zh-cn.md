+++
title = "Pocket Hugo：面向浏览器的 Hugo 发布工具"
date = 2026-03-23T15:30:00+08:00
slug = "pocket-hugo-project"
description = "Pocket Hugo 是一款以浏览器为核心的 Hugo 发布工具，围绕写作、图片处理和基于 GitHub 的 Markdown 工作流设计，可覆盖桌面、平板与手机。"
summary = "更近一步介绍 Pocket Hugo 作为浏览器优先的 Hugo 工作流工具，包括发布、图片处理、多语言 bundle，以及它为什么和 pocket-hugo-theme 天然契合。"
categories = ["writing"]
tags = ["pocket-hugo", "workflow", "multilingual", "mobile"]
comments = false
covercard = "D"
+++

Pocket Hugo 是一款面向桌面、平板和手机的浏览器优先 Hugo 发布工具。它是为那些把内容放在 GitHub 仓库里、又希望直接在浏览器中完成 Markdown 写作、管理与发布的人设计的，而不必依赖某一台主力电脑。

它有意思的地方，不只是“能在浏览器里运行”。它的首页其实说得更直接：Pocket Hugo 把 GitHub 发布、本地草稿、更高效率的 WebP 图片处理，以及页面编辑整合进同一套浏览器工作流，同时仍然尽量贴近真实的 Hugo 内容结构。这也让它天然成为 `pocket-hugo-theme` 的姊妹项目。

- GitHub 仓库：https://github.com/h2dcc/pocket-hugo
- 正式落地页：https://leftn.com
- 正式应用入口：https://leftn.com/app

## Why it exists

很多 Hugo 工作流至今仍然假定：写作发生在一台主力电脑上，而图片处理、front matter 编辑和发布则分散在不同步骤里。Pocket Hugo 试图减少这种摩擦。

它尤其适合以下场景：

- 你想在手机或平板上继续写草稿
- 你的内容直接发布到 GitHub 托管的仓库
- 你希望图片处理尽量贴近文章本身
- 你使用多语言 bundle，并需要快速创建翻译版本

![Pocket Hugo 入口与初始设置](where-to-start.webp "Pocket Hugo 入口与初始设置")

## What it brings together

与其把 Pocket Hugo 理解成一个通用 Markdown 编辑器，不如把它看作一套发布工作流。它把多个实用环节整合到了一起：

- GitHub 登录与直接发布
- 对三种 Hugo 友好内容结构的支持
- 上传时的图片压缩、转换和自动命名
- 浏览器中的本地草稿恢复
- 从 GitHub 重新加载已发布文章，继续编辑
- 独立页面编辑与 Quick Timeline 更新

这也是为什么它的首页看起来更像产品落地页，而不是开发者工具页。它卖点不是“一个文本框”，而是一套更顺手的 Hugo 工作流。

## Writing around Hugo structures

Pocket Hugo 当前最适合三种内容结构：

1. 扁平 Markdown 文件，适合更简单的纯文本笔记。
2. 单语言 bundle，适合带本地资源的丰富文章。
3. 多语言 bundle，适合共享同一目录和资源的翻译文章。

这种“理解结构”的能力很重要。它会影响新文章如何创建、已有文章如何读取，以及内容最终如何推回 GitHub。

## Post editor and publishing flow

编辑器被划分成几个非常实用的部分：基础信息、正文内容、图片和 front matter。在 bundle 模式下，图片上传与资源管理会直接出现在写作流程中。

这让工具更像一个专注的发布界面，而不是通用 Markdown 编辑器。你不只是在写文字，而是在按网站真正需要的结构准备一篇 Hugo 文章，然后把它送回 Git 工作流。

![Pocket Hugo 写作编辑器](writing-posts.webp "Pocket Hugo 写作编辑器")

## Multilingual workflow

Pocket Hugo 比较有辨识度的一点，是它对多语言 bundle 的支持。预览区域可以直接展示当前 Markdown，方便你把内容复制到其他翻译流程中，再把译文带回到诸如 `index.zh-cn.md`、`index.de.md` 这样的新文件里。

对于需要用多种语言发布、但又不想维护一套沉重 CMS 的作者来说，这一点尤其有价值。

![在 Pocket Hugo 中创建多语言版本](create-multi-versions.webp "在 Pocket Hugo 中创建多语言版本")

## Image handling

Pocket Hugo 同样非常重视图片工作流。它支持上传、预览、转换、封面选择、文件插入以及更轻量的压缩处理。当前这条管线尤其适合在发布前先把手机和平板拍出来的大图减重，然后再提交进仓库。

这种对 bundle 内容的重视，也正是主题和编辑器能配合得很好的原因之一。主题本身偏向封面驱动、bundle 友好的文章结构；而 Pocket Hugo 刚好能生产出这种内容。

![Pocket Hugo 的图片工作流](images-flow.webp "Pocket Hugo 的图片工作流")

## Publishing back to GitHub

当文章准备好之后，Pocket Hugo 会把 Markdown 文件和相关资源一起提交回配置好的仓库。结果页会显示仓库、分支、路径以及本次改动的文件列表，让输出过程更透明。

这会让发布步骤更值得信任，尤其是在你不处于常规开发环境、而是在浏览器里完成写作的时候。

![Pocket Hugo 发布结果](published-uccessfully.webp "Pocket Hugo 发布结果")

## Why it fits this theme

`pocket-hugo-theme` 是为长期个人写作设计的主题，强调封面呈现、安静的阅读节奏和多语言支持。Pocket Hugo 则让写作端变得更轻、更顺手。

两者结合起来，非常适合这些需求：

- 轻量的浏览器写作流程
- Hugo 原生内容结构
- 不依赖大型 CMS 的多语言发布
- 在移动端依然好读的文章卡片和封面

Pocket Hugo 并不是想替代所有静态网站工作流。当你的内容已经存在于一个 Hugo 形状的仓库里，而你又希望写作体验更快、更轻、更适合移动端时，它的价值就最明显。

它首页上的定位其实也总结得很好：首先为 Hugo 而生，但当仓库结构相近时，也兼容 Astro、Hexo 等相邻的 Markdown 工作流。
