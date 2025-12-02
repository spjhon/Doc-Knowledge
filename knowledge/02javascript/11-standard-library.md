---
sidebar_position: 15
---

# 11. The JavaScript Standard Library

Este capítulo cubre otras **API** importantes, pero menos fundamentales, que pueden considerarse como la definición de la **"biblioteca estándar"** de JavaScript: se trata de clases y funciones útiles que están **incorporadas** en JavaScript y disponibles para todos los programas de JavaScript, tanto en navegadores web como en **Node**.

Las secciones de este capítulo son independientes entre sí y puedes leerlas en cualquier orden. Cubren:

    - Las clases **`Set`** y **`Map`** para representar conjuntos de valores y mapeos de un conjunto de valores a otro conjunto de valores.
    - Objetos similares a *arrays* conocidos como **`TypedArrays`** que representan *arrays* de datos binarios, junto con una clase relacionada para extraer valores de datos binarios que no son *arrays*.
    - Las **expresiones regulares** y la clase **`RegExp`**, que definen patrones textuales y son útiles para el procesamiento de texto. Esta sección también cubre la sintaxis de las expresiones regulares en detalle.
    - La clase **`Date`** para representar y manipular fechas y horas.
    - La clase **`Error`** y sus diversas subclases, cuyas instancias se lanzan cuando ocurren errores en los programas de JavaScript.
    - El objeto **`JSON`**, cuyos métodos admiten la **serialización** y **deserialización** de estructuras de datos de JavaScript compuestas por objetos, *arrays*, cadenas, números y booleanos.
    - El objeto **`Intl`** y las clases que define que pueden ayudarte a **localizar** (*localize*) tus programas de JavaScript.
    - El objeto **`Console`**, cuyos métodos generan cadenas de salida de formas que son particularmente útiles para **depurar** programas y registrar (*logging*) el comportamiento de dichos programas.
    - La clase **`URL`**, que simplifica la tarea de analizar (*parsing*) y manipular URL. Esta sección también cubre funciones globales para codificar y decodificar URL y sus partes componentes.
    - **`setTimeout()`** y funciones relacionadas para especificar código que debe ejecutarse después de que haya transcurrido un intervalo de tiempo específico.

## 11.1. Sets and Maps

### 11.1.1. The Set Class

Un **conjunto** (*set*) es una colección de valores, al igual que un *array*. Sin embargo, a diferencia de los *arrays*, los conjuntos no están **ordenados** ni **indexados**, y no permiten **duplicados**: un valor es miembro de un conjunto o no lo es; no es posible preguntar cuántas veces aparece un valor en un conjunto.

Crea un objeto **`Set`** con el constructor **`Set()`**:

    ```javascript
    let s = new Set();       // Un nuevo conjunto vacío
    let t = new Set([1, s]); // Un nuevo conjunto con dos miembros
    ```

El argumento del constructor **`Set()`** no necesita ser un *array*: se permite cualquier **objeto iterable** (incluidos otros objetos **`Set`**):

    ```javascript
    let t = new Set(s);           // Un nuevo conjunto que copia los elementos de s.
    let unique = new Set("Mississippi"); // 4 elementos: "M", "i", "s", y "p"
    ```

    La propiedad **`size`** de un conjunto es como la propiedad `length` de un *array*: te dice cuántos valores contiene el conjunto:

    ```javascript
    unique.size // => 4
    ```

En la práctica, lo más importante que hacemos con los conjuntos no es añadir y eliminar elementos, sino comprobar si un valor específico es miembro del conjunto. Hacemos esto con el método **`has()`**:

    ```javascript
    let oneDigitPrimes = new Set([2,3,5,7]);
    oneDigitPrimes.has(2)   // => true: 2 es un número primo de un dígito
    oneDigitPrimes.has(3)   // => true: 3 también lo es
    oneDigitPrimes.has(4)   // => false: 4 no es un primo
    oneDigitPrimes.has("5") // => false: "5" ni siquiera es un número
    ```

Lo más importante que hay que entender sobre los conjuntos es que están **optimizados para la prueba de pertenencia** (*membership testing*), y no importa cuántos miembros tenga el conjunto, el método **`has()`** será **muy rápido**.

Aquí tienes **todos los métodos y propiedades importantes de `Set` en JavaScript**, explicados de forma clara y con **ejemplos simples**.

📌 **Métodos y propiedades del `Set`**

1. **`set.add(valor)`**

    Agrega un valor al set (si no existe).

        ```js
        const s = new Set();
        s.add(10);
        s.add(10); // No lo agrega otra vez

        console.log(s); // Set { 10 }
        ```
2. **`set.delete(valor)`**

    Elimina un valor si existe. Devuelve **true** si lo eliminó.

        ```js
        const s = new Set([1, 2, 3]);
        s.delete(2); // true

        console.log(s); // Set { 1, 3 }
        ```
3. **`set.has(valor)`**

        Verifica si un valor existe.

        ```js
        const s = new Set(['a', 'b']);
        console.log(s.has('a')); // true
        console.log(s.has('c')); // false
        ```
4. **`set.clear()`**

        Elimina **todos** los valores.

        ```js
        const s = new Set([1, 2, 3]);
        s.clear();

        console.log(s); // Set {}
        ```
5. **`set.size`** (propiedad)

        Cantidad de elementos.

        ```js
        const s = new Set([1, 2, 3]);
        console.log(s.size); // 3
        ```
6. **`set.forEach(callback)`**

        Itera todos los valores.

        ```js
        const s = new Set([1, 2, 3]);

        s.forEach(v => {
        console.log(v);
        });
        ```

        Salida:

        ```js
        1
        2
        3
        ```

📌 **Métodos de iteración (devuelven iteradores)**

Los Sets son iterables.

1. **`set.values()`**

        Devuelve un iterador con los valores.

        ```js
        const s = new Set([1, 2]);

        console.log([...s.values()]); // [1, 2]
        ```
2. **`set.keys()`**

    Devuelve los **mismos valores que `values()`** (existe por compatibilidad con Map).

        ```js
        const s = new Set([1, 2]);
        console.log([...s.keys()]); // [1, 2]
        ```
3. **`set.entries()`**

    Devuelve pares `[valor, valor]` (porque no hay keys).

        ```js
        const s = new Set(['a', 'b']);

        console.log([...s.entries()]);
        // [ ['a', 'a'], ['b', 'b'] ]
        ```
4. `Symbol.iterator`

    Permite usar `for...of` o el spread `...`.

        ```js
        const s = new Set([1, 2, 3]);

        for (const v of s) {
        console.log(v);
        }
        ```

🧠 **Lista completa de métodos (resumen)**

| Método / propiedad    | Qué hace                    |
| --------------------- | --------------------------- |
| **add(value)**        | Agrega un valor             |
| **delete(value)**     | Elimina un valor            |
| **has(value)**        | Verifica si existe          |
| **clear()**           | Limpia el set               |
| **size**              | Cantidad de elementos       |
| **forEach(fn)**       | Itera valores               |
| **values()**          | Iterador de valores         |
| **keys()**            | Igual a values()            |
| **entries()**         | Devuelve `[valor, valor]`   |
| **[Symbol.iterator]** | Permite iterar con for...of |

### 11.1.2. The Map Class

Un `Map` en JavaScript es una colección de elementos donde cada elemento está compuesto por una clave y un valor. A diferencia de los objetos ordinarios en JavaScript, las claves en un `Map` pueden ser de cualquier tipo, incluyendo objetos, funciones y tipos primitivos. Esto ofrece una gran flexibilidad y permite un mapeo más complejo de claves a valores.

- **Características de un `Map`:**
- **Ordenado**: Los elementos en un `Map` están ordenados por inserción. Esto significa que se puede iterar sobre los elementos en el orden en que fueron añadidos.
- **Claves de cualquier tipo**: A diferencia de los objetos, donde las claves son cadenas de texto o símbolos, en un `Map` las claves pueden ser cualquier valor, incluso otros objetos.
- **Tamaño**: Se puede obtener el número de elementos en un `Map` utilizando la propiedad `size`.

Ejemplo de uso:

    ```javascript
    let map = new Map();
    map.set("clave1", "valor1");
    map.set(2, "valor2");
    map.set({}, "valor3");

    console.log(map.get("clave1")); // salida: valor1
    console.log(map.size); // salida: 3
    ```

📌 El `.map()` genera un **nuevo array**

No modifica el viejo, sino que:

- Toma **cada elemento del array original**
- Le aplica la función callback
- Y lo que **devuelva el `return` de esa función se guarda en el nuevo array en esa misma posición**

✅ ¿Qué es un `Map`?

`Map` es una colección de **pares clave–valor**, similar a un objeto, pero con varias ventajas:

✔ Las **claves pueden ser cualquier tipo** (objetos, funciones, números, strings, etc.)
✔ Mantiene el **orden de inserción**
✔ Tiene métodos propios para manejar los datos
✔ Es más eficiente para inserciones y búsquedas grandes

Ejemplo básico:

    ```js
    const m = new Map();
    m.set("nombre", "Juan");
    m.set(10, "Edad");
    ```
📌 **Métodos y propiedades del `Map`**

1. **`map.set(key, value)`**

    Agrega o actualiza una clave con su valor.

        ```js
        const m = new Map();
        m.set("a", 1);
        m.set("b", 2);

        console.log(m); // Map { 'a' => 1, 'b' => 2 }
        ```

2. **`map.get(key)`**

    Obtiene el valor asociado a una clave.

        ```js
        const m = new Map();
        m.set("a", 1);

        console.log(m.get("a")); // 1
        console.log(m.get("b")); // undefined
        ```
3. **`map.has(key)`**

    Verifica si una clave existe.

        ```js
        const m = new Map([['x', 10]]);
        console.log(m.has('x')); // true
        ```
4. **`map.delete(key)`**

    Elimina una clave. Devuelve **true** si la eliminó.

        ```js
        const m = new Map([['a', 1], ['b', 2]]);
        m.delete('a'); // true

        console.log(m); // Map { 'b' => 2 }
        ```
5. **`map.clear()`**

    Elimina todas las claves y valores.

        ```js
        const m = new Map([['a', 1], ['b', 2]]);
        m.clear();

        console.log(m); // Map {}
        ```
6. **`map.size`** (propiedad)

    Cantidad de pares clave–valor.

        ```js
        const m = new Map([['a', 1], ['b', 2]]);
        console.log(m.size); // 2
        ```

📌 Métodos de iteración del `Map`

Los `Map` son iterables.

1. **`map.keys()`**

    Devuelve un iterador con las **claves**.

        ```js
        const m = new Map([['a', 1], ['b', 2]]);
        console.log([...m.keys()]); // ['a', 'b']
        ```
2. **`map.values()`**

    Devuelve un iterador con los **valores**.

        ```js
        const m = new Map([['a', 1], ['b', 2]]);
        console.log([...m.values()]); // [1, 2]
        ```
3. **`map.entries()`**

    Devuelve un iterador con pares `[clave, valor]`.

        ```js
        const m = new Map([['a', 1], ['b', 2]]);
        console.log([...m.entries()]);
        // [ ['a', 1], ['b', 2] ]
        ```
4. **`map.forEach(callback)`**

    Itera todos los pares clave–valor.

        ```js
        const m = new Map([
        ['a', 1],
        ['b', 2]
        ]);

        m.forEach((value, key) => {
        console.log(key, value);
        });
        ```

        Salida:

        ```
        a 1
        b 2
        ```
5. **`map[Symbol.iterator]`**

    Permite usar `for...of` directamente (itera entries).

        ```js
        const m = new Map([['a', 1], ['b', 2]]);

        for (const [key, value] of m) {
        console.log(key, value);
        }
        ```

🧠 **Lista completa de métodos (resumen)**

| Método / propiedad    | Qué hace                   |
| --------------------- | -------------------------- |
| **set(key, value)**   | Agrega/actualiza un valor  |
| **get(key)**          | Obtiene valor              |
| **has(key)**          | Verifica existencia        |
| **delete(key)**       | Elimina una entrada        |
| **clear()**           | Limpia todo                |
| **size**              | Cantidad de elementos      |
| **keys()**            | Iterador de claves         |
| **values()**          | Iterador de valores        |
| **entries()**         | Iterador de pares          |
| **forEach()**         | Recorre todo               |
| **[Symbol.iterator]** | Itera entries con for...of |

### 11.1.3. WeakMap and WeakSet

- La clase WeakMap es una variante (pero no una subclase real) de la clase Map que no evita que sus valores clave sean recolectados por el garbage collector de javascript.
- Las claves de WeakMap deben ser objetos o matrices (arrays); los valores primitivos no están sujetos a la recolección de basura y no pueden ser utilizados como claves.
- WeakMap solo implementa los métodos get(), set(), has() y delete(). En particular, WeakMap no es iterable y no define keys(), values(), o forEach(). Si WeakMap fuera iterable, entonces sus claves serían alcanzables y no sería débil.
- De manera similar, WeakMap no implementa la propiedad size porque el tamaño de un WeakMap podría cambiar en cualquier momento a medida que los objetos son recolectados por el recolector de basura.
- The intended use of WeakMap is to allow you to associate values with objects without causing **memory leaks**.
- WeakSet no permite valores primitivos como miembros.
- WeakSet solo implementa los métodos add(), has() y delete() y no es iterable.
- WeakSet no tiene una propiedad size.

`WeakMap` y `WeakSet` son estructuras de datos en JavaScript introducidas en ECMAScript 6 (también conocido como ES2015). Su propósito principal es permitir la asociación de datos adicionales con objetos sin impedir que los objetos asociados sean recolectados por el recolector de basura cuando ya no están siendo utilizados por el programa.

- **WeakMap**:

  - Es una colección de pares clave-valor donde las claves deben ser objetos y los valores pueden ser de cualquier tipo.
  - Las referencias a las claves en un `WeakMap` son débiles, lo que significa que no impiden que el recolector de basura libere la memoria ocupada por las claves si no hay otras referencias a ellas en el programa.
  - Útil cuando necesitas asociar datos adicionales con objetos sin impedir que los objetos sean eliminados de la memoria cuando ya no son necesarios. Por ejemplo, puedes usar un `WeakMap` para almacenar datos privados asociados con objetos sin exponerlos globalmente.

- **WeakSet**:
  - Es una colección de objetos únicos donde las referencias a los objetos son débiles.
  - Similar a `WeakMap`, las referencias a los objetos en un `WeakSet` no impiden que los objetos sean recolectados por el recolector de basura si no hay otras referencias a ellos en el programa.
  - Útil cuando necesitas mantener una lista de objetos únicos pero no quieres evitar que sean recolectados por el recolector de basura cuando ya no se usan.

En resumen, `WeakMap` y `WeakSet` son útiles en situaciones donde necesitas asociar datos adicionales con objetos o mantener una lista de objetos únicos, pero no quieres evitar que los objetos sean eliminados de la memoria cuando ya no son necesarios. Esto puede ser especialmente útil en escenarios donde estás trabajando con estructuras de datos temporales o efímeras.

## 11.2. Typed Arrays and Binary Data

Los arrays son muy rápidos. Sin embargo, todavía son bastante diferentes de los tipos de arrays de lenguajes de nivel inferior como C y Java. Los arrays tipados, introducidos en ES6, se asemejan mucho más a los arrays de bajo nivel de esos lenguajes.

- No son tecniacamente un array (osea que sale falso en Array.isArray())
- The elements of a typed array are all numbers.
- You must specify the length of a typed array when you create it, and that length can never change.
- The elements of a typed array are always initialized to 0 when the array is created.

### 11.2.1. Typed Array Types

Los TypedArrays en JavaScript son objetos que proporcionan una forma de acceder a datos binarios en forma de arrays de tipos específicos de datos, como enteros de 8, 16 o 32 bits, valores de punto flotante de 32 o 64 bits, y BigInts de 64 bits. Estos arrays están diseñados para ser más eficientes en términos de memoria y rendimiento que los arrays estándar de JavaScript para trabajar con datos numéricos.

| Constructor         | Numeric type                                             |
| ------------------- | -------------------------------------------------------- |
| Int8Array()         | signed bytes                                             |
| Uint8Array()        | unsigned bytes                                           |
| Uint8ClampedArray() | unsigned bytes without rollover                          |
| Int16Array()        | signed 16-bit short integers                             |
| Uint16Array()       | unsigned 16-bit short integers                           |
| Int32Array()        | signed 32-bit integers                                   |
| Uint32Array()       | unsigned 32-bit integers                                 |
| BigInt64Array()     | signed 64-bit BigInt values (ES2020)                     |
| BigUint64Array()    | unsigned 64-bit BigInt values (ES2020)                   |
| Float32Array()      | 32-bit floating-point value                              |
| Float64Array()      | 64-bit floating-point value: a regular JavaScript number |

### 11.2.2. Creating Typed Arrays

Constructor:

    ```javascript
    let bytes = new Uint8Array(1024); // 1024 bytes
    let matrix = new Float64Array(9); // A 3x3 matrix
    let point = new Int16Array(3); // A point in 3D space
    let rgba = new Uint8ClampedArray(4); // A 4-byte RGBA pixel value
    let sudoku = new Int8Array(81); // A 9x9 sudoku board
    ```

### 11.2.3. Using Typed Arrays

Una vez que has creado un **typed array** (array tipado), puedes leer y escribir sus elementos con la notación de corchetes regular, justo como lo harías con cualquier otro objeto similar a un *array*:

    ```javascript
    // Devuelve el número primo más grande menor que n, usando la criba de Eratóstenes
    function sieve(n) {
    let a = new Uint8Array(n+1); // a[x] será 1 si x es compuesto
    let max = Math.floor(Math.sqrt(n)); // No usar factores mayores que este
    let p = 2; // 2 es el primer primo
    while(p <= max) { // Para primos menores que max
    for(let i = 2*p; i <= n; i += p) // Marca los múltiplos de p como compuestos
    a[i] = 1;
    while(a[++p]) /* empty */; // El siguiente índice sin marcar es primo
    }
    while(a[n]) n--; // Itera hacia atrás para encontrar el último primo
    return n; // Y devuélvelo
    }
    ```

La función aquí calcula el número primo más grande inferior al número que especificas. El código es exactamente el mismo que si usaras un *array* de JavaScript regular, pero usar **`Uint8Array()`** en lugar de **`Array()`** hace que el código se ejecute más de **cuatro veces más rápido** y use **ocho veces menos memoria** en mis pruebas.

Los *typed arrays* no son *arrays* verdaderos, pero re-implementan la mayoría de los métodos de *array*, por lo que puedes usarlos casi igual que usarías *arrays* regulares:

    ```javascript
    let ints = new Int16Array(10); // 10 enteros cortos
    ints.fill(3).map(x=>x*x).join("") // => "9999999999"
    ```

⚠️ Reglas Importantes de los Typed Arrays

Recuerda que los *typed arrays* tienen longitudes **fijas**, por lo que la propiedad **`length`** es de solo lectura.

- **Métodos NO implementados (cambian longitud):** Los métodos que cambian la longitud del *array* (como `push()`, `pop()`, `unshift()`, `shift()` y `splice()`) **no** están implementados para *typed arrays*.
- **Métodos SÍ implementados (no cambian longitud):** Los métodos que alteran el contenido de un *array* sin cambiar la longitud (como `sort()`, `reverse()` y `fill()`) sí están implementados.
- **Retorno de Métodos:** Los métodos como `map()` y `slice()` que devuelven nuevos *arrays*, devuelven un **typed array** del mismo tipo que aquel sobre el que se llamaron.

### 11.2.4. Typed Array Methods and Properties

🔥 1. ¿Qué es un Typed Array?

Son **arrays especiales** que guardan datos binarios reales en memoria (no como los arrays normales de JS).

Ejemplo:

    ```js
    let bytes = new Uint8Array(4);
    ```

➡️ Crea un arreglo de **4 bytes reales** en memoria (Uint8 = entero sin signo de 0 a 255).

Todos los typed arrays usan un **ArrayBuffer**, que es la memoria cruda (bytes).

🔥 2. El método `.set()` de los Typed Arrays

`set()` copia **muchos valores de golpe** desde otro array (normal o typed array).

Ejemplo del libro explicado

    ```js
    let bytes = new Uint8Array(1024);       // Un buffer de 1024 bytes
    let pattern = new Uint8Array([0,1,2,3]); // 4 bytes
    ```

Copiar al inicio (posición 0)

    ```js
    bytes.set(pattern);
    ```

Ahora los primeros 4 bytes son:

    ```
    0 1 2 3
    ```

Copiar en otra posición

    ```js
    bytes.set(pattern, 4);
    ```

Ahora los bytes 4..7 son:

    ```
    0 1 2 3
    ```

También acepta arrays normales

    ```js
    bytes.set([0,1,2,3], 8);
    ```

➡️ Muy útil para copiar datos a buffers sin loops.

Es extremadamente rápido porque copia bytes directamente en memoria.

🔥 3. `.slice()` vs `.subarray()` (muy importante)

Ambos “extraen” parte de un typed array…

**pero NO funcionan igual.**

✔ `.slice()` **CREA un nuevo array independiente**

    ```js
    let a = new Uint8Array([1,2,3,4]);
    let b = a.slice(0,2);
    ```

Ahora:

- `b` tiene valores `[1,2]`
- `b` NO comparte memoria con `a`
- Si cambias `a`, `b` no cambia (y viceversa)

➡️ Copia los bytes.

✔ `.subarray()` **NO copia memoria**

Solo crea una nueva *vista* sobre el mismo buffer.

    ```js
    let ints = new Int16Array([0,1,2,3,4,5,6,7,8,9]);

    let last3 = ints.subarray(ints.length - 3, ints.length);
    ```

`last3` contiene:

    ```js
    7 8 9
    ```

Pero **es la misma memoria** que `ints`, solo vista desde otra posición.

Demostración:

    ```js
    ints[9] = -1;
    last3[2]; // => -1 (cambió también)
    ```

➡️ **subarray() NO copia datos, solo apunta a otra parte del mismo buffer**

Esto es súper útil para trabajar con partes de datos binarios sin duplicar memoria.

🔥 4. Propiedades del Typed Array relacionadas al buffer

Todo typed array tiene:

    ```js
    array.buffer      // El ArrayBuffer real (la memoria)
    array.byteOffset  // Dónde empieza este array dentro del buffer
    array.byteLength  // Cuántos bytes representa este array
    ```

Ejemplo del libro:

    ```js
    last3.buffer === ints.buffer // true, comparten memoria
    ```

`last3.byteOffset = 14`

Por qué 14:

- Cada `Int16` ocupa 2 bytes
- `last3` empieza en el elemento 7 del array original
- 7 × 2 = **14 bytes**

`last3.byteLength = 6`
Porque contiene 3 elementos
3 × 2 bytes = **6 bytes**

🔥 5. **MUY IMPORTANTE:** el ArrayBuffer NO es un array

Tu buffer es memoria cruda, NO puedes hacer:

    ```js
    bytes.buffer[0] // ❌
    ```

Esto NO lee un byte del buffer.
Solo crea una propiedad normal en el objeto (muy confuso).

Ejemplo:

    ```js
    bytes.buffer[1] = 255;
    bytes[1] // sigue siendo 0
    ```

➡️ Para leer bytes usa SIEMPRE un TypedArray, NUNCA el buffer directamente.

🔥 6. Crear múltiples “vistas” sobre el mismo buffer

Este patrón es común:

    ```js
    let bytes = new Uint8Array(1024);     // 1024 bytes
    let ints = new Uint32Array(bytes.buffer);  // vista de enteros (4 bytes)
    let floats = new Float64Array(bytes.buffer); // vista de dobles (8 bytes)
    ```

Todas estas views ven **los mismos datos**, solo interpretados diferente.

📌 Resumen simple

✔ `set()`

Copia muchos valores dentro del typed array:

    ```js
    rápido, directo, sin loops
    ```

✔ `slice()`

Devuelve una copia independiente:

    ```js
    NUEVA memoria
    ```

✔ `subarray()`

Devuelve una vista sobre la misma memoria:

    ```js
    MISMA memoria → si cambias un lado, cambia el otro
    ```

✔ Typed arrays tienen:

- `.buffer` → memoria cruda
- `.byteOffset` → inicio dentro de la memoria
- `.byteLength` → tamaño en bytes

✔ ArrayBuffer NO es un array

No uses indexación como `[0]`.

✔ Puedes crear muchas vistas del mismo buffer

Para interpretar los mismos bytes como distintos tipos numéricos.

### 11.2.5. DataView and Endianness

Lo que explican en el libro:

1. Qué es **endianness** (orden de bytes en memoria)
2. Cómo los **Typed Arrays** revelan ese orden
3. Por qué NO puedes confiar en el endianness del hardware cuando procesas datos externos
4. Por qué existe **DataView** y cómo se usa

Vamos por partes.

🔥 1. ¿Qué es “endianness”?

Cuando guardas un número que ocupa más de 1 byte, el sistema debe decidir **en qué orden pone los bytes en memoria**.

Ejemplo: representemos el número:

    ```js
    0x00000001
    ```

Este número ocupa 4 bytes:

    ```js
    00 00 00 01
    ```

Hay dos formas de guardarlo en memoria:

✔ LITTLE-ENDIAN

Guarda **el byte menos significativo primero**:

    ```js
    01 00 00 00
    ```

✔ BIG-ENDIAN

Guarda **el byte más significativo primero**:

    ```js
    00 00 00 01
    ```

🔥 2. ¿Qué usan las computadoras actuales?

La mayoría (Intel, AMD, ARM modernos) son **little-endian**, o sea:

    ```js
    least significant → first byte
    ```

🔥 3. Los Typed Arrays usan SIEMPRE el endianness del hardware

Esto significa que si creas un:

    ```js
    new Int32Array([1])
    ```

La memoria REAL del buffer será:

- `01 00 00 00` → en sistemas little-endian
- `00 00 00 01` → en big-endian

El libro prueba esto con:

    ```js
    let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;
    ```

¿Qué hace este código?

1. Crea un Int32Array con el valor `1`
2. Mira la memoria byte por byte con un Int8Array
3. Si el primer byte es `1` → entonces está en orden `01 00 00 00` → little-endian

🔥 4. Problema real: muchos archivos y protocolos usan **big-endian**

Ejemplos:

- formatos de imagen (JPEG)
- formatos de video
- ZIP
- formatos binarios antiguos
- protocolos de red

Pero tu CPU es casi seguro **little-endian**.

➡️ **Entonces NO puedes confiar en que `new Int32Array(...)` interprete los bytes correctamente.**

🔥 5. Solución: usar **DataView**

DataView te deja leer bytes en el orden que tú quieras:

- big-endian (por defecto)
- little-endian (si pasas `true`)

Ejemplo del libro explicado:

    ```js
    let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    ```

Ahora puedes leer:

    ```js
    let int = view.getInt32(0);        // big-endian por defecto
    int = view.getInt32(4, false);     // big-endian, explícito
    int = view.getUint32(8, true);     // little-endian
    ```

Y escribir:

    ```js
    view.setUint32(8, int, false);    // escribir en big-endian
    ```

🔥 6. ¿Por qué los Typed Arrays NO sirven para muchos datos externos?

Porque:

- `Int16Array`, `Int32Array`, etc.
  siempre interpretan los bytes según **el orden del CPU**.

Pero cuando abres un archivo/imagen/video/ZIP, los bytes **pueden estar en big-endian**, y entonces el TypedArray va a interpretarlos mal.

🔥 7. Entonces, ¿cómo trabajar bytes externos?

✔ Si necesitas trabajar **byte por byte**, sí puedes usar:

- `Uint8Array`
- `Int8Array`

Estos no tienen problema porque son de un byte.

✔ Si necesitas interpretar números más grandes (16, 32, 64 bits), usa:

- `DataView`

DataView te permite:

- leer un número DE CUALQUIER TAMAÑO
- decidir el orden de bytes tú mismo
- escribir con el orden que necesitas

🔥 8. Métodos de DataView

Tiene 10 getters:

    ```js
    getInt8
    getUint8
    getInt16
    getUint16
    getInt32
    getUint32
    getBigInt64
    getBigUint64
    getFloat32
    getFloat64
    ```

Y sus equivalentes setters.

Regla:

- **Si no pasas el segundo argumento → big-endian**
- **Si pasas `true` → little-endian**

📌 RESUMEN FINAL SUPER CLARO

✔ TypedArrays (como Int32Array, Float64Array…)

- Usan SIEMPRE el endianness del CPU
- Son rápidos
- NO sirven directamente para archivos o datos que no coincidan con ese orden

✔ Los archivos/redes casi siempre usan **big-endian**

Tu CPU casi siempre usa **little-endian**

➡️ Necesitas conversión.

✔ DataView

Es la herramienta correcta para trabajar con:

- archivos binarios
- protocolos de red
- formatos de imagen/video/audio

Porque te deja controlar el orden de bytes de forma explícita.

## 11.3. Pattern Matching with Regular Expressions

Una **expresión regular** es un objeto que describe un **patrón textual**. La clase **`RegExp`** de JavaScript representa expresiones regulares, y tanto **`String`** como **`RegExp`** definen métodos que utilizan expresiones regulares para realizar potentes funciones de **coincidencia de patrones** y de **búsqueda y reemplazo** en texto.

Sin embargo, para poder utilizar la **API `RegExp`** de forma efectiva, también debes aprender a describir patrones de texto utilizando la **gramática de las expresiones regulares**, que es esencialmente un mini lenguaje de programación propio. Afortunadamente, la gramática de las expresiones regulares de JavaScript es bastante similar a la gramática utilizada por muchos otros lenguajes de programación, por lo que quizás ya estés familiarizado con ella. (Y si no lo estás, el esfuerzo que inviertas en aprender las expresiones regulares de JavaScript probablemente te será útil en otros contextos de programación también).

Las subsecciones que siguen describen primero la gramática de las expresiones regulares y luego, después de explicar cómo escribirlas, explican cómo puedes usarlas con los métodos de las clases **`String`** y **`RegExp`**.

### 11.3.1 Defining Regular Expressions

In JavaScript, regular expressions are represented by RegExp objects. (RegExp() constructor)

Estos dos son equivalentes:

    ```javascript
    //  the regular expression /s$/ contains two characters. The first, “s”, matches itself literally. The second, “$”, is a special meta-character that matches the end of a string. Thus, this regular expression matches any string that contains the letter “s” as its last character.
    let pattern = /s$/;

    let pattern = new RegExp("s$");
    ```

- The regular expression /java/ matches any string that contains the substring “java”
- lo que va despues del `/` se llaman fags y cambian el comportamiento de los literals dentro de `/-/`
- `^ $ . * + ? = ! : | \ / ( ) [ ] { }` estos son los simbolos de puntuacion que se deben de tener en cuenta ya que de acuerdo al conexto pueden cambiar su significado.
- **Character classes**
  - `/[abc]/` matches any one of the letters a, b, or c.
  - `/[^abc]/` matches any one character other than a, b, or c.
  - `/[a-z]/` to match any letter or digit from the Latin alphabet
  - Esta la tabla 11.2 en la pagina 284 la cual describe formas abreviadas de como hacer el matching en los casos mas comunes
- **Repetition**
  - Se encuentra la Table 11-3. Regular expression repetition characters
- **Non-greedy repetition**
- **Alternation, grouping, and references**
  - Table 11-4. Regular expression alternation, grouping, and reference characters
- **Specifying match position**
  - Table 11-5. Regular expression anchor characters
- **Flags**

### 11.3.2. String Methods for Pattern Matching

How those regular expressions can actually be used in JavaScript code.

- **search()**

        ```javascript
        "JavaScript".search(/script/iu); // => 4
        "Python".search(/script/iu); // => -1
        ```

- **replace()**

        ```javascript
        // No matter how it is capitalized, replace it with the correct capitalization
        text.replace(/javascript/gi, "JavaScript");
        ```

- **match()**

        ```javascript
        "7 plus 8 equals 15".match(/\d+/g); // => ["7", "8", "15"]
        ```

- **matchAll()**

- **split()**

### 11.3.3. The RegExp Class

This section documents the RegExp() constructor, the properties of RegExp instances, and two important pattern-matching methods defined by the RegExp class.

Los objetos **`RegExp`** tienen las siguientes propiedades:

- **`source`**
        - Esta propiedad de **solo lectura** es el texto fuente de la expresión regular: los caracteres que aparecen entre las barras en un literal **`RegExp`**.
- **`flags`**
        - Esta propiedad de **solo lectura** es una cadena que especifica el conjunto de letras que representan las **banderas** (*flags*) de la **`RegExp`**.
- **`global`**
        - Propiedad booleana de solo lectura que es `true` si la bandera **`g`** está establecida.
- **`ignoreCase`**
        - Propiedad booleana de solo lectura que es `true` si la bandera **`i`** está establecida.
- **`multiline`**
        - Propiedad booleana de solo lectura que es `true` si la bandera **`m`** está establecida.
- **`dotAll`**
        - Propiedad booleana de solo lectura que es `true` si la bandera **`s`** está establecida.
- **`unicode`**
        - Propiedad booleana de solo lectura que es `true` si la bandera **`u`** está establecida.
- **`sticky`**
        - Propiedad booleana de solo lectura que es `true` si la bandera **`y`** está establecida.
- **`lastIndex`**
        - Esta propiedad es un entero de **lectura/escritura**. Para patrones con las banderas `g` o `y`, especifica la posición del carácter en la que debe comenzar la siguiente búsqueda. Es utilizada por los métodos **`exec()`** y **`test()`**, descritos en las dos subsecciones siguientes.

Y los metodos

- **test()**

- **exec()**

## 11.4. Dates and Times

La clase **`Date`** es la API de JavaScript para trabajar con fechas y horas. Crea un objeto **`Date`** con el constructor **`Date()`**. Sin argumentos, devuelve un objeto `Date` que representa la fecha y hora actuales:

    ```javascript
    let now = new Date(); // La hora actual
    ```

🗓️ Formas de Inicializar `Date`

- **Un argumento numérico:** El constructor **`Date()`** interpreta ese argumento como el número de **milisegundos** transcurridos desde la época de 1970 (1 de enero de 1970, GMT):

        ```javascript
        let epoch = new Date(0); // Medianoche, 1 de enero de 1970, GMT
        ```

- **Múltiples argumentos enteros (Zona Horaria Local):** Se interpretan como el año, mes, día del mes, hora, minuto, segundo y milisegundo en tu **zona horaria local**:

        ```javascript
        let century = new Date(2100, // Año 2100
                            0,    // Enero (¡Mes 0!)
                            1,    // Día 1
                            2, 3, 4, 5); // 02:03:04.005, hora local
        ```

    Una peculiaridad de la API **`Date`** es que el primer mes del año es el número **0**, pero el primer día del mes es el número **1**. Si se omiten los campos de tiempo, se establecen por defecto a medianoche (00:00:00).

- **Especificación UTC:** Si quieres especificar una fecha y hora en **UTC** (*Universal Coordinated Time* o GMT), puedes usar el método estático **`Date.UTC()`**. Este método toma los mismos argumentos, los interpreta en UTC y devuelve una marca de tiempo que se pasa al constructor `Date()`:

        ```javascript
        // Medianoche en Inglaterra, 1 de enero de 2100
        let century = new Date(Date.UTC(2100, 0, 1)); 
        ```

- **Cadena (*String*):** Si pasas una cadena, el constructor intentará analizarla. Funciona con formatos como los producidos por `toString()`, `toUTCString()` y `toISOString()`:

        ```javascript
        let isoDate = new Date("2100-01-01T00:00:00Z"); // Una fecha en formato ISO
        ```

⚙️ Métodos Getters y Setters

Una vez que tienes un objeto **`Date`**, los métodos *get* y *set* te permiten consultar y modificar sus campos. Cada método tiene dos formas: una para la hora local y otra para la hora UTC.

| Propósito | Hora Local | Hora UTC |
| :--- | :--- | :--- |
| **Año** | `getFullYear()` | `getUTCFullYear()` |
| **Mes** | `getMonth()` | `getUTCMonth()` |
| **Día del mes** | **`getDate()`** | **`getUTCDate()`** |

- **Ejemplo de Modificación:**

        ```javascript
        let d = new Date(); // Fecha actual
        d.setFullYear(d.getFullYear() + 1); // Incrementa el año
        ```

⚠️ ¡Cuidado con el Día!

Los métodos para consultar el **día del mes** son **`getDate()`** y **`getUTCDate()`**.

Las funciones que devuelven el **día de la semana** (0 para domingo hasta 6 para sábado) son **`getDay()`** y **`getUTCDay()`**. El día de la semana es de **solo lectura**, por lo que no existe un método `setDay()`.

### 11.4.1. Timestamps

JavaScript representa las fechas internamente como **números enteros** que especifican el número de **milisegundos** desde (o antes de) la medianoche del 1 de enero de 1970, hora **UTC**.

Como agregar 30 segundos a un tiempo pre-definido

    ```javascript
    d.setTime(d.getTime() + 30000);
    ```

### 11.4.2. Date Arithmetic

- Se pueden usar los operadores `<, <=, >, and >=`
- Para realizar operaciones aritméticas con fechas que involucren días, meses y años, puedes usar `setDate()`, `setMonth()` y `setYear()`. Aquí, por ejemplo, hay un código que agrega tres meses y dos semanas a la fecha actual:

        ```javascript
        let d = new Date();
        d.setMonth(d.getMonth() + 3, d.getDate() + 14);
        ```

### 11.4.3. Formatting and Parsing Date Strings

Algunos ejemplos de los diferentes formatos (string formating) que se pueden imprimir

        ```javascript
        let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on New Year's Day 2020
        d.toString(); // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
        d.toUTCString(); // => "Thu, 02 Jan 2020 01:10:30 GMT"
        d.toLocaleDateString(); // => "1/1/2020": 'en-US' locale
        d.toLocaleTimeString(); // => "5:10:30 PM": 'en-US' locale
        d.toISOString(); // => "2020-01-02T01:10:30.000Z"
        ```

Esta es una lista completa de los métodos de formato de cadena de la clase **`Date`**:

📅 Métodos de Formato de Cadena de `Date`

- **`toString()`**
        - Utiliza la **zona horaria local** pero no formatea la fecha y hora de una manera sensible a la configuración regional (*locale-aware*).
- **`toUTCString()`**
        - Utiliza la **zona horaria UTC** pero no formatea la fecha de una manera sensible a la configuración regional.
- **`toISOString()`**
        - Imprime la fecha y hora en el formato estándar *año-mes-día horas:minutos:segundos.ms* del estándar **ISO-8601**. La letra **"T"** separa la fecha de la hora. La hora se expresa en **UTC**, y esto se indica con la letra **"Z"** al final de la salida.
- **`toLocaleString()`**
        - Utiliza la **zona horaria local** y un formato que es apropiado para la **configuración regional** del usuario.
- **`toDateString()`**
        - Formatea solo la **porción de la fecha** y omite la hora. Utiliza la zona horaria local y no realiza un formato apropiado para la configuración regional.
- **`toLocaleDateString()`**
        - Formatea solo la **fecha**. Utiliza la zona horaria local y un formato de fecha apropiado para la configuración regional.
- **`toTimeString()`**
       - Formatea solo la **hora** y omite la fecha. Utiliza la zona horaria local pero no formatea la hora de una manera sensible a la configuración regional.
- **`toLocaleTimeString()`**
       - Formatea la **hora** de una manera sensible a la configuración regional y utiliza la zona horaria local.

Ninguno de estos métodos de fecha a cadena es ideal al formatear fechas y horas para ser mostradas a los usuarios finales. Consulta la sección §11.7.2 para una técnica de formato de fecha y hora más general y sensible a la configuración regional.

La referencia a la sección §11.7.2 se refiere a la **API `Intl`**.

## 11.5. Error Classes

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_error.asp) imformacion mas detallada del object error

- La importancia del throw and catch (pueden atrapar cualquier datatype o valor en javascript incluyendo primitivos)
- Error solo funciona si se declara en el mismo lado que el throw
- Propiedades que posee: message and name, y el method toString() y en los browsers la propiedad stack que recoge el trace del error
- También existen subclases para categorizar mas exactamente los errores
- Ejemplo de como utilizar el error clase:

        ```javascript
        class HTTPError extends Error {
        constructor(status, statusText, url) {
            super(`${status} ${statusText}: ${url}`);
            this.status = status;
            this.statusText = statusText;
            this.url = url;
        }
        get name() {
            return "HTTPError";
        }
        }

        let error = new HTTPError(404, "Not Found", "http://example.com/");
        error.status; // => 404
        error.message; // => "404 Not Found: http://example.com/"
        error.name; // => "HTTPError"
        ```

## 11.6. JSON Serialization and Parsing

La **serialización** es el proceso de convertir datos que tienen diferentes tipos (*datatypes*) a un **formato uniforme** (típicamente una cadena de texto) que permita la **transmisión segura y ordenada** a través de la red o su almacenamiento. Para lograr esto se utiliza el formato **JSON** (*JavaScript Object Notation*).

📄 Tipos Soportados y Limitaciones de JSON

✅ JSON SÍ soporta:

- Números y cadenas primitivas.
- Los valores `true`, `false` y `null`.
- *Arrays* y objetos construidos a partir de esos valores primitivos.

❌ JSON NO soporta:

- JSON **no soporta** otros tipos de JavaScript como **`Map`**, **`Set`**, **`RegExp`**, **`Date`** o *typed arrays*.

🔄 Funciones Principales

Las funciones principales de JSON son para convertir entre objetos de JavaScript (listos para usar en memoria) y cadenas de JSON (listas para transmitir):

- **`JSON.stringify()`**: Convierte un objeto de JavaScript en una cadena de texto JSON (serialización).
- **`JSON.parse()`**: Convierte una cadena de texto JSON en un objeto de JavaScript (deserialización).

Ejemplo de Conversión

        ```javascript
        let o = { s: "", n: 0, a: [true, false, null] };
        let s = JSON.stringify(o); // s == '{"s":"","n":0,"a":[true,false,null]}' (Cadena JSON)
        let copy = JSON.parse(s); // copy == {s: "", n: 0, a: [true, false, null]} (Objeto JS)
        ```

### 11.6.1. JSON Customizations

Ojo con los DATES, al traerlos de vuelta a javascript desde un json, hay errores que se deben de tener en cuenta y para ello se utiliza el segundo argumetno que acepta el JSON.parse().

- here is a call to JSON.parse() that uses a reviver function to filter some properties and to re-create Date objects

        ```javascript
        let data = JSON.parse(text, function (key, value) {
        // Remove any values whose property name begins with an underscore
        if (key[0] === "_") return undefined;
        // If the value is a string in ISO 8601 date format convert it to a Date.
        if (
            typeof value === "string" &&
            /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
        ) {
            return new Date(value);
        }
        // Otherwise, return the value unchanged
        return value;
        });
        ```

## 11.7. The Internationalization API

La **API de Internacionalización** de JavaScript (**`Intl`**) consiste en tres clases principales: **`Intl.NumberFormat`**, **`Intl.DateTimeFormat`** y **`Intl.Collator`**. Estas clases nos permiten dar formato a números (incluyendo cantidades monetarias y porcentajes), fechas y horas de manera apropiada para la **configuración regional** (*locale*) y comparar cadenas de forma sensible a dicha configuración.

- Una de las partes más importantes de la **internacionalización** es mostrar texto que ha sido traducido al idioma del usuario.

### 11.7.1. Formatting Numbers

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

### 11.7.2. Formatting Dates and Times

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

### 11.7.3. Comparing Strings

Hay que tener cuidado al hacer un re-ordenamiento (sort()) alfabético ya que en ingles hay un orden de letras que va perfecto con la nomenclatura ASCII pero en otros idiomas no, para eso se tiene un compare() que se adiciona al sort() y asi poder hacer un re-ordenamiento acorde.

## 11.8. The Console API

[**AQUI**](https://www.w3schools.com/jsref/api_console.asp) mas informacion acerca de la API console

### 11.8.1. Formatted Output with Console

Poco conocido pero se le puede dar formato a la consola, basico, pero se puede.

## 11.9. URL APIs

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

### 11.9.1. Legacy URL Functions

Antes de la definición de la API **`URL`** descrita anteriormente, hubo múltiples intentos de admitir el escape y desescape de URL en el núcleo del lenguaje JavaScript. El primer intento fueron las funciones definidas globalmente **`escape()`** y **`unescape()`**, que ahora están **obsoletas** (*deprecated*) pero todavía están ampliamente implementadas. **No deben utilizarse**.

## 11.10. Timers

Since the earliest days of JavaScript, web browsers have defined two functions, setTimeout() and setInterval().

El primer argumento de **`setTimeout()`** es una función, y el segundo argumento es un número que especifica cuántos **milisegundos** deben transcurrir antes de que se invoque la función.

Después de la cantidad de tiempo especificada (y quizás un poco más si el sistema está ocupado), la función se invocará sin argumentos. Aquí, por ejemplo, hay tres llamadas a `setTimeout()` que imprimen mensajes en la consola después de uno, dos y tres segundos:

        ```javascript
        setTimeout(() => { console.log("Ready..."); }, 1000);
        setTimeout(() => { console.log("set..."); }, 2000);
        setTimeout(() => { console.log("go!"); }, 3000);
        ```
Tanto **`setTimeout()`** como **`setInterval()`** devuelven un valor. Si guardas este valor en una variable, puedes usarlo más tarde para **cancelar la ejecución** de la función pasándolo a **`clearTimeout()`** o **`clearInterval()`**.

El valor devuelto es típicamente un número en los navegadores web y un objeto en Node. El tipo real no importa, y debes tratarlo como un **valor opaco** (solo utilizable para la cancelación).

Lo único que puedes hacer con este valor es pasarlo a **`clearTimeout()`** para cancelar la ejecución de una función registrada con `setTimeout()` (asumiendo que aún no se haya invocado) o para detener la ejecución repetida de una función registrada con **`setInterval()`**.

⏰ Ejemplo de Cancelación (Reloj Digital)

Aquí hay un ejemplo que demuestra el uso de `setTimeout()`, `setInterval()` y `clearInterval()` para mostrar un reloj digital simple con la API de la Consola:

    ```javascript
    // Una vez por segundo: limpia la consola e imprime la hora actual
    let clock = setInterval(() => {
        console.clear();
        console.log(new Date().toLocaleTimeString());
    }, 1000);

    // Después de 10 segundos: detiene el código repetitivo anterior.
    setTimeout(() => { 
        clearInterval(clock); 
    }, 10000);
    ```

La principal diferencia entre estas dos funciones es que **`setTimeout()`** ejecuta una función una sola vez, mientras que **`setInterval()`** la ejecuta repetidamente.
