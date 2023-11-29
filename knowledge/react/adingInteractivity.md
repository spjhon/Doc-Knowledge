---
sidebar_position: 3
---

# Adding Interactivity

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

***

### Responding to Events

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

#### When a regular variable isn’t enough

#### Adding a state variable

- Meet your first Hook
- Anatomy of useState

#### Giving a component multiple state variables

#### State is isolated and private

***

### Render and Commit

#### Step 1: Trigger a render

- Initial render
- Re-renders when state updates

#### Step 2: React renders your components

#### Step 3: React commits changes to the DOM

#### Epilogue: Browser paint
