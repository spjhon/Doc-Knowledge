---
sidebar_position: 1
---

# JSX Rules

De ChatGPT:

Buena pregunta — no existe una **única lista oficial consolidada de "JSX rules"** como tal en React, pero sí hay un conjunto de **reglas sintácticas y de buenas prácticas** muy bien definidas sobre cómo se escribe y se usa JSX. Te las puedo organizar por categorías para que te quede claro.

---

## 📖 📜 Lista de reglas JSX en React

### 📌 Sintaxis básica

1. **Cada JSX debe tener un elemento raíz único**

   ```jsx
   return (
     <div>
       <h1>Hello</h1>
       <p>World</p>
     </div>
   )
   ```

   O usando fragmentos:

   ```jsx
   return (
     <>
       <h1>Hello</h1>
       <p>World</p>
     </>
   )
   ```

2. **Los atributos en JSX se escriben en camelCase**

   ```jsx
   <button onClick={handleClick}>Click me</button>
   ```

3. **Las clases CSS se asignan con `className`**

   ```jsx
   <div className="container"></div>
   ```

4. **Los valores booleanos se pueden omitir si son `true`**

   ```jsx
   <input disabled />  // igual a disabled={true}
   ```

5. **Los valores JavaScript se insertan con llaves `{}`**

   ```jsx
   <h1>{title}</h1>
   ```

6. **Los comentarios dentro de JSX se escriben con `{/* comentario */}`**

   ```jsx
   return (
     <div>
       {/* Esto es un comentario */}
     </div>
   )
   ```

7. **Self-closing tags para elementos sin hijos**

   ```jsx
   <img src="image.png" />
   ```

---

### 📌 Reglas sobre children y contenido

8. **No se puede retornar múltiples nodos hermanos sin envolver**

   ```jsx
   // Incorrecto
   return <h1></h1><p></p>

   // Correcto
   return (
     <>
       <h1></h1>
       <p></p>
     </>
   )
   ```

9. **Se pueden insertar arrays**

   ```jsx
   <ul>
     {items.map(item => <li key={item.id}>{item.name}</li>)}
   </ul>
   ```

---

### 📌 Props y atributos

10. **Los nombres de props personalizados deben ser camelCase**

    ```jsx
    <MyComponent customValue="Hello" />
    ```

11. **Si una prop espera un valor booleano, puedes omitir el valor**

    ```jsx
    <Button primary />
    ```

---

### 📌 Validación de tipos de props (opcional con PropTypes o TypeScript)

12. **Se recomienda definir `propTypes` o usar TypeScript para tipar las props**

---

### 📌 JSX en expresiones condicionales

13. **Puedes usar ternarios o && para condicionar renderizados**

    ```jsx
    {isLoggedIn ? <Dashboard /> : <Login />}
    {items.length > 0 && <List items={items} />}
    ```

---

### 📌 Nombres de componentes

14. **Los nombres de componentes personalizados deben empezar con mayúscula**

    ```jsx
    const MyComponent = () => <div>Hello</div>
    ```

---

### 📌 Keys en listas

15. **Cada elemento de una lista debe tener una `key` única**

    ```jsx
    {items.map(item => <li key={item.id}>{item.name}</li>)}
    ```

---

### 📌 Accesibilidad y buenas prácticas

16. **Usar elementos semánticos cuando sea posible**

    ```jsx
    <button>Submit</button> en lugar de <div onClick={...}>Submit</div>
    ```

17. **Evitar dangerouslySetInnerHTML a menos que sea necesario**

---

## 📝 Reglas comunes de ESLint (eslint-plugin-react + eslint-plugin-jsx-a11y)

Si usas ESLint con las reglas de React y JSX, algunas de las normas adicionales son:

* `react/jsx-uses-react` (ya obsoleta con React 17+)
* `react/jsx-uses-vars`
* `react/jsx-key`
* `react/jsx-no-undef`
* `react/jsx-no-comment-textnodes`
* `react/self-closing-comp`
* `jsx-a11y/anchor-is-valid`
* `jsx-a11y/alt-text`

Si usas Next.js, ellos sí te instalan y configuran ESLint por defecto al crear el proyecto con: npx create-next-app@latest.

---

## 📌 JSX Rules en resumen

* Elemento raíz único
* camelCase para atributos
* className en lugar de class
* boolean props sin valor explícito
* JavaScript dentro de `{}`
* Comentarios con `{/* */}`
* Self-closing para etiquetas sin hijos
* Ternarios y && para condicionales
* key en elementos de listas
* Nombres de componentes con mayúscula

---
🚀

## Como react re-renderiza

De CHATGPT.

Ya cai en cuenta cuando te pregunte lo de que react no re renderizaba, eso es pero para el DOM, osea que en un re renderizado, si el dom no cambia no re renderiza esa parte del dom, pero ahora entiendo que entre padres e hijos y las funciones que tienen antes del return si se vuelven a definir en cada re render.

¡Juan, excelente! Exactamente eso. Acabas de atrapar uno de los puntos más importantes para entender **cómo funciona React realmente debajo**. Te lo resumo y te lo aterrizo bien:

---

### 📌 React siempre **re-ejecuta las funciones de los componentes funcionales** en cada render

Cada vez que un componente se renderiza:

* Se ejecuta desde el principio hasta el return.
* **Se vuelven a definir todas las variables y funciones que estén dentro del componente**.
* Se recalculan los hooks (`useState`, `useMemo`, `useCallback`, etc.) según su control de dependencias.
* Se construye un nuevo árbol virtual DOM (Virtual DOM).

---

### 📌 Pero React **no actualiza el DOM real** si el Virtual DOM no cambia

Después de ejecutar todo el render:

* Compara el nuevo Virtual DOM con el anterior (**reconciliación**).
* Si detecta diferencias, **actualiza solo esas partes del DOM real**.
* Si no, **el DOM queda tal cual**.

👉 Eso es lo que tú mencionabas:
**React no renderiza (actualiza) esa parte del DOM real si no cambió**.
Pero **sí ejecuta las funciones y componentes para calcular qué debería renderizarse**.

---

### 📦 Visualizando el flujo

1️⃣ Cambia algo (state, props o context).
2️⃣ React **ejecuta la función de cada componente funcional afectado**.
3️⃣ Se genera un nuevo Virtual DOM.
4️⃣ Se compara contra el anterior (diffing).
5️⃣ Solo si hay diferencias, se actualiza esa parte del DOM real.

---

### 📌 Y por eso existen `React.memo`, `useMemo` y `useCallback`

Porque como React **sí vuelve a ejecutar todo el componente funcional** en cada render:

* Si dentro tienes operaciones costosas → `useMemo`.
* Si defines funciones que pasas como prop y quieres que mantengan la misma referencia → `useCallback`.
* Si quieres evitar que un componente hijo vuelva a ejecutarse/renderizarse sin cambios de props → `React.memo`.

---

### 📖 Así que, en resumen

✔️ **Funciones y variables dentro de un componente funcional se recrean en cada render.**
✔️ **El Virtual DOM se vuelve a generar.**
✔️ **Solo se actualiza el DOM real si el Virtual DOM cambió.**

---
