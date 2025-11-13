---
sidebar_position: 6
---

# 5. Statements (Sentencias)

* Un programa de JavaScript es una **secuencia de sentencias**. Cada sentencia es una instrucción para que el computador haga algo.
* ¿Quieres saber si un fragmento de código JS es una **expresión** o una **sentencia**? Intenta imprimirlo con `console.log()`.

  * Si se ejecuta sin error, es una **expresión**.
  * Si genera un error, es una **sentencia** (o código JS inválido).

**Las sentencias en JavaScript terminan con punto y coma (§2.6).**; Las **expresiones** se evalúan para producir un **valor**, mientras que las **sentencias** se ejecutan para **hacer que algo ocurra**.

Tipos de sentencias:

* **Expresiones como sentencias:** Expresiones con efectos secundarios, como asignaciones o invocaciones de funciones, pueden aparecer solas como sentencias.
* **Sentencias de declaración:** Declaran nuevas variables o definen nuevas funciones.
* **Estructuras de control:**

  * Condicionales: Como switch e if
  * Bucles: Como while
  * Saltos: Como break o return

---

## 5.1. Expression Statements (Expresiones sentencias)

Los tipos más simples de sentencias en JavaScript son **expresiones que producen efectos secundarios**.

```javascript
greeting = "Hello " + name;
i *= 3;
```

---

## 5.2. Compound and Empty Statements

Un **bloque de sentencias** combina múltiples sentencias en una sola **sentencia compuesta**, es decir, **todo lo que está dentro de un par de llaves `{ }`**.

---

## 5.3. Condicionales

Las **sentencias condicionales** ejecutan o saltan otras sentencias dependiendo del **valor de una expresión especificada**.

### 5.3.1. if

```javascript
if (expression)
statement
```

### 5.3.2. elseif

```javascript
if (n === 1) {
// Execute code block #1
} else if (n === 2) {
// Execute code block #2
} else if (n === 3) {
// Execute code block #3
} else {
// If all else fails, execute block #4
}
```

### 5.3.3. switch

Cuando todas las ramas dependen del **valor de la misma expresión**, resulta **ineficiente** evaluar esa expresión repetidamente en múltiples sentencias `if`.

```javascript
switch(expression) {
statements
}

switch(n) {
case 1: // Start here if n === 1
// Execute code block #1.
break; // Stop here
case 2: // Start here if n === 2
// Execute code block #2.
break; // Stop here
case 3: // Start here if n === 3
// Execute code block #3.
break; // Stop here
default: // If all else fails...
// Execute code block #4.
break; // Stop here
}

function convert(x) {
switch(typeof x) {
case "number": // Convert the number to a hexadecimal integer
return x.toString(16);
case "string": // Return the string enclosed in quotes
return '"' + x + '"';
default: // Convert any other type in the usual way
return String(x);
}
}
```

---

## 5.4. Loops

Para entender las sentencias condicionales, imaginamos al intérprete de JavaScript siguiendo un camino ramificado a través del código fuente. Las sentencias de bucle son aquellas que doblan ese camino sobre sí mismo para repetir partes del código.

### 5.4.1. while

Repite un bloque de código mientras una condición sea verdadera. JavaScript evalúa la condición:

* Si es true, entra al bloque y lo ejecuta.
* Si es false, se sale del bucle (o ni siquiera entra si empieza siendo falsa).

```javascript
while (condición) {
  // código que se repite (statement)
}

let count = 0;
while(count < 10) {
console.log(count);
count++;
}
```

| Concepto             | Descripción                                           |
| -------------------- | ----------------------------------------------------- |
| **while(condición)** | Repite el bloque mientras la condición sea `true`.    |
| **do...while**       | Ejecuta al menos una vez y luego revisa la condición. |
| **Úsalo cuando**     | No sabes cuántas repeticiones exactas tendrás.        |
| **Cuidado con**      | Olvidar actualizar la variable → bucle infinito.      |

#### 5.4.1.1. ¿Por qué usar `while` si existe `for`?

Buena pregunta.
`for` se usa cuando **sabes cuántas veces** quieres repetir algo.
`while` se usa cuando **no sabes cuántas veces**, pero sí sabes **cuándo** debe parar.

Por ejemplo:

```js
let saldo = 1000;

while (saldo > 0) {
  console.log("Gastando dinero... saldo:", saldo);
  saldo -= 200;
}
```

Aquí no sabes cuántas iteraciones exactas habrá, solo que **mientras tengas saldo**, puedes seguir gastando 😅

### 5.4.2. do/while

```js
do
statement
while (expression);
```

### 5.4.3. for

El `for` es el **bucle más organizado y estructurado** de JavaScript.
Sirve para **repetir un bloque de código un número determinado de veces**.

Piensa en él como un DJ que tiene una lista de canciones (pasos) y va pasando de una a otra **hasta que se acaban** 🎧.

🍿 Sintaxis básica:

```js
for(initialize ; test ; increment)
statement

for (inicio; condición; actualización) {
  // código que se repite
}
```

1. **Inicio** → se ejecuta **una vez** al principio (por lo general, se declara una variable contador).
2. **Condición** → se evalúa **antes de cada vuelta**. Si es `true`, entra. Si es `false`, se sale.
3. **Actualización** → se ejecuta **al final de cada vuelta** (normalmente incrementa el contador).

A diferencia del `while`, el `for` **tiene todo junto**: inicio, condición y actualización. Eso lo hace más compacto y fácil de leer cuando ya sabes cuántas veces quieres repetir algo.

🎉 Bonus divertido

Podéis usar el `for` para cosas creativas también:

```js
for (let i = 1; i <= 5; i++) {
  console.log("🎵".repeat(i));
}
```

Resultado:

```js
🎵
🎵🎵
🎵🎵🎵
🎵🎵🎵🎵
🎵🎵🎵🎵🎵
```

### 5.4.4. for/of

* **arrays, strings, sets, and maps are iterable**

🧩 Versión moderna: `for...of`

Cuando solo te interesa **el valor**, no el índice, hay una forma más elegante:

```js
for (const fruta of frutas) {
  console.log("Me gusta la", fruta);
}
```

💡 `for...of` se usa con arrays, strings, sets, etc.
👉 Mucho más limpio que andar contando con índices.

### 5.4.5. for/in

⚙️ Otro primo: `for...in`

Este recorre **propiedades de un objeto** (ojo: no confundir con `for...of`). Cuando trabajas con **arreglos**, casi siempre deberías usar **`for/of`** en lugar de **`for/in`**.

El bucle **for/in** se explicó en §5.4.5. Ejecuta el cuerpo del bucle una vez por cada propiedad **enumerable** (propia o heredada) del objeto especificado.

```js

for (variable in object)
statement


const persona = { nombre: "Juan", edad: 25, ciudad: "Medellín" };

for (const clave in persona) {
  console.log(clave, "→", persona[clave]);
}
```

📦 `for...in` → para **objetos**
🎒 `for...of` → para **listas, arrays, strings, etc.**

---

## 5.5. Jumps

Otra categoría de sentencias en JavaScript son las sentencias de salto (jump statements). Como su nombre lo indica, hacen que el intérprete de JavaScript salte a una nueva ubicación en el código fuente.

* Labeled Statements
* break
* continue: When the continue statement is executed, the current iteration of the enclosing loop is terminated, and the next iteration begins. This means different things for different types of loops
* return
* yield
* throw
* try/catch/finally

### 5.5.1. Sentencias Marcadas (labeled statements)

Un statement puede marcarse solo usando los dos puntos:

```js
identifier: statement

mainloop: while(token !== null) {
// Code omitted...
continue mainloop; // Jump to the next iteration of the named loop
// More code omitted...
}
```

#### 5.1.5.1. 🎯 ¿Para qué sirve de verdad?

La magia aparece cuando tienes **bucles anidados** y quieres romper o continuar **uno externo** (no solo el interno).

Por ejemplo:

```js
externo: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break externo; // rompe el for externo
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

🧠 Sin la etiqueta, `break` solo podría salir del `for` interno.
Con `break externo`, saltas *directamente fuera del for de arriba*.

👉 Es como decir: “salte de todo eso y vuelve al nivel del bucle principal”.

🧩 También funciona con `continue`

Ejemplo:

```js
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outerLoop; 
    console.log(`i=${i}, j=${j}`);
  }
}
```

Aquí, cuando `j` vale 2, **en lugar de pasar al siguiente `j`**, se salta toda esa vuelta y **va al siguiente `i` del bucle externo**.

* las etiquetas solo sirven para `break` o `continue`, **no para saltar arbitrariamente** (como hacía el viejo y odiado `goto` en otros lenguajes).
* Úsalas **solo** cuando tengas bucles anidados complejos y necesites controlar la salida.

### 5.5.2. break

La sentencia break, usada sola, hace que el bucle o la sentencia switch más interna se interrumpa inmediatamente.

⚡ En resumen rápido

| Palabra        | Qué hace                                                                                    | Imagen mental                   |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------------- |
| **`break`**    | 🚪 **Rompe** el bucle completamente. Se sale del ciclo y sigue el código que viene después. | “Me voy del bucle.”             |
| **`continue`** | ⏭️ **Salta** el resto de la iteración actual, pero **sigue con la siguiente vuelta**.       | “Sigo, pero paso al siguiente.” |

🍕 Visualmente

Imagina el bucle como una serie de pasos:

```js
1 → 2 → 3 → 4 → 5
```

* `break` corta el camino en seco ✂️
  → se detiene en el 3 y no sigue.

* `continue` solo **salta** el 3
  → sigue del 2 al 4 sin ejecutar el bloque de ese paso.

### 5.5.3. continue

La sentencia continue, tanto en su forma etiquetada como no etiquetada, solo puede usarse dentro del cuerpo de un bucle. Usarla en cualquier otro lugar causa un error de sintaxis.

Cuando se ejecuta la sentencia continue, la iteración actual del bucle circundante se termina y comienza la siguiente iteración. Esto significa cosas diferentes para diferentes tipos de bucles:

• En un bucle while, la expresión especificada al comienzo del bucle se evalúa nuevamente, y si es verdadera, el cuerpo del bucle se ejecuta comenzando desde el principio.
• En un bucle do/while, la ejecución salta al final del bucle, donde la condición del bucle se evalúa nuevamente antes de reiniciar el bucle desde el principio.
• En un bucle for, la expresión de incremento se evalúa, y la expresión de prueba se evalúa nuevamente para determinar si debe realizarse otra iteración.
• En un bucle for/of o for/in, el bucle comienza de nuevo con el siguiente valor iterado o el siguiente nombre de propiedad siendo asignado a la variable especificada.

### 5.5.4. return

Un return solo se puede usar para dentro el cuerpo de una función, lo que hace es retornar una expresión a su caller.

```js
function square(x) { return x*x; } // A function that has a return statement
square(2)
```

### 5.5.5. yield

La sentencia yield es muy similar a la sentencia return, pero se usa únicamente en funciones generadoras de ES6 (ver §12.3) para producir el siguiente valor en la secuencia generada de valores sin realmente retornar:

```javascript
// Una función generadora que produce un rango de enteros
function* range(from, to) {
  for(let i = from; i <= to; i++) {
    yield i;
  }
}
```

Para entender yield, debes comprender los iteradores y generadores, que no se cubrirán hasta el Capítulo 12. Sin embargo, yield se incluye aquí por completitud. (Técnicamente, aunque yield es un operador en lugar de una sentencia, como se explica en §12.4.2.)

### 5.5.6. throw

Aquí está la traducción al español:

Una excepción es una señal que indica que ha ocurrido algún tipo de condición excepcional o error. Lanzar una excepción (throw) es señalar tal error o condición excepcional. Capturar una excepción (catch) es manejarla—tomar las acciones que sean necesarias o apropiadas para recuperarse de la excepción. En JavaScript, las excepciones se lanzan cada vez que ocurre un error en tiempo de ejecución y cada vez que el programa lanza una explícitamente usando la sentencia throw. Las excepciones se capturan con la sentencia try/catch/finally, que se describe en la siguiente sección.

```javascript
throw expression

function factorial(x) {
// If the input argument is invalid, throw an exception!
if (x < 0) throw new Error("x must not be negative");
5.5 Jumps | 117
// Otherwise, compute a value and return normally
let f;
for(f = 1; x > 1; f *= x, x--) /* empty */ ;
return f;
}
factorial(4) // => 24

```

### 5.5.7. try/catch/finally

#### 5.5.7.1. ¿Qué es?

El statement `try/catch/finally` es una estructura de control que permite **manejar errores de forma elegante** sin que tu programa se detenga abruptamente.

---

#### 5.5.7.2. Estructura básica

```javascript
try {
  // Código que puede causar un error
} catch (error) {
  // Código que se ejecuta SI ocurre un error
} finally {
    // Código que SIEMPRE se ejecuta (opcional)
    // This block contains statements that are always executed, regardless of
    // what happens in the try block. They are executed whether the try
    // block terminates:
    // 1) normally, after reaching the bottom of the block
    // 2) because of a break, continue, or return statement
    // 3) with an exception that is handled by a catch clause above
    // 4) with an uncaught exception that is still propagating
}
```

Explicación por partes:

1. **Bloque `try`**

    • Contiene el código que **podría** causar un error
    • Si todo va bien, se ejecuta completamente y se salta el `catch`
    • Si ocurre un error, se detiene inmediatamente y salta al `catch`

    ```javascript
    try {
    let resultado = 10 / 0;  // Esto funciona (da Infinity)
    console.log(resultado);   // Se ejecuta
    console.log("Todo bien"); // Se ejecuta
    }
    ```

2. **Bloque `catch`**

    • Se ejecuta **solo si** ocurrió un error en el `try`
    • Recibe un parámetro (comúnmente llamado `error`, `err` o `e`) que contiene información del error
    • Te permite manejar el error sin que el programa se detenga

    ```javascript
    try {
    let x = y;  // Error: y no está definida
    } catch (error) {
    console.log("Hubo un error:", error.message);
    // Salida: "Hubo un error: y is not defined"
    }
    ```

3. **Bloque `finally`** (opcional)

    • Se ejecuta **SIEMPRE**, sin importar si hubo error o no
    • Útil para limpieza: cerrar archivos, conexiones, liberar recursos, etc.

    ```javascript
    try {
    console.log("Intentando...");
    } catch (error) {
    console.log("Error:", error);
    } finally {
    console.log("Esto SIEMPRE se ejecuta");
    }
    ```

---

#### 5.5.7.3. Ejemplos prácticos

Ejemplo 1: Manejo básico de errores

```javascript
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

console.log(dividir(10, 2));  // 5
console.log(dividir(10, 0));  // Error: No se puede dividir por cero, luego null
```

Ejemplo 2: Con `finally`

```javascript
function leerArchivo() {
  let archivo = "abierto";
  
  try {
    console.log("Leyendo archivo...");
    throw new Error("Archivo corrupto");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Cerrando archivo...");
    archivo = "cerrado";
  }
}

leerArchivo();
// Leyendo archivo...
// Error: Archivo corrupto
// Cerrando archivo...
```

Ejemplo 3: JSON parsing

```javascript
function parsearJSON(texto) {
  try {
    let datos = JSON.parse(texto);
    console.log("Datos válidos:", datos);
    return datos;
  } catch (error) {
    console.log("JSON inválido:", error.message);
    return null;
  }
}

parsearJSON('{"nombre": "Juan"}');  // ✅ Funciona
parsearJSON('{nombre: Juan}');       // ❌ Error, JSON inválido
```

Ejemplo 4: Try/catch anidados

```javascript
try {
  console.log("Nivel externo");
  
  try {
    throw new Error("Error interno");
  } catch (error) {
    console.log("Capturado internamente:", error.message);
  }
  
  console.log("Continúa nivel externo");
} catch (error) {
  console.log("Capturado externamente");
}
```

#### 5.5.7.4. Flujo de ejecución

Sin error:

```js
try → (todo bien) → finally → continúa
```

Con error:

```js
try → (error!) → catch → finally → continúa
```

Ejemplo visual:

```javascript
console.log("1. Inicio");

try {
  console.log("2. Dentro del try");
  throw new Error("¡Error!");
  console.log("3. Esto NO se ejecuta");
} catch (error) {
  console.log("4. Dentro del catch");
} finally {
  console.log("5. Dentro del finally");
}

console.log("6. Fin");

// Salida:
// 1. Inicio
// 2. Dentro del try
// 4. Dentro del catch
// 5. Dentro del finally
// 6. Fin
```

#### 5.5.7.5. El objeto Error

Cuando ocurre un error, el objeto `error` contiene:

```javascript
try {
  noExiste.metodo();
} catch (error) {
  console.log(error.name);      // "ReferenceError"
  console.log(error.message);   // "noExiste is not defined"
  console.log(error.stack);     // Stack trace completo
}
```

Lanzar tus propios errores

Puedes crear errores personalizados con `throw`:

```javascript
function verificarEdad(edad) {
  try {
    if (edad < 0) {
      throw new Error("La edad no puede ser negativa");
    }
    if (edad < 18) {
      throw new Error("Debes ser mayor de edad");
    }
    console.log("Edad válida");
  } catch (error) {
    console.log("Error de validación:", error.message);
  }
}

verificarEdad(-5);  // Error de validación: La edad no puede ser negativa
verificarEdad(15);  // Error de validación: Debes ser mayor de edad
verificarEdad(25);  // Edad válida
```

#### 5.5.7.6. Cuándo usar try/catch

✅ **SÍ usar cuando:**

• Trabajas con JSON.parse()
• Haces operaciones con archivos o red
• Llamas APIs externas
• Usas código de terceros que puede fallar
• Quieres recuperarte de un error específico

❌ **NO usar cuando:**

• Puedes prevenir el error con una validación simple
• Es un error de programación que deberías corregir
• Estás ocultando bugs que deberías solucionar

#### 5.5.7.7. Resumen

• **`try`**: intenta ejecutar código que puede fallar
• **`catch`**: maneja el error si ocurre
• **`finally`**: se ejecuta siempre, con o sin error
• Te permite que tu programa continúe funcionando aunque ocurran errores
• Es fundamental para crear aplicaciones robustas y confiables

---

## 5.6. Miscellaneous Statements

### 5.6.1. with

La sentencia with ejecuta un bloque de código como si las propiedades de un objeto especificado fueran variables dentro del alcance (scope) de ese código.

### 5.6.2. debugger

Esta sentencia actúa como un punto de interrupción (breakpoint): la ejecución del código JavaScript se detiene, y puedes usar el depurador (debugger) para imprimir los valores de las variables, examinar la pila de llamadas (call stack), y más.

### 5.6.3. "use strict"

Esto significa que, si todo tu código JavaScript está escrito como **módulos**, entonces **todo será automáticamente estricto**, y **nunca necesitarás usar explícitamente** la directiva `"use strict"`.

Se recomienda ver la pagina 123 del libro para ver todas las restricciones de esta directiva.

## 5.7. Declaraciones

Las palabras clave **const, let, var, function, class, import y export** no son técnicamente **sentencias**, pero se parecen mucho a ellas, y este libro se refiere a ellas informalmente como sentencias, por lo que merecen una mención en este capítulo.

Por sí mismas no hacen mucho, pero al **proporcionar nombres para valores**, definen —en un sentido importante— **el significado de las demás sentencias** de tu programa.

De manera general, puedes pensar en las **declaraciones** como las partes del programa que se **procesan antes de que el código comience a ejecutarse**.

Las **declaraciones en JavaScript** se utilizan para **definir constantes, variables, funciones y clases**, así como para **importar y exportar valores entre módulos**.

### 5.7.1. const, let and var

Ver la sección 3.10. para información mas profunda.

### 5.7.2. function

Se recomienda ver el capitulo 8 que habla de funciones para ver sus declaraciones e invocaciones completas y también no olvidar las funciones generadoras function*.

### 5.7.3. class

Las clases son explicadas a profundidad en el capitulo 9.

### 5.7.4. import and export

Para información mas profunda ver el capitulo 10 que se dedica a profundidad a los módulos. Los valores dentro de un **módulo de JavaScript** son **privados** y **no pueden importarse en otros módulos** a menos que hayan sido **exportados explícitamente**.

### 5.7.5. tabla resumen statements

JavaScript Statement TABLE

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
