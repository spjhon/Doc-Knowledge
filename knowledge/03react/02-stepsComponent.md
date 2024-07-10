---
sidebar_position: 2
---

# Steps recommended to build a Component

## According the React Docs

[Link to the React Docs](https://react.dev/learn/thinking-in-react)

### Step 1: Break the UI into a component hierarchy

- If your JSON is well-structured, you’ll often find that it naturally maps to the component structure of your UI.
- Tener en cuenta que componentes estan anidado y en donde.

### Step 2: Build a static version in React

- In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.

### Step 3: Find the minimal but complete representation of UI state

Which of these are state? Identify the ones that are not:

- Does it remain unchanged over time? If so, it isn’t state.
- Is it passed in from a parent via props? If so, it isn’t state.
- Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

What’s left is probably state.

There are two types of “model” data in React: props and state. The two are very different:

- Props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button.
- State is like a component’s memory. It lets a component keep track of some information and change it in response to interactions. For example, a Button might keep track of isHovered state.

### Step 4: Identify where your state should live

This can be challenging if you’re new to this concept, but you can figure it out by following these steps!

For each piece of state in your application:

- Identify every component that renders something based on that state.
- Find their closest common parent component—a component above them all in the hierarchy.
- Decide where the state should live:
- Often, you can put the state directly into their common parent.
- You can also put the state into some component above their common parent.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

### Step 5: Add inverse data flow

- En este paso, resulta que si se coloca un input o cualquier cosa que cambie de estado por el usuario ocualquier otra cosa, hay que avisarle al responsable de controlar ese estado para que actuelice el state, esto es por diseño de react para que no hayan cambios de states sin rastrear.

El onChange es parte de la tabla de eventos HTML, segun veo se aplica los atributos de eventos html directamente en el JSX.

## According to Grider

### State as Design Process

Del video 181 State Design Process

- Preguntas a hacerse cuando se le esta buscando state en un componente
![When to use State](../src/images/037%20when%20to%20useState%20questions.jpg)

- Pasos para crear State
![Pasos para crear State](../src/images/038%20STEPS%20TO%20CREATE%20STATES.jpg)

- Tipos de State
![Tipos de State](../src/images/039%20Types%20of%20State.jpg)
