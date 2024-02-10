---
sidebar_position: 1
---

# REACT Overview

import { useState } from 'react';
import { StrictMode } from "react";

React es una libreria que posee un DOM virtual con el cual puede renderizar componentes individualmente, al ser una libreria necesita librerias extra para su completa funcionalidad.

***

## Basics (UI)

- La finalidad de react es utilizar functions y el sistema de import y exports de javascript para retornar partes de html con extras que se pueden observar en el object al hacer un render (se utiliza react.createElement) por parte de la libreria REACT.

Los primeros pasos se explican en el primer ejercicio del curso Grider en donde se explica como se manejar las curlyes y el paso de props, tambien la seccion "Describing the UI" from the docs

- Setup basico y creacion de projecto (vite)
- JSX y sus diferencias con HTML
- Que hay dentro de un projecto react (en este caso creado con vite)
- Como react hace basico render desde un html como root
- Que es un componente y sus dos partes principales [React Basic Patterns](/react/Patterns/reactPatterns)
- Como react se importa y se inyecta en el projecto
- Reglas de como pasar atributos html al componente e introduccion al sistema de props

- Como reutilizar un componente y que este componente se adapte a la forma que uno desea y estos deseos se comunican a travez del sistema de props.
- Como colocar styles basicos al menos los que van in-line
- Valores predeterminados en los props en caso de que no llegue ningun prop.
- Utilizacion de una libreria para el estilizado llamada Bulma
- Se explica la jerarquia de los componente y que es un componente padre y que es un componente children
- Introduccion a destructuring
- Se explica como el sistema de imports y exports es escencial a la hora de modularizar los componentes

**

- **Donde encontrar ejemplos?:**

- Exercise 01 and 02 from react examples that comes form the official React Docs [Link](https://react.dev/learn)
- Tips from the docs: [Link](/react/FromDocs/describingUI)
- Exercise 01 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/001-Vite-basics/README.md)
- Exercise 02 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/002-Vite-Pads(basic%20components%20and%20pops)/README.md)

***

## State en React

If you want to cutomize, use PORPS, if you want to change something on the screen use STATE

En react se maneja el sistema de states para poder rastrear el estado de un componente en un determinado momento o debido a las acciones de un usuario

- Conditional Rendering
- Link to Conditional Paterns [Conditional Patterns](/react/Patterns/conditionalPatterns)
- Uso basico de useState
- INMUTABILIDAD DEL STATE Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre. [How to update state](/react/Patterns/stateUpdate)
- Utilizacion del .map para el mapeo de elementos.
- Como pasar imagenes a un objeto para ser manipuladas
- Sistema de eventos y el sistema de state
- Como utilizar y donde poner handleClicks
- Component lifecicle (look for useEffect)
- Re-rendering of a component
- fetching con axios
- inputs patterns [Input Patterns](/react/Patterns/controlledInputs)
- event object management
- se recomienda saber sobre los HTTP (Hypertext Transfer Protocol) status codes and HTTP en general [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- En las diapositivas de grider desde la 23 hasta la 30 del repositorio de grider se explica como modificar arrays y objects cuando estos estan en el state
- Tener en cuenta que hay procedimientos para add, update, delete etc diferentes tanto para arrays como para objects.
- Collapsing two handlers into one

**

- **Donde encontrar ejemplos?:**

- Link to Adding Interactivity [Link](/react/FromDocs/adingInteractivity)
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
- Side Effects

**

- **Donde encontrar ejemplos?:**

- Exercise 05-1 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-BooksConApi(Persistent%20Data)/README.md)
- Side Effects and how useEffect helps [Link](/react/sideEffects)

***

## Context for props

El sistema de context es simple, es crear un provider que puede ser llamado desde cualquier componente gracias al useContext hook

- Introduccion al sistema de context
- Introduccion a centralized store
- App vs Component state
- Custom hook
- useCallback y su uso dentro de useEffect para hacer fetching

**

- **Donde encontrar ejemplos?:**

- Exercise 05-2 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-BooksConContext/README.md)

***

## Routing, Navigation, Reusability

- Paths
- Navigation Context
- Internal Link
- Hook useNavigation
- Pages are react components but no intended for re-use.

### Reusability

- How to use props to configure buttons (classNames library)
- How to use Icons with react-icons
- The children Prop
- How to create an accordeon
- Grider Method of create state for a component (video 181 y 197) [How to create state](/react/stepsComponent)
- How to create a dropdown (en dropdown se utiliza un panel como ejemplo de un componente sin state standard)

## useRef para manipulacion del DOM

- Se utiliza para hacer referencia a un elemento del DOM desde el elemento que se utiliza
- useRef is a React Hook that lets you reference a value that’s not needed for rendering
- La idea de useRef es asignar un valor sin que este origine un re-render y se mantenga entre re-renders.
- Manipulaicon del DOM por medio de useRef
- **OJO:** No utilize el ref para acciones destructivas del DOM como agregar o quitar nodos, solo pasa cosas no destructivas como fucus o scroll o cosas asi.

**

- **Donde encontrar ejemplos?:**

- Exercise 06 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/006-Vite-DropDownAcordeon(routingReusability)/README.md)

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
