# Functional Patterns

## Matematicos

- Suma todos los argumentos que le llegue

```javascript
function sum(...arguments) {
  return args.reduce((accumulator, current) => accumulator + current, 0);
}

//Usague
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // Output: 15
```

- Negacion de funciones ya establecidas

```javascript
const not = partialLeft(compose, (x) => !x);
const even = (x) => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN);
odd(3) && isNumber(2); // => true
```

- Factorial (utilizando memoization)

```javascript
// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    // Positive integers only
    if (!(n in factorial)) {
      // If no cached result
      factorial[n] = n * factorial(n - 1); // Compute and cache it
    }
    return factorial[n]; // Return the cached result
  } else {
    return NaN; // If input was bad
  }
}

//Usague
factorial[1] = 1; // Initialize the cache to hold this base case.
factorial(6); // => 720
factorial[5]; // => 120; the call above caches this value
```
