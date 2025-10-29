---
sidebar_position: 1
---

# 1. Introduccion a Javascript

- Lenguage que evalua el codigo at runtime osea que no hace una compilacion como otros lenguajes.
- No es tipado lo que quiere decir que los tipos de datos en varialbes y otros aspectos no son tan controlados como en lenguajes fuertemente tipados.
- **Core features** [Sacado de javascript.injo](https://javascript.info/modules-intro)
- Always “use strict”
- Module-level scope
- A module code is evaluated only the first time when imported
- import.meta
- In a module, “this” is undefined
- **Browser-specific features**
- Module scripts are deferred (aplazados)
- Async works on inline scripts
- External scripts: External scripts that have `type="module"` are different in two aspects.
- No “bare” modules allowed
- Es pobremente tipado, osea que no hay control de las diferentes formas de tipos de datos que puede tomar una variable o cualquier otro ente que guarde tipos de datos.
- No es compilado osea que se ejecuta en tiempo real linea por linea y si hay un error pues se va a dejar ver ese error solo en el momento que se ejecute esa linea de codigo especifica.

---

## 1.1. Exploring JavaScript

- El codigo es interpretado o "renderizado" por medio del navegador utilizando la consola que se encuentra al apretar la tecla F12 e ir a la consola.
- Con Node js desde el CMD al ejecutar node "Nombre del archivo js".

---

## 1.2. Hello World

- Como generar codigo javascript simplemente desde un texto txt.
- If JavaScript expressions are like phrases, then JavaScript statements are like full sen‐
  tences.
- Ejemplo de contador de letras en la pagina 12.

---

## 1.3. Un tour por javascript

La idea es que este sea un pequeno cheat sheet para javascript, sin embargo se recomienda ir a los respectivos capitulos, este cheat sheet empieza en la pagina 5 del libro.

- Diferentes valores primitivos que se le pueden agregar a una variable.
- Otros dos tipos importantes son los objects y los arrays.
- Formas comunes para formar expresiones es con los operadores aritmeticos y operadores logicos.
- Las famosas funciones son maquinas que aceptar parametros y ejecuta codigo teniendo en cuenta estos parametros.
- Las funciones dentro de objects son **metodos**.
- El famoso OOP o object oriented programing se puede lograr por medio de las clases.
- No olvidar los modulos
- La libreria interna del lenguaje
- Iteradores y generadores
- Asincronicidad
- Metaprograming
- La enorme API del entorno del navegador que javascript puede accesar.
- Tabajo del lado del servidor por medio de NODE js

---

## 1.4. En donde puede correr el lenguaje? (de chatGPT)

El lenguaje corre en los siguientes ambientes:

### 1.4.1. Node Js

- Crear APIs REST o GraphQL
- Manejar bases de datos (PostgreSQL, MongoDB, etc.)
- Servir aplicaciones web (con frameworks como Express o Fastify)
- Ejecutar tareas automatizadas (cron jobs, scripts)
- Usar herramientas de build (Webpack, Vite, etc.)

### 1.4.2. Navegador de Internet (browser)

- Manipular el DOM (HTML y CSS)
- Crear interactividad (formularios, botones, menús)
- Conectarse a APIs con fetch()
- Ejecutar frameworks como React, Vue o Angular
- Usar Web APIs (geolocalización, almacenamiento local, canvas, etc.)

### 1.4.3. Entornos Hibridos (Escritorio - Andorid/IOs) con React Native

- Electron: para crear aplicaciones de escritorio (VS Code, Discord).
- NW.js: similar a Electron, usa Chromium + Node.js.
- React Native o Expo: ejecuta JS en dispositivos móviles (Android/iOS).
- Tauri: alternativa ligera a Electron, usa Rust + JS.

### 1.4.4. En entornos edge o servidores distribuidos

- Deno: nuevo runtime creado por el mismo autor de Node.js (más seguro, usa TypeScript nativo).
- Bun: runtime muy rápido basado también en V8 (ideal para desarrollo web moderno).
- Cloudflare Workers, Vercel Edge Functions, AWS Lambda@Edge: ejecutan JS en servidores globales, muy rápido y escalable.

### 1.4.5. En otros contextos

- Bases de datos: algunas permiten ejecutar JS internamente (por ejemplo, MongoDB con funciones agregadas o triggers).
- Motores de juegos: algunos motores (como Godot, Unity con plugins, o cocos2d-js) soportan JS.
- IoT (Internet de las cosas): plataformas como Espruino o Johnny-Five permiten ejecutar JS en microcontroladores.
