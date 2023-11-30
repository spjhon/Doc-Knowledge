---
sidebar_position: 4
---

# Tips Manage State

## [From the docs](https://react.dev/learn/managing-state)

- If a component has a lot of visual states, it can be convenient to show them all on one page
- You can trigger state updates in response to two kinds of inputs:

1. Human inputs, like clicking a button, typing in a field, navigating a link.
2. Computer inputs, like a network response arriving, a timeout completing, an image loading.

- My recommendation is to use Redux for complex global state management and Context for prop drilling.

### Reacting to Input with State

- Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
- When developing a component:

1. Identify all its visual states.
2. Determine the human and computer triggers for state changes.
3. Model the state with useState.
4. Remove non-essential state to avoid bugs and paradoxes.
5. Connect the event handlers to set state.