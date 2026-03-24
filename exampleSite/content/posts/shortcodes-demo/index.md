+++
title = "Shortcodes Demo"
date = 2026-03-06T09:00:00+08:00
draft = false
description = "A sample page that groups together several practical shortcodes for content-heavy Hugo sites."
slug = "shortcodes-demo"
tags = ["shortcodes", "content", "markdown"]
categories = ["Writing"]
+++

This page groups together several practical shortcodes that work well in a content-first Hugo theme. They are intentionally simple, easy to copy, and suitable for essays, notes, and documentation pages.

<!--more-->

## Fold

Use `fold` when a section should stay readable without taking too much vertical space.

```text
{{</* fold "Why this shortcode exists" */>}}
This hidden block is rendered inside a native `<details>` element.
{{</* /fold */>}}
```

{{< fold "Why this shortcode exists" >}}
This hidden block is rendered inside a native `<details>` element, so it works without JavaScript and still feels natural in long-form writing.
{{< /fold >}}

## Note

Use `note` for callouts such as tips, warnings, or side remarks.

```text
{{</* note type="info" title="Content-first" */>}}
Pocket Hugo Theme keeps callouts readable without making them look like app UI.
{{</* /note */>}}
```

{{< note type="info" title="Content-first" >}}
Pocket Hugo Theme keeps callouts readable without making them look like app UI.
{{< /note >}}

{{< note type="tip" title="Tip" >}}
Shortcodes like this are useful for tutorials, changelogs, and writing guides.
{{< /note >}}

{{< note type="warn" title="Experimental" >}}
If you add custom shortcodes, keep them small and easy to understand. Readers should not need to decode the layout before reading the content.
{{< /note >}}

## Badge

Badges are useful for compact status labels inside paragraphs.

```text
{{</* badge "Stable" */>}}
{{</* badge text="Optional" type="info" */>}}
{{</* badge text="Experimental" type="warn" */>}}
```

{{< badge "Stable" >}}
{{< badge text="Optional" type="info" >}}
{{< badge text="Experimental" type="warn" >}}

## Button

Use `button` when you want a stronger inline call to action than a normal text link.

```text
{{</* button href="/guide/" label="Open the Guide" */>}}
{{</* button href="/links/" label="Browse Links" style="ghost" */>}}
```

{{< button href="/guide/" label="Open the Guide" >}}
{{< button href="/links/" label="Browse Links" style="ghost" >}}

## Video and audio

These shortcodes keep common media embeds consistent with the rest of the theme.

```text
{{</* video src="/media/demo.mp4" title="Local video" */>}}Caption{{</* /video */>}}
{{</* audio src="/media/demo.mp3" title="Audio clip" */>}}Caption{{</* /audio */>}}
{{</* youtube id="rdwz7QiG0lk" */>}}YouTube embed{{</* /youtube */>}}
{{</* bilibili bvid="BV1xx411c7mu" */>}}Bilibili embed{{</* /bilibili */>}}
```

{{< video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" title="HTML5 video" >}}A plain HTML5 video wrapper with the theme's default radius and spacing.{{< /video >}}

{{< audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" title="HTML5 audio" >}}A matching audio player for short clips, podcasts, or spoken notes.{{< /audio >}}

{{< youtube id="rdwz7QiG0lk" >}}A YouTube embed wrapped in the same media style.{{< /youtube >}}

{{< bilibili bvid="BV1xx411c7mu" >}}A Bilibili embed using the same responsive frame.{{< /bilibili >}}

## Timeline

Use `timeline` when you want a process, update log, or historical sequence.

```text
{{</* timeline */>}}
{{</* timeline-item date="2026-01" title="Planning" */>}}Outline the scope.{{</* /timeline-item */>}}
{{</* timeline-item date="2026-02" title="Build" */>}}Ship the first version.{{</* /timeline-item */>}}
{{</* /timeline */>}}
```

{{< timeline >}}
{{< timeline-item date="2026-01" title="Planning" >}}Outline the first version of the feature and keep the data format small.{{< /timeline-item >}}
{{< timeline-item date="2026-02" title="Build" >}}Add a simple implementation that fits long-form content rather than app-like UI.{{< /timeline-item >}}
{{< timeline-item date="2026-03" title="Polish" >}}Tighten copy, spacing, and multilingual examples.{{< /timeline-item >}}
{{< /timeline >}}

## Columns

Use `columns` when two ideas need to be compared side by side.

```text
{{</* columns */>}}
{{</* column */>}}Left side{{</* /column */>}}
{{</* column */>}}Right side{{</* /column */>}}
{{</* /columns */>}}
```

{{< columns >}}
{{< column >}}
### Better for

- short comparisons
- feature summaries
- before/after notes
{{< /column >}}
{{< column >}}
### Avoid for

- long essay paragraphs
- deeply nested lists
- content that must stay linear
{{< /column >}}
{{< /columns >}}

## Why this matters

These shortcodes are not meant to turn the theme into a component library. They simply give writers a few reusable building blocks that fit the theme without adding a framework layer.
