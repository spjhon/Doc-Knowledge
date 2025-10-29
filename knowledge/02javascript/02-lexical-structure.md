---
sidebar_position: 2
---

# 2. Lexical Structure

ChatGPT PlusLa estructura léxica de un lenguaje de programación es el conjunto de reglas elementales que especifican cómo se escriben los programas en ese lenguaje. Es la sintaxis de nivel más bajo de un lenguaje: define cómo deben verse los nombres de las variables, cuáles son los caracteres delimitadores de los comentarios y cómo se separa una instrucción de programa de la siguiente, por ejemplo.

Este breve capítulo documenta la estructura léxica de JavaScript.

---

## 2.1. El texto de javascript

- Javascript diferencia entre MAYUSCULAS y minusculas.
- Javascript ignora los espacios y los enter casi siempre por lo cual se puede identar a voluntad.

---

## 2.2. Comentarios

`// This is a single-line comment.`
`/* This is also a comment */`
`// and here is another comment.`

```javascript
/*
This is a multi-line comment. The extra * characters at the start of each line are not a required part of the syntax; they just look cool!
 */
```

---

## 2.3. Literals

Un literal es un valor de dato que aparece directamente en un programa. Los siguientes son todos ejemplos de literales, en el capitulo 3 se puede ver mas a fondo estos literales:

```javascript
12; // The number twelve
1.2; // The number one point two
("hello world"); // A string of text
("Hi"); // Another string
true; // A Boolean value
false; // The other Boolean value
null; // Absence of an object
```

---

## 2.4. Identifiers and Reserved Words

Para comenzar el nombre de una variable se puede utilizar "\_" y "$"

```javascript
i;
my_variable_name;
v13;
_dummy;
$str;
```

La lista completa de palabras reservadas esta:

### Tabla de Reserved Words in JavaScript

**Control Flow** para loops:

|          |          |           |            |           |
| -------- | -------- | --------- | ---------- | --------- |
| `break`  | `case`   | `catch`   | `continue` | `default` |
| `do`     | `else`   | `finally` | `for`      | `if`      |
| `return` | `switch` | `throw`   | `try`      | `while`   |
| `with`   |          |           |            |           |

**Declarations and Scope** para declarar variables o classes

|          |          |            |         |       |
| -------- | -------- | ---------- | ------- | ----- |
| `const`  | `class`  | `function` | `let`   | `var` |
| `export` | `import` | `extends`  | `super` |       |

**Object-Oriented Programming** para manupulacion de objects y classes

|         |           |       |         |        |
| ------- | --------- | ----- | ------- | ------ |
| `class` | `extends` | `new` | `super` | `this` |

**Type and Value Keywords** keywords especiales para ver que tipo de dato es uno en particular

|          |              |        |     |     |
| -------- | ------------ | ------ | --- | --- |
| `typeof` | `instanceof` | `void` |     |     |

**Error Handling** Para el manejo de errores

|         |           |         |       |     |
| ------- | --------- | ------- | ----- | --- |
| `catch` | `finally` | `throw` | `try` |     |

**Asynchronous Programming** para programacion no sincrona

|         |         |     |     |     |
| ------- | ------- | --- | --- | --- |
| `async` | `await` |     |     |     |

**Literals** literales que se utilizan a menudo mas que todo booleanos

|         |        |        |     |     |
| ------- | ------ | ------ | --- | --- |
| `false` | `null` | `true` |     |     |

**Future Reserved Words** palabras reservadas mas que todo para classes

|             |              |             |           |           |
| ----------- | ------------ | ----------- | --------- | --------- |
| `enum`      | `implements` | `interface` | `package` | `private` |
| `protected` | `public`     | `static`    |           |           |

**Other Reserved Words** otras palabras reservadas mas que todo para funciones

|             |        |     |     |     |
| ----------- | ------ | --- | --- | --- |
| `arguments` | `eval` |     |     |     |

**Deprecated and Reserved for Future Use** las que ya no se utilizan o es mejor evitar

|             |            |          |              |                |
| ----------- | ---------- | -------- | ------------ | -------------- |
| `abstract`  | `boolean`  | `byte`   | `char`       | `double`       |
| `final`     | `float`    | `goto`   | `implements` | `int`          |
| `interface` | `long`     | `native` | `package`    | `private`      |
| `protected` | `public`   | `short`  | `static`     | `synchronized` |
| `transient` | `volatile` |          |              |                |

---

## 2.5. Unicode

El tipo de dato de JavaScript para representar texto es la cadena (string). Una cadena es una secuencia ordenada e inmutable de valores de 16 bits, cada uno de los cuales normalmente representa un carácter Unicode.

### 2.5.1. Unicode Escape Sequences

```javascript
"😊 represents the “grinning face” emoji.";
let café = 1; // Define a variable using a Unicode character
caf\u00e9 // => 1; access the variable using an escape sequence
caf\u{E9} // => 1; another form of the same escape sequence
console.log("\u{1F600}"); // Prints a smiley face emoji
```

---

## 2.6. Optional Semicolons

Tener en cuenta cuando javascript agrega semicolons (;) al romper lineas y otras condiciones a tener en cuenta, por recomendacion es mejor siempre poner el punto y coma en donde debe de ir.
