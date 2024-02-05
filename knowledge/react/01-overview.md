---
sidebar_position: 1
---

# REACT Overview

import { useState } from 'react';
import { StrictMode } from "react";

React es una libreria que posee un DOM virtual con el cual puede renderizar componentes individualmente, al ser una libreria necesita librerias extra para su completa funcionalidad.

***

## Basics

- La finalidad de react es utilizar functions y el sistema de import y exports de javascript para retornar partes de html con extras que se pueden observar en el object al hacer un render (se utiliza react.createElement) por parte de la libreria REACT.

Los primeros pasos se explican en el primer ejercicio del curso Grider en donde se explica como se manejar las curlyes y el paso de props

- Creacion de projecto (vite)
- Como react se importa y se inyecta en el projecto
- Que es un componente y sus dos partes principales
- El JSX, reglas y la diferencia y las reglas para cuando se escribe JSX en el return del componente
- Se recomienda saber como funciona el sistema de imports y exports de javascript
- Como reutilizar un componente y que este componente se adapte a la forma que uno desea y estos deseos se comunican a travez del sistema de props.
- Conditional rendering
- Utilizacion de una libreria para el estilizado llamada Bulma
- Se explica la jerarquia de los componente y que es un componente padre y que es un componente children
- Introduccion a destructuring

**

- **Donde encontrar ejemplos?:**

- Exercise 01 and 02 from react examples that comes form the official React Docs [Link](https://react.dev/learn)
- Exercise 01 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/001-Vite-basics/README.md)
- Exercise 02 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/002-Vite-Pads(basic%20components%20and%20pops)/README.md)

***

## State en React

En react se maneja el sistema de states para poder rastrear el estado de un componente en un determinado momento o debido a las acciones de un usuario

- Uso basico de useState
- INMUTABILIDAD DEL STATE Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre.
- Utilizacion del .map para el mapeo de elementos.
- Como pasar imagenes a un objeto para ser manipuladas
- Sistema de eventos y el sistema de state
- Como utilizar y donde poner handleClicks
- Component lifecicle
- Re-rendering of a component
- fetching con axios
- inputs patterns
- event object management
- se recomienda saber sobre los HTTP (Hypertext Transfer Protocol) status codes and HTTP en general [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- En las diapositivas de grider desde la 23 hasta la 30 del repositorio de grider se explica como modificar arrays y objects cuando estos estan en el state
- Tener en cuenta que hay procedimientos para add, update, delete etc diferentes tanto para arrays como para objects.
- Collapsing two handlers into one

**

- **Donde encontrar ejemplos?:**

- Exercise 03 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/003-Vite-Animals(basic%20useState)/README.md)
- Exercise 04 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/004-Vite-Pics(axios)/README.md)
- Exercise 05 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-Books(add%20render%20elements)/README.md)
- Inmutabilidad del state y como hacer un update correcto con el state [Link](https://state-updates.vercel.app/)

***

## useEffect for fetching

- json server
- useEffect for fetching
- Los tres argumentos para el [] del use effect
- Uso de condicionales &&, ||, or.
- Basic CRUD
- Data persistence (with the use of api.html to simulate request and responses)

**

- **Donde encontrar ejemplos?:**
- Exercise 05-1 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-BooksConApi(Persistent%20Data)/README.md)

***

## Context for props

El sistema de context es simple, es crear un provider que puede ser llamado desde cualquier componente gracias al useContext hook

- Introduccion al sistema de context
- Introduccion a centralized store
- App vs Component state

**

- **Donde encontrar ejemplos?:**
- Exercise 05-2 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-BooksConContext/README.md)

***

## Tips acerca de useRef

Se utiliza para hacer referencia aun elemento del DOM desde el elemento que se utiliza

***

## Tips Acerca de Routing, Navigation, Reusability

***

## Tips acerca de Reducers

- Tambien produce state pero es mas utilizado para con componentes que esten relacionados entre si.
- De acuerdo al ejemplo de grider es cuando es cuando un state esta dentro de otro
- El dispatch es una funcion que retorna el nuevo state asi que:
- Lo que sea que retorne el dispatch va a ser el nuevo state
- Si retorna nada, pues el state va a ser undefined
- No async/await, no request, no promises, no outside variables
- Si se desea resetear un state pues se retorna un objeto nuevo con valores reseteados
- Siempre meter la logica en el reducer y dejar el dispatch y el payload lo mas limpio posible

### Enorme consejo

- Ponga toda la logica de la actualizacion de los states dentro del reducer mas no en el dispach o en el payload ya que se puede equivoar otro dev al escribir toda la logica cada vez que haga un dispatch
- Lo mas recomendable es mandar a travez del payload solo los datos desnudos mas no mandar logica alguna.

***

## Tips acerca de REDUX

En redux existen slices y la store

- De por si una app tiene una sola store y es donde estan guardados todos los states
- los componentes que se suscriban a la store va a ser re-renderizados cuando el respectivo state cambie y para eso es els useSelector
- Se puede utilizar el metodo getState() para ver que hay dentor de la store
- cuando se esta disenando el state para redux pensar en el derived state: Values that we can calculate using existing state.
- **CONSEJO PARA NEXT JS:** fetch data in server components and mutate in client components

***

## Tips acerca de DATA-FETCHING

Se puede hacer de dos formas:

1. Async thunk functions (en el ejercicio de gridder se utilizo para los users)
2. Redux Toolkit query (en el ejercicio de gridder se utilizo para los albunes y las fotos)

- thunks estan deprecated utilizar solo redux toolkit

**Ojo*: Nunca haga request desde un reducer NUNCA. Reducers siempre deben de ser sincronos mas no asincronos.

- Para hacer fetching es una operacion asyncrona osea que hay un periodo de pendiente un periodo de success debe de haber un periodo de error. Osea tres states.
- Los thunks son utilizados para manejar operaciones asyncronas en redux ya que redux no puede tener asyncronia, ademas un thunk despacha actions automaticamente a medida que los datos asyncronos llegan, actualizando los states de forma syncrona y de inmediato

***

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
