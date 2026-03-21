+++
title = "项目"
description = "一个通过 Hugo Content Adapter 在构建时自动生成的示例分区。"
draft = false

[menu.main]
weight = -40
+++

这里的项目页不是手写 Markdown，而是根据结构化数据在构建时自动生成的。

<!--more-->

## 这个功能怎么工作

示例站这里用到了 3 个部分：

1. `exampleSite/data/projects/en.json`
2. `exampleSite/data/projects/zh_cn.json`
3. `exampleSite/content/projects/_content.gotmpl`

Hugo 在构建时先读取这些 JSON 数据，再由 `_content.gotmpl` 把每一条记录转换成正常页面，包括标题、slug、日期、描述、标签、链接和正文内容。

## 为什么这个功能很有用

只要你的内容天然就是“结构化、重复型”的，这种方式就会比手写很多篇 Markdown 更省事。你可以把内容放在 JSON、YAML、TOML，甚至先从别的数据源转换过来，再交给 Hugo 在构建时生成页面。

最终生成出来的页面，仍然和普通文章一样：

- 有固定链接
- 会出现在列表页里
- 可以被其他文章正常链接
- 可以复用同一套 single 布局

## 最小用法

先准备一个数据文件：

```json
[
  {
    "slug": "my-project",
    "title": "My Project",
    "description": "一段简短说明",
    "date": "2026-03-01T10:00:00+08:00",
    "tags": ["示例", "项目"],
    "links": [
      { "title": "GitHub", "url": "https://github.com/example/repo" }
    ],
    "content": "这段正文会在构建时被生成到页面里。"
  }
]
```

然后在 `_content.gotmpl` 里把这些数据条目转换成页面。

## 适合拿来做什么

这个功能不只是适合做项目页，也很适合这些场景：

- 项目作品集
- 更新日志
- 阅读清单
- 案例库
- 软件发布记录
- 图库元数据页面
- 收藏链接页
- 从外部结构化数据生成的 talks / notes 流

## 真正更有意思的是远程 JSON

现在这个示例先用本地 JSON，是为了保证示例站离线也稳定。但 Content Adapter 更有说服力的地方，其实是它还能在构建时读取远程 JSON，再直接生成页面。

比如你完全可以：

- 调 GitHub Issues，自动生成更新记录页
- 调某个阅读清单接口，自动生成书单页
- 调外部服务的发布数据，自动生成 release 页面
- 调公开 notes / talks JSON，自动生成动态流

这个示例里我已经在 `content/projects/_content.gotmpl` 里放了一版远程示例：只要在 `exampleSite/hugo.toml` 里开启远程模式，就可以直接把 GitHub 的公开 issue JSON 生成为页面。

## 你可以重点看什么

- `/projects/` 里生成出来的页面
- `data/projects/` 下的数据文件
- `content/projects/_content.gotmpl` 的生成逻辑

这个示例想展示的重点是：这类通过 adapter 生成的内容，放进主题后仍然应该像站点原生页面，而不是像一层生硬的数据导出。
