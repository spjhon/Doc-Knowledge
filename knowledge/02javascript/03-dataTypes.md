---
sidebar_position: 3
---

# 3. Types, Values and Variables

## 3.1. Overview and Definitions

- Existen primitive type y el resto, el absoulto resto es un object incluyendo a las clases y las funciones.
- Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or undefined is an object.
- JavaScript’s object types are mutable and its primitive types are immutable. Numbers, booleans, symbols, null, and undefined are immutable.
- En null y undefined no se pueden invocar metodos.
- Al decir que javascript funciona como si fuera object oriented es que a los objects que son los arrays y funciones, se le pueden invocar metodos del tipo a.metodo().

Para cada dataType hay una herencia de propiedades y metodos que vienen desde el sistema llamado prototype con el fin de otorgar propiedades y metodos (funciones) para la manipulacion de esos [**DataTypes**](dataTypes).

Tambien para cada [**DataType**](https://www.w3schools.com/jsref/default.asp) existe un conjunto de build-in propiedades y metodos que permiten la manipulacion de este tipos de [**DataType**](https://www.w3schools.com/jsref/default.asp) sin necesidad de crear funciones u objects especializados.

- El lenguaje hace un automatic garbaje collection, el garbaje collection es una forma de eliminar de la memoria variables e invicaciones que no se esten utilizando o que se hayan dejado de utilizar.
- La diferencia entre el comparador == y === es que el primero intenta convertir el datatype para ver si asi si coinciden.
- JavaScript’s object types are mutable and its primitive types are immutable.

### 3.1.1. Primitives con un toque de typescript

Here's the TypeScript syntax for declaring variables of each primitive type:

1.`null`:

```typescript
let myNull: null = null;
```

2.`undefined`:

```typescript
let myUndefined: undefined = undefined;
```

3.`boolean`:

```typescript
let myBoolean: boolean = true; // or false
```

4.`string`:

```typescript
let myString: string = ""; // or "Hi!", "abc123", etc.
```

5.`number`:

```typescript
let myNumber: number = 0; // or 2.1, -4, etc.
```

6.`bigint`:

```typescript
let myBigInt: bigint = 0n; // or 2n, -4n, etc.
```

7.`symbol`:

```typescript
let mySymbol: symbol = Symbol(); // or Symbol("hi"), etc.
```

8.`Date`:

```typescript
let myDate: Date = new Date(); // current date and time
```

You can declare variables using the respective primitive types and assign values accordingly.

### 3.1.2. Data Structures con un toque de typescript

1.**Arrays**:

```typescript
// Arrays
let myArray1: number[] = [1, 2, 3]; // Array of numbers
let myArray2: string[] = ["hello", "world"]; // Array of strings
```

2.**Objects**:

```typescript
// Objects
let myObject: { name: string, age: number } = { name: "John", age: 30 };
```

3.**Functions**:

```typescript
// Functions
function add(x: number, y: number): number {
    return x + y;
}
```

4.**Enums**:

```typescript
// Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let myDirection: Direction = Direction.Up;
```

5.**Tuples**:

```typescript
// Tuples
let myTuple: [string, number] = ["hello", 10];
```

6.**Any**:

```typescript
// Any
let myAny: any = "hello";
```

7.**Void**:

```typescript
// Void
function logMessage(message: string): void {
    console.log(message);
}
```

8.**Never**:

```typescript
// Never
function throwError(message: string): never {
    throw new Error(message);
}
```

These are the basic syntax examples for each of the mentioned TypeScript data types. You can create variables, functions, or enums using these syntax patterns.

---

## 3.2. Numbers Type

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_number.asp) Encontrara todos los metodos para aplicar al DataType **Number**

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_date.asp) Encontrara todos los metodos para aplicar al DataType **Date**

[**AQUI**](https://www.w3schools.com/jsref/jsref_oper_arithmetic.asp) Encontrara todos los operadores aritmeticos

- JavaScript represents numbers using the 64-bit floating point format.
- Javascript reconoce en sus literales (literals)

1. Integers Literals
2. Floating Point Literals
3. Hexadecimales
4. Binarios
5. Octales

- Los decimales son llamados floating points

### 3.2.3. Arithmetic in JavaScript

La **aritmetica** en javascript se hace mas que todo con el method Math [**AQUI**](https://www.w3schools.com/jsref/jsref_obj_math.asp) y los operadores aritmeticos.

- Habla sobre los casos especiales `NaN, Null, -INFINITY, INFINITY`
- BigInt
- Date Object

### 3.2.4. Binary Floating-Point and Rounding Errors

- Ojo, cuando se trabaja con numeros reales, javascript solo puede ser exacto hasta cierto punto.
- Tener cuidado cuando se trabaje con decimales ya que no hay exactitud de igualdad (===) cuando se hacen operaciones con decimales.

Si estas aproximaciones con números de punto flotante son problemáticas para tus programas, considera usar enteros escalados.
Por ejemplo, podrías manejar valores monetarios como centavos enteros en lugar de dólares con decimales.

#### **Solución con "scaled integers" (enteros escalados)**

La idea es **trabajar con números enteros**, multiplicando tus valores por una escala (por ejemplo, 100 para representar centavos).

```js
// En vez de trabajar con dólares:
let total = 0.1 + 0.2; // 0.30000000000000004 (error)
console.log(total);

// Usa centavos (enteros)
let totalCents = 10 + 20; // 30 centavos
console.log(totalCents / 100); // 0.3 (resultado exacto)
```

- Los números decimales pueden ser imprecisos en cálculos.
- “Scaled integers” significa **trabajar con enteros multiplicados por una escala fija** (por ejemplo, 100 para dinero).
- Esto evita los errores de redondeo típicos de los decimales.

### 3.2.5. Arbitrary Precision Integers with BigInt

- Este tipo se añadió a JavaScript principalmente para permitir la representación de enteros de 64 bits, necesarios para la compatibilidad con muchos otros lenguajes de programación y API.
- Puedes usar BigInt() como función para convertir números o cadenas de JavaScript normales a valores BigInt.
- Ninguna de las funciones del objeto Math acepta operandos BigInt.

### 3.2.6. Dates and times

En Las fechas en JavaScript son objetos, pero también tienen una representación numérica como marca de tiempo que especifica el número de milisegundos transcurridos desde el 1 de enero de 1970.

```js
let timestamp = Date.now(); // The current time as a timestamp (a number).
let now = new Date(); // The current time as a Date object.
let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.
```

[**AQUI**](https://www.w3schools.com/js/js_date_reference.asp) encontrara los metodos que se le pueden aplicar a un datatype tipo DATE.

The Date class and its methods are covered in detail in §11.4.

## 3.3. Text

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_string.asp) Encontrara todos los metodos para aplicar al DataType String

- En JavaScript, el tipo de dato para representar texto es la cadena (string). Una cadena es una secuencia ordenada e inmutable de valores de 16 bits, cada uno de los cuales suele representar un carácter Unicode.

```javascript
let euro = "€";
let love = "❤";
euro.length; // => 1: this character has one 16-bit element
love.length; // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
```

- The empty string is the string of length 0.
- Most string-manipulation methods defined by JavaScript operate on 16-bit values, not characters.
- To include a string in a JavaScript program, simply enclose the characters of the string within a matched pair of single or double quotes or backticks (' or " or `)

### 3.3.1. String Literals

```javascript
""; // The empty string: it has zero characters
"testing";
"3.14";
'name="myform"';
"Wouldn't you prefer O'Reilly's book?";
"τ is the ratio of a circle's circumference to its radius"`"She said 'hi'", he said.`;
```

### 3.3.2. Escape Sequences in String Literals

Hay una tabla que muestra todos los tipos de scape que se pueden apicar a un string en la pagina 34

Remember that strings are immutable in JavaScript. Methods like replace() and toUpperCase() **return new strings:** they do not modify the string on which they are invoked.

### 3.3.3. Working with Strings

- Algo de los strings es que con el operador + en numeros los suma, pero en strings los concatena.

```javascript
let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;
```

- Con los strings se puede utilizar el operador === para compararlos ya que seria la misma secuencia de 16-bit
- En la pagina 35 se puede apreciar una lista de metodos que se pueden aplicar a los strings.
- Recordar que los strings pertenecen a los inmutables, osea que los metodos aplicados a ellos retornan un nuevo string mas no modifican el original.

- **Concatenation**:
  Strings can also be treated like read-only arrays, and you can access individual characters (16-bit values) from a string using square brackets instead of the charAt() method:

```javascript
let s = "hello, world";
s[0]; // => "h"
s[s.length - 1]; // => "d"

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;
```

### 3.3.4. Template literals: para empotrar variables en strings

```javascript
let name = "Bill";
let greeting = `Hello ${name}.`; // greeting == "Hello Bill."
```

- **Tagged template literals**

```javascript
`\n`.length; // => 1: the string has a single newline character
String.raw`\n`.length; // => 2: a backslash character and the letter n
```

### 3.3.5. Pattern Matching REGexp

```javascript
/^HTML/; // Match the letters H T M L at the start of a string
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i; // Match "javascript" as a word, case-insensitive

let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text); // => true: a match exists
text.search(pattern); // => 9: position of first match
text.match(pattern); // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/); // => ["","1","2","3"]: split on nondigits
```

- **Read Characters**

```javascript
let s = "hello, world";
s[0]; // => "h"
s[s.length - 1]; // => "d"
```

---

## 3.4. Boolean Values

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_boolean.asp) Encontrara todos los metodos para aplicar al DataType Booleano

Boolean values are commonly used in JavaScript control structures.

Falsy Values

```javascript
undefined;
null;
0 - 0;
NaN;
(""); // the empty string
```

All other values, including all objects (and arrays) convert to, and work like, true.

---

## 3.5. Null y Undefined

I consider undefined to represent a system-level, unexpected, or error-like absence of value and null to represent a program-level, normal, or expected absence of value.

- Remember that strings are immutable in JavaScript. Methods like replace() and toUpperCase() return new strings: they do not modify the string on which they are invoked.s

---

## 3.6. Symbols

Los simbolos funcionan igual de un string con la diferencia que se crean por medio de la funcion Symbol() y es para poder tener strings que parezcan iguales pero que no son iguales dentro de un object haciendo que una clave valor almacenada en un object no va a ser sobre-escrita nunca.

---

## 3.7. The global object

El objeto global se define siempre que se carga una nueva pagina en el navegador o en node o en algun interprete que interprete javascript, la idea es tener a disposicion una serie de valores y funciones listas para utilizar; en el navegador esto se le llama window y posee ademas de los build-ins de javascript, la apis web que ofrece el navegador y que se pueden manipular por medio de javascript.

Cuando el intérprete de JavaScript se inicia (o cuando un navegador web carga una nueva página), crea un nuevo objeto global y le asigna un conjunto inicial de propiedades.

En Node, el objeto global tiene una propiedad llamada global, cuyo valor es el propio objeto global.

En los navegadores web, el objeto Window actúa como el objeto global para todo el código JavaScript contenido en la ventana del navegador que representa.

| Entorno                      | Objeto global | Ejemplo                      |
| ---------------------------- | ------------- | ---------------------------- |
| Navegador                    | `window`      | `window.alert("Hola")`       |
| Node.js                      | `global`      | `global.console.log("Hola")` |
| Estándar moderno (universal) | `globalThis`  | `globalThis.Math.sqrt(9)`    |

### 3.7.1. Global Build-ins

Perfecto 🔥 esa lista que copiaste de la documentación de **Mozilla (MDN)** es **la colección completa de todos los “built-in objects”** del lenguaje JavaScript — es decir, **todo lo que viene incluido por defecto en el entorno de ejecución**, sin que tú tengas que importar nada.

Vamos a desmenuzarlo un poco 👇

---

#### 🧩 ¿Qué significa cada categoría?

##### 🔹 **Value properties**

Son **valores globales** que siempre existen:

```js
globalThis; // el objeto global universal
Infinity;   // número infinito
NaN;        // Not-a-Number
undefined;  // valor no definido
```

✅ Están disponibles **siempre**, sin necesidad de declarar nada.

---

##### 🔹 **Function properties**

Son **funciones globales** (no pertenecen a un objeto específico):

```js
parseInt("10");    // 10
isNaN("hola");     // true
decodeURI(...);    // decodifica URIs
encodeURIComponent(...); // codifica componentes de URLs
```

Son parte del **entorno global**, como si dijeras `globalThis.parseInt()`.

---

##### 🔹 **Fundamental objects**

Son **bloques básicos del lenguaje**:

```js
Object, Function, Boolean, Symbol
```

Todo en JavaScript (arrays, funciones, clases, etc.) hereda directa o indirectamente de `Object`.

---

##### 🔹 **Error objects**

Los tipos de errores que puedes lanzar o atrapar con `try...catch`:

```js
new Error("Algo salió mal");
new TypeError("Tipo incorrecto");
```

---

##### 🔹 **Numbers and dates**

Herramientas para trabajar con números y tiempo:

```js
Math.sqrt(9);      // 3
Number("42");      // 42
new Date();        // fecha actual
BigInt(9007199254740991n); // enteros grandes
```

---

##### 🔹 **Text processing**

Manipulación de cadenas y expresiones regulares:

```js
"hola".toUpperCase();    // "HOLA"
/hola/.test("hola mundo"); // true
```

---

##### 🔹 **Indexed collections**

Estructuras de datos indexadas (arrays y *typed arrays*):

```js
let arr = [1, 2, 3];
let buffer = new ArrayBuffer(8);
let view = new Uint8Array(buffer);
```

---

##### 🔹 **Keyed collections**

Colecciones con claves:

```js
let mapa = new Map();
mapa.set("nombre", "Juan");

let conjunto = new Set([1, 2, 2, 3]); // {1,2,3}
```

---

##### 🔹 **Structured data**

Para manejar datos binarios y estructurados:

```js
JSON.stringify({ a: 1 });
new DataView(new ArrayBuffer(16));
```

---

##### 🔹 **Managing memory**

APIs avanzadas para gestión de memoria:

```js
new WeakRef(obj);
new FinalizationRegistry(() => console.log("objeto liberado"));
```

Estas se usan en casos muy específicos de bajo nivel.

---

##### 🔹 **Control abstraction objects**

Todo lo relacionado con asincronía, promesas y generadores:

```js
new Promise(resolve => resolve(42));
function* gen() { yield 1; yield 2; }
```

---

##### 🔹 **Reflection**

Permiten **interceptar o manipular** el comportamiento de objetos:

```js
Reflect.get(obj, "prop");
new Proxy(obj, handler);
```

---

##### 🔹 **Internationalization (Intl)**

Herramientas para formatear fechas, números y texto según idioma o región:

```js
new Intl.NumberFormat('es-CO').format(1234567.89); // "1.234.567,89"
new Intl.DateTimeFormat('es-ES').format(new Date());
```

---

#### 🧠 En resumen

| Categoría                       | Qué contiene                                           | Siempre disponible |
| ------------------------------- | ------------------------------------------------------ | ------------------ |
| Value properties                | Constantes globales (`NaN`, `Infinity`, etc.)          | ✅                  |
| Function properties             | Funciones globales (`parseInt`, `isNaN`, etc.)         | ✅                  |
| Fundamental objects             | Objetos base del lenguaje (`Object`, `Function`, etc.) | ✅                  |
| Numbers, Text, Collections...   | Tipos de datos incorporados                            | ✅                  |
| Reflection, Intl, Promise, etc. | Funcionalidades avanzadas del lenguaje                 | ✅                  |

---

👉 Entonces, **sí**, todos estos **built-ins** forman parte del **objeto global (`globalThis`)**, y por eso **puedes usarlos en cualquier momento, sin importar dónde estés en tu código**.

Por ejemplo:

```js
console.log(globalThis.Promise === Promise); // true
console.log(globalThis.Math === Math);       // true
```

---

## 3.8. Immutable Primitive Values and Mutable Object References

- Existe una diferencia fundamental en JavaScript entre los valores primitivos (undefined, null, booleanos, números y cadenas) y los objetos (incluidos los arreglos y las funciones).
- Los primitivos son inmutables: no hay forma de cambiar (o “mutar”) un valor primitivo.
- Los objetos no se comparan por valor: dos objetos distintos no son iguales, incluso si tienen las mismas propiedades y valores.

### 3.8.1. Differente bettweb primitives and other data types

Certainly! Here are 10 differences between primitive types and other data types in TypeScript:

1. **Mutability**:
   - Primitives (such as `number`, `string`, `boolean`) are immutable, meaning their values cannot be changed once they are created.
   - Other data types like arrays, objects, and tuples are mutable, allowing modification of their elements or properties after creation.

2. **Complexity**:
   - Primitives represent single values, while other data types represent more complex structures or collections of values.

3. **Storage**:
   - Primitives are typically stored by value directly in memory.
   - Other data types (arrays, objects, etc.) are usually stored by reference, where the variable holds a reference to the actual data stored elsewhere in memory.

4. **Operations**:
   - Primitives have limited operations that can be performed directly on them (e.g., mathematical operations for numbers, concatenation for strings).
   - Other data types often have specialized operations and methods available for manipulation (e.g., array methods like `push`, `pop`, object methods like `Object.keys`, `Object.assign`).

5. **Passing by Value vs. Passing by Reference**:
   - Primitives are passed by value when passed as arguments to functions, meaning a copy of the value is passed.
   - Other data types are passed by reference, meaning changes made to them within a function affect the original variable outside the function.

6. **Type Checking**:
   - Primitives have straightforward types (e.g., `number`, `string`, `boolean`), while other data types might have complex or custom types.

7. **Size in Memory**:
   - Primitives generally occupy fixed amounts of memory depending on their type.
   - Other data types can occupy varying amounts of memory depending on the size and complexity of their contents.

8. **Value Comparison vs. Reference Comparison**:
   - When comparing primitives, the comparison checks for equality of their values.
   - When comparing other data types, the comparison checks for equality of references rather than the content itself.

9. **Initialization**:
   - Primitives are typically initialized with literal values directly.
   - Other data types often require explicit instantiation using constructors or literal syntax.

10. **Support for Methods**:
    - Primitives do not have methods or properties directly associated with them.
    - Other data types have built-in methods and properties that can be accessed and utilized. For instance, arrays have methods like `push`, `pop`, `splice`, while objects have methods like `Object.keys`, `Object.values`.

---

## 3.9. Type Conversions

```javascript
10 + " objects"; // => "10 objects": Number 10 converts to a string
"7" * "4"; // => 28: both strings convert to numbers
let n = 1 - "x"; // n == NaN; string "x" can't convert to a number
n + " objects"; // => "NaN objects": NaN converts to string "NaN"
```

**Nota** En la pagina 45 del libro hay una tabla que muestra todos los tipos de conversion que javascript hace.

### 3.9.1. Conversions and Equality

```javascript
null == undefined; // => true: These two values are treated as equal.
"0" == 0; // => true: String converts to a number before comparing.
0 == false; // => true: Boolean converts to number before comparing.
"0" == false; // => true: Both operands convert to 0 before comparing!
```

### 3.9.2. Explicit Conversions

Cuando se hace una conversion de datos a voluntad o de forma explicita

```javascript
Number("3"); // => 3
String(false); // => "false": Or use false.toString()
Boolean([]); // => true
```

#### 3.9.2.1. Parseo de dataTypes a otros dataTypes

En JavaScript, el término "parse" generalmente se refiere a la conversión de datos de un formato a otro. Aquí están los principales tipos de parse que se utilizan en JavaScript:

1. **Parseo de JSON**:

   - **JSON.parse()**: Convierte una cadena JSON en un objeto de JavaScript.

     ```javascript
     const jsonString = '{"name":"John", "age":30}';
     const obj = JSON.parse(jsonString);
     console.log(obj.name); // John
     ```

   - **JSON.stringify()**: Convierte un objeto de JavaScript en una cadena JSON.

     ```javascript
     const obj = { name: "John", age: 30 };
     const jsonString = JSON.stringify(obj);
     console.log(jsonString); // '{"name":"John","age":30}'
     ```

2. **Parseo de números**:

   - **parseInt()**: Convierte una cadena en un número entero, permite especificar la base (radix).

     ```javascript
     const num = parseInt("123"); // 123
     const hexNum = parseInt("7B", 16); // 123 en base 16
     ```

   - **parseFloat()**: Convierte una cadena en un número de punto flotante.

     ```javascript
     const num = parseFloat("123.45"); // 123.45
     ```

3. **Parseo de fechas**:

   - **Date.parse()**: Analiza una cadena de fecha y devuelve el número de milisegundos desde el 1 de enero de 1970 00:00:00 UTC.

     ```javascript
     const timestamp = Date.parse("2023-05-20T00:00:00Z"); // 1684531200000
     ```

   - **new Date()**: Puede aceptar una cadena de fecha y hora y devolver un objeto `Date`.

     ```javascript
     const date = new Date("2023-05-20T00:00:00Z");
     console.log(date); // Sat May 20 2023 02:00:00 GMT+0200 (Central European Summer Time)
     ```

4. **Parseo de expresiones regulares**:

   - **RegExp constructor**: Crea un objeto `RegExp` que puede ser utilizado para buscar coincidencias en cadenas.

     ```javascript
     const regex = new RegExp("\\d+", "g");
     const str = "There are 123 apples";
     const matches = str.match(regex); // ["123"]
     ```

5. **Parseo de URLs**:
   - **URL constructor**: Crea un objeto URL que facilita el análisis y manipulación de componentes de URL.

     ```javascript
     const url = new URL("https://example.com/path?name=John&age=30");
     console.log(url.hostname); // example.com
     console.log(url.searchParams.get("name")); // John
     ```

Estos son los métodos de parseo más comunes en JavaScript. Cada uno tiene su uso específico y es importante seleccionar el correcto según el tipo de datos que necesitas analizar o convertir.

### 3.9.3. Object to Primitive Conversions

Hay tres algoritmos que aplica javascript para poder convertir objects a strings

- prefer-string
- prefer-number
- no-preference

---

## 3.10. Variable Declaration, Assignment and Destructuring

- Declaracion de variables y asignacion de "identifiers"

### 3.10.1. Declarations with let and const

- Let, Conts y Var (var esta deprecated) (let and const are block scoped(todo lo que este dentro de las curlies))

```javascript
let i, sum; //delcaracion doble

//It is a good programming practice to assign an initial value to your variables when you declare them, when this is possible
let message = "hello";
let i = 0,
  j = 0,
  k = 0;
let x = 2,
  y = x * x; // Initializers can use previously declared variables
```

### 3.10.2. Variable Declarations with var

- **EL SCOPE DE "var":**
- **Global Scope**
  - When var is declared outside of any function, it is a global variable.
  - This means it is accessible anywhere in the code, including inside functions and blocks.
- **Function Scope**
  - When var is declared inside a function, it is local to that function.
  - It is not accessible outside the function.
- **Inside Loops**
  - var declared within loops (e.g., for, while) is also function-scoped or global-scoped.
  - It can lead to unexpected behavior due to the lack of block scope.
- La variables se pueden declarar juntas y tambien asignar en cadena

- **OJO** con el scope

### 3.10.3 Destructuring Asigment

```javascript
let [x, y] = [1, 2]; // Same as let x=1, y=2
[x, y] = [x + 1, y + 1]; // Same as x = x + 1, y = y + 1
[x, y] = [y, x]; // Swap the value of the two variables
[x, y]; // => [3,2]: the incremented and swapped values
```

- Toda la informacion esta en el capitulo, referirse a el.
- destructuring can also be used when defining the parameters to a function.
- destructuring tambien funciona en el return de una funcion.

```javascript
// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

let [r, theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
```

- destructuring funciona en loops tambien.

## 3.11. First Class Citizens

In JavaScript, "first-class citizens" refer to entities that can be treated like any other value in the language. This means they can be:

1. Assigned to variables.
2. Passed as arguments to functions.
3. Returned as values from functions.
4. Stored in data structures.

In JavaScript, functions are considered first-class citizens, meaning they can be manipulated in the same way as any other data type. This property allows for powerful programming paradigms like functional programming, where functions are used as the primary building blocks of programs.

For example, you can create functions dynamically, pass them as arguments to other functions, or return them as results from other functions. This flexibility enables developers to write concise and expressive code that takes advantage of JavaScript's functional capabilities.
