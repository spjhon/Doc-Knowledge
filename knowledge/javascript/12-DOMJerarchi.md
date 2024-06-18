# DOM Interface Tree

Claro, entiendo que quieres un mapa jerárquico completo de las APIs del DOM, desde `EventTarget` hasta los elementos HTML específicos. Aquí te dejo una explicación detallada y una tabla de jerarquía para entender cómo se estructuran.

## Jerarquía del DOM

1. **EventTarget**
   - La interfaz `EventTarget` es la base de la cual heredan los objetos que pueden recibir eventos y tener listeners.
2. **Node**

   - La interfaz `Node` hereda de `EventTarget` y es una clase base para todos los nodos del DOM.
     - Tipos de `Node`:
       - `Element` (Hereda de `Node`)
       - `Text` (Hereda de `Node`)
       - `Comment` (Hereda de `Node`)
       - `Document` (Hereda de `Node`)
       - `DocumentFragment` (Hereda de `Node`)

3. **Element**

   - La interfaz `Element` hereda de `Node` y es la clase base para todos los elementos del DOM.
     - Tipos de `Element`:
       - `HTMLElement` (Hereda de `Element`)
       - `SVGElement` (Hereda de `Element`)
       - `MathMLElement` (Hereda de `Element`)

4. **HTMLElement**
   - La interfaz `HTMLElement` hereda de `Element` y es la clase base para todos los elementos HTML específicos.
     - Cada elemento HTML específico hereda de `HTMLElement`.

## Tabla de Jerarquía

Aquí hay una tabla que muestra la jerarquía completa desde `EventTarget` hasta los elementos HTML específicos:

```markdown
| API Level | Interface/Element       | Description                                                |
| --------- | ----------------------- | ---------------------------------------------------------- |
| 1         | EventTarget             | Base interface for objects that can receive events.        |
| 2         | Node                    | Base class for all DOM nodes.                              |
| 3         | Element                 | Base class for all element nodes.                          |
| 4         | HTMLElement             | Base class for all HTML elements.                          |
| 5         | HTMLAnchorElement       | Represents `<a>` elements.                                 |
| 5         | HTMLAreaElement         | Represents `<area>` elements.                              |
| 5         | HTMLAudioElement        | Represents `<audio>` elements.                             |
| 5         | HTMLBRElement           | Represents `<br>` elements.                                |
| 5         | HTMLBaseElement         | Represents `<base>` elements.                              |
| 5         | HTMLBodyElement         | Represents `<body>` elements.                              |
| 5         | HTMLButtonElement       | Represents `<button>` elements.                            |
| 5         | HTMLCanvasElement       | Represents `<canvas>` elements.                            |
| 5         | HTMLDataElement         | Represents `<data>` elements.                              |
| 5         | HTMLDataListElement     | Represents `<datalist>` elements.                          |
| 5         | HTMLDialogElement       | Represents `<dialog>` elements.                            |
| 5         | HTMLDivElement          | Represents `<div>` elements.                               |
| 5         | HTMLDListElement        | Represents `<dl>` elements.                                |
| 5         | HTMLEmbedElement        | Represents `<embed>` elements.                             |
| 5         | HTMLFieldSetElement     | Represents `<fieldset>` elements.                          |
| 5         | HTMLFormElement         | Represents `<form>` elements.                              |
| 5         | HTMLHeadingElement      | Represents `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`. |
| 5         | HTMLHeadElement         | Represents `<head>` elements.                              |
| 5         | HTMLHRElement           | Represents `<hr>` elements.                                |
| 5         | HTMLHtmlElement         | Represents `<html>` elements.                              |
| 5         | HTMLIFrameElement       | Represents `<iframe>` elements.                            |
| 5         | HTMLImageElement        | Represents `<img>` elements.                               |
| 5         | HTMLInputElement        | Represents `<input>` elements.                             |
| 5         | HTMLLabelElement        | Represents `<label>` elements.                             |
| 5         | HTMLLegendElement       | Represents `<legend>` elements.                            |
| 5         | HTMLLIElement           | Represents `<li>` elements.                                |
| 5         | HTMLLinkElement         | Represents `<link>` elements.                              |
| 5         | HTMLMapElement          | Represents `<map>` elements.                               |
| 5         | HTMLMetaElement         | Represents `<meta>` elements.                              |
| 5         | HTMLMeterElement        | Represents `<meter>` elements.                             |
| 5         | HTMLModElement          | Represents `<ins>` and `<del>` elements.                   |
| 5         | HTMLOListElement        | Represents `<ol>` elements.                                |
| 5         | HTMLOptGroupElement     | Represents `<optgroup>` elements.                          |
| 5         | HTMLOptionElement       | Represents `<option>` elements.                            |
| 5         | HTMLOutputElement       | Represents `<output>` elements.                            |
| 5         | HTMLParagraphElement    | Represents `<p>` elements.                                 |
| 5         | HTMLParamElement        | Represents `<param>` elements.                             |
| 5         | HTMLPictureElement      | Represents `<picture>` elements.                           |
| 5         | HTMLPreElement          | Represents `<pre>` elements.                               |
| 5         | HTMLProgressElement     | Represents `<progress>` elements.                          |
| 5         | HTMLQuoteElement        | Represents `<blockquote>` and `<q>` elements.              |
| 5         | HTMLScriptElement       | Represents `<script>` elements.                            |
| 5         | HTMLSelectElement       | Represents `<select>` elements.                            |
| 5         | HTMLSourceElement       | Represents `<source>` elements.                            |
| 5         | HTMLSpanElement         | Represents `<span>` elements.                              |
| 5         | HTMLStyleElement        | Represents `<style>` elements.                             |
| 5         | HTMLTableElement        | Represents `<table>` elements.                             |
| 5         | HTMLTableCellElement    | Represents `<td>` and `<th>` elements.                     |
| 5         | HTMLTableColElement     | Represents `<col>` and `<colgroup>` elements.              |
| 5         | HTMLTableSectionElement | Represents `<thead>`, `<tbody>`, and `<tfoot>` elements.   |
| 5         | HTMLTemplateElement     | Represents `<template>` elements.                          |
| 5         | HTMLTextAreaElement     | Represents `<textarea>` elements.                          |
| 5         | HTMLTimeElement         | Represents `<time>` elements.                              |
| 5         | HTMLTitleElement        | Represents `<title>` elements.                             |
| 5         | HTMLTrackElement        | Represents `<track>` elements.                             |
| 5         | HTMLUListElement        | Represents `<ul>` elements.                                |
| 5         | HTMLVideoElement        | Represents `<video>` elements.                             |
```

## Explicación de la Jerarquía

1. **EventTarget**: La interfaz más básica para todos los objetos que pueden recibir eventos.
2. **Node**: Hereda de `EventTarget` y es la clase base para todos los nodos del DOM, incluidos elementos, texto, comentarios y documentos.
3. **Element**: Hereda de `Node` y es la clase base para todos los nodos de elementos.
4. **HTMLElement**: Hereda de `Element` y es la clase base para todos los elementos HTML.
5. **Elementos HTML específicos**: Heredan de `HTMLElement` y representan etiquetas HTML individuales como `<div>`, `<span>`, `<a>`, etc.

Espero que esta tabla y explicación te ayuden a entender mejor la jerarquía del DOM y cómo se relacionan los diferentes elementos. Si necesitas más detalles o ajustes, no dudes en decírmelo.
