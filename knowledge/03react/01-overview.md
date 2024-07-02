---
sidebar_position: 1
---

# REACT Overview

La teoria de este documento fue extraida originalmente del curso de **Stephen Grider de Udemy**, luego se completa con el libro **React 18 Design Patterns and Best Practices de Carlos Santana Roldán**, tanto el curso como el libro poseen sus respectivos repositorios.

## 1. Basics

React es una libreria que posee un DOM virtual con el cual puede renderizar componentes individualmente, al ser una libreria necesita librerias extra para su completa funcionalidad.

React utiliza BABEL y WEBPACK uno para transformar syntax nueva de javascript en syntax vieja y webpack para compilar todo el codigo en uno solo, **VITE no utiliza BABEL**.

### 1.1. Differentiating between declarative and imperative programming

La forma más fácil de abordar esto es pensar en la programación imperativa como una manera de describir cómo funcionan las cosas, y en la programación declarativa como una manera de describir lo que deseas lograr.

- La programación declarativa tiende a evitar la creación y mutación de un state.
- React sigue un paradigma declarativo, y no es necesario indicarle cómo interactuar con el DOM; declaras lo que quieres ver en la pantalla.
- Los elementos son importantes en `React.crateElement()` ya que asi es como crea nuevos elementos que asemejan HTML que son los componentes, sin embargo desde react 17 ya no se utiliza `React.crateElement()` por eso ya no hay que importar REACT en cada componente.

### 1.2. JSX Rules, Commponents Tips

- La finalidad de react es utilizar functions y el sistema de import y exports de javascript para retornar partes de html con extras que se pueden observar en el object al hacer un render (se utiliza `React.crateElement()`) por parte de la libreria REACT.

Los primeros pasos se explican en el primer ejercicio del curso Grider en donde se explica como se manejar las curlyes y el paso de props, tambien la seccion "Describing the UI" from the docs (ejemplos al final de esta seccion en el curso de UDEMY de grider)

- **Dato Curioso**: Sí, en un proyecto React, cuando importas una carpeta, el compilador buscará por defecto un archivo llamado index.ts o index.tsx dentro de esa carpeta para realizar la importación. Esto es una convención que facilita la importación de módulos.

- Setup basico y creacion de projecto se utiliza **VITE** ya que create-react-app es muy lenta y tiene mucho bloatware
- JSX y sus diferencias con HTML [**AQUI todas las reglas del JSX**](/03react/Patterns/JSXRules)
![text for screen reader](../src/images/gridder%20diapositivas/010%20de%20HTML%20a%20JSX.jpg)
![text for screen reader](../src/images/gridder%20diapositivas/011%20ejemplo%20de%20como%20proveer%20boolean%20props.jpg)
![text for screen reader](../src/images/gridder%20diapositivas/008%20como%20proveer%20variables%20en%20props.jpg)
- Los componentes en REACT siempre deben de tener una letra mayuscula al principio para diferenciarlos de elementos HTML normales.
- Como react hace basico render desde un html como root
![text for screen reader](../src/images/gridder%20diapositivas/002%20del%20js%20al%20html.jpg)
- Que es un componente y sus dos partes principales [React Basic Patterns](/03react/Patterns/reactPatterns)
- Como crear un componente
![text for screen reader](../src/images/gridder%20diapositivas/012%20Anatomia%20Creando%20un%20componente.jpg)
- Anatomia de un componente
![text for screen reader](../src/images/gridder%20diapositivas/007%20anatomia%20basica%20de%20un%20componente.jpg)
- React no renderiza objects
![text for screen reader](../src/images/gridder%20diapositivas/006%20que%20NO%20hacer%20con%20las%20curlyes.jpg)

- since React 16.2.0, it is possible to return an array directly as follows:

```javascript
return [
 <li key="1">First item</li>, 
 <li key="2">Second item</li>, 
 <li key="3">Third item</li>
]
```

***

- **Ojo cuando se utiliza un componente mas de una vez, cada componente es independiente (es su propia instancia)**

***

- **Donde encontrar ejemplos?:**
- Exercise 01 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/001-Vite-basics/README.md)

***

### 1.3. The prop system

- Reglas de como pasar atributos html al componente e introduccion al sistema de props
![text for screen reader](../src/images/gridder%20diapositivas/013%20the%20prop%20system.jpg)
- Como reutilizar un componente y que este componente se adapte a la forma que uno desea y estos deseos se comunican a travez del sistema de props.
- Como colocar styles basicos al menos los que van in-line
- Valores predeterminados en los props en caso de que no llegue ningun prop.
- Utilizacion de una libreria para el estilizado llamada Bulma
- Se explica la jerarquia de los componente y que es un componente padre y que es un componente children
- Introduccion a destructuring (ver destructuring en javascript)
- Se explica como el sistema de imports y exports es escencial a la hora de modularizar los componentes (ver modules en javascript)
- Ojo con la inmutabilidad cuando se trabaja con los estados (recuerda el .slide() y el ...history en el ejemplo de tick-toc).
- JavaScript tiene una particularidad, si un object tiene dos llaves con el mismo nombre, una sobre-escribe a la otra (LAS LLAVES EN LOS OBJECTS DEBEN DE SER UNICAS).
- The **spread** syntax: The dots literally mean “gather the remaining parameters into an array”, cuando se utiliza como parametro
- Un underline element es un componente que el html que devuelve es el mismo que el nombre de la funcion y el nombre del componente.
- Un componente no puede retormar mas de un tag, en caso de varios tags envolvelos en un wrapper or a fragment.
- Se recomienda aplicar (ejemplo en github examples-react) atomic design in order to create the components.
La destructuración con [] indica que se están destructurando arrays, mientras que si se utiliza {} es que se está destructurando un objects.
- Se puede utilizar map para mapear todos los elementos que se encuentren en objetos, vengan de funciones, fetch, etc. (siempre agregar un key).
- En react los on son los eventos html que estan listados en w3schools.

- Esta es una guia practica de como utilizar un event:
![text for screen reader](../src/images/gridder%20diapositivas/015%20Como%20manejar%20eventos%20como%20click.jpg)

- Que es state?:
![anatomia basica state](../src/images/gridder%20diapositivas/003%20que%20es%20useState.jpg)

- Anatomia basica de state:
![anatomia basica state](../src/images/gridder%20diapositivas/017%20anatomia%20basica%20de%20useState.jpg)

**

- **Donde encontrar ejemplos?:**
- Exercise 01 and 02 from react examples that comes form the official React Docs [Link](https://react.dev/learn)
- Tips from the docs: [Link](/03react/FromDocs/describingUI)
- Exercise 02 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/002-Vite-Pads(basic%20components%20and%20pops)/README.md)

***

## State en React

If you want to cutomize, use PORPS, if you want to change something on the screen use STATE

En react se maneja el sistema de states para poder rastrear el estado de un componente en un determinado momento o debido a las acciones de un usuario

- Un set en react es un peticion de hacer un re-render con los nuevos states.
- Ojo con los objects y los arrays ya que estos son los que mutan.
- React no renderiza o print bools, nulls o undefined, entonces es util para esconder divs, o decir que no renderizen.
-algo interesante a tener en cuenta cuando al onClick se le pasa el handleclick directamente sin funciones arrow, devuleve el event object.
- Todo handleClick debe de ser definido en donde esta el state que modificay pasarlo por el sistema de props
- Si se llama el componente que use useState varias veces, habran varios estados diferentes.
- Las funciones que utilicen "use" se consideran "hooks" como por ejemplo useState
- La clave de react es la re-renderizacion de un componente y como sus estados van cambiando.
- Conditional Rendering
- Link to Conditional Paterns [Conditional Patterns](/03react/Patterns/conditionalPatterns)
- Uso basico de useState
- INMUTABILIDAD DEL STATE Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre. [How to update state](/03react/Patterns/stateUpdate)
- Utilizacion del .map para el mapeo de elementos.
- Como pasar imagenes a un objeto para ser manipuladas
- Sistema de eventos y el sistema de state
- Como utilizar y donde poner handleClicks
- Component lifecicle (look for useEffect)
- Re-rendering of a component
- fetching con axios
- inputs patterns [Input Patterns](/03react/Patterns/controlledInputs)
- event object management
- se recomienda saber sobre los HTTP (Hypertext Transfer Protocol) status codes and HTTP en general [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- En las diapositivas de grider desde la 23 hasta la 30 del repositorio de grider se explica como modificar arrays y objects cuando estos estan en el state
- Tener en cuenta que hay procedimientos para add, update, delete etc diferentes tanto para arrays como para objects.
- Collapsing two handlers into one

**

- **Donde encontrar ejemplos?:**

- Link to Adding Interactivity [Link](/03react/FromDocs/adingInteractivity)
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

Sacado de chatGPT:

entonces como en la funcion de post se hace la peticion, que creo yo es una promesa pero el codigo continua ejecutandose asincronamente y no hay interferencia de la promesa ya que los datos ya estan localmente y se pueden manipular o enviar, pero en el fetch inicial el state debe de esperar de alguna forma a tener los datos listos entonces se usa el useEffect para hacer que el componente se re-renderice una vez lleguen los datos asyncronos?, estoy en lo correcto?

ChatGPT dijo que si.

**

- **Donde encontrar ejemplos?:**

- Exercise 05-1 Grider [Link](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/005-Vite-BooksConApi(Persistent%20Data)/README.md)
- Side Effects and how useEffect helps [Link](/03react/sideEffects)

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
