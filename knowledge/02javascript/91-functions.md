
# Functions Definitions-Invocations

A function use the return keyword when the desired result is reached to return that value to their caller. The return statement
causes the function to stop executing and to return the value of its expression (if any) to the caller. If the return statement does not have an associated expression, the return value of the function is undefined.

Conocimiento extraido de:

- ChatGPT: la lista de definciones e invocaciones
- Apuntes extras del libro JavaScript the Definitive Guide

## How to create a functioin

Here are the various ways to create functions in JavaScript, along with examples that include parameters where applicable:

1. **Function Declaration**

   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

   One of the important things to understand about function declarations is that the name of the function becomes a variable whose value is the function itself.

2. **Function Expression**

   ```javascript
   const add = function (a, b) {
     return a + b;
   };
   ```

   The function name is optional for functions defined as expressions, and most of the preceding function expressions we’ve shown omit it.

   It is a good practice to use const with function expressions so you don’t accidentally overwrite your functions by assigning new values.

   functions defined with expressions cannot be invoked before they are defined.

3. **Arrow Function**

   ```javascript
   const add = (a, b) => {
     return a + b;
   };
   ```

   Useful when passing one function as an argument to another function.

   Cuidado ya que el "this" en este tipo de funciones es diferente

   No tienen descendencia prototype

4. **Method Definition (within an object)**

   ```javascript
   const calculator = {
     add(a, b) {
       return a + b;
     },
   };
   ```

   JavaScript also supports accessor properties, which do not have a single value but instead have one or two accessor methods: a getter and/or a setter.

5. **Constructor Function**

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   ```

6. **Generator Function**

   ```javascript
   function* generateSequence(start, end) {
     for (let i = start; i <= end; i++) {
       yield i;
     }
   }
   ```

7. **Function Expression with Named Function**

   ```javascript
   const add = function addNumbers(a, b) {
     return a + b;
   };
   ```

8. **Immediately Invoked Function Expression (IIFE)**

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

9. **Class Method**

   ```javascript
   class Calculator {
     add(a, b) {
       return a + b;
     }
   }
   ```

10. **Static Method in a Class**

    ```javascript
    class Calculator {
      static add(a, b) {
        return a + b;
      }
    }
    ```

11. **Async Function**

    ```javascript
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    ```

12. **Async Arrow Function**

    ```javascript
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };
    ```

13. **Async Method (within an object)**

    ```javascript
    const api = {
      async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      },
    };
    ```

14. **Async Generator Function**

    ```javascript
    async function* asyncGenerator(start, end) {
      for (let i = start; i <= end; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        yield i;
      }
    }
    ```

15. **Recursion**

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

16. **factory functions**

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

These examples should cover all the ways to create functions in JavaScript, each including parameters where needed.

## How to invoke functioins

Here are the various ways to invoke functions in JavaScript, along with examples that include arguments where applicable:

1. **Simple Function Call**

   ```javascript
   function add(a, b) {
     return a + b;
   }
   add(5, 10); // 15
   ```

2. **Method Call (within an object)**

   ```javascript
   const calculator = {
     add(a, b) {
       return a + b;
     },
   };
   calculator.add(5, 10); // 15
   ```

3. **Constructor Invocation (using `new` keyword)**

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   const person = new Person("Alice", 30);
   ```

4. **Using `call` Method**

   ```javascript
   function greet(greeting, punctuation) {
     return greeting + ", " + this.name + punctuation;
   }
   const person = { name: "Alice" };
   greet.call(person, "Hello", "!"); // 'Hello, Alice!'
   ```

5. **Using `apply` Method**

   ```javascript
   function greet(greeting, punctuation) {
     return greeting + ", " + this.name + punctuation;
   }
   const person = { name: "Alice" };
   greet.apply(person, ["Hello", "!"]); // 'Hello, Alice!'
    //aqui se esta invocando el greet con el this siendo person y los argumentos que recibe el greet
    //ESTA TRANSFORMANDO UN ARRAY EN LOS ARGUMENTOS PARA LA FUNCION ADEMAS DE ADICONAR EL THIS.
    //esto muestra que apply es util para convertir un array en argumentos individuales
   ```

6. **Using `bind` Method**

   ```javascript
   function greet(greeting, punctuation) {
     return greeting + ", " + this.name + punctuation;
   }
   const person = { name: "Alice" };
   const boundGreet = greet.bind(person, "Hello", "!");
   boundGreet(); // 'Hello, Alice!'
   ```

7. **Immediately Invoked Function Expression (IIFE)**

   ```javascript
   (function (a, b) {
     console.log(a + b);
   })(5, 10); // 15

   // Arrow Function IIFE
   ((a, b) => {
     console.log(a + b);
   })(5, 10); // 15
   ```

8. **Event Listener**

   ```javascript
   function handleClick(event) {
     console.log("Button clicked!", event);
   }
   const button = document.querySelector("button");
   button.addEventListener("click", handleClick);
   ```

9. **Timeout and Interval**

   ```javascript
   function sayHello() {
     console.log("Hello!");
   }

   // Timeout
   setTimeout(sayHello, 1000); // 'Hello!' after 1 second

   // Interval
   setInterval(sayHello, 1000); // 'Hello!' every 1 second
   ```

10. **Promise `then` Method**

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

11. **Array Methods (e.g., `forEach`, `map`, `filter`)**

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

12. **Event Handler Property**

    ```javascript
    function handleClick(event) {
      console.log("Button clicked!", event);
    }
    const button = document.querySelector("button");
    button.onclick = handleClick;
    ```

13. **Using Function as a Callback**

    ```javascript
    function doSomething(callback) {
      callback("Callback invoked");
    }

    function logMessage(message) {
      console.log(message);
    }

    doSomething(logMessage); // 'Callback invoked'
    ```

14. **Recursion**

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

15. **Using Function with Spread Operator**

    ```javascript
    function sum(a, b, c) {
      return a + b + c;
    }
    const args = [1, 2, 3];
    sum(...args); // 6
    ```

These examples cover various ways to invoke functions in JavaScript, demonstrating different contexts and use cases.

## Function Arguments and Parameters

Tener en cuenta que javascript no pone problema si son mas o menos los argumentos administrados, en tal caso lo que hace es asignarle a los parametros que no tengan argumentos los valores default que se quiera asignar o sino existen estos, se asigna undefined.

Ahora el caso contrario, si se asignan mas argumentos que parametros se utiliza el rest parameter que guarda en un array el resto de argumentos para utilizar de alguna forma dentro de la funcion (tambien existe el arguments object)
