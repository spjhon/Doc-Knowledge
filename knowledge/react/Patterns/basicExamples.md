## Como pasar datos dinamicos

- Gracias a javascript se le puede agregar datos dinamicos como en el siguiente ejemplo, esto es util cuando se extrae info desde un objeto:

```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

***

## Como pasar atributos

- Este es un ejemplo de como pasar atributos a un JSX tag

```jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

***

## Como pasar children

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

***

## Ejemplo basico de state con botones

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

Para manejar MDX que es react components en markdown, consultar [MDX Official](https://mdxjs.com/)

import MyButton from '@site/src/components/react-components/simpleButton.jsx';

### Este Boton tiene su propio state

<StrictMode>
<MyButton />
</StrictMode>

***

## Ejemplo de botones actualizandosen separadamente (Cada uno con su propio state)

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

import MyButton2 from '@site/src/components/react-components/simpleButton2.jsx';

### Este Boton tiene states independientes

<StrictMode>
<MyButton2 />
</StrictMode>

***

## Botones actualizandosen al mismo tiempo (Lifting the state up)

- **Importante:** Para compartir estados entre componentes, SE DEBE DE MOVER EL STATE AL COMPONENTE SUPERIOR MAS CERCANO y los states pasan como props a cada boton y cada boton queda atado al state principal, a esto se le llama "lifting state up".

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

import MyApp2 from '@site/src/components/react-components/liftingState.jsx';

### Este Boton tiene states sincronizados

<StrictMode>
<MyApp2 />
</StrictMode>

***

## Componente importado externamente

El siguiente es un ejemplo de como importar un componente y utilizarlo en el mdx

```jsx
import Game from '@site/src/components/tick-toc.js';

import { StrictMode } from "react";

<StrictMode>
<Game />
</StrictMode>
```

El codigo se encuentra en tick-toc.js y es importado gracias a un feature de mdx (el @site)
**Importante:** Ojo con la inmutabilidad de los estados, hacer copia mas no modificar.

import Game from '@site/src/components/tick-toc.jsx';

<StrictMode>
<Game />
</StrictMode>

***

Este codigo de abajo es el principio del tutorial de react el cual muestra un ejemplo basico de como asignar props y children ademas de una muestra de validacion de props que recomendo el eslint de react.

import Board from '@site/src/components/tick-toc-build.jsx';

<StrictMode>
<Board />
</StrictMode>

***