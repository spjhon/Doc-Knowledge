---
sidebar_position: 1
---

# The Stack

Focus on JamStack (JavaScript, Api, Markup)

Tools used in the whole chain to create three types of websites when need it.
**NEXTjs: for Server Sider Rendering (Render the page from the server at request), next also do client side and Static Site Generation (look remix)**
**REACTjs: for Client Side Rendering (When the whole app is send to the client and the client device do the job)**
**ASTROjs: Static Site Rendering (When the site is created at build time from the framework).**

Tool to the client:

- The browser (Safari for apple, brave, chrome, firefox, edge), all websites must work in this browsers.

- Infrastructure: HTTP Hypertext Transfer Protocol.

***

## Hosting

### Hosting Front-end

- DigitalOcean app
- DigitalOcean Droplets
- Vercel
- Cloudfare pages
- Railway (it's cheaper)
- Netlify

***

## Tools

Tools used for web dev in general.

- Figma: Design
- Storybooks: Component collection
- Version Control: GIT (aplicar CI/CD y un proceso de merge llamado trunk based development and squash merge), Version control is crucial for managing changes to your codebase, and Git is one of the most popular version control systems.

### Documentation

- Storybook for: documentation plain js, html, css, react, next. Style guides, design systems. Hosted in chromatic.
- Docosaurus
- Mkdocs
- Bookstack: wiki creator.
- Wiki.js: wiki creator
- Hugo: Static Site Generator

Herramientas están en los favoritos de microsoft edge al igual que las referencias de todos los productos.

***

## Languages and libraries

- Lenguages Web Base: HTML, CSS, JAVASCRIPT (typescript).

- Package Manager: NPM

### CSS

**Libraries and metodologies:**

- CSS modules: for same class name components, CSS modules with SASS and global styles folder.
- BEM: methodology
- Atomic Design Components
- KSS for pattern library and css documentation

#### Pre-processors

- SCSS
- SASS

***

### JAVASCRIPT Libraries

- three.js: para animaciones 3d
- prism, Highlight.js: para highlight codigo en la pagina web
- markdown-it: para administrar contenido markdown-it, a parte esta
- markdown-it hightlight y markdown-it-attrs para atributos.
- lodash: funciones varias dentro de javascript.
- animejs: para animaciones
- motion ui: For transitions
- moment js: todo para con el tiempo y fechas
- d3js, chartjs: para graficas
- underscorejs: para arrays
- fuse: para búsquedas
- pdfjs: para crear pdfs
- pixi: para 2d rendered image
- Auth0: para autenticación.
- Clerk: para autenticación
- Firebase: autenticación y base de datos
- Passportjs: para autenticación
- Lax.js: para animaciones scroll
- Fontfaceobserver: Control when render fonts on the browser.
- Require js
- gsap js for animation (pricing)

***

- **npm**

npm is the package manager for Node.js, and it's used to install and manage dependencies in your project.

- **nvm:** Node virtual manager, to isolate node vertions, tools to set enviroment and isolation

***

### JavaScript FRAMEWORKS

#### React js Libraries

- Vite
- Tailwind, css modules
- React-router: If your application involves multiple pages or views, React Router is a common library for adding navigation to your React applications.
- React spring
- React typical
- Frammer for animations
- Redux (big apps), it's mostly deprecated **As November 2023 it's recommended use zusand for state management and react query for data fetching.** RTK and zusand for client state, and RTK query and react query for server state.
A nice combination:
- Rtk-rtk-query
- Zustand-react query
- React developer Tools

**Data Fetching:**

- **Axios or Fetch:** For making HTTP requests to your server or external APIs to fetch data.
- **GraphQL (with Apollo Client or Relay):** If you prefer a more efficient and flexible way to query and manipulate data.

**Authentication:**

- **Firebase Authentication or Auth0:** To handle user authentication and secure access to certain parts of your e-commerce application.

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

### VsCode Extentions

**ESLint and Prettier:**

- **ESLint:** ESLint is a linter for JavaScript and JSX, which helps maintain code quality by catching common errors and enforcing coding standards.
   Gotcha, thanks! I’m not sure there is an easy way to do this. You might consider some kind of custom ESLint plugin to throw errors at build time. Maybe based on a list from the storybook project or something. Honestly it seems like more trouble than it’s worth though.
- **Prettier:** Prettier is a code formatter that helps maintain consistent code style across your project.

***

#### Next js Libraries

- React query + zusand (replace of redux)
- Swup (page transition)

***

#### Astro js Libraries

- Astro integrations

***

#### Component libraries

- Mantine ui
- Material ui
- Chakra ui

***

### Back-End

#### Node js (environment)

- Express
- Nustjs (for advanced)
- Nests js framework build on top of express

#### Databases

- SQLite: Small database
- SQL - Postgre:  For relational databases
- MongoBd: For non-relational

#### ORM

Preferiblemente con typescript: Prisma, TypeORM, RESTapi, GraphQL, fetch api, axios.

#### For apis

- Supabase

#### CMS

- Strapi (RestApi, GraphQL)
- Directus
- Payload
- Sanity
- Ghost

#### For ecommerce

- Shopify (to build, carts, checkouts, manage clients info)
- Medusa (same as Shopify but is self-hosted)
- Wompi (payment processing)

#### Hosting backend

- Fly.io
- DigitalOcean Droplet
- Azure app service for containers

***

### Conteiners apps

- Docker

#### Orchestration and load balancing

- Kubernetes

***

#### Web Security

***

### Module Bundler

- **Webpack:** It is a module bundler for JavaScript applications. Webpack takes your JavaScript, CSS, and other assets and bundles them together in a way that's optimized for the web. It's often used to handle tasks like transpiling modern JavaScript (using Babel), bundling and minifying CSS, and optimizing images.

- **Babel:** Babel is a JavaScript compiler that allows you to use the latest ECMAScript features (like arrow functions, template literals, etc.) in your code and converts it to a version of JavaScript that can run in older browsers. It's crucial when working with React because it enables the use of JSX (JavaScript XML), which is a syntax extension for JavaScript recommended by React.

***

### Testing: jest

***

### Accesibility: Aria and keyboard navigation

Researching headless components, I found that there are a couple of popular libraries:

- **Radix UI:** My favorite. Well tested, accessible, and has one of the best component API-s I’ve seen. It does have some problems when testing it’s components with React Testing Library, and does not support IE very well.
- **Reach UI:** pretty good and reliable, from the authors of react-router and Remix. Not a lot of components, but covers most use cases.
- **Headless UI:** a small number of components. Well tested, work best with Tailwind CSS. Only drawback is that it’s not that easy to change the functionality and behavior of the components.
- **Downshift:** By Kent C. Dodds. Focuses on autocomplete, select, combobox, and multi combobox components. Well tested, accessible, and gives you total control over styling and functionality. I chose it for our combobox and autocomplete components, and learned a lot from their implementation.
- **React-aria:** By Adobe. I don’t know too much about it, but it looks interesting.
- **Reakit**
- **Ariakit**

***

### TaskRunners: pm2 nginx gulp grunt

***
