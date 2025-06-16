---
sidebar_position: 6
---

# Async Handlers

Extraido de ChatGPT:

Excelente pregunta — te lo resumo con claridad, porque entender cómo se comporta React con handlers `async` y con funciones `async` dentro de handlers normales es fundamental para evitar confusiones con secuencias de ejecución.

---

## 📌 Conceptos básicos

* **Los handlers en React** son funciones que se disparan en respuesta a eventos (click, submit, change…).
* Estas funciones pueden ser **normales o `async`**.
* Dentro de cualquier función normal se pueden llamar funciones `async`.
* Las funciones `async` siempre retornan una `Promise`.

---

## 📌 Escenarios y secuencia de ejecución

### 1️⃣ **Handler marcado como `async`**

```jsx
const handleClick = async () => {
  console.log("Inicio handler");

  await fetch("/api/data");
  
  console.log("Después del fetch");
};
```

**Secuencia:**

* Se ejecuta `console.log("Inicio handler")`.
* Se hace el `fetch`, y **el resto del handler se pausa hasta que se resuelva**.
* Cuando se resuelve, se ejecuta `console.log("Después del fetch")`.

➡️ **Ventaja**: puedes usar `await` directamente dentro del handler para secuenciar cosas.

---

### 2️⃣ **Handler normal que llama a una función `async`**

```jsx
const handleClick = () => {
  console.log("Inicio handler");

  fetchData();

  console.log("Después de fetchData");
};

const fetchData = async () => {
  await fetch("/api/data");
  console.log("Después del fetch en fetchData");
};
```

**Secuencia:**

* Se ejecuta `console.log("Inicio handler")`.
* Se llama `fetchData()` → devuelve inmediatamente una `Promise` (porque es `async`), pero **el handler no espera su resolución**.
* Se ejecuta `console.log("Después de fetchData")`.
* **Cuando la `Promise` se resuelve**, se ejecuta `console.log("Después del fetch en fetchData")`.

➡️ **Ventaja**: el handler sigue ejecutando lo que sigue sin esperar, ideal para operaciones que no son bloqueantes.

---

## 📊 Comparativa de flujo

| Acción                            | `async` handler (con `await`)              | Handler normal + función `async`        |
| :-------------------------------- | :----------------------------------------- | :-------------------------------------- |
| Se ejecuta línea antes de `await` | ✅                                          | ✅                                       |
| Se hace pausa hasta que termine   | ✅                                          | ❌                                       |
| Lo que sigue después del `await`  | Se ejecuta **después** del `await`         | No aplica (porque el handler no espera) |
| Lo que sigue en el handler mismo  | No se ejecuta hasta que termine el `await` | Se ejecuta inmediatamente               |
| Código dentro de función `async`  | Secuenciado con `await`                    | Secuenciado con `await` dentro de ella  |

---

## 📌 Conclusión

* Si tu **handler es `async` y usa `await`**, el propio handler se "pausa" donde haya `await`.
* Si tu **handler es normal y llama a una función `async`**, esa llamada devuelve inmediatamente una `Promise`, el handler continúa y la función `async` gestiona su propio `await` de forma asíncrona.

---

## 📖 Recomendación

Usa `async` en el handler **solo si necesitas secuenciar pasos dentro de él mismo**, de lo contrario es más limpio tener un handler normal que llama funciones `async` para tareas independientes.

---
