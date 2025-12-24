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

| Característica    | normal | defer  | async|
| ----------------- | ------    -----  | -----   |
| Bloquea HTML      | ✅      | ❌     | ❌    |
| Descarga paralela | ❌      | ✅     | ✅    |
| Espera DOM        | ❌      | ✅     | ❌    |
| Respeta orden     | ✅      | ✅     | ❌    |

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

2. Segunda Fase: Asíncrona y Dirigida por Eventos

    * Esta fase es **asíncrona** (no ocurre en un orden lineal fijo) y se basa en **eventos**.
    * **Requisito de participación:** Si un script quiere participar en esta segunda fase, debe haber hecho algo importante durante la primera: **registrar al menos un manejador de eventos** (*event handler*) o una función de *callback*.
    * Durante esta etapa, el navegador web invoca (llama) a esas funciones en respuesta a cosas que pasan de forma asíncrona (clics, movimientos del ratón, respuestas de red, etc.).

🏁 Eventos Iniciales de la Segunda Fase

Algunos de los primeros eventos que disparan esta fase son:

* **`DOMContentLoaded`**: El navegador ya terminó de construir el árbol de Nodos (DOM) a partir del HTML.
* **`load`**: Todo el contenido de la página, incluyendo imágenes y estilos externos, se ha cargado completamente.

💡 ¿Cómo se conecta esto con lo que hemos hablado?

¡Todo encaja! Mira:

1. **En la Fase 1:** El navegador usa la clase `Document` para fabricar los `Elements` (nodos).
2. **En la Fase 1 (al final):** Tú escribes un código que dice: `miBoton.addEventListener('click', miFuncion)`.
    * *Nota:* Aquí estás usando la capacidad de `EventTarget` (el ancestro de todos) para registrar el interés en un evento.
3. **En la Fase 2:** El usuario hace clic. El navegador mira la lista de "interesados" que se registró en la Fase 1 y ejecuta `miFuncion`.

**Sin la Fase 1**, no habría Nodos ni manejadores.
**Sin la Fase 2**, la página sería una foto estática; nada reaccionaría al usuario.

¿Te gustaría que viéramos un ejemplo de código real donde se vea exactamente el momento en que pasamos de la Fase 1 a la Fase 2 usando el evento `DOMContentLoaded`?

#### 15.1.5.1 Client-side JavaScript threading model

The web platform defines a controlled form of concurrency called a “web worker.”

#### 15.1.5.2. Client-side JavaScript timeline

Ya hemos visto que los programas en JavaScript comienzan en una **fase de ejecución de scripts** y luego pasan a una **fase de manejo de eventos**. Estas dos fases pueden descomponerse en los siguientes pasos:

1. El navegador web crea un objeto `Document` y comienza a analizar (parsear) la página web, añadiendo objetos `Element` y nodos `Text` al documento a medida que va interpretando los elementos HTML y su contenido textual. En esta etapa, la propiedad `document.readyState` tiene el valor `"loading"`.

2. Cuando el parser de HTML encuentra una etiqueta `<script>` que **no** tiene los atributos `async`, `defer` ni `type="module"`, añade esa etiqueta `<script>` al documento y luego ejecuta el script.
   El script se ejecuta de forma **sincrónica**, y el parser de HTML se detiene mientras el script se descarga (si es necesario) y se ejecuta.
   Un script de este tipo puede usar `document.write()` para insertar texto en el flujo de entrada, y ese texto pasará a formar parte del documento cuando el parser se reanude.
   Este tipo de script suele limitarse a definir funciones y registrar manejadores de eventos para usarlos más adelante, pero también puede recorrer y manipular el árbol del documento tal como existe en ese momento.
   Es decir, los scripts no modulares que no tienen los atributos `async` o `defer` pueden ver su propia etiqueta `<script>` y el contenido del documento que aparece antes de ella.

3. Cuando el parser encuentra un elemento `<script>` que tiene el atributo `async`, comienza a descargar el código del script (y si el script es un módulo, también descarga recursivamente todas sus dependencias) y continúa parseando el documento.
   El script se ejecutará tan pronto como sea posible después de haberse descargado, pero el parser **no se detiene** para esperar a que termine la descarga.
   Los scripts asíncronos no deben usar el método `document.write()`.
   Estos scripts pueden ver su propia etiqueta `<script>` y todo el contenido del documento que aparece antes de ella, y pueden o no tener acceso a contenido adicional del documento.

4. Cuando el documento ha sido completamente parseado, la propiedad `document.readyState` cambia a `"interactive"`.

5. Cualquier script que tenga el atributo `defer` (junto con los scripts de tipo módulo que no tengan el atributo `async`) se ejecuta en el orden en el que aparecen en el documento. Los scripts `async` también pueden ejecutarse en este momento.
   Los scripts diferidos (`defer`) tienen acceso al documento completo y no deben usar el método `document.write()`.

6. El navegador dispara el evento `"DOMContentLoaded"` sobre el objeto `Document`.
   Esto marca la transición desde la fase de ejecución sincrónica de scripts hacia la fase asíncrona y dirigida por eventos del programa.
   Sin embargo, hay que tener en cuenta que aún pueden existir scripts `async` que no se hayan ejecutado en este punto.

7. En este momento el documento ya está completamente parseado, pero el navegador aún puede estar esperando que se cargue contenido adicional, como imágenes.
   Cuando todo ese contenido termina de cargarse y cuando todos los scripts `async` se han descargado y ejecutado, la propiedad `document.readyState` cambia a `"complete"` y el navegador dispara el evento `"load"` sobre el objeto `Window`.

8. A partir de este punto, los manejadores de eventos se invocan de forma **asíncrona** en respuesta a eventos de entrada del usuario, eventos de red, expiraciones de temporizadores, y otros eventos similares.

### 15.1.6 Program Input and Output

Como cualquier programa, los programas de JavaScript del lado del cliente procesan **datos de entrada** para producir **datos de salida**. Existen diversas fuentes de entrada disponibles:

* **El contenido del propio documento**, al cual el código JavaScript puede acceder mediante la API del DOM (§15.3).

* **La entrada del usuario**, en forma de eventos, como clics del mouse (o toques en pantallas táctiles) sobre elementos HTML `<button>`, o texto ingresado en elementos HTML `<textarea>`, por ejemplo.
  La sección §15.2 muestra cómo los programas JavaScript pueden responder a este tipo de eventos de usuario.

* **La URL del documento que se está mostrando**, que está disponible para JavaScript del lado del cliente como `document.URL`.
  Si se pasa esta cadena al constructor `URL()` (§11.9), se puede acceder fácilmente a las secciones de ruta (path), consulta (query) y fragmento (hash) de la URL.

* **El contenido del encabezado de solicitud HTTP “Cookie”**, que está disponible para el código del lado del cliente como `document.cookie`.
  Las cookies suelen ser utilizadas por código del lado del servidor para mantener sesiones de usuario, pero el código del lado del cliente también puede leerlas (y escribirlas) si es necesario.
  Para más detalles, véase §15.12.2.

* **La propiedad global `navigator`**, que proporciona acceso a información sobre el navegador web, el sistema operativo sobre el cual se está ejecutando y las capacidades de ambos.
  Por ejemplo, `navigator.userAgent` es una cadena que identifica el navegador web, `navigator.language` indica el idioma preferido del usuario, y `navigator.hardwareConcurrency` devuelve el número de CPUs lógicos disponibles para el navegador.
  De manera similar, la propiedad global `screen` proporciona acceso al tamaño de la pantalla del usuario a través de las propiedades `screen.width` y `screen.height`.
  En cierto sentido, los objetos `navigator` y `screen` son para los navegadores web lo que las variables de entorno son para los programas en Node.js.

El JavaScript del lado del cliente normalmente produce **salida**, cuando lo necesita, manipulando el documento HTML mediante la API del DOM (§15.3) o utilizando un framework de nivel superior como React o Angular para modificar el documento.
El código del lado del cliente también puede usar `console.log()` y métodos relacionados (§11.8) para generar salida. Sin embargo, esta salida solo es visible en la consola de desarrollo del navegador, por lo que resulta útil para depuración, pero no para mostrar información visible al usuario.

### 15.1.7 Program Errors

* Se recomienda que se prevean todos los errores que se puedan presenar y manejarlos con gracia, no de pender de lo que bote el navegador.
* Utilizar el catch con las promesas para manejar con gracia todos los errores posibles.
* Existe una propiedad en el global en donde se puede registrar una funcion onerror que lo que hace es tomar un error que haya transversado todo el DOM sin encontrar un catch.

### 15.1.8. The Web Security Model

The subsections that follow give a quick overview of the security restrictions and issues that you, as a JavaScript programmer, should to be aware of:

#### 15.1.8.1 What JavaScript can’t do

* No puede manipular archivos del sistema
* client-side JavaScript does not have general-purpose networking capabilities.

#### 15.1.8.2 The same-origin policy

It typically comes into play when a web page includes `<iframe>` elements.

* A script can read only the properties of windows and documents that have the same origin as the document that contains the script.

#### 15.1.8.3 Cross-site scripting

Cross-site scripting, or XSS, is a term for a category of security issues in which an attacker injects HTML tags or scripts into a target website.

* In general, the way to prevent XSS attacks is to remove HTML tags from any untrusted data before using it to create dynamic document content.

## 15.2. Events

[**AQUI**](https://www.w3schools.com/jsref/dom_obj_event.asp) informacion mas detallada de todos los eventos presentes en el browser

Los programas de JavaScript del lado del cliente utilizan un **modelo de programación asíncrona dirigida por eventos**.

En este estilo de programación, el navegador web genera un **evento** cada vez que sucede algo "interesante" en el documento, en el propio navegador o en algún elemento u objeto asociado a ellos.

🔍 ¿Qué significa esto en la práctica?

Para que lo veas con la lógica que ya construimos:

1. **"Algo interesante"**: Es cualquier cambio de estado. Por ejemplo:
    * El usuario hace clic en un botón (**elemento**).
    * La página termina de cargar (**documento**).
    * Se cambia el tamaño de la ventana (**navegador/window**).
    * Un temporizador llega a cero (**objeto asociado**).

2. **El Navegador como Vigilante**: El navegador está constantemente "escuchando". Cuando detecta ese "suceso interesante", crea un objeto de evento y lo envía al sistema.
3. **La conexión con `EventTarget**`: ¿Recuerdas que dijimos que `window`, `document` y los elementos como el `button` heredan de `EventTarget`?
    * Gracias a esa herencia, todos ellos tienen el método `.addEventListener()`.
    * Este método es como decirle al navegador: *"Si ocurre ese evento interesante en este objeto específico, avísame y ejecuta mi función"*.

💡 ¿Por qué es "Asíncrono"?

Es asíncrono porque el código no se queda "congelado" esperando a que hagas clic. El programa sigue corriendo la Fase 1 (que tradujimos antes) y, **solo cuando ocurre el evento** (Fase 2), el navegador interrumpe lo que está haciendo para ejecutar tu función.

**Anatomía de un evento:**

* event type
* event target
* event handler, or event listener
* **event object**
* event propagation
* prevent default

### 15.2.1. Event Categories

* Device-dependent input events
* Device-independent input events
* User interface events
* State-change events
* API-specific events

### 15.2.2 Registering Event Handlers

"Hay dos formas básicas de registrar **manejadores de eventos**. La primera, de los inicios de la web, consiste en establecer una propiedad en el objeto o elemento del documento que es el **objetivo del evento**. La segunda técnica (más nueva y más general) consiste en pasar el manejador al método **`addEventListener()`** del objeto o elemento."

#### 12.5.2.1. addEventListener()

"Cualquier objeto que pueda ser un **objetivo de evento** —esto incluye los objetos `Window` y `Document` y todos los elementos del documento— define un método llamado **`addEventListener()`** que puedes usar para registrar un manejador de eventos para ese objetivo. `addEventListener()` recibe tres argumentos. El primero es el **tipo de evento** para el cual se está registrando el manejador; el tipo de evento (o nombre) es una cadena que **no incluye el prefijo “on”** utilizado al establecer propiedades de manejadores de eventos. El segundo argumento de `addEventListener()` es la **función** que debe invocarse cuando ocurre el tipo de evento especificado."

Resumen de los parámetros mencionados:

* **Argumento 1:** El nombre del evento (ej. `'click'`, no `'onclick'`).
* **Argumento 2:** La función que se ejecutará (el *callback*).
* **Argumento 3:** (Mencionado pero no detallado en tu texto) Suele ser un objeto de opciones o un valor booleano para el *capture phase*.

* Tener en cuenta que utiliza el on ya sea en html o en un object (b.onclick) va a sobre-escribir los eventos registrados, mientras que con el adEventListener() se le pueden asignar varios eventos al mismo elemento, inclusive repetir el evento para diferentes outcomes.

### 15.2.3 Event Handler Invocation

Una cosa es registrarlos, otra cosa es cuando se disparan y se invoka el callback.

#### 15.2.3.1. Event handler argument

Cuando se invoca, hay que tener en cuenta que:

* el browser asigna automáticamente el elemento HTML a this en el contexto de la función callback del evento.
* Se entrega un object event con muchos datos sobre el evento que acaba de ocurrir.

#### 12.2.3.2. Event handler context

"Cuando registras un manejador de eventos estableciendo una propiedad, parece como si estuvieras definiendo un nuevo método en el objeto objetivo:

`target.onclick = function() { /* código del manejador */ };`

Por lo tanto, no es de extrañar que los manejadores de eventos se invoquen como métodos del objeto en el que están definidos. Es decir, dentro del cuerpo de un manejador de eventos, la palabra clave **`this`** se refiere al objeto en el que se registró el manejador de eventos."

#### 15.2.3.1. Handler return value

La idea es que no retornen nada.

#### 15.2.3.2. Invocation order

"Un **objetivo de evento** puede tener más de un manejador de eventos registrado para un tipo de evento en particular. Cuando ocurre un evento de ese tipo, el navegador invoca todos los manejadores en el **orden en el que fueron registrados**. Curiosamente, esto es cierto incluso si mezclas manejadores registrados con `addEventListener()` con un manejador de eventos registrado en una propiedad de objeto como `onclick`."

### 15.2.4 Event Propagation

La burbuja de invokacion es que si se le da click a un elemento, se va a mirar si los elementos ancestros tambien tiene un click y se van a disparar también.

"La **propagación de eventos** (o *event bubbling*) proporciona una alternativa a registrar manejadores en muchos elementos individuales del documento: en su lugar, puedes registrar un único manejador en un elemento ancestro común y gestionar los eventos allí. Por ejemplo, podrías registrar un manejador 'change' en un elemento `<form>`, en lugar de registrar un manejador 'change' para cada elemento dentro del formulario."

“focus,” “blur,” and “scroll” events no entran en esta burbuja.

* Tambien se tiene event capturing que es diferente a event propagation y diferente a bubble up event.

Hay tres faces en la propagacion de eventos

* "Capturing" fase
* invocation of the event handlers of the target object itself
* Event bubbling

### 15.2.5 Event Cancellation

El preventDefault() evita que muchos eventos que el navegador dispara automaticamente, no se disparen. tambien esta el stopPropaga
tion().

### 15.2.6 Dispatching Custom Events

```javascript
// Dispatch a custom event so the UI knows we are busy
document.dispatchEvent(new CustomEvent("busy", { detail: true }));
// Perform a network operation
fetch(url)
.then(handleNetworkResponse)
.catch(handleNetworkError)
.finally(() => {
// After the network request has succeeded or failed, dispatch
// another event to let the UI know that we are no longer busy.
document.dispatchEvent(new CustomEvent("busy", { detail: false }));
});
// Elsewhere, in your program you can register a handler for "busy" events
// and use it to show or hide the spinner to let the user know.
document.addEventListener("busy", (e) => {
if (e.detail) {
showSpinner();
} else {
hideSpinner();
}
});
```

## 15.3 Scripting Documents

"Cada objeto **Window** tiene una propiedad `document` que hace referencia a un objeto **Document**.

La manipulación del DOM se trata en este capítulo:

* **Cómo consultar o seleccionar** elementos individuales de un documento.
* **Cómo recorrer** un documento y cómo encontrar los **ancestros, hermanos y descendientes** de cualquier elemento del documento.
* **Cómo consultar y establecer** los atributos de los elementos del documento.
* **Cómo consultar, establecer y modificar** el contenido de un documento.
* **Cómo modificar la estructura** de un documento creando, insertando y eliminando nodos."

Conceptos clave de esta sección:

Para entender mejor el segundo punto (recorrer el documento), recuerda que el DOM se organiza como un árbol genealógico:

* **Ancestros:** Elementos que contienen al elemento actual (padres, abuelos).
* **Hermanos (Siblings):** Elementos que comparten el mismo padre.
* **Descendientes:** Elementos contenidos dentro del actual (hijos, nietos).

### 15.3.1 Selecting Document Elements

Como seleccionar los elementos dentro del document que sale de Document.

#### 15.3.1.1. Selecting elements with CSS selectors

El método `querySelector()` es extremadamente potente porque utiliza la misma sintaxis que los **selectores de CSS**. Aquí tienes un ejemplo de cada tipo principal que puedes usar como argumento:

1. Selector de Etiqueta (Tipo)

    Selecciona el primer elemento que sea de ese tipo de etiqueta HTML.

    ```javascript
    // Selecciona el primer párrafo (<p>) que encuentre
    const primerParrafo = document.querySelector("p");
    ```

2. Selector de Clase

    Busca elementos que tengan una clase específica (usa el punto `.`).

    ```javascript
    // Selecciona el primer elemento con la clase "menu-item"
    const item = document.querySelector(".menu-item");
    ```

3. Selector de ID

    Busca el elemento único con ese ID (usa el hash `#`).

    ```javascript
    // Selecciona el elemento con id="main-header"
    const header = document.querySelector("#main-header");
    ```

4. Selector de Atributo

    Selecciona elementos basados en sus atributos (como `type`, `name`, `href`, etc.).

    ```javascript
    // Selecciona el primer input de tipo "email"
    const inputEmail = document.querySelector('input[type="email"]');
    ```

5. Selectores Combinados (Descendientes e Hijos)

    * **Descendiente (espacio):** Busca cualquier nivel de profundidad.
    * **Hijo directo (`>`):** Solo busca inmediatamente dentro del padre.

    ```javascript
    // Cualquier <span> que esté dentro de un <div>
    const spanInterno = document.querySelector("div span");

    // Solo el <li> que sea hijo directo de un <ul>
    const itemLista = document.querySelector("ul > li");
    ```

6. Pseudo-clases

    Permiten seleccionar elementos basados en su estado o posición.

    ```javascript
    // Selecciona el primer elemento de una lista
    const primero = document.querySelector("li:first-child");

    // Selecciona un input que esté deshabilitado
    const deshabilitado = document.querySelector("input:disabled");
    ```

7. Selector Múltiple (Grupo)

    Puedes buscar varios tipos a la vez y te devolverá el primero que encuentre de cualquiera de ellos.

    ```javascript
    // Selecciona el primer <h1> o el primer <h2> que aparezca en el DOM
    const titulo = document.querySelector("h1, h2");
    ```

**Nota importante:** Recuerda que `querySelector()` solo devuelve el **primer** elemento que coincida. Si necesitas obtener todos los que coincidan, debes usar `querySelectorAll()`, que devuelve una lista (NodeList).

#### 12.3.1.2. querySelectorAll()

El detalle clave con `querySelectorAll()` es que, a diferencia de `querySelector()` que te da un solo elemento, este te entrega una **colección**. Esa colección es un **NodeList**.

Aquí tienes lo esencial que debes saber sobre este objeto:

¿Qué es un NodeList?

Es un objeto que representa una **colección de nodos**. Aunque parece un Array (arreglo) porque tiene índices y una propiedad `.length`, **no es un Array de JavaScript**. Se le conoce como un objeto "Array-like" (similar a un arreglo).

Características fundamentales

* **Es Estático (Static):** Esta es la característica más importante. El NodeList que devuelve `querySelectorAll` es una "foto" del DOM en el momento de la consulta. Si después de hacer la búsqueda borras o añades elementos al documento, el NodeList **no se actualizará**; seguirá teniendo los mismos elementos que cuando lo creaste.
* **Es Iterable:** Puedes recorrerlo directamente usando el método `.forEach()`, lo cual es muy cómodo:

```javascript
const botones = document.querySelectorAll("button");
botones.forEach(boton => {
    boton.style.backgroundColor = "blue";
});

```

* **Acceso por índice:** Puedes acceder a los elementos usando corchetes, igual que en un arreglo: `lista[0]`, `lista[1]`, etc.

NodeList vs. Array (Diferencias clave)

| Característica | NodeList | Array (`[]`) |
| --- | --- | --- |
| **`.length`** | Sí | Sí |
| **`.forEach()`** | Sí (en navegadores modernos) | Sí |
| **Métodos como `.map()`, `.filter()`, `.reduce()**` | **No** (debes convertirlo primero) | Sí |

> **Tip Pro:** Si necesitas usar métodos de array potentes (como `.filter()` o `.map()`), puedes convertir tu NodeList en un Array real muy fácil usando el operador spread:
> `const arrayReal = [...miNodeList];`

¿Por qué importa que sea un NodeList?

A diferencia de otros métodos antiguos como `getElementsByTagName` (que devuelven un `HTMLCollection` que es "vivo" y cambia solo), el NodeList estático de `querySelectorAll` es **más seguro y predecible** para programar, porque los elementos no desaparecen de tu variable "mágicamente" mientras trabajas con ellos.

#### 15.3.1.3. Other element selection methods

"Además de `querySelector()` y `querySelectorAll()`, el DOM también define una serie de métodos de selección de elementos más antiguos que están más o menos obsoletos en la actualidad. Sin embargo, es posible que todavía veas algunos de estos métodos en uso (especialmente `getElementById()`):

```javascript
// Busca un elemento por id. El argumento es solo el id, sin
// el prefijo de selector CSS #. Similar a document.querySelector("#sect1")
let sect1 = document.getElementById("sect1");

// Busca todos los elementos (como casillas de verificación de formularios) que tengan un
// atributo name="color". Similar a document.querySelectorAll('*[name="color"]');
let colors = document.getElementsByName("color");

// Busca todos los elementos <h1> en el documento.
// Similar a document.querySelectorAll("h1")
let headings = document.getElementsByTagName("h1");

// getElementsByTagName() también está definido en los elementos.
// Obtiene todos los elementos <h2> dentro del elemento sect1.
let subheads = sect1.getElementsByTagName("h2");

// Busca todos los elementos que tengan la clase "tooltip."
// Similar a document.querySelectorAll(".tooltip")
let tooltips = document.getElementsByClassName("tooltip");

// Busca todos los descendientes de sect1 que tengan la clase "sidebar"
// Similar a sect1.querySelectorAll(".sidebar")
let sidebars = sect1.getElementsByClassName("sidebar");

```

Al igual que `querySelectorAll()`, los métodos en este código devuelven un **NodeList** (excepto `getElementById()`, que devuelve un único objeto **Element**). Sin embargo, a diferencia de `querySelectorAll()`, los NodeLists devueltos por estos métodos de selección más antiguos son **"vivos" (live)**, lo que significa que la longitud y el contenido de la lista pueden cambiar si el contenido o la estructura del documento cambian."

Un detalle importante:

Como mencionamos antes, el **NodeList** de `querySelectorAll` es una "foto" (estático), pero los que devuelven estos métodos antiguos (`getElementsBy...`) están conectados directamente al DOM. Si añades un nuevo `<h1>` al documento, la variable `headings` del ejemplo se actualizará sola automáticamente.

#### 15.3.1.4. Preselected elements

"Por razones históricas, la clase `Document` define propiedades de acceso directo (shortcuts) para acceder a ciertos tipos de nodos. Las propiedades `images`, `forms` y `links`, por ejemplo, proporcionan un acceso fácil a los elementos `<img>`, `<form>` y `<a>` (pero solo a las etiquetas `<a>` que tienen un atributo `href`) de un documento. Estas propiedades hacen referencia a objetos **HTMLCollection**, que son muy similares a los objetos **NodeList**, pero que adicionalmente pueden indexarse por el **ID** o el **nombre (name)** del elemento. Con la propiedad `document.forms`, por ejemplo, puedes acceder a la etiqueta `<form id="address">` de la siguiente manera:

`document.forms.address;`"

Nota rápida sobre la `HTMLCollection`:

A diferencia del `NodeList` que vimos antes, la **HTMLCollection** tiene una característica especial: permite el **acceso con nombre**.

Si tienes un formulario con `name="login"`, puedes llegar a él simplemente escribiendo `document.forms.login`. Esto es lo que el texto llama "indexar por nombre", algo que no se puede hacer directamente con un NodeList estándar de `querySelectorAll`.

¿Deseas que sigamos con el siguiente fragmento del capítulo? Podríamos ver ahora cómo **recorrer el árbol de nodos** (ancestros y descendientes).

### 15.3.2 Document Structure and Traversal

Despues de programaticamente seleccionar un elemento, se tiene a disposicion un set de propiedades para seleccionar padres o hijos.

Propiedades de Navegación de Elementos

* **`parentNode`**
Esta propiedad de un elemento hace referencia al padre del elemento, el cual será otro objeto `Element` o un objeto `Document`.
* **`children`**
Esta `NodeList` contiene los elementos hijos de un elemento, pero excluye a los hijos que no son elementos, como los nodos de texto (nodos `Text`) y los de comentario (nodos `Comment`).
* **`childElementCount`**
El número de hijos que son elementos. Devuelve el mismo valor que `children.length`.
* **`firstElementChild`, `lastElementChild**`
Estas propiedades hacen referencia al primer y último elemento hijo de un elemento. Valen `null` si el elemento no tiene hijos que sean elementos.
* **`nextElementSibling`, `previousElementSibling**`
Estas propiedades hacen referencia a los elementos hermanos inmediatamente anteriores o posteriores a un elemento, o `null` si no existe tal hermano.

Un pequeño recordatorio:

Es importante notar que estas propiedades tienen la palabra **"Element"** en su nombre. Esto es clave porque te aseguran que solo estás saltando entre etiquetas HTML (como `<div>`, `<h1>`, etc.), ignorando los espacios en blanco o saltos de línea que el navegador interpreta como "nodos de texto".

#### 15.3.2.1. Documents as trees of nodes

Aquí tienes la traducción de estas propiedades que pertenecen a todos los objetos **Node** (nodos).

Es importante notar que, a diferencia del fragmento anterior que hablaba solo de "Elements" (etiquetas HTML), este habla de "Nodes", lo que incluye también texto, comentarios y el documento mismo.

Propiedades de todos los objetos Node

* **`parentNode`**
El nodo que es el padre de este, o `null` para nodos como el objeto `Document` que no tienen padre.
* **`childNodes`**
Una `NodeList` de solo lectura que contiene **todos** los hijos (no solo los hijos de tipo Element) del nodo.
* **`firstChild`, `lastChild**`
El primer y último nodo hijo de un nodo, o `null` si el nodo no tiene hijos.
* **`nextSibling`, `previousSibling**`
Los nodos hermanos siguiente y anterior de un nodo. Estas propiedades conectan los nodos en una **lista doblemente enlazada**.
* **`nodeType`**
Un número que especifica qué tipo de nodo es este. Los nodos `Document` tienen el valor **9**. Los nodos `Element` tienen el valor **1**. Los nodos `Text` tienen el valor **3**. Los nodos `Comment` tienen el valor **8**.
* **`nodeValue`**
El contenido textual de un nodo de tipo `Text` (texto) o `Comment` (comentario).
* **`nodeName`**
El nombre de la etiqueta HTML de un `Element`, convertido a mayúsculas (por ejemplo: "DIV", "P", "SECTION").

¡Ojo con la diferencia!

Es muy común confundirse entre las propiedades del mensaje anterior y estas:

* `children` (del mensaje anterior) solo te da las **etiquetas HTML**.
* `childNodes` (de este mensaje) te da **todo**, incluyendo los espacios en blanco y saltos de línea que hay en tu código HTML, los cuales interpreta como nodos de tipo `Text`.

### 15.3.3 Attributes

Los atributos en html es un set de claves=valor que se pueden adiconar a elementos html con el fin de darles datos de configuracion del html.

Aquí tienes la traducción:

"La clase `Element` define los métodos generales **`getAttribute()`**, **`setAttribute()`**, **`hasAttribute()`** y **`removeAttribute()`** para consultar, establecer, probar y eliminar los atributos de un elemento. Sin embargo, los valores de los atributos de los elementos HTML (para todos los atributos estándar de los elementos HTML estándar) están disponibles como **propiedades** de los objetos `HTMLElement` que representan a esos elementos, y generalmente es mucho más fácil trabajar con ellos como propiedades de JavaScript que llamar a `getAttribute()` y sus métodos relacionados."

Ejemplo rápido para aclarar el texto:

El texto te dice que tienes dos caminos para hacer lo mismo:

1. **Usando métodos (Más formal):**
`element.setAttribute("id", "mi-id");`
2. **Usando propiedades (Más fácil/común):**
`element.id = "mi-id";`

Un par de excepciones importantes:

Aunque el texto dice que es "más fácil", hay dos casos donde suelen usarse los métodos:

* **Atributos personalizados:** Si creas un atributo que no existe en HTML (ej. `<div mi-dato="123">`), JavaScript no lo creará automáticamente como propiedad, así que tendrías que usar `getAttribute("mi-dato")`.
* **El atributo `class`:** Como `class` es una palabra reservada en JS, la propiedad se llama `className` (aunque hoy en día usamos más `classList`).

#### 15.3.3.1. HTML attributes as element properties

No solo se pueden inyectar estos atributos directamente en el html, tambien en javascipt en forma de propiedades de objeto:

```js
let image = document.querySelector("#main_image");
let url = image.src; // The src attribute is the URL of the image
image.id === "main_image" // => true; we looked up the image by id
```

```js
let f = document.querySelector("form"); // First <form> in the document
f.action = "https://www.example.com/submit"; // Set the URL to submit it to.
f.method = "POST"; // Set the HTTP request type.
```

#### 15.3.3.2. The class attribute

El el que inyecta el css en el html

De la siguiente forma es que se puede hacer en javascript:

```js
// When we want to let the user know that we are busy, we display
// a spinner. To do this we have to remove the "hidden" class and add the
// "animated" class (assuming the stylesheets are configured correctly).
let spinner = document.querySelector("#spinner");
spinner.classList.remove("hidden");
spinner.classList.add("animated");
```

#### 15.3.3.3. Dataset attributes
