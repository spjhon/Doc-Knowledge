---
sidebar_position: 17
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

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_promise.asp) Encontrara un resumen de los metodos de las promesas

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

Let’s return to a simplified form of the original fetch() chain above. If we define the functions passed to the `then()` invocations elsewhere, we might refactor the code to look like this:

```javascript
fetch(theURL) // task 1; returns promise 1
  .then(callback1) // task 2; returns promise 2
  .then(callback2); // task 3; returns promise 3
```

### 13.2.3 Resolving Promises

entonces lo que hace el `then()` es que primero invoca el primer callback con el response pero se espera a que se resuelva haciendo de esto una operación asyncrona y cuando esta se resuelve sigue con el siguiente `then()` y asi sucesivamente a travez de todas las funciones que necesiten de un response para ejecutarse.

Un **resolve** que es diferente a un **settled** es que en el "resolve" es el valor del ultimo callback en una cadena de callbacks y que hace que la promesa pase finalmente a estado resolve.

En a pagina 355 hay un diagrama que detalla visualmente una forma mas didáctica de entender las promesas y el encadenamiento `then()`

Algo para entender de la devolución de una cadena de promesas:

- El primer .then() recibe el valor con el que se resolvió la promesa inicial. Su fulfillment handler (o rejection handler) se ejecuta y puede devolver un valor. Si ese handler no devuelve nada, el siguiente .then() recibirá undefined. Cada .then() únicamente recibe el valor devuelto por el handler del .then() anterior, y así sucesivamente.

### 13.2.4 More on Promises and Errors

Con código sincrónico (synchronous), si omites el manejo de errores (error-handling), al menos obtendrás una excepción (exception) y un seguimiento de pila (stack trace) que puedes usar para averiguar qué está fallando. Con código asincrónico (asynchronous), las excepciones (exceptions) no manejadas a menudo no se reportarán, y los errores pueden ocurrir silenciosamente, lo que los hace mucho más difíciles de depurar (debug). La buena noticia es que el método `.catch()` facilita el manejo de errores cuando se trabaja con Promesas (Promises).

Tanto los navegadores como Node.js ofrecen mecanismos para detectar promesas rechazadas que no cuentan con un manejador de errores. En el navegador, puedes usar el evento global unhandledrejection, el cual se dispara cuando una promesa es rechazada y no existe ningún handler .catch() asociado. En Node.js ocurre lo mismo mediante el evento unhandledRejection del objeto process. Estos eventos permiten registrar una función de escucha que actúa como una red de seguridad, capturando cualquier error no manejado en promesas y facilitando su rastreo, logging o análisis, evitando que errores silenciosos pasen desapercibidos.

El método **`.catch()`** de una Promesa es simplemente una forma abreviada (un *shorthand*) de llamar a **`.then()`** con `null` como primer argumento y una función *callback* de manejo de errores como segundo argumento.

```javascript
p.then(null, c);
p.catch(c);
```

- Ambos manejadores (then(null, errorHandler) y catch(errorHandler)) funcionarán de la misma manera: manejarán el error que ocurre en la Promesa. No están creando un error artificial; simplemente están proporcionando una manera de manejar los errores que ocurren en la Promesa.
- If you add a `.finally()` invocation to your Promise chain, then the callback you pass to `.finally()` will be invoked when the Promise you called it on settles.
- If you need to run some kind of cleanup code
  (such as closing open files or network connections) in either case, a `.finally()` call‐
  back is the ideal way to do that.
- En la pagina 356 hay un buen y realista ejemplo de como hacer un HTTP request con un minimo de manejo de errores.
- Sometimes, in complex network environments, errors can occur more or less at random, and it can be appropriate to handle those errors by simply retrying the asynchronous request.

```javascript
queryDatabase()
  .catch((e) => wait(500).then(queryDatabase)) // On failure, wait and retry
  .then(displayTable)
  .catch(displayDatabaseError);
```

### 13.2.5. Promises in Parallel

A veces, sin embargo, queremos ejecutar varias operaciones asíncronas en paralelo. La función **`Promise.all()`** puede hacer esto.

1. `Promise.all()`

    - La Promesa devuelta por **`Promise.all()`** se **rechaza** (*rejects*) cuando **cualquiera** de las Promesas de entrada es rechazada.
    - Si todas se cumplen (*fulfill*), la Promesa resultante se cumple con un *array* de los valores de cumplimiento.

2. `Promise.allSettled()`

    - **`Promise.allSettled()`** toma un *array* de Promesas de entrada y devuelve una Promesa.
    - **Nunca rechaza** la Promesa devuelta.
    - No cumple esa Promesa hasta que **todas** las Promesas de entrada se hayan **establecido** (*settled*, es decir, ya estén cumplidas o rechazadas).
    - La Promesa resultante se cumple con un *array* de objetos que describen el estado y el valor/razón de cada Promesa de entrada.

### 13.2.6. Making Promises

You use the `Promise()` constructor to create a new Promise object that you have complete control over.

El código que has proporcionado define una función wait que devuelve una promesa que se resuelve después de una cierta cantidad de tiempo (especificada en milisegundos).

```javascript
function wait(duration) {
  // Crear y devolver una nueva Promesa
  return new Promise((resolve, reject) => {
    // Estos controlan la Promesa
    // Si el argumento es inválido, rechazar la Promesa
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }

    // De lo contrario, esperar asincrónicamente y luego resolver la Promesa.
    // setTimeout invocará resolve() sin argumentos, lo que significa
    // que la Promesa se cumplirá con el valor undefined.
    setTimeout(resolve, duration);
  });
}
```

Como usar la promesa

```javascript
wait(1000)
  .then(() => {
    console.log("1 second has passed");
  })
  .catch((error) => {
    console.error(error);
  });
```

Promises based on synchronous values:

Es simple, el valor pasa de inmediato a la resolución ya sea que se invoke con resolve(42) o rejected(42)

Promises from scratch:

Recordar que se crea con el famoso EXECUTOR.

### 13.2.7. Promises in Sequence

Hay un ejemplo en la pagina 366 que explica como se hace una secuencia de fetchs que se debe de hacer uno y luego otro y que toca utilizar ese patron con promesas puras ya que con loops no funciona. Con async await el loop si funciona.

## 13.3 async and await

**async and await** son keywords in javascript desde ES2017

**Párrafo resumen:**

La diferencia fundamental entre usar `.then()` y `await` es que con `.then()` el valor resultante de una promesa solo existe dentro del callback del propio `then`, lo que fragmenta la lógica y obliga a anidar o encadenar funciones. En cambio, `await` detiene la función async hasta que la promesa se resuelve y te entrega el resultado en una variable normal, permitiendo usarla libremente en el resto del código de forma secuencial y mucho más clara.

**Ejemplo con `.then()`**

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    // Aquí tengo acceso a response
    return response.json(); // Devuelve otra promesa
  })
  .then(data => {
    // Aquí tengo acceso a los datos transformados
    console.log("Título:", data.title);
    // Pero fuera de este callback ya no puedo usar data
  });

// ❌ Aquí no tengo acceso a "data"
```

---

### **Ejemplo con `await`**

```js
async function demo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // Aquí ya tengo el response disponible

  const data = await response.json();
  // "data" es un valor normal, no una promesa

  console.log("Título:", data.title);
  // ✔ Puedo seguir usando data donde quiera dentro de la función
}

demo();
```

### 13.3.1. await Expressions

Esta expresion lo que hace es resolver la promesa y de una vez guardar el valor retornado por la promesa.

Por ejemplo `fetch()` devuelve una promesa que se resuelve en un objeto `Response`, y este objeto llega completamente disponible para leer sus propiedades inmediatas, como `headers`, `status` u `ok`, sin necesidad de esperar más porque esos datos ya vienen incluidos en la respuesta inicial del servidor. Sin embargo, el contenido del cuerpo no está listo todavía: métodos como `response.json()` o `response.text()` leen ese cuerpo y por su naturaleza asíncrona devuelven una nueva promesa, lo que requiere usar `await` o `.then()` para obtener finalmente los datos procesados. En resumen, el `Response` llega listo, pero cualquier operación que implique consumir el body genera otra promesa que debe esperarse.

### 13.3.2. Async Functions

La palabra clave `async` le indica a JavaScript que la función devolverá automáticamente una promesa y que dentro de ella se podrá usar `await` para pausar la ejecución *solo dentro de ese mismo cuerpo*, mientras el resto del programa continúa normalmente. Esto significa que cualquier valor obtenido mediante `await` estará disponible únicamente después de que la operación asíncrona termine, y por eso el código externo a la función no puede leer esas variables de inmediato ni depender de ellas sin usar promesas. El código que está fuera de una función `async` nunca “espera” su resultado a menos que también trabaje con promesas, usando `.then()`, `await`, o callbacks que se ejecutan cuando la operación asíncrona finaliza o cuando ocurre un error.

### 13.3.3. Awaiting Multiple Promises

Esta es una forma de hacer que se trabajen las promesas de forma todas al mismo tiempo y no secuencial por medio de un await, por supuesto este código debe de estar dentro de una función async.

let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);

### 13.3.4. Implementation Details

Esto:

```js
async function f(x) { /* body */ }
```

Es equivalente a esto:

```js
function f(x) {
return new Promise(function(resolve, reject) {
try {
resolve((function(x) { /* body */ })(x));
}
catch(e) {
reject(e);
}
});
}
```

## 13.4. Asynchronous Iteration

Tenemos el for/await ya que con promesas comunes no se pueden hacer un loop debido a que la promesa es algo puntual y la cadena de thens no esta diseñada para loops en constante iteración.

### 13.4.1 The for/await Loop

Node 12 hace que sus *streams* legibles (*readable streams*) sean **asíncronamente iterables**.

Esto significa que puedes leer fragmentos sucesivos de datos de un *stream* con un bucle **`for await...of`** como este:

```javascript
const fs = require("fs");

async function parseFile(filename) {
    let stream = fs.createReadStream(filename, { encoding: "utf-8"});
    
    // El bucle pausa y espera a que cada 'chunk' esté disponible de forma asíncrona
    for await (let chunk of stream) {
        parseChunk(chunk); // Asumimos que parseChunk() está definida en otro lugar
    }
}
```

Aquí se observa que cada vuelta en el loop es una espera que se resuelve bien o mal o de acuerdo a como se desee.

```javascript
const urls = [url1, url2, url3];

const promises = urls.map(url => fetch(url));

for(const promise of promises) {
response = await promise;
handle(response);
}
```

Aqui observamos como se puede hacer fetch a todo un array de urls de forma secuencial.

### 13.4.2 Asynchronous Iterators

Un objeto **asíncronamente iterable** (*asynchronously iterable*) implementa un método con el nombre simbólico **`Symbol.asyncIterator`** en lugar de `Symbol.iterator`.

(Como vimos anteriormente, `for await...of` es compatible con los objetos iterables regulares, pero prefiere los objetos asíncronamente iterables e intenta usar el método `Symbol.asyncIterator` antes de intentar usar el método `Symbol.iterator`).

En segundo lugar, el método **`next()`** de un iterador asíncrono devuelve una **Promesa que se resuelve** en un objeto de resultado de iteración, en lugar de devolver un objeto de resultado de iteración directamente.

📝 Resumen de la Diferencia Clave

La diferencia fundamental entre la iteración síncrona y la asíncrona radica en la expectativa de **tiempo**:

| Característica | Iteración Síncrona (`for...of`) | Iteración Asíncrona (`for await...of`) |
| :--- | :--- | :--- |
| **Símbolo clave** | `Symbol.iterator` | **`Symbol.asyncIterator`** |
| **Retorno de `.next()`** | Devuelve el objeto de resultado (`{ value, done }`) **directamente**. | Devuelve una **Promesa** que se resuelve en el objeto de resultado. |

Esto permite que el bucle `for await...of` **pause** en cada paso, esperando la llegada asíncrona del siguiente elemento.

### 13.4.3 Asynchronous Generators

Los generadores asyncoronos son poderosos gracias a que no solamente son asyncronos en donde se necesite esperar, sino tambien que con los generators, se puede generar procesos async que vayan en secuencia hasta que el ultimo proceso async termine dadas instruciones externas:

```javascript
// A Promise-based wrapper around setTimeout() that we can use await with.
// Returns a Promise that fulfills in the specified number of milliseconds
function elapsedTime(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
// An async generator function that increments a counter and yields it
// a specified (or infinite) number of times at a specified interval.
async function* clock(interval, max=Infinity) {
for(let count = 1; count <= max; count++) { // regular for loop
await elapsedTime(interval); // wait for time to pass
yield count; // yield the counter
}
}

// A test function that uses the async generator with for/await
async function test() { // Async so we can use for/await
for await (let tick of clock(300, 100)) { // Loop 100 times every 300ms
console.log(tick);
}
}
```

### 13.4.4 Implementing Asynchronous Iterators

Un **iterador asíncrono** es un objeto que implementa el método `next()`, donde **cada llamada a `next()` devuelve una Promesa**. Esto permite que cada paso de la iteración pueda realizar operaciones asíncronas antes de producir el siguiente valor.

En otras palabras:
**el `next()` es el punto donde se ejecuta la lógica asíncrona**, y gracias a que devuelve una Promesa, el iterador puede “pausar” entre iteraciones y reanudar cuando la operación asíncrona termina. Así, el iterador puede producir valores de forma secuencial, tantas veces como se llame a `next()`.

```javascript
function clock(interval, max=Infinity) {
// A Promise-ified version of setTimeout that we can use await with.
// Note that this takes an absolute time instead of an interval.
function until(time) {
return new Promise(resolve => setTimeout(resolve, time - Date.now()));
}
// Return an asynchronously iterable object
return {
startTime: Date.now(), // Remember when we started
count: 1, // Remember which iteration we're on
async next() { // The next() method makes this an iterator
if (this.count > max) { // Are we done?
return { done: true }; // Iteration result indicating done
}
// Figure out when the next iteration should begin,
let targetTime = this.startTime + this.count * interval;
// wait until that time,
await until(targetTime);
// and return the count value in an iteration result object.
return { value: this.count++ };
},
// This method means that this iterator object is also an iterable.
[Symbol.asyncIterator]() { return this; }
};
}
```
