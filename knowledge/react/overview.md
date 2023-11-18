---
sidebar_position: 1
---

# REACT OVERVIEW

React es una libreria que posee un DOM virtual con el cual puede renderizar componentes individualmente, al ser una libreria necesita librerias extra para su completa funcionalidad.

*Estas notas son extraidas de la pagina 1 de la documentacion oficial de react y son un ejemplo de como manipular lo que las funciones retornan y como agregar estilos y atributos a los HTML tags especiales llamados JSX.*

- Un componente en REACT es una funcion que retorna HTML al DOM virtual.

- Un componente no puede retormar mas de un tag, en caso de varios tags envolvelos en un wrapper or a fragment.

- Se recomienda aplicar (ejemplo en github examples-react) atomic design in order to create the components.

- Los componentes en REACT siempre deben de tener una letra mayuscula al principio para diferenciarlos de elementos HTML normales.

- Una diferencia entre el JSX con HTML es que hay que cerrar todos los tags, y que solo se puede devolver un solo componente (envoltura).

- Para agregar estilo se utiliza className, no se utiliza class como en html normalmente se haria.

- Gracias a javascript se le puede agregar datos dinamicos como en el siguiente ejemplo, esto es util cuando se extrae info desde un objeto:

```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

- Este es un ejemplo de como pasar atributos a un JSX tag

```jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

- Se puede almacenar jsx en variables y generar condicionales para que muestre uno u otro contenido, estas condiconales pueden ser incluso comparativos de tipo &&.

- Se puede utilizar map para mapear todos los elementos que se encuentren en objetos, vengan de funciones, fetch, etc. (siempre agregar un key)

- Se puede adicionar eventos y devolver estos eventos en el return

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```


- Si se llama el componente que use useState varias veces, habran varios estados diferentes.

- Las funciones que utilicen "use" se consideran "hooks".

- **Importante:** Para compartir estados entre componentes, SE DEBE DE MOVER EL STATE AL COMPONENTE SUPERIOR MAS CERCANO y los states pasan como props a cada boton y cada boton queda atado al state principal, a esto se le llama "lifting state up".

Para manejar MDX que es react components en markdown, consultar [MDX Official](https://mdxjs.com/)

**Importante**: Los children cuando se pasan al componente, solo se pasa el children el componente que manda el children, asi llega al componente y sigue derecho al menos que se le quiera hacer algo.

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!


Este es otro ejemplo, este es un ejemplo basico de state con botones

Este primer ejemplo es un solo componente (funcion que retorna jsx) que retorna un boton y utiliza el useState por medio de un eventHandler.

Este componente va solito:

```jsx
import { useState } from 'react';

export const MyButton = () => {
  
  const [count, setCount] = useState(2);

function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} >
      esto es un boton {count}
    </button>
  );
}

<MyButton />
```
import { useState } from 'react';

export const MyButton = () => {
  
  const [count, setCount] = useState(2);

function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
    <button onClick={handleClick} >
      esto es un boton {count}
    </button>
    </>
  );
}

<h4>Boton Solito</h4>
<MyButton />


Ahora este ejemplo es un componente (App) que llama el componente de arriba y utiliza el otro componente (Button2) que se encuentra como funcion dentro de app y renderiza desde app

```jsx
export const MyApp = () => {

  //Esta funcion es otro componente dentro del componente app
  function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
//Como se observa se utiliza el boton de mas arriba y el nuevo boton en el return.
  return (
    <div>
      <h6>Counters that update separately</h6>
      <MyButton />
      <MyButton2 />

    </div>
  );
}

<MyApp />
```

export const MyApp = () => {

  function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

  return (
    <div>
      <h4>Counters that update separately</h4>
      <MyButton />
      <MyButton2 />
    </div>
  );
}

<MyApp />

Se observa dos botones pero con state diferente, el siguiente ejemplo posee states independientes:

Se lleva el state a la app de donde se renderiza y se pasan los props a los componentes hijos.

```jsx
export const MyButton3 = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export const MyApp2 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h4>Counters that update together</h4>
      <MyButton3 count={count} onClick={handleClick} />
      <MyButton3 count={count} onClick={handleClick} />
    </div>
  );
}

<MyApp2 />

```

export const MyButton3 = ({ count, onClick }) => {
  return (
    <>
    <button onClick={onClick}>
      Clicked {count} times
    </button>
    </>
  );
}

export const MyApp2 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h4>Counters that update together</h4>
      <MyButton3 count={count} onClick={handleClick} />
      <MyButton3 count={count} onClick={handleClick} />
    </div>
  );
}

<MyApp2 />

El siguiente es un ejemplo de como importar un componente y utilizarlo en el mdx
```jsx
import Game from '@site/src/components/tick-toc.js';

import { StrictMode } from "react";

<StrictMode>
<Game />
</StrictMode>
```

El codigo se encuentra en tick-toc.js y es importado gracias a un feature de mdx (el @site)

import Game from '@site/src/components/tick-toc.js';

import { StrictMode } from "react";

<StrictMode>
<Game />
</StrictMode>

***
Este codigo de abajo es el principio del tutorial de react el cual muestra un ejemplo basico de como asignar props y children ademas de una muestra de validacion de props que recomendo el eslint de react.

import Board from '@site/src/components/tick-toc-build.js';

<StrictMode>
<Board />
</StrictMode>

***