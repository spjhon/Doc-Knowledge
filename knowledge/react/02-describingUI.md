---
sidebar_position: 2
---

# Tips Describin the UI

## [From the docs](https://react.dev/learn/describing-the-ui)

### Tips

- Los componentes de React son funciones regulares de JavaScript, ¡pero sus nombres deben comenzar con una letra mayúscula o no funcionarán!
- Sin paréntesis, cualquier código en las líneas después de return será ignorado
- Nunca definas un componente dentro de otro componente.
- El export default funcion es mejor que sea siempre la primera en un archivo jsx.
- JSX y React son dos cosas separadas. A menudo se utilizan juntas, pero puedes usarlas de manera independiente la una de la otra. JSX es una extensión de sintaxis, mientras que React es una biblioteca de JavaScript.
- Cuando deseas pasar un atributo de cadena a JSX, lo colocas entre comillas simples o dobles.
- JSX es una forma especial de escribir JavaScript. Esto significa que es posible utilizar JavaScript dentro de JSX mediante llaves {}.
- Además de cadenas, números y otras expresiones de JavaScript, incluso puedes pasar objetos en JSX. Los objetos también se indican con llaves, como `{ name: "Hedy Lamarr", inventions: 5 }`. Por lo tanto, para pasar un objeto de JavaScript en JSX, debes envolver el objeto en otro par de llaves: `person={{ name: "Hedy Lamarr", inventions: 5 }}`.
- Las propiedades de estilo en línea se escriben en camelCase. Por ejemplo, en HTML, `<ul style="background-color: black">` se escribiría en un componente de React como `<ul style={{ backgroundColor: 'black' }}>`
- Si deseas asignar un valor predeterminado a una prop para que se utilice cuando no se especifica ningún valor, puedes hacerlo mediante la destructuración, colocando `=` y el valor predeterminado justo después del parámetro.
- No uses los index de los arrays como keys ya que no es segurio que sea una llave inmutable.
- Siempre mantenga los componentes puros
- Siempre utilice stricMode
- JSX elements directly inside a map() call always need keys!
- Se pueden crear objects y arrays que muten pero dentro del componente **OJO**, lo que no se pase a travez de props, se mantenga el rastreo del state y se tenga en cuenta en cada re-renderizado, van a haber bugs.

```jsx
function Avatar({ person, size = 100 }) {
  // ...
}
```

- Aunque se puede utilizar la sintaxis spread ...props para pasar los props, por cuestiones de debuggin no se recomienda.
- En algunas situaciones, es posible que no desees renderizar nada en absoluto. Por ejemplo, supongamos que no deseas mostrar elementos empaquetados. Un componente debe devolver algo. En este caso, puedes devolver `null`
- En lugar de escribir asi DRY:

```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

Escribir asi:

```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

- The short `<>...</>` Fragment syntax won’t let you pass a key, so you need to either group them into a single `<div>`, or use the slightly longer and more explicit `<Fragment>` syntax:

```jsx
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

#### Defining a component

- Step 1: Export the component
- Step 2: Define the function
- Step 3: Add markup

#### The Rules of JSX

1. Return a single root element
2. Close all the tags
3. camelCase all (most) of the things!

#### Passing props to a component

- **Step 1:** Pass props to the child component
- **Step 2:** Read props inside the child component

***
| Describing   the UI                                                                          | Sumary from the React Dev Docs        |
|----------------------------------------------------------------------------------------------|---------------------------------------|
| How   to write your first React component                                                    | Your   first component                |
| When   and how to create multi-component files                                               | Importing   and exporting components  |
| How   to add markup to JavaScript with JSX                                                   | Writing   markup with JSX             |
| How   to use curly braces with JSX to access JavaScript functionality from your   components | JavaScript   in JSX with curly braces |
| How   to configure components with props                                                     | Passing   props to a component        |
| How   to conditionally render components                                                     | Conditional   rendering               |
| How   to render multiple components at a time                                                | Rendering   lists                     |
| How   to avoid confusing bugs by keeping components pure                                     | Keeping   components pure             |
| Why   understanding your UI as trees is useful                                               | Your   UI as a tree                   |

***

### Your First Component

#### Lo que tiene que saber

- What a component is
- What role components play in a React application
- How to write your first React component

#### Puntos Imporatantes

- React lets you create components, reusable UI elements for your app.
- In a React app, every piece of UI is a component.
- React components are regular JavaScript functions except:
- Their names always begin with a capital letter.
- They return JSX markup.

***

### Importing and Exporting Components

#### Lo que tiene que saber

- What a root component file is
- How to import and export a component
- When to use default and named imports and exports
- How to import and export multiple components from one file
- How to split components into multiple files
- If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.

#### Puntos Imporatantes

- What a root component file is
- How to import and export a component
- When and how to use default and named imports and exports
- How to export multiple components from the same file

***

### Writing Markup with JSX

#### Lo que tiene que saber

- Why React mixes markup with rendering logic
- How JSX is different from HTML
- How to display information with JSX

#### Puntos Imporatantes

- React components group rendering logic together with markup because they are related.
- JSX is similar to HTML, with a few differences. You can use a converter if you need to.
- Error messages will often point you in the right direction to fixing your markup.

### JavaScript in JSX with Curly Braces

#### Lo que tiene que saber

- How to pass strings with quotes
- How to reference a JavaScript variable inside JSX with curly braces
- How to call a JavaScript function inside JSX with curly braces
- How to use a JavaScript object inside JSX with curly braces

#### Puntos Imporatantes

- JSX attributes inside quotes are passed as strings.
- Curly braces let you bring JavaScript logic and variables into your markup.
- They work inside the JSX tag content or immediately after = in attributes.
`{{ and }}` is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

### Passing Props to a Component

#### Lo que tiene que saber

- How to pass props to a component
- How to read props from a component
- How to specify default values for props
- How to pass some JSX to a component
- How props change over time

#### Puntos Imporatantes

- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the `function Avatar({ person, size })` destructuring syntax.
- You can specify a default value like `size = 100`, which is used for missing and `undefined` props.
- You can forward all props with `<Avatar {...props} />` JSX spread syntax, but don’t overuse it!
- Nested JSX like `<Card><Avatar /></Card>` will appear as `Card` component’s `children` prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to set state.

### Conditional Rendering

#### Lo que tiene que saber

- How to return different JSX depending on a condition
- How to conditionally include or exclude a piece of JSX
- Common conditional syntax shortcuts you’ll encounter in React codebases

### Rendering Lists

#### Lo que tiene que saber

- How to render components from an array using JavaScript’s map()
- How to render only specific components using JavaScript’s filter()
- When and why to use React keys

#### Puntos Imporatantes

- How to move data out of components and into data structures like arrays and objects.
- How to generate sets of similar components with JavaScript’s map().
- How to create arrays of filtered items with JavaScript’s filter().
- Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.

### Keeping Components Pure

#### Lo que tiene que saber

- What purity is and how it helps you avoid bugs
- How to keep components pure by keeping changes out of the render phase
- How to use Strict Mode to find mistakes in your components

#### Puntos Importantes

- A component must be pure, meaning:
    - It minds its own business. It should not change any objects or variables that existed before rendering.
    - Same inputs, same output. Given the same inputs, a component should always return the same JSX.
- Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
- You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
- Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
- Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm

### Understanding Your UI as a Tree

#### Lo que tiene que saber

- How React “sees” component structures
- What a render tree is and what it is useful for
- What a module dependency tree is and what it is useful for

#### Puntos Importantes

- Trees are a common way to represent the relationship between entities. They are often used to model UI.
- Render trees represent the nested relationship between React components across a single render.
- With conditional rendering, the render tree may change across different renders. With different prop values, components may render different children components.
- Render trees help identify what the top-level and leaf components are. Top-level components affect the rendering performance of all components beneath them and leaf components are often re-rendered frequently. Identifying them is useful for understanding and debugging rendering performance.
- Dependency trees represent the module dependencies in a React app.
- Dependency trees are used by build tools to bundle the necessary code to ship an app.
- Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.
