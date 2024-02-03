---
sidebar_position: 2
---

# Conditional Patterns React

Conditional rendering in React involves rendering different content or components based on certain conditions. There are several patterns and approaches to achieve conditional rendering in React. Here are some common patterns:

1. **Inline If with Logical && Operator:**

   ```jsx
   function MyComponent({ isLoggedIn }) {
     return (
       <div>
         {isLoggedIn && <p>Welcome, User!</p>}
       </div>
     );
   }
   ```

2. **Conditional Rendering with Ternary Operator:**

   ```jsx
   function MyComponent({ isLoggedIn }) {
     return (
       <div>
         {isLoggedIn ? (
           <p>Welcome, User!</p>
         ) : (
           <p>Please log in</p>
         )}
       </div>
     );
   }
   ```

3. **Using the `map` Function:**

   ```jsx
   function MyComponent({ items }) {
     return (
       <ul>
         {items.map((item) => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     );
   }
   ```

4. **Switch Statement:**

   ```jsx
   function getStatusMessage(status) {
     switch (status) {
       case 'loading':
         return <p>Loading...</p>;
       case 'success':
         return <p>Data loaded successfully!</p>;
       case 'error':
         return <p>Error loading data.</p>;
       default:
         return null;
     }
   }

   function MyComponent({ status }) {
     return <div>{getStatusMessage(status)}</div>;
   }
   ```

5. **Using a Function for Conditional Rendering:**

   ```jsx
   function Greeting({ isLoggedIn }) {
     function UserGreeting() {
       return <p>Welcome back!</p>;
     }

     function GuestGreeting() {
       return <p>Please sign up.</p>;
     }

     return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
   }
   ```

6. **Render Props Pattern:**

   ```jsx
   function ConditionalRender({ condition, trueComponent, falseComponent }) {
     return condition ? trueComponent() : falseComponent();
   }

   function MyComponent({ isLoggedIn }) {
     return (
       <ConditionalRender
         condition={isLoggedIn}
         trueComponent={() => <p>Welcome, User!</p>}
         falseComponent={() => <p>Please log in</p>}
       />
     );
   }
   ```

Choose the pattern that best fits your specific use case and coding style. The key is to keep your code readable and maintainable.
