---
sidebar_position: 7
---

# useReducer

---

## 📌 ¿Qué es `useReducer`?

`useReducer` es un **hook de React** que sirve para manejar estados complejos o múltiples transiciones de estado en un componente funcional. Es una alternativa a `useState`, especialmente cuando:

* El estado tiene **varias propiedades** relacionadas.
* Hay **varias maneras distintas de actualizar el estado**.
* Quieres centralizar la lógica de actualización en un solo lugar.
* Buscas tener un **control más predecible y mantenible** del estado, como en patrones tipo Redux.

De hecho, conceptualmente es muy similar a cómo Redux maneja su estado, pero de forma local a un componente.

---

## 📌 ¿Cómo funciona conceptualmente?

`useReducer` sigue un patrón basado en:

* **Un estado actual (`state`)**.
* **Una acción (`action`)** que describe cómo debería cambiar ese estado.
* **Una función reductora (`reducer`)** que recibe el estado actual y la acción, y devuelve un nuevo estado.

Es lo mismo que en programación funcional el patrón de `reduce` o el `Array.reduce` de JavaScript:

```js
array.reduce((acc, curr) => nuevoAcc, valorInicial)
```

Aquí:

* `state` → acumulador.
* `action` → valor actual.
* `reducer` → función reductora.
* `dispatch` → función que envía acciones.

---

## 📌 Sintaxis básica de `useReducer`

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

* **`reducer`**: función pura que recibe `state` y `action`, y devuelve el nuevo estado.
* **`initialState`**: estado inicial.
* **`state`**: valor actual del estado.
* **`dispatch`**: función para enviar acciones al reducer.

---

## 📌 Ejemplo práctico y detallado

### 📝 Estado con `useState`

Supón que tienes que manejar un contador con incremento, decremento y reset:

```javascript
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);
```

👉 Si bien funciona, imagina que ahora ese estado crece y tienes que manejar muchas acciones. Aquí entra `useReducer`.

### 📝 El mismo caso con `useReducer`

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

---

## 📌 ¿Qué ventajas tiene `useReducer`?

1. **Centraliza la lógica de cambio de estado** en una función pura (`reducer`).
2. Facilita la **trazabilidad de acciones**.
3. Mejor para **estados complejos o múltiples propiedades**.
4. Mejor escalabilidad si en el futuro quieres manejar **side effects** (por ejemplo, con `useReducer` + `useEffect` o migrar a Redux).
5. Ideal para situaciones donde las **acciones son distintas pero actúan sobre el mismo estado**.

---

## 📌 Flujo mental de `useReducer`

1. El componente usa `dispatch` para enviar una `action`.
2. `useReducer` pasa esa acción junto con el estado actual a la función `reducer`.
3. `reducer` devuelve el nuevo estado basado en la acción.
4. React actualiza el componente con ese nuevo estado.

---

## 📌 Función pura

La función `reducer` **debe ser pura**, es decir:

* No debe tener efectos secundarios.
* No debe modificar su input (`state`) directamente.
* Debe devolver siempre el mismo output para el mismo input.

Ejemplo de función pura:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    // ...
  }
}
```

---

## 📌 ¿Cuándo conviene usar `useReducer`?

✅ Cuando tienes:

* Estados con **estructuras complejas (objetos, arrays)**.
* Varias acciones que pueden cambiar el estado de diferentes formas.
* Quieres separar la lógica de actualización del estado del componente.

❌ No es necesario si:

* Solo tienes uno o dos valores de estado simples.
* Solo necesitas cambios de estado sencillos.

---

## 📌 Ejemplo con estado más complejo

Supón un formulario:

```javascript
const initialState = {
  name: '',
  email: '',
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'update_field':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'set_error':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
```

Para actualizar campos:

```javascript
dispatch({ type: 'update_field', field: 'name', value: 'Juan' });
dispatch({ type: 'set_error', error: 'El email es inválido' });
```

---

## 📌 useReducer vs useState

| `useState`                       | `useReducer`                                         |
| :------------------------------- | :--------------------------------------------------- |
| Fácil para estados simples       | Mejor para estados complejos o múltiples acciones    |
| Cambios de estado independientes | Cambios de estado centralizados en una sola función  |
| Menos código, más directo        | Más código, pero más organizado para casos complejos |

---

## 📌 Conclusión

`useReducer` te permite manejar de forma **más estructurada, predecible y escalable** estados y sus transiciones dentro de un componente de React, siguiendo una lógica basada en acciones. Es ideal cuando:

* Tienes **muchas acciones distintas** que afectan un mismo estado.
* El estado tiene **varias propiedades relacionadas**.
* Quieres una lógica de estado que sea **fácil de extender y mantener**.

---

Si quieres, puedo mostrarte cómo combinar `useReducer` con `useContext` para manejar estados globales ligeros (tipo Redux casero). ¿Te gustaría?
