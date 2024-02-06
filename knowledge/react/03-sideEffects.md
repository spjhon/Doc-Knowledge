# Side Effects

so, in a react app, its forbidden the use of eventlisteners on a component that does not have state, but if the necessity of add an eventlistener without an state its big, its called a side effect and the way to handle it its to have those event listeners inside the useEffect. em I right?

Yes, you are correct! In a React app, side effects like adding event listeners are typically handled within the `useEffect` hook. The `useEffect` hook is designed to manage side effects in functional components.

Here's a brief explanation of why you might use `useEffect` for adding event listeners:

1. **Lifecycle Management:** The `useEffect` hook allows you to manage the lifecycle of your component. It is executed after the initial render and can be used for tasks that need to occur after the component has been mounted.

2. **Avoiding Memory Leaks:** If you add event listeners directly in the component body, they may accumulate if not properly cleaned up. `useEffect` provides a way to define cleanup functions, helping you avoid memory leaks by removing event listeners when the component is unmounted.

Here's an example of how you might use `useEffect` to add and clean up an event listener:

```jsx
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const handleEvent = (event) => {
      // Handle the event here
    };

    // Add event listener
    window.addEventListener('someEvent', handleEvent);

    // Cleanup function
    return () => {
      // Remove event listener when component is unmounted
      window.removeEventListener('someEvent', handleEvent);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  // Component rendering logic...

  return (
    // JSX for your component
  );
};

export default MyComponent;
```

In this example, the event listener is added when the component mounts, and it is removed when the component is unmounted. The empty dependency array (`[]`) ensures that the effect runs only once after the initial render.

By using `useEffect` in this way, you can manage side effects more effectively in your React components.
