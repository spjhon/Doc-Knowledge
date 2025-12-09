---
sidebar_position: 0
---

# Overview

Lenguaje de programación creado para trabajar en conjunto con los lenguajes HTML y CSS para crear código que sea renderizado por medio de un navegador de internet en forma de paginas web que permitan la interactividad del usuario y la transmision y recibimientos de datos de variado tipo desde servidores a nivel mundial.

- **Este MAPA como base del contenido aprendido dividido principalmente con la misma division del libro JavaScript The Definitive Guide y cuando hayan conocimiento de otras fuentes se agregara al final de cada tema**

- **La idea es que este lugar sea un MAPA del conocimiento concreto, correcto y completo de todo JAVASCRIPT mas no un resumen ya que eso seria repetir lo que ya esta en otros lados, la idea es que este texto sirve de guía para llegar a ese conocimiento y al mismo tiempo tener un panorama completo de todo el lenguaje para poder saber que herramientas hay a la mano desde una perspectiva global y si se necesita saber mas sobre una herramienta particular pues que este MAPA diga donde esta el conocimiento mas completo.**

## Referencias y origen de conocimiento

Las fuentes principales para tener la referencia del lenguaje son:

- La [**biblioteca de referencia de javascript de Mozilla**](https://developer.mozilla.org/en-US/docs/Web/JavaScript), esta es la principal referencia del lenguaje pero es difícil de entender y navegar pero esta completa.
- La pagina web de referencia [**w3schools**](https://www.w3schools.com/jsref/default.asp), es una referencia mas amigable pero algo incompleta.
- La pagina Javascript.info que posee un resumen muy destacado del lenguaje [Javascript.info](https://javascript.info/)

- También para cada [**DataType**](https://www.w3schools.com/jsref/default.asp) existe un conjunto de build-in propiedades y métodos que permiten la manipulación de este tipos de [**DataType**](https://www.w3schools.com/jsref/default.asp) sin necesidad de crear funciones u objects especializados.

Sin embargo los dos libros que recorren la teoría y explica de forma comprensiva los recondijos del lenguaje son los siguientes libros:

- **JavaScript The Definitive Guide** by David Flanagan Séptima Edición 2020
- **Secrets of the JavaScript Ninja** by John Resig Segunda Edición 2016

Javascript es relativamente sencillo, la fuente principal del siguiente mapa es el libro JavaScript The Definitive Guide que contiene un recorrido teórico acertado y de forma escalada para entender a fondo el lenguaje al menos teóricamente, las paginas de internet es una fuente de referencia ordenada alfabéticamente pero muy desordenada en un orden correcto para el aprendizaje.

## JavaScript

**Nota:** La estructura de este index tiene como base el libro Javascript the definitive guide que esta a mi parecer bien estructurada para aprender el idioma a profundidad. He de resaltar que el libro solo NO es suficiente para alguien que no ha aprendido totalmente nada sobre lenguajes de programación, recomiendo un crash course como mínimo o un curso completo de udemy que enseñe de forma mas generalizada pero que de una enseñanza básica para luego profundizar con este libro.

## 01 Introducción a Javascript

(Paginas de 1 a 14 del libro)

- Explorando Javascript
- Hellow world
- Un tour por javascript
- En donde se puede correr el lenguaje?

---

## 02 Lexical Structure

(Paginas de 15 a 21 del libro)

Reglas elementales para comenzar a escribir código:

- Case sensitivity, spaces, and line breaks
- Comments
- Literals
- Identifiers and reserved words
- Unicode
- Optional semicolons
- También describe que tipo de line breaks reconoce y como los reconoce y como deben de capitalizarse las keywords

---

## 03 Types, Values and Variables

[**AQUÍ**](https://www.w3schools.com/jsref/jsref_obj_global.asp) Encontrara todos los métodos para aplicar a todos los **DataType** teniendo en cuenta que estos metodos son del window del browser.

(Paginas de 23 a 60 del libro)

- Overview and definitions
- Numbers Type
- Text
- Boolean
- Null and undefined
- Symbols
- The global object
- Immutable Primitive Values and Mutable Object References
- Type convertions
- Variable Declaration, Assignment and Destructuring
- First Class Citizens

---

## 04 Expressions and Operators

(Paginas 61 a 96 del libro)

- Expresiones Primarias
- Inicializadores de objects y arrays
- Definiciones de funciones y expresiones
- Expresiones para acceder a propiedades
- Expresiones de invocación
- Expresiones para crear objects
- Operadores
- Expresiones aritméticas
- Expresiones relacionales
- Expresiones lógicas
- Operadores de asignación
- Expresiones de evaluación
- Operadores misceláneos

## 05 Statements

- Expression Statements
- Compound and Empty Statements
- Condicionales
- Loops
- Jumps
- Miscellaneous Statements
- Declaraciones

## 06 Objects

- Introducción a objetos
- Creando objetos
- Querying and Setting Properties
- Deleting Properties
- Testing Properties
- Enumerando propiedades
- Extendiendo objetos
- Serializing Objects
- Object Methods
- Extended Object Literal Syntax

## 07 Arrays

- Creating Arrays
- Reading and Writing Arrays Elements
- Sparse Arrays
- Array Length
- Adding and Deleting Array Elements
- Iterating Arrays
- Multidimensional Arrays
- Arrays Methods
- Array-Like Objects
- Strings as Arrays

## 08 Functions

- Defining Functions
- Invoking Functions
- Function Arguments and Parameters
- Functions as Values
- Functions as Namespaces
- Closures
- Functions Properties, Methods, and Constructor
- Functional Programming

## 09 Classes

- Classes and Prototypes
- Classes and Constructors
- Clases with the class keyword
- Adding methods to existing classes
- Subclasses

## 10 Modules

- Modules with classes, objects, and closures
- Modules in Node
- Modules in ES6

## 11 Javascript Standard Library

- Sets and Maps
- Typed Arrays and Binary Data
- Pattern Matching with Regular Expressions
- Dates and Times
- Error Classes
- JSON Serialization and Parsing
- The Internationalization API
- The Console API
- URL APIs
- Timers

## 12 Iterators and Generators

- How Iterators Work
- Implementing Iterable Objects
- Generators
- Advanced Generator Features

## 13 Asynchronous JavaScript



### 13.3 async and await



#### 13.3.1 await Expressions

La keyword await en JavaScript se utiliza dentro de funciones declaradas con async para esperar a que una promesa sea resuelta. Su propósito principal es simplificar el manejo de promesas y hacer el código asincrónico más legible y fácil de escribir, similar al código síncrono.

- We use it before the invocation of a function that returns a Promise.
- Todo lo que va despues del await debe de ser una promesa, sino es una promesa lo tomara como una promesa resuelta y devolvera valor que contiene.

#### 13.3.2 async Functions

- **you can only use the await keyword within functions that have been declared with the async keyword.**

```javascript
async function getHighScore() {
  let response = await fetch("/api/user/profile");
  let profile = await response.json();
  return profile.highScore;
}
```

Flujo de Ejecución

Vamos a desglosar el flujo de ejecución cuando se usa async/await:

1. Código síncrono: Todo el código fuera de la función async se ejecuta primero de manera síncrona.

2. Iniciar función async: Cuando se llama a una función async, esta se ejecuta hasta que encuentra un await.

3. Esperar promesa: El await pausa la ejecución de la función async hasta que la promesa que sigue se resuelve o se rechaza. Mientras tanto, el event loop puede continuar ejecutando otro código.

4. Continuar ejecución: Una vez que la promesa se resuelve, la ejecución de la función async se reanuda desde el punto donde se pausó.

#### 13.3.3 Awaiting Multiple Promises

Como el codigo es asyncrono para poner a esperar varias promesas o varios awaits se puede hacer al mismo tiempo en lugar de hacer una secuencia de llamados.

`let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);`

#### 13.3.4 Implementation Details

### 13.4 Asynchronous Iteration

Promises do not work for sequences of asynchronous events, we also cannot use regular async functions and the await statements for these things.

La solucion es el for/await loop

#### 13.4.1 The for/await Loop

Node 12 makes its readable streams asynchronously iterable.

```javascript
const fs = require("fs");
async function parseFile(filename) {
  let stream = fs.createReadStream(filename, { encoding: "utf-8" });
  for await (let chunk of stream) {
    parseChunk(chunk); // Assume parseChunk() is defined elsewhere
    //Like a regular await expression, the for/await loop is Promise-based.
  }
}
```

#### 13.4.2 Asynchronous Iterators

Tener en cuenta como funciona un iterador y las dos diferencias clave entre un iterador y un iterador asincrono.

#### 13.4.3 Asynchronous Generators

#### 13.4.4 Implementing Asynchronous Iterators

Ver y entender ejemplos, colocar algo aca una vez termine de entender.

## 14. Metaprogramming

No muy usados pero aun asi utiles.

- **metaprogramming is writing code to manipulate other code.**

Debido a falta de tiempo este capitulo sera omitido y este es el resumen de las caracteristicas que se explican en este capitulo.

- §14.1 Controlling the enumerability, deleteability, and configurability of object
  properties
- §14.2 Controlling the extensibility of objects, and creating “sealed” and “frozen”
  objects
- §14.3 Querying and setting the prototypes of objects
- §14.4 Fine-tuning the behavior of your types with well-known Symbols
- §14.5 Creating DSLs (domain-specific languages) with template tag functions
- §14.6 Probing objects with reflect methods
- §14.7 Controlling object behavior with Proxy

## 15. JavaScript in Web Browsers

Manipulacion del navegador, el ultimate propuse de javascript:

- Control document content (§15.3) and style (§15.4)
- Determine the on-screen position of document elements (§15.5)
- Create reusable user interface components (§15.6)
- Draw graphics (§15.7 and §15.8)
- Play and generate sounds (§15.9)
- Manage browser navigation and history (§15.10)
- Exchange data over the network (§15.11)
- Store data on the user’s computer (§15.12)
- Perform concurrent computation with threads (§15.13)

### 15.1 Web Programming Basics

#### 15.1.1 JavaScript in HTML `<script>` Tags

[**AQUI**](https://www.w3schools.com/tags/tag_script.asp) informacion mas completa del `<script>` tag.

Se muestra un ejemplo basico de un documento HTML y como utilizar javascript dentro de ese documetno HTML.

#### 15.1.2 The Document Object Model

El famoso DOM, es el arbol que se forma al ejecutarse un documento html y que es manipulable a travez de javascript.

- [Document](https://www.w3schools.com/jsref/dom_obj_document.asp) Document Object
- [Element](https://www.w3schools.com/jsref/dom_obj_all.asp) HTML DOM Elements
- [Attributes](https://www.w3schools.com/jsref/dom_obj_attributes.asp) HTML DOM Attributes
- [Events](https://www.w3schools.com/jsref/dom_obj_event.asp) HTML DOM Events
- [Event Objects](https://www.w3schools.com/jsref/obj_events.asp) HTML DOM Event Objects
- [HTMLCollection](https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp) DOM HTMLCollection
- [Style](https://www.w3schools.com/jsref/dom_obj_style.asp) HTML DOM Style Object (CSS)

- For each HTML tag in the document, there is a corresponding JavaScript Element object.
- And for each run of text in the document, there is a corresponding Text object.
- Una muestra de como funciona desde javascript el DOM es que cada elemento HTML es una subclase: The `<body>` tag, for example, is represented by an instance of HTMLBodyElement, and a `<table>` tag is represented by an instance of HTMLTableElement.

#### 15.1.3 The Global Object in Web Browsers

[**AQUI**] informacion mas detallada de las propiedades y metodos que se encuentran en el GLOBAL.

- There is one global object per browser window or tab (§3.7).
- The global object is where JavaScript’s standard library is defined
- The global object also contains the main entry points of various web APIs.
- The document property represents the currently displayed document.

#### 15.1.4 Scripts Share a Namespace

Ojo con las variables, funciones, clases y todo tipo de declaraciones fuera de modulos u otras funciones, esto acarrea conflictos en el global object al momento de definirse en una pestaña del navegador.

#### 15.1.5 Execution of JavaScript Programs

Two faces:

- In the first phase: The document content is loaded, and the code from `<script>` elements (both inline scripts and external scripts) is run.
- The second phase: This phase is asynchronous and event-driven. If a script is going to participate in this second phase, then one of the things it must have done during the first phase is to register at least one event handler or other callback function that will be invoked asynchronously.
  - During this event-driven second phase, the web browser invokes event handler functions and other callbacks in response to events that occur asynchronously.
- Some of the first events to occur during the event-driven phase are the “DOMContentLoaded” and “load” events.

##### 15.1.5.1 Client-side JavaScript threading model

The web platform defines a controlled form of concurrency called a “web worker.”

##### 15.1.5.2 Client-side JavaScript timeline

We’ve already seen that JavaScript programs begin in a script-execution phase and then transition to an event-handling phase.

- The document.readyState property has the value “loading” at this stage.
- When the document is completely parsed, the document.readyState property changes to “interactive.”

#### 15.1.6 Program Input and Output

Hay varias formas de input:

- The content of the document itself
- User input, in the form of events
- The URL of the document being displayed is available to client-side JavaScript as document.URL y listo para manipulacion.
- The content of the HTTP “Cookie” request header is available to client-side code as document.cookie listo para manipulacion.
- The global navigator property provides access to information about the web browser para poder identificar datos del navegador que se esta utilizando

El output es mas que todo desde los propios elementos del DOM y por medio de la consola o por medio de envios a travez de la red.

#### 15.1.7 Program Errors

Si no hay un catch que agarre errores, los erroes van directo a la consola.

- Existe una propiedad en el global en donde se puede registrar una funcion onerror que lo que hace es tomar un error que haya transversado todo el DOM sin encontrar un catch.

#### 15.1.8 The Web Security Model

The subsections that follow give a quick overview of the security restrictions and issues that you, as a JavaScript programmer, should to be aware of:

##### 15.1.8.1 What JavaScript can’t do

- No puede manipular archivos del sistema
- client-side JavaScript does not have general-purpose networking capabilities.

##### 15.1.8.2 The same-origin policy

It typically comes into play when a web page includes `<iframe>` elements.

- A script can read only the properties of windows and documents that have the same origin as the document that contains the script.

#### 15.1.8.3 Cross-site scripting

Cross-site scripting, or XSS, is a term for a category of security issues in which an attacker injects HTML tags or scripts into a target website.

- In general, the way to prevent XSS attacks is to remove HTML tags from any untrusted data before using it to create dynamic document content.

### 15.2 Events

[**AQUI**](https://www.w3schools.com/jsref/dom_obj_event.asp) informacion mas detallada de todos los eventos presentes en el browser

Client-side JavaScript programs use an asynchronous event-driven programming model.

Anatomia de un evento:

- event type
- event target
- event handler, or event listener
- event object
- event propagation

#### 15.2.1 Event Categories

- Device-dependent input events
- Device-independent input events
- User interface events
- State-change events
- API-specific events

#### 15.2.2 Registering Event Handlers

There are two basic ways to register event handlers.

- La forma antigua era asignarle al object del elemento HTML una propiedad que desencadenara el evento
- La forma mas moderna es asignarlo a travez de un eventListener.

##### 15.2.2.1 Setting event handler properties

Se hace desde adentro de javascript y se invoca el elemento HTML desde el window o desde un queryselector y se le asigna una propiedad de evento y de ahi una funcion que responda al evento, es doloroso cuando menos.

##### 15.2.2.2 Setting event handler attributes

La otra forma es desde el elemento HTML directamente `<button onclick="console.log('Thank you');">Please Click</button>`.

##### 15.2.2.3 addEventListener()

Esta es la forma mas moderna.

Any object that can be an event target—this includes the Window and Document objects and all document Elements—defines a method named addEventListener().

El siguiente código registra dos controladores para el evento “click” en un elemento `<button>`. Observa las diferencias entre las dos técnicas utilizadas:

```javascript
<button id="mybutton">Click me</button>
<script>
let b = document.querySelector("#mybutton");
b.onclick = function() { console.log("Thanks for clicking me!"); };
b.addEventListener("click", () => { console.log("Thanks again!"); });
</script>
```

- Tambien existe el `removeEventListener()`

#### 15.2.3 Event Handler Invocation

Aqui explica un poco el valor del "this" en este contexto

Explica:

1. Event handler argument

   - type
   - target
   - currentTarget
   - timeStamp
   - isTrusted

2. Event handler context
3. Handler return value
4. Invocation order

#### 15.2.4 Event Propagation

Explica the bubble effect.

- The event handlers of the target’s parent are invoked. Then the handlers registered on the target’s grandparent are invoked.
- Most events that occur on document elements bubble. Notable exceptions are the “focus,” “blur,” and “scroll” events.

Hay tres faces en la propagacion de eventos

- "Capturing" fase
- invocation of the event handlers of the target object itself
- Event bubbling

Y se explica el tercer argumento y como este entra en accion sobre alguna de las fases.

#### 15.2.5 Event Cancellation

Explica el uso del `preventDefault()`, el `stopPropagation()` y el `stopImmediatePropagation()`

#### 15.2.6 Dispatching Custom Events

Algo parecido a los dispatch de react que lo que hace es mandar un "action" o un "event" desde algun lado y en algun otro lado del codigo un listen

### 15.3 Scripting Documents

Every Window object has a document property that refers to a Document object.

Manipulacion del DOM se encuentra en este capitulo:

- How to query or select individual elements from a document.
- How to traverse a document, and how to find the ancestors, siblings, and descendants of any document element.
- How to query and set the attributes of document elements.
- How to query, set, and modify the content of a document.
- How to modify the structure of a document by creating, inserting, and deleting nodes.

#### 15.3.1 Selecting Document Elements

A program that wants to manipulate an element embedded more deeply in the document must somehow obtain or select the Element objects that refer to those document elements.

##### 15.3.1.1 Selecting elements with CSS selectors

Informacion acerca de los selectores css, mas informacion en la seccion css de este docuaurio

#### 15.3.2 Document Structure and Traversal

there is a traversal API that allows us to treat a document as a tree of Element objects, ignoring Text nodes that are also part of the document.

- Este ser se puede ver en w3schools ya que sonparte de los metodos del document.
- Documents as trees of nodes.

#### 15.3.3 Attributes

Son los HTML atributes

- HTML attributes as element properties
- The class attribute
- Dataset attributes

#### 15.3.4 Element Content

- Element content as HTML
- Element content as plain text

#### 15.3.5 Creating, Inserting, and Deleting Nodes

#### 15.3.6 Example: Generating a Table of Contents

Hay un moderadamente grande ejemplo que lo que hace es tomar un documento y manupular, indagar y crear nodos que permita crear una tabla de contenido a partir del texto en HTML tags.

### 15.4 Scripting CSS

#### 15.4.1 CSS Classes

#### 15.4.2 Inline Styles

#### 15.4.3 Computed Styles

#### 15.4.4 Scripting Stylesheets

#### 15.4.5 CSS Animations and Events

JavaScript can also be used to monitor the progress of a CSS transition because the web browser fires events at the start and end of a transition.

### 15.5 Document Geometry and Scrolling

The following subsections explain how you can go back and forth between the abstract, tree-based model of a document and the geometrical, coordinate-based view of the document as it is laid out in a browser window.

#### 15.5.1 Document Coordinates and Viewport Coordinates

- Se habla en la diferencia entre el **viewport** y el **document**
- Fundamento de como funciona el scroll

Explica metodos como `getBoundingClientRect()` y `elementFromPoint()`.

- Because document coordinates don’t really work, client-side JavaScript tends to use viewport coordinates.

#### 15.5.2 Querying the Geometry of an Element

Se utiliza el `getBoundingClientRect()` con ciertas limitantes

#### 15.5.3 Determining the Element at a Point

- `elementFromPoint()`

#### 15.5.4 Scrolling

#### 15.5.5 Viewport Size, Content Size, and Scroll Position

### 15.6 Web Components

Basic HTML tags such as `<input>` and `<button>` are inadequate for modern UI designs.

Web components is a browser-native alternative to those frameworks based on **three** relatively recent additions to web standards that allow JavaScript to extend HTML with new tags that work as self-contained, reusable UI components.

#### 15.6.1 Using Web Components

- they are often written as JavaScript modules
- Web components can have attributes just like regular HTML tags can
- Se utilizan los children para utilizar un atributo llamado "slot" para agregarlos
- The slot attribute is an extension to HTML that it is used to specify which children should go where.

#### 15.6.2 HTML Templates

- The HTML `<template>` tag is only loosely related to web components, but it does enable a useful optimization for components that appear frequently in web pages.

- `<template>` tags and their children are never rendered by a web browser and are only
  useful on web pages that use JavaScript.

#### 15.6.3 Custom Elements

#### 15.6.4 Shadow DOM

#### 15.6.5 Example: a `<search-box>` Web Component

### 15.7 SVG: Scalable Vector Graphics

#### 15.7.1 SVG in HTML

#### 15.7.2 Scripting SVG

#### 15.7.3 Creating SVG Images with JavaScript

### 15.8 Graphics in a `<canvas>`

#### 15.8.1 Paths and Polygons

#### 15.8.2 Canvas Dimensions and Coordinates

#### 15.8.3 Graphics Attributes

#### 15.8.4 Canvas Drawing Operations

#### 15.8.5 Coordinate System Transforms

#### 15.8.6 Clipping

#### 15.8.7 Pixel Manipulation

### 15.9 Audio APIs

The HTML `<audio>` and `<video>` tags allow you to easily include sound and videos in your web pages.

#### 15.9.1 The Audio() Constructor

#### 15.9.2 The WebAudio API

### 15.10 Location, Navigation, and History

- [**AQUI**](https://www.w3schools.com/jsref/obj_location.asp) informacion mas detallada acerca del Location Object
- [**AQUI**](https://www.w3schools.com/jsref/obj_navigator.asp) informacion mas detallada acerca del Navigation Object
- [**AQUI**](https://www.w3schools.com/jsref/obj_history.asp) informacion mas detallada acerca del History Object

The location property of both the Window and Document objects refers to the Location object, which represents the current URL of the document displayed in the window, and which also provides an API for loading new documents into the window.

#### 15.10.1 Loading New Documents

If you assign a string to window.location or to document.location, that string is interpreted as a URL and the browser loads it, replacing the current document with a new one.

#### 15.10.2 Browsing History

#### 15.10.3 History Management with hashchange Events

#### 15.10.4 History Management with pushState()

### 15.11 Networking

This section covers three network APIs

- `fetch()`
- Server-Sent Events (or SSE) API
- WebSockets

#### 15.11.1 `fetch()`

For basic HTTP requests, using fetch() is a three-step process

1. Call `fetch()`
2. Get the response object
3. Get the body object

- **The fetch() API is completely Promise-based**

Aquí tienes cómo se ve una solicitud fetch() si usas then() y esperas que la respuesta del servidor a tu solicitud esté en formato JSON.

```javascript
fetch("/api/users/current") // Make an HTTP (or HTTPS) GET request
  .then((response) => response.json()) // Parse its body as a JSON object
  .then((currentUser) => {
    // Then process that parsed object
    displayUserInfo(currentUser);
  });
```

La siguiente seria una forma asyncrona con async y await:

```javascript
async function isServiceReady() {
  let response = await fetch("/api/service/status");
  let body = await response.text();
  return body === "ready";
}
```

##### 5.11.1.1 HTTP status codes, response headers, and network errors

La siguiente es una forma mas completa:

```javascript
fetch("/api/users/current") // Make an HTTP (or HTTPS) GET request.
  .then((response) => {
    // When we get a response, first check it
    if (
      response.ok && // for a success code and the expected type.
      response.headers.get("Content-Type") === "application/json"
    ) {
      return response.json(); // Return a Promise for the body.
    } else {
      throw new Error( // Or throw an error.
        `Unexpected response status ${response.status} or content type`
      );
    }
  })
  .then((currentUser) => {
    // When the response.json() Promise resolves
    displayUserInfo(currentUser); // do something with the parsed body.
  })
  .catch((error) => {
    // Or if anything went wrong, just log the error.
    // If the user's browser is offline, fetch() itself will reject.
    // If the server returns a bad response then we throw an error above.
    console.log("Error while fetching current user:", error);
  });
```

##### 5.11.1.2 Setting request parameters

##### 5.11.1.3 Setting request headers

Para autorizaciones

##### 5.11.1.4 Parsing response bodies

##### 5.11.1.5 Streaming response bodies

##### 5.11.1.6 Specifying the request method and request body

##### 5.11.1.7 File upload with fetch()

##### 5.11.1.8 Cross-origin requests

##### 5.11.1.9 Aborting a request

##### 5.11.1.10 Miscellaneous request options

#### 15.11.2 Server-Sent Events

#### 15.11.3 WebSockets

The WebSocket API is a simple interface to a complex and powerful network protocol.

- when you want to connect to a service using the WebSocket protocol, you specify the service with a URL, just as you would for a web service.

##### 5.11.3.1 Creating, connecting, and disconnecting WebSockets

##### 5.11.3.2 Sending messages over a WebSocket

##### 5.11.3.3 Receiving messages from a WebSocket

##### 5.11.3.4 Protocol negotiation

### 15.12 Storage

Web applications can use browser APIs to store data locally on the user’s computer.

- Web applications can choose the lifetime of the data they store

Metodos de almacenaje:

- Web Storage
- Cookies
- IndexedDB
- **no form of client-side storage should ever be used for passwords, financial account numbers, or other similarly sensitive information**

#### 15.12.1 localStorage and sessionStorage

##### 15.12.1.1 Storage lifetime and scope

- The difference between localStorage and sessionStorage involves the lifetime and scope of the storage.
- The origin of a document is defined by its protocol, hostname, and port.

##### 15.12.1.2 Storage events

#### 15.12.2 Cookies

Las cookies son pequeños archivos de texto que un sitio web puede almacenar en el navegador del usuario. Estas cookies permiten al sitio web recordar información sobre la visita del usuario, lo que puede ser útil para una variedad de propósitos, como mantener al usuario autenticado, recordar preferencias del usuario o realizar un seguimiento de las interacciones del usuario con el sitio web.

1. **Almacenamiento de datos**: Las cookies se utilizan para almacenar datos específicos del usuario en su navegador. Este almacenamiento es limitado en tamaño (generalmente alrededor de 4KB por cookie).
2. **Persistencia**: Las cookies pueden ser persistentes (permanecer en el navegador hasta una fecha de expiración especificada) o de sesión (desaparecer cuando se cierra el navegador).
3. **Seguridad:** Las cookies pueden tener atributos de seguridad como HttpOnly (no accesibles a través de JavaScript) y Secure (solo transmitidas a través de conexiones HTTPS).

##### ¿Para qué sirven las cookies?

1. **Autenticación**: Mantener a los usuarios autenticados entre diferentes páginas del sitio web.
2. **Personalización**: Recordar preferencias del usuario, como el idioma o el tema del sitio.
3. **Seguimiento:** Realizar un seguimiento de las actividades del usuario para análisis o marketing.
   Carritos de compra: Guardar información de los productos seleccionados por el usuario en una tienda en línea.

- The API for manipulating cookies is an old and cryptic one. There are no methods involved: cookies are queried, set, and deleted by reading and writing the cookie property of the Document object using specially formatted strings.

##### 15.12.2.1 Reading cookies

When you read the document.cookie property, it returns a string that contains all the cookies that apply to the current document.

- **Crear una cookie**

```javascript
// Crear una cookie con nombre 'username' y valor 'JohnDoe' que expirará en 7 días
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convertir días a milisegundos
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Uso de la función para crear una cookie
setCookie("username", "JohnDoe", 7);
```

- **Leer una cookie**

```javascript
// Leer el valor de una cookie por su nombre
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Uso de la función para leer la cookie 'username'
const username = getCookie("username");
console.log(username); // Output: 'JohnDoe'
```

- **Borrar una cookie**

```javascript
// Borrar una cookie por su nombre
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Uso de la función para borrar la cookie 'username'
eraseCookie("username");
```

##### 15.12.2.2 Cookie attributes: lifetime and scope

In addition to a name and a value, each cookie has optional attributes that control its lifetime and scope.

##### 15.12.2.3

Storing cookies

#### 15.12.3 IndexedDB

IndexedDB is an object database

#### 15.13 Worker Threads and Messaging

One of the fundamental features of JavaScript is that it is single-threaded: a browser will never run two event handlers at the same time, and it will never trigger a timer while an event handler is running.

- Web browsers very carefully relax the single-thread requirement with the Worker class: instances of this class represent threads that run concurrently with the main thread and the event loop.

- Workers are useful when your application needs to perform computationally intensive tasks.

#### 15.13.1 Worker Objects

#### 15.13.2 The Global Object in Workers

#### 15.13.3 Importing Code into a Worker

#### 15.13.4 Worker Execution Model

#### 15.13.5 postMessage(), MessagePorts, and MessageChannels

#### 15.13.6 Cross-Origin Messaging with postMessage()

#### 15.14 Example: The Mandelbrot Set

This chapter on client-side JavaScript culminates with a long example that demonstrates using workers and messaging to parallelize computationally intensive tasks.

### 15.15 Summary and Suggestions for Further Reading

#### 15.15.2 Performance

#### 15.15.3 Security

#### 15.15.4 WebAssembly

#### 15.15.5 More Document and Window Features

- The Window object defines alert(), confirm(), and prompt() methods that display simple modal dialogues to the user.

- If the user selects text within your document, you can obtain details of that selection with the Window method getSelection() and get the selected text with getSelection().toString(). In some browsers, navigator.clipboard is an object with an async API for reading and setting the content of the system clipboard to enable copy-and-paste interactions with applications outside of the
  browser.

- A little-known feature of web browsers is that HTML elements with a contente ditable="true" attribute allow their content to be edited. The document.exe cCommand() method enables rich-text editing features for editable content.

#### 15.15.6 Events

Usefull events:

#### 15.15.7 Progressive Web Apps and Service Workers

#### 15.15.8 Mobile Device APIs

#### 15.15.10 Media APIs

## 16 Server-Side JavaScript with Node

Node is JavaScript with bindings to the underlying operating system, making it possible to write JavaScript programs that read and write files, execute child processes, and communicate over the network.

### 16.1 Node Programming Basics

How NODE interact with the operative system

#### 16.1.1 Console Output

In web browsers, console.log(), console.warn(), and console.error() typically display little icons next to their output in the developer console to indicate the variety of the log message. Node does not do this, but output displayed with console.error() is distinguished from output displayed with console.log() because console.error() writes to the stderr stream.

#### 16.1.2 Command-Line Arguments and Environment Variables

En Node.js, los "Command-Line Arguments" (argumentos de línea de comandos) y las "Environment Variables" (variables de entorno) son mecanismos que permiten personalizar el comportamiento de una aplicación en tiempo de ejecución. A continuación, se detalla qué son y para qué sirven cada uno de ellos:

- **Command-Line Arguments**

Los argumentos de línea de comandos son parámetros que se pasan a una aplicación Node.js cuando se inicia desde la terminal. Estos argumentos permiten que el usuario proporcione datos adicionales a la aplicación para modificar su comportamiento sin necesidad de cambiar el código.

- **¿Qué son?**

Son los valores que se pasan al ejecutar un script de Node.js desde la línea de comandos. Por ejemplo:

```bash
node app.js arg1 arg2 arg3
```

En este caso, `arg1`, `arg2`, y `arg3` son argumentos de línea de comandos.

- **¿Para qué sirven?**

Sirven para:

- Pasar configuraciones o parámetros específicos a la aplicación sin modificar el código fuente.
- Definir opciones de configuración dinámicas.
- Cambiar el comportamiento del programa según las necesidades del usuario.

- **Cómo acceder a ellos en Node.js:**

En Node.js, los argumentos de línea de comandos se acceden a través del array `process.argv`. El primer elemento (`process.argv[0]`) es la ruta al ejecutable de Node.js, el segundo elemento (`process.argv[1]`) es la ruta al archivo que se está ejecutando, y los elementos subsiguientes son los argumentos pasados.

Ejemplo:

```javascript
console.log(process.argv);
```

Si ejecutas `node app.js arg1 arg2`, la salida será:

```bash
[
  '/usr/local/bin/node',
  '/path/to/app.js',
  'arg1',
  'arg2'
]
```

- **Environment Variables**

Las variables de entorno son pares clave-valor que se establecen fuera del código de la aplicación y que ésta puede leer en tiempo de ejecución. Se utilizan comúnmente para configurar aspectos como conexiones a bases de datos, claves de API, y otras configuraciones sensibles que no deberían estar en el código fuente.

- **¿Qué son?**

Son variables que están definidas en el entorno en el que se ejecuta una aplicación y que pueden ser accedidas por esta para configurar su comportamiento.

- **¿Para qué sirven?**

Sirven para:

- Configurar la aplicación sin necesidad de modificar el código fuente.
- Mantener información sensible (como claves API, contraseñas, y rutas a servicios externos) fuera del código.
- Facilitar el cambio de configuraciones entre diferentes entornos (desarrollo, pruebas, producción).

- **Cómo acceder a ellas en Node.js:**

En Node.js, las variables de entorno se acceden a través del objeto `process.env`.

Ejemplo:

```javascript
console.log(process.env.MY_VARIABLE);
```

Para establecer una variable de entorno y ejecutarla en Node.js, en Unix se hace así:

```bash
MY_VARIABLE=value node app.js
```

En Windows, sería:

```cmd
set MY_VARIABLE=value && node app.js
```

- **Resumen**

- **Command-Line Arguments**: Permiten pasar parámetros directamente desde la línea de comandos al ejecutar la aplicación. Se acceden mediante `process.argv`.
- **Environment Variables**: Permiten definir configuraciones externas que la aplicación puede usar para modificar su comportamiento. Se acceden mediante `process.env`.

Ambos mecanismos son esenciales para crear aplicaciones flexibles y configurables en Node.js, facilitando el desarrollo y el despliegue en diferentes entornos.

#### 16.1.3 Program Life Cycle

The node command expects a command-line argument that specifies the file of Java‐ Script code to be run. This initial file typically imports other modules of JavaScript code, and may also define its own classes and functions.

A Node-based server program that listens for incoming network connections will theoretically run forever because it will always be
waiting for more events.

#### 16.1.4 Node Modules

#### 16.1.5 The Node Package Manager

It helps you download and manage libraries that your program depends on.

### 16.2 Node Is Asynchronous by Default

Node esta hecho para servidores que requieran CPU pero para procesos intensivos en I/O (input output)

- This kind of concurrency is often called event-based concurrency.
- At its core, Node has a single thread that runs an “event loop.”

El event loop es un componente fundamental de Node.js que permite la ejecución de operaciones de entrada y salida (I/O) de manera no bloqueante, es decir, sin detener la ejecución del programa mientras se espera a que estas operaciones finalicen. Aquí te explico cómo funciona el event loop en Node.js:

- **Conceptos Clave**

1. **Single-threaded**: Node.js corre en un solo hilo, lo que significa que tiene un único hilo de ejecución principal. Sin embargo, utiliza múltiples hilos en el fondo (en el pool de hilos) para manejar las operaciones I/O asíncronas.

2. **Asincronía**: La mayor parte de las operaciones en Node.js son asíncronas, lo que significa que no bloquean el hilo principal. Estas operaciones incluyen la lectura/escritura de archivos, las solicitudes de red, las operaciones de bases de datos, etc.

3. **Callbacks**: Cuando se inicia una operación asíncrona, se proporciona un callback (función de retorno) que se ejecutará cuando la operación se complete.

- **Componentes del Event Loop**

El event loop en Node.js tiene varias fases, y cada fase maneja diferentes tipos de callbacks. Aquí están las principales fases:

1. **Timers**: Esta fase maneja la ejecución de callbacks programados por `setTimeout()` y `setInterval()`. Los callbacks se ejecutan cuando el tiempo especificado ha transcurrido.

2. **Pending Callbacks**: Esta fase ejecuta callbacks de ciertas operaciones del sistema, como errores en operaciones de I/O.

3. **Idle, prepare**: Fases internas de Node.js para preparar la ejecución del loop. Generalmente no se utilizan directamente por el usuario.

4. **Poll**: Esta es una de las fases más importantes. Aquí el event loop busca nuevos eventos I/O y ejecuta los callbacks correspondientes. Si no hay nada que hacer, el event loop se quedará en esta fase esperando por nuevos eventos.

5. **Check**: En esta fase se ejecutan los callbacks programados por `setImmediate()`.

6. **Close Callbacks**: Aquí se manejan los callbacks de cierre de operaciones, como `socket.on('close', ...)`.

- **Funcionamiento del Event Loop**

1. **Inicio de Operación**: Cuando se inicia una operación asíncrona (por ejemplo, leer un archivo), Node.js delega esta operación a su sistema de operaciones en segundo plano (libuv).

2. **Callback en Cola**: Una vez que la operación se completa, el callback correspondiente se pone en cola en la fase apropiada del event loop.

3. **Ejecución del Callback**: Durante la ejecución del event loop, Node.js va revisando cada fase en orden. Cuando encuentra callbacks en cola para una fase específica, los ejecuta uno por uno.

- **Ejemplo:**

Veamos un pequeño ejemplo para ilustrar cómo funcionan las distintas fases:

```javascript
setTimeout(() => {
  console.log("Timeout callback");
}, 0);

setImmediate(() => {
  console.log("Immediate callback");
});

console.log("Main script");
```

1. **Main script**: Se ejecuta primero `console.log('Main script')`.

2. **Timers**: El `setTimeout` se programa y su callback se pone en cola para la fase de Timers.

3. **Check**: El `setImmediate` se programa y su callback se pone en cola para la fase de Check.

4. **Event Loop**: Comienza a ejecutar las fases:
   - **Poll**: Si no hay nada en Poll, pasa a la fase de Check.
   - **Check**: Ejecuta el callback de `setImmediate`.
   - **Timers**: Ejecuta el callback de `setTimeout`.

El orden de ejecución sería:

```md
Main script
Immediate callback
Timeout callback
```

Este es un resumen básico de cómo funciona el event loop en Node.js. La comprensión del event loop es crucial para escribir código eficiente y no bloqueante en Node.js.

### 16.3 Buffers

Es un datatype, it is a sequence of bytes instead of a sequence of characters.

- If you write a Node program that actually manipulates binary data, you may find yourself using the Buffer class extensively.

### 16.4 Events and EventEmitter

### 16.5 Streams

#### 16.5.1 Pipes

Sometimes, you need to read data from a stream simply to turn around and write that same data to another stream.

#### 16.5.2 Asynchronous Iteration

#### 16.5.3 Writing to Streams and Handling Backpressure

#### 16.5.4 Reading Streams with Events

### 16.6 Process, CPU, and Operating System Details

### 16.7 Working with Files

#### 16.7.1 Paths, File Descriptors, and FileHandles

#### 16.7.2 Reading Files

#### 16.7.3 Writing Files

#### 16.7.4 File Operations

#### 16.7.5 File Metadata

#### 16.7.6 Working with Directories

### 16.8 HTTP Clients and Servers

### 16.9 Non-HTTP Network Servers and Clients

### 16.10 Working with Child Processes

#### 16.10.1 execSync() and execFileSync()

#### 16.10.2 exec() and execFile()

#### 16.10.3 spawn()

#### 16.10.4 fork()

#### 16.11 Worker Threads

#### 16.11.1 Creating Workers and Passing Messages

#### 16.11.2 The Worker Execution Environment

#### 16.11.3 Communication Channels and MessagePorts

#### 16.11.4 Transferring MessagePorts and Typed Arrays

#### 16.11.5 Sharing Typed Arrays Between Threads

## 17. JavaScript Tools and Extensions

### 17.1 Linting with ESLint

In programming, the term lint refers to code that, while technically correct, is unsightly, or a possible bug, or suboptimal in some way.

- ESLint is fully configurable, and you can define a configuration file that tunes ESLint to enforce exactly the rules you want and only those rules.

One of the reasons that some projects use linters is to enforce a consistent coding style so that when a team of programmers is working on a shared codebase, they use compatible code conventions.

### 17.2 JavaScript Formatting with Prettier

A modern alternative to enforcing code formatting rules via a linter is to adopt a tool like Prettier to automatically parse and reformat all of your code.

### 17.3 Unit Testing with Jest

### 17.4 Package Management with npm

### 17.5 Code Bundling

### 17.6 Transpilation with Babel

### 17.7 JSX: Markup Expressions in JavaScript

### 17.8 Type Checking with Flow
