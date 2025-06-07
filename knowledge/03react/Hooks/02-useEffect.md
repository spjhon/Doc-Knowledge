---
sidebar_position: 2
---

# UseEffect

**If you do need Effects to synchronize with external systems.**, Keep in mind that modern frameworks provide more efficient built-in data fetching mechanisms than writing Effects directly in your components.

**OJO**: mientras menos useEffect mejor:  When you update the state, React will first call your component functions to calculate what should be on the screen. Then React will “commit” these changes to the DOM, updating the screen. Then React will run your Effects, entonces hay que tener cuidado cuando se utiliza un effect o se crea un side effect.

- **Un effect es cualquier cosa que necesite ocurrir después de que React haya renderizado el DOM.**

Use effect es un Hook muy importante ya que es el encargado de modificar las fases del ciclo de vida del componente para poder manejar efectos secundarios, los sideEffects son tratados en este documento y a continuacion se explica el ciclo de vida del componente:

Claro, en React los componentes pasan por varias fases en su ciclo de vida. En las versiones más recientes de React, las fases se gestionan mediante hooks como `useEffect`, pero es útil entender las fases clásicas para comprender cómo funciona React bajo el capó.

***

## Fases del Ciclo de Vida de un Componente en React

### 1. **Montaje (Mounting)**

Esta fase ocurre cuando un componente se crea y se inserta en el DOM.

- **componentWillMount (UNSAFE_componentWillMount)**:
  - Se llama justo antes de que el componente se monte.
  - En los nuevos proyectos, es recomendable evitar su uso porque se considera inseguro.

- **componentDidMount**:
  - Se llama inmediatamente después de que el componente se monte.
  - Aquí es donde típicamente se realizan las solicitudes de datos (fetching) o se inicializan suscripciones.

En los componentes funcionales con hooks, `useEffect` con una lista de dependencias vacía (`[]`) emula `componentDidMount`.

```javascript
useEffect(() => {
  // Código que se ejecuta despues de montar el componente
}, []);

//OJO: Omitir el array de dependencias en useEffect hará que el efecto se ejecute en cada renderizado
```

#### 2. **Actualización (Updating)**

Esta fase ocurre cuando un componente recibe nuevas props o cambia su estado.

- **componentWillReceiveProps (UNSAFE_componentWillReceiveProps)**:
  - Se llama cuando el componente recibe nuevas props.
  - En los nuevos proyectos, es recomendable evitar su uso porque se considera inseguro.

- **shouldComponentUpdate**:
  - Se llama antes de renderizar con nuevas props o estado.
  - Devuelve `true` o `false` para indicar si el componente debe actualizarse.

- **componentWillUpdate (UNSAFE_componentWillUpdate)**:
  - Se llama justo antes de que el componente se actualice.
  - En los nuevos proyectos, es recomendable evitar su uso porque se considera inseguro.

- **componentDidUpdate**:
  - Se llama inmediatamente después de que el componente se actualice.
  - Útil para operar sobre el DOM en respuesta a cambios.

En los componentes funcionales con hooks, `useEffect` con una lista de dependencias puede emular `componentDidUpdate`.

```javascript
useEffect(() => {
  // Código que se ejecuta cuando 'prop' o 'state' cambian
}, [prop, state]);
```

### 3. **Desmontaje (Unmounting)**

Esta fase ocurre cuando un componente se elimina del DOM.

- **componentWillUnmount**:
  - Se llama justo antes de que un componente se desmonte y destruya.
  - Aquí es donde se limpian suscripciones, temporizadores, y cualquier recurso externo.

En los componentes funcionales con hooks, la función de limpieza retornada desde `useEffect` emula `componentWillUnmount`.

```javascript
useEffect(() => {
  // Código de efecto

  return () => {
    // Código de limpieza
  };
}, []);
```

### 4. **Error Handling**

Esta fase ocurre cuando hay un error durante la fase de renderizado, en un método del ciclo de vida, o en el constructor de cualquier componente hijo.

- **componentDidCatch**:
  - Captura errores en cualquier componente hijo y muestra una UI de respaldo o realiza algún registro de errores.

## Ejemplo Completo con Componentes de Clase y Funcionales

### Clase

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  // 1. Montaje
  componentDidMount() {
    console.log('Component mounted');
    // Fetch de datos, configuración de suscripciones, etc.
  }

  // 2. Actualización
  componentDidUpdate(prevProps, prevState) {
    if (this.props.someValue !== prevProps.someValue) {
      console.log('Component updated');
      // Operar sobre el DOM o hacer fetch de datos
    }
  }

  // 3. Desmontaje
  componentWillUnmount() {
    console.log('Component will unmount');
    // Limpiar suscripciones, temporizadores, etc.
  }

  render() {
    return <div>{this.props.someValue}</div>;
  }
}

export default MyComponent;
```

### Funcional

```javascript
import React, { useEffect } from 'react';

function MyComponent({ someValue }) {
  // 1. Montaje
  useEffect(() => {
    console.log('Component mounted');
    // Fetch de datos, configuración de suscripciones, etc.

    return () => {
      // 3. Desmontaje
      console.log('Component will unmount');
      // Limpiar suscripciones, temporizadores, etc.
    };
  }, []);

  // 2. Actualización
  useEffect(() => {
    console.log('Component updated');
    // Operar sobre el DOM o hacer fetch de datos
  }, [someValue]); // Se ejecuta cuando 'someValue' cambia

  return <div>{someValue}</div>;
}

export default MyComponent;
```

Estas fases permiten a los desarrolladores gestionar de manera eficiente el ciclo de vida de los componentes y sus efectos secundarios en aplicaciones React.

## Que variables van dentro de useEffect?

Dentro de React, el array especial que se pasa como segundo argumento a `useEffect` se conoce comúnmente como el "array de dependencias" o "dependency array" en inglés. Este array tiene un propósito específico: determinar cuándo el efecto debe ejecutarse nuevamente.

***

### Tipos de Variables en el Array de Dependencias

Las variables que generalmente se colocan dentro del array de dependencias son:

1. **Variables de Estado (`useState`)**:
   - Cuando una variable de estado se coloca en el array de dependencias, el efecto se ejecutará cada vez que esa variable cambie.

   ```javascript
   useEffect(() => {
     // Efecto que se ejecuta cuando 'count' cambia
   }, [count]);
   ```

2. **Propiedades de Props**:
   - Si una propiedad de `props` se utiliza dentro del efecto y se espera que el efecto responda a cambios en esa propiedad, se debe incluir en el array de dependencias.

   ```javascript
   useEffect(() => {
     // Efecto que se ejecuta cuando 'data' cambia
   }, [props.data]);
   ```

3. **Referencias a Funciones o Variables de Ámbito Externo**:
   - Si el efecto utiliza funciones o variables que provienen de un ámbito exterior (por ejemplo, funciones definidas fuera del componente), estas deben incluirse en el array de dependencias si cambian y el efecto debe responder a esos cambios.

   ```javascript
   useEffect(() => {
     // Efecto que se ejecuta cuando 'handleResize' cambia
   }, [handleResize]);
   ```

***

### Uso Correcto del Array de Dependencias

- **Array Vacío (`[]`)**: Indica que el efecto se ejecutará solo una vez, después del primer renderizado del componente (equivalente a `componentDidMount` en clases).

- **Omitido**: Si no se proporciona el array de dependencias, el efecto se ejecutará después de cada renderizado y re-renderizado del componente (equivalente a `componentDidUpdate` en clases).

***

## Restricciones de useEffect

- No se puede return numbers
- No se puede return strings
- No se puede utilizar async await dentro de useEffect
- Si puede retornar funciones

***

## Cuando utilizar un effect

Los eventos como `click` generalmente se manejan directamente en el JSX utilizando propiedades como `onClick`. Sin embargo, hay ciertos tipos de eventos y situaciones en las que manejar eventos dentro de `useEffect` es más apropiado. Aquí algunos ejemplos:

### Eventos Globales

1. **Eventos de Teclado**: Por ejemplo, para detectar cuando se presiona una tecla específica en toda la aplicación.

    ```javascript
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
          // Handle Escape key press
        }
      };

      window.addEventListener('keydown', handleKeyPress);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    ```

2. **Eventos de Redimensionamiento (resize)**: Para manejar cambios en el tamaño de la ventana.

    ```javascript
    useEffect(() => {
      const handleResize = () => {
        // Handle window resize
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    ```

3. **Eventos de Desplazamiento (scroll)**: Para detectar desplazamientos de la ventana.

    ```javascript
    useEffect(() => {
      const handleScroll = () => {
        // Handle window scroll
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    ```

### Eventos Personalizados

1. **Eventos personalizados**: Si necesitas crear y escuchar eventos personalizados en tu aplicación.

    ```javascript
    useEffect(() => {
      const handleCustomEvent = (event) => {
        // Handle custom event
      };

      window.addEventListener('myCustomEvent', handleCustomEvent);

      return () => {
        window.removeEventListener('myCustomEvent', handleCustomEvent);
      };
    }, []);
    ```

### Eventos en Elementos que no están en el JSX

1. **Eventos en elementos no React**: Si necesitas manejar eventos en elementos que no están directamente en tu JSX de React (por ejemplo, elementos creados o manipulados por bibliotecas de terceros).

    ```javascript
    useEffect(() => {
      const someElement = document.getElementById('someElement');
      
      const handleEvent = (event) => {
        // Handle event on someElement
      };

      if (someElement) {
        someElement.addEventListener('someEvent', handleEvent);
      }

      return () => {
        if (someElement) {
          someElement.removeEventListener('someEvent', handleEvent);
        }
      };
    }, []);
    ```

### Resumen

Usar `useEffect` para añadir event listeners es útil para manejar eventos que afectan a toda la ventana o que no están directamente relacionados con elementos específicos del JSX. Esto incluye eventos globales del navegador, eventos personalizados y eventos en elementos que no están directamente dentro del JSX de React. Por otro lado, eventos comunes en elementos específicos, como `click` en un botón, se manejan directamente en el JSX por simplicidad y claridad.

## Conclusiones

El array de dependencias en `useEffect` es una herramienta poderosa para controlar cuándo un efecto debe ejecutarse, asegurando así un comportamiento eficiente y reactivo en las aplicaciones React. Es crucial colocar las variables adecuadas en este array para garantizar el comportamiento esperado del efecto en respuesta a cambios específicos en el estado, props o variables externas utilizadas dentro del componente.


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
