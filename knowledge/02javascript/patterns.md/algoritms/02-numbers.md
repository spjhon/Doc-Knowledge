---
sidebar_position: 1
---

# Number Algoritms

## 1. Comparar dos numeros

```ts
function numberEquals(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) <= tolerance * Math.max(1, Math.abs(x), Math.abs(y));
}
```

Claro 👍, vamos directo y sin vueltas.

La función es esta:

```js
function numberEquals(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) <= tolerance * Math.max(1, Math.abs(x), Math.abs(y));
}
```

⏱️ Complejidad en tiempo (Big-O)

**O(1) — tiempo constante:**

**Por qué:**

* Solo hace un número fijo de operaciones:

  * Restas
  * Comparaciones
  * Llamadas a `Math.abs` y `Math.max`
* No hay bucles, recursión ni llamadas dependientes del tamaño de la entrada.

👉 Da igual si los números son pequeños o gigantes: **siempre tarda lo mismo**.

💾 Complejidad en espacio (Big-O)

**O(1) — espacio constante:**

**Por qué:**

* No crea estructuras de datos.
* Solo usa variables primitivas locales.
* No depende del tamaño de ningún input.

## 2. Numero Primo

```ts
function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n <= 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

| Tipo    | Complejidad |
| ------- | ----------- |
| Tiempo  | **O(√n)**   |
| Espacio | **O(1)**    |

## 3. Numeros Aleatorios

```ts
Math.random() * 100; // floats between 0 and 100
Math.random() * 25 + 5; // floats between 5 and 30
Math.random() * 10 - 100; // floats between -100 and -90
```
