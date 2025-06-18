---
sidebar_position: 6
---

# useContext

Perfecto — te voy a explicar **useContext** de React a fondo, para qué sirve, cómo funciona y cuándo conviene usarlo.

---

## 📌 ¿Qué es `useContext`?

`useContext` es un **hook** de React que te permite **acceder al valor de un contexto** desde cualquier componente funcional que esté dentro del proveedor (`<Context.Provider>`).
Es una forma de **compartir datos o estado global** entre componentes sin tener que pasar props manualmente a través de toda la jerarquía.

---

## 📌 ¿Qué es un Contexto en React?

React Context es una herramienta para **pasar datos a través de la estructura de componentes** sin tener que enviarlos por props en cada nivel.

Se compone de:

* 📦 `React.createContext()` → Crea el contexto.
* 🎁 `<Context.Provider>` → Proporciona un valor para los componentes descendientes.
* 📞 `useContext(Context)` → Consume ese valor desde cualquier componente hijo.

---

## 📌 ¿Para qué sirve `useContext`?

Sirve para **leer directamente el valor del contexto** en un componente sin necesidad de pasar props.
Ideal para casos como:

* Temas (dark/light mode)
* Idiomas (localización)
* Estados de autenticación
* Configuraciones de la aplicación
* Cualquier dato global que necesites compartir en varios niveles de la app.

---

## 📌 Ejemplo completo

### 📝 Creación de un contexto

```jsx
import React, { createContext, useState } from "react";

export const UserContext = createContext();
```

### 📝 Creación del proveedor

```jsx
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Juan");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

### 📝 Consumo usando `useContext`

```jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return <h1>Bienvenido, {user}</h1>;
};
```

Para que funcione, este componente debe estar dentro de `<UserProvider>`:

```jsx
<UserProvider>
  <App />
</UserProvider>
```

---

## 📌 ¿Cómo funciona internamente?

Cuando llamas a `useContext(Context)`:

* React busca **el valor más cercano** de `<Context.Provider>` en la jerarquía.
* Si no encuentra ningún `<Provider>`, usa el **valor por defecto** definido en `createContext(valorPorDefecto)`.

Además:

* Cuando el valor del contexto cambia, **todos los componentes que lo usan se vuelven a renderizar**.
* Solo los componentes que usan `useContext` de ese contexto se renderizan de nuevo.

---

## 📌 Ventajas de `useContext`

✅ Evita el prop drilling (pasar props manualmente por varios niveles).
✅ Hace que el código sea más limpio y modular.
✅ Es fácil de combinar con otros hooks (`useState`, `useReducer`) para gestionar estados globales.

---

## 📌 Limitaciones de `useContext`

⚠️ Si tienes muchos cambios frecuentes en el contexto, puede generar renderizados innecesarios en todos los componentes que lo consumen.
Para manejar esto, puedes usar `useMemo` o dividir el contexto en varios más específicos.

---

## 📌 Resumen visual

```cmd
<App>
 └── <UserProvider value="Juan">
       └── <UserProfile /> → usa useContext(UserContext)
```

---

## 📌 Casos típicos de uso

* 🌙 Tema de la aplicación (modo claro/oscuro)
* 🔐 Autenticación de usuario
* 🌍 Idioma actual de la interfaz
* 📋 Carrito de compras en ecommerce
* 📊 Configuración de preferencias del usuario

---

Si quieres te puedo preparar un ejemplo con varios contextos anidados o combinados con `useReducer` (que es una práctica muy potente).

---

¿Te gustaría que te lo deje también con TypeScript o animado con algún ejemplo interactivo en CodeSandbox? 🚀
