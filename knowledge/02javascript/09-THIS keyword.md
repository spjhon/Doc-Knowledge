---
sidebar_position: 9
---

## The "This" keyword

The arguments and return value of a method invocation are handled exactly as described for regular function invocation. Method invocations differ from function invocations in one important way, however: the invocation context.

Property access expressions consist of two parts: an object (in this case o) and a property name (m). In a method-invocation expression like this, the object o becomes the invocation context, and the function body can refer to that object by using the keyword this.

the this keyword is used within constructor functions or methods to refer to the current instance of the object being created or operated on. When a constructor function is invoked with the new keyword, a new object is created, and this refers to that newly created object within the constructor function's scope. This allows you to initialize properties and methods for that specific instance of the object.

The `this` keyword in JavaScript can be a bit tricky to understand, but once you grasp it, it becomes a powerful tool for working with objects and functions.

1. **Context Sensitivity**: The value of `this` is determined by how a function is called. It refers to the object that the function is a method of or the object that the function is called on.

2. **Global Context**: If a function is called in the global scope (i.e., not as a method of an object), `this` refers to the global object, which is `window` in a browser environment and `global` in Node.js.

3. **Method Invocation**: When a function is called as a method of an object, `this` refers to that object.

   ```javascript
   const obj = {
     name: "John",
     greet() {
       console.log(`Hello, ${this.name}!`);
     },
   };

   obj.greet(); // Output: Hello, John!
   ```

4. **Constructor Invocation**: When a function is used as a constructor function with the `new` keyword, `this` refers to the newly created object.

   ```javascript
   function Person(name) {
     this.name = name;
   }

   const john = new Person("John");
   console.log(john.name); // Output: John
   ```

5. **Explicit Binding**: You can explicitly specify the value of `this` using methods like `call()`, `apply()`, or `bind()`.

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

6. **Arrow Functions**: Arrow functions do not have their own `this`. They lexically bind `this` to the value of `this` in the enclosing lexical context.

```javascript
const obj = {
  name: "Jane",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet(); // Output: Hello, undefined!
```

Understanding the context in which `this` is used is crucial for writing effective JavaScript code, especially when working with object-oriented programming and event-driven environments.

## Why is this need it?

In JavaScript, the behavior of accessing variables depends on the scope and context in which the function or method is defined and called. Let’s break down the differences between regular functions, methods within objects, and constructor functions to understand why `this` is needed and how variable access works in each case.

### Regular Functions and Scope

A regular function can access variables from its outer scope (lexical scope), which includes global variables and variables defined in any enclosing function or block.

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

### Methods within Objects

Methods defined within an object can also access variables from their outer scope, but to access the object's properties, they typically use `this`. `this` refers to the object that the method is a property of.

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

### Constructor Functions

In a constructor function, `this` is used to refer to the new instance of the object being created. The constructor can also access outer scope variables, but `this` is necessary to assign properties to the new object.

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

### Why `this` is Needed

1. **Accessing Object Properties**: Methods inside objects and constructor functions need `this` to access and modify the properties of the object they belong to.
2. **Distinguishing Scope**: `this` helps distinguish between local variables within a function and properties of the object or instance.
3. **Creating Instances**: In constructors, `this` is crucial for attaching properties to the new object being instantiated.

### Example Without `this` in Constructor

If you don't use `this` in a constructor function, the properties won't be assigned to the new object, and local variables within the function won't be accessible outside of it.

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

In this incorrect example, `localName` is not a property of the `john` instance, so it cannot be accessed outside the `showName` method.

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

- **Lexical Scope**: Functions can access variables from their outer scope (lexical scope).
- **Methods and `this`**: Methods within objects and constructor functions use `this` to refer to the object's properties.
- **Object Property Access**: Without `this`, methods and constructors cannot correctly assign or access properties of the object or instance.

Using `this` ensures that methods and properties are properly associated with the object or instance they belong to, enabling correct and expected behavior in object-oriented programming in JavaScript.

## Why the new keyword is need it

The `new` keyword is essential in JavaScript for several reasons when creating objects with constructor functions or classes. Here’s an explanation of why it’s needed and what happens if you don’t use it.

### Why the `new` Keyword is Needed

1. **Creates a New Object**: The `new` keyword creates a new, empty object. This new object is the instance that the constructor function or class will initialize.
2. **Sets the Prototype**: The new object's prototype is set to the constructor function’s prototype property. This ensures that the new object inherits methods and properties from the constructor’s prototype.
3. **Binds `this` to the New Object**: Inside the constructor function or class, `this` refers to the new object. Without `new`, `this` would refer to the global object (in non-strict mode) or be `undefined` (in strict mode).
4. **Returns the New Object**: The `new` keyword implicitly returns the new object. If the constructor function explicitly returns an object, that object is returned instead. If it returns a primitive value, it is ignored.

### What Happens if You Don’t Use `new`

If you call a constructor function without the `new` keyword, several issues can arise:

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

### Detailed Issues

1. **Global Scope Pollution**: Without `new`, the properties `name` and `age` are assigned to the global object (or cause an error in strict mode). This can lead to unexpected behavior and difficult-to-debug issues.
2. **`this` Binding**: `this` inside the function will refer to the global object (in non-strict mode) or be `undefined` (in strict mode), not the intended new object. This means the constructor won’t initialize the new object correctly.
3. **Return Value**: Without `new`, the function does not return a new object, so the variable `jane` will be `undefined`.

### Correct Usage with `new`

```javascript
let jane = new Person("Jane", 25);
jane.sayHello(); // Outputs: Hello, my name is Jane and I am 25 years old.
```

### Summary new keyword

- **Using `new`**: Ensures the proper creation of a new object, sets up inheritance, and binds `this` correctly.
- **Without `new`**: Results in incorrect behavior where `this` is not bound to a new object, properties may pollute the global scope, and the expected object is not returned.

To summarize, the `new` keyword is critical for correctly creating and initializing objects using constructor functions or classes in JavaScript. Without it, the intended object-oriented design and encapsulation are not achieved.

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
