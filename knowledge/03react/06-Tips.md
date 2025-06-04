---
sidebar_position: 6
---

# 6. Tips de diferentes fuentes

## Tips del repositorio AMATEUR REACT BEST PRACTICES

- Don't place static values inside functional-components, if you do they'll have to be reinitialized everytime the component state is updated, which could affect performance for large complex applications. Place them at the top of the file under the // **** Variables **** // section (see Typescript best practices).
- If a function inside a functional-component is large and its logic does not need to change with the component, move it outside the component and put it in the // **** Helper Functions **** // section at the bottom of the file: this is will stop the logic from needing to be reinitialized each time.
- In complying with TypeScript best practices, use function-declarations for functions at the top scope of a file and arrow-functions if a function is declared inside of another function:

```tsx
function Parent() {
  return (
    <Child
      onClick={() => doSomething()} // GOOD
      onMouseDown={function () { ..doSomething }} // BAD
    />
  );
}
```

### Good Tyescript and bad Typescript en REACT

```ts
import Box, { BoxProps } from '@mui/material/Box';

function Parent() {
  return (
    <Box>
      <Child1 mb={1}/>
      <Child2/>
      <SomeOtherChild/>
    </Box>
  );
}


// GOOD

interface IProps1 extends BoxProps {
  name?: string;
  posts?: string[];
}

function Child1(props: IProps1) {
  const {
    name = '',
    posts = [],
    ...otherProps
  } = props;
  return (
    <Box {...otherProps}>
      Name: {name} Posts: {posts.length}
    </Box>
  );
}


// BAD

interface IProps2 {
  name?: string;
  posts?: string[];
}

function Child2(props: IProps2) {
  return (
    <Box mb={2}>
      Name: {props.name ?? ''} Posts: {props.posts?.length ?? 0}
    </Box>
  );
}
```
