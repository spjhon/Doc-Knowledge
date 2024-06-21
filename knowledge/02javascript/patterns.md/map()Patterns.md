# Map() usefull patterns

Un `Map` en JavaScript es útil en diversas situaciones donde se necesita una colección de pares clave-valor. Aquí hay algunas circunstancias específicas donde un `Map` es particularmente ventajoso:

## 1. **Asociación de Claves y Valores**

Cuando necesitas asociar claves únicas a valores específicos, un `Map` es una solución ideal.

```javascript
let map = new Map();
map.set("nombre", "Juan");
map.set("edad", 30);
map.set("ocupacion", "Ingeniero");

console.log(map.get("nombre")); // salida: Juan
console.log(map.get("edad")); // salida: 30
```

## 2. **Claves de Cualquier Tipo**

Un `Map` permite utilizar cualquier tipo de datos como clave, no solo cadenas de texto. Esto incluye objetos, funciones y valores primitivos.

```javascript
let map = new Map();
let objKey = { id: 1 };
map.set(objKey, "valor asociado");

console.log(map.get(objKey)); // salida: valor asociado
```

## 3. **Preservación del Orden de Inserción**

Si necesitas iterar sobre los elementos en el orden en que fueron añadidos, un `Map` preserva este orden.

```javascript
let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (let [clave, valor] of map) {
  console.log(`${clave}: ${valor}`);
}
// salida:
// a: 1
// b: 2
// c: 3
```

## 4. **Frecuencia de Elementos**

Cuando necesitas contar la frecuencia de elementos en una colección, un `Map` puede ser muy útil.

```javascript
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let map = new Map();

for (let item of items) {
  if (map.has(item)) {
    map.set(item, map.get(item) + 1);
  } else {
    map.set(item, 1);
  }
}

console.log(map);
// salida: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```

## 5. **Implementación de Caches o Memorandos**

En algoritmos y optimizaciones, los `Maps` se utilizan comúnmente para implementar caches o memorandos para guardar resultados computacionales y evitar cálculos repetitivos.

```javascript
let fibonacci = (function () {
  let memo = new Map();
  function f(n) {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n);
    let result = f(n - 1) + f(n - 2);
    memo.set(n, result);
    return result;
  }
  return f;
})();

console.log(fibonacci(10)); // salida: 55
```

## 6. **Agrupación de Datos**

Si necesitas agrupar datos bajo una clave específica, un `Map` es ideal para esta tarea.

```javascript
let estudiantes = [
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Ana", curso: "Matemáticas" },
  { nombre: "Carlos", curso: "Historia" },
];

let map = new Map();

for (let estudiante of estudiantes) {
  if (!map.has(estudiante.curso)) {
    map.set(estudiante.curso, []);
  }
  map.get(estudiante.curso).push(estudiante.nombre);
}

console.log(map);
// salida: Map { 'Matemáticas' => ['Juan', 'Ana'], 'Historia' => ['Carlos'] }
```

### Conclusión

Utilizar un `Map` es útil y a menudo necesario cuando trabajas con datos donde las claves pueden ser de cualquier tipo, cuando necesitas preservar el orden de inserción de los elementos, o cuando realizas operaciones donde las asociaciones clave-valor son esenciales. Los `Maps` proporcionan una manera flexible y eficiente de manejar estas asociaciones en comparación con los objetos normales de JavaScript.
