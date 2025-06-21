---
sidebar_position: 1
---

# NextJS

Sin estructura principal, la iformacion sera extraida y organizada en lo que se pueda desde el curso de Udemy de Maximillian.

[**AQUI**](https://nextjs.org/docs) esta la documentacion de VERCEL para NEXTJS.

Next.js is a React framework for building full-stack web applications.

Algo a tener en cuenta de next js y de react es que se escribe el codigo de forma declarativa (functional programing entra aca) en lugar de imperativa.

El fuerte de next js es dar las heramientas para construir:

- Route setup & handling
  - Handle route setup handling
  - Handles requests and responses
  - Handles data fetching & submission
- Form Submission
- Data Fetching
- Autenthication
- And much more

- **Para que sirve nextJs?**

  - Routing
  - Rendering
  - Data Fetching
  - Styling
  - Optimizations
  - TypeScript
  - Route setup & handling
  - Handel route setup handling
  - Handles requests and responses
  - Handles data fetching & submission
  - Form Submission
  - Data Fetching
  - Autenthication

- **Caracteristicas**

- Junta el front con el back hasta cierto punto (es recomendable tener una estructura de bases de datos independiente)
- Posee server-side-rendering by default que permite enviar desde el servidor el HTML ya creado a partir del javascrip en el cual fue escrita el codigo fuente
- El enrutamiento no es hecho por codigo sino por medio del sistema de archivos del sitema (files & folders)

- **Escoginedo entre Pages Router & App Router**

Se recomienda el App Router que es el mas reciente

## 1. Instalacion inicial

[**AQUI**](https://nextjs.org/docs/getting-started/installation) guia basica de instalacion inicial

`npx create-next-app@latest`

**NOTA IMPORTANTE**: Resulta que al momento de instalar varios projectos bajo el mismo git, hay un problema de conflicto con el slint, entonces para resolver se debe de crear una carpeta llamada .vscode en donde esta el git principal y agregar los siguientes comandos a un archivo .json llamado settings.json:

```javascript
{
    "eslint.workingDirectories": [
        "./project_1",
        "./project_2"
    ]
}
```

## 2. 📚 Temario de Next.js — Completo y Ordenado

---

### 2.1. 🟢 Básico: Fundamentos de Next.js

1. **¿Qué es Next.js y para qué sirve?**

   - Características principales
   - Diferencias con React SPA tradicional

2. **App Router vs Pages Router**

   - Qué es el App Router
   - Qué es el Pages Router
   - Cuándo usar cada uno (en proyectos legacy vs nuevos)

3. **Estructura de un proyecto Next.js**

   - Carpetas: `/app`, `/pages`, `/public`, `/components`, `/styles`
   - Convenciones de enrutamiento automático
   - Archivos especiales: `layout.tsx`, `page.tsx`, `error.tsx`, `not-found.tsx`
  
    Mas informacion: [33-ejercicio02 de maximilliam](https://github.com/spjhon/Udemy-Nextjs-Maximilian/tree/main/02-nextjs-essentials/33-ejercicio2)

    En los docs de Next js: [33-ejercicio02 de maximilliam](https://nextjs.org/docs/app/getting-started/layouts-and-pages)

4. **Sistema de Rutas en Next.js**

   - Rutas basadas en archivos
   - Rutas dinámicas (`[id]`)
   - Rutas anidadas y catch-all (`[[...slug]]`)

5. **Componentes Server y Client**

   - Cómo y cuándo se declaran (`'use client'`)
   - Diferencias en su comportamiento y renderizado

6. **Rendering Methods**

   - SSR (Server Side Rendering)
   - SSG (Static Site Generation)
   - ISR (Incremental Static Regeneration)
   - CSR (Client Side Rendering)
   - Comportamiento por defecto de Next.js

7. **Metadata y SEO básico**

   - Uso de `metadata` en App Router
   - Etiquetas `<head>`, `<title>`, meta tags

8. **Manejo de imágenes**

   - Componente `<Image />`
   - Optimización automática
   - Uso de imágenes locales y remotas

9. **Archivos estáticos**

   - Carpeta `/public`
   - Acceso a recursos estáticos

10. **Estilos en Next.js**

    - CSS Modules
    - CSS global
    - Frameworks como Tailwind CSS

---

### 2.2.  🟡 Intermedio: Profundizando en Next.js

1. **Dynamic Metadata**

   - `generateMetadata` para páginas dinámicas
   - Metadata async

2. **Dynamic Routes y Nested Layouts**

   - Rutas dinámicas dentro de `app/`
   - Uso de `layout.tsx` anidados por segmento de ruta

3. **Catch-all y Optional Catch-all Routes**

   - Diferencias entre `[...slug]` y `[[...slug]]`

4. **Loading UI y Suspense**

   - `loading.tsx` por ruta
   - Uso de `React.Suspense`

5. **Error Handling**

   - `error.tsx` por ruta
   - Captura de errores en Server y Client components

6. **Middleware**

   - Creación y uso en `middleware.ts`
   - Casos de uso: autenticación, redirecciones, logs

7. **API Routes**

   - Crear APIs desde `/api`
   - Métodos y control de peticiones
   - Middleware en API Routes

8. **Fetching de datos**

   - `fetch` en Server components
   - `useEffect` en Client components
   - `useSWR` y React Query (opcional)

9. **Incremental Static Regeneration (ISR)**

   - `revalidate`
   - Regeneración on-demand (`res.revalidate()` en API Routes)

10. **Redirecciones y Rewrites**

    - Configuración en `next.config.js`
    - Uso de `redirect()` y `notFound()`

11. **Custom Fonts**

    - Next.js font optimization API
    - Uso de Google Fonts y locales

12. **Imágenes remotas**

    - Configuración de dominios externos
    - Optimización de imágenes remotas

13. **Locales e internacionalización (i18n)**

    - Configuración en `next.config.js`
    - Enrutamiento con sub-path locales
    - Alternativas como `next-intl`

---

### 2.3. 🔴 Avanzado: Nivel profesional en Next.js

1. **Caching y Render Optimization**

   - `cache: 'force-cache'`, `no-store`
   - `unstable_noStore()`
   - Caching por segmentos de layout

2. **Streaming y React Server Components (RSC)**

   - Cómo funcionan internamente
   - Uso de Server Actions (experimental y estable según versión)

3. **Server Actions**

   - Declaración de acciones server-side desde formularios o botones
   - Gestión de estado en server actions

4. **Parallel Routes y Intercepting Routes**

   - Uso de slots (`@slot`)
   - `/(.)`, `(...)`, `..`, `@modal`
   - Casos de uso: modales en URL, secciones paralelas

5. **Deployment avanzado**

   - Vercel Features: prefetching automático, serverless functions, edge functions
   - Self-hosted deployment con Docker y PM2

6. **Custom `next.config.js`**

   - Modificación de Webpack
   - Configuración de headers, rewrites, redirects
   - Optimización de imágenes avanzada

7. **Edge Functions**

   - Qué son y cuándo usarlas
   - Diferencia con API Routes tradicionales

8. **NextAuth (Autenticación para Next.js)**

   - Configuración básica y avanzada
   - Callbacks, JWT, providers OAuth, credenciales personalizadas

9. **Web Vitals y Análisis de rendimiento**

   - Reporte de métricas web
   - Uso de `next/script` para scripts de analytics

10. **Tests en Next.js**

    - Unit Tests con Jest
    - E2E Tests con Cypress / Playwright
    - Tests de Server y Client Components

11. **Dynamic Imports**

    - `dynamic()` para lazy loading de componentes
    - Suspense para Server Components

12. **Custom Error Pages avanzadas**

    - Uso personalizado de `not-found.tsx`, `error.tsx`
    - Log de errores en producción

13. **Plugins y Modificaciones de Webpack**

    - Extender el Webpack config
    - Uso de plugins específicos para optimización

---

## 3. Nueva Page (App Router)

Para agregar rutas se utiliza el sistema de archivos internos como las carpetas(folders) y archivos(files)

- Primero agregar una carpea dentro de la carpeta APP que va a ser la ruta
- Segundo crear el archivo que se tiene que llamar page.js
- Para entrar a la nueva pagina, la ruta seria algo asi `http://localhost:3000/awesome`, siendo awesome el nombre de la carpeta (folder)

Esa combinacion es la base de un enrutamiento en Next JS

## 4. Routing

Como next js es muy opitionanted tiene dos palabras de archivo reservadas para el routing que esta dentro de la carpeta APP que es LAYOUT y PAGE.

![**RESERVED WORDS**](../src/images/nextjs%20diapositivas/001-routing.jpg)

### 3.1. Dinamic Routes

SI por ejemplo se desea un blog, pero para no tener que hacer un archivo por cada uno de los blogs que se vayan generando, lo que se hace es utilizar los [] en el nombre de la carpeta para indicar a next js que se va a utilizar la misma pagina pero con links a diferentes componentes que den diferente informacion, para esto existe un **props** que next js pasa que se llama **params**, entonces en el componente del post del blog lo que se hace es decir que se utiliza los params.[aqui va lo que esta dentro de esto en el nombre del folder].

### 3.2. Reserved Words

Hay varias palabras reservadas para nombres de archivo con el fin de crear paginas standard como parte del framework:

![**RESERVED WORDS**](../src/images/nextjs%20diapositivas/002-reservedRoutingWords.jpg)

### 3.3. Images

A parte del componente Link de next js tambien se tiene el Image componente que lo que hace es tener mas metadata de las imagnes para poder agregar atributos como lazy loading, transformado de las imagenes al formato webm, cargado de diferentes resoluciones dependiendo del viewport entre otros.

- Si se desea desactivar el lazy loading se agrega el atributo priority

### 3.4. Client vs Server Components

- **OJO**, recordar que todos los componentes en nextjs por defecto son trabajados en el servidor, si se requiere algo del lado del cliente se debe de especificar el useClient.

- **Cuando utilizar server o client**, si el componente requiere manipulacion del DOM es del client, si requiere poner intervalos, es del cliente, si se desea correr scripts de animacion, en el cliente. Ahora, que va en el server, request, o llamadas post, operaciones de autenticacion.

### 3.5 Fetching Data

Exactamente. En un Server Component, el flujo de trabajo para el fetching de datos y el renderizado es un poco diferente al de los Client Components, y se realiza completamente en el servidor antes de enviar el HTML al cliente. Aquí tienes una explicación más detallada del proceso:

1. **Inicialización y Fetching de Datos:**
    - Cuando el servidor recibe una solicitud para una página que contiene un Server Component, comienza a ejecutar el componente.
    - Si el componente es `async`, se ejecuta cualquier lógica asincrónica, como el fetching de datos, antes de continuar con el renderizado.

2. **Esperar la Resolución de Promesas:**
    - El servidor espera a que se resuelvan todas las promesas antes de continuar. Esto significa que no se envía nada al cliente hasta que todos los datos necesarios estén disponibles.
    - Mientras espera, el servidor sigue procesando otras solicitudes o tareas.

3. **Renderizado del Componente con Datos:**
    - Una vez que todas las promesas se han resuelto y los datos están disponibles, el servidor renderiza el componente con los datos obtenidos.
    - El HTML resultante del renderizado del componente se genera en este punto.

4. **Envío del HTML al Cliente:**
    - Después de que el componente ha sido completamente renderizado con todos los datos necesarios, el HTML resultante se envía al cliente.
    - El cliente recibe el HTML ya renderizado, lo que puede mejorar la experiencia del usuario al mostrar una página completamente cargada sin estados de carga intermedios.

#### Ejemplo Desglosado

Supongamos que tienes el siguiente Server Component en Next.js:

```javascript
// pages/index.js
import React from 'react';

const HomePage = async () => {
  // Fetching de datos
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  // Renderizado del componente con los datos obtenidos
  return (
    <div>
      <h1>Datos desde el servidor</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
```

#### Flujo de Trabajo

1. **Inicialización:**
   - El servidor recibe una solicitud para `/`.
   - Comienza a ejecutar `HomePage`, que es una función `async`.

2. **Fetching de Datos:**
   - La función `await fetch('https://api.example.com/data')` se ejecuta.
   - El servidor espera a que se resuelva esta promesa.

3. **Esperar la Resolución de la Promesa:**
   - El servidor no envía nada al cliente hasta que `fetch` y `response.json()` se hayan completado.
   - Este tiempo de espera puede variar dependiendo del tiempo que tarde en completarse el fetching de datos.

4. **Renderizado con Datos:**
   - Una vez que los datos están disponibles, el componente se renderiza con esos datos.
   - El HTML resultante del renderizado del componente se genera en este punto.

5. **Envío del HTML al Cliente:**
   - El servidor envía el HTML completamente renderizado al cliente.
   - El cliente recibe una página completamente cargada sin necesidad de realizar fetching adicional ni mostrar estados de carga.

#### Ventajas

- **Performance Mejorada:** El cliente recibe una página completamente renderizada, lo que puede mejorar la performance percibida y la experiencia del usuario.
- **Seguridad:** Los datos sensibles pueden ser manejados en el servidor, evitando que el cliente tenga acceso directo a ellos.
- **SEO:** El contenido completamente renderizado en el servidor puede ser mejor indexado por motores de búsqueda.

#### Conclusión

En resumen, en un Server Component de Next.js, el proceso de fetching de datos y renderizado se realiza completamente en el servidor. El servidor espera a que se resuelvan todas las promesas y se renderice el componente con los datos antes de enviar el HTML al cliente, asegurando una experiencia de usuario más rápida y eficiente.
