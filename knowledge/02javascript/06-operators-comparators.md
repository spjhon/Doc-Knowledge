---
sidebar_position: 6
---

# Comparators and operators

In JavaScript, the && operator is a logical AND operator. It returns true if both operands are true, and false otherwise. Here are the possible combinations:

- **true && true returns true**
- **true && false returns false**
- **false && true returns false**
- **false && false returns false**

In JavaScript, the && operator is often used in conditional statements and expressions to ensure that multiple conditions are met before executing a certain block of code. If the left operand is false, the right operand is not even evaluated because the result will always be false regardless. This is known as short-circuit evaluation.

## Falsy values

In JavaScript, the following values are considered falsy:

1. **false**: The boolean value `false`.
2. **0**: The number `0`, whether integer or floating-point.
3. **-0**: Negative zero, although it's rare to encounter this.
4. **0n**: BigInt zero, if you're using BigInts.
5. **"":** An empty string.
6. **null**: The absence of any value or object.
7. **undefined**: Denotes a variable that has not been assigned a value, or an object property that does not exist.
8. **NaN**: Stands for "Not a Number," usually resulting from invalid arithmetic operations or type conversion attempts.

These values are considered falsy because when coerced to a boolean, they evaluate to `false`. For example:

```javascript
if (0) {
  // This code block won't execute because 0 is falsy
  console.log("This won't be printed");
}

if (null) {
  // This code block won't execute because null is falsy
  console.log("Neither will this");
}
```

It's important to be aware of falsy values, especially when using conditional statements or evaluating expressions that might return unexpected results if you're not accounting for falsy values properly.

## Bitwise operators

In JavaScript, there are bitwise operators that allow manipulation of individual bits within numbers. These operators work on 32-bit signed integers. Here are the bitwise operators available in JavaScript:

1. **Bitwise AND (&)**: Returns a 1 in each bit position where both operands have a 1.

   Example:

   ```javascript
   let result = 5 & 3; // This will result in 1
   ```

2. **Bitwise OR (|)**: Returns a 1 in each bit position where at least one operand has a 1.

   Example:

   ```javascript
   let result = 5 | 3; // This will result in 7
   ```

3. **Bitwise XOR (^)**: Returns a 1 in each bit position where only one of the operands has a 1.

   Example:

   ```javascript
   let result = 5 ^ 3; // This will result in 6
   ```

4. **Bitwise NOT (~)**: Flips the bits of its operand.

   Example:

   ```javascript
   let result = ~5; // This will result in -6
   ```

5. **Left Shift (`<<`)**: Shifts the bits of its first operand to the left by the number of positions specified by the second operand.

   Example:

   ```javascript
   let result = 5 << 1; // This will result in 10
   ```

6. **Sign-propagating Right Shift (>>)**: Shifts the bits of its first operand to the right by the number of positions specified by the second operand. The sign bit is preserved.

   Example:

   ```javascript
   let result = 5 >> 1; // This will result in 2
   ```

7. **Zero-fill Right Shift (>>>)**: Similar to the sign-propagating right shift, but the bits shifted in from the left are always zero.

   Example:

   ```javascript
   let result = -5 >>> 1; // This will result in 2147483645
   ```

These operators can be useful in certain low-level programming tasks or in situations where you need to perform bitwise operations for specific algorithms or optimizations. However, they are not commonly used in everyday JavaScript programming.
