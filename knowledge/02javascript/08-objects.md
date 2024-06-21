---
sidebar_position: 8
---

# Objects

## Object Creation

Creating an object in JavaScript can be done in several ways. Here is a comprehensive list of the different methods:

### 1. Object Literals

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

### 2. Using the `Object` Constructor

You can create an object using the built-in `Object` constructor.

```javascript
const obj = new Object();
obj.property1 = "value1";
obj.property2 = "value2";
```

### 3. Using a Constructor Function

Define a constructor function and then create an instance of that function using the `new` keyword.

```javascript
function MyObject(property1, property2) {
  this.property1 = property1;
  this.property2 = property2;
}

const obj = new MyObject("value1", "value2");
```

### 4. Using the ES6 `class` Syntax

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

### 5. Using `Object.create()`

Create a new object with the specified prototype object and properties.

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

### 6. Using Factory Functions

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

### 7. Using `Object.assign()`

Copy the values of all enumerable own properties from one or more source objects to a target object.

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = Object.assign({}, source1, source2);
```

### 8. Using ES6 Destructuring and Spread Syntax

Combine objects in a more concise way using the spread operator.

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = { ...source1, ...source2 };
```

### 9. Using `Object.fromEntries()`

Transform a list of key-value pairs into an object.

```javascript
const entries = [
  ["property1", "value1"],
  ["property2", "value2"],
];

const obj = Object.fromEntries(entries);
```

Each of these methods offers different advantages depending on the context and requirements of your application.

## Object Invocation

Invoking the creation of objects in JavaScript means using the appropriate method to create and then typically interact with the object. Here are the invocation methods for each creation technique listed previously:

### Object Literals

- **Invocation**

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

### Using the `Object` Constructor

- **Invocation**

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

### Using a Constructor Function

- **Definition**

```javascript
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

### Using the ES6 `class` Syntax

- **Definition**

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

### Using `Object.create()`

- **Invocation**

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

### Using Factory Functions

- **Invocation**

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

### Using `Object.assign()`

- ***Invocation**

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = Object.assign({}, source1, source2);

// Access properties
console.log(obj.property1); // 'value1'
console.log(obj.property2); // 'value2'
```

### Using ES6 Destructuring and Spread Syntax

- **Invocation**

```javascript
const source1 = { property1: "value1" };
const source2 = { property2: "value2" };

const obj = { ...source1, ...source2 };

// Access properties
console.log(obj.property1); // 'value1'
console.log(obj.property2); // 'value2'
```

### Using `Object.fromEntries()`

- **Invocation**

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

In each case, once the object is created, properties and methods can be accessed and invoked using dot notation (e.g., `obj.property1`) or bracket notation (e.g., `obj['property1']`). Methods are invoked using the typical function call syntax (e.g., `obj.method1()`).
