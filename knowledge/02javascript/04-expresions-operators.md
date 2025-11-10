---
sidebar_position: 4
---

# 4. Expressions and Operators

- Una expresión es una frase de JavaScript que puede evaluarse para producir un valor.
- La forma más común de construir una expresión compleja a partir de expresiones más simples es utilizando un operador.

**ALGO importante para tener en cuenta entre la diferencia entre expreciones y sentencias en javascript:**

- Expresiones → crean o producen un valor. (Son como “bloques que generan información”)
- Sentencias (statements) → controlan el flujo o la estructura del programa. (Son como “órdenes” o “acciones que se ejecutan”)

## 4.1. Expresiones Primarias

- Constant literals
- Some reserved words
- Reference to a variable , constant or property (in global)

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

## 4.3. Definiciones de funciones y expreciones

Una expresión de definición de función define una función en JavaScript, y el valor de dicha expresión es la nueva función definida.

## 4.4. Expreciones para acceder a propiedades

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

## 4.5. Expreciones de Invocacion

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

Estos son en donde se utiliza new para crear una instanica ya sea de una clase o de una funcion constructora.

```javascript
new Object();
new Date();
```

- Es importante destacar que el constructor tipo funcion es la forma antigua, la forma nueva es por medio de clases.

## 4.7. Operators Overview

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
- Orden de Evaluacion

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
