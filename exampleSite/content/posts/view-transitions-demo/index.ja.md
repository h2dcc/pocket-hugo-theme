---
image: cover.webp
title: "View Transition デモ"
description: "カードから記事ページへの切り替えを確認するためのサンプルです。"
date: 2026-03-19T09:40:00+08:00
slug: "view-transitions-demo"
categories:
  - Interaction
tags:
  - ViewTransitions
  - Animation
  - Navigation
---

このページは Pocket Hugo Theme の **View Transitions API** 対応を確認するためのサンプルです。これは実験機能で、**初期設定では無効** になっています。

<!--more-->

## 有効化する方法

`hugo.toml` に次を追加します。

```toml
[params]
  viewTransitions = true
```

そのうえで、View Transitions API をサポートするブラウザで再ビルドしたサイトを確認してください。

## 注意

この機能を有効にすると、ダークモードではブラウザによってページ遷移時にまれに白いフラッシュが出る場合があります。
