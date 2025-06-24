---
sidebar_position: 7
---

# Diferencia entre utilizar o no use() con Suspence

entonces como dices aca: Si no tienes varias promesas o no te importa la sincronía dentro de ese subtree, ambos se comportan muy parecido desde el punto de vista del cliente. si tengo mas de una promesa, se quedaria esperando el primer await y hasta que ese no se resuelva no sigue, pero gracias a use, estas promesas se resuelven al mismo tiempo o que, no entiendo

Muy buena observación Juan — ahora sí estás tocando **el punto exacto donde `use()` marca la diferencia operativa real**. Te lo voy a explicar de forma bien estructurada y con ejemplo mental porque es una duda clave y normal.

---

## 📌 📖 ¿Qué pasa con varias promesas en un `async` Server Component?

Si tienes esto:

```tsx
export default async function Posts() {
  const data1 = await fetchPosts();
  const data2 = await fetchTrending();

  return (
    <>
      <p>{data1.title}</p>
      <p>{data2.title}</p>
    </>
  );
}
```

👉 **El componente suspende en `await fetchPosts()`**
👉 **Hasta que `fetchPosts()` no resuelve, no llega ni siquiera a llamar `fetchTrending()`**
👉 Por tanto: **las promesas se resuelven en secuencia, una después de la otra**.

Aunque ambas pudieran empezar al mismo tiempo, en esa estructura solo se inicia la segunda después de resolver la primera porque el `await` detiene la función.

---

## 📌 📖 ¿Qué pasa con `use()` en Server Components?

Si en lugar de eso, haces:

```tsx
import { use } from 'react';

function Posts() {
  const data1 = use(fetchPosts());
  const data2 = use(fetchTrending());

  return (
    <>
      <p>{data1.title}</p>
      <p>{data2.title}</p>
    </>
  );
}
```

👉 **Ambas promesas (`fetchPosts()` y `fetchTrending()`) se disparan en paralelo**
👉 React suspende ese componente en cuanto encuentra la primera promesa pendiente.
👉 Si hay un `<Suspense>` envolviendo este componente, React usa su fallback.
👉 Mientras tanto, **ambas promesas avanzan al mismo tiempo en paralelo**.
👉 Cuando ambas se resuelven, React reanuda el render, usando los datos.

✅ Lo bueno: **no tienes que esperar una para iniciar la otra**.
✅ Lo mejor: React puede incluso resolver fragmentos parciales en streaming si están en `<Suspense>` separados.

---

## 📌 📖 Resumen visual

| 📌                                                     | `await` secuencial (async)                                | `use()` concurrente |
| :----------------------------------------------------- | :-------------------------------------------------------- | :------------------ |
| Primera promesa detiene todo                           | Primera promesa suspende ahí                              |                     |
| Segunda promesa solo empieza cuando termina la primera | Ambas promesas empiezan de inmediato                      |                     |
| Suspense resuelve todo junto al final                  | Suspense podría resolver fragmentos conforme estén listos |                     |

---

## 📌 📖 Entonces, sí: **con `use()` las promesas se resuelven en paralelo**

Y esa es **la diferencia clave y el porqué de su existencia**.

Por eso en React 19 / Next.js 15 se recomienda **usar `use()` en Server Components síncronos** en lugar de declarar todo `async`, porque así se aprovecha el **concurrent rendering y granular streaming**, y no detienes el resto del render si una promesa demora.

---

## 📌 📖 Conclusión resumida

✅ Si usas `await` en una función `async`, bloqueas secuencialmente.
✅ Si usas `use()` en promesas independientes, todas se disparan en paralelo desde el principio y suspenden por separado.

---

**Tu razonamiento fue correcto:**

> gracias a use, estas promesas se resuelven al mismo tiempo.

✔️ Exactamente.
**No porque React las “espere todas a la vez”, sino porque con `use()` no bloqueas la ejecución antes de disparar la siguiente promesa.** En cambio, con `await` sí.

---

Si quieres, te puedo escribir ahora mismo un código con logs de timestamps en consola para ver cómo se comportan las dos estrategias, ¿te gustaría? 🚀
