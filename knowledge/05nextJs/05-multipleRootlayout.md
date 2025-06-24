---
sidebar_position: 5
---

# Multiple Roots Layouts

entonces si la ruta que busca esta dentro de la agrupacion entonces utiliza ese root layout?, osea que depende de lo que este dentro de las carpetas con parentesis, osea que la carpeta about esta al mismo nivel del layout dentro de la carpeta con parentesis?

Excelente — y sí, lo estás entendiendo muy bien, pero te lo voy a aclarar con exactitud porque es un detalle clave en Next.js App Router.

---

## 📌 Así funciona

* Next.js decide **qué root layout usar** en función de **en qué agrupador `(group)` está la ruta solicitada**.
* La clave es que **la estructura de carpetas dentro de `app/` no refleja necesariamente la estructura de la URL** cuando usas paréntesis `(group)`, pero sí determina **la estructura de layouts y componentes que se aplican**.

---

## 📂 Ejemplo claro

```cmd
app/
  (marketing)/
    layout.tsx   👈 root layout para todo lo que está dentro de (marketing)
    about/
      page.tsx
    page.tsx     👈 esta sería para "/"

  (dashboard)/
    layout.tsx   👈 root layout para todo lo que está dentro de (dashboard)
    settings/
      page.tsx
    page.tsx
```

---

## 📌 Ahora

**Cuando visitas `/about`**:

* Next.js busca una ruta `/about`.
* Encuentra `app/(marketing)/about/page.tsx`.
* Como está dentro de `(marketing)`, usa `app/(marketing)/layout.tsx` como **root layout**.
* Ese layout debe tener sus propias etiquetas `<html>` y `<body>` porque es un root layout.

**Cuando visitas `/settings`**:

* Busca `app/(dashboard)/settings/page.tsx`.
* Como está dentro de `(dashboard)`, usa `app/(dashboard)/layout.tsx` como root layout.

---

## 📌 Respuesta puntual a tu pregunta

> **"O sea que la carpeta `about` está al mismo nivel del layout dentro de la carpeta con paréntesis?"**

**Sí.**
La carpeta `about` está dentro del agrupador `(marketing)` junto a su `layout.tsx`, y ambas pertenecen a ese **route group**.

👉 Todo lo que esté **dentro de la carpeta `(group)`** — sea `page.tsx`, `about/page.tsx`, `contact/page.tsx`, lo que sea — **usará ese `layout.tsx` del `(group)` como root layout**.

La jerarquía visual sería así:

```cmd
(app folder)
  (group)
    layout.tsx  ← root layout para todo dentro de este folder
    subfolder/
      page.tsx  ← usa el layout de (group)
    anotherPage.tsx  ← usa el layout de (group)
```

---

## ✅ Resumen ultra claro

* **Cada carpeta `(group)` puede tener su propio `layout.tsx` con `<html>` y `<body>` → root layout.**
* **Todas las rutas dentro de ese `(group)` usan ese root layout.**
* **Las carpetas `(group)` no afectan la URL**, solo la organización interna y qué layout aplica.
* **No puedes tener `app/layout.tsx` raíz si quieres tener varios root layouts**, porque se colisionan los `<html>`.

---
