---
sidebar_position: 1
---

# UseEffect

- **Un effect es cualquier cosa que necesite ocurrir después de que React haya renderizado el DOM.**

Use effect es un Hook muy importante ya que es el encargado de modificar las fases del ciclo de vida del componente para poder manejar efectos secundarios, los sideEffects son tratados en este documento y a continuacion se explica el ciclo de vida del componente:

Claro, en React los componentes pasan por varias fases en su ciclo de vida. En las versiones más recientes de React, las fases se gestionan mediante hooks como `useEffect`, pero es útil entender las fases clásicas para comprender cómo funciona React bajo el capó.

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
  // Código que se ejecuta al montar el componente
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
