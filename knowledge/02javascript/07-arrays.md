---
sidebar_position: 8
---

# 7. Arrays

[**AQUÍ**](https://www.w3schools.com/jsref/jsref_obj_array.asp) Todos los métodos que se le pueden aplicar a un dataType de tipo ARRAY.

Este capítulo documenta los arrays, un tipo de dato fundamental en JavaScript y en la mayoría de los otros lenguajes de programación. Un array es una colección ordenada de valores. Cada valor se llama un elemento, y cada elemento tiene una posición numérica en el array, conocida como su índice.

## 7.1. Creating Arrays

- Array Literals
- The Spread Operator
- The Array() Constructor
- Array.of()
- Array.from()

### 7.1.1. Array Literals

Por mucho, la forma más simple de crear un array es con un literal de array, que es simplemente una lista separada por comas de elementos de array dentro de corchetes cuadrados, el contenido puede ser cualquier EXPRESIÓN.

```javascript
let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];
let count = [1,,3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [,,]; // An array with no elements but a length of 2
```

### 7.1.2. The Spread Operator

El operador de propagación funciona con cualquier objeto iterable.

```javascript
let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]
```

Es util para crear una copia de un array:

```javascript
let original = [1,2,3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0] // => 1
```

Un string es considerado un array:

```javascript
let digits = [..."0123456789ABCDEF"];
digits // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
```

Se puede combinar con un set para eliminar duplicados

```javascript
let letters = [..."hello world"];
[...new Set(letters)] // => ["h","e","l","o"," ","w","r","d"]
```

### 7.1.3. The Array() Constructor

Otra forma de crear un array es con el **constructor Array()**. Puedes invocar este constructor de **tres formas distintas**:

• **Llamarlo sin argumentos:**

```javascript
let a = new Array();
```

Este método crea un **array vacío** sin elementos y es equivalente al literal de array `[]`.

• **Llamarlo con un único argumento numérico**, que especifica una longitud:

```javascript
let a = new Array(10);
```

Esta técnica crea un array con la **longitud especificada**. Esta forma del constructor `Array()` puede usarse para **preasignar un array** cuando sabes de antemano cuántos elementos serán requeridos. Nota que **no se almacenan valores** en el array, y las propiedades de índice del array `"0"`, `"1"`, y así sucesivamente **ni siquiera están definidas** para el array.

• **Especificar explícitamente dos o más elementos** de array o un único elemento no numérico para el array:

```javascript
let a = new Array(5, 4, 3, 2, 1, "testing, testing");
```

En esta forma, los **argumentos del constructor se convierten en los elementos** del nuevo array. Usar un **literal de array es casi siempre más simple** que este uso del constructor `Array()`.

### 7.4.1. Array.of()

Cuando la **función constructora Array()** es invocada con un argumento numérico, usa ese argumento como una **longitud de array**. Pero cuando es invocada con **más de un argumento numérico**, trata esos argumentos como **elementos para el array a ser creado**. Esto significa que el **constructor Array() no puede ser usado para crear un array con un único elemento numérico**.

En **ES6**, la función **Array.of()** aborda este problema: es un **método de fábrica** que crea y retorna un nuevo array, usando sus valores de argumentos (sin importar cuántos haya) como los **elementos del array**:

```javascript
Array.of() // => []; returns empty array with no arguments
Array.of(10) // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3) // => [1, 2, 3]
```

### 7.1.5. Array.from()

`Array.from(iterable)` funciona como lo hace el **operador de propagación** `[...iterable]`. También es una forma simple de **hacer una copia de un array**:

```javascript
let copy = Array.from(original);
```

`Array.from()` también es importante porque define una forma de hacer una **copia de array verdadero** de un **objeto tipo array**. Los objetos tipo array son objetos no-array que tienen una **propiedad numérica length** y tienen valores almacenados con propiedades cuyos nombres resultan ser enteros.

`Array.from()` también acepta un **segundo argumento opcional**. Si pasas una función como el segundo argumento, entonces mientras el nuevo array está siendo construido, **cada elemento del objeto fuente** será pasado a la función que especifiques, y el **valor de retorno de la función** será almacenado en el array en lugar del valor original.

### 7.1.6. **Rellenando con `.fill()`**

Crear un array de tamaño fijo y llenarlo con un valor.

```js
const arr = new Array(5).fill(0); // [0,0,0,0,0]
```

### 7.1.7. **A partir de NodeList u otros iterables**

Útil para convertir resultados del DOM.

```js
const divs = [...document.querySelectorAll('div')];
```

### 7.1.8. **A partir de `map()` sobre otra colección**

Generar un array transformando elementos de otro iterable.

```js
const arr = [1,2,3].map(n => n * 2);
```

### 7.1.9. **Usando Generadores + Spread**

Convertir un generador en array.

```js
function* gen() { yield 1; yield 2; }
const arr = [...gen()]; // [1, 2]
```

### 7.1.10. **Usando `slice()` sobre un array-like**

Convierte objetos similares a arrays (como `arguments`).

```js
function test() {
  const arr = Array.prototype.slice.call(arguments);
  return arr;
}
```

### 7.1.11. **Desde un Set o Map**

Convierte estructuras iterables a array.

```js
const arr = [...new Set([1,2,2,3])]; // [1,2,3]
```

### 7.1.12. **Usando `reduce()` para construir arrays**

Crear un array computado a partir de otro.

```js
const arr = [1,2,3].reduce((acc, n) => { acc.push(n * 3); return acc; }, []);
```

### 7.1.13 **Inicializando arrays multidimensionales**

Crear arrays dentro de arrays.

```js
const arr = [[1,2], [3,4]];
```

## 7.2. Reading and Writing Array Elements

Accedes a un elemento de un array usando el **operador []**, dentro de los [] se puede cualquier exprecion que resulte en un valor numérico.

```javascript
let a = ["world"]; // Start with a one-element array
let value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
let i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3
```

## 7.3. Sparse Arrays

Un **sparse array** (array disperso) en JavaScript es un **array que tiene “huecos”**, es decir, **índices sin definir**.
No es lo mismo que tener `undefined`; es un índice que **no existe** en el array.

🧩 ¿Qué es exactamente un sparse array?

Un array normal (denso) tiene **cada índice lleno**, aunque el valor sea `undefined`:

```js
const arr = [1, undefined, 3];
```

Pero un **sparse array** tiene índices simplemente *vacíos*:

```js
const sparse = [];
sparse[3] = 'hola';
// Resultado: [ <3 empty items>, 'hola' ]
```

Aquí el array tiene length = 4, pero los primeros 3 índices **no existen**.

Esto se ve incluso en consola:

```js
[ , , , "hola" ]
```

📌 ¿Cómo se crean los sparse arrays?

1️⃣ Usando `new Array(n)`

Crea un array de `n` posiciones **vacías**:

```js
const a = new Array(5); 
// [ <5 empty items> ]
```

2️⃣ Asignando un valor muy lejos en el índice

```js
const a = [];
a[10] = 'x';
// [ <10 empty items>, 'x' ]
```

3️⃣ Borrando un índice con `delete`

```js
const a = [1,2,3];
delete a[1]; 
// [1, <1 empty item>, 3]
```

📉 ¿Por qué existen y qué problemas generan?

Los sparse arrays son **más lentos y menos eficientes**:

❗ Problema 1: `.map()`, `.forEach()`, etc. **saltan los huecos**

No ejecutan el callback en los índices vacíos.

```js
[ , 2, 3].map(x => console.log(x));
// Solo imprime 2 y 3
```

❗ Problema 2: `.length` es engañoso

Los huecos cuentan como posiciones.

```js
const a = [];
a[100] = true;
console.log(a.length); // 101
```

❗ Problema 3: Difícil de depurar

Los vacíos no se comportan como `undefined`:

```js
const a = [ , ];
console.log(a[0]);      // undefined
console.log(0 in a);    // false (no existe el índice)
console.log(a.hasOwnProperty(0)); // false
```

🆚 Sparse vs Dense Arrays

| Tipo       | Ejemplo       | ¿Índice existe? | ¿`map()` lo ejecuta? |
| ---------- | ------------- | --------------- | -------------------- |
| **Dense**  | `[undefined]` | ✔️ Sí           | ✔️ Sí                |
| **Sparse** | `[ , ]`       | ❌ No            | ❌ No                 |

---

📝 ¿Cuándo usarlos?

👉 **Nunca intencionalmente.**
La mayoría de las veces aparecen por error (especialmente usando `new Array(n)`).

JavaScript no optimiza sparse arrays bien, así que:

✔️ **Preferir siempre arrays densos**
✔️ **Usar `.fill()` si quieres un array inicializado**

```js
const a = new Array(5).fill(null); // denso y óptimo
```

## 7.4. Array Length

```javascript
[].length // => 0: the array has no elements
["a","b","c"].length // => 3: highest index is 2, length is 3
```

Se pueden borrar elementos de un array con la propiedad array.length

```javascript
a = [1,2,3,4,5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements. a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)
```

## 7.5. Adding and Deleting Array Elements

```javascript
// We’ve already seen the simplest way to add elements to an array: just assign values to
new indexes:
let a = []; // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";

// You can also use the push() method to add one or more values to the end of an array
let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"]
a.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]

// You can delete array elements with the delete operator, just as you can delete object properties:
let a = [1,2,3];
delete a[2]; // a now has no element at index 2
2 in a // => false: no array index 2 is defined
a.length // => 3: delete does not affect array length
// Deleting an array element is similar to (but subtly different than) assigning undefined to that element.
```

Eliminar un elemento de array es similar a (pero sutilmente diferente de) asignar `undefined` a ese elemento. Nota que **usar delete en un elemento de array no altera la propiedad length** y **no desplaza** los elementos con índices más altos hacia abajo para llenar el vacío que deja la propiedad eliminada. Si eliminas un elemento de un array, el **array se vuelve disperso**.

`splice()` es el **método de propósito general** para insertar, eliminar o reemplazar elementos de array. **Altera la propiedad length** y desplaza los elementos del array a índices más altos o más bajos según sea necesario. Ver §7.8 para más detalles.

## 7.6. Iterating Arrays

Aquí tienes **todas las formas de iterar arrays en JavaScript**, con el **mismo formato que pediste**, y agregando:

### 7.6.1. **`for` clásico**

Iteración manual con control absoluto del índice.
**Sparse:** Sí — los visita como `undefined`
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** ⚡ Más rápido

```js
for (let i = 0; i < arr.length; i++) console.log(arr[i]);
```

---

### 7.6.2. **`for…of`**

Itera directamente sobre los valores del array.
**Sparse:** Sí — salta huecos
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Rápido

```js
for (const v of arr) console.log(v);
```

---

### 7.6.3. **`forEach()`**

Ejecuta una función por cada elemento sin permitir detener el ciclo.
**Sparse:** No — salta huecos
**Break:** No
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.forEach(v => console.log(v));
```

---

### 7.6.4. **`for…in` (no recomendado)**

Itera sobre índices enumerables, incluso heredados.
**Sparse:** No — solo recorre índices existentes
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Lento

```js
for (const i in arr) console.log(arr[i]);
```

---

### 7.6.5. **`map()`**

Itera transformando valores y devolviendo nuevo array.
**Sparse:** No — salta huecos
**Break:** No
**Nuevo array:** Sí
**Modifica array:** No
**Velocidad:** Medio

```js
arr.map(v => console.log(v));
```

---

### 7.6.6. **`filter()`**

Itera para tomar solo algunos elementos.
**Sparse:** No — salta huecos
**Break:** No
**Nuevo array:** Sí
**Modifica array:** No
**Velocidad:** Medio

```js
arr.filter(v => console.log(v));
```

---

### 7.6.7. **`reduce()`**

Itera acumulando en un valor final.
**Sparse:** No — salta huecos
**Break:** No
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.reduce((acc, v) => { console.log(v); return acc; }, 0);
```

---

### 7.6.8. **`reduceRight()`**

Como reduce pero de derecha a izquierda.
**Sparse:** No — salta huecos
**Break:** No
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.reduceRight((acc, v) => { console.log(v); return acc; }, 0);
```

---

### 7.6.9. **`every()`**

Itera hasta que un elemento falle la condición.
**Sparse:** No — salta huecos
**Break:** Sí (devuelve false)
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.every(v => console.log(v) || true);
```

---

### 7.6.10. **`some()`**

Itera hasta que un elemento cumpla la condición.
**Sparse:** No — salta huecos
**Break:** Sí (devuelve true)
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.some(v => console.log(v));
```

---

### 7.6.11. **`find()`**

Itera buscando el primer valor válido.
**Sparse:** No — salta huecos
**Break:** Sí (cuando encuentra valor)
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.find(v => console.log(v));
```

---

### 7.6.12. **`findIndex()`**

Igual que find pero devuelve el índice.
**Sparse:** No — salta huecos
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Medio

```js
arr.findIndex(v => console.log(v));
```

---

### 7.6.13. **`flatMap()`**

Itera y aplana el resultado.
**Sparse:** No — salta huecos
**Break:** No
**Nuevo array:** Sí
**Modifica array:** No
**Velocidad:** Medio

```js
arr.flatMap(v => (console.log(v), [v]));
```

---

### 7.6.14. **`entries()`**

Itera pares [índice, valor] con `for…of`.
**Sparse:** Sí — incluye huecos como `undefined`
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Rápido

```js
for (const [i, v] of arr.entries()) console.log(i, v);
```

---

### 7.6.15. **`keys()`**

Itera sobre los índices del array.
**Sparse:** Sí — recorre índices existentes (huecos incluidos)
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Rápido

```js
for (const i of arr.keys()) console.log(i);
```

---

### 7.6.16. **`values()`**

Itera solo los valores.
**Sparse:** No — salta huecos
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Rápido

```js
for (const v of arr.values()) console.log(v);
```

---

### 7.6.17. **`for await…of` (para arrays de Promesas)**

Itera arrays donde cada valor es una promesa.
**Sparse:** No — salta huecos
**Break:** Sí
**Nuevo array:** No
**Modifica array:** No
**Velocidad:** Lento (asíncrono)

```js
for await (const v of arr) console.log(v);
```

---

## 7.7. Multidimensional Arrays

JavaScript no soporta arrays multidimensionales verdaderos, pero puedes aproximarlos con arrays de arrays.

```js
// Create a multidimensional array
let table = new Array(10); // 10 rows of the table
for(let i = 0; i < table.length; i++) {
table[i] = new Array(10); // Each row has 10 columns
}
// Initialize the array
for(let row = 0; row < table.length; row++) {
for(let col = 0; col < table[row].length; col++) {
table[row][col] = row*col;
}
}
// Use the multidimensional array to compute 5*7
table[5][7] // => 35
```

## 7.8. Array Methods

Tener en cuenta que hay métodos que retornan un nuevo array y otros que modifican el array que se les inyecta.

### 7.8.1. Array Iterator Methods

Para mas profundidad, ver la sección dedicado a ello, la 7.6. Iterating Arrays ya que ahi están todos.

- forEach()
- map()
- filter()
- find() and findIndex()
- every() and some()
- reduce() and reduceRight()

### 7.8.2. Flattening arrays with flat() and flatMap()

El método `flat()` crea y retorna un **nuevo array** que contiene los mismos elementos que el array sobre el cual es llamado, excepto que cualquier elemento que sea en sí mismo un array es **"aplanado"** en el array retornado.

```javascript
[1, [2, 3]]
  .flat() // => [1, 2, 3]
  [(1, [2, [3]])].flat(); // => [1, 2, [3]]
```

### 7.8.3. Adding arrays with concat()

El método `concat()` crea y retorna un **nuevo array** que contiene los elementos del array original sobre el cual `concat()` fue invocado, seguido de cada uno de los argumentos de `concat()`.

```javascript
let a = [1,2,3];
a.concat(4, 5) // => [1,2,3,4,5]
a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]]; but not nested arrays
a // => [1,2,3]; the original array is unmodified
```

### 7.8.4. Stacks and Queues with push(), pop(), shift(), and unshift()

1. **`push()`**

    Agrega uno o más elementos al final del array.
    **Sparse:** No — siempre rellena el array correctamente
    **Break:** No aplica (no es iteración)
    **Nuevo array:** No
    **Modifica array:** Sí
    **Velocidad:** Rápido (uno de los más rápidos del array)

    ```js
    arr.push(10);
    ```

2. **`pop()`**

    Elimina y retorna el último elemento del array.
    **Sparse:** No — solo afecta el final
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Sí
    **Velocidad:** Rápido

    ```js
    arr.pop();
    ```

3. **`shift()`**

    Elimina y retorna el primer elemento del array (reindexa todo).
    **Sparse:** No — remueve el índice 0 y reacomoda
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Sí
    **Velocidad:** Lento (el más lento de la lista porque mueve índices).

    ```js
    arr.shift();
    ```

4. **`unshift()`**

    Agrega elementos al inicio del array (reindexa todo).
    **Sparse:** No — garantiza posiciones válidas
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Sí
    **Velocidad:** Lento (igual que shift — reindexa todo)

    ```js
    arr.unshift(5);
    ```

### 7.8.5. Subarrays with slice(), splice(), fill(), and copyWithin()

Los arrays definen un número de métodos que trabajan en **regiones contiguas**, o **subarrays** o **"rebanadas"** de un array. Las siguientes secciones describen métodos para **extraer, reemplazar, llenar y copiar rebanadas**.

1. **`slice()`**

    Crea un subarray sin modificar el array original.
    **Sparse:** Sí — preserva huecos tal cual vienen
    **Break:** No aplica (no es iteración)
    **Nuevo array:** Sí
    **Modifica array:** No
    **Velocidad:** Rápido

    ```js
    const sub = arr.slice(1, 3);
    ```

2. **`splice()`**

    Añade, elimina o reemplaza elementos en el array.
    **Sparse:** Sí — puede crear o eliminar huecos
    **Break:** No aplica
    **Nuevo array:** No (pero devuelve los elementos eliminados)
    **Modifica array:** Sí
    **Velocidad:** Medio (puede reindexar)

    ```js
    arr.splice(1, 2); // elimina 2 elementos desde el índice 1
    ```

3. **`fill()`**

    Rellena parte o todo el array con un valor.
    **Sparse:** Sí — convierte huecos en valores definidos
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Sí
    **Velocidad:** Rápido

    ```js
    arr.fill(0, 1, 3);
    ```

4. **`copyWithin()`**

    Copia una sección del array y la pega en otra posición del mismo array.
    **Sparse:** Sí — copia huecos intactos también
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Sí
    **Velocidad:** Rápido a medio (dependiendo del tamaño de copia)

    ```js
    arr.copyWithin(0, 2, 4); // copia indices 2–4 al índice 0
    ```

### 7.8.6. Array Searching and Sorting Methods

Los arrays implementan los métodos `indexOf()`, `lastIndexOf()` e `includes()` que son similares a los métodos del mismo nombre de los strings. También hay métodos `sort()` y `reverse()` para **reordenar los elementos de un array**. Estos métodos se describen en las subsecciones que siguen.

1. **`indexOf()`**

    Busca un valor y devuelve su primer índice.
    **Sparse:** No — salta huecos
    **Break:** Sí (internamente cuando encuentra el valor)
    **Nuevo array:** No
    **Modifica array:** No
    **Velocidad:** Medio

    ```js
    arr.indexOf(3);
    ```

2. **`lastIndexOf()`**

    Busca un valor pero desde el final del array hacia atrás.
    **Sparse:** No — salta huecos
    **Break:** Sí (cuando encuentra valor)
    **Nuevo array:** No
    **Modifica array:** No
    **Velocidad:** Medio

    ```js
    arr.lastIndexOf(3);
    ```

3. **`includes()`**

    Verifica si un valor existe en el array.
    **Sparse:** No — salta huecos
    **Break:** Sí (internamente cuando encuentra el valor)
    **Nuevo array:** No
    **Modifica array:** No
    **Velocidad:** Medio

    ```js
    arr.includes(3);
    ```

4. **`sort()`**

    Ordena los elementos del array en su lugar.
    **Sparse:** Sí — huecos pasan al final
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Sí (reordena)
    **Velocidad:** Lento (O(n log n))

    ```js
    arr.sort();
    ```

5. **`reverse()`**

    Invierte el orden de los elementos en el array.
    **Sparse:** Sí — mantiene huecos intactos pero invierte posiciones
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** Yes
    **Velocidad:** Rápido

    ```js
    arr.reverse();
    ```

### 7.8.7. Array to String Conversions

La **clase Array** define **tres métodos** que pueden convertir arrays a strings.

1. **`JSON.stringify()`**

    Convierte el array en una cadena JSON válida.
    **Sparse:** Sí — los huecos se convierten en `null`
    **Break:** No aplica
    **Nuevo array:** No (devuelve string)
    **Modifica array:** No
    **Velocidad:** Medio

    ```js
    JSON.stringify([1, 2, 3]);
    ```

2. **`join()`**

    Une todos los elementos del array en un string usando un separador.
    **Sparse:** Sí — los huecos se tratan como `""` (cadena vacía)
    **Break:** No aplica
    **Nuevo array:** No (devuelve string)
    **Modifica array:** No
    **Velocidad:** Rápido

    ```js
    arr.join(','); 
    ```

3. **`toLocaleString()`**

    Convierte cada elemento usando reglas locales y luego une con comas.
    **Sparse:** Sí — los huecos se tratan como `""`
    **Break:** No aplica
    **Nuevo array:** No (devuelve string)
    **Modifica array:** No
    **Velocidad:** Medio

    ```js
    arr.toLocaleString();
    ```

### 7.8.8. Static Array Functions

1. **`Array.of()`**

    Crea un array usando los valores pasados sin ambigüedades (a diferencia del constructor).
    **Sparse:** No — siempre crea un array denso
    **Break:** No aplica
    **Nuevo array:** Sí
    **Modifica array:** No
    **Velocidad:** Rápido

    ```js
    Array.of(1, 2, 3);
    ```

2. **`Array.from()`**

    Crea un array a partir de un iterable o array-like.
    **Sparse:** No — convierte todo en índices reales
    **Break:** No aplica
    **Nuevo array:** Sí
    **Modifica array:** No
    **Velocidad:** Medio

    ```js
    Array.from('abc');
    ```

3. **`Array.isArray()`**

    Determina si un valor es un array.
    **Sparse:** No aplica (no crea ni itera arrays)
    **Break:** No aplica
    **Nuevo array:** No
    **Modifica array:** No
    **Velocidad:** Rápido

    ```js
    Array.isArray([1, 2]); // true
    ```

## 7.9. Array-Like Objects

Como hemos visto, los **arrays de JavaScript** tienen algunas **características especiales** que otros objetos no tienen:

• La **propiedad length se actualiza automáticamente** a medida que se agregan nuevos elementos a la lista.
• **Establecer length a un valor menor trunca el array**.
• Los arrays **heredan métodos útiles** de `Array.prototype`.
• `Array.isArray()` retorna `true` para arrays.

Pero hay veces que se puede tratar un object como si fuera un array si cumple la condición de que sus claves son numéricas.

```js
let a = {}; // Start with a regular empty object
// Add properties to make it "array-like"
let i = 0;
while(i < 10) {
a[i] = i * i;
i++;
}
a.length = i;
// Now iterate through it as if it were a real array
let total = 0;
for(let j = 0; j < a.length; j++) {
total += a[j];
}
```

En **JavaScript del lado del cliente**, varios métodos para trabajar con documentos HTML (como `document.querySelectorAll()`, por ejemplo) retornan **objetos tipo array**.

## 7.10. Strings as Arrays

Los **strings de JavaScript** se comportan como **arrays de solo lectura** de caracteres Unicode UTF-16.

```js
let s = "test";
s.charAt(0) // => "t"
s[1] // => "e"
```

Métodos de array como `push()`, `sort()`, `reverse()` y `splice()` **modifican un array en el lugar** y **no funcionan en strings**.
