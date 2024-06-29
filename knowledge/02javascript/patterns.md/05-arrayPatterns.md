# Utiles Patterns para arrays

## Append an array to another

Con apply():

```javascript
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]
```

Con el spread operator:

```javascript
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.log(array); // ["a", "b", 0, 1, 2]
```
