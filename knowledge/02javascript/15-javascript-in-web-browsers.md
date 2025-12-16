---
sidebar_position: 16
---

# 15. JavaScript in Web Browsers

El capítulo comienza con el modelo de programación de la plataforma web, explicando cómo se incrustan los *scripts* dentro de las páginas HTML (**§15.1**) y cómo el código JavaScript se activa de forma **asíncrona mediante eventos** (**§15.2**).

Las secciones que siguen a este material introductorio documentan las APIs principales de JavaScript que permiten a tus aplicaciones web:

* **Controlar el contenido del documento** (**§15.3**) y el **estilo** (**§15.4**)
* **Determinar la posición en pantalla** de los elementos del documento (**§15.5**)
* **Crear componentes de interfaz de usuario reutilizables** (**§15.6**)
* **Dibujar gráficos** (**§15.7** y **§15.8**)
* **Reproducir y generar sonidos** (**§15.9**)
* **Gestionar la navegación y el historial del navegador** (**§15.10**)
* **Intercambiar datos a través de la red** (**§15.11**)
* **Almacenar datos en la computadora del usuario** (**§15.12**)
* **Realizar cálculos concurrentes con hilos** (*threads*) (**§15.13**)

## 15.1 Web Programming Basics

Esta sección explica cómo se estructuran los programas JavaScript para la web, cómo se cargan en un navegador web, cómo obtienen entradas, cómo producen salidas y cómo se ejecutan de **forma asíncrona** al **responder a eventos**.

Este es esencialmente el panorama general de cómo funciona JavaScript en el entorno del navegador (el **modelo de programación web**):

1. **Estructura y Carga:** Cómo se organiza el código y se lee desde el HTML.
2. **Entrada/Salida:** La interacción con el usuario (entrada) y la manipulación del DOM (salida).
3. **Asincronía:** El concepto crucial de **eventos** que permite que el código JavaScript no bloquee el navegador.

### 15.1.1 JavaScript in HTML `<script>` Tags

[**AQUI**](https://www.w3schools.com/tags/tag_script.asp) informacion mas completa del `<script>` tag.

Se muestra un ejemplo básico de un documento HTML y como utilizar javascript dentro de ese documento HTML.

**Deferred y Async:**

1️⃣ El problema original del `<script>`

Cuando el navegador carga un HTML, lo hace **de arriba hacia abajo**:

1. Descarga el HTML
2. Va parseando y construyendo el DOM
3. Cuando encuentra un `<script>` **SIN nada especial**, pasa esto:

```html
<script src="app.js"></script>
```

⛔ **Se detiene todo**:

* Para de construir el DOM
* Descarga `app.js`
* Ejecuta `app.js`
* Luego continúa con el HTML

¿Por qué es un problema?

* Si el script es pesado → la página “se congela”
* Si el script necesita elementos que aún no existen → errores
* Páginas lentas, sobre todo antes de conexiones rápidas

De ahí nacen **`defer` y `async`**.

2️⃣ `defer` — “ejecútalo cuando el HTML esté listo”

```html
<script src="app.js" defer></script>
```

### ¿Qué hace exactamente?

✔ Descarga el script **en paralelo** al HTML
✔ **NO bloquea** el parsing del DOM
✔ Ejecuta el script **cuando el DOM ya está completamente construido**
✔ Mantiene el **orden** entre scripts

📌 Mentalidad:

> “Este script depende del DOM, pero no necesito ejecutarlo ya”

Línea de tiempo mental

```js
HTML parsing ───────────────▶ DOM listo
   │            │
   │            └── descarga script (en paralelo)
   │
   └──────────────▶ ejecutar script (al final)
```

Ejemplo típico

```html
<script defer src="menu.js"></script>
<script defer src="analytics.js"></script>
```

👉 Se ejecutan **en ese mismo orden**, cuando el DOM está listo.

Caso de uso ideal

* Código que toca el DOM
* Frameworks
* Lógica principal de la app

3️⃣ `async` — “ejecútalo apenas esté listo”

```html
<script src="tracker.js" async></script>
```

¿Qué hace?

✔ Descarga el script **en paralelo**
✔ **NO bloquea** el HTML
❌ Ejecuta el script **apenas termina de descargarse**
❌ **NO respeta el orden**

📌 Mentalidad:

> “Este script es independiente, ejecútalo cuando quieras”

Línea de tiempo

```js
HTML parsing ───────────────▶
      │        ▲
      │        │
      └── descarga script ──┘
               │
         ejecutar script (interrumpe el HTML)
```

Ejemplo peligroso

```html
<script async src="lib.js"></script>
<script async src="app.js"></script>
```

❌ `app.js` puede ejecutarse **antes** de `lib.js`
👉 bugs impredecibles

Caso de uso ideal

* Analytics
* Ads
* Trackers
* Scripts que no tocan el DOM ni dependen de otros

4️⃣ Comparación clara

| Característica    | normal | defer | async |
| ----------------- | ------ | ----- | ----- |
| Bloquea HTML      | ✅      | ❌     | ❌     |
| Descarga paralela | ❌      | ✅     | ✅     |
| Espera DOM        | ❌      | ✅     | ❌     |
| Respeta orden     | ✅      | ✅     | ❌     |

5️⃣ ¿De dónde salen `async` y `defer`?

`defer`

* Existía desde HTML4
* Pensado para scripts que **dependen del DOM**
* Era una solución “segura” para evitar `DOMContentLoaded`

`async`

* Llega con **HTML5**
* Pensado para la era moderna:

  * Analytics
  * Publicidad
  * Widgets externos

👉 Antes de esto, la gente hacía hacks como:

```js
document.addEventListener("DOMContentLoaded", ...)
```

O ponían los scripts **al final del body**:

```html
</body>
<script src="app.js"></script>
```

`defer` y `async` hacen eso **de forma nativa y correcta**.

6️⃣ Regla de oro (para no pensarlo demasiado)

✔ **Tu código principal → `defer`**
✔ **Código externo / tracking → `async`**
✔ **Nunca mezcles dependencias con `async`**

Ejemplo moderno recomendado:

```html
<head>
  <script defer src="/app.js"></script>
  <script async src="https://analytics.com/tracker.js"></script>
</head>
```

7️⃣ Conexión con frameworks modernos (Next, etc.)

Aunque hoy uses:

* Next.js
* Vite
* Bun
* Server Components

👉 **Todo esto sigue compilando a `<script defer>`** en producción.

Saber esto te ayuda a:

* Entender errores raros de hidratación
* Diagnosticar scripts externos
* Optimizar carga real (no marketing)
