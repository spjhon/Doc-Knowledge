# Cambio URL sin recargar la pagina

Excelente que preguntes eso Juan — porque esa sección de los docs puede ser confusa si no te explican **por qué querrías usar `window.history.pushState` y `window.history.replaceState` manualmente en una app de Next.js**, cuando normalmente usas `router.push()` o `router.replace()`.

Te lo explico despacio:

---

## 📌 📖 ¿Qué es `window.history.pushState` y `replaceState`?

Son métodos **del API nativo del navegador** para cambiar la URL en la barra de direcciones **sin recargar la página** y **sin hacer una navegación completa**.

### 📌 `pushState()`

👉 Añade una nueva entrada al historial del navegador
👉 El usuario puede volver atrás con el botón de "atrás"

### 📌 `replaceState()`

👉 Cambia la URL actual **sin añadir una nueva entrada al historial**
👉 El usuario no puede volver atrás, porque no se guarda un historial de ese cambio.

---

## 📌 📖 ¿Por qué los permite Next.js y qué ventaja tienen aquí?

En Next.js **App Router**, tú normalmente haces:

```tsx
'use client'

import { useRouter } from 'next/navigation'

const router = useRouter()

router.push('/nueva-url')
router.replace('/otra-url')
```

Pero, **si lo único que quieres es cambiar los query params, o ajustar el pathname en la barra de direcciones sin disparar una navegación de Next.js**, puedes usar directamente el `window.history.pushState` o `replaceState`.

### 📌 Ventaja

* **No hace una navegación completa (client navigation)**.
* **No recarga ni re-renderiza componentes** que dependen de `usePathname()` o `useSearchParams()`.
* **Sincroniza correctamente el estado del navegador y los hooks de Next.js (`usePathname` / `useSearchParams`)** porque Next 14+ App Router está hecho para escuchar los cambios del History API nativo.

---

## 📌 📖 Ejemplos explicados

### 🔸 📖 1️⃣ Cambiar los query params sin navegación

Supón que tienes una lista de productos y quieres cambiar el orden de forma local:

```tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
  const searchParams = useSearchParams()

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <>
      <button onClick={() => updateSorting('asc')}>Ascendente</button>
      <button onClick={() => updateSorting('desc')}>Descendente</button>
    </>
  )
}
```

👉 Esto **solo cambia los query params** en la barra de direcciones
👉 **No recarga nada**
👉 Si otro componente está usando `useSearchParams()`, reaccionará al cambio

---

### 🔸 📖 2️⃣ Cambiar el idioma (pathname) sin dejar rastro en el historial

```tsx
'use client'

import { usePathname } from 'next/navigation'

export function LocaleSwitcher() {
  const pathname = usePathname()

  function switchLocale(locale: string) {
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <>
      <button onClick={() => switchLocale('en')}>Inglés</button>
      <button onClick={() => switchLocale('fr')}>Francés</button>
    </>
  )
}
```

👉 Cambia la URL para que refleje otro idioma
👉 Pero **no guarda esa navegación en el historial** (porque usa `replaceState`)
👉 El usuario no puede volver atrás con el botón del navegador a la ruta anterior.

---

## 📌 📖 Entonces… ¿cuándo usar uno u otro?

| 📌 Acción                                                        | pushState | replaceState |
| :--------------------------------------------------------------- | :-------- | :----------- |
| Quieres cambiar la URL y permitir volver atrás                   | ✅         | ❌            |
| Quieres cambiar la URL pero que no se guarde en historial        | ❌         | ✅            |
| Solo modificas query params o el path, sin navegación de Next.js | ✅         | ✅            |

---

## 📌 📖 Y lo importante: ¿Esto afecta los hooks de Next.js?

**Antes sí. Ahora en App Router (Next.js 14+), no.**

👉 Next.js 14+ escucha los cambios en `window.history` y **actualiza `useSearchParams()` y `usePathname()` cuando cambias la URL de esta forma**.
Así puedes aprovechar esta manipulación de la URL sin tener que pasar por `router.push()` o `router.replace()`.

---

## 📌 📖 Conclusión

✔️ **Esto es útil para cambios de URL rápidos en cliente sin navegación completa**
✔️ **Next.js App Router detecta esos cambios y actualiza sus hooks reactivos (`useSearchParams`, `usePathname`) automáticamente**
✔️ Ideal para filtros, paginaciones, ordenamientos o configuraciones que no requieren una navegación real.

---

Si quieres te puedo hacer un ejemplo práctico de cómo cambiar varios filtros en URL con `pushState` sin reload y sincronizando con un hook `useSearchParams`. ¿Te gustaría? 🚀
