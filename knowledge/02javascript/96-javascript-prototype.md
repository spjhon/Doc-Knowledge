---
sidebar_position: 96
---

# Prototype Chain

Using `object.prototype` directly in code is less common in modern JavaScript development because it can lead to confusion and makes the code less beginner-friendly. Let me explain why:

1. **Readability and Clarity**: Using `object.prototype` can make the code less readable and more verbose. When reading the code, it's not immediately clear what `object.prototype` refers to, whereas using more straightforward syntax can make the intent of the code clearer.

2. **Abstraction and Encapsulation**: In object-oriented programming, it's generally considered good practice to encapsulate methods and properties within the object itself rather than adding them directly to the prototype. This helps to create a clear distinction between object properties and methods that are part of its public interface versus internal implementation details.

3. **Avoiding Collisions**: Directly modifying the prototype of built-in objects like `Object`, `Array`, or `String` can lead to unintended side effects and potential collisions with other libraries or code using the same methods. It's better to use modern practices like classes or modules to extend functionality without directly modifying prototypes.

4. **Compatibility and Maintainability**: Some older JavaScript codebases might use `object.prototype` because they were written before modern JavaScript features like classes and modules were widely adopted. However, using more modern and standardized approaches improves code maintainability and compatibility across different environments and browsers.

Instead of directly modifying prototypes, modern JavaScript developers often use:

1. **Classes**: The introduction of classes in ES6 provides a more structured and readable way to create objects with methods and properties encapsulated within the class definition.

2. **Modules**: Using modules allows developers to organize their code into separate, reusable files, making it easier to maintain and understand.

3. **Functional Programming**: Embracing functional programming paradigms allows developers to write more concise and composable code without directly modifying prototypes.

In summary, using `object.prototype` directly is discouraged because it can lead to unclear code, potential conflicts, and a lack of modern language features. Instead, developers should rely on classes, modules, and other modern JavaScript patterns to create cleaner and more maintainable code.

show me a simple example of object.prototype and the same with classes and the same with functional programming

Certainly! Let's create a simple example of adding a `sayHello` method to an object using `object.prototype`, then the same example using classes and functional programming.

1.**Using `object.prototype`:**

```javascript
// Creating a simple object
function Person(name) {
  this.name = name;
}

// Adding a method to the object's prototype
Person.prototype.sayHello = function() {
  return `Hello, my name is ${this.name}.`;
};

// Creating an instance of the object and calling the method
const person1 = new Person('John');
console.log(person1.sayHello()); // Output: Hello, my name is John.
```

2.**Using Classes:**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, my name is ${this.name}.`;
  }
}

const person1 = new Person('John');
console.log(person1.sayHello()); // Output: Hello, my name is John.
```

3.**Using Functional Programming:**

```javascript
function createPerson(name) {
  return {
    name,
    sayHello() {
      return `Hello, my name is ${this.name}.`;
    }
  };
}

const person1 = createPerson('John');
console.log(person1.sayHello()); // Output: Hello, my name is John.
```

All three examples achieve the same result – creating an object with a `sayHello` method that outputs a greeting with the person's name. However, the approaches differ in syntax and style. The `object.prototype` approach is less commonly used now due to the availability of classes and the adoption of functional programming paradigms in modern JavaScript development. Both classes and functional programming are more structured and encourage better encapsulation and maintainability of code.

## **NOTAS JavaScript**

### **Functions**

What is a pure function?
Answer
A pure function is a function that satisfies these two conditions:

- Given the same input, the function returns the same output.
- The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).

Pure functions can mutate local data within the function as long as it satisfies the two conditions above.
*Extracted from: 30 Seconds of knoledge tab*

## THE PROTOTYPE CHAIN

La cadena "prototype" en JavaScript se refiere a un mecanismo de herencia y extensión que está presente en todos los objetos en JavaScript, incluyendo los objetos construidos mediante funciones constructoras, como los objetos nativos como Array, String, Number, etc. (Obtenido de chatGPT).

- In javascript the trigonometry is all in RADIANS

- A fragment of code that produces a value is called an expression.

- Arrow functions have no “this”: Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

- When you define a function as a property of an object, it becomes a method, and it can access and operate on the object's properties using the this keyword.

- You can return false in a onSubmit to prevent reload of the submit in a form

- Unit test is for bussiness logic (even in the front) and Automated browser tests like with cypress are for functionality.
Unit testing allows you to test all sorts of scenarios with none of the complicated and flakey test setups that integration style tests require.

- What are JavaScript data types?: The latest ECMAScript standard defines seven data types, six of them being primitive:
Boolean,
Null,
Undefined,
Number,
String,
Symbol
and one non-primitive data type: Object.
