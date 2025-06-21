# Layout vs Template

entonces, resetea el state que haya en este componente y en los componentes hijos o si un componente hijo tiene su propio state este se reinicia?, aunque ahora que lo pienso ese componente o page si se navega a otro lado por ejempo un hijo del mismo layout, creeria que ese state se borra entonces en layout, este state se reiniciaira si el state esta dentro de layout.

Excelente razonamiento — déjame aclarártelo con precisión porque es clave para entender cómo funciona la arquitectura en Next.js 13+ (App Router).

---

## 📌 ¿Qué pasa con el estado (`useState`) en `layout.tsx`, `template.tsx`, y `page.tsx`?

### 🔸 `layout.tsx`

* **Se monta una sola vez** cuando entras por primera vez a su ámbito.
* Se **mantiene montado mientras navegas entre las páginas hijas de su ruta**.
* **Su estado (`useState`) se conserva mientras no salgas de su ámbito**.
* Si navegas a otra página dentro del mismo layout → el estado **se mantiene**.
* Si navegas a una ruta fuera de ese layout (o con otro layout) → el estado **se desmonta y se pierde**.

**Ejemplo:**

```tsx
// /app/dashboard/layout.tsx
"use client"
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Contar {count}</button>
      {children}
    </div>
  );
}
```

✔ Si navegas entre `/dashboard/page.tsx` y `/dashboard/otra-page.tsx`, el contador **se mantiene**.

❌ Si sales a `/profile` que está bajo otro layout, el layout `DashboardLayout` **se desmonta** y su estado se resetea.

---

### 🔸 `template.tsx`

* **Se monta cada vez que navegas a una nueva página dentro de su ámbito.**
* Su estado (`useState`) **se reinicia en cada carga**.
* Y **los estados de sus componentes hijos también se reinician**, porque todo el árbol se vuelve a montar.

**Ejemplo:**

```tsx
// /app/dashboard/template.tsx
"use client"
import { useState } from "react";

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Contar en template {count}</button>
      {children}
    </div>
  );
}
```

✔ Si navegas a `/dashboard/page.tsx`, se monta.
✔ Si cambias a `/dashboard/otra-page.tsx`, se desmonta el template anterior, se vuelve a montar, y **el estado se reinicia a cero**.

---

### 🔸 `page.tsx` y sus componentes hijos

* Cada `page.tsx` **se monta y desmonta en cada navegación**.
* Su estado (`useState`) **siempre se reinicia**.
* Y los estados de los componentes hijos de `page.tsx` **también se reinician** en cada carga de página.

---

## 📊 Resumen visual

| Componente   | ¿Persiste su estado entre páginas? | ¿Cuándo se desmonta?            |
| :----------- | :--------------------------------- | :------------------------------ |
| **Layout**   | ✅ Mientras sigas en su ámbito      | Al salir de su ámbito           |
| **Template** | ❌ Se reinicia en cada navegación   | En cada navegación a una página |
| **Page**     | ❌ Se reinicia en cada navegación   | En cada navegación a una página |

---

## 📌 Entonces respondiendo a tu pregunta

> **"¿Si un template resetea su state, también resetea el de los hijos?"**

✅ Sí.
Cuando navegas a una nueva `page.tsx`:

* Se desmonta el `template.tsx`
* Se desmontan todos los componentes hijos, incluyendo su estado.
* Se monta de nuevo el `template.tsx` y la nueva `page.tsx` (y sus hijos), todos con su estado limpio.

---

## 📌 Y con los layouts

> **"¿El state en layout se mantiene si navego entre páginas hijas? Y se borra si salgo de su ámbito?"**

✅ Exacto.

* Mientras te muevas entre rutas que están dentro del mismo `layout.tsx`, su estado **se mantiene**.
* Si sales a una ruta que pertenece a otro layout, **se desmonta** y su estado se pierde.

---

## 📎 Si quieres te puedo hacer un mini sandbox o ejemplo interactivo para verlo funcionando en Next.js 13/14. Solo dime 🙂
