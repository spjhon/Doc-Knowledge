---
sidebar_position: 3
---

# Tips Adding Interactivity

## [From the docs](https://react.dev/learn/adding-interactivity)

### Tips

- To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag.
- By convention, it is common to name event handlers as handle followed by the event name. You’ll often see `onClick={handleClick}`, `onMouseEnter={handleMouseEnter}`, and so on.
- Alternatively, you can define an event handler inline in the JSX
- If you want to define your event handler inline, wrap it in an anonymous function like so:

```jsx
<button onClick={() => alert('You clicked me!')}>
```

- The useState Hook provides those two things:

1. A state variable to retain the data between renders.
2. A state setter function to update the variable and trigger React to render the component again.

- Any screen update in a React app happens in three steps:

    - Trigger
    - Render
    - Commit

- When React re-renders a component:

1. React calls your function again.
2. Your function returns a new JSX snapshot.
3. React then updates the screen to match the snapshot your function returned.

- But this also means that the UI won’t be updated until after your event handler, and any code in it, completes. This behavior, also known as batching.
- This component its importat to know, the difference between a normal set and a updater function:

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
      }}>Increase the number</button>
    </>
  )
}
```

- Note that the `...` spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.
- Using a single event handler for multiple fields es posible gracias al set por medio de objetos.
- You can also use the [ and ] braces inside your object definition to specify a property with dynamic name.
- In arrays, que evadir y que utilizar:

|              | avoid (mutates the array)                                              | prefer (returns a new array)                                       |
|--------------|-----------------------------------------------------------------------|------------------------------------------------------------------|
| **adding**   | `push`, `unshift`                                                     | `concat`, `[...arr]` spread syntax ([example](https://react.dev/learn/updating-arrays-in-state#adding-to-an-array))|
| **removing** | `pop`, `shift`, `splice`                                              | `filter`, `slice` ([example](https://react.dev/learn/updating-arrays-in-state#removing-from-an-array))           |
| **replacing**| `splice`, `arr[i] = ...` assignment                                   | `map` ([example](https://react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array))                 |
| **sorting**  | `reverse`, `sort`                                                    | copy the array first ([example](https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array))|

***

### Responding to Events

- You can handle events by passing a function as a prop to an element like `<button>`.
- Event handlers must be passed, not called! `onClick={handleClick}`, not `onClick={handleClick()}`.
- You can define an event handler function separately or inline.
- Event handlers are defined inside a component, so they can access props.
- You can declare an event handler in a parent and pass it as a prop to a child.
- You can define your own event handler props with application-specific names.
- Events propagate upwards. Call `e.stopPropagation()` on the first argument to prevent that.
- Events may have unwanted default browser behavior. Call `e.preventDefault()` to prevent that.
- Explicitly calling an event handler prop from a child handler is a good alternative to propagation.

#### Adding event handlers

- Reading props in event handlers
- Passing event handlers as props
- Naming event handler props

#### Event propagation

- Stopping propagation
- Passing handlers as alternative to propagation
- Preventing default behavior

#### Can event handlers have side effects?

***

### State: A Component's Memory

- Use a state variable when a component needs to “remember” some information between renders.
- State variables are declared by calling the `useState` Hook.
- Hooks are special functions that start with use. They let you “hook into” React features like state.
- Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including `useState`, is only valid at the top level of a component or another Hook.
- The `useState` Hook returns a pair of values: the current state and the function to update it.
- You can have more than one state variable. Internally, React matches them up by their order.
- State is private to the component. If you render it in two places, each copy gets its own state.

#### When a regular variable isn’t enough

#### Adding a state variable

- Meet your first Hook
- Anatomy of `useState`

#### Giving a component multiple state variables

#### State is isolated and private

***

### Render and Commit

- You can use Strict Mode to find mistakes in your components
- React does not touch the DOM if the rendering result is the same as last time

#### Step 1: Trigger a render

- Initial render
- Re-renders when state updates

#### Step 2: React renders your components

#### Step 3: React commits changes to the DOM

#### Epilogue: Browser paint

***

### State as a Snapshot

- Setting state requests a new render.
- React stores state outside of your component, as if on a shelf.
- When you call `useState`, React gives you a snapshot of the state for that render.
- Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
- Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
- You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
- Event handlers created in the past have the state values from the render in which they were created.

#### Setting state triggers renders

#### Rendering takes a snapshot in time

#### State over time

***

### Queueing a Series of State Updates

- Setting state does not change the variable in the existing render, but it requests a new render.
- React processes state updates after event handlers have finished running. This is called batching.
- To update some state multiple times in one event, you can use `setNumber(n => n + 1)` updater function.

#### React batches state updates

#### Updating the same state multiple times before the next render

- What happens if you update state after replacing it
- What happens if you replace state after updating it
- Naming conventions

### Updating Objects in State

- Treat all state in React as immutable.
- When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
- Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
- You can use the `{...obj, something: 'newValue'}` object spread syntax to create copies of objects.
- Spread syntax is shallow: it only copies one level deep.
- To update a nested object, you need to create copies all the way up from the place you’re updating.
- To reduce repetitive copying code, use Immer.

#### What’s a mutation?

#### Treat state as read-only

#### Copying objects with the spread syntax

#### Updating a nested object

- Write concise update logic with Immer

### Updating Arrays in State

#### Updating arrays without mutation

- Adding to an array
- Removing from an array
- Transforming an array
- Replacing items in an array
- Inserting into an array
- Making other changes to an array
- Updating objects inside arrays

#### Write concise update logic with Immer