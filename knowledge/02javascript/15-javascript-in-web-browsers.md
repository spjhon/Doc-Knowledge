---
sidebar_position: 16
---

# 15. JavaScript in Web Browsers

El capítulo comienza con el modelo de programación de la plataforma web, explicando cómo se incrustan los *scripts* dentro de las páginas HTML (**§15.1**) y cómo el código JavaScript se activa de forma **asíncrona mediante eventos** (**§15.2**).

Las secciones que siguen a este material introductorio documentan las APIs principales de JavaScript que permiten a tus aplicaciones web:

* **Controlar el contenido del documento** (**§15.3**) y el **estilo** (**§15.4**)
* **Determinar la posición en pantalla** de los elementos del documento (**§15.5**)
* **Crear componentes de interfaz de usuario reutilizables** (**§15.6**)
* **Dibujar gráficos** (**§15.7** y **§15.8**)
* **Reproducir y generar sonidos** (**§15.9**)
* **Gestionar la navegación y el historial del navegador** (**§15.10**)
* **Intercambiar datos a través de la red** (**§15.11**)
* **Almacenar datos en la computadora del usuario** (**§15.12**)
* **Realizar cálculos concurrentes con hilos** (*threads*) (**§15.13**)

## 15.1 Web Programming Basics

Esta sección explica cómo se estructuran los programas JavaScript para la web, cómo se cargan en un navegador web, cómo obtienen entradas, cómo producen salidas y cómo se ejecutan de **forma asíncrona** al **responder a eventos**.

Este es esencialmente el panorama general de cómo funciona JavaScript en el entorno del navegador (el **modelo de programación web**):

1. **Estructura y Carga:** Cómo se organiza el código y se lee desde el HTML.
2. **Entrada/Salida:** La interacción con el usuario (entrada) y la manipulación del DOM (salida).
3. **Asincronía:** El concepto crucial de **eventos** que permite que el código JavaScript no bloquee el navegador.

### 15.1.1 JavaScript in HTML `<script>` Tags

[**AQUI**](https://www.w3schools.com/tags/tag_script.asp) informacion mas completa del `<script>` tag.

Se muestra un ejemplo básico de un documento HTML y como utilizar javascript dentro de ese documento HTML.

**Deferred y Async:**

1️⃣ El problema original del `<script>`

Cuando el navegador carga un HTML, lo hace **de arriba hacia abajo**:

1. Descarga el HTML
2. Va parseando y construyendo el DOM
3. Cuando encuentra un `<script>` **SIN nada especial**, pasa esto:

```html
<script src="app.js"></script>
```

⛔ **Se detiene todo**:

* Para de construir el DOM
* Descarga `app.js`
* Ejecuta `app.js`
* Luego continúa con el HTML

¿Por qué es un problema?

* Si el script es pesado → la página “se congela”
* Si el script necesita elementos que aún no existen → errores
* Páginas lentas, sobre todo antes de conexiones rápidas

De ahí nacen **`defer` y `async`**.

2️⃣ `defer` — “ejecútalo cuando el HTML esté listo”

```html
<script src="app.js" defer></script>
```

¿Qué hace exactamente?

✔ Descarga el script **en paralelo** al HTML
✔ **NO bloquea** el parsing del DOM
✔ Ejecuta el script **cuando el DOM ya está completamente construido**
✔ Mantiene el **orden** entre scripts

📌 Mentalidad:

> “Este script depende del DOM, pero no necesito ejecutarlo ya”

Línea de tiempo mental

```js
HTML parsing ───────────────▶ DOM listo
   │            │
   │            └── descarga script (en paralelo)
   │
   └──────────────▶ ejecutar script (al final)
```

Ejemplo típico

```html
<script defer src="menu.js"></script>
<script defer src="analytics.js"></script>
```

👉 Se ejecutan **en ese mismo orden**, cuando el DOM está listo.

Caso de uso ideal

* Código que toca el DOM
* Frameworks
* Lógica principal de la app

3️⃣ `async` — “ejecútalo apenas esté listo”

```html
<script src="tracker.js" async></script>
```

¿Qué hace?

✔ Descarga el script **en paralelo**
✔ **NO bloquea** el HTML
❌ Ejecuta el script **apenas termina de descargarse**
❌ **NO respeta el orden**

📌 Mentalidad:

> “Este script es independiente, ejecútalo cuando quieras”

Línea de tiempo

```js
HTML parsing ───────────────▶
      │        ▲
      │        │
      └── descarga script ──┘
               │
         ejecutar script (interrumpe el HTML)
```

Ejemplo peligroso

```html
<script async src="lib.js"></script>
<script async src="app.js"></script>
```

❌ `app.js` puede ejecutarse **antes** de `lib.js`
👉 bugs impredecibles

Caso de uso ideal

* Analytics
* Ads
* Trackers
* Scripts que no tocan el DOM ni dependen de otros

4️⃣ Comparación clara

| Característica    | normal | defer | async |
| ----------------- | ------ | ----- | ----- |
| Bloquea HTML      | ✅      | ❌     | ❌     |
| Descarga paralela | ❌      | ✅     | ✅     |
| Espera DOM        | ❌      | ✅     | ❌     |
| Respeta orden     | ✅      | ✅     | ❌     |

5️⃣ ¿De dónde salen `async` y `defer`?

`defer`

* Existía desde HTML4
* Pensado para scripts que **dependen del DOM**
* Era una solución “segura” para evitar `DOMContentLoaded`

`async`

* Llega con **HTML5**
* Pensado para la era moderna:

  * Analytics
  * Publicidad
  * Widgets externos

👉 Antes de esto, la gente hacía hacks como:

```js
document.addEventListener("DOMContentLoaded", ...)
```

O ponían los scripts **al final del body**:

```html
</body>
<script src="app.js"></script>
```

`defer` y `async` hacen eso **de forma nativa y correcta**.

6️⃣ Regla de oro (para no pensarlo demasiado)

✔ **Tu código principal → `defer`**
✔ **Código externo / tracking → `async`**
✔ **Nunca mezcles dependencias con `async`**

Ejemplo moderno recomendado:

```html
<head>
  <script defer src="/app.js"></script>
  <script async src="https://analytics.com/tracker.js"></script>
</head>
```

7️⃣ Conexión con frameworks modernos (Next, etc.)

Aunque hoy uses:

* Next.js
* Vite
* Bun
* Server Components

👉 **Todo esto sigue compilando a `<script defer>`** en producción.

Saber esto te ayuda a:

* Entender errores raros de hidratación
* Diagnosticar scripts externos
* Optimizar carga real (no marketing)

### 15.1.2. The Document Object Model

El famoso DOM, es el árbol que se forma al ejecutarse un documento html y que es manipulable a traves de javascript.

* [Document](https://www.w3schools.com/jsref/dom_obj_document.asp) Document Object
* [Element](https://www.w3schools.com/jsref/dom_obj_all.asp) HTML DOM Elements
* [Attributes](https://www.w3schools.com/jsref/dom_obj_attributes.asp) HTML DOM Attributes
* [Events](https://www.w3schools.com/jsref/dom_obj_event.asp) HTML DOM Events
* [Event Objects](https://www.w3schools.com/jsref/obj_events.asp) HTML DOM Event Objects
* [HTMLCollection](https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp) DOM HTMLCollection
* [Style](https://www.w3schools.com/jsref/dom_obj_style.asp) HTML DOM Style Object (CSS)

* Para cada etiqueta HTML en el documento, existe un objeto **`Element`** de JavaScript correspondiente.
* Y para cada fragmento de texto en el documento, existe un objeto **`Text`** correspondiente.
* Una muestra de cómo funciona el DOM desde JavaScript es que cada elemento HTML es una subclase específica: la etiqueta `<body>`, por ejemplo, está representada por una instancia de **`HTMLBodyElement`**, y una etiqueta `<table>` está representada por una instancia de **`HTMLTableElement`**.

#### 15.1.2.1. 🌳 La Jerarquía del DOM

Es importante entender que todos estos objetos forman parte de una **jerarquía de herencia**. No son solo objetos aislados, sino que "heredan" capacidades unos de otros.

🧬 La "Genealogía" de un botón (`<button>`)

Imagina que este botón es un profesional que ha ido acumulando títulos y habilidades en cada etapa de su formación:

🧬 La "Escalera de Poder" de un `HTMLButtonElement`

1. **`Object`** (El Ancestro Universal)

    Es la base de todo en el lenguaje JavaScript. Sin esto, el botón ni siquiera sería un objeto.

    * **Habilidad ganada:** Existencia básica y gestión de datos.
    * **Ejemplos:** Puede usar `.toString()` o `.hasOwnProperty()` para saber si tiene una propiedad específica.

2. **`EventTarget`** (La Capacidad de Interacción)

    Es el primer nivel especializado para el navegador. Aquí es donde el objeto deja de ser "estático" y empieza a "escuchar".

    * **Habilidad ganada:** Gestión de eventos.
    * **Ejemplo en el botón:** Gracias a este nivel, puedes hacer `boton.addEventListener('click', ...)` para que pase algo cuando lo presionan.

3. **`Node`** (El Sentido de Familia)

    Aquí el objeto se integra en el "árbol" del documento. Deja de ser un ente solitario para tener parientes.

    * **Habilidad ganada:** Navegación y estructura jerárquica.
    * **Ejemplos en el botón:** Puede saber quién es su padre (`.parentNode`), quiénes son sus hijos si los tuviera, o puedes moverlo de sitio con `.appendChild()`.

4. **`Element`** (La Identidad de Etiqueta)

    En este nivel, el objeto entiende que es una etiqueta HTML (o SVG) con propiedades externas.

    * **Habilidad ganada:** Manejo de atributos y búsqueda interna.
    * **Ejemplos en el botón:** Aquí gana el uso de clases (`.classList`), atributos personalizados (`.getAttribute()`) y la capacidad de buscar cosas dentro de sí mismo con `.querySelector()`.

5. **`HTMLElement`** (La Presencia Visual en la Web)

    Este nivel le da al objeto su "cuerpo" web. Es lo que lo hace visible y configurable para el usuario.

    * **Habilidad ganada:** Estilo, visibilidad y texto.
    * **Ejemplos en el botón:** Aquí es donde aparecen propiedades como `.style` (para cambiar colores), `.id`, `.title` (el texto que sale al pasar el ratón) y `.innerText` (el texto que lleva dentro).

6. **`HTMLButtonElement`** (La Especialización Final)

    Es el último peldaño. Aquí el objeto recibe su "kit de herramientas" exclusivo para ser un botón y nada más que un botón.

    * **Habilidad ganada:** Funciones de control de formulario.
    * **Ejemplos exclusivos:** Solo en este nivel aparecen propiedades como `.disabled` (para bloquearlo), `.type` (para decir si es un botón de envío o normal) y `.form` (que le indica a qué formulario pertenece).

💡 Conclusión importante

Cuando tú escribes en tu código `const miBtn = document.querySelector('button')`, ese objeto `miBtn` **no elige** una de estas capas: **las tiene todas activas al mismo tiempo**.

Es como un edificio: `HTMLButtonElement` es el ático, pero para que exista, necesita que el nivel de `HTMLElement`, `Element`, `Node`, `EventTarget` y `Object` estén debajo sosteniéndolo.

La Regla de Oro

Cualquier cosa que el navegador tenga que renderizar o procesar en el HTML es un Nodo. Mira este ejemplo:

```html
<p>Texto</p>

```

Aquí hay **3 tipos de Nodos** diferentes:

* **Nodo de Comentario:** El texto oculto para desarrolladores.
* **Nodo de Elemento:** La etiqueta `<p>`.
* **Nodo de Texto:** La palabra `"Texto"`.

📝 Ejemplo: El "árbol genealógico" de un texto

Si tienes un simple texto dentro de un párrafo, ese objeto no es solo una cadena de texto (*string*); es un objeto complejo:

```javascript
let parrafo = document.querySelector("p");
let textoHijo = parrafo.firstChild; // Este es un objeto de la clase Text

console.log(textoHijo instanceof Text);          // true
console.log(textoHijo instanceof CharacterData); // true
console.log(textoHijo instanceof Node);          // true

const boton = document.querySelector('button');

// Comprobamos si es instancia de sus antepasados
console.log(boton instanceof HTMLButtonElement); // true
console.log(boton instanceof HTMLElement);       // true
console.log(boton instanceof Element);           // true
console.log(boton instanceof Node);              // true
console.log(boton instanceof EventTarget);       // true
```

💡 ¿Por qué importa esto?

Porque gracias a esta jerarquía:

* Un **Comentario** tiene la propiedad `.nodeName` (porque la hereda de `Node`).
* Un **Texto** tiene la propiedad `.data` (porque la hereda de `CharacterData`).
* Un **Elemento** tiene la propiedad `.innerHTML` (porque la define `Element`).

### 12.1.3. The Global Object in Web Browsers

🌍 El Objeto Global en el Navegador

* Existe **un objeto global** por cada ventana o pestaña del navegador (§3.7).
* El objeto global es el lugar donde se define la **biblioteca estándar** de JavaScript (como `JSON`, `Math`, `Array`, etc.).
* El objeto global también contiene los **puntos de entrada principales** de varias APIs web (como `fetch()`, `localStorage`, `setTimeout`).
* La propiedad **`document`** representa el documento que se muestra actualmente en la ventana.

¿Recuerdas que dijimos que el botón heredaba de **`EventTarget`**? Bueno, el objeto Global (que en los navegadores se llama **`window`**) ¡también es parte de esa gran familia!

Para que veas cómo se conecta todo:

1. **`window`**: Es el objeto global. Es el "universo" donde vive todo.
2. **`window.document`**: Es el punto de entrada al DOM. Es el objeto que "es dueño" del árbol de nodos que hemos estado analizando.
3. **Relación de herencia**: Si vas a la consola y escribes `window instanceof EventTarget`, verás que es **`true`**. Por eso puedes hacer `window.addEventListener('resize', ...)` para detectar cuando alguien cambia el tamaño de la ventana.

🔍 Diferencia clave

* **`window`** representa la **ventana** (el marco, el historial, la barra de direcciones, el objeto global).
* **`document`** representa el **contenido** (el HTML, los botones, los párrafos, los nodos).

**Importante para entender:** de Node sale Document y Element que son hermanos pero no uno  hereda del otro, lo que pasa en el DOM es que por medio del Element se crea un elemento HTML que se pega a un document creado por medio de Document por medio del método de Node llamado appendChild() y asi poder pegarle un elemento que fue creado en Element.

Una instancia de Document tiene elementos porque la clase Document fue diseñada específicamente para gestionar y contener instancias de Element. Al ser ambos Nodes, JavaScript permite que se conecten físicamente en el árbol que ves en tu pantalla.

### 15.1.4 Scripts Share a Namespace

Ojo ya que en una pagina html con un script insertado, lo mas probable es que el script no sea un modulo entonces tener especial cuidado con los name spaces de las variables, constantes y valores.

### 15.1.5 Execution of JavaScript Programs

⚙️ Ejecución de Programas JavaScript: Las Dos Caras

El ciclo de vida de un programa en el navegador se divide en dos etapas principales:

1. Primera Fase: La Carga y Ejecución Inicial

* En esta fase, se **carga el contenido del documento** (el HTML se transforma en el árbol de Nodos que ya conocemos).
* Se ejecuta el código de los elementos `<script>` (tanto los que están escritos directamente en el HTML como los que vienen de archivos externos).
* **Es el momento de preparación:** Aquí es donde el código suele buscar elementos en el DOM y prepararse para lo que viene.

#### 2. Segunda Fase: Asíncrona y Dirigida por Eventos

* Esta fase es **asíncrona** (no ocurre en un orden lineal fijo) y se basa en **eventos**.
* **Requisito de participación:** Si un script quiere participar en esta segunda fase, debe haber hecho algo importante durante la primera: **registrar al menos un manejador de eventos** (*event handler*) o una función de *callback*.
* Durante esta etapa, el navegador web invoca (llama) a esas funciones en respuesta a cosas que pasan de forma asíncrona (clics, movimientos del ratón, respuestas de red, etc.).

#### 🏁 Eventos Iniciales de la Segunda Fase

Algunos de los primeros eventos que disparan esta fase son:

* **`DOMContentLoaded`**: El navegador ya terminó de construir el árbol de Nodos (DOM) a partir del HTML.
* **`load`**: Todo el contenido de la página, incluyendo imágenes y estilos externos, se ha cargado completamente.

---

### 💡 ¿Cómo se conecta esto con lo que hemos hablado?

¡Todo encaja! Mira:

1. **En la Fase 1:** El navegador usa la clase `Document` para fabricar los `Elements` (nodos).
2. **En la Fase 1 (al final):** Tú escribes un código que dice: `miBoton.addEventListener('click', miFuncion)`.
    * *Nota:* Aquí estás usando la capacidad de `EventTarget` (el ancestro de todos) para registrar el interés en un evento.
3. **En la Fase 2:** El usuario hace clic. El navegador mira la lista de "interesados" que se registró en la Fase 1 y ejecuta `miFuncion`.

**Sin la Fase 1**, no habría Nodos ni manejadores.
**Sin la Fase 2**, la página sería una foto estática; nada reaccionaría al usuario.

¿Te gustaría que viéramos un ejemplo de código real donde se vea exactamente el momento en que pasamos de la Fase 1 a la Fase 2 usando el evento `DOMContentLoaded`?
