---
sidebar_position: 1
---

# The Stack

Focus on JamStack (JavaScript, Api, Markup)

Tools used in the whole chain to create three types of websites when need it.

**NEXTjs: for Server Sider Rendering (Render the page from the server at request), next also do client side and Static Site Generation (look remix)**
**REACTjs: for Client Side Rendering (When the whole app is send to the client and the client device do the job), use vite**
**ASTROjs: Static Site Rendering (When the site is created at build time from the framework).**

Tool to the client:

- The browser (Safari for apple, brave, chrome, firefox, edge), all websites must work in this browsers.

- Infrastructure: HTTP Hypertext Transfer Protocol.

***

## Tools

Tools used for web dev in general.

- Figma: Design
- Storybooks: Component collection
- Version Control: GIT (aplicar CI/CD y un proceso de merge llamado trunk based development and squash merge), Version control is crucial for managing changes to your codebase, and Git is one of the most popular version control systems.

### Documentation

- Storybook for: documentation plain js, html, css, react, next. Style guides, design systems. Hosted in chromatic.
- **Docosaurus**
- **jsDocs**
- Mkdocs
- Bookstack: wiki creator.
- Wiki.js: wiki creator
- Hugo: Static Site Generator
- **GitBook**

Herramientas están en los favoritos de microsoft edge al igual que las referencias de todos los productos.

***

## Languages and libraries

- Lenguages Web Base: HTML, CSS, JAVASCRIPT (typescript).

- Package Manager: NPM

## CSS

**Libraries and metodologies:**

- CSS modules: for same class name components, CSS modules with SASS and global styles folder.
- BEM: methodology
- Atomic Design Components
- KSS for pattern library and css documentation

### Pre-processors

- SCSS
- SASS (descontinuado)

***

## JavaScript

### JavaScript Libraries

- **three.js:** para animaciones 3d
- **prism, Highlight.js:** para highlight codigo en la pagina web
- **markdown-it:** para administrar contenido markdown-it, a parte esta markdown-it hightlight y markdown-it-attrs para atributos.
- **lodash:** funciones varias dentro de javascript.
- **animejs:** para animaciones
- **motion ui:** For transitions
- **moment js:** todo para con el tiempo y fechas
- **d3js, chartjs:** para graficas
- **underscorejs:** para arrays
- **fuse:** para búsquedas
- **pdfjs:** para crear pdfs
- **pixi.js** PixiJS is an open source, web-based rendering system that provides blazing fast performance for games, data visualization, and other graphics intensive projects.
- **Passportjs:** para autenticación
- **Lax.js:** para animaciones scroll
- **Fontfaceobserver:** Control when render fonts on the browser.
- **Require js**
- **Gsap.js:** for animation (pricing)
- **fabricjs** for and writing

***

- **npm**

npm is the package manager for Node.js, and it's used to install and manage dependencies in your project.

- **nvm:** Node virtual manager, to isolate node vertions, tools to set enviroment and isolation

***

## JavaScript FRAMEWORKS

### React js Libraries

- Vite
- Tailwind, css modules
- React-router: If your application involves multiple pages or views, React Router is a common library for adding navigation to your React applications.
- React spring
- React typical
- React select
- React hook form
- react-chrono: Para hacer timelines
- react-vertical-timeline-component: Para hacer timelines
- React-use, un monton de custom hooks que son bastante utiles
- Zod para validar datos
- React tnakstack table
- React dropzone
- react-quills es un rich-text editor
- react-swipeable
- react-icons
- react-photoswipe-gallery
- react-vertical-timeline-component
- react-responsive-modal
- Sonner
- DnD kit
- Frammer Motion for animations
- Redux (big apps), it's mostly deprecated **As November 2023 it's recommended use zusand for state management and react query for data fetching.** RTK and zusand for client state, and SWR and react query for server state.
- React Hook Form: Para utilizar una aproximacion de tipo no controlada (uncontrolled input forms) para evitar el re-renderizado del componente de tipo form cuando se esta tecleando. tambien se puede utilizar React Server Actions para el manejo de la forms.

A nice combination:

- Rtk-rtk-query
- Zustand-react-query-SWR
- React developer Tools

**Data Fetching:**

- **GraphQL (with Apollo Client or Relay):** If you prefer a more efficient and flexible way to query and manipulate data.

**Authentication:**

- **Auth0:** para autenticación.
- **Firebase:** autenticación y base de datos
- **Clerk:** para autenticación

**Forms:**

- **Formik or React Hook Form:** For managing forms and form validation within your application.

**Testing:**

- **Jest and React Testing Library:** For testing your React components and ensuring the reliability of your application.

**Internationalization (i18n):**

- **React-Intl or i18next:** If you plan to support multiple languages and need tools for internationalization.

**Caching:**

- **Redis or Memcached:** For caching frequently accessed data and improving performance.

**Web Analytics:**

- **Google Analytics or Mixpanel:** To gather insights into user behavior and improve your site based on analytics data.

**SEO Optimization:**

**React Helmet:** For managing the head of your HTML document and optimizing your site for search engines.

***

### Next js Libraries

- React query + zusand + SWR (replace of redux)
- Swup (page transition)
- Swipe js Esta es una libreria para carruseles con el touchpad y disenos
- create t3 app, esta es para crear boilerplate ya listico
- muy importante saber busquedas indexadas
- next-themes
- RECHART
- Renovate — Dependency update tool
- Commitlint — Lint commit messages
- next-seo — Manage SEO easily

***

### Astro js Libraries

- Astro integrations

***

### Herramientas de apoyo

- excalidraw, algo parecido a xmind pero en linea y pareciera que no tuviera pricing

### Component libraries

- Mantine ui
- Material ui
- Chakra ui
- shadcdn
- Radix radix-ui.com
- Next ui
- Refine
- tailwind UI

***

### VsCode Extentions

Check the expoerted list or check VSCode directly.

***

## Back-End

### Hosting

#### Hosting Front-end

- DigitalOcean app
- DigitalOcean Droplets
- Vercel
- Cloudfare pages
- Railway (it's cheaper)
- Netlify

#### Domain

- Name-Cheap para compra de dominio
- porkbun

### Node js (environment)

- Express
- Nustjs (for advanced)
- Nests js framework build on top of express
- fastify

### Databases

- SQLite: Small database
- MySQL - Postgre:  For relational databases
- MongoBd: For non-relational

### ORM

Preferiblemente con typescript: Prisma, TypeORM, RESTapi, GraphQL, fetch api, axios.

### For apis

- Supabase
- Hasura

### CMS

- Strapi (RestApi, GraphQL)
- Directus
- **Payload**
- Sanity
- Ghost
- wisp

### For ecommerce

- Shopify (to build, carts, checkouts, manage clients info)
- Medusa (same as Shopify but is self-hosted)
- Wompi (payment processing)

### Hosting backend

- Fly.io
- DigitalOcean Droplet
- Azure app service for containers
- Cloudinary: para imagenes
- Digital Ocean Spaces or AWS S3: para imagenes y videos y pdfs [ver este video de Fazt](https://www.youtube.com/watch?v=7Ycf3FYcF_A)

***

## Conteiners apps

- Docker

### Orchestration and load balancing

- Kubernetes

***

## Web Security

## CD/CI

- jenkins
- Github actions

***

## Module Bundler

- **Webpack:** It is a module bundler for JavaScript applications. Webpack takes your JavaScript, CSS, and other assets and bundles them together in a way that's optimized for the web. It's often used to handle tasks like transpiling modern JavaScript (using Babel), bundling and minifying CSS, and optimizing images.

- **Babel:** Babel is a JavaScript compiler that allows you to use the latest ECMAScript features (like arrow functions, template literals, etc.) in your code and converts it to a version of JavaScript that can run in older browsers. It's crucial when working with React because it enables the use of JSX (JavaScript XML), which is a syntax extension for JavaScript recommended by React.

-**TurboPack:** El que utiliza next js
***

## Testing: jest

- Tener en cuenta Unit Testing
- Integration Testing
- starlight
- vitest

***

## Accesibility: Aria and keyboard navigation

Researching headless components, I found that there are a couple of popular libraries:

- **Radix UI:** My favorite. Well tested, accessible, and has one of the best component API-s I’ve seen. It does have some problems when testing it’s components with React Testing Library, and does not support IE very well.
- **Reach UI:** pretty good and reliable, from the authors of react-router and Remix. Not a lot of components, but covers most use cases.
- **Headless UI:** a small number of components. Well tested, work best with Tailwind CSS. Only drawback is that it’s not that easy to change the functionality and behavior of the components.
- **Downshift:** By Kent C. Dodds. Focuses on autocomplete, select, combobox, and multi combobox components. Well tested, accessible, and gives you total control over styling and functionality. I chose it for our combobox and autocomplete components, and learned a lot from their implementation.
- **React-aria:** By Adobe. I don’t know too much about it, but it looks interesting.
- **Reakit**
- **Ariakit**

***

## TaskRunners: pm2 nginx gulp grunt

***

## Servicios

- web3forms
- mailchimp
