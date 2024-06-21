# Set() Usefull Patterns

Un `Set` en JavaScript es útil en varias situaciones donde se necesita gestionar una colección de valores únicos. Aquí hay algunas circunstancias específicas donde un `Set` es particularmente ventajoso:

## 1. **Eliminación de Duplicados**

Cuando tienes un array con valores duplicados y quieres crear una colección de valores únicos, un `Set` es una solución eficiente.

```javascript
let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
let set = new Set(arrayConDuplicados);
let arraySinDuplicados = [...set];
console.log(arraySinDuplicados); // salida: [1, 2, 3, 4, 5]
```

## 2. **Comprobación de Existencia de Valores**

Si necesitas verificar rápidamente si un valor está presente en una colección, un `Set` proporciona una manera eficiente de hacerlo.

```javascript
let set = new Set(["apple", "banana", "orange"]);
console.log(set.has("banana")); // salida: true
console.log(set.has("grape")); // salida: false
```

## 3. **Operaciones de Conjunto**

`Set` facilita operaciones matemáticas comunes en teoría de conjuntos como unión, intersección y diferencia.

### Unión

```javascript
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let union = new Set([...setA, ...setB]);
console.log(union); // salida: Set { 1, 2, 3, 4, 5 }
```

### Intersección

```javascript
let intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // salida: Set { 3 }
```

### Diferencia

```javascript
let difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // salida: Set { 1, 2 }
```

## 4. **Almacenamiento de Colecciones de Valores Unicos**

Cuando estás gestionando una colección de elementos y necesitas asegurar que cada elemento es único, un `Set` es la estructura de datos adecuada.

```javascript
let set = new Set();
set.add("element1");
set.add("element2");
set.add("element1"); // 'element1' no se añadirá de nuevo

console.log(set.size); // salida: 2
```

## 5. **Mejora de Rendimiento en Grandes Colecciones**

Para colecciones grandes de datos, `Set` ofrece un rendimiento superior en operaciones de búsqueda y eliminación en comparación con arrays, ya que `Set` está optimizado para estas operaciones.

## Conclusión

Utilizar un `Set` es útil y a menudo necesario cuando trabajas con colecciones de datos donde la unicidad de los elementos es crucial, cuando necesitas realizar operaciones de conjuntos, o cuando buscas mejorar el rendimiento en la gestión de grandes volúmenes de datos.
