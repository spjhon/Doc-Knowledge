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




### 11.4 Dates and Times


#### 11.4.1 Timestamps (marcas de tiempo)



#### 11.4.2 Date Arithmetic



#### 11.4.3. Formatting and Parsing Date Strings



### 11.5. Error Classes



### 11.6. JSON Serialization and Parsing



#### 11.6.1. JSON Customizations



#### 11.7 The Internationalization API

The JavaScript internationalization API consists of the three classes **Intl.NumberFormat**, **Intl.DateTimeFormat**, and **Intl.Collator** that allow us to format numbers (including monetary amounts and percentages), dates, and times in locale-appropriate ways and to compare strings in locale-appropriate ways.

- One of the most important parts of internationalization is displaying text that has been translated into the user’s language.

#### 11.7.1 Formatting Numbers

Aqui se maneja el problema por ejemplo de como se utilizan los signos decimales en diferentes paises, utilizar **Intl.NumberFormat**

- Un par de ejemplos:

```javascript
let euros = Intl.NumberFormat("es", { style: "currency", currency: "EUR" });
euros.format(10); // => "10,00 €": ten euros, Spanish formatting
let pounds = Intl.NumberFormat("en", { style: "currency", currency: "GBP" });
pounds.format(1000); // => "£1,000.00": One thousand pounds, English formatting
```

- Una forma de aplicar formato a un array

```javascript
let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format;
data.map(formatData); // => ["5.0%", "75.0%", "100.0%"]: in en-US locale

let arabic = Intl.NumberFormat("ar", { useGrouping: false }).format;
arabic(1234567890); // => "١٢٣٤٥٦٧٨٩٠"
```

#### 11.7.2. Formatting Dates and Times

El **Intl.DateTimeFormat** es usado para este proposito (el de convertir el Date object a string)

Ejemplos de uso

```javascript
let d = new Date("2020-01-02T13:14:15Z"); // January 2nd, 2020, 13:14:15 UTC
// With no options, we get a basic numeric date format
Intl.DateTimeFormat("en-US").format(d); // => "1/2/2020"

Intl.DateTimeFormat("fr-FR").format(d); // => "02/01/2020"
// Spelled out weekday and month
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
Intl.DateTimeFormat("en-US", opts).format(d); // => "Thursday, January 2, 2020"
Intl.DateTimeFormat("es-ES", opts).format(d); // => "jueves, 2 de enero de 2020"
// The time in New York, for a French-speaking Canadian
opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" };
Intl.DateTimeFormat("fr-CA", opts).format(d); // => "8 h 14"
```

#### 11.7.3. Comparing Strings

Hay que tener cuidado al hacer un re-ordenamiento (sort()) alfabetico ya que en ingles hay un orden de letras que va perfecto con la nomenclatura ASCII pero en otros idiomas no, para eso se tiene un compare() que se adicona al sort() y asi poder hacer un re-ordenamiento acorde.

### 11.8. The Console API

[**AQUI**](https://www.w3schools.com/jsref/api_console.asp) mas informacion acerca de la API console

#### 11.8.1 Formatted Output with Console

Poco conocido pero se le puede dar formato a la consola, basico, pero se puede.

### 11.9. URL APIs

The URL class parses URLs and also allows modification (adding search parameters or altering paths, for example) of existing URLs.

Como utilizarla:

```javascript
//Create a URL object with the URL() constructor
let url = new URL("https://example.com:8000/path/name?q=term#fragment");
url.href; // => "https://example.com:8000/path/name?q=term#fragment"
url.origin; // => "https://example.com:8000"
url.protocol; // => "https:"
url.host; // => "example.com:8000"
url.hostname; // => "example.com"
url.port; // => "8000"
url.pathname; // => "/path/name"
url.search; // => "?q=term"
url.hash; // => "#fragment"
```

#### 11.9.1. Legacy URL Functions

Prior to the definition of the URL API described previously, there have been multiple attempts to support URL escaping and unescaping in the core JavaScript language. The first attempt was the globally defined escape() and unescape() functions, which are now deprecated but still widely implemented. **They should not be used**.

### 11.10 Timers

- **setTimeout() and setInterval()**

**setTimeout():** The first argument to setTimeout() is a function, and the second argument is a number that specifies how many milliseconds should elapse before the function is invoked.

```javascript
setTimeout(() => {
  console.log("Ready...");
}, 1000);
setTimeout(() => {
  console.log("set...");
}, 2000);
setTimeout(() => {
  console.log("go!");
}, 3000);
```

- Both setTimeout() and setInterval() return a value. The returned value is typically a number in web browsers and is an object in Node.
- Here is an example that demonstrates the use of setTimeout(), setInterval(), and clearInterval() to display a simple digital clock with the Console API

```javascript
// Once a second: clear the console and print the current time
let clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleTimeString());
}, 1000);
// After 10 seconds: stop the repeating code above.
setTimeout(() => {
  clearInterval(clock);
}, 10000);
```

## 12 Iterators and Generators

[**AQUI**](https://www.w3schools.com/js/js_iterables.asp) mas informacion (w3chools) sobre todo lo que sea iterable

En JavaScript, un iterable es un objeto que puede recorrerse con una estructura de control que espera una colección de valores, como `for...of` (looped over). Para que un objeto sea iterable, debe implementar el protocolo de iterables y tener un método `Symbol.iterator` que devuelva un objeto iterador. Este iterador debe tener un método `next` que retorne un objeto con dos propiedades: `value` y `done`. La mayoria de los datatype tienen este metodo iterador, sin embargo hay lugares en donde no como un simple object.

### Tipos de iterables en JavaScript

- **Arrays**
- **Strings**
- **Maps**
- **Sets**
- **Arguments**
- **NodeLists**
- **Typed Arrays (Uint8Array, Int32Array, etc.)**
- **Generators**

#### Ejemplos

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

- Iterators can also be used with the ... operator to expand or “spread” an iterable object into an array initializer or function invocation

```javascript
let chars = [..."abcd"]; // chars == ["a", "b", "c", "d"]
let data = [1, 2, 3, 4, 5];
Math.max(...data); // => 5
```

- Iterators can be used with destructuring assignment

### Toold to iterate through iterables

In JavaScript, there are several methods and constructs available for iterating through iterables. Here's a comprehensive list:

1. **`for...of` Loop**: This loop allows you to iterate over iterable objects (like arrays, strings, maps, sets, etc.) using a simple syntax. It automatically handles iteration over each item in the iterable.

   ```javascript
   const array = [1, 2, 3];
   for (const value of array) {
     console.log(value);
   }
   ```

2. **`Array.prototype.forEach()` Method**: This method executes a provided function once for each array element. It's specifically designed for arrays but can also be used with other iterables if they implement a similar iterator protocol.

   ```javascript
   const array = [1, 2, 3];
   array.forEach(function (value) {
     console.log(value);
   });
   ```

3. **`Array.prototype.map()` Method**: Similar to `forEach`, this method creates a new array populated with the results of calling a provided function on every element in the calling array. It's useful for transforming arrays.

   ```javascript
   const array = [1, 2, 3];
   const doubled = array.map(function (value) {
     return value * 2;
   });
   console.log(doubled); // Output: [2, 4, 6]
   ```

4. **`Array.prototype.filter()` Method**: This method creates a new array with all elements that pass the test implemented by the provided function. It's useful for filtering arrays based on certain conditions.

   ```javascript
   const array = [1, 2, 3, 4, 5];
   const evenNumbers = array.filter(function (value) {
     return value % 2 === 0;
   });
   console.log(evenNumbers); // Output: [2, 4]
   ```

5. **`Array.prototype.reduce()` Method**: This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value. It's powerful for aggregating values. Es un método de los arrays en JavaScript que recorre todos los elementos de un array y acumula un valor final. Este valor acumulado puede ser de cualquier tipo: un número, una cadena, un objeto, otro array, etc.
  👉 Se usa principalmente para reducir (de ahí su nombre) un array a un único valor.

   ```javascript
   const array = [1, 2, 3, 4, 5];
   const sum = array.reduce(function (accumulator, currentValue) {
     return accumulator + currentValue;
   }, 0);
   console.log(sum); // Output: 15
   ```

    Sintaxis:

    ```javascript
    array.reduce(callback(acumulador, valorActual, indice, array), valorInicial)
    ```

    Explicacion:
      - **callback**: función que se ejecuta por cada elemento del array.
      - **acumulador**: valor acumulado que se va actualizando en cada iteración.
      - **valorActual**: valor del elemento actual del array.
      - **indice** *(opcional)*: índice del elemento actual.
      - **array** *(opcional)*: el array sobre el que se llama a `reduce`.
      - **valorInicial** *(opcional pero recomendable)*: valor inicial del acumulador.

    ---

    📌 Ejemplo Básico:
      - **Sumar todos los números de un array**

    ```javascript
    const numeros = [1, 2, 3, 4, 5];

    const suma = numeros.reduce((acumulador, valorActual) => {
      return acumulador + valorActual;
    }, 0);

    console.log(suma);  // 15
    ```

    Explicacion:
      - **Primera iteración**: acumulador = 0, valorActual = 1 → acumulador = 1
      - **Segunda iteración**: acumulador = 1, valorActual = 2 → acumulador = 3
      - … y así hasta llegar al valor final: 15

    ---

    📌 Ejemplo Sin `valorInicial`

    Si no le das un `valorInicial`, el primer elemento del array se usa como acumulador, y el bucle empieza desde el segundo elemento.

    ```javascript
    const numeros = [1, 2, 3, 4, 5];

    const suma = numeros.reduce((acumulador, valorActual) => {
      return acumulador + valorActual;
    });

    console.log(suma);  // 15
    ```

    **⚠️ Precaución:** No usar `reduce()` sin `valorInicial` en arrays vacíos, porque genera un error.

    ---

    📌 Casos Más Complejos

    ✅ Obtener el mayor número de un array

    ```javascript
    const numeros = [3, 9, 2, 5, 7];

    const mayor = numeros.reduce((acumulador, valorActual) => {
      return (valorActual > acumulador) ? valorActual : acumulador;
    }, 0);

    console.log(mayor);  // 9
    ```

    ---

    ✅ Transformar un array en un objeto

    ```javascript
    const personas = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'Laura' },
      { id: 3, nombre: 'Pedro' }
    ];

    const personasPorId = personas.reduce((acumulador, persona) => {
      acumulador[persona.id] = persona.nombre;
      return acumulador;
    }, {});

    console.log(personasPorId);
    /*
    {
      1: 'Juan',
      2: 'Laura',
      3: 'Pedro'
    }
    */
    ```

    ---

    📌 Resumen Conceptual

    👉 `reduce()`:
      - Recorre todos los elementos de un array.
      - Acumula un valor en cada iteración.
      - Devuelve ese valor acumulado al final.
      - Sirve para transformar un array en **otro valor único**.

    ---

    📌 ¿Por qué usar `reduce()`?

    Porque te permite:
      - Escribir código más **funcional** y **declarativo**.
      - Reemplazar bucles for/while en ciertas operaciones.
      - Hacer operaciones complejas de manera limpia y concisa.

    ---

    📌 Consejos

    ✅ Siempre define un `valorInicial`, salvo que estés seguro de no necesitarlo.
    ✅ Lee bien la lógica de acumulación, porque mal definida puede provocar errores sutiles.
    ✅ Úsalo cuando realmente necesitas reducir a un valor único. Si solo quieres iterar, `forEach()` o `map()` pueden ser más claros.

    ---

6. **Spread Operator (`...`) with Loops**: The spread operator can be used within loops like `for...of` to iterate over iterable objects and access individual elements.

   ```javascript
   const array = [1, 2, 3];
   for (const value of [...array]) {
     console.log(value);
   }
   ```

7. **Custom Iterators**: JavaScript allows you to create custom iterators by implementing the iterator interface (`Symbol.iterator`). This gives you full control over how an object should be iterated over.

   ```javascript
   class CustomIterable {
     constructor() {
       this.values = ["a", "b", "c"];
     }

     [Symbol.iterator]() {
       let index = 0;
       return {
         next: () => ({
           value: this.values[index++],
           done: index > this.values.length,
         }),
       };
     }
   }

   const iterable = new CustomIterable();
   for (const value of iterable) {
     console.log(value);
   }
   ```

These tools provide flexibility and power in handling collections of data in JavaScript, allowing for efficient and readable code when working with iterables.

### 12.1 How Iterators Work

- The for/of loop and spread operator work seamlessly with iterable objects

Iteradores se dividen en tres aspectos:

- **iterable objects:** these are types like Array, Set, and Map that can be iterated.
- **the iterator object itself** which performs the iteration
- **iteration result** object that holds the result of each step of the iteration

Ah de resaltarse que un object es iterable si tiene un metodo (next()) que permita que se itere dentro del object.

### 12.2 Implementing Iterable Objects

- En la pagina 224 del libro hay un generator en una clase para crear un object con "new" y que este sea iterable por medio de los loops.
- Se presenta el `Example 12-1. An iterable numeric Range class` que lo que hace es demostrar como agregar un iterator object a una clase que crea y teste rangos.
- it can be quite useful to define functions that return iterable values.
- Se presentan dos ejempos mas de alternativas a los metodos de filter y map.

#### 12.2.1 “Closing” an Iterator: The Return Method

- iterator objects may implement a return() method to go along with the next() method.
- The for/of loop and the spread operator are really useful features of JavaScript, so when you are creating APIs, it is a good idea to use them when possible.

### 12.3 Generators

Mientras que una funcion normal solamente regresa un valor, la idea de los generators es que una funcion retorne mas de un valor bajo demanda.

[**AQUI**](https://javascript.info/generators) informacion mas detallada sobre generators (javascript.info)

A generator is a kind of iterator defined with powerful new ES6 syntax. it’s particularly useful when the values to be iterated are not the elements of a data structure, but the result of a computation.

Se define una funcio iteradora con el operador especial "\*"

**Explicacion de como funciona:** Este iterator object es un iterador. Llamando a su método next() hace que el cuerpo de la función generadora se ejecute desde el principio (o desde donde sea su posición actual) hasta que alcance una declaración de yield. yield es nuevo en ES6 y es algo así como una declaración de return. El valor de la declaración de yield se convierte en el valor devuelto por la llamada next() en el iterador.

Los generadores en JavaScript devuelven un objeto iterador que implementa el protocolo del iterador. Esto significa que puedes utilizar métodos como next(), pero no puedes llamar a otros métodos directamente en el objeto generado. Los métodos disponibles en un objeto iterador son:

- next(): Devuelve el siguiente valor en la secuencia generada por el generador.
- return(): Devuelve un valor dado y finaliza la iteración.
- throw(): Lanza un error en el generador.

El objeto iterador generado por un generador no tiene métodos adicionales definidos por defecto.

```javascript
// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() { // Invoking this function does not run the code
    yield 2; // but just returns a generator object. Calling
    yield 3; // the next() method of that generator runs
    yield 5; // the code until a yield statement provides
    yield 7; // the return value for the next() method.
}
// When we invoke the generator function, we get a generator (returns an OBJECT ITERATOR)
let primes = oneDigitPrimes();
// A generator is an iterator object that iterates the yielded values
primes.next().value // => 2
primes.next().value // => 3
primes.next().value // => 5
primes.next().value // => 7
primes.next().done // => true
// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator]() // => primes
// We can use generators like other iterable types
[...oneDigitPrimes()] // => [2,3,5,7]
let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
sum // => 17
```

- Los generators tambien se pueden colocar dentro de expresiones (dentro de variables)

La siguiente es una forma de esparcir todos los yield en un array

```javascript
const seq = function* (from, to) {
  for (let i = from; i <= to; i++) yield i;
};
[...seq(3, 5)]; // => [3, 4, 5]
```

- Note that there is no way to write a generator function using arrow function syntax.
- En el ejemplo Example 9-3 in Chapter 9 hay una forma de añadirle un yield a la funcion iteradora.

#### 12.3.1 Generator Examples

```javascript
Secuencia infinita de fibonachi

function* fibonacciSequence() {
 let x = 0, y = 1;
 for(;;) {
 yield y;
 [x, y] = [y, x+y]; // Note: destructuring assignment
 }
}
```

- Otro ejemplo

```javascript
// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
 let it = iterable[Symbol.iterator](); // Get iterator for iterable object
 while(n-- > 0) { // Loop n times:
 let next = it.next(); // Get the next item from the iterator.
 if (next.done) return; // If there are no more values, return early
 else yield next.value; // otherwise, yield the value
 }
```

This kind of infinite generator becomes more useful with a take() generator like this:

```javascript
// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // Get iterator for iterable object
  while (n-- > 0) {
    // Loop n times:
    let next = it.next(); // Get the next item from the iterator.
    if (next.done) return; // If there are no more values, return early
    else yield next.value; // otherwise, yield the value
  }
}
// An array of the first 5 Fibonacci numbers
[...take(5, fibonacciSequence())]; // => [1, 1, 2, 3, 5]
```

#### 12.3.2 yield\* and Recursive Generators

Se explica la utilizacion del `yield*`

### 12.4 Advanced Generator Features

El uso más común de las funciones generadoras es crear iteradores, pero la característica fundamental de los generadores es que nos permiten pausar una computación, producir resultados intermedios y luego reanudar la computación más tarde.

#### 12.4.1 The Return Value of a Generator Function

Una curiosidad es que un generator retorna una pareja final que es el valor que retorna la funcion y el "done", no se deja ver con el yield pero si utilizando el next()

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

#### 12.4.2 The Value of a yield Expression

When the next() method of a generator is invoked, the generator function runs until it reaches a yield expression.

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

#### 12.4.3 The return() and throw() Methods of a Generator

#### 12.4.4 A Final Note About Generators

## 13 Asynchronous JavaScript

- Most real-world computer programs, however, are significantly asynchronous.
- JavaScript programs in a web browser are typically event-driven.

- **Promises** new in ES6, are objects that represent the not-yet available result of an asynchronous operation.
- **The keywords async and await** were introduced in ES2017 and provide new syntax that simplifies asynchronous programming by allowing you to structure your Promise-based code as if it was synchronous.
- **asynchronous iterators and the for/await loop** allow you to work with streams of asynchronous events using simple loops that
  appear synchronous.

### 13.1 Asynchronous Programming with Callbacks

- **Esta es la forma antigua**

A **callback** is a function that you write and then pass to some other function.

#### 13.1.1 Timers

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

#### 13.1.2 Events

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

#### 13.1.3 Network Events

Another common source of asynchrony in JavaScript programming is network requests.

En la pagina 343 se tiene un pequeño ejemplo de como por medio de callback y `XMLHttpRequest()` se puede crear una funcion que responda apenas el state de un recibimiento de datos pase a `200`.

Explica que para network request se utiliza una especie de `addEventListener()` pero por ser una operacion asyncrona mejor se asigna a las propiedades de `XMLHttpRequest()` y asi ejecutar una funcion `callback()` que va a llevar la respuesta a donde se necesite.

En lugar de usar `addEventListener()` como con otros eventos en JavaScript, XMLHttpRequest permite asignar funciones de callback directamente a propiedades del objeto, como onload, onerror y ontimeout. Estas propiedades manejan eventos específicos:

- onload: Se ejecuta cuando la solicitud se completa con éxito.
- onerror: Se ejecuta cuando hay un error en la solicitud.
- ontimeout: Se ejecuta cuando la solicitud supera el tiempo máximo de espera.

#### 13.1.4 Callbacks and Events in Node

The Node.js server-side JavaScript environment is deeply asynchronous and defines many APIs that use callbacks and events.

- Node.js tiene una API llamada 'fs' que está hecha para leer archivos del sistema de archivos (file system). Entre las opciones se encuentra fs.readFile, que realiza una operación asíncrona para ejecutar un callback en caso de error (err) o al leer el archivo con éxito.

### 13.2 Promises

A Promise is an object that represents the result of an asynchronous computation. That result may or may not be ready yet.

#### 13.2.1 Using Promises

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

##### 13.2.1.1 Handling errors with Promises

For Promises, we can do this by passing a second function to the then() method: `getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);`

- When a Promise-based asynchronous computation completes normally, it passes its result to the function that is the first argument to `then()`

A continuacion se explica por que en una operacion asyncrona los errores se manejan de forma diferente y como se manejan:

- Promise-based asynchronous computations pass the exception (typically as an Error object of some kind, though this is not required) to the second function passed to `then()`. So, in the code above, if `getJSON()` runs normally, it passes its result to `displayUserProfile()`. If there is an error (the user is not logged in, the server is down, the user’s internet connection dropped, the request timed out, etc.), then `getJSON()` passes an Error object to `handleProfileError()`.

Pero existe una forma mejor:

- The more idiomatic way to handle errors in this code looks like this:
  `getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);`

Cuando se habla de Promesas en JavaScript, los términos equivalentes son "fulfilled" y "rejected". Si una Promesa no está ni "fulfilled" ni "rejected", entonces está pendiente ("pending"). Y una vez que una promesa está "fulfilled" o "rejected", decimos que está resuelta ("settled"). Cualquier Promesa que esté resuelta ("settled") tiene un valor asociado. Entender el estado "resolved" es una de las claves para una comprensión profunda de las Promesas.

- Resolve: Cuando se usa el término resolve, se refiere específicamente a que una promesa ha sido completada exitosamente con un valor. Es decir, la promesa está en el estado fulfilled.

- Settled: Una promesa se considera settled cuando ha alcanzado su estado final, ya sea fulfilled o rejected.

#### 13.2.2 Chaining Promises

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

#### 13.2.3 Resolving Promises

entonces lo que hace el `then()` es que primero invoca el primer callback con el response pero se espera a que se resuelva haciendo de esto una operacion asyncrona y cuando esta se resuelve sigue con el siguiente `then()` y asi sucesivamente a travez de todas las funciones que necesiten de un response para ejecutarse.

Un **resolve** que es diferente a un **settled** es que en el "resolve" es el valor del ultimo callback en una cadena de callbacks y que hace que la promesa pase finalmente a estado resolve.

En a pagina 355 hay un diagrama que detalla visualmente una forma mas didatica de entender las promesas y el encadenamiento `then()`

#### 13.2.4 More on Promises and Errors

Con código sincrónico (synchronous), si omites el manejo de errores (error-handling), al menos obtendrás una excepción (exception) y un seguimiento de pila (stack trace) que puedes usar para averiguar qué está fallando. Con código asincrónico (asynchronous), las excepciones (exceptions) no manejadas a menudo no se reportarán, y los errores pueden ocurrir silenciosamente, lo que los hace mucho más difíciles de depurar (debug). La buena noticia es que el método `.catch()` facilita el manejo de errores cuando se trabaja con Promesas (Promises).

##### 13.2.4.1. The catch and finally methods

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

#### 13.2.5 Promises in Parallel

Sometimes, though, we want to execute a number of asynchronous operations in parallel. The function `Promise.all()` can do this.

- The Promise returned by `Promise.all()` rejects when any of the input Promises is rejected.
- `Promise.allSettled()` takes an array of input Promises and returns a Promise, just like `Promise.all()` does. But `Promise.allSettled()` never rejects the returned Promise, and it does not fulfill that Promise until all of the input Promises have settled.

#### 13.2.6 Making Promises

##### 13.2.6.1 Promises based on other Promises

Se puede tener una funcion que retorne una Promesa por ejemplo alutilizar dentro de esa funcion un metodo que retorne una promesa.

##### 13.2.6.2 Promises based on synchronous values

Sometimes, you may need to implement an existing Promise-based API and return a Promise from a function, even though the computation to be performed does not actually require any asynchronous operations. In that case, the static methods `Promise.resolve()` and `Promise.reject()` will do what you want.

##### 13.2.6.3 Promises from scratch

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

#### 13.2.7 Promises in Sequence

Promise.all() makes it easy to run an arbitrary number of Promises in parallel. And Promise chains make it easy to express a sequence of a fixed number of Promises.

### 13.3 async and await

**async and await** son keywords in javascript desde ES2017

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
