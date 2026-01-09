---
sidebar_position: 9
---

# WorkFlow para crear una webApp

La idea es tener niveles de organizacion, los junior se encargan del ensamblado, los senior del diseño y mantenimiento de componentes y luego se tienen los devops, servicio al cliente, backend, control de calidad, entre otros.

## 1. Definicion del stack requerido

Definir las tecnologias que aplican para satisfacer el modelo de negocio, por defecto hasta ene-2026 se va a utilizar el stack basico de NEXT JS, SUPABASE con todo lo que ello conlleva

## 2. Elementos a tener en cuenta

- Seguridad
- Escalabilidad
- Reliabilidad
- Eficiencia
- Testeabilidad
- Mantenibilidad
- Experiencia de usuario
- Diseño
- Despliegue
- Backups
- Documentacion
- Responsividad

## 3. Diseño de base de datos

Utilizando supabase hacer el setup y la creacion inicial del projecto en modo dev y luego ajustar la auth con next js, luego proceder a diseñar la base de datos antes de implementarla por medio de migraciones a next js.

**Definir:**

- Analisis de requerimientos
- Modelado de datos
- Normalizacion

- Una metodologia mas detallada se encuentra en la seccion de bases de datos bajo la tutoria del libro Databases for mere mortals

## 4. Deficinion del ambiente de trabajo

**Para next js:**

Sí, cuando los desarrolladores web hablan de configurar un entorno para un proyecto de desarrollo web, generalmente se refieren a la configuración de las herramientas necesarias, los entornos de ejecución y las dependencias requeridas para el proyecto. Esta configuración puede incluir:

### 4.1. Versión de Node.js

Especificar la versión adecuada de Node.js que requiere el proyecto. Diferentes proyectos pueden tener distintos requisitos de compatibilidad con las versiones de Node.js. Herramientas como **nvm** (Node Version Manager) o archivos `.nvmrc` se utilizan comúnmente para gestionar las versiones de Node.js por proyecto.

### 4.2. Dependencias

Instalar y gestionar las dependencias específicas del proyecto utilizando **npm** o **yarn**. Esto a menudo implica la creación de un archivo `package.json` para proyectos de Node.js o un archivo `yarn.lock` para proyectos que usan Yarn.

### 4.3. Variables de Entorno

Configurar las variables de entorno necesarias para el proyecto, como llaves de API (API keys), cadenas de conexión a bases de datos u otras configuraciones que no deben estar escritas directamente en el código fuente.

### 4.4. Control de Versiones

Configurar sistemas de control de versiones (por ejemplo, **Git**) e inicializar un repositorio para rastrear los cambios en el proyecto.

### 4.5. Herramientas de Construcción (Build Tools)

Configurar herramientas de construcción y empaquetadores como **Webpack**, **Parcel** o **Rollup** si es necesario. Estas herramientas se utilizan para agrupar y optimizar los activos del proyecto (JavaScript, CSS, imágenes) para producción.

### 4.6. Ejecutores de Tareas (Task Runners)

Configurar ejecutores de tareas como **Gulp** o **Grunt** para automatizar tareas repetitivas durante el desarrollo, como la compilación de código, la minificación y las pruebas.

### 4.7. Frameworks de Pruebas (Testing Frameworks)

Configurar marcos de trabajo de pruebas (por ejemplo, **Jest**, **Mocha**) y herramientas relacionadas para escribir y ejecutar pruebas que aseguren la fiabilidad y corrección del código.

### 4.8. Linters y Formateadores de Código

Configurar linters de código (como **ESLint**) y formateadores (como **Prettier**) para mantener un estilo de código limpio y consistente en todo el proyecto.

### 4.9. Configuración del IDE/Editor

Configurar el entorno de desarrollo en el Entorno de Desarrollo Integrado (**IDE**) o editor de código elegido. Esto puede incluir ajustes específicos del editor, extensiones y configuraciones.

**Conclusión:**
Configurar el entorno es crucial para garantizar la consistencia entre las máquinas de los diferentes desarrolladores y para agilizar el flujo de trabajo de desarrollo. Ayuda a evitar problemas relacionados con discrepancias de entorno y asegura que todos los que trabajan en el proyecto utilicen las mismas configuraciones y herramientas.

## 5. Setting up next

Despues de instalar next js, se debe:

- Instalar next-themes y configurarlo, si es con supabase utilizar el flag -withsupabase en el CLI de instalacion.
- (opcional) next-int para internacionalizacion
- Hacer el setup de la auth por medio de supabase auth de forma que quede el landing, el navbar y la configuracion del auth

## 6. Building

Diagramas recomendados:

- Diagrama UML para types [AQUI!](https://conwy.co/articles/diagramming-ts)
- Diagrama UML para la estructura de next js [AQUI!](https://dev.to/conw_y/diagramming-react-code-48m7) adiconal a este diagrama, utilizar enlaces de context.
- Diagrama ER para la base de datos.
- La documentacion del codigo como funciones y codigo puro va a estar sustentada en los comentarios jsdoc del mismo projecto
- Diagrama que muestre la conexion entre el front y el back, como un diagrama o documentacion de apis.
- utilizar semver

En la fase de desarrollo tener en cuenta en cuanto a componentes react:

- **Be reusable:** the same button component must work in different contexts: a table, a card, a modal, a sidebar.
- **Render correctly:** visually consistent, right size, proper color.
- **Behave correctly:** trigger a confirmation dialog when clicked.
- **Stack properly:** the confirmation dialog must appear on top of the drawer, with correct z-index handling.
- **Work with forms:** the button should behave correctly inside a form, respecting form submission.
- **Support theming:** colors should change when the app switches to dark mode.
- **Support SSR:** if you render your app on the server, the button must hydrate correctly on the client.
- **Forward refs and props:** consumers might need imperative access or want to pass custom ARIA attributes.
- **Handle accessibility:** keyboard users should be able to use it, screen reader users should understand what it does.
- **Support internationalization:** text should adapt to different languages without modifying the component.

La estructuracion del projecto es que cada feature tenga sus respectivos componentes a partir de los primitivos de radix ui y los componentes genericos de shadCn. Otra opcion sin explorar es que los componentes de juntan por rutas. Osea que cada ruta tenga su layout (si aplica) y su page.tsx con sus componentes en la misma carpeta con la distincion de que esas carpetas no son rutas (_components)

## 7. Despliegue

- Next js en hostinguer o en una vps
- Supabase en la cloud propia de ellos

## 8. Mantenimiento

- Git
- Npm update

## 9. Seguridad

- Todo lo que ofrezca cludfare y configuraciones adiconales en la VPS
