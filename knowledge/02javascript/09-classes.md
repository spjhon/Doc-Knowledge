---
sidebar_position: 11
---

# 9. Classes

- **“Favor composition over inheritance.”**

- **“Prefiere la composición sobre la herencia.”**

Esta frase significa que, cuando sea posible, es mejor **crear objetos combinando funcionalidades pequeñas** (composición), que construir largas cadenas de herencia donde los objetos dependen de clases padre y abuelas (herencia clásica).

JavaScript, aunque tiene `class`, **no usa herencia clásica como Java o C#**, sino **herencia prototipal**.

---

📌 **Clases en JavaScript**

En JavaScript, una clase es realmente **una función especial** cuyo prototipo contiene los métodos compartidos por todas sus instancias.

> Es decir:
> **una clase no es un objeto en sí**, sino una **plantilla** (blueprint) que especifica:
>
> - qué propiedades tiene una instancia
> - qué métodos hereda del prototipo

Cuando creas un objeto con `new`, ese objeto **hereda** de `MiClase.prototype`.

🧱 **¿Por qué usar una factory function o una clase?**

Ambas existen para resolver problemas comunes cuando creas objetos complejos. Tus puntos están muy bien — aquí están traducidos y pulidos:

---

1. **Encapsulación**

    Una factory function o clase encapsula la lógica de creación de objetos:

    - variables internas
    - métodos
    - validaciones
    - estados privados (closure o `#private`)

    Esto mantiene la lógica organizada y fácil de mantener.

2. **Reusabilidad**

    Cuando defines métodos en el prototipo (ya sea con `class` o con constructor+prototype), esos métodos:

    - se definen **solo una vez**
    - son **compartidos** por todas las instancias
    - reducen consumo de memoria

    Esto es automático con la sintaxis `class`.

3. **Interfaz Iterable**

    Si un objeto implementa:

    ```js
    *[Symbol.iterator]() { ... }
    ```

    Entonces funciona con:

    - `for...of`
    - `...spread`
    - `Array.from()`

    Esto vuelve al objeto *compatible* con el ecosistema moderno de JavaScript.

    Ejemplo:

    ```js
    [...range(1, 3)]   // → [1, 2, 3]
    ```

4. **Legibilidad y expresividad**

    Objetos bien diseñados permiten escribir código claro:

    ```js
    range(1, 3).includes(2)
    ```

    Mucho más limpio que hacer manualmente:

    ```js
    function inRange(n, low, high) { ... }
    ```

5. **Method Chaining (Fluent API)**

    Si devuelves `this` en tus métodos, puedes encadenar:

    ```js
    contador.inc().inc().reset().inc()
    ```

    Las clases y las factory functions permiten este estilo fluido.

6. **Expansibilidad**

    Si usas prototipos o clases, puedes agregar métodos sin romper nada:

    ```js
    Range.prototype.filter = function(f) { ... }
    ```

    O en factory functions puedes extender el objeto devuelto sin modificar la función original.

⚔️ **Constructor Functions vs Factory Functions**

**Constructor Functions (o `class` en ES6)**

Úsalas cuando:

- quieres herencia prototypal
- necesitas métodos compartidos y eficientes
- tu diseño es parecido a una clase tradicional
- quieres usar `instanceof`

Son ideales para objetos con muchas instancias y comportamiento común.

- **Factory Functions**

Úsalas cuando:

- quieres **privacidad real** con closures (algo que `class` no da sin `#private`)
- quieres evitar errores con `new`
- necesitas más flexibilidad
- quieres crear objetos configurable o dinámicos
- quieres composición en lugar de herencia

Son más seguras porque no dependen de `new`.

```js
function crearContador() {
  let count = 0; // privado

  return {
    inc() { count++; },
    get() { return count; }
  };
}
```

🧠 Diferencia fundamental (muy importante)

| Enfoque                 | Usa `new` | Tiene prototipo                  | Tiene `this`   | Tiene privacidad            |
| ----------------------- | --------- | -------------------------------- | -------------- | --------------------------- |
| **Constructor / Class** | ✔️ Sí     | ✔️ Sí                            | ✔️ Sí          | 🔸 Con `#private` solamente |
| **Factory Function**    | ❌ No      | ❌ No (a menos que tú lo asignes) | ❌ No necesario | ✔️ Con closure              |

🎯 En resumen final

**Una clase organiza el comportamiento compartido mediante prototipos.**

**Una factory function organiza lógica flexible y privada con closures.**

Ambas existen porque **no resuelven el mismo problema**:

- **Clase → eficiencia, herencia, métodos compartidos.**
- **Factory → composición, privacidad, flexibilidad.**

Y la regla clásica sigue siendo válida:

🔥 **“Prefiere composición sobre herencia.”**

Porque la composición evita acoplamiento fuerte, herencia profunda y diseños rígidos.

## 9.1. Classes and Prototypes

✅ **`class` en JavaScript NO crea clases reales (como en Java o C#).**

Lo que hace es:

> **Un "azúcar sintáctico" sobre el sistema de herencia prototipal.**

Debajo del capó, `class` usa:

✔ `prototype` para los métodos

✔ funciones constructoras

✔ y **equivalentes a `Object.create()`** para encadenar prototipos

🔍 **Desglose técnico real**

Cuando escribes:

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log("Hola, soy " + this.nombre);
  }
}
```

JavaScript **traduce internamente** esto a:

```js
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.hablar = function() {
  console.log("Hola, soy " + this.nombre);
};
```

Es decir:

- El `constructor` se vuelve una **function Persona()**.
- Cada método de la clase va a **Persona.prototype**.
- Cada instancia creada con `new Persona()` hereda de **Persona.prototype**.
- La clase realmente NO es una clase verdadera, sino una **función con un prototipo**.

🧩 **¿Y qué pasa con la herencia entre clases?**

Cuando haces:

```js
class Estudiante extends Persona {
  estudiar() { }
}
```

JavaScript hace internamente algo equivalente a:

```js
function Estudiante(...) { ... }

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;
```

O sea:

- **`extends` usa `Object.create()` internamente**
- para crear la cadena de prototipos:

```md
estudianteInstancia → Estudiante.prototype → Persona.prototype → Object.prototype
```

🧠 **Entonces tu frase es totalmente correcta:**

> **“class en JavaScript utiliza debajo del capó `Object.create` y `prototype` para asignar métodos y construir herencias.”**

Sí. Eso es justo el mecanismo de JS.

## 9.2. Classes and Constructors

- Un **constructor** es una función diseñada para la **inicialización** de objetos recién creados.
- La característica crítica de las invocaciones de constructores es que la propiedad **`prototype`** del constructor se utiliza como el **prototipo** del nuevo objeto.
- Objetos función que tienen una propiedad **`prototype`**.
- Los **constructores** llevan el nombre con la primera letra en **mayúscula**. (Esta es una convención, no una regla estricta de JS).
- Gracias a **`new.target`** se puede saber si una invocación es un constructor o no.

### 9.2.1. Constructors, Class Identity, and instanceof

Una forma de saber si una instancia es una instancia prototipada, utilizar isInstanceOf():

```js
range.methods.isPrototypeOf(r); // range.methods is the prototype object.
```

### 9.2.2. The constructor Property

La siguiente es una forma de demostrar como la propiedad constructor de una funcion es lo mismo que el prototipo que las funciones poseen:

```js
let F = function() {}; // This is a function object.
let p = F.prototype; // This is the prototype object associated with F.
let c = p.constructor; // This is the function associated with the prototype.
c === F
```

Esto es ejemplos y demostraciones de como se utilizan ciertas técnicas en javascript para simular clases y su relación con el prototype y como constructor se utiliza hoy en dia.

## 9.3. Classes with the class Keyword

Ahora si vamos a ver como se utiliza la palabra class en javascript moderno.

En el libro se muestra el ejemplo del Range en forma de class como tal con la sintaxys moderna y que utiliza la palabra constructor y por supuesto la utilización del "this".

```js
class Range {
constructor(from, to) {
// Store the start and end points (state) of this new range object.
// These are noninherited properties that are unique to this object.
this.from = from;
this.to = to;
}
// Return true if x is in the range, false otherwise
// This method works for textual and Date ranges as well as numeric.
includes(x) { return this.from <= x && x <= this.to; }
// A generator function that makes instances of the class iterable.
// Note that it only works for numeric ranges.
*[Symbol.iterator]() {
for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
}
// Return a string representation of the range
toString() { return `(${this.from}...${this.to})`; }
}
```

y se utilizaría asi:

```js
/ Here are example uses of this new Range class
let r = new Range(1,3); // Create a Range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to an array via iterator
```

También se explica en esta sección el **super**.

- El **super** es para referirse a la clase padre y que los argumentos que se le asignen a super son los argumentos que le van a entrar a la clase constructora padre (mayor explicación en la sección de subclases)

algo para tener en cuenta:

Esto:

```js
let Square = class { constructor(x) { this.area = x * x; } };
new Square(3).area // => 9
```

Es lo mismo que esto:

```js
let Square = class {
  constructor(x) {
    this.x = x;
  }

  area() {
    return this.x * this.x;
  }
};

//y usarlo asi:

new Square(3).area(); // 9
```

### 9.3.1. Static Methods

Los **métodos estáticos** son útiles para funciones que:

- Realizan operaciones que no requieren datos de una instancia de la clase.
- Son funciones de utilidad relacionadas con la clase.

Por ejemplo, si tienes una clase que maneja varias operaciones con cadenas (*string operations*), podrías tener algunos métodos que pueden operar directamente sobre las cadenas sin necesidad de datos específicos de la instancia.

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

### 9.3.2. Getters, Setters, and other Method Forms

Dentro del cuerpo de una clase, puedes definir métodos **`getter`** y **`setter`** (sección §6.10.6) tal como puedes hacerlo en **literales de objeto**.

Los **`getter`** y **`setter`** (métodos accesores) son funciones especiales que permiten acceder y modificar propiedades de un objeto como si fueran propiedades normales, pero añadiendo lógica de programación en el proceso.

El objetivo principal es lograr el **encapsulamiento**, controlando cómo se leen y escriben los datos internos de la clase.

🔑 1. Getter (Obtener)

El `getter` es un método diseñado para **leer o devolver** el valor de una propiedad.

- **Palabra clave:** `get`.
- **Acción:** Se invoca automáticamente cuando intentas **leer** la propiedad.
- **Función:** A menudo se utiliza para realizar cálculos o formatear datos antes de devolver el resultado.

Ejemplo de Acceso

Si tienes un *getter* llamado `nombreCompleto`, lo accedes **sin paréntesis**:

```javascript
let persona = new Persona();
console.log(persona.nombreCompleto); // Llama al método get nombreCompleto()
```

✏️ 2. Setter (Establecer)

El `setter` es un método diseñado para **establecer o modificar** el valor de una propiedad.

- **Palabra clave:** `set`.
- **Acción:** Se invoca automáticamente cuando intentas **asignar** un valor a la propiedad.
- **Función:** Es ideal para **validar** el nuevo valor antes de que se almacene, asegurando que el objeto mantenga un estado válido.

Ejemplo de Acceso

Si tienes un *setter* llamado `edad`, lo asignas **como si fuera una propiedad**:

```javascript
let persona = new Persona();
persona.edad = 30; // Llama al método set edad(valor)
```

### 9.3.3. Public, Private, and Static Fields

Si deseas definir un **campo** (que es simplemente un sinónimo orientado a objetos de "propiedad") en una instancia de clase, debes hacerlo en la **función constructora** o en uno de los métodos.

- Hasta 2020, esta sintaxis no era muy compatible con los navegadores.
- **REACT** utiliza el siguiente tipo de sintaxis para definir campos (*fields*) en JavaScript:

Supón que estás escribiendo una clase como esta, con un constructor que inicializa tres campos:

### Sintaxis Tradicional (En el Constructor)

```javascript
class Buffer {
  constructor() {
    this.size = 0;
    this.capacity = 4096;
    this.buffer = new Uint8Array(this.capacity);
  }
}
```

Con la **nueva sintaxis de campos de instancia** (que probablemente sea estandarizada), podrías escribir en su lugar:

### Nueva Sintaxis de Campos de Instancia (ES Next)

```javascript
class Buffer {
  size = 0;
  capacity = 4096;
  buffer = new Uint8Array(this.capacity);
}
```
