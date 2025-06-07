---
sidebar_position: 4
---

# 4. Pure Functions

---

## 📌 ¿Qué es una función pura?

Una **función pura** es una función que cumple con **dos reglas muy importantes**:

1. **Siempre devuelve el mismo resultado para los mismos argumentos.**
   → No importa cuántas veces la llames, si le pasas los mismos parámetros, siempre devuelve lo mismo.

2. **No tiene efectos secundarios.**
   → No modifica nada fuera de su scope. Es decir:

   * No cambia variables globales.
   * No modifica objetos externos.
   * No hace peticiones HTTP.
   * No escribe en el DOM.
   * No imprime en consola.
   * No altera el estado de ningún componente ni base de datos.

👉 Solo trabaja con sus argumentos y devuelve un valor basado en ellos.

---

## 📌 Ejemplos de funciones puras y no puras

### ✅ Función pura

```js
function sumar(a, b) {
  return a + b;
}
```

Siempre que le pases 2 y 3, te devolverá 5. No hace nada más.

---

### ❌ Función impura

```js
let contador = 0;

function incrementar() {
  contador++;
}
```

Esta función **modifica una variable fuera de su scope** → tiene efectos secundarios.

---

## 📌 ¿Por qué son importantes en React?

React está basado en **componentes como funciones puras** para predecibilidad, facilidad de testing y rendimiento.
Cuando usas **componentes funcionales** o renders en React:

* **Deben comportarse como funciones puras:**
  Cuando reciben las mismas `props` y `state`, deben renderizar lo mismo.

### ✅ Ejemplo correcto

```jsx
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}
```

Si `nombre` es `"Carlos"`, siempre renderiza `<h1>Hola, Carlos</h1>`.

---

### ❌ Ejemplo impuro

```jsx
let saludoExtra = " ¿Cómo estás?";

function Saludo({ nombre }) {
  saludoExtra = "Todo bien?";
  return <h1>Hola, {nombre}{saludoExtra}</h1>;
}
```

Este componente **modifica una variable global**, así que su resultado ya depende de más que solo sus props.

---

## 📌 ¿Qué cosas **no son puras** en React?

A veces necesitas efectos secundarios (consultar una API, modificar el DOM, o cambiar el título del documento).
Para eso React usa:

* **useEffect** → permite manejar efectos secundarios de forma controlada.
* **useState** → para manejar estado local sin violar la pureza de la función principal de render.

---

## 📌 Resumen rápido

| Característica                | Función Pura | Función Impura |
| :---------------------------- | :----------- | :------------- |
| Mismo input → mismo output    | ✅            | ❌              |
| Sin efectos secundarios       | ✅            | ❌              |
| Fácil de testear              | ✅            | ❌              |
| Depende de variables externas | ❌            | ✅              |

---

Si quieres, te puedo hacer una analogía o ejemplo más aplicado a React, ¿te gustaría?
