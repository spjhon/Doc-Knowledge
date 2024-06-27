# JXS rules

Escribir JSX en React requiere seguir varias reglas y convenciones para garantizar que el código sea correcto y funcional. Aquí tienes una lista completa de las reglas y buenas prácticas al escribir JSX:

### Sintaxis Básica

1. **JSX debe tener un único elemento padre:**

   ```jsx
   return (
     <div>
       <h1>Hello, world!</h1>
     </div>
   );
   ```

2. **Los componentes deben empezar con letra mayúscula:**

   ```jsx
   function MyComponent() {
     return <div>My Component</div>;
   }
   ```

3. **Los atributos de JSX usan camelCase:**

   ```jsx
   <div className="container"></div>
   ```

4. **El atributo `class` se llama `className`:**

   ```jsx
   <div className="container"></div>
   ```

5. **El atributo `for` se llama `htmlFor`:**

   ```jsx
   <label htmlFor="inputId">Label</label>
   <input id="inputId" />
   ```

6. **Las etiquetas vacías pueden autocompletarse:**

   ```jsx
   <img src="image.jpg" alt="description" />
   ```

### Expresiones en JSX

7. **Las expresiones de JavaScript se encierran en llaves `{}`:**

   ```jsx
   <h1>{title}</h1>
   ```

8. **Las expresiones condicionales se hacen con operadores ternarios:**

   ```jsx
   <div>{isLoggedIn ? "Welcome back!" : "Please log in."}</div>
   ```

9. **Para aplicar lógica condicional compleja, usa funciones o variables auxiliares:**

   ```jsx
   function renderGreeting(user) {
     if (user) {
       return <h1>Hello, {user.name}!</h1>;
     }
     return <h1>Hello, stranger.</h1>;
   }
   ```

### Propiedades y Eventos

10. **Los eventos se nombran usando camelCase:**

    ```jsx
    <button onClick={handleClick}>Click me</button>
    ```

11. **Las propiedades booleanas pueden omitirse si son verdaderas:**

    ```jsx
    <input type="checkbox" checked />
    ```

12. **Evita usar `bind` en el renderizado; usa funciones flecha o métodos de clase:**

    ```jsx
    // Con método de clase
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        console.log("Clicked");
      }

      render() {
        return <button onClick={this.handleClick}>Click me</button>;
      }
    }

    // Con función flecha
    class MyComponent extends React.Component {
      handleClick = () => {
        console.log("Clicked");
      };

      render() {
        return <button onClick={this.handleClick}>Click me</button>;
      }
    }
    ```

### Estilos

13. **Los estilos en línea se pasan como objetos:**

    ```jsx
    const divStyle = {
      color: "blue",
      backgroundColor: "lightgray",
    };

    <div style={divStyle}>Styled div</div>;
    ```

### Fragmentos

14. **Usa `<React.Fragment>` o la sintaxis corta `<> </>` para devolver múltiples elementos:**

    ```jsx
    return (
      <>
        <h1>Title</h1>
        <p>Description</p>
      </>
    );
    ```

### Listas y Claves

15. **Al renderizar listas, cada elemento debe tener una propiedad `key` única:**

    ```jsx
    const items = ["Item 1", "Item 2", "Item 3"];
    const listItems = items.map((item, index) => <li key={index}>{item}</li>);

    return <ul>{listItems}</ul>;
    ```

### Otras Buenas Prácticas

16. **No mezcles lógica de presentación y lógica de negocio en el mismo componente:**

    ```jsx
    // Desacopla lógica de negocio en funciones separadas
    function calculateTotal(items) {
      return items.reduce((total, item) => total + item.price, 0);
    }

    function ShoppingCart({ items }) {
      const total = calculateTotal(items);
      return (
        <div>
          <h1>Shopping Cart</h1>
          <p>Total: ${total}</p>
        </div>
      );
    }
    ```

17. **Mantén el JSX limpio y legible usando componentes pequeños y reutilizables:**

    ```jsx
    function UserGreeting({ user }) {
      return <h1>Hello, {user.name}!</h1>;
    }

    function GuestGreeting() {
      return <h1>Hello, stranger.</h1>;
    }

    function Greeting({ user }) {
      if (user) {
        return <UserGreeting user={user} />;
      }
      return <GuestGreeting />;
    }
    ```

18. **Usa PropTypes para validar las props de los componentes:**

    ```jsx
    import PropTypes from "prop-types";

    function MyComponent({ title }) {
      return <h1>{title}</h1>;
    }

    MyComponent.propTypes = {
      title: PropTypes.string.isRequired,
    };
    ```

Siguiendo estas reglas y buenas prácticas, asegurarás que tu código JSX sea correcto, eficiente y fácil de mantener.
