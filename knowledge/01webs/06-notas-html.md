---
sidebar_position: 6
---

# Notes HTML

- El input es el mas complejo de los elemenots html por las formas que puede coger

- Page titles and SEO: The contents of a page title can have significant implications for search engine optimization (SEO). In general, a longer, descriptive title performs better than short or generic titles. The content of the title is one of the components used by search engine algorithms to decide the order in which to list pages in search results. Also, the title is the initial "hook" by which you grab the attention of readers glancing at the search results page. If a form submission contains errors and the submission re-renders the current page, the title can be used to help make users aware of any errors with their submission. For instance, update the page `<title>` value to reflect significant page state changes (such as form validation problems).

- Only use one `<h1>` per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels start with `<h1>`, then use `<h2>`, and so on.

- Browsers automatically add a single blank line before and after each `<p>` element.

- con `<link>` tambien se puede llamar fonts.

- Existen constructores para ciertos elementos HTML como por ejemplo Image() que es equivalente a document.createElement('img') pero que es mas utilizado para certain scenarios, such as preloading images or creating image elements dynamically in JavaScript.
Video y audo tags tambien poseen este constructor.

- Hay que tener en cuenta que cada navegador tiene su propia forma de interpretar css y otros elementos como la politica de autoplay en chrome.

## Canvas

- In canvas the origin is still the upper-left corner of the window.

- The vertical numbers increase in value moving down the screen. The standard way to write coordinates is to put the horizontal value first, followed by the vertical value.

## Tips de utilizacion de los elementos html

- Javascript tiene unos metodos (por ejemplo getElementsByTagName("")) para convertir elemntos html a elementos guardados en variables que se pueden manipular y transportar.

- Los elementos html tienen metodos y propiedades, unas globales como ["**ESTAS**"](https://www.w3schools.com/tags/ref_standardattributes.asp) y otras que solamente pueden ser aplicadas a ciertos elementos html ["**ESTOS**"](https://www.w3schools.com/tags/ref_attributes.asp).

- Y existen los llamados eventos, lo llamados on (onChange) que se subscriben al elemento para que responda al moneto de que pase ese evento en particular.

- Estos eventos pueden ser incrustados en el elemento html directamente o por medio de metodos en javascript para attach el elemento al html.
