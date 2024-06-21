---
sidebar_position: 2
---

# Data Types

## Primitives

Here's the TypeScript syntax for declaring variables of each primitive type:

1.`null`:

```typescript
let myNull: null = null;
```

2.`undefined`:

```typescript
let myUndefined: undefined = undefined;
```

3.`boolean`:

```typescript
let myBoolean: boolean = true; // or false
```

4.`string`:

```typescript
let myString: string = ""; // or "Hi!", "abc123", etc.
```

5.`number`:

```typescript
let myNumber: number = 0; // or 2.1, -4, etc.
```

6.`bigint`:

```typescript
let myBigInt: bigint = 0n; // or 2n, -4n, etc.
```

7.`symbol`:

```typescript
let mySymbol: symbol = Symbol(); // or Symbol("hi"), etc.
```

8.`Date`:

```typescript
let myDate: Date = new Date(); // current date and time
```

You can declare variables using the respective primitive types and assign values accordingly.

## Data Structures

1.**Arrays**:

```typescript
// Arrays
let myArray1: number[] = [1, 2, 3]; // Array of numbers
let myArray2: string[] = ["hello", "world"]; // Array of strings
```

2.**Objects**:

```typescript
// Objects
let myObject: { name: string, age: number } = { name: "John", age: 30 };
```

3.**Functions**:

```typescript
// Functions
function add(x: number, y: number): number {
    return x + y;
}
```

4.**Enums**:

```typescript
// Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let myDirection: Direction = Direction.Up;
```

5.**Tuples**:

```typescript
// Tuples
let myTuple: [string, number] = ["hello", 10];
```

6.**Any**:

```typescript
// Any
let myAny: any = "hello";
```

7.**Void**:

```typescript
// Void
function logMessage(message: string): void {
    console.log(message);
}
```

8.**Never**:

```typescript
// Never
function throwError(message: string): never {
    throw new Error(message);
}
```

These are the basic syntax examples for each of the mentioned TypeScript data types. You can create variables, functions, or enums using these syntax patterns.

## Differente bettweb primitives and other data types

Certainly! Here are 10 differences between primitive types and other data types in TypeScript:

1. **Mutability**:
   - Primitives (such as `number`, `string`, `boolean`) are immutable, meaning their values cannot be changed once they are created.
   - Other data types like arrays, objects, and tuples are mutable, allowing modification of their elements or properties after creation.

2. **Complexity**:
   - Primitives represent single values, while other data types represent more complex structures or collections of values.

3. **Storage**:
   - Primitives are typically stored by value directly in memory.
   - Other data types (arrays, objects, etc.) are usually stored by reference, where the variable holds a reference to the actual data stored elsewhere in memory.

4. **Operations**:
   - Primitives have limited operations that can be performed directly on them (e.g., mathematical operations for numbers, concatenation for strings).
   - Other data types often have specialized operations and methods available for manipulation (e.g., array methods like `push`, `pop`, object methods like `Object.keys`, `Object.assign`).

5. **Passing by Value vs. Passing by Reference**:
   - Primitives are passed by value when passed as arguments to functions, meaning a copy of the value is passed.
   - Other data types are passed by reference, meaning changes made to them within a function affect the original variable outside the function.

6. **Type Checking**:
   - Primitives have straightforward types (e.g., `number`, `string`, `boolean`), while other data types might have complex or custom types.

7. **Size in Memory**:
   - Primitives generally occupy fixed amounts of memory depending on their type.
   - Other data types can occupy varying amounts of memory depending on the size and complexity of their contents.

8. **Value Comparison vs. Reference Comparison**:
   - When comparing primitives, the comparison checks for equality of their values.
   - When comparing other data types, the comparison checks for equality of references rather than the content itself.

9. **Initialization**:
   - Primitives are typically initialized with literal values directly.
   - Other data types often require explicit instantiation using constructors or literal syntax.

10. **Support for Methods**:
    - Primitives do not have methods or properties directly associated with them.
    - Other data types have built-in methods and properties that can be accessed and utilized. For instance, arrays have methods like `push`, `pop`, `splice`, while objects have methods like `Object.keys`, `Object.values`.

## First Class Citizens

In JavaScript, "first-class citizens" refer to entities that can be treated like any other value in the language. This means they can be:

1. Assigned to variables.
2. Passed as arguments to functions.
3. Returned as values from functions.
4. Stored in data structures.

In JavaScript, functions are considered first-class citizens, meaning they can be manipulated in the same way as any other data type. This property allows for powerful programming paradigms like functional programming, where functions are used as the primary building blocks of programs.

For example, you can create functions dynamically, pass them as arguments to other functions, or return them as results from other functions. This flexibility enables developers to write concise and expressive code that takes advantage of JavaScript's functional capabilities.
