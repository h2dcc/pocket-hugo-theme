+++
title = "项目"
description = "一个基于 Hugo Content Adapters 的 projects 功能示例，演示如何在多语言主题中用结构化数据生成项目页面。"
draft = false
[menu.main]
weight = -40
+++

这个分区的主要目的，是说明 `projects` 功能怎么用。

<!--more-->

## 这个功能是什么

`projects` 功能本质上用的是 Hugo 的 Content Adapters：

- 官方文档：[https://gohugo.com.cn/content-management/content-adapters/](https://gohugo.com.cn/content-management/content-adapters/)
- 适配器文件：`content/projects/_content.gotmpl`
- 分区入口：`content/projects/_index.md`
- 数据来源：`data/projects/en.json` 和 `data/projects/zh_cn.json`

它不是为每个项目手写一篇 Markdown，而是在构建时读取结构化数据，再把每一条记录转成正常页面。

## 为什么这个功能适合放进主题里

这种方式特别适合下面这类内容：

- 结构重复、字段稳定
- 用 JSON、YAML、TOML 维护更省事
- 虽然来源是数据，但最终仍希望它表现得像普通页面

生成后的项目页依然会进入列表页、分类页、标签页、RSS、多语言切换和普通单页布局，所以它更像是在“扩展内容系统”，而不是临时拼一个特殊页面。

## 这个示例是怎么组织的

这个示例站默认语言是英文，中文是第二语言，所以 `projects` 这里采用的是按语言拆分 content adapter 的方式：

- `content/projects/_content.gotmpl` 对应英文
- `content/projects/_content.zh-cn.gotmpl` 对应中文
- `content/projects/_index.md` 是英文分区入口
- `content/projects/_index.zh-cn.md` 是中文分区入口

这正好对应 Hugo 多语言 Content Adapter 的常见写法：每种语言一份适配器文件。

## 如果你想改成自己的项目页

1. 保留 `projects` 分区和对应的 `_index.xx.md` 文件。
2. 把 `data/projects/*.json` 替换成你自己的项目数据。
3. 如果字段结构不同，就去改 `_content.gotmpl` 里的映射逻辑。
4. 继续复用主题现有的单页布局和 shortcode，这样自动生成页面也会像站点原生内容。

## 建议从哪里开始看

如果你想快速理解这个功能，建议按这个顺序看：

1. `exampleSite/data/projects/en.json`
2. `exampleSite/data/projects/zh_cn.json`
3. `exampleSite/content/projects/_content.gotmpl`
