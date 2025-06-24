---
sidebar_position: 3
---

# Renderizados en next js

## Resumen

Aquí tienes un resumen bien estructurado y corregido sobre los tipos de renderizado en Next.js, con ejemplos para mayor claridad:  

---

### **Renderizado en Next.js: Tipos de Componentes y su Comportamiento**

Next.js utiliza **Server-Side Rendering (SSR) por defecto** en todos los componentes, salvo que se indique lo contrario con `"use client"`. Dependiendo de cómo se defina un componente, puede comportarse de diferentes maneras:

---

### **1. Componentes Estáticos (Static Rendering)**

Son aquellos que **se renderizan solo una vez en la build** y se reutilizan en cada solicitud. Estos componentes **no incluyen lógica dinámica** ni hooks de React (como `useState` o `useEffect`).  

- **No usan `"use client"` ni `async`.**
- **El HTML generado se almacena en caché y solo cambia si se ejecuta una revalidación.**  

#### **Ejemplo de un componente estático**  

```tsx
export default function StaticComponent() {
  return <h1>Este contenido es estático</h1>;
}
```

🔹 **Cuándo se actualiza:** Si se usa un mecanismo de revalidación (como ISR o webhooks).

---

### **2. Componentes Cliente (`"use client"`)**

Estos componentes se renderizan en el **servidor inicialmente**, pero luego **se hidratan en el cliente** con datos interactivos.  

- **Usan `"use client"` en la primera línea.**  
- **El HTML y los props se envían como JSON al cliente para su hidratación.**  
- **No pueden ser `async`** (ya que los `async` son Server Components).  

#### **Ejemplo de un componente cliente**  

```tsx
"use client";
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Contador: {count}
    </button>
  );
}
```

🔹 **Cuándo se actualiza:** En cada interacción del usuario.

---

### **3. Componentes Asíncronos (`async`) - Server Components**

Estos componentes **esperan datos antes de renderizarse** y se ejecutan **exclusivamente en el servidor**.  

- **Son `async`, lo que permite hacer `fetch` directamente en el servidor.**  
- **Se renderizan en cada request o según la estrategia de caché.**  
- **No pueden usar hooks del cliente (`useState`, `useEffect`, etc.).**  

#### **Ejemplo de un componente asíncrono en el servidor**  

```tsx
async function ServerComponent() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());
  
  return <div>Tarea: {data.title}</div>;
}

export default ServerComponent;
```

🔹 **Cuándo se actualiza:**  

- Por defecto, usa caché (`force-cache`).  
- Puede revalidarse en cada request con `cache: "no-store"`.  

---

### **4. Incremental Static Regeneration (ISR)**

ISR permite **actualizar componentes estáticos sin reconstruir toda la aplicación**. Esto se logra con `revalidate`, que define cada cuántos segundos se debe regenerar el contenido.  

#### **Ejemplo de ISR en un Server Component**  

```tsx
export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());

  return {
    props: { data },
    revalidate: 10, // Se revalida cada 10 segundos
  };
}
```

🔹 **Cuándo se actualiza:** Automáticamente cada X segundos o mediante un webhook.

---

### **Resumen Final**

| Tipo de Componente | ¿Dónde se ejecuta? | ¿Puede usar hooks del cliente? | ¿Puede ser async? | ¿Cuándo se actualiza? |
|--------------------|------------------|----------------------|---------------|----------------|
| **Estático** | Servidor | ❌ | ❌ | Solo en build o con ISR |
| **Cliente (`"use client"`)** | Cliente | ✅ | ❌ | En cada interacción |
| **Asíncrono (`async`)** | Servidor | ❌ | ✅ | En cada request o con caché |
| **ISR** | Servidor | ❌ | ✅ | Cada X segundos o con webhooks |

---

**Conclusión:**  

- **Los componentes sin `"use client"` son Server Components por defecto.**  
- **Si un componente usa `async`, es un Server Component y espera datos antes de enviarse al cliente.**  
- **Si un componente tiene `"use client"`, se renderiza en el servidor inicialmente, pero se hidrata en el cliente.**  
- **ISR permite que los componentes estáticos se revaliden sin necesidad de hacer una nueva build.**  

Este sistema flexible en Next.js permite optimizar el rendimiento según las necesidades de cada aplicación. 🚀
