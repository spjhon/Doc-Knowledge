---
sidebar_position: 4
---

# 4. Expresiones y Operadores

- Una expresión es una frase de JavaScript que puede evaluarse para producir un valor.
- La forma más común de construir una expresión compleja a partir de expresiones más simples es utilizando un operador.

**ALGO importante para tener en cuenta entre la diferencia entre expresiones y sentencias en javascript:**

- Expresiones → crean o producen un valor. (Son como “bloques que generan información”)
- Sentencias (statements) → controlan el flujo o la estructura del programa. (Son como “órdenes” o “acciones que se ejecutan”)

## 4.1. Expresiones Primarias

- Constant literals
- Some reserved words
- Reference to a variable , constant or property (in global)

```javascript
//Aquí se aprecia un literal, osea asi solito, 
// el lenguaje lo reconoce como LITERAL
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal
```

## 4.2. Inicializadores de objects y arrays

- Estos inicializadores son considerados expresiones.

```javascript
//Definiciones Literales
[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7

//Definiciones en variable
let matrix = [[1,2,3], [4,5,6], [7,8,9]];

//Asi se pueden declarar espacios vacios.
let sparseArray = [1,,,,5];
```

Estos son inicializadores de objects:

```javascript
let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p
```

## 4.3. Definiciones de funciones y expresiones

Una expresión de definición de función define una función en JavaScript, y el valor de dicha expresión es la nueva función definida.

## 4.4. Expresiones para acceder a propiedades

Una expresión de acceso a propiedad se evalúa para obtener el valor de una propiedad de un objeto o de un elemento de un arreglo.

```javascript
expression.identifier
expression[ expression ]
let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]
```

### 4.4.1. Acceso de propiedades de forma condicionada

En JavaScript, los valores null y undefined son los únicos dos valores que no tienen propiedades.

```javascript
expression?.identifier;
expression?.[expression];
```

## 4.5. Expresiones de Invocación

- An invocation expression is JavaScript’s syntax for calling (or executing) a function or method.

```javascript
f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.
```

### 4.5.1. Invocaciones condicionales

Asi se hacia antes:

```javascript
function square(x, log) { // The second argument is an optional function
if (log) { // If the optional function is passed
log(x); // Invoke it
}
return x * x; // Return the square of the argument
}
```

Ahora se hace asi:

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

## 4.6. Expresiones para crear objects

Estos son en donde se utiliza new para crear una instancia ya sea de una clase o de una función constructora.

```javascript
new Object();
new Date();
```

- Es importante destacar que el constructor tipo función es la forma antigua, la forma nueva es por medio de clases.

## 4.7. Operators Overview

[**AQUÍ**](https://www.w3schools.com/jsref/jsref_operators.asp) Resumen de operadores en javascript.

[**AQUI**](https://www.w3schools.com/jsref/jsref_oper_arithmetic.asp) Encontrara todos los operadores aritmeticos

[**AQUI**](https://www.w3schools.com/jsref/jsref_oper_comparison.asp) Encontrara todos los operadores de comparacion

[**AQUI**](https://www.w3schools.com/jsref/jsref_oper_misc.asp) Otros operadores

- Operators are used for JavaScript’s arithmetic expressions, comparison expressions, logical expressions, assignment expressions,and more.
- En la pagina **69** del libro se tiene la tabla **4.1** de todos los operadores en orden de **precedencia**.
- JavaScript operators usually convert the type (see §3.9) of their operands as needed.
- Ojo con los side effects

**TENER EN CUENTA:**

- Numero de Operandos
- Los dataType que se aplican a un operando
- Side effects
- **Precedencia**
- Asociabilidad de los operandos
- Orden de Evaluación

### 4.7.1. Number of Operands

Los operadores en JavaScript se clasifican según la cantidad de valores o expresiones que necesitan para funcionar, conocida como su “aridad”. La mayoría son operadores binarios, es decir, requieren dos operandos, como el operador de multiplicación `*`, que combina dos expresiones en una más compleja. También existen operadores unarios, que solo necesitan un operando; por ejemplo, el signo negativo `-` en `-x` aplica la operación de negación a un solo valor. Finalmente, JavaScript tiene un único operador ternario (`?:`), que utiliza tres expresiones para formar una sola, generalmente usada para evaluar una condición y devolver un valor u otro según el resultado.

### 4.7.2. Operand and Result Type

Algunos operadores en JavaScript pueden trabajar con valores de cualquier tipo, pero la mayoría requiere que sus operandos sean de un tipo específico y, del mismo modo, suelen devolver un resultado de un tipo determinado. En las tablas de referencia, normalmente se indica qué tipos de valores acepta un operador y qué tipo de valor devuelve. Cuando es necesario, JavaScript convierte automáticamente el tipo de los operandos para que la operación tenga sentido. Por ejemplo, el operador de multiplicación `*` espera números, pero si se usa con cadenas como `"3" * "5"`, el lenguaje convierte ambas a valores numéricos y el resultado será el número `15`, no la cadena `"15"`. Además, todos los valores en JavaScript pueden evaluarse como “truthy” o “falsy”, lo que permite que los operadores que esperan valores booleanos funcionen con cualquier tipo de dato.

Por otra parte, algunos operadores cambian su comportamiento dependiendo del tipo de datos con el que se usen. El caso más común es el operador `+`, que suma números pero concatena cadenas de texto. De manera similar, los operadores de comparación como `<` pueden comparar números o letras según el tipo de los operandos. Cada operador tiene reglas específicas sobre cómo realiza estas conversiones y comparaciones. Finalmente, existen operadores, como los de asignación, que requieren un tipo especial de operando conocido como **lvalue** (“valor a la izquierda”), que significa que puede aparecer legalmente en el lado izquierdo de una asignación. En JavaScript, los **lvalues** incluyen variables, propiedades de objetos y elementos de arreglos, ya que todos pueden recibir un nuevo valor.

### 4.7.3. Operator Side Effects

La evaluación de una expresión simple como `2 * 3` no tiene ningún efecto secundario en el estado del programa; es decir, el resultado se calcula, pero no cambia nada más dentro del código. Sin embargo, existen expresiones que **sí tienen efectos secundarios**, lo que significa que su evaluación puede alterar el resultado de futuras operaciones. El ejemplo más claro son los **operadores de asignación**: cuando asignas un valor a una variable o propiedad, estás cambiando su estado, y cualquier expresión que la use después reflejará ese nuevo valor.

Los operadores de **incremento (`++`) y decremento (`--`)** también generan efectos secundarios, ya que internamente realizan una asignación implícita al modificar el valor de una variable. De forma similar, el operador **`delete`** tiene efectos secundarios porque elimina una propiedad de un objeto, lo que se asemeja —aunque no es exactamente igual— a asignarle el valor `undefined`.

Fuera de esos casos, los demás operadores de JavaScript no producen efectos secundarios por sí mismos. No obstante, las **llamadas a funciones** y la **creación de objetos** pueden tenerlos si, dentro del cuerpo de la función o del constructor, se utilizan operadores o instrucciones que sí alteran el estado del programa.

### 4.7.4. Operator Precedence

Los operadores que aparecen en la Tabla 4-1 están organizados de mayor a menor precedencia, y las líneas horizontales separan los grupos de operadores que tienen el mismo nivel de precedencia. La precedencia de operadores determina el orden en que se ejecutan las operaciones dentro de una expresión. Los operadores con mayor precedencia (ubicados en la parte superior de la tabla) se evalúan antes que los operadores con menor precedencia (los que están más abajo).

### 4.7.5. Operator Associativity

Lo que el texto está explicando es el concepto de **asociatividad de los operadores**, que se refiere a **en qué orden se evalúan los operadores cuando tienen la misma precedencia**.

Por ejemplo:
Cuando una expresión contiene varios operadores con **igual precedencia**, JavaScript necesita saber si debe evaluarlos **de izquierda a derecha** o **de derecha a izquierda**.

- Si la **asociatividad es “L” (left-to-right)**, significa que las operaciones se ejecutan **de izquierda a derecha**.
  👉 Ejemplo: en `a - b - c`, ambos signos menos tienen la misma precedencia y asociatividad **izquierda a derecha**, así que se evalúa como `(a - b) - c`.

- Si la **asociatividad es “R” (right-to-left)**, las operaciones se ejecutan **de derecha a izquierda**.
  👉 Ejemplo: en `a = b = c`, los operadores de asignación tienen asociatividad **derecha a izquierda**, así que primero se evalúa `b = c`, y luego el resultado se asigna a `a`.

En resumen, la **asociatividad** no cambia qué operación se hace primero según la *prioridad*, sino que indica **el orden de evaluación cuando dos operadores tienen la misma prioridad**.

### 4.7.6. Orden de Evaluación

La precedencia y asociatividad de los operadores determinan el orden en que se realizan las operaciones en una expresión compleja, pero no el orden en que se evalúan sus sub-expresiones. En JavaScript, las expresiones siempre se evalúan de izquierda a derecha. Los paréntesis pueden cambiar el orden de las operaciones (como multiplicación o suma), pero no el orden de evaluación. Este orden solo importa si alguna sub-expresión tiene efectos secundarios que alteran el valor de otra (por ejemplo, si una incrementa una variable usada después).

## 4.8. Expresiones aritméticas

Esta sección trata sobre los operadores que realizan operaciones aritméticas u otras manipulaciones numéricas sobre sus operandos.

### 4.8.1. El operador "+"

```javascript
1 + 2; // => 3: addition
"1" + "2"; // => "12": concatenation
"1" + 2; // => "12": concatenation after number-to-string
1 + {}; // => "1[object Object]": concatenation after object-to-string
true + true; // => 2: addition after boolean-to-number
2 + null; // => 2: addition after null converts to 0
2 + undefined; // => NaN: addition after undefined converts to NaN
```

#### 4.8.1.1. Operadores Básicos

1. **Addition (`+`)**: `a + b` - sum of `a` and `b`.
2. **Subtraction (`-`)**: `a - b` - difference between `a` and `b`.
3. **Multiplication (`*`)**: `a * b` - product of `a` and `b`.
4. **Division (`/`)**: `a / b` - quotient of `a` divided by `b`.
5. **Modulus (`%`)**: `a % b` - remainder of `a` divided by `b`.
6. **Exponentiation (`**`)**: `a \*\* b`-`a`raised to the power of`b`.
7. **Floor Division (`//`)**: `a // b` - floor value of the quotient of `a` divided by `b`.

### 4.8.2. Operadores aritméticos unarios

1. **Unary Plus (`+`)**: `+a` - returns the value of `a`.
2. **Unary Minus (`-`)**: `-a` - negates the value of `a`.
3. **Increment (`++`)**: `++a` or `a++` - increases the value of `a` by 1 (language-specific).
4. **Decrement (`--`)**: `--a` or `a--` - decreases the value of `a` by 1 (language-specific).

### 4.8.3. Operadores Bitwise

- `1=true, 0=false`
- AND `(&)`
- OR `(|)`
- XOR `(^)`
- NOT `(~)`
- Shift left `(<<)`
- Shift right with sign `(>>)`
- Shift right with zero fill `(>>>)`

## 4.9. Expresiones Relacionales

- return true or false depending on whether that relationship exists.
- **Tener en cuenta**
- Equality and Inequality Operators
- Equality with type conversion

### 4.9.1. Operadores de Igualdad y Desigualdad

1. **Equal to (`==`)**: `a == b` - true if `a` is equal to `b`.
2. **Not equal to (`!=`)**: `a != b` - true if `a` is not equal to `b`.
3. **Strictly equal to (`===`)**: `a === b` - true if `a` is equal to `b` and of the same type.
4. **Strictly not equal to (`!==`)**: `a !== b` - true if `a` is not equal to `b` or not of the same type.

### 4.9.2. Operadores de comparación

1. **Greater than (`>`)**: `a > b` - true if `a` is greater than `b`.
2. **Less than (`<`)**: `a < b` - true if `a` is less than `b`.
3. **Greater than or equal to (`>=`)**: `a >= b` - true if `a` is greater than or equal to `b`.
4. **Less than or equal to (`<=`)**: `a <= b` - true if `a` is less than or equal to `b`.

#### 4.9.2.1. Casting

```javascript
1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.
```

### 4.9.3. El operador In

in: a in b — devuelve true si a es un elemento de b (por ejemplo, un miembro de una colección como una lista, tupla, conjunto o una clave en un diccionario).

Ejemplo: 3 in [1, 2, 3] — verdadero porque 3 es un elemento de la lista [1, 2, 3].

Ejemplo: **key** in `{'key': 'value'}` — verdadero porque **key** es una clave en el diccionario `{'key': 'value'}.`

### 4.9.4. El operador instanceof

**`instanceof`**: `a instanceof B` - true if `a` is an instance of class `B` or a subclass thereof.

- Example: `obj instanceof MyClass` - true if `obj` is an instance of `MyClass` or a subclass of `MyClass`.

```javascript
let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions
```

## 4.10. Expresiones lógicas

Los operadores lógicos &&, || y ! realizan operaciones de álgebra booleana y se usan con frecuencia junto con los operadores relacionales para combinar dos expresiones relacionales en una expresión más compleja.

Falsy Values:

1. **false**: The boolean value `false`.
2. **0**: The number `0`, whether integer or floating-point.
3. **-0**: Negative zero, although it's rare to encounter this.
4. **0n**: BigInt zero, if you're using BigInts.
5. **"":** An empty string.
6. **null**: The absence of any value or object.
7. **undefined**: Denotes a variable that has not been assigned a value, or an object property that does not exist.
8. **NaN**: Stands for "Not a Number," usually resulting from invalid arithmetic operations or type conversion attempts.

These values are considered falsy because when coerced to a boolean, they evaluate to `false`. For example:

```javascript
if (0) {
  // This code block won't execute because 0 is falsy
  console.log("This won't be printed");
}

if (null) {
  // This code block won't execute because null is falsy
  console.log("Neither will this");
}
```

### 4.10.1. Logical AND (&&)

- This is called **short-circuit** evaluation

- **true && true returns true**
- **true && false returns false**
- **false && true returns false**
- **false && false returns false**

### 4.10.2. Logical OR (||)

El operador || realiza la operación booleana OR sobre sus dos operandos. Si uno o ambos operandos son truthy (verdaderos), devuelve un valor truthy. Si ambos operandos son falsy (falsos), devuelve un valor falsy.

- If one or both operands is truthy, it returns a truthy value. If both operands are falsy, it returns a falsy value.

```javascript
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false
```

### 4.10.3. Logical NOT (!)

```javascript
console.log(!true); // Output: false
console.log(!false); // Output: true
console.log(!!true); // Output: true
console.log(!!false); // Output: false
```

## 4.11. Operadores de asignación

JavaScript usa el operador = para asignar un valor a una variable o propiedad.

```javascript
i = 0; // Set the variable i to 0.
o.x = 1; // Set the property x of object o to 1.
i = j = k = 0; // Initialize 3 variables to 0
```

### 4.11.1. Assignment with Operation

- Assignment with Operation, se recomienda ver la página 87 del libro

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

## 4.12. Expresiones de evaluación

### 4.12.1. The use of eval()

### 4.12.2. Global eval()

### 4.12.3. Strict eval()

## 4.13. Operadores misceláneos

### 4.13.1. El operador condicional (?:)

El operador condicional es el único operador ternario (de tres operandos) en JavaScript y, a veces, se le llama simplemente el operador ternario.

```javascript
greeting = "hello " + (username ? username : "there");
x > 0 ? x : -x; // The absolute value of x
```

### 4.13.2. First-Defined (??)

El operador de coalescencia nula ?? evalúa su primer operando definido: si el operando izquierdo no es null ni undefined, devuelve ese valor.

Se utiliza para proporcionar un valor por defecto cuando se trabaja con valores null o undefined.

```javascript
let value = null;
let defaultValue = "Default";

// The ?? operator returns the right-hand operand when the left-hand operand is null or undefined.
let result = value ?? defaultValue;

// In this case, value is null, so result will be "Default".
console.log(result); // Output: "Default"
```

### 4.13.3. El operador typeof

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

### 4.13.4. El operador delete

`delete` es un operador unario que intenta eliminar la **propiedad de un objeto** o el **elemento de un arreglo** especificado como su operando.

```javascript
let o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore
let a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though
```

```javascript
let o = {x: 1, y: 2};
delete o.x; // Delete one of the object properties; returns true.
typeof o.x; // Property does not exist; returns "undefined".
delete o.x; // Delete a nonexistent property; returns true.
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
delete o; // Undeletable property: returns false, or TypeError in strict mode.
delete Object.prototype;
```

### 4.13.5. El operador await

`await` fue introducido en **ES2017** como una forma de hacer que la **programación asíncrona** sea más natural en JavaScript.

### 4.13.6. El operador void

`void` es un **operador unario** que aparece antes de su único operando, el cual puede ser de **cualquier tipo**.

### 4.13.7. El operador comma (,)

```javascript
(i = 0), (j = 1), (k = 2);
// Evaluates to 2 and is basically equivalent to:
i = 0;
j = 1;
k = 2;
```
