---
image: cover.webp
title: "Projects Adapter デモ"
description: "コンテンツアダプターで生成された projects セクションを案内するサンプルです。"
date: 2026-03-19T10:10:00+08:00
slug: "content-adapter-demo"
categories:
  - Data
tags:
  - ContentAdapter
  - Projects
  - Data
---

このページは **content adapter** で生成された `/projects/` セクションを確認するためのサンプルです。JSON から通常の Hugo ページが作られます。

<!--more-->

## 仕組み

このデモは次の 3 つで構成されています。

1. `exampleSite/data/projects/en.json` と `exampleSite/data/projects/zh_cn.json`
2. `exampleSite/content/projects/_content.gotmpl`
3. ビルド時に生成される `/projects/` ページ

Hugo はビルド時に JSON データを読み込み、`_content.gotmpl` で各項目を回しながら、通常のページと同じようにタイトル、slug、説明、リンク、タグ、カテゴリーを持つページを作ります。

## 使い方

1. `content/projects/_content.gotmpl` の例を自分のサイトにコピーします。
2. 構造化したデータを JSON ファイルに用意します。
3. データ構造が違う場合は `_content.gotmpl` のフィールド名を調整します。
4. `hugo` を実行して `/projects/` を開きます。

生成されたページは通常のコンテンツと同じように扱えます。

- 一覧ページに出る
- 固定リンクを持つ
- 同じ single レイアウトを使える
- 他の記事やページからリンクできる

## 試してみるポイント

- [Projects セクション](/projects/)
- その中の生成済みプロジェクトページ
- JSON ファイルと `_content.gotmpl` の対応関係
