---
sidebar_position: 1
---

# REACT Overview

import { useState } from 'react';
import { StrictMode } from "react";

React es una libreria que posee un DOM virtual con el cual puede renderizar componentes individualmente, al ser una libreria necesita librerias extra para su completa funcionalidad.

***

## Recomendaciones Generales y Tips Alrededor de la libreria React

Esta seccion esta dedicada a tips que se van aprendiendo a lo largo de la experiencia adquirida con la libreria.

- (de gridder) react no puede imprimir otras cosas que no sean numeros y letras en las crulys {} de return, objetos no, arrays no, booleanos no; dentro de las curlyes se pueden meter funciones y llamadas pero que porsupuesto terminen en primitivos como numeros y letras
- Ojo con la inmutabilidad cuando se trabaja con los estados (recuerda el .slide() y el ...history en el ejemplo de tick-toc).
- React trata diferente a los Numbers, Strings, Null, Undefind y Booleanos a los Arrays y los Objects
- JavaScript tiene una particularidad, si un object tiene dos llaves con el mismo nombre, una sobre-escribe a la otra (LAS LLAVES EN LOS OBJECTS DEBEN DE SER UNICAS)
- The **spread** syntax: The dots literally mean “gather the remaining parameters into an array”.
- La clave de react es la re-renderizacion de un componente y como sus estados van cambiando.
- Si se llama el componente que use useState varias veces, habran varios estados diferentes.
- Las funciones que utilicen "use" se consideran "hooks".
- Un componente en REACT es una funcion que retorna HTML al DOM virtual.
- React no renderiza o print bools, nulls o undefined, entonces es util para esconder divs, o decir que no renderizen.
-algo interesante a tener en cuenta cuando al onClick se le pasa el handleclick directamente sin funciones arrow, devuleve el event object.
- Todo handleClick debe de ser definido en donde esta el state que modificay pasarlo por el sistema de props
- Un underline element es un componente que el html que devuelve es el mismo que el nombre de la funcion y el nombre del componente.
- Un componente no puede retormar mas de un tag, en caso de varios tags envolvelos en un wrapper or a fragment.
- Se recomienda aplicar (ejemplo en github examples-react) atomic design in order to create the components.
- Los componentes en REACT siempre deben de tener una letra mayuscula al principio para diferenciarlos de elementos HTML normales.
- Una diferencia entre el JSX con HTML es que hay que cerrar todos los tags, y que solo se puede devolver un solo componente (envoltura).
- En cuanto a los proptypes se utiliza el node para los children pero toca espera haber typescript que tal va.
- Para agregar estilo se utiliza className, no se utiliza class como en html normalmente se haria.
- Se puede almacenar jsx en variables y generar condicionales para que muestre uno u otro contenido, estas condiconales pueden ser incluso comparativos de tipo &&.
- Se puede utilizar map para mapear todos los elementos que se encuentren en objetos, vengan de funciones, fetch, etc. (siempre agregar un key).
- Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
- De acuerdo a como exporte el componente es como se importa en otro lado:

|  Syntax |            Export statement           |             Import statement            |
|:-------:|:-------------------------------------:|:---------------------------------------:|
| Default | `export default function Button() {}` | `import Button from './Button.js';`     |
| Named   | `export function Button() {}`         | `import { Button } from './Button.js';` |

- In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />`, otherwise `<B />`”.
- In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”. **No coloques números en el lado izquierdo del operador &&.**
- The shortcuts are common, but you don’t have to use them if you prefer plain if.
- Un set en react es un peticion de hacer un re-render con los nuevos states.
- En react los on son los eventos html que estan listados en w3schools.
- Tip acerca de imagenes, las imagenes que son de menos de 5kb son convertidas a codigo e incluidas en el jsx de react.
- Los componentes que son parientes NO SE DEBEN DE COMUNICAR ENTRE ELLOS, SIEMPRE UTILIZE LOS PARENTS.

## Tips acerca de context

Va en tres fases:

1. Crear context.
2. Specify the data that will be shared
3. "Consume" the data in a component

- Se utiliza un provider: Component used to specify what data we want to share.

- Context no es remplazo de Redux, redux es organizacion de info, context es como distribuirla.

***

## Cuando Utilizar useContext vs useState

### Cuando utilizar useState

- **Form inputs:** If your component has form inputs, use the useState Hook to manage their state. This allows you to keep track of user input and update the UI accordingly.

- **Conditional rendering:** If you have components that need to change their state based on user actions or some other condition, use the useState Hook to manage the component’s state and re-render the component when the state changes.

- **UI components:** If UI components need to change their state based on user interaction, such as dropdown menus, tabs, or accordions, use the useState Hook to manage the component’s state and update the UI accordingly.

- **Toggling:** If you have components that need to toggle between two or more states, such as a modal or a tooltip, use the useState hook to manage the component’s state and toggle between the different states.

### Cuando utilizar useContext

- **Global data:** If you have data that needs to be accessed by multiple components throughout your application, such as the current user object, theme, or localization settings, you can use the React Context API to share this data across your components.

- **Avoiding prop drilling:** If you pass props down multiple levels of the component tree, especially when the intermediate components do not directly use the props, it might be a good idea to use React Context API to avoid prop drilling and simplify your component code.

- **Large-scale applications:** If you’re building a large-scale application with many components and complex data flows, React Context API can help you manage your state and data more efficiently and make your code more maintainable.

- **Cross-cutting concerns:** If you have cross-cutting concerns in your application, such as error handling or authentication, that need to be applied across multiple components, using React Context API can make managing these concerns easier and keeps your code organized.

***

## Tips acerca de useEffect

### Ojo con useEffect

Debido a que useEffect solo corre una vez, durante el primer render, esto puede generar bugs cuando se utiliza otras funciones dentro de useEffect. Entonces EVITAR:

- Posible bug anytime your useEffect contains a function that refers to a variable.
- Por eso esta el slint rule que dice que se debe de meter la variable dentro del array final de la arrow function para que al cambiar esta variable, haya un re-renderizado y utilizacion del useEffect otra vez con la variable actualizada.
- oJO con el slint que no siempre tiene la razon.
- Entonces para arreglar el problema se debe de utilizar (despues de analizar el flujo de datos a travez del provider) useCallback en el provider.
- Una forma de pasar un listener con click al body desde un use effect es crear una funcion listener y ahi si asignarle un eventlistener normalito al body o a donde quiera y para que no hayan 20.000 asiganciones de eventos a un elemento pues se utiliza el cleanUp para remover el evento asignado y que solo haya una sola asignacion. Bendito react.
Entonces: La idea es que el cleanUp es para eliminar las asignaciones que se hacer cada vez que corre useEffect.

#### Restricciones de useEffect

- No se puede return numbers
- No se puede return strings
- No se puede utilizar async await dentro de useEffect
- Si puede retornar funciones

##### Algo para tener en cuenta

Se le puede aplicar una funcion llamada clean up que se coloca como return del useEffect para que cuando vuelva y se ejecute el useEffect vaya a esa funcion de cleanUp

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
