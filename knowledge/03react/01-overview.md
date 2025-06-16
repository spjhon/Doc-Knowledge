---
sidebar_position: 1
---

# 1. REACT Overview

La teoria de este documento fue extraida originalmente del curso de **Stephen Grider de Udemy**, luego se completa con el libro **React 18 Design Patterns and Best Practices de Carlos Santana Roldán**, tanto el curso como el libro poseen sus respectivos repositorios tips y otras fuentes estan referenciadas a paginas de internet o a paginas de este mismo DOCUSAURIO.

***

- **TEMAS**

***

## 1. Basico

### 1.1. [**¿Qué es React?**](/03react/overview#1-basics)

### 1.2. **Componentes**

- En el [**primer ejercicio de Stephen Grider**](https://github.com/spjhon/Udemy-React-StephenGrider/tree/Apps/001-Vite-basics) se puede obtener la siguiente informacion:

  - Setup basico y creacion de projecto
  - JSX y sus diferencias con HTML
  - Que hay dentro de un projecto react (en este caso creado con vite)
  - Como react hace basico render desde un html como root
  - Que es un componente y sus dos partes principales
  - Como react se importa y se inyecta en el projecto
  - Reglas de como pasar atributos html al componente e introduccion al sistema de props

- [**Steps recommended to build a Component**](/03react/stepsComponent)
- [**Describin the UI**](/03react/FromDocs/describingUI)

### 1.3. **Patterns**

- [**React Patterns Pagina Web**](https://reactpatterns.com/).
- [**Conditional Patterns**](/03react/Patterns/conditionalPatterns)
- [**Input Patterns**](/03react/Patterns/controlledInputs)

### 1.4. **JSX**

- JSX y sus diferencias con HTML [**AQUI todas las reglas del JSX**](/03react/Patterns/JSXRules).

### 1.5. [**Props**](03react/thePropSystem)

- [**Exercise 02 Grider (Pads)**](https://github.com/spjhon/Udemy-React-StephenGrider/tree/Apps/002-Vite-Pads(basic%20components%20and%20pops)) en donde se encontrara:

  - Como reutilizar un componente y que este componente se adapte a la forma que uno desea y estos deseos se comunican a travez del sistema de props.
  - Como colocar styles basicos al menos los que van in-line
  - Valores predeterminados en los props en caso de que no llegue ningun prop.
  - Utilizacion de una libreria para el estilizado llamada Bulma
  - Se explica la jerarquia de los componente y que es un componente padre y que es un componente children
  - Introduccion a destructuring
  - Se explica como el sistema de imports y exports es escencial a la hora de modularizar los componentes

### 1.6. **Pure Functions**

- Explicacion en un articulo de medium [**AQUI**](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- [**AQUI mas informacion acerca de pure functions**](/03react/PureFunctions)

***

## 2. Hooks

React se divide en dos partes

- React: Aplicable incluso para Mobiles Apps por medio de React Native
- React-DOM: React especifico para el DOM del navegador

Los hooks a continuacion son de REACT:

### 2.2.1 State Hooks

Permite a un componente "recordar informacion" entre renderizados

1. **useState**

    - [**Link to Adding Interactivity (docs)**](/03react/FromDocs/adingInteractivity)
    - [**Link to useState theory (docs)**](https://react.dev/reference/react/useState)
    - [**Exercise 03 Grider (Vite-Animals)**](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/003-Vite-Animals(basic%20useState)/README.md) en donde se encontrara la siguiente informacion:

        - Uso basico de useState
        - Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre.
        - Se explica como utilizar el map para mapear componentes
        - se explica como pasar imagenes a un objeto para ser manipuladas
        - se explica el sistema de eventos y el sistema de state.

    - [**Exercise 04 Grider (Vite-Pics)**](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/004-Vite-Pics(axios)/README.md) en donde se encontrara la siguiente informacion:

        - fetching con axios
        - inputs patterns
        - event object management
        - props passing

    - [**Exercise 05 Grider (005-Vite-Books(add render elements))**](https://github.com/spjhon/Udemy-React-StephenGrider/tree/Apps/005-Vite-Books(add%20render%20elements)) en donde se encontrara la siguiente informacion:

        - lifting state up
        - State inmutability

    - Inmutabilidad del state y como hacer un update correcto con el state [**Pagina de VERCEL**](https://state-updates.vercel.app/)
    - [**How to update state**](/03react/Patterns/stateUpdate)
    - Se recomienda saber sobre los HTTP (Hypertext Transfer Protocol) status codes and HTTP en general [**AQUI**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

2. **useReducer**

### 2.2.2. Context Hooks

Envia informacion a componentes al fondo del tree sin tener que hacer "prop-drilling"

1. **useContext**

    - [**Exercise 05 Grider (BooksConContext)**](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-Books(add%20render%20elements)/README.md) en donde se encontrara la siguiente informacion

### 2.2.3. Ref Hooks

Permite guardar informacion que no se renderiza en cada ciclo o iteracion

1. useRef

    - [**AQUI, el link para la documentacion oficial**](https://react.dev/reference/react/useRef)
    - [**AQUI informacion sobre useRef**](/03react/Hooks/useRef).

2. useImperativeHandle

### 2.2.4. Effect Hooks

Permite sincronizar el sistema de states de react con entes externos

1. **useEffect**

    - [**AQUI, el link para la documentacion oficial**](https://react.dev/reference/react/useEffect)
    - [**Exercise 05 Grider 005-Vite-BooksConApi(Persistent Data)**](https://github.com/spjhon/Udemy-React-StephenGrider/tree/Apps/005-Vite-Books(add%20render%20elements)) en donde se encontrara la siguiente informacion:

      - useEffect
      - Basic CRUD (Create, read, update, delete)

    - [**AQUI informacion sobre useEffect**](/03react/Hooks/useEffect).

2. useLayoutEffect
3. useInsertionEffect

### 2.2.5. Performance Hooks

Para evita re-renderizados inecesarios

1. useMemo
2. useCallback

### 2.2.6. Other Hooks

1. useActionState
2. useDebugValue
3. useDeferredValue
4. useId
5. useOptimistic
6. useSyncExternalStore
7. useTransition

Los hooks a continuacion son de REACT-DOM:

### 2.2.7. React-Dom Hooks

1. useFormStatus

***

5. **State**
6. **Eventos en React**
7. **useState**
8. **useEffect**
9. **Renderizado condicional**
10. **Listas y keys**
11. **Manejo de formularios**
12. **Componentes controlados y no controlados**
13. **Lifting state up**
14. **Prop drilling**
15. **useContext**
16. **useRef**
17. **useMemo**
18. **useCallback**
19. **React Router (navegación)**
20. **Custom Hooks**
21. **Fragments**
22. **Portals**
23. **Error boundaries**
24. **Lazy loading y Suspense**
25. **Ciclo de vida de un componente (componentDidMount, etc. en class components)**

## Intermedio

1. **Custom Hooks**
2. **useReducer**
3. **useContext avanzado**
4. **useImperativeHandle**
5. **useLayoutEffect**
6. **Memoización con React.memo**
7. **Optimización de rendimiento**
8. **Patrones de renderizado (Render Props, HOC)**
9. **Manejo de side effects complejos**
10. **Lazy loading de componentes**
11. **Code splitting**
12. **Error boundaries personalizados**
13. **Portals para modales y tooltips**
14. **Form libraries (Formik, React Hook Form)**
15. **React Query / SWR para manejo de datos remotos**
16. **State management externo (Redux, Zustand, Jotai, Recoil)**
17. **Testing en React (Jest, React Testing Library)**
18. **TypeScript con React**
19. **Animaciones (Framer Motion, React Spring)**
20. **Internacionalización (i18n)**

## Avanzados

1. **Arquitectura de aplicaciones grandes en React**
2. **Server Components (Next.js / React 19)**
3. **Concurrent Rendering**
4. **React Suspense para data fetching**
5. **Hydration en aplicaciones SSR**
6. **State machines con XState**
7. **Custom renderers con React Reconciler**
8. **Hooks compuestos y patrones reutilizables**
9. **Patrones avanzados de composición**
10. **Micro frontends con React**
11. **React Performance Profiling**
12. **SSR y SSG con frameworks como Next.js**
13. **Incremental Static Regeneration (Next.js)**
14. **Static site generation optimizado**
15. **Streaming SSR**
16. **Manejo avanzado de forms dinámicos**
17. **Internacionalización multilingüe escalable**
18. **Pruebas E2E (Cypress, Playwright)**
19. **Automatización de accesibilidad (a11y)**
20. **Integración con Web Workers y WebAssembly**

***

## Importante articulo sobre HEADless components

[Headless Components](https://martinfowler.com/articles/headless-component.html)

A Headless Component is a design pattern in React where a component - normally inplemented as React hooks - is responsible solely for logic and state management without prescribing any specific UI (User Interface).

***

## Que es React?

React es una libreria que posee un DOM virtual con el cual puede renderizar componentes individualmente, al ser una libreria necesita librerias extra para su completa funcionalidad.

React utiliza BABEL y WEBPACK uno para transformar syntax nueva de javascript en syntax vieja y webpack para compilar todo el codigo en uno solo, **VITE no utiliza BABEL**.

***

### Differentiating between declarative and imperative programming

La forma más fácil de abordar esto es pensar en la programación imperativa como una manera de describir cómo funcionan las cosas, y en la programación declarativa como una manera de describir lo que deseas lograr.

- La programación declarativa tiende a evitar la creación y mutación de un state.
- React sigue un paradigma declarativo, y no es necesario indicarle cómo interactuar con el DOM; declaras lo que quieres ver en la pantalla.
- Los elementos son importantes en `React.crateElement()` ya que asi es como crea nuevos elementos que asemejan HTML que son los componentes, sin embargo desde react 17 ya no se utiliza `React.crateElement()` por eso ya no hay que importar REACT en cada componente.

***

- **Donde encontrar ejemplos?:**
- Exercise 01 and 02 from react examples that comes form the official React Docs [**Link al repositorio de GITHUB**](https://react.dev/learn)

***

## Context for props

El sistema de context es simple, es crear un provider que puede ser llamado desde cualquier componente gracias al useContext hook

- Introduccion al sistema de context
- Introduccion a centralized store
- App vs Component state
- Custom hook
- useCallback y su uso dentro de useEffect para hacer fetching

- If your component contains both a large amount of jsx code and a lot of logic as well whose data needs to be passed down, it might be worth it break your context and your jsx code into different files. You should append these files with ctx.tsx. For example, suppose your App.tsx file contains a lof of jsx code and a lot of logic for managing the user sessions, you could create a seperate App.ctx.tsx file which uses createContext() whose default export is the context's provider.

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
- Grider Method of create state for a component (video 181 y 197) [How to create state](/03react/stepsComponent)
- How to create a dropdown (en dropdown se utiliza un panel como ejemplo de un componente sin state standard)
- Modal (uso de portals)
- Table (sorting table, React Fragments)
- Custom hooks y como reutilizar codigo que ya esta en una funcion y pasarlo a un custom hook

## useRef para manipulacion del DOM

- Se utiliza para hacer referencia a un elemento del DOM desde el elemento que se utiliza
- useRef is a React Hook that lets you reference a value that’s not needed for rendering
- La idea de useRef es asignar un valor sin que este origine un re-render y se mantenga entre re-renders.
- Manipulaicon del DOM por medio de useRef
- **OJO:** No utilize el ref para acciones destructivas del DOM como agregar o quitar nodos, solo pasa cosas no destructivas como fucus o scroll o cosas asi.
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.

**

- **Donde encontrar ejemplos?:**

- Exercise 06 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/006-Vite-DropDownAcordeon(routingReusability)/README.md)

***

## Reducers para multi-state administracion

- Tambien produce state pero es mas utilizado para con componentes que esten relacionados entre si.
- De acuerdo al ejemplo de grider es cuando hay varios states relacionados o que hayan muchos cambios al mismo state, entonces se crea una store centralizada y funciones encargadas de la modificacion de estos states y hacer todos los cambios respectivos por medio del sistema de context.
- El reducer es una alternativa a useState cuando un componente tiene varios states, el reducer es mas local, para global state se recomienda REDUX.
- No async/await, no request, no promises, no outside variables
- Si se desea resetear un state pues se retorna un objeto nuevo con valores reseteados
- Siempre meter la logica en el reducer y dejar el dispatch y el payload lo mas limpio posible

### Enorme consejo

- Ponga toda la logica de la actualizacion de los states dentro del reducer mas no en el dispach o en el payload ya que se puede equivoar otro dev al escribir toda la logica cada vez que haga un dispatch
- Lo mas recomendable es mandar a travez del payload solo los datos desnudos mas no mandar logica alguna.

**

- **Donde encontrar ejemplos?:**

- Exercise 08 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/008-Vite-Reducers/README.md)

***

## REDUX para Global State

En redux existen slices y la store

- De por si una app tiene una sola store y es donde estan guardados todos los states
- los componentes que se suscriban a la store va a ser re-renderizados cuando el respectivo state cambie y para eso es els useSelector
- Se puede utilizar el metodo getState() para ver que hay dentor de la store
- cuando se esta disenando el state para redux pensar en el derived state: Values that we can calculate using existing state.
- **CONSEJO PARA NEXT JS:** fetch data in server components and mutate in client components

### Temas tratados

- Introduccion a Redux
- Creacion de Slices
- Como utilizar useDispatch para mandar ordenes a los Slices y que se guarde en el store
- Como utilizar el state del store
- Creacion de extraReducers
- useSelector
- Como utilizar correctamente la destructuracion de useSelector
- La diferencia entre mutar un state y asignar nuevos valores a un state

**

- **Donde encontrar ejemplos?:**

- Exercise 09 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/009-Vite-Redux/README.md)
- Exercise 10 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/tree/Apps/010ManaginSlicesRedux)

***

## DATA-FETCHING

Se puede hacer de dos formas:

1. Async thunk functions (en el ejercicio de gridder se utilizo para los users)
2. Redux Toolkit query (en el ejercicio de gridder se utilizo para los albunes y las fotos)

- thunks estan deprecated utilizar solo redux toolkit

**Ojo*: Nunca haga request desde un reducer NUNCA. Reducers siempre deben de ser sincronos mas no asincronos.

- Para hacer fetching es una operacion asyncrona osea que hay un periodo de pendiente un periodo de success debe de haber un periodo de error. Osea tres states.
- Los thunks son utilizados para manejar operaciones asyncronas en redux ya que redux no puede tener asyncronia, ademas un thunk despacha actions automaticamente a medida que los datos asyncronos llegan, actualizando los states de forma syncrona y de inmediato

- **Donde encontrar ejemplos?:**

- Exercise 11 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/011APIsAsyncInterface/README.md)

***
