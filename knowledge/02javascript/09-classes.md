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

Sintaxis Tradicional (En el Constructor)

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

Nueva Sintaxis de Campos de Instancia (ES Next)

```javascript
class Buffer {
  size = 0;
  capacity = 4096;
  buffer = new Uint8Array(this.capacity);
}
```

Un field privado se utiliza el #, por ejemplo:

```javascript
class Buffer {
#size = 0;
get size() { return this.#size; }
}
```

Por ejemplo aquí si no queremos que se pueda modificar el size, se utiliza el #.

#### 9.3.3.1. Public fields (propiedades públicas)

Los *public fields* son propiedades que se definen **afuera del constructor**, directamente en la clase.

```js
class Persona {
  nombre = "Desconocido"; // Public field

  constructor(nombre) {
    this.nombre = nombre;
  }
}

const p = new Persona("Juan");
console.log(p.nombre); // "Juan"
```

**Características:**

- Son **propiedades del objeto** (cada instancia tiene una copia).
- Son **públicas** → accesibles desde fuera.
- Son equivalentes a usar `this.nombre` en el constructor, pero más limpias.

#### 9.3.3.2. Private fields (propiedades privadas): `#nombre`

Los *private fields* usan un **#** delante del nombre:

```js
class Contador {
  #valor = 0; // Private field

  incrementar() {
    this.#valor++;
  }

  get valor() {
    return this.#valor;
  }
}

const c = new Contador();
c.incrementar();
console.log(c.valor); // 1

c.#valor; // ❌ ERROR: no es accesible desde fuera
```

**Características:**

- Son **completamente privados** (ni siquiera se pueden leer accidentalmente).
- Solo se pueden usar **dentro de la clase** donde están definidos.
- No son enumerables ni aparecen en `Object.keys()`.

Son como "variables privadas" de OOP real.

#### 9.3.3.3. Static fields y static methods

Los miembros **static** pertenecen a la clase en sí, NO a las instancias.

**Static method:**

```js
class Utilidades {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Utilidades.sumar(2, 3)); // 5
```

✔ Solo se puede llamar así: `Utilidades.sumar()`
✖ No funciona desde instancias: `new Utilidades().sumar()` → error

**Static fields:**

```js
class Contador {
  static total = 0;

  constructor() {
    Contador.total++;  // se incrementa sin crear instancia
  }
}

new Contador();
new Contador();

console.log(Contador.total); // 2
```

✔ Es como una "variable global" del sistema, pero asociada a la clase
✔ Muy útil para contadores, caches, etc.

#### 9.3.3.4. 🧪 **Combinando todo en un solo ejemplo**

```js
class Banco {
  // Static field (global entre todas las cuentas)
  static totalCuentas = 0;

  // Public field
  banco = "MiBanco";

  // Private field
  #saldo = 0;

  constructor(nombre) {
    this.nombre = nombre;
    Banco.totalCuentas++;
  }

  // Método público
  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  // Getter público
  get saldo() {
    return this.#saldo;
  }

  // Método estático
  static cuentasTotales() {
    return Banco.totalCuentas;
  }
}

const c1 = new Banco("Juan");
c1.depositar(100);

console.log(c1.saldo); // 100
console.log(Banco.totalCuentas); // 1
console.log(Banco.cuentasTotales()); // 1

c1.#saldo; // ❌ ERROR
```

🎯 **Resumen rápido**

| Tipo          | Sintaxis                | Acceso  | Nivel         | Se guarda en       |
| ------------- | ----------------------- | ------- | ------------- | ------------------ |
| Public field  | `nombre = valor`        | público | por instancia | el objeto          |
| Private field | `#nombre = valor`       | privado | por instancia | el objeto (oculto) |
| Static field  | `static nombre = valor` | público | por clase     | la función-clase   |
| Static method | `static método() {}`    | público | por clase     | la función-clase   |

### 9.3.4. Getters y Setters

Son *propiedades especiales* de un objeto/clase que **parecen propiedades**, pero en realidad son **funciones que se ejecutan automáticamente** cuando lees o escribes esa propiedad.

📌 **Getter** → se ejecuta cuando *lees* una propiedad
📌 **Setter** → se ejecuta cuando *asignas* una propiedad

#### 9.3.4.1. **1. Getters y setters básicos en una clase**

```js
class Persona {
  constructor(nombre) {
    this._nombre = nombre; // propiedad "interna"
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevo) {
    this._nombre = nuevo.trim();
  }
}

const p = new Persona(" Juan ");
console.log(p.nombre);   // Getter → "Juan"
p.nombre = "  Carlos ";  // Setter → limpia espacios
console.log(p.nombre);   // "Carlos"
```

Observa algo importante:

❗ NO llamas al getter como función

No haces: `p.nombre()`
Haces: `p.nombre` (parece propiedad pero ejecuta función)

#### 9.3.4.2. **2. Getters y setters con campos privados (`#`)**

Mucho más seguro:

```js
class Cuenta {
  #saldo = 0;

  get saldo() {
    return this.#saldo;
  }

  set saldo(cantidad) {
    if (cantidad < 0) throw new Error("Saldo inválido");
    this.#saldo = cantidad;
  }
}

const c = new Cuenta();
c.saldo = 100;
console.log(c.saldo); // 100

c.#saldo; // ❌ ERROR: propiedad privada
```

Esto es muy común:

- campo privado
- getter/setter públicos para controlar el acceso

#### 9.3.4.3. **3. Getters sin setter (propiedad de solo lectura)**

```js
class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  get area() {
    return this.base * this.altura; // cálculo dinámico
  }
}

const r = new Rectangulo(3, 5);
console.log(r.area); // 15
r.area = 20;         // ❌ no tiene setter → no hace nada o error en strict mode
```

Este patrón es común para propiedades computadas.

#### 9.3.4.4. **4. Setter sin getter (propiedad de solo escritura)**

No es muy común, pero existe:

```js
class Logger {
  set mensaje(texto) {
    console.log("LOG:", texto);
  }
}

const log = new Logger();
log.mensaje = "Hola"; // imprime LOG: Hola
```

#### 9.3.4.5. **5. Getters y setters estáticos (`static`)**

Sí, también existen en la clase, NO en las instancias:

```js
class Config {
  static #modo = "producción";

  static get modo() {
    return this.#modo;
  }

  static set modo(nuevo) {
    this.#modo = nuevo;
  }
}

console.log(Config.modo); // "producción"
Config.modo = "desarrollo";
console.log(Config.modo); // "desarrollo"
```

## 9.4. Adding Methods to Existing Classes

Se utiliza una forma de explotación del prototype que es dinámico (osea que se pueden cambiar los métodos y las propiedades a las clases que lo permitan) de forma que se le puede añadir funcionalidades extra a código viejo de javascript.

## 9.5. Subclasses

Una clase puede tener subclases que hereden métodos de la clase principal y también se pueden sobre escribir métodos en la subclase que se encuentran en la clase principal.

### 9.5.1. Subclasses and Prototypes

🏛️ **1. La idea general**

Para crear herencia con funciones constructoras necesitas 3 pasos:

1. **Crear la función constructora padre**
2. **Crear la función constructora hija**
3. **Enlazar los prototipos**
4. **Arreglar el `constructor` del hijo**

Vamos paso a paso.

🔶 **2. Clase base usando constructor y prototype**

```js
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hablar = function () {
  console.log(this.nombre + " hace un sonido.");
};
```

✔ `Animal` es la clase base
✔ Las instancias tienen propiedad `nombre`
✔ El método `hablar` está en el prototype

🔷 **3. Crear la subclase con herencia**

Queremos una subclase llamada `Perro` que herede de `Animal`.

Primero, la constructor function de la subclase:

```js
function Perro(nombre, raza) {
  Animal.call(this, nombre); // Llamamos al constructor padre
  this.raza = raza;
}
```

⚠ Aquí aparece la primera parte importante:

✔ `Animal.call(this, nombre)`

permite que el constructor `Animal` inicialice *este* objeto hijo.

🧰 **4. Herencia del prototype (parte crítica)**

Ahora hacemos que `Perro.prototype` herede del prototype de Animal:

```js
Perro.prototype = Object.create(Animal.prototype);
```

Esto crea una *cadena de prototipos* así:

```js
perro → Perro.prototype → Animal.prototype → Object.prototype
```

Luego, arreglamos el constructor:

```js
Perro.prototype.constructor = Perro;
```

Si no haces esto, el constructor quedaría apuntando a `Animal`.

🐶 **5. Agregar métodos propios de la subclase**

```js
Perro.prototype.ladrar = function () {
  console.log(this.nombre + " dice: ¡guau!");
};
```

🧪 **6. Probar la subclase**

```js
const firulais = new Perro("Firulais", "Labrador");

firulais.hablar(); // Firulais hace un sonido.  ← herencia del padre
firulais.ladrar(); // Firulais dice: ¡guau!    ← método propio
```

Todo funciona como con clases modernas.

🧱 **Código completo**

```js
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hablar = function () {
  console.log(this.nombre + " hace un sonido.");
};

function Perro(nombre, raza) {
  Animal.call(this, nombre); // heredar propiedades
  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype); // heredar métodos
Perro.prototype.constructor = Perro; // arreglar constructor

Perro.prototype.ladrar = function () {
  console.log(this.nombre + " dice: ¡guau!");
};

const f = new Perro("Firulais", "Labrador");
f.hablar(); // hereda
f.ladrar(); // propio
```

🧠 **Explicación profunda (pero clara)**

✔ `Animal.call(this, ...)`

Esto permite que el constructor padre inicialice las propiedades en la instancia del hijo.

✔ `Perro.prototype = Object.create(Animal.prototype)`

Esto hace la magia:
`Perro` hereda **todos los métodos** de `Animal`.

✔ `Perro.prototype.constructor = Perro`

Reemplaza el valor por defecto, necesario por convención.

📌 Comparación con `class` moderno

```js
class Animal {
  constructor(nombre) { this.nombre = nombre; }
  hablar() { ... }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
  ladrar() { ... }
}
```

Debajo del capó, esto usa **exáctamente lo que te acabo de mostrar**:

- `super()` = `Animal.call(this)`
- `extends` = `Object.create(Animal.prototype)`
- métodos = se añaden al prototype

Las clases nuevas son solo *azúcar sintáctica* sobre el sistema antiguo.

### 9.5.2. Subclasses with extends and super

**Siempre favorecer composición en lugar de herencia:**

Reglas con super:

Hay algunas reglas importantes que necesitarás saber sobre el uso de **`super()`** en los constructores:

- Si defines una clase con la palabra clave **`extends`**, el constructor de tu clase debe usar **`super()`** para invocar el constructor de la superclase.
- Si no defines un constructor en tu subclase, se definirá uno automáticamente. Este constructor definido implícitamente simplemente toma cualquier valor que se le pase y se los pasa a **`super()`**.
- No puedes usar la palabra clave **`this`** en tu constructor hasta después de haber invocado el constructor de la superclase con **`super()`**. Esto aplica la regla de que las superclases deben inicializarse antes de que lo hagan las subclases.
- La expresión especial **`new.target`** es `undefined` en las funciones que se invocan sin la palabra clave `new`. Sin embargo, en las funciones constructoras, **`new.target`** es una referencia al constructor que fue invocado. Cuando se invoca un constructor de subclase y este utiliza **`super()`** para invocar el constructor de la superclase, ese constructor de la superclase verá el constructor de la **subclase** como el valor de **`new.target`**. Una superclase bien diseñada no debería necesitar saber si ha sido subdividida, pero podría ser útil poder usar `new.target.name` en mensajes de registro (*logging*), por ejemplo.

Hay dos formas de utilizar super:

1. **`super()`** en el constructor: Para inicializar las propiedades de la clase padre.
2. **`super.método()`** en un método: Para extender o reutilizar la lógica de un método de la clase padre.

🐶 Ejemplo Completo de Uso de `super`

Este ejemplo define una clase base (`Animal`) y una subclase (`Perro`) que la extiende:

Código JavaScript

```javascript
// CLASE BASE (Superclase)
class Animal {
  constructor(nombre, patas) {
    this.nombre = nombre; // Inicializado en el constructor de la superclase
    this.patas = patas;
  }

  emitirSonido() {
    return `${this.nombre} hace un sonido genérico.`;
  }
}

// SUBCLASE (Clase Derivada)
class Perro extends Animal {
  // El constructor de subclase DEBE llamar a super()
  constructor(nombre, raza) {
    // 1. LLAMADA A super(): Invoca el constructor de Animal (clase padre)
    // Inicializa this.nombre y this.patas (fijo en 4)
    super(nombre, 4); 
    
    // Solo después de llamar a super(), puedes usar this.
    this.raza = raza;
  }

  // Sobreescribe el método pero extiende la lógica
  emitirSonido() {
    // 2. LLAMADA A super.metodo(): Llama al método emitirSonido() de Animal
    const sonidoBase = super.emitirSonido();
    
    // Añade la lógica específica del Perro
    return `${sonidoBase} De hecho, dice ¡Guau!`;
  }

  presentarse() {
    return `Soy ${this.nombre}, un ${this.raza} con ${this.patas} patas.`;
  }
}

// CREACIÓN Y USO
const firulais = new Perro('Firuláis', 'Labrador');

console.log(firulais.presentarse());
console.log(firulais.emitirSonido());
```

Explicación del Funcionamiento

1. **`super(nombre, 4)` (En el Constructor):**

      - Cuando se llama a `new Perro('Firuláis', 'Labrador')`, lo primero que debe hacer el constructor de `Perro` es llamar a `super()`.
      - Al hacerlo, le pasa los argumentos `nombre` y `4` al constructor de la clase **`Animal`**.
      - El constructor de `Animal` crea las propiedades `this.nombre` y `this.patas` en el nuevo objeto `firulais`. **Sin esta llamada, `this` no existiría en el constructor de `Perro`**.

2. **`super.emitirSonido()` (En el Método):**

      - El método `emitirSonido` en la clase `Perro` **sobreescribe** el método de la clase `Animal`.
      - Al usar `super.emitirSonido()`, `Perro` ejecuta la implementación original (`"Firuláis hace un sonido genérico."`) y luego le añade la información específica (`" De hecho, dice ¡Guau!"`).
      - Esto permite **extender** o **modificar** la funcionalidad sin reescribir la lógica de la superclase.

### 9.5.3. Delegation Instead of Inheritance

En la delegaciÓn lo que se hace es utilizar los métodos de la clase propia para delegar a los métodos de la clase a donde se delega lo que se necesita hacer.

El ejemplo 9.7 se puede resumir de la siguiente forma:

entonces en:

```javascript
constructor() {
    this.map = new Map();
}
```

lo que se hace es pasar una referencia del build-in Map(), de forma que se deleguen a ese método que es de otra clase por medio de los métodos en la clase que delega?

Exactly! In the line:

```javascript
this.map = new Map();
```

What happens is that you create a new instance of the built-in `Map` class and assign it to the `map` property of the `Histogram` instance. By doing this, you establish a reference to the `Map` object, allowing the `Histogram` class to delegate operations to methods of this `Map` object.

When methods of the `Histogram` class call methods like `set`, `get`, `delete`, etc., they're actually invoking methods of the `Map` object stored in the `map` property. This is what allows for delegation. Instead of implementing the logic for managing data directly in the `Histogram` class, it leverages the functionality of the `Map` class through delegation. This approach promotes code reusability, maintainability, and readability.

### 9.5.4. Class Hierarchies and Abstract Classes

El Ejemplo 9-6 demostró cómo podemos crear una **subclase** de `Map`. El Ejemplo 9-7 demostró cómo podemos, en su lugar, **delegar** en un objeto `Map` sin crear realmente una subclase. Usar clases de JavaScript para **encapsular** datos y **modularizar** tu código es a menudo una gran técnica, y podrías encontrarte usando la palabra clave **`class`** frecuentemente. Pero quizás prefieras la **composición** a la **herencia** y que rara vez necesites usar **`extends`** (excepto cuando uses una librería o *framework* que requiera que extiendas sus clases base).
