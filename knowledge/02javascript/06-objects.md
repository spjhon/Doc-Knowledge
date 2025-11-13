---
sidebar_position: 7
---

# 6. Objetos

Los **objetos** son el **tipo de dato más fundamental** de **JavaScript**.

## 6.1. Introducción a los objetos

Además de mantener su propio conjunto de propiedades, un **objeto de JavaScript** también **hereda las propiedades de otro objeto**, conocido como su **“prototipo”**.
Los **métodos de un objeto** suelen ser propiedades heredadas, y esta **“herencia prototipal”** es una característica clave de JavaScript.

Cualquier valor en JavaScript que **no sea una cadena (string), un número, un símbolo (Symbol), ni los valores `true`, `false`, `null` o `undefined`**, es un **objeto**.

Como se recuerda en la sección §3.8, los **objetos son mutables** y se **manipulan por referencia** en lugar de por valor.

A veces es importante poder distinguir entre las **propiedades definidas directamente en un objeto** y aquellas que son **heredadas de su prototipo**.
JavaScript usa el término **propiedad propia** (*own property*) para referirse a las propiedades **no heredadas**.

Además de su **nombre** y **valor**, cada propiedad tiene **tres atributos**:

* El atributo **writable** especifica si el valor de la propiedad puede modificarse.
* El atributo **enumerable** especifica si el nombre de la propiedad se devuelve en un bucle `for/in`.
* El atributo **configurable** especifica si la propiedad puede eliminarse y si sus atributos pueden ser modificados.

---

## 6.2. Creando objetos

Los **objetos** pueden crearse mediante **literales de objeto** (literal objects), con la palabra clave **`new`**, o con la función **`Object.create()`**.

### 6.2.1. Object Literals

This is the most straightforward way to create an object.

```javascript
const obj = {
  property1: "value1",
  property2: "value2",
  method1: function () {
    // method code
  },
};
```

```javascript
let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y+1 }; // More complex values
let book = {
"main title": "JavaScript", // These property names include spaces,
"sub-title": "The Definitive Guide", // and hyphens, so use string literals.
for: "all audiences", // for is reserved, but no quotes.
author: { // The value of this property is
firstname: "David", // itself an object.
surname: "Flanagan"
}
};
```

* **Invocation**

```javascript
const obj = {
  property1: "value1",
  property2: "value2",
  method1: function () {
    console.log(this.property1);
  },
};

// Access properties and methods
console.log(obj.property1); // 'value1'
obj.method1(); // logs 'value1'
```

### 6.2.2. Creando con **new**

```javascript
let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping
```

```javascript
const obj = new Object();

obj.property1 = "value1";
obj.property2 = "value2";
```

* **Invocation**

```javascript
const obj = new Object();

obj.property1 = "value1";
obj.property2 = "value2";
obj.method1 = function () {
  console.log(this.property1);
};

// Access properties and methods
console.log(obj.property1); // 'value1'
obj.method1(); // logs 'value1'
```

### 6.2.3. Prototypes

Casi todos los **objetos en JavaScript** tienen un **segundo objeto asociado** a ellos.
Este segundo objeto se conoce como su **prototipo**, y el primer objeto **hereda propiedades del prototipo**.

Todos los **objetos creados mediante literales de objeto** comparten el mismo **objeto prototipo**, al cual podemos referirnos en el código JavaScript como **`Object.prototype`**.

En programación, a menudo queremos **tomar algo y extenderlo**.

Por ejemplo, tenemos un **objeto `user`** con sus propiedades y métodos, y queremos crear **`admin`** y **`guest`** como **variantes ligeramente modificadas** de ese objeto.
Nos gustaría **reutilizar lo que ya tenemos en `user`**, sin copiar ni volver a implementar sus métodos, sino simplemente **construir un nuevo objeto sobre él**.

🧩 1. Todo en JavaScript son objetos (o casi)

Cuando haces esto:

```js
const user = { name: "Juan", greet() { console.log("Hola"); } };
```

Creas un objeto **literal**, pero **internamente ese objeto tiene un “padre” escondido**, que es otro objeto llamado su **prototipo** Ese “padre” es lo que JavaScript usa para **heredar propiedades y métodos**.

🧬 2. El “padre escondido”: `__proto__`

Todo objeto tiene un enlace interno llamado `[[Prototype]]`.
Históricamente, se puede acceder a él con la propiedad **`__proto__`**:

```js
console.log(user.__proto__);
```

Esto te mostrará algo como:

```js
{ ...muchos métodos... }
```

Ese objeto es **`Object.prototype`**, y contiene métodos como `toString()`, `hasOwnProperty()`, etc.
Eso significa que aunque tú no los definiste, **`user` los puede usar** gracias a su prototipo:

```js
user.hasOwnProperty("name"); // true
```

🧱 3. Cómo funciona la herencia prototipal

Cuando intentas acceder a una propiedad, por ejemplo `user.toString()`,
JavaScript **primero busca en el propio objeto** `user`.
Si no la encuentra, **sube a su prototipo (`__proto__`)**.
Si tampoco está ahí, sube al prototipo del prototipo… y así sucesivamente.
Esto se llama la **cadena de prototipos (prototype chain)**.

#### 6.2.3.1. 🧠 `prototype` vs `__proto__` (¡no son lo mismo!)

Este es el punto que más confunde:

* **`__proto__`** → pertenece a **los objetos creados**, y apunta al **prototipo del cual heredan**.
* **`prototype`** → pertenece a **las funciones constructoras** (o clases), y define **el prototipo que tendrán los objetos creados por ellas**.

✅ **`__proto__`** → representa **la conexión de un objeto con su prototipo**.
No se usa normalmente en código “de aplicación” moderno (porque es más de bajo nivel), y sí, **es más útil para librerías, frameworks o herramientas** que necesitan manipular o inspeccionar la herencia de objetos.

✅ **`prototype`** → pertenece a la **función constructora o clase**, y define los **métodos y propiedades que las instancias van a heredar**.

Puedes pensar en él como un **objeto base compartido entre todas las instancias**

Míralo así:

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function() {
  console.log("Hola " + this.name);
};

const juan = new User("Juan");

juan.greet(); // Hola Juan
```

* `User.prototype` → es un objeto que contiene los métodos compartidos.
* `juan.__proto__` → apunta a `User.prototype`.
  Así es como **juan hereda** el método `greet()`.

🔍 Veamos con un ejemplo práctico y gráfico

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hola, soy " + this.name);
  }
}

const juan = new User("Juan");
```

Internamente, pasa esto:

```js
User (función/clase)
  └── tiene un objeto llamado User.prototype
         └── { greet: f() }

juan (instancia creada con new User)
  └── tiene un enlace interno [[Prototype]] o __proto__
         └── que apunta a User.prototype
```

Entonces:

```js
juan.greet(); // Busca greet en juan → no está
              // Sube a juan.__proto__ (que es User.prototype)
              // Lo encuentra y lo ejecuta
```

🧭 Resumen visual

| Concepto               | Qué es                                                           | Pertenece a                      | Ejemplo               |
| ---------------------- | ---------------------------------------------------------------- | -------------------------------- | --------------------- |
| `__proto__`            | Enlace al prototipo del objeto                                   | Cualquier objeto                 | `juan.__proto__`      |
| `prototype`            | Objeto usado como prototipo por las instancias creadas con `new` | Funciones constructoras / Clases | `User.prototype`      |
| `Object.create(proto)` | Crea un objeto con un prototipo específico                       | —                                | `Object.create(user)` |

### 6.2.4. Object.create()

Create a new object with the specified prototype object and properties.

* Solo las funciones constructoras (y las clases) tienen la propiedad .prototype.
* Los objetos normales `(como const algo = {})` no tienen .prototype.

```javascript
const prototypeObj = {
  property1: "value1",
  method1: function () {
    // method code
  },
};

const obj = Object.create(prototypeObj);
obj.property2 = "value2";
```

El Object.create() se hace es para otorgarle a un object vacío, métodos o propiedades (que entran como argumentos) que se entiendan de forma de herencia o prototype cuando se la invocación de los métodos o propiedades del object, mientras que el .prototype es para adicionarle métodos y propiedades a clases o funciones constructoras.

**Ojo** Puedes pasar `null` a `Object.create()` para crear un nuevo objeto que **no tenga prototipo**, pero si haces esto, el objeto creado **no heredará nada**, ni siquiera métodos básicos como `toString()` (lo que significa que **tampoco funcionará con el operador `+`**).

Lo que normalmente pasa cuando tú haces un objeto así:

```js
const obj = {};
```

En realidad **JavaScript lo crea como si hiciera esto**:

```js
const obj = Object.create(Object.prototype);
```

O sea:
→ `{}` **hereda de `Object.prototype`**,
→ lo que significa que tiene acceso a todos los métodos *built-in* como `.toString()`, `.hasOwnProperty()`, `.valueOf()`, etc.

* **Invocation**

```javascript
const prototypeObj = {
  property1: "value1",
  method1() {
    console.log(this.property1);
  },
};

const obj = Object.create(prototypeObj);
obj.property2 = "value2";

// Access properties and methods
console.log(obj.property1); // 'value1'
console.log(obj.property2); // 'value2'
obj.method1(); // logs 'value1'
```

### 6.2.5. Usando una función constructora

Define a constructor function and then create an instance of that function using the `new` keyword, esta es la forma **ANTIGUA** de declarar objectos con herencia, lo moderno es con las clases.

```javascript
function MyObject(property1, property2) {
  this.property1 = property1;
  this.property2 = property2;
}

const obj = new MyObject("value1", "value2");
```

* **Invocation**

```javascript
// Definición
function MyObject(property1, property2) {
  this.property1 = property1;
  this.property2 = property2;
  this.method1 = function () {
    console.log(this.property1);
  };
}

const obj = new MyObject("value1", "value2");

// Access properties and methods
console.log(obj.property1); // 'value1'
obj.method1(); // logs 'value1'
```

### 6.2.6. Using the ES6 `class` Syntax

Define a class and create an object using the `new` keyword.

```javascript
class MyObject {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
}

const obj = new MyObject("value1", "value2");
```

* **Invocation**

```javascript
class MyObject {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method1() {
    console.log(this.property1);
  }
}

const obj = new MyObject("value1", "value2");

// Access properties and methods
console.log(obj.property1); // 'value1'
obj.method1(); // logs 'value1'
```

### 6.2.7. Using Factory Functions

A function that returns an object, enabling a closure to capture private variables.

```javascript
function createObject(property1, property2) {
  return {
    property1,
    property2,
    method1() {
      // method code
    },
  };
}

const obj = createObject("value1", "value2");
```

* **Invocation**

```javascript
function createObject(property1, property2) {
  return {
    property1,
    property2,
    method1() {
      console.log(this.property1);
    },
  };
}

const obj = createObject("value1", "value2");

// Access properties and methods
console.log(obj.property1); // 'value1'
obj.method1(); // logs 'value1'
```

### 6.2.8. Using `Object.assign()`

Copy the values of all enumerable own properties from one or more source objects to a target object.

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = Object.assign({}, source1, source2);
```

* ***Invocation**

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = Object.assign({}, source1, source2);

// Access properties
console.log(obj.property1); // 'value1'
console.log(obj.property2); // 'value2'
```

### 6.2.9. Using ES6 Destructuring and Spread Syntax

Combine objects in a more concise way using the spread operator.

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = { ...source1, ...source2 };
```

* **Invocation**

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = { ...source1, ...source2 };

// Access properties
console.log(obj.property1); // 'value1'
console.log(obj.property2); // 'value2'
```

### 6.2.10. Using `Object.fromEntries()`

Transform a list of key-value pairs into an object.

```javascript
const entries = [
  ["property1", "value1"],
  ["property2", "value2"],
];

const obj = Object.fromEntries(entries);
```

* **Invocation**

```javascript
const entries = [
  ["property1", "value1"],
  ["property2", "value2"],
];

const obj = Object.fromEntries(entries);

// Access properties
console.log(obj.property1); // 'value1'
console.log(obj.property2); // 'value2'
```

---

## 6.3. Querying and Setting Properties

```javascript
//READ a property
let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

//INSERT a property
book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.
```

### 6.3.1. Objetos Como Arreglos Asociativos (Objects As Associative Arrays)

En JavaScript los objetos funcionan naturalmente como arreglos asociativos porque permiten acceder a sus propiedades de dos formas:

1. Notación de punto:

    ```javascript
    const usuario = { nombre: "Ana", edad: 30 };
    console.log(usuario.nombre); // "Ana"
    ```

2. Notación de corchetes (como arreglo asociativo):

    ```javascript
    const usuario = { nombre: "Ana", edad: 30 };
    console.log(usuario["nombre"]); // "Ana"
    console.log(usuario["edad"]); // 30
    ```

3. Ventaja de la notación de corchetes:

    Puedes usar variables y claves dinámicas:

    ```javascript
    const usuario = { nombre: "Ana", edad: 30, email: "ana@example.com" };

    const propiedad = "nombre";
    console.log(usuario[propiedad]); // "Ana"

    // Claves con espacios o caracteres especiales
    const datos = { "nombre completo": "Ana García" };
    console.log(datos["nombre completo"]); // "Ana García"
    ```

4. Ejemplo práctico:

    ```javascript
    const traducción = {
    "es": "Español",
    "en": "English",
    "fr": "Français"
    };

    const idioma = "es";
    console.log(traduccion[idioma]); // "Español"
    ```

### 6.3.2. Inheritance

Los objetos de JavaScript tienen un conjunto de "propiedades propias," y también heredan un conjunto de propiedades de su objeto prototipo.

```javascript
let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3; x and y are inherited from o and p
```

Como puede verse en el siguiente ejemplo, se crea un objecto que hereda de un objeto diferente, pero al asignar un nuevo valor a la propiedad heredada en c, no se modifica la propiedad r en el object original.

```javascript
let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r // => 1: the prototype is not affected
```

### 6.3.3. Property Access Errors

* Si una propiedad no existe al intentar consultarla, se retorna undefined.
* Pero cuando no existe el object como tal, va a dar error, por eso al utilizar el ?, se evalúa el lado izquierdo de la expresión.

## 6.4. Deleting properties

* El operador delete solo elimina propiedades propias, no las heredadas.
* delete no opera sobre el valor de la propiedad sino sobre la propiedad en sí misma.
* Una expresión delete evalúa a true si la eliminación tuvo éxito o si el delete no tuvo efecto (como eliminar una propiedad inexistente).

```javascript
let o = {x: 1}; // o has own property x and inherits property toString
delete o.x // => true: deletes property x
delete o.x // => true: does nothing (x doesn't exist) but true anyway
delete o.toString // => true: does nothing (toString isn't an own property)
delete 1 // => true: nonsense, but true anyway
```

## 6.5. Testing Properties

Los objetos de JavaScript pueden considerarse como conjuntos de propiedades, y a menudo es útil poder comprobar la pertenencia a ese conjunto, es decir, verificar si un objeto tiene una propiedad con un nombre determinado. Puedes hacer esto con el operador `in`, con los métodos `hasOwnProperty()` y `propertyIsEnumerable()`, o simplemente consultando la propiedad directamente.

Con el `in`:

```javascript
let o = { x: 1 };
"x" in o // => true: o has an own property "x"
"y" in o // => false: o doesn't have a property "y"
"toString" in o // => true: o inherits a toString property
```

Con el `hasOwnProperty()`:

```javascript
let o = { x: 1 };
o.hasOwnProperty("x") // => true: o has an own property x
o.hasOwnProperty("y") // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property
```

Con el `propertyIsEnumerable()`:

```javascript
let o = { x: 1 };
o.propertyIsEnumerable("x") // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString") // => false: not an own property
Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable
```

Con la simple consulta de la propiedad:

```javascript
let o = { x: 1 };
o.x !== undefined // => true: o has a property x
o.y !== undefined // => false: o doesn't have a property y
o.toString !== undefined // => true: o inherits a toString property
```

## 6.6. Enumerando propiedades

En lugar de comprobar la existencia de propiedades individuales, a veces queremos **iterar** o **obtener una lista de todas las propiedades de un objeto**.

* `for/in` loop
* `for/of` loop
* `Object.keys()`
* `Object.getOwnPropertyNames()`
* `Object.getOwnPropertySymbols()`
* `Reflect.ownKeys()`
