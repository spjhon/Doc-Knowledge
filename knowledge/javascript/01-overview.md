---
sidebar_position: 1
---

# Overview

Lenguaje de programacion creado para trabajar en conjunto con los lenguajes HTML y CSS para crear codigo que sea renderizado por medio de un navegador de internet en forma de paginas web que permitan la interactividad del usuario y la transmision y recibimientos de datos de variado tipo desde servidores a nivel mundial.

- Lenguage que evalua el codigo at runtime osea que no hace una compilacion como otros lenguajes.
- No es tipado lo que quiere decir que los tipos de datos en varialbes y otros aspectos no son tan controlados como en lenguajes fuertemente tipados.

En el siguiente index se describe una referencia a los temas teoricos del lenguaje, no solo el conocimiento del lenguaje base, se deben de tener en cuenta las librerias aplicables, los frameworks aplicables y otros aspectos como el manejo de typos por medio de typescript y javascript en el servidor como lo es con NODE ademas del ambiente del browser en donde se ejecuta normalmente.

- **Este MAPA como base del contenido aprendido dividido principalmente con la misma divicion del libro JavaScript The Definitive Guide y cuando hayan conocimiento de otras fuentes se agregara al final de cada tema**

- **La idea es que este lugar sea un MAPA del conocimiento concreto, correcto y completo de todo JAVASCRIPT mas no un resumen ya que eso seria repetir lo que ya esta en otros lados, la idea es que este texto sirve de guia para llegar a ese conocimiento y al mismo timepo tener un panorama completo de todo el lenguaje para poder saber que herramientas hay a la mano desde una perspectiva global y si se necesita saber mas sobre una herramienta particular pues que este MAPA diga donde esta el conocimiento mas completo.**

## Referencias y origen de conocimiento

Las fuentes principales para tener la referencia del lenguaje son:

- La [**biblioteca de referencia de javascript de Mozilla**](https://developer.mozilla.org/en-US/docs/Web/JavaScript), esta es la principal refencia del lenguaje pero es dificil de entender y navegar pero esta completa.
- La pagina web de referencia [**w3schools**](https://www.w3schools.com/jsref/default.asp), es una referencia mas amigable pero algo incompleta.
- La pagina Javascript.info que posee un resumen muy destacado del lenguaje [Javascript.info](https://javascript.info/)

- Tambien para cada [**DataType**](https://www.w3schools.com/jsref/default.asp) existe un conjunto de build-in propiedades y metodos que permiten la manipulacion de este tipos de [**DataType**](https://www.w3schools.com/jsref/default.asp) sin necesidad de crear funciones u objects especializados.

Sin embargo los dos libros que recorren la teoria y explica de forma comprensiva los recondijos del lenguaje son los siguientes libros:

- **JavaScript The Definitive Guide** by David Flanagan Septima Edicion 2020
- **Secrets of the JavaScript Ninja** by John Resig Segunda Edicion 2016

Javascript es relativamente sencillo, la fuente principal del siguiente mapa es el libro JavaScript The Definitive Guide que contiene un recorrido teorico acertado y de forma escalada para entender a fondo el lenguaje al menos teoricamente, las paginas de internet es una fuente de referencia ordenada alfabeticamente pero muy desordenada en un orden correcto para el aprendizaje.

## JavaScript

- Es pobremente tipado, osea que no hay control de las diferentes formas de tipos de datos que puede tomar una variable o cualquier otro ente que guarde tipos de datos.
- No es compilado osea que se ejecuta en tiempo real linea por linea y si hay un error pues se va a dejar ver ese error solo en el momento que se ejecute esa linea de codigo especifica.

**Nota:** La estructura de este index tiene como base el libro Javascript the definitive guide que esta a mi parecer bien estructurada para aprender el idioma a profundidad. He de resaltar que el libro solo NO es suficiente para alguien que no ha aprendido totalmente nada sobre lenguajes de programacion, recomiendo un crash course como minimo o un curso completo de udemy que enseñe de forma mas generelizada pero que de una enseñanza basica para luego profundizar con este libro.

## 01 Introduccion a Javascript

(Paginas de 1 a 14 del libro)

- Su potencial se encuentra en combinarlo con los lenguajes CSS y HTML
- Es high level languaje.
- Node para el lado del servidor
- Debilmene Tipado
- No compilado
- Su fuerte esta en el entorno web

---

- **Core features**

[Sacado de javascript.injo](https://javascript.info/modules-intro)

- Always “use strict”
- Module-level scope
- A module code is evaluated only the first time when imported
- import.meta
- In a module, “this” is undefined

- **Browser-specific features**

- Module scripts are deferred (aplazados)
- Async works on inline scripts
- External scripts: External scripts that have `type="module"` are different in two aspects.
- No “bare” modules allowed

### Exploring JavaScript

- El codigo es interpretado o "renderizado" por medio del navegador

### Hello World

- Como generar codigo javascript simplemente desde un texto txt.
- If JavaScript expressions are like phrases, then JavaScript statements are like full sen‐
  tences.
- Ejemplo de contador de letras en la pagina 12.

---

## 02 Lexical Structure

(Paginas de 15 a 21 del libro)

Reglas elementales para comenzar a escribir codigo:

- Case sensitivity, spaces, and line breaks
- Comments
- Literals
- Identifiers and reserved words
- Unicode
- Optional semicolons
- Tambien describe que tipo de line breaks reconoce y como los reconce y como deben de capitalizarcen las keywords

### Comentarios

`// This is a single-line comment.`
`/* This is also a comment */`
`// and here is another comment.`

```javascript
/*
This is a multi-line comment. The extra * characters at the start of each line are not a required part of the syntax; they just look cool!
 */
```

### Literals

A literal is a data value that appears directly in a program. The following are all literals

```javascript
12; // The number twelve
1.2; // The number one point two
("hello world"); // A string of text
("Hi"); // Another string
true; // A Boolean value
false; // The other Boolean value
null; // Absence of an object
```

### Identifiers and Reserved Words

Para comenzar el nombre de una variable se puede utilizar "\_" y "$"

```javascript
i;
my_variable_name;
v13;
_dummy;
$str;
```

La lista completa de palabras reservadas esta [**AQUI**](/javascript/reservedWords)

### Unicode

The JavaScript type for representing text is the string. A string is an immutable ordered sequence of 16-bit values, each of which typically represents a Unicode character.

#### Unicode Escape Sequences

```javascript
"😊 represents the “grinning face” emoji.";
```

### Optional Semicolons

Tener en cuenta cuando javascript agrega semicolons (;) al romper lineas y otras condiciones a tener en cuenta, por recomendacion es mejor siempre poner el punto y coma en donde debe de ir.

---

## 03 Types, Values and Variables

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_global.asp) Encontrara todos los metodos para aplicar a todos los **DataType**

(Paginas de 23 a 60 del libro)

### Overview and Definitions

- Existen primitive type y el resto, el absoulto resto es un object.
- Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or unde fined is an object.
- JavaScript’s object types are mutable and its primitive types are immutable. Numbers, booleans, symbols, null, and undefined are
  immutable. **Nota** Para mas informacion ir a la seccion dataTypes de este docusaurio.

Para cada dataType hay una herencia de propiedades y metodos que vienen desde el sistema llamado prototype con el fin de otorgar propiedades y metodos (funciones) para la manipulacion de esos [**DataTypes**](dataTypes).

Tambien para cada [**DataType**](https://www.w3schools.com/jsref/default.asp) existe un conjunto de build-in propiedades y metodos que permiten la manipulacion de este tipos de [**DataType**](https://www.w3schools.com/jsref/default.asp) sin necesidad de crear funciones u objects especializados.

- El lenguaje hace un automatic garbaje collection, el garbaje collection es una forma de eliminar de la memoria variables e invicaciones que no se esten utilizando o que se hayan dejado de utilizar.
- La diferencia entre el comparador == y === es que el primero intenta convertir el datatype para ver si asi si coinciden.
- JavaScript’s object types are mutable and its primitive types are immutable.

### Numbers

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_number.asp) Encontrara todos los metodos para aplicar al DataType **Number**

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_date.asp) Encontrara todos los metodos para aplicar al DataType **Date**

- JavaScript represents numbers using the 64-bit floating point format.
- Javascript reconoce en sus literales (literals)

1. Integers
2. Hexadecimales
3. Binarios
4. Octales

- Los decimales son llamados floating points

#### Arithmetic in JavaScript

La **aritmetica** en javascript se hace mas que todo con el method Math [**Link**](https://www.w3schools.com/jsref/jsref_obj_math.asp)

- Habla sobre los casos especiales `NaN, Null, -INFINITY, INFINITY`
- BigInt
- Date Object

### Text

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_string.asp) Encontrara todos los metodos para aplicar al DataType String

- The JavaScript type for representing text is the string. A string is an immutable ordered sequence of 16-bit values, each of which typically represents a Unicode character.

```javascript
let euro = "€";
let love = "❤";
euro.length; // => 1: this character has one 16-bit element
love.length; // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
```

- The empty string is the string of length 0.
- Most string-manipulation methods defined by JavaScript operate on 16-bit values, not characters.
- To include a string in a JavaScript program, simply enclose the characters of the string within a matched pair of single or double quotes or backticks (' or " or `)

#### String Literals

```javascript
""; // The empty string: it has zero characters
"testing";
"3.14";
'name="myform"';
"Wouldn't you prefer O'Reilly's book?";
"τ is the ratio of a circle's circumference to its radius"`"She said 'hi'", he said.`;
```

#### Escape Sequences in String Literals

Hay una tabla que muestra todos los tipos de scape que se pueden apicar a un string en la pagina 34

Remember that strings are immutable in JavaScript. Methods like replace() and toUpperCase() return new strings: they do not modify the string on which they are invoked.

- **Concatenation**:
  Strings can also be treated like read-only arrays, and you can access individual char‐
  acters (16-bit values) from a string using square brackets instead of the charAt()
  method:

```javascript
let s = "hello, world";
s[0]; // => "h"
s[s.length - 1]; // => "d"

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;
```

- **Template literals** para empotrar variables en strings

```javascript
let name = "Bill";
let greeting = `Hello ${name}.`; // greeting == "Hello Bill."
```

- **Tagged template literals**

```javascript
`\n`.length; // => 1: the string has a single newline character
String.raw`\n`.length; // => 2: a backslash character and the letter n
```

- **Pattern Matching**

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

### Boolean Values

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

### Null and Undefined

I consider undefined to represent a system-level, unexpected, or error-like absence of value and null to represent a program-level, normal, or expected absence of value.

- Remember that strings are immutable in JavaScript. Methods like replace() and toUpperCase() return new strings: they do not modify the string on which they are invoked.

### Symbols

Symbols were introduced in ES6 to serve as non-string property names.

### The Global Object

When the JavaScript interpreter starts (or whenever a web browser loads a new page), it creates a new global object and gives it an initial set of properties.

In Node, the global object has a property named global whose value is the global object itself.

In web browsers, the Window object serves as the global object for all JavaScript code contained in the browser window it represents.

### Immutable Primitive Values and Mutable Object References

- There is a fundamental difference in JavaScript between primitive values (undefined, null, booleans, numbers, and strings) and objects (including arrays and functions).
- Primitives are immutable: there is no way to change (or “mutate”) a primitive value.
- Objects are not compared by value: two distinct objects are not equal even if they have the same properties and values.

### Type Conversions

```javascript
10 + " objects"; // => "10 objects": Number 10 converts to a string
"7" * "4"; // => 28: both strings convert to numbers
let n = 1 - "x"; // n == NaN; string "x" can't convert to a number
n + " objects"; // => "NaN objects": NaN converts to string "NaN"
```

**Nota** En la pagina 45 del libro hay una tabla que muestra todos los tipos de conversion que javascript hace.

#### Conversions and Equality

```javascript
null == undefined; // => true: These two values are treated as equal.
"0" == 0; // => true: String converts to a number before comparing.
0 == false; // => true: Boolean converts to number before comparing.
"0" == false; // => true: Both operands convert to 0 before comparing!
```

#### Explicit Conversions

Cuando se hace una conversion de datos a voluntad o de forma explicita

```javascript
Number("3"); // => 3
String(false); // => "false": Or use false.toString()
Boolean([]); // => true
```

[**AQUI**](/javascript/parsers) se puede observar todos los tipos de parse que tiene javascript

#### Object to Primitive Conversions

Hay tres algoritmos que aplica javascript para poder convertir objects a strings

- prefer-string
- prefer-number
- no-preference

### Variable Declaration, Assignment and Destructuring

[**AQUI**](/javascript/overview#declarations) mas info acerca de la declaracion de variables

- Declaracion de variables y asignacion de "identifiers"
- Let, Conts y Var (var esta deprecated) (let and const are block scoped(todo lo que este dentro de las curlies))
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

- **OJO** con el scope

#### Destructuring Asigment

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

---

## 04 Expressions and Operators

- An expression is a phrase of JavaScript that can be evaluated to produce a value.
- The most common way to build a complex expression out of simpler expressions is with an operator.

### Primary Expressions

- Constant literals
- Some reserved words
- Reference to a variable , constant or property (in global)

### Object and Array Initializers

- Object and array initializers are expressions whose value is a newly created object or array.

### Function Definition Expressions

- [**AQUI**](/javascript/functions) La lista completa de como definir y como invocar una funcion
- A function definition expression defines a JavaScript function, and the value of such an expression is the newly defined function.

### Property Access Expressions

- A property access expression evaluates to the value of an object property or an array element.

```javascript
expression.identifier;
expression[expression];
```

#### Conditional Property Access Expressions

```javascript
expression?.identifier;
expression?.[expression];
```

- In JavaScript, the values null and undefined are the only two values that do not have properties.

### Invocation Expressions

- An invocation expression is JavaScript’s syntax for calling (or executing) a function or method.
- [**AQUI**](/javascript/functions) La lista completa de como definir y como invocar una funcion
- [**AQUI**](/javascript/objects) La lista completa de como definir y como invocar un object

#### Conditional Invocation

```javascript
function square(x, log) {
  // The second argument is an optional function
  log?.(x); // Call the function if there is one
  return x * x; // Return the square of the argument
}

o.m(); // Regular property access, regular invocation
o?.m(); // Conditional property access, regular invocation
o.m?.(); // Regular property access, conditional invocation
```

### Object Creation Expressions

- [**AQUI**](/javascript/objects) La lista completa de como definir y como invocar un object

```javascript
new Object();
new Date();
```

### OPERATOR OVERVIEW

[**LINK**](/javascript/operators-comparators) con la lista de los operadores, comparadores, etc.

- Operators are used for JavaScript’s arithmetic expressions, comparison expressions, logical expressions, assignment expressions,and more.
- En la pagina **69** del libro se tiene la tabla **4.1** de todos los operadores en orden de **precedencia**.
- JavaScript operators usually convert the type (see §3.9) of their operands as needed.
- Ojo con los side effects

#### TENER EN CUENTA

- Numero de Operandos
- Los dataType que se aplican a un operando
- Side effects
- **Precedencia**
- Asociabilidad de los operandos
- Orden de Evaluacion

### Arithmetic Expressions

- This section covers the operators that perform arithmetic or other numerical manipulations on their operands.

#### Basics

- Infor obtendia de chatGPT
- This section covers the operators that perform arithmetic or other numerical manipulations on their operands.

1. **Addition (`+`)**: `a + b` - sum of `a` and `b`.
2. **Subtraction (`-`)**: `a - b` - difference between `a` and `b`.
3. **Multiplication (`*`)**: `a * b` - product of `a` and `b`.
4. **Division (`/`)**: `a / b` - quotient of `a` divided by `b`.
5. **Modulus (`%`)**: `a % b` - remainder of `a` divided by `b`.
6. **Exponentiation (`**`)**: `a \*\* b`-`a`raised to the power of`b`.
7. **Floor Division (`//`)**: `a // b` - floor value of the quotient of `a` divided by `b`.

#### Ojo con el "+" operator

```javascript
1 + 2; // => 3: addition
"1" + "2"; // => "12": concatenation
"1" + 2; // => "12": concatenation after number-to-string
1 + {}; // => "1[object Object]": concatenation after object-to-string
true + true; // => 2: addition after boolean-to-number
2 + null; // => 2: addition after null converts to 0
2 + undefined; // => NaN: addition after undefined converts to NaN
```

#### Unary Arithmetic Operators

1. **Unary Plus (`+`)**: `+a` - returns the value of `a`.
2. **Unary Minus (`-`)**: `-a` - negates the value of `a`.
3. **Increment (`++`)**: `++a` or `a++` - increases the value of `a` by 1 (language-specific).
4. **Decrement (`--`)**: `--a` or `a--` - decreases the value of `a` by 1 (language-specific).

#### Bitwise Operators

- `1=true, 0=false`
- AND `(&)`
- OR `(|)`
- XOR `(^)`
- NOT `(~)`
- Shift left `(<<)`
- Shift right with sign `(>>)`
- Shift right with zero fill `(>>>)`

### Relational Expressions

- return true or false depending on whether that relationship exists.
- **Tener en cuenta**
- Equality and Inequality Operators
- Equality with type conversion

#### Comparison Operators

1. **Equal to (`==`)**: `a == b` - true if `a` is equal to `b`.
2. **Not equal to (`!=`)**: `a != b` - true if `a` is not equal to `b`.
3. **Strictly equal to (`===`)**: `a === b` - true if `a` is equal to `b` and of the same type.
4. **Strictly not equal to (`!==`)**: `a !== b` - true if `a` is not equal to `b` or not of the same type.
5. **Greater than (`>`)**: `a > b` - true if `a` is greater than `b`.
6. **Less than (`<`)**: `a < b` - true if `a` is less than `b`.
7. **Greater than or equal to (`>=`)**: `a >= b` - true if `a` is greater than or equal to `b`.
8. **Less than or equal to (`<=`)**: `a <= b` - true if `a` is less than or equal to `b`.

#### The in Operator

**`in`**: `a in b` - true if `a` is an element of `b` (e.g., a member of a collection, such as a list, tuple, set, or a key in a dictionary).

- Example: `3 in [1, 2, 3]` - true because `3` is an element of the list `[1, 2, 3]`.
- Example: `'key' in {'key': 'value'}` - true because `'key'` is a key in the dictionary `{'key': 'value'}`.

#### The instanceof Operator

**`instanceof`**: `a instanceof B` - true if `a` is an instance of class `B` or a subclass thereof.

- Example: `obj instanceof MyClass` - true if `obj` is an instance of `MyClass` or a subclass of `MyClass`.

### Logical Expressions

#### Falsy values

- Extraido de chatGPT.

In JavaScript, the following values are considered falsy:

1. **false**: The boolean value `false`.
2. **0**: The number `0`, whether integer or floating-point.
3. **-0**: Negative zero, although it's rare to encounter this.
4. **0n**: BigInt zero, if you're using BigInts.
5. **"":** An empty string.
6. **null**: The absence of any value or object.
7. **undefined**: Denotes a variable that has not been assigned a value, or an object property that does not exist.
8. **NaN**: Stands for "Not a Number," usually resulting from invalid arithmetic operations or type conversion attempts.

#### Logical AND (&&)

- This is called **short-circuit** evaluation

- **true && true returns true**
- **true && false returns false**
- **false && true returns false**
- **false && false returns false**

#### Logical OR (||)

- If one or both operands is truthy, it returns a truthy value. If both operands are falsy, it returns a falsy value.

```javascript
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false
```

#### Logical NOT (!)

```javascript
console.log(!true); // Output: false
console.log(!false); // Output: true
console.log(!!true); // Output: true
console.log(!!false); // Output: false
```

### Assignment Expressions

JavaScript uses the = operator to assign a value to a variable or property.

- Assignment with Operation

| Operator | Example    | Equivalent    |
| -------- | ---------- | ------------- |
| `+=`     | `a += b`   | `a = a + b`   |
| `-=`     | `a -= b`   | `a = a - b`   |
| `*=`     | `a *= b`   | `a = a * b`   |
| `/=`     | `a /= b`   | `a = a / b`   |
| `%=`     | `a %= b`   | `a = a % b`   |
| `**=`    | `a **= b`  | `a = a ** b`  |
| `<<=`    | `a <<= b`  | `a = a << b`  |
| `>>=`    | `a >>= b`  | `a = a >> b`  |
| `>>>=`   | `a >>>= b` | `a = a >>> b` |
| `&=`     | `a &= b`   | `a = a & b`   |
| `^=`     | `a ^= b`   | `a = a ^ b`   |

### Evaluation Expressions

- The use of eval()
- eval()
- Global eval()
- Strict eval()

### Miscellaneous Operators

#### The Conditional Operator (?:)

```javascript
greeting = "hello " + (username ? username : "there");
x > 0 ? x : -x; // The absolute value of x
```

#### First-Defined (??)

The first-defined operator ?? evaluates to its first defined operand: if its left operand is not null and not undefined, it returns that value.

It is used to provide a default value when dealing with null or undefined values.

```javascript
let value = null;
let defaultValue = "Default";

// The ?? operator returns the right-hand operand when the left-hand operand is null or undefined.
let result = value ?? defaultValue;

// In this case, value is null, so result will be "Default".
console.log(result); // Output: "Default"
```

#### The typeof Operator

```javascript
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
console.log(typeof 42); // "number"
console.log(typeof NaN); // "number"
console.log(typeof 12345678901234567890n); // "bigint"
console.log(typeof "hello"); // "string"
console.log(typeof Symbol("symbol")); // "symbol"
console.log(typeof function () {}); // "function"
console.log(typeof { key: "value" }); // "object"
```

#### The delete Operator

delete is a unary operator that attempts to delete the object property or array element specified as its operand.

#### The await Operator

await was introduced in ES2017 as a way to make asynchronous programming more natural in JavaScript.

#### The void Operator

void is a unary operator that appears before its single operand, which may be of any type.

#### The comma Operator (,)

```javascript
(i = 0), (j = 1), (k = 2);
// Evaluates to 2 and is basically equivalent to:
i = 0;
j = 1;
k = 2;
```

## 05 Statements

**JavaScript statements are terminated with semicolons (§2.6). Expressions are evaluated to produce a value, but statements are executed to make something happen.**

- **to “make something happen”**

- **expression statements:** Expressions with side effects, such as assignments and function invocations, can stand alone as statements.
- **declaration statements** That declare new variables and define new functions.
- **control structures:**

- Conditionals
- Loops
- Jumsp

### Expression Statements

- The simplest kinds of statements in JavaScript are expressions that have side effects.

### Compound and Empty Statements

- a statement block combines multiple statements into a single compound statement. **Osea todo lo que esta dentro de un par de curly**.

### Conditionals

- if
- else if
- switch

### Loops

JavaScript has five looping statements:

- while
- do/while
- for
- for/of (and its for/await variant)
- and for/in.

- **When working with arrays, you almost always want to use for/of instead of for/in.**

### Jumps

As the name implies, these cause the JavaScript interpreter to jump to a new location in the source code.

- Labeled Statements
- break
- continue: When the continue statement is executed, the current iteration of the enclosing loop is terminated, and the next iteration begins. This means different things for different types of loops
- return
- yield
- throw
- try/catch/finally

### Miscellaneous Statements

- with: Dont use "with".
- debugger
- “use strict”: This means that if all of your JavaScript code is written as modules, then it is all automatically strict, and you will never need to use an explicit "use strict" directive.

### Declarations

The keywords **const, let, var, function, class, import, and export** are not technically statements, but they look a lot like statements, and this book refers informally to them as statements, so they deserve a mention in this chapter.

They don’t make much happen themselves, but by providing names for values they, in an important sense, define the meaning of the other statements in your program.

Loosely, you can think of declarations as the parts of the program that are processed before the code starts running.

JavaScript declarations are used to define constants, variables, functions, and classes and for importing and exporting values between modules.

### JavaScript Statement TABLE

| Statement           | Purpose                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `break`             | Exit from the innermost loop or switch or from named enclosing statement |
| `case`              | Label a statement within a switch                                        |
| `class`             | Declare a class                                                          |
| `const`             | Declare and initialize one or more constants                             |
| `continue`          | Begin next iteration of the innermost loop or the named loop             |
| `debugger`          | Debugger breakpoint                                                      |
| `default`           | Label the default statement within a switch                              |
| `do/while`          | An alternative to the while loop                                         |
| `export`            | Declare values that can be imported into other modules                   |
| `for`               | An easy-to-use loop                                                      |
| `for/await`         | Asynchronously iterate the values of an async iterator                   |
| `for/in`            | Enumerate the property names of an object                                |
| `for/of`            | Enumerate the values of an iterable object such as an array              |
| `function`          | Declare a function                                                       |
| `if/else`           | Execute one statement or another depending on a condition                |
| `import`            | Declare names for values defined in other modules                        |
| `label`             | Give statement a name for use with break and continue                    |
| `let`               | Declare and initialize one or more block-scoped variables (new syntax)   |
| `return`            | Return a value from a function                                           |
| `switch`            | Multiway branch to case or default: labels                               |
| `throw`             | Throw an exception                                                       |
| `try/catch/finally` | Handle exceptions and code cleanup                                       |
| `"use strict"`      | Apply strict mode restrictions to script or function                     |
| `var`               | Declare and initialize one or more variables (old syntax)                |
| `while`             | A basic loop construct                                                   |
| `with`              | Extend the scope chain (deprecated and forbidden in strict mode)         |
| `yield`             | Provide a value to be iterated; only used in generator functions         |

Each statement is accompanied by a brief description of its purpose.

## 06 Objects

- [**AQUI**](/javascript/objects) La lista completa de como definir y como invocar un object

- Objects are JavaScript’s most fundamental datatype

### Introduction to Objects

In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its “prototype.” The methods of an object are typically inherited properties, and this “prototypal inheritance” is a key feature of JavaScript.

Any value in JavaScript that is not a string, a number, a Symbol, or true, false, null,
or undefined is an object.

Recall from §3.8 that objects are mutable and manipulated by reference rather than by value.

It is sometimes important to be able to distinguish between properties defined directly on an object and those that are inherited from a prototype object. JavaScript uses the term own property to refer to non-inherited properties.

In addition to its name and value, each property has three property attributes:

- The **writable attribute** specifies whether the value of the property can be set.
- The **enumerable attribute** specifies whether the property name is returned by a for/in loop.
- The **configurable attribute** specifies whether the property can be deleted and whether its attributes can be altered.

### Creating Objects

- [**AQUI**](/javascript/objects) La lista completa de como definir y como invocar un object

- Object.create() function
- Object Literals
- Creating Objects with new
- Prototypes: Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype. All objects created by object literals have the same prototype object, and we can refer to this prototype object in JavaScript code as Object.prototype.
- Object.create()

### Querying and Setting Properties

```javascript
//READ a property
let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

//INSERT a property
book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.
```

#### Objects As Associative Arrays

This code reads and concatenates the address0, address1, address2, and address3 properties of the customer object.

```javascript
let addr = "";
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
```

#### Inheritance

JavaScript objects have a set of “own properties,” and they also inherit a set of properties from their prototype object.

- **The examples in this section use the Object.create() function to create objects with specified prototypes.**

```javascript
let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y; // => 3; x and y are inherited from o and p
```

#### Property Access Errors

```javascript
// Asi se pueden presentar errores al leer un object
book.subtitle; // => undefined: property doesn't exist
let len = book.subtitle.length; // !TypeError: undefined doesn't have length

// Asi se puede resolver

// A verbose and explicit technique
let surname = undefined;
if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}
// A concise and idiomatic alternative to get surname or null or undefined
//  short-circuiting behavior
surname = book && book.author && book.author.surname;
```

- Attempting to set a property on null or undefined also causes a TypeError.

### Deleting Properties

**The delete operator only deletes own properties, not inherited ones.** To delete an inherited property, you must delete it from the prototype object in which it is defined. Doing this affects every object that inherits from that prototype.

```javascript
let o = { x: 1 }; // o has own property x and inherits property toString
delete o.x; // => true: deletes property x
delete o.x; // => true: does nothing (x doesn't exist) but true anyway
delete o.toString; // => true: does nothing (toString isn't an own property)
delete 1; // => true: nonsense, but true anyway
```

- delete does not remove properties that have a configurable attribute of false.

### Testing Properties

JavaScript objects can be thought of as sets of properties, and it is often useful to be able to test for membership in the set—to check whether an object has a property with a given name.

You can do this with:

- the `in` operator

```javascript
let o = { x: 1 };
"x" in o; // => true: o has an own property "x"
"y" in o; // => false: o doesn't have a property "y"
"toString" in o; // => true: o inherits a toString property
```

- With the `hasOwnProperty()`

```javascript
let o = { x: 1 };
o.hasOwnProperty("x"); // => true: o has an own property x
o.hasOwnProperty("y"); // => false: o doesn't have a property y
o.hasOwnProperty("toString"); // => false: toString is an inherited property
```

- and `propertyIsEnumerable()` methods

```javascript
let o = { x: 1 };
o.propertyIsEnumerable("x"); // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString"); // => false: not an own property
Object.prototype.propertyIsEnumerable("toString"); // => false: not enumerable
```

- Or simply by querying the property.

```javascript
let o = { x: 1 };
o.x !== undefined; // => true: o has a property x
o.y !== undefined; // => false: o doesn't have a property y
o.toString !== undefined; // => true: o inherits a toString property
```

### Enumerating Properties

- `for/in` loop
- `for/of` loop
- `Object.keys()`
- `Object.getOwnPropertyNames()`
- `Object.getOwnPropertySymbols()`
- `Reflect.ownKeys()`

Tener en cuenta **Property Enumeration Order**

### Extending Objects

A common operation in JavaScript programs is needing to copy the properties of one object to another object.

```javascript
let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
target; // => {x: 1, y: 2, z: 3}
```

- `Object.assign()`
- The spread operator

### Serializing Objects

Object serialization is the process of converting an object’s state to a string from
which it can later be restored.

```javascript
let o = { x: 1, y: { z: [false, null, ""] } }; // Define a test object
let s = JSON.stringify(o); // s == '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s); // p == {x: 1, y: {z: [false, null, ""]}}
```

### Object Methods

- [**AQUI**](https://www.w3schools.com/jsref/jsref_obj_object.asp) La seccion de **w3Schools** donde muestra todos los metodos que obtiene object al ser un object creado.

- The `toString()` Method

```javascript
//Debido a que asi funciona el toString
let s = { x: 1, y: 1 }.toString(); // s == "[object Object]"

// Muchas veces se crea un metodo propio de toString a un object.
let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};
String(point); // => "(1, 2)": toString() is used for string conversions
```

- The `toLocaleString()` Method

```javascript
point.toString(); // => "(1000, 2000)"
point.toLocaleString(); // => "(1,000, 2,000)": note thousands separators
```

- The `valueOf()` Method

The valueOf() method is much like the toString() method, but it is called when JavaScript needs to convert an object to some primitive type other than a string, typically, a number.

- The `toJSON()` Method

Object.prototype does not actually define a toJSON() method, but the JSON.stringify() method (see §6.8) looks for a toJSON() method on any object it is asked to serialize.

### Extended Object Literal Syntax

- Shorthand Properties
- Computed Property Names
- Symbols as Property Names
- Spread Operator

```javascript
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height; // => 175
```

- Shorthand Methods
- Property Getters and Setters: JavaScript also supports accessor properties, which do not have a single value but instead have one or two accessor methods: a getter and/or a setter.

## 07 Arrays

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_array.asp) Todos los metodos que se le pueden aplicar a un dataType de tipo ARRAY.

This chapter documents arrays, a fundamental datatype in JavaScript and in most other programming languages. An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index.

### Creating Arrays

- Array Literals
- The Spread Operator
- The Array() Constructor
- Array.of()
- Array.from()

### Reading and Writing Array Elements

```javascript
let a = ["world"]; // Start with a one-element array
let value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
let i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3
```

### Sparse Arrays

A sparse array is one in which the elements do not have contiguous indexes starting at 0.

```javascript
a[1000] = 0; // Assignment adds one element but sets length to 1001.
```

### Array Length

```javascript
[].length[("a", "b", "c")].length; // => 0: the array has no elements // => 3: highest index is 2, length is 3
```

### Adding and Deleting Array Elements

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

### Iterating Arrays

- `for/of` loop
- `forEach()` loop
- `for` loop

### Multidimensional Arrays

Se utiliza un loop pero anidado

### Array Methods

While reading about these methods, keep in mind that some of them modify the array they are called on and some of them leave the array unchanged.

#### Array Iterator Methods

- Algo importante en los methods para el dataType array es que soportan un segundo argumento y funciona de tal forma que la funcion que se invoque sera un metodo del segundo argumento de forma que el segundo argumento pasa a ser el valor del "this" en la funcion que es invocada.
- Estos metodos no modifican el array

- `forEach()`
- `map()`: map() returns a new array: it does not modify the array it is invoked on.
- `filter()`
- `find() and findIndex()`
- `every() and some()`
- `reduce() and reduceRight()`

#### Flattening arrays with flat() and flatMap()

```javascript
[1, [2, 3]]
  .flat() // => [1, 2, 3]
  [(1, [2, [3]])].flat(); // => [1, 2, [3]]
```

#### Adding arrays with concat()

```javascript
let a = [1, 2, 3];
a.concat(4, 5); // => [1,2,3,4,5]
a.concat([4, 5], [6, 7]); // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5, [6, 7]]); // => [1,2,3,4,5,[6,7]]; but not nested arrays
a; // => [1,2,3]; the original array is unmodified
```

#### Stacks and Queues with push(), pop(), shift(), and unshift()

#### Subarrays with slice(), splice(), fill(), and copyWithin()

- `slice()`
- `splice()`
- `fill()`
- `copyWithin()`

#### Array Searching and Sorting Methods

- `indexOf() and lastIndexOf()`
- `includes()`
- `sort()`
- `reverse()`

#### Array to String Conversions

- `join()`
- `toString()`
- `toLocaleString()`

#### Static Array Functions

- `Array.of()`
- `Array.from()`
- `Array.isArray()`

### Array-Like Objects

In client-side JavaScript, a number of methods for working with HTML documents (such as document.querySelectorAll(), for example) return array-like objects.

### Strings as Arrays

```javascript
let s = "test";
s.charAt(0); // => "t"
s[1]; // => "e"
```

## 08 Functions

- [**AQUI**](/javascript/functions) La lista completa de como definir y como invocar una funcion

A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times.

- If a function is assigned to a property of an object, it is known as a method of that object.

### Defining Functions

- [**AQUI**](/javascript/functions) La lista completa de como definir y como invocar una funcion

- Function Declarations:

**The return statement causes the function to stop executing and to return the value of its expression (if any) to the caller. If the return statement does not have an associated expression, the return value of the function is undefined.**

- Function Expressions

**functions defined with expressions cannot be invoked before they are defined.**

- Arrow Functions

**Arrow functions differ from functions defined in other ways in one critical way: they inherit the value of the this keyword from the environment in which they are defined rather than defining their own invocation context as functions defined in other ways do.**

- Nested Functions

### Invoking Functions

[**AQUI**](/javascript/functions) La lista completa de como definir y como invocar una funcion
[**AQUI**](/javascript/functions) Una explicacion mas completa de como utilizar el THIS, tambien en la pagina de javascript.info hay informacion completa.

- Recursive functions
- As functions
- As methods
- As constructors
- Indirectly through their call() and apply() methods
- Implicit Function Invocation: OJO que aplicando ciertos metodos explicados en la pagina 192 del libro se puede invocar una funcion sin querer.

### Function Arguments and Parameters

- Optional Parameters and Defaults

  - Si hay menos argumentos que parametros, estos parametros evaluan a undefined al menos que se especifique un valor por default

- Rest Parameters and Variable-Length Argument Lists

  - Esto es lo contrario, cuando hay mas argumentos que parametros

    ```javascript
    function max(first = -Infinity, ...rest) {
      let maxValue = first; // Start by assuming the first arg is biggest
      // Then loop through the rest of the arguments, looking for bigger
      for (let n of rest) {
        if (n > maxValue) {
          maxValue = n;
        }
      }
      // Return the biggest
      return maxValue;
    }
    max(1, 10, 100, 2, 3, 1000, 4, 5, 6); // => 1000
    ```

- The Arguments Object

  - A parte del rest que utiliza el spread operator "...", implicitamente una funcion tiene sus argumentos en un array que se invoca con la keyword Arguments.

- The Spread Operator for Function Calls

  - The spread operator ... is used to unpack, or “spread out,” the elements of an array (or any other iterable object, such as strings) in a context where individual values are expected.

  ```javascript
  let numbers = [5, 2, 10, -1, 9, 100, 1];
  Math.min(...numbers); // => -1
  ```

- Destructuring Function Arguments into Parameters

  ```javascript
  function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  }
  vectorAdd([1, 2], [3, 4]); // => [4,6]
  ```

- Argument Types: JavaScript method parameters have no declared types **USE TYPESCRIPT**

### Functions as Values

In JavaScript, however, functions are not only syntax but also values, which means they can be **assigned to variables**, **stored in the properties of objects** or the **elements of arrays**, **passed as arguments to functions**, and so on.

```javascript
let s = square; // Now s refers to the same function that square does
square(4); // => 16
s(4); // => 16
```

```javascript
let a = [(x) => x * x, 20]; // An array literal
a[0](a[1]); // => 400
```

- Defining Your Own Function Properties: Functions are not primitive values in JavaScript, but a specialized kind of object which means that functions can **have properties**.

### Functions as Namespaces or immediately invoked function expression

- Define a function simply to act as a temporary name-space in which you can define variables without cluttering the global namespace.

```javascript
function chunkNamespace() {
  // Chunk of code goes here
  // Any variables defined in the chunk are local to this function
  // instead of cluttering up the global namespace.
}
chunkNamespace(); // But don't forget to invoke the function!
```

So this is the new idiomatic way:

```javascript
(function () {
  // chunkNamespace() function rewritten as an unnamed expression.
  // Chunk of code goes here
})(); // End the function literal and invoke it now.
```

### Closures

This use of functions as namespaces becomes really useful when we define one or more functions inside the namespace function using variables within that namesapce, but then pass them back out as the return value of the namespace function. Functions like this are known as closures.

```javascript
let scope = "global scope"; // A global variable
function checkscope() {
  let scope = "local scope"; // A local variable
  function f() {
    return scope;
  } // Return the value in scope here
  return f;
}
let s = checkscope()(); // What does this return?

let uniqueInteger = (function () {
  // Define and invoke
  let counter = 0; // Private state of function below
  return function () {
    return counter++;
  };
})();
uniqueInteger(); // => 0
uniqueInteger(); // => 1

//El siquiente ejemplo muestra como por cada invocacion de la funcion se tienen diferentes declaraciones de variables
function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}
let c = counter(),
  d = counter(); // Create two counters
console.log(c.count()); // => 0
console.log(d.count()); // => 0: they count independently
c.reset(); // reset() and count() methods share state
console.log(c.count()); // => 0: because we reset c
console.log(d.count()); // => 1: d was not reset
```

Clorures capture the local variable (and parameter) bindings of the outer function within which they are defined.

It is worth noting here that you can combine this closure technique with **property getters** and **setters**.

```javascript
function counter(n) {
  // Function argument n is the private variable
  return {
    // Property getter method returns and increments private counter var.
    get count() {
      return n++;
    },
    // Property setter doesn't allow the value of n to decrease
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a larger value");
    },
  };
}

let c = counter(1000);
c.count; // => 1000
c.count; // => 1001
c.count = 2000;
c.count; // => 2000
c.count = 2000; // !Error: count can only be set to a larger value
```

### Function Properties, Methods, and Constructor

Since functions are objects, they can have properties and methods, just like any other object.

- The length Property
- The name Property: This property is primarily useful when writing debugging or error messages.
- The prototype Property
- The call() and apply() Methods
- The toString() Method
- The Function() Constructor

### Functional Programming

- Dos metodos iterantes del dataType array son particularmente utiles para este tipo de programacion map() y reduce().

#### Processing Arrays with Functions

La idea es no utilizar metodos que digan como se hace la operacion sino tomar ventaja de las formas funcionales (por medio de funciones) y expresar mas bien lo que se necesita hacer con el codigo y de esta forma tambien aprovechar las ventajas de utilizar funciones.

Por ejemplo utilizando un "for" se puede iterar un array pero con map se puede hacer lo mismo en caso de necesitar retornar un array y con reduce en caso de que se necesite reducir un array.

El siguiente es un ejemplo claro de una forma funcional, primero se definen dos funciones que exploten la felixibilidad del map() y el reduce() de tal forma que se tengan funciones personalizadas que se puedan ajustar a sus usos mas adelante.

```javascript
// Con esta primera delcracion de constantes estamos creando una funcion map y reduce personalizada para aplicar mas adelante
//la idea de esta funcion es recibir un array, transormaral en el parametro a y como segundo argumento una serie de args, osea una cantidad de qualquier topo de funciones que sean el primer argumento de map y reduce y de acuerdo a como funcionan estos iteradores pues los primeros argumentos son las funciones que van a mapear (devuelve un array) o a reducir (devuleve un solo valro)
const map = function (a, ...args) {
  return a.map(...args);
};
const reduce = function (a, ...args) {
  return a.reduce(...args);
};

// With these map() and reduce() functions defined, our code to compute the mean and standard deviation now looks like this:
const sum = (x, y) => x + y;
const square = (x) => x * x;
let data = [1, 1, 3, 5, 5];
let mean = reduce(data, sum) / data.length;
let deviations = map(data, (x) => x - mean);
let stddev = Math.sqrt(
  reduce(map(deviations, square), sum) / (data.length - 1)
);
stddev; // => 2
```

#### Higher-Order Functions

A higher-order function is a function that operates on functions, taking one or more functions as arguments and returning a new function.

Una forma mas entendible es que una funcion de tipo higher order toma una funcion custom existente y le adicona funcionalidades extra con argumentos extra y utilizar la funcion inicial sin modificarla, solo llamandola, es uno de los principios de la programacion funcional, que todo sea un conjunto de funciones iniciales y a partir de ellas crear funcionalidades sobre las ya creadas y fomentar la reutilizacion de codigo.

- **Ver el libro en esta seccion para ver tres ejemplos concretos.**

#### Partial Application of Functions

- **Ver ejemplo del libro en la pagina 216**

La idea es tener una funcion que se le pueda escoger los argumentos que se le pasan a una funcion que entra como argumento a la funcion parcial y que devuelve la funcion que esta mas temprano definida con los argumenots correspondientes.

- partialLeft
- partialRight
- partial

#### Memoization

Memoization is a technique used to optimize functions by storing the results of expensive function calls and returning the cached result when the same inputs occur again. In JavaScript, functions are first-class objects, which means they can have properties and methods like any other object. This allows us to store cached data directly on the function itself.

```javascript
function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    // Ensure n is a positive integer
    if (!(n in factorial)) {
      // Check if the result is already cached
      factorial[n] = n * factorial(n - 1); // Compute and cache the result
    }
    return factorial[n]; // Return the cached result
  } else {
    return NaN; // Handle invalid input
  }
}

factorial[1] = 1; // Initialize the base case in the cache
console.log(factorial(6)); // => 720
console.log(factorial[5]); // => 120
```

El cache tambien puede venir en forma de closure

```javascript
// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
  const cache = new Map(); // Value cache stored in the closure.
  return function (...args) {
    // Create a string version of the arguments to use as a cache key.
    let key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}
```

## 09 Classes

“favor composition over inheritance.”

In JavaScript, a class is a set of objects that inherit properties from the same prototype object. The prototype object, therefore, is the central feature of a class.

En JavaScript, una clase no es un objeto en sí, sino una plantilla (o "blueprint") para crear objetos. Las clases en JavaScript definen la estructura y el comportamiento de los objetos que se crean a partir de ellas.

Por que una factory function o una clase son necesarias?:

1. **Encapsulation**: The factory function (`range`) and the methods defined on its prototype (`range.methods`) encapsulate the range logic in a reusable and maintainable way. This helps in organizing the code better, especially as the logic grows more complex.

2. **Reusability**: The methods (`includes`, `toString`, `Symbol.iterator`) are defined once on the prototype and reused across all instances of the range objects. This avoids duplicating code and makes the system more efficient.

3. **Iterable Interface**: By implementing the iterable protocol (`*[Symbol.iterator]()`) within the range object, you can directly use the range object in constructs like `for...of` loops and the spread operator (`...`). This makes the range object very flexible and powerful in different contexts.

4. **Readability and Expressiveness**: Using an object-oriented approach can make the code more readable and expressive. For instance, calling `range(1,3).includes(2)` or `[...range(1,3)]` is more intuitive and self-explanatory than manually handling arrays and indices.

5. **Method Chaining and Fluent API**: The object-oriented approach can be extended to support method chaining, which allows for more fluent and readable code.

6. **Extensibility**: It's easier to extend the functionality by adding more methods to the `range.methods` object. For example, if you later want to add methods like `map`, `filter`, or other utility functions, you can do so without changing the existing function signatures or affecting the existing code that uses the range objects.

- **When to Use Which**

**Constructor Functions:** Use when you need the benefits of prototype inheritance and when you are following a more class-like structure (especially in ES6+ with the class syntax).

**Factory Functions:** Use when you need more flexibility, encapsulation, and when you want to avoid the complexities and potential pitfalls of new.

While both factory functions and constructor functions are used to create objects, they differ significantly in their approach, flexibility, and the way they handle inheritance. Factory functions offer a more flexible and error-proof way to create objects without the need for the new keyword, whereas constructor functions are more suited for scenarios where prototype inheritance and a more class-like structure are required.

### Classes and Prototypes

El ejemplo 9.1 es una forma de mostrar como funciona una clase de forma rudimentaria ya que lo que hace es utilizar el object.create () para encerrar variables y metodos (metodos que estan en otro object) de forma que cuando se invoque la funcion las varialbes solo se puedan leer a travez de el object creado con Object.create().

**La siguiente es una explicacion de chatGPT de por que las classes son importantes teniendo como base el ejemplo 9.1 del libro.**

### Classes and Constructors

- A constructor is a function designed for the initialization of newly created objects.
- The critical feature of constructor invocations is that the prototype property of the constructor is used as the prototype of the new object.
- Function objects that have a prototype property.
- Constructors llevan el nombre con la primera letra en mayuscula
- Gracias a new.target se puede saber si una invocacion es un constructor o no

Esta es una muestra, el resto del ejercicio esta en la pagina 224

```javascript
function Range(from, to) {
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  this.from = from;
  this.to = to;
}
```

- **Constructors, Class Identity, and instanceof**

If we have an object r and want to know if it is a Range object, we can write:

```javascript
r instanceof Range; // => true: r inherits from Range.prototype

range.methods.isPrototypeOf(r); // range.methods is the prototype object.
```

- **The constructor Property**

Any regular JavaScript function (excluding arrow functions, generator functions, and async functions) can be used as a constructor, and constructor invocations need a prototype property.

### Classes with the class Keyword

En el libro se muestra el ejemplo del Range en forma de class como tal con la sintaxys moderna y que utiliza la palabra constructor y por supuesto la utilizacion del "this".

Tambien se explica en esta seccion el **super**.

- El **super** es para referirse a la clase padre y que los argumentos que se le asignen a super son los argumentos que le van a entrar a la clase constructora padre (mayor explicacion en la seccion de subclases)

Like function declarations, class declarations have both statement and expression forms. Just as we can write:

```javascript
let square = function (x) {
  return x * x;
};
square(3); // => 9
```

We can also write:

```javascript
let Square = class {
  constructor(x) {
    this.area = x * x;
  }
};
new Square(3).area; // => 9
```

- **Sacado de chatGPT**

Entendiendo mejor los sueper:

In JavaScript, the `super` keyword is used in classes to access and call functions on an object's parent. It serves multiple purposes:

1. **Calling the Parent Constructor**: When you create a subclass, you use `super()` to call the constructor of the parent class. This is essential because the parent class might need to initialize some properties or perform some setup that the subclass will rely on.

2. **Calling Parent Methods**: You can use `super.methodName()` to call a method from the parent class within a method of the subclass. This allows you to extend or override methods while still making use of the functionality provided by the parent class.

- **Example of Calling the Parent Constructor**

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    // Call the parent class constructor with `super()`
    super(name);
    this.age = age;
  }

  introduce() {
    console.log(`I am ${this.age} years old.`);
  }
}

const childInstance = new Child("John", 10);
childInstance.greet(); // Output: Hello, my name is John
childInstance.introduce(); // Output: I am 10 years old.
```

In this example, `super(name)` is used in the `Child` class constructor to call the constructor of the `Parent` class, passing the `name` argument.

- **Example of Calling Parent Methods**

```javascript
class Parent {
  greet() {
    console.log("Hello from the parent class!");
  }
}

class Child extends Parent {
  greet() {
    // Call the parent class method using `super`
    super.greet();
    console.log("Hello from the child class!");
  }
}

const childInstance = new Child();
childInstance.greet();
// Output:
// Hello from the parent class!
// Hello from the child class!
```

In this example, `super.greet()` is used within the `greet` method of the `Child` class to call the `greet` method of the `Parent` class. This allows the child method to add its own behavior while still including the parent's behavior.

- **Summary**

- **`super()` in constructor**: Used to call the parent class constructor. This is often necessary to properly initialize the subclass.
- **`super.methodName()`**: Used to call methods from the parent class, allowing you to build upon or extend the parent class's functionality.

Understanding how to use `super` effectively is crucial for working with inheritance in ES6 classes, as it helps maintain proper initialization and method chaining between parent and child classes.

#### Static Methods

##### Why Use Static Methods?

Static methods are useful for functions that:

- Perform operations that don't require data from an instance of the class.
- Are utility functions related to the class.

For example, if you have a class that handles various string operations, you might have some methods that can operate directly on strings without needing any instance-specific data.

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Static method
  static calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
}

// Create an instance of Circle
const myCircle = new Circle(10);

// Call the instance method
console.log(myCircle.getArea()); // Outputs: 314.159...

// Call the static method on the class
console.log(Circle.calculateCircumference(10)); // Outputs: 62.831...
```

It almost never makes sense to use the this keyword in a static method.

Key Points to Remember

- Static methods are called on the class itself, not on instances of the class.
- Static methods cannot access instance properties directly, because they do not operate on any specific instance of the class.
- Static methods are useful for utility functions that are related to the class but do not depend on instance properties.

Comparing Static and Instance Methods

| Feature                     | Static Method                          | Instance Method                         |
| --------------------------- | -------------------------------------- | --------------------------------------- |
| **Called On**               | Class itself                           | Instance of the class                   |
| **Access to Instance Data** | No                                     | Yes                                     |
| **Common Use Case**         | Utility functions related to the class | Functions that operate on instance data |

- **Explanation**

a. **Static Methods**

- **Definition**: Static methods are defined on the class itself and not on instances of the class.
- **Usage**: They are called directly on the class.
- **Access**: They do not have access to instance properties or methods.
- **Purpose**: Useful for utility functions that do not require any data from class instances.

b. **Instance Methods**

- **Definition**: Instance methods are defined on the prototype of the class and are called on instances of the class.
- **Usage**: They are called on an instance of the class.
- **Access**: They have access to the instance's properties and methods.
- **Purpose**: Useful for operations that need to manipulate or retrieve data from a specific instance of the class.

#### Getters, Setters, and other Method Forms

- Se utilizan las mismas tecnicas explicadas en la seccion de getters and setters en el capitulo de objects.
- In general, all of the shorthand method definition syntaxes allowed in object literals are also allowed in class bodies.

#### Public, Private, and Static Fields

If you want to define a field (which is just an object-oriented synonym for “property”) on a class instance, you must do that in the constructor function or in one of the methods.

- Hasta el 2020 no es que sea muy soportado por los navegadores.
- REACT utiliza el siguiente tipo de sintaxys para definir fields en javascript:

Suppose you’re writing a class like this one, with a constructor that initializes three
fields:

```javascript
class Buffer {
  constructor() {
    this.size = 0;
    this.capacity = 4096;
    this.buffer = new Uint8Array(this.capacity);
  }
}
```

With the new instance field syntax that is likely to be standardized, you could instead write:

```javascript
class Buffer {
  size = 0;
  capacity = 4096;
  buffer = new Uint8Array(this.capacity);
}
```

- **Private fields**

If, for the preceding hypothetical Buffer class, you wanted to ensure that users of the class could not inadvertently modify the size field of an instance, you could use a private #size field instead, then define a getter function to provide read-only access to the value:

```javascript
class Buffer {
  #size = 0; //private field
  get size() {
    return this.#size;
  }
}
```

#### Example: A Complex Number Class

Example 9-4 defines a class to represent complex numbers. The class is a relatively simple one, but it includes instance methods (including getters), static methods, instance fields, and static fields. It includes some commented-out code demonstrating how we might use the not-yet-standard syntax for defining instance fields and static fields within the class body.

Pagina 234.

### Adding Methods to Existing Classes

Se utiliza una forma de explotacion del prototype que es dinamico (osea que se pueden cambiar los metodos y las propiedades a las clases que lo permitan) de forma que se le puede añadir funcionalidades extra a codigo viejo de javascript.

### Subclasses

“favor composition over inheritance.”

In object-oriented programming, a class B can extend or subclass another class A.

- Next is a subsection about avoiding subclasses and relying on object composition instead of
  inheritance.

#### Subclasses and Prototypes

Se explica como al ejercicio principal 9-2 de Range que es una clase, se le puede crear una subclase que inherit desde la clase principal y se le puedan agregar metodos y funcionalidades extra, por supuesto se utiliza el Object.create() para crear esta descendencia, por supuesto esto es un antiguo metodo.

#### Subclasses with extends and super

Se tiene un ejemplo llamado TypeMap que agrega una forma de verificar el type de una entrada llamada entries y que sea una extencion de la clase Map() que es build in the javascript.

- Hay una lista especifica de las reglas de **super** en las clases.

#### Delegation Instead of Inheritance (compose other classes)

- **“favor composition over inheritance.”**

En la delegacion lo que se hace es utilizar los metodos de la clase propia para delegar a los metodos de la clase a donde se delega lo que se necesita hacer.

El ejemplo 9.7 se puede resumir de la siguiente forma:

entonces en:

```javascript
constructor() {
    this.map = new Map();
}
```

lo que se hace es pasar una referencia del build-in Map(), de forma que se deleguen a ese metodo que es de otra clase por medio de los metodos en la clase que delega?

Exactly! In the line:

```javascript
this.map = new Map();
```

What happens is that you create a new instance of the built-in `Map` class and assign it to the `map` property of the `Histogram` instance. By doing this, you establish a reference to the `Map` object, allowing the `Histogram` class to delegate operations to methods of this `Map` object.

When methods of the `Histogram` class call methods like `set`, `get`, `delete`, etc., they're actually invoking methods of the `Map` object stored in the `map` property. This is what allows for delegation. Instead of implementing the logic for managing data directly in the `Histogram` class, it leverages the functionality of the `Map` class through delegation. This approach promotes code reusability, maintainability, and readability.

#### Class Hierarchies and Abstract Classes

En la seccion anterior se describe como por medio de una subclase que delega a otra clase, aqui se describe como hacerlo sin declarar una subclase en absoluto.

Se habla del concepto de **abstract classes** y **abstract superclasses**.

Y finalmente se encuentra el ejercicio final sobre clases que se puede observar de forma mas detallada **AQUI**.

Importante entender:

- Implementar un método significa proporcionar una definición concreta para ese método en una clase concreta. En JavaScript, esto generalmente significa definir qué hace ese método y qué valor devuelve (si es un método que devuelve un valor). Entonces un metodo delcarado pero NO implementado es un abstracto.

- Entonces una clase abstracta lo que hace es delcarar metodos que aunque no sirven en la clase padre, obligan a las clases hijas tener ese metodo y que estas definan sus propios metodos como quieran pero que los tengan como estan en la clase padre.

- Una clase abstracta en la programación orientada a objetos establece un conjunto de métodos (y a veces propiedades) que las clases hijas deben implementar. Estos métodos definidos en la clase abstracta pueden tener implementaciones predeterminadas (como en el caso de JavaScript donde a menudo arrojan errores), o simplemente pueden ser declaraciones de método sin cuerpo.

- Cuando una clase hereda de una clase abstracta, se espera que la subclase implemente todos los métodos abstractos definidos en la clase abstracta. Esto se hace para garantizar que todas las subclases proporcionen una implementación para estos métodos, lo que ayuda a evitar errores y proporciona una estructura coherente para el código.

## 10 Modules

Anteriormente el modulaje se hacia por medio de classes, objects and closures ya que import an export son relativamente recientes, por eso el require() se utiliza y quedo adaptado a node.

### Modules with Classes, Objects, and Closures

- La forma antigua

Se explica que las clases tienen cierta modularidad pero que llega solo hasta cierto punto y se llega a la conclusion que las funciones ofrecen una mejor forma de esconder implementaciones y que no haya exposicion de propiedades y metodos que debeiran estar escondidos.

- Se presenta un ejemplo de como una clase puede ser implementada en una funcion y que se exporte el "extends"
- Luego se presenta otra funcion que exporta solo funciones que se desee exponer y escondiendo las implementaciones.

El siguiente es un excelente ejemplo de como crear una funcion que esconda ciertas cosas (por medio de closures) y exponga otras (por medio del return)

```javascript
// This is how we could define a stats module
const stats = (function () {
  // Utility functions private to the module
  const sum = (x, y) => x + y;
  const square = (x) => x * x;
  // A public function that will be exported
  function mean(data) {
    return data.reduce(sum) / data.length;
  }
  // A public function that we will export
  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }
  // We export the public function as properties of an object
  return { mean, stddev };
})();
// And here is how we might use the module
stats.mean([1, 3, 5, 7, 9]); // => 5
stats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
```

#### Automating Closure-Based Modularity

Se busca modularizar un archivo como tal y eso se hace con algo de codigo extra y se explica de donde viene el **required()**.

- Hay un muy simple ejemplo de como por ejemplo Node, junta cada modulo en una funcion que se auto ejecuta para dejar listos cada uno de los modulos y asi exponer los return necesarios para utilizar esas funciones.

El ejemplo que encontraste en el libro "JavaScript: The Definitive Guide" es una simplificación del sistema de módulos de Node.js. Este ejemplo ilustra cómo podría funcionar un sistema de módulos básico usando funciones autoejecutables (IIFE) y un objeto global para almacenar módulos.

### Modules in Node

In Node, each file is an independent module with a private namespace.

#### Node Exports

Node defines a global exports object that is always defined.

#### Node Imports

Explica un par de comandos que estan build-in en NODE:

```javascript
// These modules are built in to Node
const fs = require("fs"); // The built-in filesystem module
const http = require("http"); // The built-in HTTP module
// The Express HTTP server framework is a third-party module.
// It is not part of Node but has been installed locally
const express = require("express");

// Esta es una forma de utilizar NODE pora importar un archivo propio
const stats = require("./stats.js");
const BitSet = require("./utils/bitset.js");
```

- When a module exports just a single function or class, all you have to do is require it.
- When a module exports an object with multiple properties, you have a choice: you can import the entire object, or just import the specific properties.

#### Node-Style Modules on the Web

librerias utilizan esta forma basica con require() entre otros, pero la forma moderna y es la que veo en react y next js es utilizar el ya build-in sistema de import y export.

Antes de que JavaScript tuviera soporte nativo para módulos, los desarrolladores de Node.js utilizaban el sistema de módulos CommonJS, que utiliza require para importar módulos y module.exports o exports para exportarlos.

### Modules in ES6

[**AQUI**](/javascript/exports-imports) referencia mas detallada de como hacer imports y exports modernos con syntax ES6

- **Forma moderna de exportar e importar**, lo que por defecto utiliza REACT y NEXTJS
- Se explica la diferencia entre un modulo y un script

```javascript
// mathModule.js
export function suma(a, b) {
  return a + b;
}

export const pi = 3.14159;

// script.js
function suma(a, b) {
  return a + b;
}

const pi = 3.14159;
document.write("Resultado: " + suma(2, 3));
```

#### ES6 Exports

To export a constant, variable, function, or class from an ES6 module, simply add the keyword export before the declaration.

- Ver guia completa [**AQUI**](/javascript/exports-imports)
- It is common to write modules that export only one value (typically a function or class), and in this case, we usually use export default instead of export.
- Default exports with export default can export any expression including anonymous function expressions and anonymous class expressions.

#### ES6 Imports

You import values that have been exported by other modules with the import key‐
word.

- Ver guia completa [**AQUI**](/javascript/exports-imports)
- Explica que `import "./analytics.js";` lo que hace es importar el script o modulo que no exporta nada y que se ejecute como parte del programa.

#### Imports and Exports with Renaming

If two modules export two different values using the same name and you want to import both of those values, you will have to rename one or both of the values when you import it.

Cuando una variable tiene el mismo nombre de dos fuentes diferentes debe de haber un re-nombramiento para que no haya confucion:

```javascript
import { render as renderImage } from "./imageutils.js";
import { render as renderUI } from "./ui.js";
```

Tambien se tiene:

```javascript
import { default as Histogram, mean, stddev } from "./histogram-stats.js";
```

En este codigo lo que se esta diciendo es que importe el default que el otro exporta como lo que esta justo despues del "as", de ahi en adelante lo otro que entra se sabe que son exportaciones que ya traen un nombre.

La siguiente es una otra forma de re-nombramiento

```javascript
export { layout as calculateLayout, render as renderLayout };
```

#### Re-Exports

- Si se desea importar de otro lado y luego re-exportar se haria asi:

```javascript
export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";

// O tambien
export * from "./stats/mean.js";
export * from "./stats/stddev.js";

// O tambien
export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";


// O tambien
// Import the mean() function from ./stats.js and make it the
// default export of this module
export { mean as default } from "./stats.js"


//o Tambien
// The average.js module simply re-exports the stats/mean.js default export
export { default } from "./stats/mean.js"
```

#### JavaScript Modules on the Web

Curiosamente modules es algo relativamente nuevo en javascript, por eso se debe tener este codigo en el HTML:

```javascript
 <script type="module">
```

- Recordar que los modulos siempre se ejecutan en "stric mode"
- Los modulos en un browser se ejecutan como scripts con el atributo defer
- Un dato interesante es que los script normales pueden cargarsen desde cualquier lado pero lo que son de tipo modulo solo pueden cargarse desde el mismo origen que el del HTML que los invoca.

#### Dynamic Imports with import()

With statically imported modules, you are guaranteed that the values you import into a module will be ready for use before any of the code in your module begins to run.

Se pueden utlizar promises o async

```javascript
import("./stats.js").then(stats => {
 let average = stats.mean(data);
})

async analyzeData(data) {
 let stats = await import("./stats.js");
 return {
 average: stats.mean(data),
 stddev: stats.stddev(data)
 };
}
```

- import() no es una funcion, es un operator.

#### import.meta.url

## 11. The JavaScript Standard Library

This chapter covers other important but less fundamental APIs that can be thought of as defining the “standard library” for JavaScript: these are useful classes and functions that are built in to JavaScript and available to all JavaScript programs in both web browsers and in Node.

### 11.1. Sets and Maps

Objects as Maps and Sets JavaScript's Object type is a versatile data structure that can be used in a way similar to maps and sets.

- **Objects as Maps and Sets**

JavaScript's `Object` type is a versatile data structure that can be used in a way similar to maps and sets:

1. **Using Objects as Maps**:

   - In JavaScript, objects map strings (the property names) to arbitrary values. This is similar to how maps work in other programming languages.
   - Example:

     ```javascript
     let map = { key1: "value1", key2: "value2" };
     ```

2. **Using Objects as Sets**:

   - When the values in the object are all set to `true`, the object essentially functions as a set of strings.
   - Example:

     ```javascript
     let set = { value1: true, value2: true };
     ```

- **Limitations of Using Objects**:

While using objects this way is common in JavaScript programming, there are some significant limitations:

- **Restriction to Strings**: Object property names are always strings, limiting the keys that can be used.
- **Inherited Properties**: Objects inherit properties from their prototype, such as `toString` or `hasOwnProperty`. These inherited properties can unintentionally become part of the map or set, causing unexpected behavior.

These classes provide a more robust and flexible way to work with collections of data, avoiding the pitfalls of using objects as makeshift sets or maps.

---

#### 11.1.1. The Set Class

Son como arrays pero que por convencion no deben de repetir su valor en ningun otro lado del set.

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_set.asp), mas detalles acerca de Set

- No se permiten duplicados
- A un set le entran arrays o todo lo que sea iterable
- Su unica propiedad es "size", y tiene una buena lista de metodos que se encuentran completos en w3shcools
- Add() solo adicona un elemento a la vez
- Delete() solo borra uno a la vez
- La finalidad de un Set no es añadir o borrar es chequear si un elemento pertenece o no (has()) que es bien rapido para este tipo de consultas
- Se puede utilizar el spread (...) operator para convertir un set en array

```javascript
let mySet = new Set([1, 2, 3, 4]);
let myArray = [...mySet];
console.log(myArray); // Output: [1, 2, 3, 4]

let oneDigitPrimes = new Set([2, 3, 5, 7]);
let product = 1;
oneDigitPrimes.forEach((n) => {
  product *= n;
});
product; // => 210: 2 * 3 * 5 * 7
```

- Creacion de un set:

```javascript
let s = new Set(); // A new, empty set
let t = new Set([1, s]); // A new set with two members
```

Extraido de chatGPT:

- **Valores únicos**: Cada valor en un `Set` debe ser único. Si intentas agregar un valor que ya existe en el `Set`, no se añadirá.
- **No hay claves**: A diferencia de un `Map`, un `Set` no tiene pares de clave-valor, solo contiene valores.
- **Ordenado**: Los valores en un `Set` también están ordenados por inserción, igual que en un `Map`.

#### 11.1.2 The Map Class

- El argumento opcional del constructor de Map() debe ser un objeto iterable que produzca arrays de dos elementos [clave, valor].
- **Ejemplo de utilizacion**: para copiar un object y que inherit las propiedades:

```javascript
let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2 }; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x", 1], ["y", 2]])
```

- Al igual que con set(), la clave y valor puede ser cualquier tipo de dataType
- Los objetos Map son iterables, y **cada valor iterado** es un array de dos elementos donde el primer elemento es una clave y el segundo elemento es el valor asociado con esa clave.
- La clase Map itera en el orden de inserción.

Extraido de ChatGPT:

¿Qué es un `Map` en JavaScript?:

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

---

#### 11.1.3 WeakMap and WeakSet

- La clase WeakMap es una variante (pero no una subclase real) de la clase Map que no evita que sus valores clave sean recolectados por el garbage collector de javascript.
- Las claves de WeakMap deben ser objetos o matrices (arrays); los valores primitivos no están sujetos a la recolección de basura y no pueden ser utilizados como claves.
- WeakMap solo implementa los métodos get(), set(), has() y delete(). En particular, WeakMap no es iterable y no define keys(), values(), o forEach(). Si WeakMap fuera iterable, entonces sus claves serían alcanzables y no sería débil.
- De manera similar, WeakMap no implementa la propiedad size porque el tamaño de un WeakMap podría cambiar en cualquier momento a medida que los objetos son recolectados por el recolector de basura.
- The intended use of WeakMap is to allow you to associate values with objects without causing **memory leaks**.
- WeakSet no permite valores primitivos como miembros.
- WeakSet solo implementa los métodos add(), has() y delete() y no es iterable.
- WeakSet no tiene una propiedad size.

Extraido de chatGPT:

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

### 11.2. Typed Arrays and Binary Data

[**AQUI**] mas informacion detallada sobre los typed arrays y sus metodos (w3schools)

Los arrays son muy rápidos. Sin embargo, todavía son bastante diferentes de los tipos de arrays de lenguajes de nivel inferior como C y Java. Los arrays tipados, introducidos en ES6, se asemejan mucho más a los arrays de bajo nivel de esos lenguajes.

- No son tecniacamente un array (osea que sale falso en Array.isArray())
- The elements of a typed array are all numbers.
- You must specify the length of a typed array when you create it, and that length can never change.
- The elements of a typed array are always initialized to 0 when the array is created.

#### 11.2.1 Typed Array Types

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

#### 11.2.2. Creating Typed Arrays

Constructor:

```javascript
let bytes = new Uint8Array(1024); // 1024 bytes
let matrix = new Float64Array(9); // A 3x3 matrix
let point = new Int16Array(3); // A point in 3D space
let rgba = new Uint8ClampedArray(4); // A 4-byte RGBA pixel value
let sudoku = new Int8Array(81); // A 9x9 sudoku board
```

---

#### 11.2.3. Using Typed Arrays

La función aquí calcula el mayor número primo menor que el número que especifiques. El código es exactamente el mismo que sería con un array regular de JavaScript, pero usar Uint8Array() en lugar de Array() hace que el código se ejecute más de cuatro veces más rápido y use ocho veces menos memoria en mis pruebas.

---

#### 11.2.4. Typed Array Methods and Properties

In addition to standard array methods, typed arrays also implement a few methods of their own:

- BYTES_PER_ELEMENT: Property to count the number of bytes used to store one element.
- fill(): Fill all elements with a value.
- find(): Returns the first element that satisfies a condition.
- name: Returns the name of the typed array.
- of(): Method to create a typed array from an array.
- some(): Reurns true if one element satisfies a condition.
- subarray().

---

#### 11.2.5 DataView and Endianness

---

### 11.3. Pattern Matching with Regular Expressions

[**AQUI**] informacion mas detallada sobre regEx.

A regular expression is an object that describes a textual pattern.

#### 11.3.1 Defining Regular Expressions

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

#### 11.3.2 String Methods for Pattern Matching

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

#### 11.3.3. The RegExp Class

This section documents the RegExp() constructor, the properties of RegExp instances, and two important pattern-matching methods defined by the RegExp class.

- **RegExp properties**
- test()
- exec()

### 11.4 Dates and Times

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_date.asp) informacion mas detallada del constructor que devuelve un object llamado DATE.

The Date class is JavaScript’s API for working with dates and times.

```javascript
let now = new Date(); // The current time
```

- Si se le ingresa un simple dato numerio este se interpretara como milisegundos desde 1970

Esta es una forma de ser mas especifico:

```javascript
let century = new Date(
  2100, // Year 2100
  0, // January
  1, // 1st
  2,
  3,
  4,
  5
); // 02:03:04.005, local time
```

- El primer mes se cuenta desde el 0
- El primer dia del mes se cuenta desde 1
- Utiliza la zona definida en el computador o servidor donde se invoca
- Hay funciones especificas para ingresar UTC-GMT

```javascript
let century = new Date("2100-01-01T00:00:00Z"); // An ISO format date
```

Once you have a Date object, various get and set methods allow you to query and modify the year, month, day-of-month, hour, minute, second, and millisecond fields of the Date.

#### 11.4.1 Timestamps (marcas de tiempo)

Como agregar 30 segundos a un tiempo pre-definido

```javascript
d.setTime(d.getTime() + 30000);
```

#### 11.4.2 Date Arithmetic

- Se pueden usar los operadores `<, <=, >, and >=`
- Para realizar operaciones aritméticas con fechas que involucren días, meses y años, puedes usar setDate(), setMonth() y setYear(). Aquí, por ejemplo, hay un código que agrega tres meses y dos semanas a la fecha actual:

```javascript
let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);
```

#### 11.4.3. Formatting and Parsing Date Strings

Algunos ejemplos de los diferentes formatos (string formating) que se pueden imprimir

```javascript
let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on New Year's Day 2020
d.toString(); // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
d.toUTCString(); // => "Thu, 02 Jan 2020 01:10:30 GMT"
d.toLocaleDateString(); // => "1/1/2020": 'en-US' locale
d.toLocaleTimeString(); // => "5:10:30 PM": 'en-US' locale
d.toISOString(); // => "2020-01-02T01:10:30.000Z"
```

### 11.5. Error Classes

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_error.asp) imformacion mas detallada del object error

- La importancia del throw and catch (pueden atrapar cualquier datatype o valor en javascript incluyendo primitivos)
- Error solo funciona si se delcara en el mismo lado que el throw
- Propiedades que posee: message and name, y el method toString() y en los browsers la propiedad stack que recoge el trace del error
- Tambien existen subclases para categorizar mas esactamente los errores
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

### 11.6. JSON Serialization and Parsing

La serializacion es es el proceso de convertir los datos que estan en diferenes datatypes de acuerdo a como se necesite dentro del runtime, para transmitirlos se necesitan convertir a algun formato que permita la transmicion segura y ordenada, para eso se utiliza el formato JSON (“JavaScript Object Notation”)

- JSON supports: primitive numbers and strings and also the values true, false, and null, as well as arrays and objects built up from those primitive values.
- JSON does NOT supports: JSON does not support other JavaScript types like Map, Set, RegExp, Date, or typed arrays.
- JSON main functions: JSON.stringify() and JSON.parse()
- Ejemplo de como pasar de javascript a json y viceversa:

```javascript
let o = { s: "", n: 0, a: [true, false, null] };
let s = JSON.stringify(o); // s == '{"s":"","n":0,"a":[true,false,null]}'
let copy = JSON.parse(s); // copy == {s: "", n: 0, a: [true, false, null]}
```

#### 11.6.1. JSON Customizations

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

## 11.10 Timers

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
Math.max(...data) // => 5
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
    array.forEach(function(value) {
      console.log(value);
    });
    ```

3. **`Array.prototype.map()` Method**: Similar to `forEach`, this method creates a new array populated with the results of calling a provided function on every element in the calling array. It's useful for transforming arrays.

    ```javascript
    const array = [1, 2, 3];
    const doubled = array.map(function(value) {
      return value * 2;
    });
    console.log(doubled); // Output: [2, 4, 6]
    ```

4. **`Array.prototype.filter()` Method**: This method creates a new array with all elements that pass the test implemented by the provided function. It's useful for filtering arrays based on certain conditions.

    ```javascript
    const array = [1, 2, 3, 4, 5];
    const evenNumbers = array.filter(function(value) {
      return value % 2 === 0;
    });
    console.log(evenNumbers); // Output: [2, 4]
    ```

5. **`Array.prototype.reduce()` Method**: This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value. It's powerful for aggregating values.

    ```javascript
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    console.log(sum); // Output: 15
    ```

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
        this.values = ['a', 'b', 'c'];
      }

      [Symbol.iterator]() {
        let index = 0;
        return {
          next: () => ({ value: this.values[index++], done: index > this.values.length })
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

A generator is a kind of iterator defined with powerful new ES6 syntax.  it’s particularly useful when the values to be iterated are not the elements of a data structure, but the result of a computation.

Se define una funcio iteradora con el operador especial "*"

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
const seq = function*(from,to) {
 for(let i = from; i <= to; i++) yield i;
};
[...seq(3,5)] // => [3, 4, 5]
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
 while(n-- > 0) { // Loop n times:
 let next = it.next(); // Get the next item from the iterator.
 if (next.done) return; // If there are no more values, return early
 else yield next.value; // otherwise, yield the value
 }
}
// An array of the first 5 Fibonacci numbers
[...take(5, fibonacciSequence())] // => [1, 1, 2, 3, 5]
```

#### 12.3.2 yield* and Recursive Generators

Se explica la utilizacion del `yield*`

### 12.4 Advanced Generator Features

El uso más común de las funciones generadoras es crear iteradores, pero la característica fundamental de los generadores es que nos permiten pausar una computación, producir resultados intermedios y luego reanudar la computación más tarde.

#### 12.4.1 The Return Value of a Generator Function

Una curiosidad es que un generator retorna una pareja final que es el valor que retorna la funcion y el "done", no se deja ver con el yield pero si utilizando el next()

```javascript
function *oneAndDone() {
 yield 1;
 return "done";
}
// The return value does not appear in normal iteration.
[...oneAndDone()] // => [1]

// But it is available if you explicitly call next()
let generator = oneAndDone();
generator.next() // => { value: 1, done: false}
generator.next() // => { value: "done", done: true }
// If the generator is already done, the return value is not returned again
generator.next() // => { value: undefined, done: true }

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
let okay = document.querySelector('#confirmUpdateDialog button.okay');
// Now register a callback function to be invoked when the user
// clicks on that button.
okay.addEventListener('click', applyUpdate);
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
