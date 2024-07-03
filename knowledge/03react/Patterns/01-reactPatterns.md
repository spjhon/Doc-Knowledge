---
sidebar_position: 1
---

# React Patterns

Esta es una lista de los patters que son estandar con React, tener en cuenta que hay un libro dedicado solo a eso asi que en este articulo solo me enfocare en los patters extraidos del gridder.

## Basic Patterns

- Functional Component

```javascript
import React from 'react';
// Functional Component
const MyComponent = (props) => {
  // You can use props to receive data from parent components
  // Component logic or state can be defined here
  return (
    // JSX representing the component's UI
    <div>
      <h1>Hello, {props.name}!</h1>
      {/* Additional JSX elements and content */}
    </div>
  );
};
export default MyComponent;
```

***

## Pattern de state comun

In functional React components, you can handle events using the `useState` hook to manage state and the event handler function. Here's a basic example of handling a button click event in a functional React component:

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  // State to store the button click count
  const [clickCount, setClickCount] = useState(0);
  // Event handler function for button click
  const handleButtonClick = () => {
    // Update the click count in the state
    setClickCount(clickCount + 1);
  };
  return (
    <div>
      <p>Button Click Count: {clickCount}</p>
      {/* Button with the onClick event */}
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
```

In this example:

1. `useState` is used to create a state variable `clickCount` and its corresponding setter function `setClickCount`.
2. The `handleButtonClick` function is the event handler for the button click. It updates the `clickCount` state by incrementing its current value.
3. The `onClick` attribute in the `<button>` element is set to the `handleButtonClick` function, so it will be called when the button is clicked.

This is a basic example, and you can adapt it for various events and more complex scenarios in your React functional components.

***

## Presentational Pattern

Este pattern es observado en el ejercicio del capitulo 04 de libro React 18 en el cual se utiliza un componente dividido en dos partes con el fin de tener un componente que se encargue de la logica y manipulacion de datos y otro solo para la presentacion de estos.

***

## Higher Order Components

La idea es tomar un componente y envolverlo en otro componete para devolver un componete mejorado, es el segundo ejemplo del chapter 4 de libro REACT 18 en donde se muestra por ejemplo la necesidad de agregar el mismo className a todos los componentes, lo que se hace es crear un componente con el className y que se convierta en una especie de envoltura para otros componentes.

```jsx
const withClassName = Component => props => (
 <Component {...props} className="my-class" />
)
```

- In the React community, it’s common to use the with prefix for HOCs.

***

## Function as child

Tambien del chapter 04, este pattern es util para la reutilizacio de un componente, mas detalles en el repositorio perteneciente al libro.

***

## Uncontrolled Components

Tambien del libro react18
