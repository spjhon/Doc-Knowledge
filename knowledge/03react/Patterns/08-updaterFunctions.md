---
sidebar_position: 8
---

# Updater Functions useState

Buenísima pregunta — te lo explico claro, desde lo esencial:

---

## 📌 ¿Qué son las *updater functions* en React?

Son funciones que puedes pasar al `setState` (o al `set` de un `useState`) en lugar de pasar directamente el nuevo valor.
Estas funciones reciben el **estado anterior** como argumento y retornan el nuevo estado.

👉 Es una forma de actualizar el estado **basada en su valor anterior**, garantizando que React tenga siempre el dato correcto, incluso si hay actualizaciones en cola (React a veces agrupa varias actualizaciones de estado antes de renderizar, y ahí es donde las *updater functions* son útiles).

---

## 📌 Ejemplo básico

```jsx
const [count, setCount] = useState(0);

// Usando una updater function
const incrementar = () => {
  setCount(prevCount => prevCount + 1);
};
```

Aquí `prevCount` es el valor actual de `count` en ese instante, y tú defines el nuevo valor basado en él.

---

## 📌 ¿Por qué son importantes?

Porque a veces React **agrupa actualizaciones de estado**, y si usas directamente `setCount(count + 1)` en varias llamadas consecutivas, podría no actualizarse correctamente.

Ejemplo de problema:

```jsx
setCount(count + 1);
setCount(count + 1);
```

Si `count` vale 0, ambos `setCount` leen 0 y ambos intentan poner 1.
Resultado final: `count === 1` en lugar de 2.

✅ Solución con *updater functions*:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Aquí, el primer `prev` será 0, se vuelve 1, y el segundo `prev` ya será 1.

---

## 📌 Resumen

| Sin *updater function*                                    | Con *updater function*                                                              |
| :-------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| Se pasa directamente el nuevo valor                       | Se pasa una función que recibe el valor anterior                                    |
| Puede provocar errores si hay actualizaciones simultáneas | Siempre se basa en el valor más reciente y es seguro para actualizaciones en cadena |

---

## 📌 ¿Cuándo usarlas?

👉 Siempre que el nuevo estado dependa del estado anterior.
Ejemplos:

* Contadores
* Agregar o eliminar elementos de un array
* Cambiar propiedades de un objeto que depende de su valor actual

---

## 📌 Bonus: ejemplo con arrays

```jsx
const [list, setList] = useState([]);

const agregarItem = (item) => {
  setList(prevList => [...prevList, item]);
};
```

---

Si quieres te hago un ejemplo más complejo o visual con un componente interactivo, ¿quieres?
