---
sidebar_position: 3
---

# Tips Manage State

## [From the docs](https://react.dev/learn/managing-state)

### Tips

- If a component has a lot of visual states, it can be convenient to show them all on one page
- You can trigger state updates in response to two kinds of inputs:

1. Human inputs, like clicking a button, typing in a field, navigating a link.
2. Computer inputs, like a network response arriving, a timeout completing, an image loading.

- My recommendation is to use Redux for complex global state management and Context for prop drilling.

- React lets you override the default behavior, and force a component to reset its state by passing it a different `key`, like `<Chat key={email} />`.

***

### Reacting to Input with State

- Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
- When developing a component:

1. Identify all its visual states.
2. Determine the human and computer triggers for state changes.
3. Model the state with useState.
4. Remove non-essential state to avoid bugs and paradoxes.
5. Connect the event handlers to set state.

***

### Choosing the State Structure

#### Principles for structuring state

1. Group related state
2. Avoid contradictions in state
3. Avoid redundant state
4. Avoid duplication in state
5. Avoid deeply nested state

- If two state variables always update together, consider merging them into one.
- Choose your state variables carefully to avoid creating “impossible” states.
- Structure your state in a way that reduces the chances that you’ll make a mistake updating it.
- Avoid redundant and duplicate state so that you don’t need to keep it in sync.
- Don’t put props into state unless you specifically want to prevent updates.
- For UI patterns like selection, keep ID or index in state instead of the object itself.
- If updating deeply nested state is complicated, try flattening it.

***

### Sharing State Between Components

#### Lifting state up by example

1. Step 1: Remove state from the child components
2. Step 2: Pass hardcoded data from the common parent
3. Step 3: Add state to the common parent

#### A single source of truth for each state

- When you want to coordinate two components, move their state to their common parent

- Then pass the information down through props from their common parent

- Finally, pass the event handlers down so that the children can change the parent’s state

- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state)

***

### Preserving and Resetting State

- React keeps state for as long as the same component is rendered at the same position

- State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX

- You can force a subtree to reset its state by giving it a different key

- Don’t nest component definitions, or you’ll reset state by accident

#### State is tied to a position in the render tree

#### Same component at the same position preserves state

#### Different components at the same position reset state

#### Resetting state at the same position

1. Option 1: Rendering a component in different positions
2. Option 2: Resetting state with a key

#### Resetting a form with a key

***

### Extracting State Logic into a Reducer

#### Consolidate state logic with a reducer

1. Step 1: Move from setting state to dispatching actions
1. Step 2: Write a reducer function
1. Step 3: Use the reducer from your component

#### Comparing useState and useReducer

#### Writing reducers well

#### Writing concise reducers with Immer

- Reducers require you to write a bit more code, but they help with debugging and testing.
- Reducers must be pure.
- Each action describes a single user interaction.
- Use Immer if you want to write reducers in a mutating style.

***

### Passing Data Deeply with Context

#### The problem with passing props

#### Context: an alternative to passing props

1. Step 1: Create the context
2. Step 2: Use the context
3. Step 3: Provide the context

#### Using and providing context from the same component

#### Context passes through intermediate components

#### Before you use context

#### Use cases for context

- **Recap:**

- Context lets a component provide some information to the entire tree below it.
- To pass context:

1. Create and export it with export const `MyContext = createContext(defaultValue)`.
2. Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
3. Wrap children into `<MyContext.Provider value={...}>` to provide it from a parent.

- Context passes through any components in the middle.
- Context lets you write components that “adapt to their surroundings”.
- Before you use context, try passing props or passing JSX as children.

***

### Scaling Up with Reducer and Context

#### Combining a reducer with context

1. Step 1: Create the context
2. Step 2: Put state and dispatch into context
3. Step 3: Use context anywhere in the tree

#### Moving all wiring into a single file

- **Recap:**

- You can combine reducer with context to let any component read and update state above it.
- To provide state and the dispatch function to components below:

1. Create two contexts (for state and for dispatch functions).
2. Provide both contexts from the component that uses the reducer.
3. Use either context from components that need to read them.

- You can further declutter the components by moving all wiring into one file.
- You can export a component like TasksProvider that provides context.
- You can also export custom Hooks like useTasks and useTasksDispatch to read it.
- You can have many context-reducer pairs like this in your app
