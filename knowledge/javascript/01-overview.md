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

### Exploring JavaScript

- El codigo es interpretado o "renderizado" por medio del navegador

### Hello World

- Como generar codigo javascript simplemente desde un texto txt.
- If JavaScript expressions are like phrases, then JavaScript statements are like full sen‐
tences.
- Ejemplo de contador de letras en la pagina 12.

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
12 // The number twelve
1.2 // The number one point two
"hello world" // A string of text
'Hi' // Another string
true // A Boolean value
false // The other Boolean value
null // Absence of an object
```

### Identifiers and Reserved Words

Para comenzar el nombre de una variable se puede utilizar "_" y "$"

```javascript
i
my_variable_name
v13
_dummy
$str
```

La lista completa de palabras reservadas esta [**AQUI**](/javascript/reservedWords)

### Unicode

The JavaScript type for representing text is the string. A string is an immutable ordered sequence of 16-bit values, each of which typically represents a Unicode character.

#### Unicode Escape Sequences

```javascript
"😊 represents the “grinning face” emoji."
```

### Optional Semicolons

Tener en cuenta cuando javascript agrega semicolons (;) al romper lineas y otras condiciones a tener en cuenta, por recomendacion es mejor siempre poner el punto y coma en donde debe de ir.

## 03 Types, Values and Variables

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_global.asp) Encontrara todos los metodos para aplicar a todos los **DataType**

(Paginas de 23 a 60 del libro)

### Overview and Definitions

- Existen primitive type  y el resto, el absoulto resto es un object.
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
euro.length // => 1: this character has one 16-bit element
love.length // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
```

- The empty string is the string of length 0.
- Most string-manipulation methods defined by JavaScript operate on 16-bit values, not characters.
- To include a string in a JavaScript program, simply enclose the characters of the string within a matched pair of single or double quotes or backticks (' or " or `)

#### String Literals

```javascript
"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`
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
s[0] // => "h"
s[s.length-1] // => "d"

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;

```

- **Template literals** para empotrar variables en strings

```javascript
let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."
```

- **Tagged template literals**

```javascript
`\n`.length // => 1: the string has a single newline character
String.raw`\n`.length // => 2: a backslash character and the letter n
```

- **Pattern Matching**

```javascript
/^HTML/; // Match the letters H T M L at the start of a string
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i; // Match "javascript" as a word, case-insensitive

let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits
```

- **Read Characters**

```javascript
let s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"
```

### Boolean Values

[**AQUI**](https://www.w3schools.com/jsref/jsref_obj_boolean.asp) Encontrara todos los metodos para aplicar al DataType Booleano

Boolean values are commonly used in JavaScript control structures.

Falsy Values

```javascript
undefined
null
0
-0
NaN
"" // the empty string
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
10 + " objects" // => "10 objects": Number 10 converts to a string
"7" * "4" // => 28: both strings convert to numbers
let n = 1 - "x"; // n == NaN; string "x" can't convert to a number
n + " objects" // => "NaN objects": NaN converts to string "NaN"
```

**Nota** En la pagina 45 del libro hay una tabla que muestra todos los tipos de conversion que javascript hace.

#### Conversions and Equality

```javascript
null == undefined // => true: These two values are treated as equal.
"0" == 0 // => true: String converts to a number before comparing.
0 == false // => true: Boolean converts to number before comparing.
"0" == false // => true: Both operands convert to 0 before comparing!
```

#### Explicit Conversions

Cuando se hace una conversion de datos a voluntad o de forma explicita

```javascript
Number("3") // => 3
String(false) // => "false": Or use false.toString()
Boolean([]) // => true
```

[**AQUI**](/javascript/parsers) se puede observar todos los tipos de parse que tiene javascript

#### Object to Primitive Conversions

Hay tres algoritmos que aplica javascript para poder convertir objects a strings

- prefer-string
- prefer-number
- no-preference

### Variable Declaration, Assignment and Destructuring

- Declaracion de variables y asignacion de "identifiers"
- Let, Conts y Var (var esta deprecated)
- La variables se pueden declarar juntas y tambien asignar en cadena

```javascript
let i, sum; //delcaracion doble

//It is a good programming practice to assign an initial value to your variables when you declare them, when this is possible
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x; // Initializers can use previously declared variables
```

- **OJO** con el scope

#### Destructuring Asigment

```javascript
let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values
```

- Toda la informacion esta en el capitulo, referirse a el.
- destructuring can also be used when defining the parameters to a function.
- destructuring tambien funciona en el return de una funcion.

```javascript
// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
 return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}

let [r,theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
```

- destructuring funciona en loops tambien.
