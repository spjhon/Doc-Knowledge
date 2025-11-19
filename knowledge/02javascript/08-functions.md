---
sidebar_position: 9
---

# 8. Functions

Una **función** es un **bloque de código JavaScript** que se **define una vez** pero puede ser **ejecutado, o invocado, cualquier número de veces**.

- Si una función es asignada a una propiedad de un objeto, se conoce como un **método de ese objeto**.

## 8.1. Defining Functions

### 8.1.1. Function Declarations

```javascript
   function add(a, b) {
     return a + b;
   }
```

Una de las cosas importantes a entender sobre las **declaraciones de función** es que el **nombre de la función se convierte en una variable** cuyo valor es la función misma.

Si la **sentencia return** no tiene una expresión asociada, el **valor de retorno de la función es undefined**.

### 8.1.2. Function Expressions

```javascript
const add = function (a, b) {
    return a + b;
};
```

El **nombre de la función es opcional** para las funciones definidas como expresiones, y la mayoría de las expresiones de función anteriores que hemos mostrado lo omiten.

Es una **buena práctica usar const con expresiones de función** para que no sobrescribas accidentalmente tus funciones al asignar nuevos valores.

Existe una **diferencia importante** entre definir una función `f()` con una **declaración de función** y asignar una función a la variable `f` después de crearla como una **expresión**. Cuando usas la forma de declaración, los **objetos de función son creados antes de que el código que los contiene comience a ejecutarse**, y las definiciones son **elevadas (hoisted)** de modo que puedes llamar estas funciones desde código que aparece arriba de la sentencia de definición. Sin embargo, esto **no es cierto para funciones definidas como expresiones**: estas funciones **no existen hasta que la expresión que las define sea realmente evaluada**.

Las **funciones definidas con expresiones no pueden ser invocadas antes de que sean definidas**.

### 8.1.3. Arrow Functions

```javascript
const add = (a, b) => {
    return a + b;
};
```

**Útil cuando se pasa una función como argumento a otra función.**

**Cuidado** ya que el **`this` en este tipo de funciones es diferente**.

**No tienen descendencia prototype.**

### 8.1.4. Nested Functions

En JavaScript, las **funciones pueden ser anidadas dentro de otras funciones**. Por ejemplo:

```javascript
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}
```

Lo interesante sobre las **funciones anidadas** son sus **reglas de alcance de variables**: pueden **acceder a los parámetros y variables de la función (o funciones) dentro de las cuales están anidadas**. En el código mostrado aquí, por ejemplo, la función interna `square()` puede leer y escribir los parámetros `a` y `b` definidos por la función externa `hypotenuse()`. Estas **reglas de alcance para funciones anidadas son muy importantes**, y las consideraremos nuevamente en §8.6.

### 8.1.5. **Method Definition (within an object)**

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
};
```

JavaScript también **soporta propiedades de acceso**, las cuales **no tienen un único valor** sino que en su lugar tienen **uno o dos métodos de acceso**: un **getter y/o un setter**.

### 8.1.6. **Constructor Function**

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   ```

### 8.1.7. **Generator Function**

   ```javascript
   function* generateSequence(start, end) {
     for (let i = start; i <= end; i++) {
       yield i;
     }
   }
   ```

### 8.1.8. **Function Expression with Named Function**

   ```javascript
   const add = function addNumbers(a, b) {
     return a + b;
   };
   ```

### 8.1.9. **Immediately Invoked Function Expression (IIFE)**

```javascript
(function (a, b) {
    console.log(a + b);
})(5, 10);
```

- Arrow Function IIFE

    ```javascript
    ((a, b) => {
    console.log(a + b);
    })(5, 10);
    ```

### 8.1.10. **Class Method**

   ```javascript
   class Calculator {
     add(a, b) {
       return a + b;
     }
   }
   ```

también tenemos los constructores de clase

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
}

const juan = new Persona("Juan", 25);
juan.saludar();
```

### 8.1.11. **Static Method in a Class**

```javascript
class Calculator {
    static add(a, b) {
    return a + b;
    }
}
```

### 8.1.12. **Async Function**

```javascript
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
```

### 8.1.13. **Async Arrow Function**

```javascript
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
```

### 8.1.14. **Async Method (within an object)**

```javascript
const api = {
    async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    },
};
```

### 8.1.15. **Async Generator Function**

```javascript
async function* asyncGenerator(start, end) {
    for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
    }
}
```

### 8.1.16. **Recursion**

```javascript
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    // Base case: If x is 1 or less, the factorial is 1
    if (x <= 1) return 1;

    // Recursive case: Multiply x by the factorial of (x-1)
    return x * factorial(x - 1);
}
```

### 8.1.17. **factory functions**

```javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
}

const person1 = createPerson("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

const person2 = createPerson("Bob", 25);
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

## 8.2. Invoking Functions

El código JavaScript que conforma el cuerpo de una función no se ejecuta cuando se define la función, sino cuando se la invoca. Las funciones de JavaScript se pueden invocar de cinco maneras:

• Como funciones
• Como métodos
• Como constructores
• Indirectamente mediante sus métodos `call()` y `apply()`.

### 8.2.1. Function Invocation

```javascript
   function add(a, b) {
     return a + b;
   }
   add(5, 10); // 15
```

- Se puede utilizar condicionales en la invocación de la función.
- Si la función no tiene return se ejecuta todos los statements de la función y retorna undefined.
- Normalmente no se utiliza el this en funciones normales, mas que todo en funciones que son métodos.

### 8.2.2. Method Invocation

Un **método** no es nada más que una **función de JavaScript que está almacenada en una propiedad de un objeto**.

```javascript
   const calculator = {
     add(a, b) {
       return a + b;
     },
   };
   calculator.add(5, 10); // 15
```

Sin embargo, las **invocaciones de métodos** difieren de las **invocaciones de funciones** en una forma importante: el **contexto de invocación**, osea el THIS.

```javascript
let calculator = { // An object literal
operand1: 1,
operand2: 1,
add() { // We're using method shorthand syntax for this function
// Note the use of the this keyword to refer to the containing object.
this.result = this.operand1 + this.operand2;
}
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result // => 2
```

### 8.2.3. Constructor Invocation

Si una invocación de función o método es **precedida por la palabra clave `new`**, entonces es una **invocación de constructor**.

Las **invocaciones de constructor** difieren de las invocaciones regulares de funciones y métodos en su **manejo de argumentos**, **contexto de invocación** y **valor de retorno**.

Las **funciones constructoras** están **destinadas a inicializar objetos**.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Alice", 30);
```

### 8.2.4. Indirect Invocation

Las **funciones de JavaScript son objetos**, y como todos los objetos de JavaScript, tienen métodos. Dos de estos métodos, `call()` y `apply()`, **invocan la función indirectamente**. Ambos métodos te permiten **especificar explícitamente el valor de `this`** para la invocación, lo que significa que **puedes invocar cualquier función como un método de cualquier objeto**, incluso si no es realmente un método de ese objeto.

La información completa se encuentra en el **8.7.4. The call() and apply() Methods**.

### 8.2.5. Implicit Function Invocation

Existen varias **características del lenguaje JavaScript** que no parecen invocaciones de función pero que **causan que las funciones sean invocadas**. Ten **especial cuidado al escribir funciones que puedan ser invocadas implícitamente**, porque los errores, efectos secundarios y problemas de rendimiento en estas funciones son **más difíciles de diagnosticar y corregir** que en funciones regulares por la simple razón de que puede no ser obvio a partir de una inspección simple de tu código cuándo están siendo llamadas.

Las **características del lenguaje que pueden causar invocación implícita de funciones** incluyen:

• Si un objeto tiene **getters o setters definidos**, entonces consultar o establecer el valor de sus propiedades puede invocar esos métodos. Ver §6.10.6 para más información.

• Cuando un objeto se usa en un **contexto de string** (como cuando se concatena con un string), su **método `toString()` es llamado**. De manera similar, cuando un objeto se usa en un **contexto numérico**, su **método `valueOf()` es invocado**. Ver §3.9.3 para detalles.

• Cuando haces un **loop sobre los elementos de un objeto iterable**, ocurren un número de llamadas a métodos. El Capítulo 12 explica cómo funcionan los iteradores a nivel de llamada de función y demuestra cómo escribir estos métodos para que puedas definir tus propios tipos iterables.

• Un **tagged template literal es una invocación de función disfrazada**. §14.5 demuestra cómo escribir funciones que pueden ser usadas en conjunto con strings de template literal.

• Los **objetos Proxy** (descritos en §14.7) tienen su comportamiento completamente controlado por funciones. Casi cualquier operación en uno de estos objetos causará que una función sea invocada.

### 8.2.6. Otras formas de invocar

#### 8.2.6.1. **Immediately Invoked Function Expression (IIFE)**

```javascript
(function (a, b) {
    console.log(a + b);
})(5, 10); // 15

// Arrow Function IIFE
((a, b) => {
    console.log(a + b);
})(5, 10); // 15
```

#### 8.2.6.2. **Event Listener**

```javascript
function handleClick(event) {
    console.log("Button clicked!", event);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);
```

#### 8.2.6.3. **Timeout and Interval**

```javascript
function sayHello() {
    console.log("Hello!");
}

// Timeout
setTimeout(sayHello, 1000); // 'Hello!' after 1 second

// Interval
setInterval(sayHello, 1000); // 'Hello!' every 1 second
```

#### 8.2.6.4. **Promise `then` Method**

```javascript
function fetchData() {
    return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
    });
}

fetchData().then((data) => {
    console.log(data); // 'Data received' after 1 second
});
```

#### 8.2.6.5.  **Array Methods (e.g., `forEach`, `map`, `filter`)**

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((number) => {
    console.log(number);
});

// map
const doubled = numbers.map((number) => number * 2);

// filter
const evens = numbers.filter((number) => number % 2 === 0);
```

#### 8.2.6.6. **Event Handler Property**

```javascript
function handleClick(event) {
    console.log("Button clicked!", event);
}
const button = document.querySelector("button");
button.onclick = handleClick;
```

#### 8.2.6.6. **Using Function as a Callback**

```javascript
function doSomething(callback) {
    callback("Callback invoked");
}

function logMessage(message) {
    console.log(message);
}

doSomething(logMessage); // 'Callback invoked'
```

#### 8.2.6.7. **Recursion**

```javascript
function countdown(n) {
    if (n <= 0) {
    console.log("Done!");
    } else {
    console.log(n);
    countdown(n - 1);
    }
}
countdown(5); // 5, 4, 3, 2, 1, Done!
```

#### 8.2.6.8. **Using Function with Spread Operator**

```javascript
function sum(a, b, c) {
    return a + b + c;
}
const args = [1, 2, 3];
sum(...args); // 6
```

#### 8.2.6.9. Usando Call(), bind() y apply()

Ver su secciones respectivas mas adelante en esta documentación.

### 8.2.3. the THIS object

Los **argumentos y el valor de retorno** de una invocación de método se manejan exactamente como se describe para la invocación de función regular. Sin embargo, las **invocaciones de método difieren de las invocaciones de función** en una forma importante: el **contexto de invocación**.

Las **expresiones de acceso a propiedades** consisten en dos partes: un **objeto** (en este caso `o`) y un **nombre de propiedad** (`m`). En una expresión de invocación de método como esta, el objeto `o` **se convierte en el contexto de invocación**, y el cuerpo de la función puede referirse a ese objeto usando la **palabra clave `this`**.

La **palabra clave `this`** se usa dentro de funciones constructoras o métodos para **referirse a la instancia actual del objeto** que está siendo creado u operado. Cuando una función constructora es invocada con la **palabra clave `new`**, se crea un nuevo objeto, y **`this` se refiere a ese objeto recién creado** dentro del alcance de la función constructora. Esto te permite inicializar propiedades y métodos para esa instancia específica del objeto.

La **palabra clave `this` en JavaScript puede ser un poco difícil de entender**, pero una vez que la comprendes, se convierte en una **herramienta poderosa para trabajar con objetos y funciones**.

1. **Sensibilidad al Contexto**: El valor de `this` es **determinado por cómo se llama una función**. Se refiere al objeto del cual la función es un método o al objeto sobre el cual la función es llamada.

2. **Contexto Global**: Si una función es llamada en el **alcance global** (es decir, no como un método de un objeto), `this` se refiere al **objeto global**, que es `window` en un entorno de navegador y `global` en Node.js.

3. **Invocación de Método**: Cuando una función es llamada como un **método de un objeto**, `this` se refiere a ese objeto.

    ```javascript
    const obj = {
        name: "John",
        greet() {
        console.log(`Hello, ${this.name}!`);
        },
    };
    obj.greet(); // Salida: Hello, John!
    ```

4. **Invocación de Constructor**: Cuando una función es usada como una **función constructora con la palabra clave `new`**, `this` se refiere al **objeto recién creado**.

    ```javascript
    function Person(name) {
        this.name = name;
    }
    const john = new Person("John");
    console.log(john.name); // Salida: John
    ```

5. **Vinculación Explícita**: Puedes **especificar explícitamente el valor de `this`** usando métodos como `call()`, `apply()`, o `bind()`.

    ```javascript
    function greet() {
        console.log(`Hello, ${this.name}!`);
    }
    const obj1 = { name: "Alice" };
    const obj2 = { name: "Bob" };
    greet.call(obj1); // Salida: Hello, Alice!
    greet.apply(obj2); // Salida: Hello, Bob!
    const greetBob = greet.bind(obj2);
    greetBob(); // Salida: Hello, Bob!
    ```

6. **Funciones Flecha**: Las **funciones flecha no tienen su propio `this`**. Vinculan léxicamente `this` al valor de `this` en el **contexto léxico circundante**.

    ```javascript
    const obj = {
        name: "Jane",
        greet: () => {
        console.log(`Hello, ${this.name}!`);
        },
    };
    obj.greet(); // Salida: Hello, undefined!
    ```

Entender el **contexto en el cual `this` es usado** es **crucial para escribir código JavaScript efectivo**, especialmente cuando se trabaja con **programación orientada a objetos** y **entornos basados en eventos**.

## 8.3. Function Arguments and Parameters

Las **definiciones de función de JavaScript no especifican un tipo esperado** para los parámetros de la función, y las **invocaciones de función no realizan ninguna verificación de tipo** en los valores de argumento que pasas. De hecho, las **invocaciones de función de JavaScript ni siquiera verifican el número de argumentos** que están siendo pasados.

### 8.3.1. Optional Parameters and Defaults

- Si hay menos argumentos que parámetros, estos parámetros evalúan a undefined al menos que se especifique un valor por default

- Rest Parameters and Variable-Length Argument Lists

- Esto es lo contrario, cuando hay mas argumentos que parámetros

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

### 8.3.2. Rest Parameters and Variable-Length Argument Lists

Nos permiten escribir funciones que pueden ser invocadas con arbitrariamente más argumentos que parámetros.

```javascript
function miFuncion(...muchosArgumentos) {
  console.log(muchosArgumentos);
}

miFuncion("a", "b", "c", "d"); 
// Salida: ["a", "b", "c", "d"]
```

**Nota clave:** A diferencia del antiguo objeto arguments, los parámetros Rest crean una instancia real de Array, lo que significa que puedes usar métodos como .map(), .sort(), .filter() y .reduce() directamente sobre ellos.

### 8.3.3. The Arguments Object

Antes de ES6 se utilizaba el arguments pero tiene falencias entonces es mejor el ...rest.

### 8.3.4. The Spread Operator for Function Calls

El operador de propagación (spread operator) `...` se utiliza para desempaquetar, o "expandir", los elementos de un array (o cualquier otro objeto iterable, como cadenas de texto) en un contexto donde se esperan valores individuales. Hemos visto el operador de propagación utilizado con literales de array en la sección §7.1.2. El operador se puede utilizar, de la misma manera, en invocaciones de funciones:

```javascript
let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers) // => -1
```

Ten en cuenta que `...` no es un verdadero operador en el sentido de que no puede ser evaluado para producir un valor. En cambio, es una sintaxis especial de JavaScript que se puede utilizar en literales de array e invocaciones de funciones.

Cuando utilizamos la misma sintaxis `...` en una **definición de función** en lugar de una **invocación de función**, tiene el efecto opuesto al operador de propagación.

### 8.3.5. Destructuring Function Arguments into Parameters

Ejemplo:

```javascript
function vectorAdd(v1, v2) {
return [v1[0] + v2[0], v1[1] + v2[1]];
}
vectorAdd([1,2], [3,4]) // => [4,6]
```

Con la destructuración seria asi:

```javascript
function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
return [x1 + x2, y1 + y2];
}
vectorAdd([1,2], [3,4]) // => [4,6]
```

Entonces se puede apreciar que el argumento v1 se puede convertir en x1 y y1.

### 8.3.6. Argument Types

- Argument Types: JavaScript method parameters have no declared types **USE TYPESCRIPT**

## 8.4. Functions as Values

Sin embargo, en JavaScript, las funciones no son solo sintaxis, sino también valores, lo que significa que pueden asignarse a variables, almacenarse en las propiedades de objetos o en los elementos de arrays, pasarse como argumentos a funciones, y así sucesivamente.

### 8.4.1. Defining Your Own Function Properties

Las funciones no son un tipo primitivo en javascript, mas si son objects especializados, lo que quiere decir que una función puede tener propiedades.

```javascript
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
return uniqueInteger.counter++; // Return and increment counter property
}
uniqueInteger() // => 0
uniqueInteger() // => 1
```

## 8.5. Functions as Namespaces

Las variables declaradas dentro de una función no son visibles fuera de ella. Por esta razón, a veces resulta útil definir una función simplemente para que actúe como un **espacio de nombres temporal** (*temporary namespace*), en el que puedas definir variables sin saturar el espacio de nombres global.

```javascript
function chunkNamespace() {
// Chunk of code goes here
// Any variables defined in the chunk are local to this function
// instead of cluttering up the global namespace.
}
chunkNamespace(); // But don't forget to invoke the function!
```

## 8.6. Closures

Los closures es una forma de aprovechar el scope que maneja las funciones para esconder código (mas que todo variables) dentro del ambiente encerrado que produce una función y que desde afuera no se puede leer, en el siguiente ejemplo se puede apreciar como la variables scope (la que esta dentro de la función, la local scope), puede llegar hasta el ámbito global por medio de la invocación de funciones que tienen acceso a esta variable internamente.

```javascript
let scope = "global scope"; // A global variable
function checkscope() {let scope = "local scope"; // A local variable
function f() { return scope; } // Return the value in scope here
return f();
}
checkscope() // => "local scope"
```

Hasta **ahí** bien, ahora observemos el siguiente ejemplo:

```javascript
let scope = "global scope"; // A global variable
function checkscope() {
let scope = "local scope"; // A local variable
function f() { return scope; } // Return the value in scope here
return f;
}
let s = checkscope()(); // What does this return?
```

A primera vista, uno **podría** decir que la variable `s` **devolvería** **"global scope"**, ya que al ejecutar `checkscope()`, la variable `s` se **convertiría** en `s = f() { return scope; }`. Y como `scope` **está** fuera de la función `checkscope` al momento de la invocación final, entonces la función **utilizaría** la variable `scope` global.

**¡PERO\!** Debemos recordar la regla fundamental del **ámbito léxico** (*lexical scoping*): **Las funciones de JavaScript se ejecutan usando el ámbito en el que fueron definidas.**

Entonces, como la función interna `f` se **definió** dentro de `checkscope` (que tiene acceso a la variable **local** `"local scope"`), **esa función conserva ese acceso** a la variable local de `checkscope` a través de un **cierre** (*closure*), sin importar desde dónde se la invoque después. Por lo tanto, `s` **devolverá "local scope"**.

Ahora observemos el siguiente codigo:

```javascript
let uniqueInteger = (function() { // Define and invoke
let counter = 0; // Private state of function below
return function() { return counter++; };
}());
uniqueInteger() // => 0
uniqueInteger() // => 1
```

Ese código es equivalente a este:

```javascript
let uniqueIntegerFactory = function() {
  let counter = 0;
  return function() { return counter++; };
};

let uniqueInteger = uniqueIntegerFactory();

console.log(uniqueInteger()); // 0
console.log(uniqueInteger()); // 1
```

OJO, que intenté con este codigo y me equivoque horriblemente:

```javascript
let uniqueInteger = function() { // Define and invoke
let counter = 0; // Private state of function below
return function() { return counter++; };
};
console.log(uniqueInteger()()) // => 0
console.log(uniqueInteger()()) // => 1
```

El error de este código es que en cada console log se crea un closure por cada console log, mientras que en los ejemplos de arriba si es un solo closure y luego las invocaciones extra.

Vale la pena señalar aquí que puedes combinar esta **técnica de cierre (closure)** con los **métodos accesores (getters y setters)** de las propiedades. Este es un concepto clave para lograr la **encapsulación** en JavaScript.

Un closure ocurre cuando una función interna recuerda y puede acceder a las variables del entorno donde fue creada, incluso después de que ese entorno ya no existe.
