---
title: "タイトルカードガイド"
description: "Pocket Hugo Theme のタイトルカード機能と 16 種類のプリセットを紹介するガイドです。"
date: 2026-02-09T10:30:00+08:00
slug: "title-card-guide"
comments: true
coverCard: "G"
categories:
  - Demo
tags:
  - Japanese
  - Cover Card
  - Theme
---

Pocket Hugo Theme では、カバー画像がないページに **タイトルカード** を表示できます。このページでは、その使い方を簡単にまとめます。

## 最小設定

```yaml
coverCard: "a"
```

- `a` から `h`: 明るい 8 種類
- `A` から `H`: 暗い 8 種類
- それ以外: 自動でランダム選択

`coverCard` を設定すると、通常の `image` よりタイトルカードが優先されます。

## 16 種類のプリセット

{{< title-card-showcase >}}
