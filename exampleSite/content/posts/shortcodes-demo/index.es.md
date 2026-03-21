---
image: cover.webp
title: "Demostracion de shortcodes"
description: "Una pagina de ejemplo que reúne varios shortcodes prácticos para sitios Hugo centrados en el contenido."
date: 2026-03-06T10:00:00+08:00
slug: "shortcodes-demo"
categories:
  - Writing
tags:
  - Shortcodes
  - Content
  - Markdown
---

Esta pagina reúne varios shortcodes prácticos que encajan bien en un tema Hugo centrado en el contenido. Son simples, fáciles de copiar y útiles para ensayos, notas y documentación.

<!--more-->

## Fold

`fold` sirve para ocultar bloques secundarios sin romper el ritmo de lectura.

{{< fold "Por que existe este shortcode" >}}
Este bloque se renderiza con un elemento nativo `<details>`, así que funciona sin JavaScript adicional.
{{< /fold >}}

## Note

`note` sirve para consejos, avisos y comentarios laterales.

{{< note type="info" title="Enfoque en el contenido" >}}
Pocket Hugo Theme intenta que los avisos sigan pareciendo parte del texto y no componentes de aplicación.
{{< /note >}}

{{< note type="tip" title="Consejo" >}}
Este shortcode encaja bien en tutoriales, guías y páginas de notas.
{{< /note >}}

## Badge y Button

{{< badge "Estable" >}}
{{< badge text="Opcional" type="info" >}}
{{< badge text="Experimental" type="warn" >}}

{{< button href="/guide/" label="Abrir la guía" >}}
{{< button href="/links/" label="Ver enlaces" style="ghost" >}}

## Video, audio y embeds

{{< video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" title="Video HTML5" >}}Un envoltorio simple para video local o remoto.{{< /video >}}

{{< audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" title="Audio HTML5" >}}Un reproductor de audio con el mismo ritmo visual del tema.{{< /audio >}}

{{< youtube id="rdwz7QiG0lk" >}}Ejemplo de inserción de YouTube.{{< /youtube >}}

{{< bilibili bvid="BV1xx411c7mu" >}}Ejemplo de inserción de Bilibili.{{< /bilibili >}}

## Timeline y Columns

{{< timeline >}}
{{< timeline-item date="2026-01" title="Planificación" >}}Definir el alcance y mantener el formato simple.{{< /timeline-item >}}
{{< timeline-item date="2026-02" title="Implementación" >}}Construir una primera versión orientada a la lectura.{{< /timeline-item >}}
{{< timeline-item date="2026-03" title="Ajuste" >}}Pulir copias, espaciado y ejemplos multilingües.{{< /timeline-item >}}
{{< /timeline >}}

{{< columns >}}
{{< column >}}
### Útil para

- comparaciones breves
- resúmenes de funciones
- notas paralelas
{{< /column >}}
{{< column >}}
### Mejor evitarlo en

- párrafos largos
- listas demasiado profundas
- textos que deben leerse en una sola columna
{{< /column >}}
{{< /columns >}}

## Por que importa

La idea no es convertir el tema en una biblioteca de componentes. El objetivo es ofrecer algunos bloques reutilizables para escribir mejor sin añadir una capa de framework.
