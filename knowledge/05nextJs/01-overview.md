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

## 2. Nueva Page (App Router)

Para agregar rutas se utiliza el sistema de archivos internos como las carpetas(folders) y archivos(files)

- Primero agregar una carpea dentro de la carpeta APP que va a ser la ruta
- Segundo crear el archivo que se tiene que llamar page.js
- Para entrar a la nueva pagina, la ruta seria algo asi `http://localhost:3000/awesome`, siendo awesome el nombre de la carpeta (folder)

Esa combinacion es la base de un enrutamiento en Next JS

## 3. Routing

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
