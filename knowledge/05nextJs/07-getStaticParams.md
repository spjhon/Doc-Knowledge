---
sidebar_position: 8
---

# getStaticParams

claro, como su nombre lo indica, esto solo sirve cuando se tiene slugs y aun asi se quiere tener ese codigo en modo statico?, esa si?.

¡Exacto, Juan! 🔥
Ese es justamente **el propósito de `generateStaticParams`**:

👉 **Cuando tienes rutas dinámicas (con slugs o cualquier parámetro en la URL)**, pero quieres igualmente que Next.js **prerenderice en build-time versiones estáticas de esas rutas específicas**.

---

## 📌 📖 ¿Por qué existe `generateStaticParams`?

Porque cuando tú tienes una ruta como:

```cmd
/app/products/[slug]/page.tsx
```

Next.js **no sabe qué valores puede tener `[slug]` en build-time**.

Para que Next.js pueda generar archivos estáticos para esas rutas en `next build`, necesitas decirle:

* **qué valores de `slug` existen** en ese momento.
* Y que renderice esas páginas por anticipado.

Eso se hace justo con:

```ts
export async function generateStaticParams() {
  const slugs = await fetchSlugs();
  return slugs.map(slug => ({ slug }));
}
```

Así Next.js sabe en build-time:

* Qué rutas dinámicas existen.
* Que debe prerenderizar esas rutas a HTML.
* Guardarlas en `.next` y servirlas como estáticas en producción.

---

## 📌 📖 Entonces: **¿Cuándo usas `generateStaticParams`?**

✅ Cuando tienes una ruta dinámica (`[slug]`, `[id]`, etc)
✅ Y quieres **hacer SSG (Static Site Generation)** para esas rutas específicas.

---

## 📌 📖 ¿Y cuándo no lo necesitas?

✅ Si la ruta **no tiene segmentos dinámicos**
✅ O si quieres que la ruta dinámica se genere **en runtime con SSR** (por ejemplo si los slugs cambian frecuentemente y no quieres rebuild)

---

## 📌 📖 Resumen visual

| 📌 Ruta                                       | `generateStaticParams` | Resultado                       |
| :-------------------------------------------- | :--------------------- | :------------------------------ |
| `/about`                                      | ❌                      | Se prerenderiza automáticamente |
| `/products/[slug]` sin `generateStaticParams` | ❌                      | SSR en runtime en cada request  |
| `/products/[slug]` con `generateStaticParams` | ✅                      | SSG, prerenderiza en build-time |

---

## 📌 📖 Conclusión

✔️ Como bien dijiste:

> **como su nombre lo indica, esto solo sirve cuando se tiene slugs y aun asi se quiere tener ese código en modo estático**

✅ Tal cual.
**Su propósito es permitir que las rutas dinámicas puedan convertirse en estáticas en build-time.**

---

Si quieres te puedo diagramar cómo queda el flujo de render según este comportamiento. ¿Te gustaría? 🚀
