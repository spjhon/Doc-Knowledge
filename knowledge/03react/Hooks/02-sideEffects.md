---
sidebar_position: 2
---

# Side Effects

En React, los "side effects" (efectos secundarios) son operaciones que afectan algo fuera del alcance de la función en la que ocurren. Estos pueden incluir operaciones como manipulación del DOM, solicitudes de red, suscripciones, timers, y almacenamiento en caché, entre otros. Los efectos secundarios son importantes porque permiten que la aplicación interactúe con el mundo exterior, pero también deben manejarse cuidadosamente para evitar comportamientos inesperados o problemas de rendimiento.

## Tipos comunes de Side Effects

1. **Manipulación del DOM**: Directamente cambiar elementos del DOM.
2. **Solicitudes de red**: Realizar llamadas a APIs para obtener datos.
3. **Suscripciones**: Escuchar eventos o datos en tiempo real.
4. **Timers**: Uso de `setTimeout` o `setInterval`.
5. **Almacenamiento en caché**: Guardar datos en `localStorage`, `sessionStorage`, etc.
6. **Integraciones de terceros**: Usar bibliotecas externas que interactúan con el DOM o realizan solicitudes de red.

## Cómo manejar los Side Effects en React

En React, los side effects se manejan principalmente mediante el hook `useEffect`. Este hook permite ejecutar código después de que el componente ha sido renderizado. Aquí hay un desglose de cómo usar `useEffect` para manejar efectos secundarios:

### Uso Básico de `useEffect`

```javascript
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Código de efecto secundario aquí
    console.log('Componente montado o actualizado');
  });

  return <div>Hola Mundo</div>;
};
```

En este ejemplo, el código dentro de `useEffect` se ejecuta después de cada renderizado del componente.

### Dependencias en `useEffect`

Puedes controlar cuándo se ejecuta el efecto secundario pasando un array de dependencias como segundo argumento de `useEffect`. El efecto se ejecutará solo si alguna de las dependencias ha cambiado.

```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count ha cambiado a: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

### Limpiar Efectos

Algunos efectos secundarios, como suscripciones o timers, necesitan ser limpiados para evitar fugas de memoria. `useEffect` puede devolver una función de limpieza que se ejecutará cuando el componente se desmonte o antes de que se vuelva a ejecutar el efecto.

```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Intervalo activo');
    }, 1000);

    // Función de limpieza
    return () => {
      clearInterval(interval);
      console.log('Intervalo limpiado');
    };
  }, []);

  return <div>Hola Mundo</div>;
};
```

## Buenas Prácticas

1. **Mantén los efectos simples**: Evita hacer demasiadas cosas dentro de `useEffect`. Si es necesario, divide los efectos en múltiples `useEffect`.
2. **Cuida las dependencias**: Asegúrate de incluir todas las dependencias necesarias para evitar comportamientos inesperados.
3. **Limpia los efectos**: Siempre limpia los efectos que requieren limpieza (suscripciones, timers, etc.) para evitar fugas de memoria.
4. **Usa `useEffect` correctamente**: No uses `useEffect` para lógica que puede ser resuelta con renderizado condicional o memoización.

## Resumen

Los side effects en React son operaciones que afectan el mundo externo y se manejan principalmente con el hook `useEffect`. Este hook permite ejecutar código después de que el componente se haya renderizado y ofrece mecanismos para controlar cuándo ejecutar los efectos y cómo limpiarlos cuando ya no son necesarios. Seguir buenas prácticas en el manejo de efectos secundarios asegura que las aplicaciones React sean eficientes y libres de errores.

***

Here's a brief explanation of why you might use `useEffect` for adding event listeners:

1. **Lifecycle Management:** The `useEffect` hook allows you to manage the lifecycle of your component. It is executed after the initial render and can be used for tasks that need to occur after the component has been mounted.

2. **Avoiding Memory Leaks:** If you add event listeners directly in the component body, they may accumulate if not properly cleaned up. `useEffect` provides a way to define cleanup functions, helping you avoid memory leaks by removing event listeners when the component is unmounted.

Here's an example of how you might use `useEffect` to add and clean up an event listener:

```jsx
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
/*La función handleEvent es el handler que define cómo debe reaccionar tu componente cuando se dispare el evento someEvent. Esta función se define dentro del useEffect para asegurar que cada vez que el efecto se ejecute, se utilice la misma referencia de función para añadir y remover el event listener.*/
    const handleEvent = (event) => {
      // Handle the event here
    };

    // Add event listener
    window.addEventListener('someEvent', handleEvent);

    // Cleanup function
    return () => {
      // Remove event listener when component is unmounted
      window.removeEventListener('someEvent', handleEvent);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  // Component rendering logic...

  return (
    // JSX for your component
  );
};

export default MyComponent;
```

In this example, the event listener is added when the component mounts, and it is removed when the component is unmounted. The empty dependency array (`[]`) ensures that the effect runs only once after the initial render.

By using `useEffect` in this way, you can manage side effects more effectively in your React components.
