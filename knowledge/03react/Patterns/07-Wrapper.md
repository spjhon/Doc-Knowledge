---
sidebar_position: 7
---

# Wrapper for Performance

Claro Juan — te lo voy a explicar ahora con otro ejemplo más directo y muy visual, para que veas qué significa eso de "el componente wrapper cambia su estado pero sus `children` no se re-renderizan", y cómo eso evita tener que usar `useCallback`.

---

## 📖 Ejemplo sin `children` (con función prop)

```jsx
const Child = () => {
  console.log("👶 Se renderiza Child");
  return <p>Child</p>;
};

const Parent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Child />
    </div>
  );
};

ReactDOM.render(<Parent />, document.getElementById("root"));
```

### 📝 ¿Qué pasa?

* Cada vez que haces click en el botón:

  * `Parent` se renderiza.
  * Y **también se renderiza `Child`** porque React ejecuta todo el árbol desde `Parent` hacia abajo.
  * Como `Child` es una llamada a un componente dentro del return, React lo ejecuta de nuevo.

Solución usual: `React.memo(Child)`.

---

## 📖 Ejemplo con `children` (la recomendación de los docs)

Ahora vamos a hacer `Parent` como un **wrapper visual**, y pasarle `children`:

```jsx
const Wrapper = ({ children }) => {
  const [count, setCount] = React.useState(0);
  console.log("📦 Se renderiza Wrapper");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      {children}
    </div>
  );
};

const App = () => {
  console.log("📱 Se renderiza App");

  return (
    <Wrapper>
      <h1>Hola desde el hijo</h1>
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### 📝 ¿Qué pasa ahora?

* Cuando haces click en el botón:

  * `Wrapper` se renderiza (porque cambia su `count`).
  * **Pero `children` se mantiene intacto**, porque React recuerda que ese `children` (el `<h1>Hola desde el hijo</h1>`) **no cambió desde la perspectiva del Virtual DOM**.
  * No hace falta memorizar nada.
  * No se vuelve a renderizar `App` ni el `<h1>`.

---

## 📌 Diferencia clave

* Cuando metes componentes **directamente en el return del padre**, se ejecutan en cada render del padre.
* Cuando pasas esos mismos componentes como `children`, React puede preservar su valor en memoria (porque son props, y su referencia no cambia a menos que tú cambies el `children`).

---

## 📦 Resumen práctico

| Forma                             | ¿Se renderiza de nuevo si el contenedor cambia su estado? |
| :-------------------------------- | :-------------------------------------------------------- |
| Como componente dentro del return | ✅ Sí                                                      |
| Como `children` prop              | ❌ No                                                      |

---

### ✅ Por eso la recomendación

**Si tu componente es solo un contenedor visual que no depende de su contenido para renderizar, acepta `children` en lugar de pasar funciones como props.**
Así te ahorras tener que meter `useCallback` o `React.memo` para controlar referencias.

---
