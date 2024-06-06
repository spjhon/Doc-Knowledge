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
  - Handel route setup handling
  - Handles requests and responses
  - Handles data fetching & submission
- Form Submission
- Data Fetching
- Autenthication
- And much more

- **Caracteristicas**

- Junta el front con el back hasta cierto punto (es recomendable tener una estructura de bases de datos independiente)
- Posee server-side-rendering by default que permite enviar desde el servidor el HTML ya creado a partir del javascrip en el cual fue escrita el codigo fuente
- El enrutamiento no es hecho por codigo sino por medio del sistema de archivos del sitema (files & folders)

- **Escoginedo entre Pages Router & App Router**

Se recomienda el App Router que es el mas reciente

## Instalacion inicial

[**AQUI**](https://nextjs.org/docs/getting-started/installation) guia basica de instalacion inicial

`npx create-next-app@latest`

## Nueva Page (App Router)

Para agregar rutas se utiliza el sistema de archivos internos como las carpetas(folders) y archivos(files)

- Primero agregar una carpea dentro de la carpeta APP que va a ser la ruta
- Segundo crear el archivo que se tiene que llamar page.js
- Para entrar a la nueva pagina, la ruta seria algo asi `http://localhost:3000/awesome`, siendo awesome el nombre de la carpeta (folder)

Esa combinacion es la base de un enrutamiento en Next JS
