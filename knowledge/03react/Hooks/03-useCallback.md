# useCallback

## Ejemplo

### Ejemplo de `useCallback` en React

```javascript
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>{children}</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback memoizes the function, so it only changes if `count` changes

/*
CONSIDERACIONES DE useCallback

La razón principal para utilizar `useCallback` en `handleDelete` y no en `handleCreate` en tu ejemplo se relaciona con la optimización del rendimiento y la forma en que se pasan las funciones como props a los componentes hijos.

### Uso de `useCallback` en `handleDelete`:

1. **Memorización de Funciones:** `useCallback` se utiliza para memorizar la función `handleDelete` y evitar que se cree una nueva instancia de la función en cada renderizado. Esto es especialmente importante cuando `handleDelete` se pasa como prop a componentes hijos como `List` o `Task`.

2. **Prevención de Renderizados Innecesarios:** Sin `useCallback`, cada vez que `App` se renderiza, se crea una nueva referencia de `handleDelete`, lo cual puede causar que los componentes hijos que utilizan `handleDelete` se vuelvan a renderizar innecesariamente. Usando `useCallback`, la referencia de `handleDelete` se mantiene constante siempre que sus dependencias (`todoList`) no cambien.

### No Uso de `useCallback` en `handleCreate`:

1. **No Pasado como Prop:** En tu ejemplo, `handleCreate` no se pasa como prop a ningún componente hijo. Se utiliza directamente dentro del componente `App`. Por lo tanto, no hay riesgo de causar renderizados innecesarios en componentes hijos debido a la recreación de la función.

2. **Simplicidad:** Si una función no se pasa como prop y no tiene un impacto significativo en el rendimiento, es más simple no envolverla en `useCallback`. Esto evita una complejidad innecesaria en el código.

### Consideraciones de Rendimiento:

- **Renderizados Condicionales:** `useCallback` es útil cuando la función se pasa como prop a componentes memoizados (usando `memo`). Esto ayuda a prevenir que esos componentes se rendericen innecesariamente cuando la función se vuelve a crear en cada renderizado del componente padre.

En resumen, `useCallback` se utiliza en `handleDelete` para evitar la recreación de la función y prevenir renderizados innecesarios en componentes hijos. No es necesario usar `useCallback` en `handleCreate` porque no se pasa como prop a ningún componente hijo, manteniendo el código más simple y limpio.
*/
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default Counter;
```

### Explicación Detallada

1. **Importaciones y Estado Inicial**:

   ```javascript
   import React, { useState, useCallback } from "react";
   ```

   Primero, importamos `useState` y `useCallback` de React. `useState` nos permite manejar el estado en un componente funcional. `useCallback` nos permite memorizar una función para que no cambie a menos que sus dependencias cambien.

2. **Componente `Button`**:

   ```javascript
   const Button = React.memo(({ onClick, children }) => {
     console.log("Button rendered");
     return <button onClick={onClick}>{children}</button>;
   });
   ```

   Aquí, definimos un componente `Button` que usa `React.memo`. `React.memo` es una función de orden superior que memoiza un componente funcional. Esto significa que el componente `Button` solo se volverá a renderizar si sus propiedades (`props`) cambian.

3. **Componente `Counter`**:

   ```javascript
   const Counter = () => {
     const [count, setCount] = useState(0);
     const [text, setText] = useState('');
   ```

   El componente `Counter` maneja dos estados: `count` (un contador) y `text` (un campo de texto).

4. **Uso de `useCallback`**:

   ```javascript
   const increment = useCallback(() => {
     setCount((c) => c + 1);
   }, [count]);
   ```

   Aquí es donde usamos `useCallback`. La función `increment` se memoiza, lo que significa que solo se creará una nueva versión de la función si `count` cambia. Esto es útil para evitar renderizaciones innecesarias del componente `Button`, ya que la referencia a `increment` no cambiará a menos que `count` cambie.

5. **Manejo del Campo de Texto**:

   ```javascript
   const handleChange = (event) => {
     setText(event.target.value);
   };
   ```

   Esta función maneja el cambio en el campo de texto, actualizando el estado `text`.

6. **Renderizado del Componente**:

   ```javascript
   return (
     <div>
       <h1>{count}</h1>
       <Button onClick={increment}>Increment</Button>
       <input type="text" value={text} onChange={handleChange} />
     </div>
   );
   ```

   Finalmente, renderizamos el componente `Counter`, que incluye el `Button` y un campo de texto.

### Conclusión en Términos Sencillos

`useCallback` es una herramienta en React que ayuda a evitar que funciones cambien a menos que realmente sea necesario. Piensa en `useCallback` como una forma de congelar una función en el tiempo. Solo si algo importante (como un valor del estado) cambia, `useCallback` descongelará la función, la actualizará y luego la volverá a congelar. Esto puede hacer que tu aplicación sea más rápida porque evita que algunas partes de tu aplicación se actualicen innecesariamente.

En palabras más simples: `useCallback` ayuda a que tu aplicación no trabaje más de la cuenta haciendo el mismo trabajo una y otra vez.
