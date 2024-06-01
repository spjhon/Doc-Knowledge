# Asyncronous Patterns

Medir el tiempo de ejecucion de una funcion

```javascript
let startTime = Date.now();
reticulateSplines(); // Do some time-consuming operation
let endTime = Date.now();
console.log(`Spline reticulation took ${endTime - startTime}ms.`);
```
