---
sidebar_position: 15
---

# 12. IIterators and Generators

[**AQUI**](https://www.w3schools.com/js/js_iterables.asp) mas información (w3chools) sobre todo lo que sea iterable

```javascript
const arr = ['a', 'b', 'c'];

const it = arr[Symbol.iterator]();

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: "c", done: false }
console.log(it.next()); // { value: undefined, done: true }
```

En JavaScript, un iterable es un objeto que puede recorrerse con una estructura de control que espera una colección de valores, como `for...of` (looped over). Para que un objeto sea iterable, debe implementar el protocolo de iterables y tener un método `Symbol.iterator` que devuelva un objeto iterador. Este iterador debe tener un método `next` que retorne un objeto con dos propiedades: `value` y `done`. La mayoría de los datatype tienen este método iterador, sin embargo hay lugares en donde no como un simple object.

Los iteradores son basicamente formas de iterar sobre lo que se pueda, no solo arrays, sino tambien se ve en destructuracion, con el operador spread (...) y con Maps() y Sets().

Tipos de iterables en JavaScript

- **Arrays**
- **Strings**
- **Maps**
- **Sets**
- **Arguments**
- **NodeLists**
- **Typed Arrays (Uint8Array, Int32Array, etc.)**
- **Generators**
- `new URLSearchParams()`
- `new FormData()`

❌ **COSAS QUE NO SON ITERABLES EN JAVASCRIPT**

- Object literal
- Instancias de clases comunes
- Funciones
- Números
- Booleanos
- Null
- Undefined
- Objetos creados con Object.create(null)
- WeakMap
- WeakSet
- RegExp
- Date

Ejemplos

- **Array**:

  ```javascript
  const array = [1, 2, 3];
  for (const value of array) {
    console.log(value);
  }
  ```

- **String**:

  ```javascript
  const string = "hello";
  for (const char of string) {
    console.log(char);
  }
  ```

- **Map**:

  ```javascript
  const map = new Map([
    ["a", 1],
    ["b", 2],
  ]);
  for (const [key, value] of map) {
    console.log(key, value);
  }
  ```

- **Set**:

  ```javascript
  const set = new Set([1, 2, 3]);
  for (const value of set) {
    console.log(value);
  }
  ```

- **Arguments**:

  ```javascript
  function example() {
    for (const arg of arguments) {
      console.log(arg);
    }
  }
  example(1, 2, 3);
  ```

- **NodeList**:

  ```javascript
  const nodeList = document.querySelectorAll("div");
  for (const node of nodeList) {
    console.log(node);
  }
  ```

- **Typed Array**:

  ```javascript
  const typedArray = new Uint8Array([1, 2, 3]);
  for (const value of typedArray) {
    console.log(value);
  }
  ```

- **Generator**

  ```javascript
  function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }
  const gen = generator();
  for (const value of gen) {
    console.log(value);
  }
  ```

## 12.1. How Iterators Work

for/of loop y el spread operator están optimizados para iteradores.

Están los **objetos iterables**: estos son tipos como **`Array`**, **`Set`** y **`Map`** que pueden ser iterados. En segundo lugar, está el **objeto iterador** en sí, que realiza la iteración. Y en tercer lugar, está el **objeto de resultado de iteración** que contiene el resultado de cada paso de la iteración.

Para que estos tres conceptos funcionen juntos, el **objeto iterador** debe tener un método clave: **`.next()`**.

🧠 Entonces… ¿qué es un iterador?

Un **iterador** es un OBJETO que tiene un método:

```js
next()
```

y cada llamada devuelve:

```js
{ value: ..., done: ... }
```

Ejemplo de iterador:

```js
const iterator = [10, 20][Symbol.iterator]();

iterator.next(); // {value: 10, done: false}
iterator.next(); // {value: 20, done: false}
iterator.next(); // {value: undefined, done: true}
```

➡️ Eso es un iterador, porque implementa **el protocolo de iteración**.

🧠 ¿Y qué es un LOOP entonces?

Un loop como `while`, `for`, `do...while`:

- **No generan valores**
- **No tienen estado interno**
- **No tienen next()**
- **No forman parte del sistema Iterator/Iterable**

Son simplemente:

- Estructuras que ejecutan código repetidamente **mientras una condición sea verdadera**

🧠 ¿Entonces por qué existe confusión?

Porque algunos loops **usan** iteradores detrás de cámaras.

Ejemplos:

✔ `for...of`

Este **sí usa iteradores internamente**.

```js
for (let value of [1,2,3]) {
  console.log(value);
}
```

El engine hace internamente:

```js
const iterator = [1,2,3][Symbol.iterator]();
let result;

while (!(result = iterator.next()).done) {
  let value = result.value;
  console.log(value);
}
```

Pero tú no lo ves.
JavaScript lo hace por ti.

📌 RESUMEN RÁPIDO

| Cosa                                | ¿Es iterador?                   | ¿Usa iteradores?       |
| ----------------------------------- | ------------------------------- | ---------------------- |
| **Iterador**                        | ✅ Sí                            | —                      |
| **Iterable (por ejemplo un array)** | No, pero puede crear iteradores | —                      |
| **for...of**                        | No                              | ✅ Sí                   |
| **for** clásico                     | ❌ No                            | ❌ No                   |
| **while**                           | ❌ No                            | ❌ No                   |
| **do...while**                      | ❌ No                            | ❌ No                   |
| **for await...of**                  | No                              | ✅ Usa iteradores async |

✅ **Regla de Oro ("rule of thumb")**

**Si tú controlas manualmente la iteración (índices, condiciones, contadores), entonces es una *estructura de control*.

Si JavaScript controla la iteración automáticamente, entonces está usando el *protocolo de iteradores*.**

- **Cuando el código parece que “solo avanza” sin que tú manejes índices o lógica de control → está usando iteradores.
- Cuando tú escribes la lógica de avance → es una estructura de control.**

## 12.2. Implementing Iterable Objects

| Tipo                                                       | ¿Es iterable? | ¿Por qué?                    |
| ---------------------------------------------------------- | ------------- | ---------------------------- |
| Object literal `{}`                                        | ❌ No          | No tiene `[Symbol.iterator]` |
| Instancia de clase con `new`                               | ❌ No          | Tampoco lo tiene             |
| Array `[]`                                                 | ✔ Sí          | Sí tiene `[Symbol.iterator]` |
| String `"abc"`                                             | ✔ Sí          | También lo tiene             |
| Map / Set                                                  | ✔ Sí          | Tienen su propio iterador    |
| Cualquier objeto al que TÚ le agregues `[Symbol.iterator]` | ✔ Sí          | Tú lo haces iterable         |

✅ **1. Un object literal NO es iterable**

Un object literal como:

```js
const obj = { a: 1, b: 2 };
```

**NO es iterable** porque NO tiene `[Symbol.iterator]`.

Por eso esto falla:

```js
for (let x of obj) {}   // ❌ TypeError: obj is not iterable
```

Pero sí puedes hacer:

```js
for (let key in obj) {}  // ✔ funciona (pero es otro tipo de loop)
```

**`for...in` ≠ `for...of`**
`for...in` recorre claves de objetos.
`for...of` solo recorre objetos iterables.

✅ **2. Un objeto creado con `new` TAMPOCO es iterable…**

…a menos que **tú lo hagas iterable**.

Ejemplo:

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const p = new Persona("Juan");

for (let x of p) {}   // ❌ TypeError
```

¿Por qué?
Porque **una instancia normal de clase no tiene `[Symbol.iterator]`**.

🧩 **3. ¿Cuándo un objeto (literal o de clase) SÍ es iterable?**

Cuando tú mismo le agregas el método:

```js
[Symbol.iterator]() {
  return {
    next() { ... }
  };
}
```

Ejemplo:

```js
const obj = {
  data: [10, 20, 30],

  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.data[i],
        done: i++ >= this.data.length
      })
    };
  }
};

console.log([...obj]); // ✔ [10, 20, 30]

🚀 **4. Lo mismo para clases**

```js
class Coleccion {
  constructor(...items) {
    this.items = items;
  }

  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.items[i],
        done: i++ >= this.items.length
      })
    };
  }
}

const c = new Coleccion(1, 2, 3);

console.log([...c]);  // ✔ [1, 2, 3]
```

Ahora sí es iterable.

### 12.2.1. “Closing” an Iterator: The Return Method

Si nuestro hipotético iterador de "palabras-en-un-archivo" nunca llega hasta el final, todavía necesita **cerrar el archivo** que abrió.

Por esta razón, los objetos iteradores pueden implementar un método **`return()`** que acompaña al método **`next()`**. Este método se utiliza para realizar la **limpieza de recursos** cuando la iteración se detiene antes de alcanzar el final natural.

### 12.2.2. Para que sirven los Generators?

Es **muy común** preguntarse esto cuando uno aprende generators, iterators y Symbol.iterator:

> “Esto suena interesante, pero… ¿cuándo *realmente* se usa en la práctica?”

La respuesta es que **sí se usan**, pero NO tanto para recorrer datos de APIs JSON (como tú dices).
Se usan para **otras cosas**, más avanzadas y poderosas.

Vamos a ver los **usos reales**, modernos, y relevantes para React/Next.js.

🧠 **PRIMERO: aclaración importante**

En código moderno (React, Next.js), **no necesitas clases para usar generadores**.
Los generadores son solo *funciones especiales*.

```js
function* gen() { ... }
```

Los puedes usar en cualquier proyecto, sin clases ni OOP.

🚀 **LOS 6 USOS REALES DE LAS FUNCIONES GENERADORAS**

1️⃣**Lazy evaluation (generar datos bajo demanda)**

Esto es común en procesamiento de:

- grandes listas
- archivos grandes
- streams
- datos que llegan poco a poco

Ejemplo: generar 1 millón de números sin usar 1 millón de posiciones en RAM:

```js
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let n of range(1, 1_000_000)) {
  // No explota la RAM
}
```

JSON no sirve para esto, porque debes cargar todo el json completo en memoria.

2️⃣**Algoritmos que requieren “pausas”**

Generators permiten **pausar** una función y luego continuar.

Ejemplos reales:

- Máquinas de estados
- Parsers
- Motores de juegos
- Lógica por pasos
- Animaciones / simulaciones

Ejemplo simplificado:

```js
function* processSteps() {
  console.log("Paso 1");
  yield;
  console.log("Paso 2");
  yield;
  console.log("Paso 3");
}
```

Esto NO puede hacerse con funciones normales.

3️⃣**Consumir streams “por piezas” (muy útil en Next.js RSC)**

Next.js con React Server Components usa **streaming** (HTML y payloads)

Para parsear streams y manejar contenido chunk-by-chunk, los generadores son perfectos.

Ejemplo:

```js
async function* fetchLines(url) {
  const res = await fetch(url);
  const reader = res.body.getReader();
  let decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) return;
    yield decoder.decode(value);
  }
}
```

Esto es clave en:

- SSR streaming
- edge functions
- colas de mensajes
- streaming de audio/video

4️⃣* Pipe/Composición de datos (similar a Unix)**

```js
function* filter(iter, fn) {
  for (let x of iter) if (fn(x)) yield x;
}

function* map(iter, fn) {
  for (let x of iter) yield fn(x);
}

const result = [...map(
  filter([1,2,3,4,5], x => x > 2),
  x => x * 10
)];

console.log(result); // [30, 40, 50]
```

Esto es una **tubería (pipeline) sin crear arrays intermedios**.

5️⃣ **Implementar iteradores personalizados sin boilerplate**

Una función generadora hace que un objeto pueda ser iterable **en 1 línea**:

```js
const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

[...obj]; // [1,2,3]
```

Sin generadores, tendrías que crear un objeto con una función next() a mano.
Los generadores evitan ese trabajo.

6️⃣ **Async generators → streams asincrónicos**

En Next, Node, APIs modernas (Web Streams) se usan MUCHÍSIMO.

```js
async function* readChunks(stream) {
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) return;
    yield value;
  }
}
```

Esto es lo que usan:

- ChatGPT APIs (OpenAI)
- APIs de streaming
- fetch() en streaming
- colas como Kafka / RabbitMQ
- archivos grandes
- video/audio streaming

Esto SÍ es muy práctico hoy en día.

🧩 **Entonces… si recibo JSON, no necesito generators, cierto?**

Correcto.

Cuando llamas una API REST y te llega un JSON, eso es:

- un objeto completo
- en memoria
- no necesita lazy evaluation

Allí no necesitas generators.

🧩 **Entonces, ¿para qué aprender todo este rollo?**

Porque los generadores NO son para datos simples JSON.
Son para:

- flujos (streams)
- datasets masivos
- lógica pausada
- parsers
- animaciones
- pipelines de datos
- herramientas de backend
- algoritmos avanzados
- procesamiento chunk-by-chunk

Y sobre todo:

🔥 **Son parte fundamental del protocolo de iteración del lenguaje.**

Incluso si tú no escribes generators muy seguido, **entenderlos te hace entender cómo funcionan:**

- `for…of`
- los arrays
- las strings
- los Maps/Sets
- los iteradores
- el spread `...`
- los async iterators (`for await`)
- streams

🎯 **Resumen final (claro y práctico)**

Los generadores **sí tienen uso real**, pero no para JSONs.

Sirven para:
✔ Lazy evaluation
✔ Streams
✔ Procesamiento chunk-by-chunk
✔ Lógica que se pausa y continúa
✔ Pipelines de datos
✔ Iteradores personalizados sin boilerplate
✔ Async iterators (muy usados hoy en streaming APIs)

No necesitas clases ni OOP para usarlos.
Sí son relevantes en React/Next cuando trabajas con streaming, edge, RSC y backend moderno.

Si quieres, puedo darte:

- Ejemplos reales de generadores usados en Next.js
- Un ejemplo con fetch() streaming
- Un ejemplo con un iterador infinito útil
- Un ejemplo de pipeline estilo Unix usando generators

Dime cuál quieres.

## 12.3. Generators

Un **generador** es un tipo de **iterador** definido con una potente sintaxis nueva de **ES6**; es particularmente útil cuando los valores a iterar no son los elementos de una estructura de datos, sino el resultado de un **cálculo** (*computation*).

Para crear un generador, primero debes definir una **función generadora**. Una función generadora es sintácticamente como una función regular de JavaScript, pero se define con la palabra clave **`function*`** en lugar de `function`. (Técnicamente, no es una nueva palabra clave, sino un `*` después de la palabra clave `function` y antes del nombre de la función).

Cuando invocas una función generadora, en realidad **no** ejecuta el cuerpo de la función, sino que devuelve un **objeto generador**. Este objeto generador es un iterador. Llamar a su método **`next()`** hace que el cuerpo de la función generadora se ejecute desde el inicio (o su posición actual) hasta que encuentra una sentencia **`yield`**.

**`yield`** es nuevo en ES6 y es algo así como una sentencia `return`. El valor de la sentencia `yield` se convierte en el valor devuelto por la llamada a `next()` en el iterador.

💡 Ejemplo de Función Generadora

```javascript
// Una función generadora que produce (yields) el conjunto de primos de un dígito (base 10).
function* oneDigitPrimes() { // Invocar esta función no ejecuta el código,
    yield 2; // sino que solo devuelve un objeto generador. Llamar
    yield 3; // al método next() de ese generador ejecuta
    yield 5; // el código hasta que una sentencia yield proporciona
    yield 7; // el valor de retorno para el método next().
}

// Cuando invocamos la función generadora, obtenemos un generador
let primes = oneDigitPrimes();

// Un generador es un objeto iterador que itera los valores producidos (yielded)
primes.next().value    // => 2
primes.next().value    // => 3
primes.next().value    // => 5
primes.next().value    // => 7
primes.next().done     // => true

// Los generadores tienen un método Symbol.iterator para hacerlos iterables
primes[Symbol.iterator]() // => primes

// Podemos usar generadores como otros tipos iterables
[...oneDigitPrimes()] // => [2,3,5,7]

let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
sum // => 17
```

En este ejemplo, utilizamos una sentencia **`function*`** para definir un generador.

### 12.3.1. Generator Examples

```javascript
//Secuencia infinita de Fibonacci

function* fibonacciSequence() {
 let x = 0, y = 1;
 for(;;) {
 yield y;
 [x, y] = [y, x+y]; // Note: destructuring assignment
 }
}
```

### 12.3.2. yield* and Recursive Generators

Esta generator function recibe varios iterables (strings, arrays, sets, etc.) y produce una secuencia continua de todos sus valores.

```javascript
function* sequence(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

[...sequence("abc", oneDigitPrimes())] //["a", "b", "c", 2, 3, 5, 7]

```

¿Qué significa exactamente yield*?:

- yield* = "itera otro iterable por mí"
- yield → produce un solo valor.

yield* → produce todos los valores de un iterable, delegando la iteración en él.

En otras palabras:

```javascript
yield* iterable;
```

es equivalente a:

```javascript
for (const value of iterable) {
  yield value;
}
```

pero mucho más corto y más claro.

Una forma de verlo mas claro:

```javascript
function* foo() {
  yield* "hola";
  yield* [1,2,3];
}
```

es equivalente a:

```javascript
function* foo() {
  for (const c of "hola") yield c;
  for (const n of [1,2,3]) yield n;
}
```

## 12.4. Advanced Generator Features

El uso más común de las funciones generadoras es crear iteradores, pero la característica fundamental de los generadores es que nos permiten **pausar un cálculo**, **producir resultados intermedios** (*yield intermediate results*) y luego **reanudar el cálculo** más tarde.

Esto significa que los generadores tienen funcionalidades que van más allá de las de los iteradores.

La capacidad de **pausa y reanudación** es lo que hace a los generadores únicos. Una de estas funcionalidades avanzadas es la capacidad de **enviar un valor** de vuelta al generador cuando se llama a **`next()`**.

### 14.4.1. The Return Value of a Generator Function

Una curiosidad es que un generator retorna una pareja final que es el valor que retorna la funcion y el "done", no se deja ver con el yield pero si utilizando el next()

Ejemplo:

```javascript
function* oneAndDone() {
  yield 1;
  return "done";
}
// The return value does not appear in normal iteration.
[...oneAndDone()]; // => [1]

// But it is available if you explicitly call next()
let generator = oneAndDone();
generator.next(); // => { value: 1, done: false}
generator.next(); // => { value: "done", done: true }
// If the generator is already done, the return value is not returned again
generator.next(); // => { value: undefined, done: true }
```

### 14.4.2. The Value of a yield Expression

En la discusión anterior, hemos tratado a **`yield`** como una sentencia que toma un valor pero que no tiene un valor propio. Sin embargo, en realidad, **`yield`** es una **expresión** y puede tener un valor.

Cuando se invoca el método **`next()`** de un generador, la función generadora se ejecuta hasta que llega a una expresión **`yield`**. La expresión que sigue a la palabra clave `yield` se evalúa, y ese valor se convierte en el valor de retorno de la invocación de `next()`. En este punto, la función generadora detiene su ejecución justo en medio de la evaluación de la expresión `yield`.

La próxima vez que se llame al método **`next()`** del generador, el **argumento pasado a `next()`** se convierte en el **valor de la expresión `yield`** que estaba en pausa.

Así, el generador devuelve valores a quien lo llama con **`yield`**, y quien lo llama pasa valores **al generador** con **`next()`**. El generador y quien lo llama son dos flujos de ejecución separados que intercambian valores (y control) de un lado a otro. El siguiente código lo ilustra:

```javascript
function* smallNumbers() {
console.log("next() invoked the first time; argument discarded");
let y1 = yield 1; // y1 == "b"
console.log("next() invoked a second time with argument", y1);
let y2 = yield 2; // y2 == "c"
console.log("next() invoked a third time with argument", y2);
let y3 = yield 3; // y3 == "d"
console.log("next() invoked a fourth time with argument", y3);
return 4;
}
let g = smallNumbers();
console.log("generator created; no code runs yet");
let n1 = g.next("a"); // n1.value == 1
console.log("generator yielded", n1.value);
let n2 = g.next("b"); // n2.value == 2
console.log("generator yielded", n2.value);
let n3 = g.next("c"); // n3.value == 3
console.log("generator yielded", n3.value);
let n4 = g.next("d"); // n4 == { value: 4, done: true }
console.log("generator returned", n4.value);
```

Asi funciona:

generator created; no code runs yet
next() invoked the first time; argument discarded
generator yielded 1
next() invoked a second time with argument b
generator yielded 2
next() invoked a third time with argument c
generator yielded 3
next() invoked a fourth time with argument d
generator returned 4

### 12.4.3. The return() and throw() Methods of a Generator

Hemos visto que puedes recibir valores producidos (*yielded*) o devueltos por una función generadora. Y puedes pasar valores a un generador en ejecución pasándolos cuando llamas al método **`next()`** del generador.

Además de proporcionar entrada a un generador con `next()`, también puedes **alterar el flujo de control** dentro del generador llamando a sus métodos **`return()`** y **`throw()`**.

↩️ Control del Flujo con `return()` y `throw()`

🛑 Método `return()` (Terminación Forzada y Limpieza)

Como sugiere el nombre, llamar a **`generator.return()`** provoca que el generador **devuelva un valor** de inmediato, como si la siguiente sentencia dentro del generador fuera un `return`.

Para el manejo de la limpieza (*cleanup*):

- En el caso de los generadores, no defines un método `return()` personalizado; en su lugar, el código del generador debe usar una sentencia **`try/finally`**.
- El método `return()` incorporado del generador garantiza que el bloque **`finally`** se ejecute cuando el generador es forzado a devolver, asegurando que se realice la limpieza necesaria (como cerrar archivos).

💥 Método `throw()` (Inyección de Excepciones)

Llamar a **`generator.throw(exception)`** nos da una manera de **enviar señales arbitrarias** (en forma de excepciones) a un generador en ejecución.

- Llamar a `throw()` siempre provoca una excepción *dentro* del generador, justo en el punto donde estaba en pausa.
- Si la función generadora está escrita con código de manejo de excepciones (`try/catch`), la excepción no tiene por qué ser fatal, sino que puede ser un medio para **alterar el comportamiento** del generador (por ejemplo, restablecer un contador).

🔗 Delegación con `yield*`

Cuando un generador utiliza **`yield*`** para producir valores de otro objeto iterable (delegando la iteración), los métodos **`next()`**, **`return()`** y **`throw()`** llamados en el generador delegador se pasan a su vez al iterador del objeto iterable subyacente.

Resumen del Protocolo del Iterador

- Todos los iteradores deben tener un método **`next()`**.
- Los iteradores que necesitan limpiar después de una iteración incompleta deben definir un método **`return()`**.
- Cualquier iterador puede definir un método **`throw()`**.

Para garantizar la limpieza, es vital el uso de `try/finally` dentro de los generadores.

### 12.4.4. Final Note About Generators

Los generadores son una **estructura de control generalizada** muy poderosa. Nos dan la capacidad de **pausar** un cálculo con **`yield`** y **reiniciarlo** más tarde en algún momento arbitrario con un valor de entrada arbitrario.

Es posible usar generadores para crear una especie de sistema de **hilos cooperativos** (*cooperative threading*) dentro del código JavaScript de un solo hilo. Y es posible usar generadores para **enmascarar partes asíncronas** de tu programa para que tu código parezca secuencial y sincrónico, aunque algunas de tus llamadas a funciones sean realmente asíncronas y dependan de eventos de la red.

🚨 Advertencia y Solución Moderna

Intentar hacer estas cosas con generadores conduce a un código que es **sorprendentemente difícil de entender** o de explicar.

Sin embargo, se ha hecho, y el único caso de uso realmente práctico ha sido la gestión de código asíncrono. Sin embargo, JavaScript ahora tiene las palabras clave **`async`** y **`await`** (consulta el Capítulo 13) precisamente para este propósito, y **ya no hay ninguna razón** para abusar de los generadores de esta manera.
