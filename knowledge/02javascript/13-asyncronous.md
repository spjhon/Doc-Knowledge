---
sidebar_position: 15
---

# 13. Asynchronous JavaScript

Sin embargo, la mayoría de los programas informáticos del mundo real son significativamente **asíncronos**. Los programas de JavaScript en un navegador web suelen estar impulsados por **eventos** (*event-driven*).

Para manejar esta complejidad asíncrona de manera más clara, JavaScript introdujo las siguientes herramientas:

- **Promesas** (**`Promises`**)
  - Nuevas en ES6, son objetos que representan el resultado aún no disponible de una operación asíncrona.
- **Las palabras clave `async` y `await`**
  - Se introdujeron en ES2017 y proporcionan una nueva sintaxis que simplifica la programación asíncrona al permitirte estructurar tu código basado en Promesas como si fuera sincrónico.
- **Iteradores asíncronos y el bucle `for/await`**
  - Te permiten trabajar con flujos de eventos asíncronos utilizando bucles simples que parecen sincrónicos.

El concepto fundamental que sustenta la programación asíncrona moderna es la **Promesa**. ¿Te gustaría que te explique los tres estados por los que pasa una Promesa (`pending`, `fulfilled`, `rejected`)?

## 13.1. Asynchronous Programming with Callbacks

A su nivel más fundamental, la programación **asíncrona** en JavaScript se realiza con **callbacks** (o *devoluciones de llamada*).

Un **callback** es una función que escribes y luego pasas a alguna otra función. Esa otra función luego invoca (o "llama de vuelta" a) tu función cuando se cumple alguna condición o ocurre algún **evento asíncrono**.

La invocación de la función *callback* que proporcionas te notifica de la condición o evento, y a veces, la invocación incluirá argumentos de función que proporcionan detalles adicionales.

Esto es más fácil de entender con algunos ejemplos concretos, y las subsecciones siguientes demuestran varias formas de programación asíncrona basada en *callbacks* utilizando tanto JavaScript del lado del cliente como Node.

### 13.1.1. Timers

```javascript
// Call checkForUpdates in one minute and then again every minute after that
let updateIntervalId = setInterval(checkForUpdates, 60000);
// setInterval() returns a value that we can use to stop the repeated
// invocations by calling clearInterval(). (Similarly, setTimeout()
// returns a value that you can pass to clearTimeout())
function stopCheckingForUpdates() {
  clearInterval(updateIntervalId);
}
```

### 13.1.2. Events

- Client-side JavaScript programs are almost universally event driven

Se utiliza el addEventListener() para crear un detector de eventos desde el browser

```javascript
// Ask the web browser to return an object representing the HTML
// <button> element that matches this CSS selector
let okay = document.querySelector("#confirmUpdateDialog button.okay");
// Now register a callback function to be invoked when the user
// clicks on that button.
okay.addEventListener("click", applyUpdate);
```

### 13.1.3. Network Events

Another common source of asynchrony in JavaScript programming is network requests.

En la pagina 343 se tiene un pequeño ejemplo de como por medio de callback y `XMLHttpRequest()` se puede crear una funcion que responda apenas el state de un recibimiento de datos pase a `200`.

Explica que para network request se utiliza una especie de `addEventListener()` pero por ser una operacion asyncrona mejor se asigna a las propiedades de `XMLHttpRequest()` y asi ejecutar una funcion `callback()` que va a llevar la respuesta a donde se necesite.

En lugar de usar `addEventListener()` como con otros eventos en JavaScript, XMLHttpRequest permite asignar funciones de callback directamente a propiedades del objeto, como onload, onerror y ontimeout. Estas propiedades manejan eventos específicos:

- onload: Se ejecuta cuando la solicitud se completa con éxito.
- onerror: Se ejecuta cuando hay un error en la solicitud.
- ontimeout: Se ejecuta cuando la solicitud supera el tiempo máximo de espera.

### 13.1.4. Callbacks and Events in Node

The Node.js server-side JavaScript environment is deeply asynchronous and defines many APIs that use callbacks and events.

- Node.js tiene una API llamada 'fs' que está hecha para leer archivos del sistema de archivos (file system). Entre las opciones se encuentra fs.readFile, que realiza una operación asíncrona para ejecutar un callback en caso de error (err) o al leer el archivo con éxito.

## 13.2. Promises

A Promise is an object that represents the result of an asynchronous computation. That result may or may not be ready yet.

### 13.2.1. Using Promises

Las promesas son una forma sintactica de hacer operaciones asyncronas en su mayoria HTTP request, entonces el siguiente ejemplo ilustra como su invencion esta pensada para leerse como si fuera lectura humana normal.

```javascript
// Suppose you have a function like this to display a user profile
function displayUserProfile(profile) {
  /* implementation omitted */
}
// Here's how you might use that function with a Promise.
// Notice how this line of code reads almost like an English sentence:
getJSON("/api/user/profile").then(displayUserProfile);
```

#### 13.2.1.1. Handling errors with Promises

```javascript
getJSON("/api/user/profile").then(displayUserProfile, handleProfileError); //aqui se puede observar la funcio que se ejecuta si sale error
```

aunque hay una forma mejor, mas idiomatica:

```javascript
getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);
```

- When discussing JavaScript Promises, the equivalent terms are “fulfilled” and “rejected.”.
- If a Promise is neither fulfilled nor rejected, then it is pending. And once a promise is fulfilled or rejected, we say that it is settled.

Cuando se habla de Promesas en JavaScript, los términos equivalentes son "fulfilled" y "rejected". Si una Promesa no está ni "fulfilled" ni "rejected", entonces está pendiente ("pending"). Y una vez que una promesa está "fulfilled" o "rejected", decimos que está resuelta ("settled"). Cualquier Promesa que esté resuelta ("settled") tiene un valor asociado. Entender el estado "resolved" es una de las claves para una comprensión profunda de las Promesas.

La razón por la que quiero ser preciso con la **terminología de las Promesas** es que las Promesas también pueden ser **resueltas** (*resolved*).

Es fácil confundir este estado *resuelto* con el estado de **cumplida** (*fulfilled*) o con el estado de **establecida** (*settled*), pero no es precisamente lo mismo que ninguno de ellos. 

Comprender el estado **resuelto** es una de las claves para una comprensión profunda de las Promesas, y volveré a él después de que discutamos las **cadenas de Promesas** (*Promise chains*) más adelante.

- Resolve: Cuando se usa el término resolve, se refiere específicamente a que una promesa ha sido completada exitosamente con un valor. Es decir, la promesa está en el estado fulfilled.

- Settled: Una promesa se considera settled cuando ha alcanzado su estado final, ya sea fulfilled o rejected.

- La comprensión del estado "resuelto" depende de las **cadenas de Promesas**.

### 13.2.2. Chaining Promises

One of the most important benefits of Promises is that they provide a natural way to express a sequence of asynchronous operations as a linear chain of `then()` method invocations.

La idea de las promesas es evitar la anidamiento de callbacks entonces no es bueno anidar nada, sino utilizar el `then()`

Let’s return to a simplified form of the original fetch() chain above. If we define the
functions passed to the `then()` invocations elsewhere, we might refactor the code to
look like this:

```javascript
fetch(theURL) // task 1; returns promise 1
  .then(callback1) // task 2; returns promise 2
  .then(callback2); // task 3; returns promise 3
```