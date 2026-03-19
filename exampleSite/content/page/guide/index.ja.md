---
title: "ガイド"
description: "Pocket Hugo Theme の基本的な導入手順とローカル確認方法。"
slug: "guide"
---

## インストール

```bash
git submodule add https://github.com/h2dcc/pocket-hugo-theme.git themes/pocket-hugo-theme
```

```toml
theme = "pocket-hugo-theme"
```

## ローカル確認

```bash
hugo server --source exampleSite --themesDir ../..
```

## おすすめの確認項目

- 表紙画像付きカードの密度
- 記事ページの余白と見出し階層
- 言語切り替えの見え方
- 右側ウィジェットの表示順