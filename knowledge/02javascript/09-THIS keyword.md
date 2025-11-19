---
sidebar_position: 10
---

# The "This" keyword

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

   obj.greet(); // Output: Hello, John!
   ```

4. **Invocación de Constructor**: Cuando una función es usada como una **función constructora con la palabra clave `new`**, `this` se refiere al **objeto recién creado**.

   ```javascript
   function Person(name) {
     this.name = name;
   }

   const john = new Person("John");
   console.log(john.name); // Output: John
   ```

5. **Vinculación Explícita**: Puedes **especificar explícitamente el valor de `this`** usando métodos como `call()`, `apply()`, o `bind()`.

   ```javascript
   function greet() {
     console.log(`Hello, ${this.name}!`);
   }

   const obj1 = { name: "Alice" };
   const obj2 = { name: "Bob" };

   greet.call(obj1); // Output: Hello, Alice!
   greet.apply(obj2); // Output: Hello, Bob!

   const greetBob = greet.bind(obj2);
   greetBob(); // Output: Hello, Bob!
   ```

6. **Funciones Flecha**: Las **funciones flecha no tienen su propio `this`**. Vinculan léxicamente `this` al valor de `this` en el **contexto léxico circundante**.

```javascript
const obj = {
  name: "Jane",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet(); // Output: Hello, undefined!
```

Entender el **contexto en el cual `this` es usado** es **crucial para escribir código JavaScript efectivo**, especialmente cuando se trabaja con **programación orientada a objetos** y **entornos basados en eventos**.

## Why is this need it?

En JavaScript, el **comportamiento de acceder a variables depende del alcance y contexto** en el cual la función o método es definido y llamado. Desglosemos las **diferencias entre funciones regulares, métodos dentro de objetos y funciones constructoras** para entender **por qué `this` es necesario** y cómo funciona el acceso a variables en cada caso.

### **Funciones Regulares y Alcance**

Una **función regular puede acceder a variables desde su alcance externo** (alcance léxico), que incluye **variables globales** y **variables definidas en cualquier función o bloque circundante**.

#### Example 01

```javascript
let outsideVar = 10;

function regularFunction() {
  let insideVar = 20;
  console.log(outsideVar); // Can access outsideVar
  console.log(insideVar); // Can access insideVar
}

regularFunction(); // Outputs: 10, 20
```

### **Métodos dentro de Objetos**

Los **métodos definidos dentro de un objeto** también pueden acceder a variables desde su alcance externo, pero para **acceder a las propiedades del objeto**, típicamente usan **`this`**. `this` se refiere al **objeto del cual el método es una propiedad**.

#### Example 02

```javascript
let outsideVar = 10;

let obj = {
  insideVar: 20,
  method() {
    console.log(outsideVar); // Can access outsideVar
    console.log(this.insideVar); // Can access insideVar using `this`
  },
};

obj.method(); // Outputs: 10, 20
```

### **Funciones Constructoras**

En una **función constructora**, `this` se usa para **referirse a la nueva instancia del objeto** que está siendo creada. El constructor también puede acceder a variables del alcance externo, pero **`this` es necesario para asignar propiedades al nuevo objeto**.

#### Example 03

```javascript
let outsideVar = 10;

function Person(name) {
  this.name = name;
  this.showName = function () {
    console.log(this.name); // Accesses the property of the instance
    console.log(outsideVar); // Can access outsideVar
  };
}

let john = new Person("John");
john.showName(); // Outputs: John, 10
```

### **Por Qué `this` es Necesario**

1. **Acceder a Propiedades del Objeto**: Los métodos dentro de objetos y funciones constructoras necesitan `this` para **acceder y modificar las propiedades del objeto** al que pertenecen.

2. **Distinguir el Alcance**: `this` ayuda a **distinguir entre variables locales** dentro de una función y **propiedades del objeto o instancia**.

3. **Crear Instancias**: En constructores, `this` es **crucial para adjuntar propiedades al nuevo objeto** que está siendo instanciado.

### **Ejemplo Sin `this` en Constructor**

Si **no usas `this` en una función constructora**, las propiedades **no serán asignadas al nuevo objeto**, y las variables locales dentro de la función **no serán accesibles fuera de ella**.

#### Incorrect Example

```javascript
function Person(name) {
  // Incorrect: these variables are local to the function
  let localName = name;

  this.showName = function () {
    console.log(localName); // Can access localName, but it's not part of the instance
  };
}

let john = new Person("John");
john.showName(); // Outputs: John
console.log(john.localName); // Outputs: undefined
```

En este **ejemplo incorrecto**, `localName` **no es una propiedad** de la instancia `john`, por lo que **no puede ser accedida fuera del método** `showName`.

### Correct Example

```javascript
function Person(name) {
  this.name = name; // Assign to the instance
  this.showName = function () {
    console.log(this.name); // Access the instance property
  };
}

let john = new Person("John");
john.showName(); // Outputs: John
console.log(john.name); // Outputs: John
```

#### Why the `this` keyword is need it

```javascript
// Global variable
var name = "Global Name";

// Object with a name property
var obj = {
    name: "Object Name",
    printName: function() {
        console.log(name);  // Accesses the global variable 'name'
        console.log(this.name);  // Accesses the property 'name' of the object
    }
};

obj.printName(); // Output: Global Name, Object Name
```

### Summary this keyword

- **Alcance Léxico**: Las funciones pueden **acceder a variables desde su alcance externo** (alcance léxico).

- **Métodos y `this`**: Los métodos dentro de objetos y funciones constructoras usan **`this` para referirse a las propiedades del objeto**.

- **Acceso a Propiedades del Objeto**: Sin `this`, los métodos y constructores **no pueden asignar o acceder correctamente a las propiedades** del objeto o instancia.

Usar `this` asegura que los **métodos y propiedades estén correctamente asociados** con el objeto o instancia a la que pertenecen, habilitando un **comportamiento correcto y esperado** en la programación orientada a objetos en JavaScript.

Aquí tienes la traducción del texto manteniendo el contexto técnico adecuado para JavaScript:

## Por qué se necesita la palabra clave `new`

La palabra clave `new` es esencial en JavaScript por varias razones al crear objetos con funciones constructoras o clases. Aquí tienes una explicación de por qué es necesaria y qué sucede si no la usas.`

1. **Crea un Nuevo Objeto**: La palabra clave `new` crea un nuevo objeto vacío. Este nuevo objeto es la instancia que la función constructora o la clase inicializará.
2. **Establece el Prototipo**: El prototipo del nuevo objeto se asigna a la propiedad `prototype` de la función constructora. Esto asegura que el nuevo objeto herede los métodos y propiedades del prototipo del constructor.
3. **Vincula `this` al Nuevo Objeto**: Dentro de la función constructora o clase, `this` se refiere al nuevo objeto. Sin `new`, `this` se referiría al objeto global (en modo no estricto) o sería `undefined` (en modo estricto).
4. **Retorna el Nuevo Objeto**: La palabra clave `new` retorna implícitamente el nuevo objeto. Si la función constructora retorna explícitamente un objeto diferente, ese objeto será el retornado en su lugar. Si retorna un valor primitivo, este será ignorado.

### What Happens if You Don’t Use `new`

Si llamas a una función constructora sin la palabra clave `new`, pueden surgir varios problemas:

#### Example without `new`

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// Incorrect usage without `new`
let jane = Person("Jane", 25);

// Problematic: `this` inside the function refers to the global object (in non-strict mode) or undefined (in strict mode)
console.log(jane); // Outputs: undefined
console.log(name); // Outputs: Jane (polluting the global scope)
console.log(age); // Outputs: 25 (polluting the global scope)
```

### ### Detailed Issues

1. **Contaminación del Ámbito Global**: Sin `new`, las propiedades `name` y `age` se asignan al objeto global (o causan un error en modo estricto). Esto puede llevar a comportamientos inesperados y problemas difíciles de depurar.
2. **Vinculación de `this`**: `this` dentro de la función se referirá al objeto global (en modo no estricto) o será `undefined` (en modo estricto), no al nuevo objeto intencionado. Esto significa que el constructor no inicializará el nuevo objeto correctamente.
3. **Valor de Retorno**: Sin `new`, la función no retorna un nuevo objeto, por lo que la variable `jane` será `undefined`.

### Correct Usage with `new`

```javascript
let jane = new Person("Jane", 25);
jane.sayHello(); // Outputs: Hello, my name is Jane and I am 25 years old.
```

### Resumen de la palabra clave `new`

- **Usando `new`**: Asegura la creación adecuada de un nuevo objeto, establece la herencia y vincula `this` correctamente.
- **Sin `new`**: Da como resultado un comportamiento incorrecto donde `this` no se vincula a un nuevo objeto, las propiedades pueden contaminar el ámbito global y no se retorna el objeto esperado.

En resumen, la palabra clave `new` es crítica para crear e inicializar correctamente objetos usando funciones constructoras o clases en JavaScript. Sin ella, no se logran el diseño orientado a objetos ni el encapsulamiento previstos.

## El "this" en funciones

Normally, when calling a function, the value of this inside the function is the object that the function was accessed on.

Entendiendo el enunciado de arriba: En JavaScript, el valor de `this` dentro de una función depende de cómo se llama a la función. Aquí está una explicación detallada:

1. **Objeto de llamado**: En el contexto de objetos, cuando llamas a una función como un método de un objeto, el valor de `this` es el objeto al que pertenece el método. Por ejemplo:

    ```javascript
    const obj = {
        name: 'Mozilla',
        display: function() {
            console.log(this.name);
        }
    };
    
    obj.display(); // 'Mozilla'
    ```

    En este caso, `display` es una función que pertenece al objeto `obj`. Cuando se llama a `obj.display()`, el valor de `this` dentro de la función `display` es `obj`.

2. **Llamada normal de función**: Cuando una función se llama sin un objeto, es decir, simplemente como una función regular, el valor de `this` es `undefined` en modo estricto (`strict mode`) o el objeto global (como `window` en un navegador) en modo no estricto. Por ejemplo:

    ```javascript
    function show() {
        console.log(this);
    }
    
    show(); // En modo estricto: undefined, en modo no estricto: window (o el objeto global en Node.js)
    ```

3. **Llamadas con `call` y `apply`**: Puedes especificar explícitamente el valor de `this` usando los métodos `call` y `apply`. Por ejemplo:

    ```javascript
    function greet() {
        console.log(this.name);
    }
    
    const person = { name: 'Alice' };
    
    greet.call(person); // 'Alice'
    ```

    Aquí, `greet.call(person)` llama a la función `greet` y establece `this` dentro de `greet` como `person`.

4. **Funciones flecha**: Las funciones flecha no tienen su propio valor de `this`. En su lugar, heredan el valor de `this` del contexto donde fueron definidas. Por ejemplo:

    ```javascript
    const obj = {
        name: 'Mozilla',
        display: function() {
            const innerFunc = () => {
                console.log(this.name);
            };
            innerFunc();
        }
    };
    
    obj.display(); // 'Mozilla'
    ```

    Aquí, `innerFunc` es una función flecha definida dentro de `display`. Hereda el valor de `this` de `display`, que es `obj`.

En resumen, el enunciado se refiere a que, normalmente, el valor de `this` dentro de una función depende del objeto en el cual se llamó a la función.
