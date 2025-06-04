---
sidebar_position: 1
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
