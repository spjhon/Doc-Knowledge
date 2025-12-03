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
