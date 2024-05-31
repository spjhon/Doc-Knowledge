---
sidebar_position: 0
---

# Index del conocimiento adquido en desarrollo web

- Se recomienda para cualquier reunion o un momento que se necesite tomar notas, utilizar el Cornell note-taking system and template.

- La finalidad de este flujo de conocimiento es tener a la mano todo el conocimiento necesario para crear un e-commerce en produccion.

Lo ideal para tener una gran fuente de conocimiento a la mano y que sea productiva, se debe de tener la informacion en las siguientes formas, esta estructura esta optimizada para lenguajes de programacion, modificar para otro tipo de conocimiento:

1. **Bookmarks con toda la documentacion de cada FRAMEWORK, LIBRERIA, ARTICULOS DE BLOGS, EJEMPLOS, GUIAS, GENERADORES Y CREADORES, ELEMENTOS UI LISTOS PARA UTILIZAR, UI LIBRARIES, entre otros.**

2. **Repositorios con Books, Docs, Cursos Udemy, Ejemplos Blogs, Ejemplos Youtube, Stars de github**

3. **Storybook library con todos los componentes creados y prueba de componentes pre-fabricados en REACT y NEXT JS como lo es MaterialUI y mantine Ademas de conocidos patterns**

4. **Respositorio con un DOCUSAURO (anterior mente se utilizaba mindmaps pero no es seguro a futuro (vendor-lock)) que contiene conocimiento que se encuentra muy esparcido en otras fuentes y es mas facil o es necesario un MAPA como por ejemplo las diferentes formas de crear e invocar una funcion o las diferentes formas de crear o invocar un objeto. Ademas de conocidos patterns con links en donde encontrar el conocimiento mas completo**

***

## Notas

Para su facilidad en un inicio sera escrita en español, luego se hara la traduccion.

### Para tener en cuenta

El mayor asset de una organizacion tecnologica y mas aun de desarrollo de codigo de programacion para computadora es el conocimiento adquirido y aplicado ya que todo ese codigo no es natural no posee inercia sino que debe de ser controlado desde el principio hasta el fin por ello la administracion correcta del conocimiento es escencial para una organizacion ya que el capital humano cambia constantemente.

The post explores the significant issue of knowledge loss within organizations, emphasizing its impact on communication structures and system design. The author introduces the concept of 'Biological Data Storage' to represent the critical role of employees as carriers of knowledge and experience. It discusses the use of metrics like 'Time to Problem Resolution' and 'Knowledge Transfer Rate' to assess organizational effectiveness and knowledge transfer efficiency. Techniques such as documentation, Architecture Decision Records (ADRs), EventStorming, and BPMN (Business Process Model and Notation) are recommended for capturing and preserving knowledge. The post highlights the need for a cultural shift in organizations towards open communication and active knowledge sharing to combat the loss of expertise when experienced members depart.

***

### Como libros y documentacion de referencia se complementan

Como los libros son para conocer y aprender la herramienta la referencia es para utilizar en produccion:

- La documentacion (paginas web en booksmarks) de cada lenguaje, framework y libreria dicta la utilizacion de cada herramienta individual pero no trabajando juntas. La lista completa de las documentaciones se puede extraer del "stack" asi que cada DOCUSAURO sera un **MAPA** para el conocimiento indexado con links a donde este este conocimiento completo.

- Ante la teoria pero no como utilizar esta teoria se tiene los libros (repositorios github), cursos udemy (repositorios github), articulos de blogs (Examples repositorios github) y ejemplos youtube (repositorios github) que muestran la forma de aplicar la teoria (estructura de aprendizaje tutoriada que es diferente a una referencia de la teoria), sin embargo estos muestran ejemplos de herramientas trabajando juntas pero no todas herramientas, por ello se debe documentar en cada projecto que conocimiento se esta aplicando para futura referencia y comparacion con la teoria.

A continuacion se dicta como estudiar un libro y/o un curso de udemy.

#### Como hacer los cursos o aprender de un libro

##### Si es un libro

- Se debe de integrar el libro teorico con el DOCUSAURO principal y la teoria ya existente sin repetir teoria ya aprendida (ya que muchos libros enseñan lo mismo pero tienen cosas extra) y en la teoria del DOCUSAURO debe de tener la referencia de donde se saco la teoria para luego ir a donde esta este conocimiento mas completo ya que en el DOCUSAURO solo esta la referencia y un pequeño subtexto que dice que se esta enseñando en ese titulo en especial.

**Nota:** Con blogs o ejemplos sacados de otros textos, se agrega a su respectiva seccion en el DOCUSAURO y se referencia de donde obtener la informacion mas completa.

**Nota 2:** Para como llenar mas precisamente el DOCUSARUO referirse a la seccion **Como llenar el DOCUSAURO** de mas abajo.

##### Si es un curso de udemy o libro practico (para patterns o projectos completos)

- Se debe de crear un repositorio con un README.md que contenga todas las partes del curso que este ligado al DOCUSAURO por medio de los temas aprendidos o temas tratados (referenciar en el DOCUSAURO principal los ejemplos relevantes de cada tema), debe de haber un minimo de tres secciones **por seccion del curso** (**como funciona la app** (ya que la mayoria de los cursos son con ejemplo practicos), **temas tratados** y **tips**), esto para dar una vision resumida de cada capitulo del curso.

- Componente creado utilizando el conocimiento de mas arriba, probado y en mejora continua en storybooks. (cuando es REACT)

##### Como comentar los componentes en REACT o NEXTJS

- En la parte de arriba de la funcion del componente agregar el comentario "LO QUE ENTRA", "ALGORITMO"  "LO QUE RETORNA" y explicar en pasos que le entra al componente que hace el componente que modifica (context o redux functions) y que devuelve.
- Agregar peros y tips para que si se lee el componente 8 meses despues, sea entendible que es lo que hace.
- Cada funcion, handleClick, variable que se declare dentor del componente debe de tener un comentario expicativo
- En la declaracion de los states decir todos los posibles estados de cada state.
- Si la o las funciones dentro del componente son muy complejas se puede agregar otro bloque de "LO QUE ENTRA", "ALGORITMO"  "LO QUE RETORNA"

- Un Repositorio DOCUSAURO que contiene conocimiento que no puede ser alamcenado en ninguno de los medios anteriores y con un util index de todo lo anterior.

#### Como llenar el DOCUSAURO

Cada vez que se realize un curso o se lea un libro, en el docusauro se va a registrar la informacion TEORICA aprendida en forma de index en el overview de cada gran tema, si el tema en especifico es complejo y se requiere mucho en el uso diario como el useEffect de react, se porcede a crear su propia seccion en el docusauro con el fin de recopilar en un solo sito la informacion de interes como por ejemplo los patterns de React.

- Cada GRAN TEMA debe de llevar un overview
- Dentro del **overview** debe de haber una seccion con el index de sub-temas y los links de los ejemplos de donde encontrar la informacion de los sub-titulos de los index que dirijan a los ejemplos dados en los libros o cursos en sus propios repositorios, la estructura que se recomienda dentro del docusauro en archivos a parte ademas de overview es:

**Definir terminos:** Un glosario para tener a la mano terminos importantes.

**Como crear el resumen**: Si el tema ya existe se agrega la informacion pertiente, si no se agrega el tema, la informacion se debe de llenar no con explicaciones del por que de algo sino con hechos confirmados, si resulta la pregunta el por que de esta afirmacion pues se dirige a la informacion mas detallada ya sea en libros o cursos o referencias o tutoriales.

**Teoria con Syntax y ejemplo practico**
Como se ha dicho anteriormente, la idea de un DOCUSAURO es mostrar un MAPA hacia donde encontrar la informacion completa asi que solo se va a concignar la teoria en sus respectivas secciones dentro de la categorizacion dada en el DOCUSAURO. La teoria que necesite mayor aclaracion o sea mas extensa se digitara en un documento a parte pero dentro de la misma carpeta y en el overview lago asi como un index pero con direcciones para saber donde se encuentra la teoria completa.

**Patrón (Patterns):**

Una forma sencilla de ver los patterns es que todo lo que se haga en un pattern esta ya explicado en la teoria.

Los patrones son importantes tenerlos bien documentados y ordenados gracias a que estos son codigos funcionales y ensamblables para crear lo que se necesite crear.

En programación, un patrón se refiere a una solución generalmente aplicable a un problema recurrente dentro de un contexto específico. Los patrones de diseño son ejemplos comunes de esto, proporcionando soluciones probadas para problemas como la gestión de objetos, la estructuración de código o la comunicación entre componentes. Por ejemplo, el patrón de diseño "Singleton" se utiliza para garantizar que una clase solo tenga una instancia en toda la aplicación.

En resumen, mientras que los conceptos son ideas fundamentales, la sintaxis se refiere a cómo se escriben estas ideas en un lenguaje de programación específico. Las características son las capacidades que proporciona un programa, mientras que los patrones son soluciones generales a problemas recurrentes en el desarrollo de software.

A partir de estas 4 bases combinadas y escalables se referencia todo el conocimiento requerido para crear un projecto en produccion.

***
***

### Categorizacion de la documentacion (Stack)

[Ir al stack](/web/the-stack)

### Categorizacion de los repositorios

Por orden alfabetico:

- Book: Cada repositorio es un libro, cada libro dice en su readme que conocimiento y herramientas contiene.
- CSS in Depth
- Escential Guide HTML5
- Javascript CookBook third edition
- Doc: El docusaurus con escrituras propias.
- Examples: Ejemplos dividido en vanilla javascript, react, next. Extraidos de los blogs y articulos, cada ejemplo lleva un readme con el conocimiento adquirido.
- Forked: repositorios para utilizar en futuros projectos.
- Kevin Powell: Youtuber experto en CSS
- The odin project.
- Udemy: Cada repositorio es un curso de udemy.
- zObsoletos: repositorios que contienen conocimiento obsoleto.

### Categorizacion de los componentes en storybook

### Libros leidos hasta el momento

Javascript defeinitive edition
The ninja javascript book
Css in depth
Learning Typescript

### Cursos de Udemy o  coursera hasta el momento

Universidad HTML, CSS javascript
React de stephen grider
Git crash course
Simple calculator REACT

### Categorizacion de las stars en github

***

#### Resources - Curated Lists - Collections

| **Library Title**                                                                                     | **Description**                                                                                                         |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [awesome-codebases](https://github.com/alan2207/awesome-codebases)                                   | A collection of awesome open-source codebases worth exploring.                                                           |
| [awesome-javascript](https://github.com/sorrycc/awesome-javascript)                                   | A collection of awesome browser-side JavaScript libraries, resources, and shiny things.                                  |
| [awesome-medusajs](https://github.com/adrien2p/awesome-medusajs)                                     | A curated list of awesome resources related to MedusaJS.                                                                 |
| [awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)                                   | A curated list of awesome resources (books, videos, articles) about using Next.js.                                      |
| [awesome-react](https://github.com/enaqx/awesome-react)                                              | A collection of awesome things regarding the React ecosystem.                                                             |
| [awesome-react-components](https://github.com/brillout/awesome-react-components)                    | Curated List of React Components & Libraries.                                                                           |
| [design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers) | Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools, and more.  |
| [project-based-learning](https://github.com/practical-tutorials/project-based-learning)              | Curated list of project-based tutorials.                                                                                |
| [tips](https://github.com/git-tips/tips)                                                            | Most commonly used git tips and tricks.                                                                                 |
| [33-js-concepts](https://github.com/leonardomso/33-js-concepts)                                     | 33 JavaScript concepts every developer should know.                                                                     |
| [Awesome-NextJs](https://github.com/awe50me/Awesome-NextJs)                                          | Curated list of awesome things related to Next.js.                                                                       |

#### Boilerplates

| **Library Title**                                                                                       | **Description**                                                                                                         |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)                                        | A professional front-end template for building fast, robust, and adaptable web apps or sites.                             |
| [Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template) | 🚀 Free NextJS Landing Page Template written in Tailwind CSS 3 and TypeScript ⚡️ Made with developer experience first: Next.js 13 + TypeScript + ESLint + Prettier + Husky + Lint-Staged + VSCode + Ne… |
| [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)                                  | 🚀🎉📚 Boilerplate and Starter for Next.js 14+ with App Router and Page Router support, Tailwind CSS 3.3 and TypeScript ⚡️ Made with developer experience first: Next.js + TypeScript + ESLint + Prettie… |
| [open-react-template](https://github.com/cruip/open-react-template)                                    | A free React / Next.js landing page template designed to showcase open source projects, SaaS products, online services, and more. Made by |

Feel free to use this concise table in your Markdown document!

#### Frameworks

| **Library Title**                                                                         | **Description**                                                                                                         |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [animate.css](https://github.com/animate-css/animate.css)                                | 🍿 A cross-browser library of CSS animations. As easy to use as an easy thing.                                             |
| [axios](https://github.com/axios/axios)                                                | Promise based HTTP client for the browser and node.js.                                                                  |
| [bulma](https://github.com/jgthms/bulma)                                              | Modern CSS framework based on Flexbox.                                                                                  |
| [django](https://github.com/django/django)                                            | The Web framework for perfectionists with deadlines.                                                                    |
| [electron](https://github.com/electron/electron)                                      | :electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS.                                            |
| [express](https://github.com/expressjs/express)                                       | Fast, unopinionated, minimalist web framework for node.                                                                 |
| [fastapi](https://github.com/tiangolo/fastapi)                                        | FastAPI framework, high performance, easy to learn, fast to code, ready for production.                                  |
| [flask](https://github.com/pallets/flask)                                             | The Python micro framework for building web applications.                                                               |
| [git](https://github.com/git/git)                                                     | Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget. Please follow Documen… |
| [ionic-framework](https://github.com/ionic-team/ionic-framework)                        | A powerful cross-platform UI toolkit for building native-quality iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript. |
| [markdown-it](https://github.com/markdown-it/markdown-it)                              | Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed.                           |
| [medusa](https://github.com/medusajs/medusa)                                          | Building blocks for digital commerce.                                                                                  |
| [next-server-task](https://github.com/Neo-Ciber94/next-server-task)                    | Provides a mechanism for executing long running tasks on NextJS edge api-handlers.                                      |
| [node](https://github.com/nodejs/node)                                                | Node.js JavaScript runtime ✨🐢🚀✨.                                                                                    |
| [normalize.css](https://github.com/necolas/normalize.css)                             | A modern alternative to CSS resets.                                                                                   |
| [parallax](https://github.com/wagerfield/parallax)                                    | Parallax Engine that reacts to the orientation of a smart device.                                                       |
| [react](https://github.com/facebook/react)                                            | The library for web and native user interfaces.                                                                        |
| [storybook](https://github.com/storybookjs/storybook)                                  | Storybook is a frontend workshop for building UI components and pages in isolation. Made for UI development, testing, and documentation. |
| [three.js](https://github.com/mrdoob/three.js)                                        | JavaScript 3D Library.                                                                                                 |
| [TypeScript](https://github.com/microsoft/TypeScript)                                  | TypeScript is a superset of JavaScript that compiles to clean JavaScript output.                                         |
| [wiki](https://github.com/requarks/wiki)                                              | Wiki.js |

#### Checklists

| **Project Title**                                                                       | **Description**                                                                                                         |
|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist)              | 🗂 The perfect Front-End Checklist for modern websites and meticulous developers.                                         |
| [Front-End-Performance-Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist) | 🎮 The only Front-End Performance Checklist that runs faster than the others.                                            |
| [HEAD](https://github.com/joshbuchea/HEAD)                                             | A simple guide to HTML `<head>` elements.                                                                                 |
| [project-guidelines](https://github.com/elsewhencode/project-guidelines)                | A set of best practices for JavaScript projects.                                                                       |

#### Tools Components and icons

| **Project Title**                                                     | **Description**                                                                                                         |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [eslint-config-canonical](https://github.com/gajus/eslint-config-canonical) | The most comprehensive ES code style guide.                                                                             |
| [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)           | The iconic SVG, font, and CSS toolkit.                                                                                 |
| [intergram](https://github.com/idoco/intergram)                      | Free live chat widget linked to your Telegram messenger.                                                               |
| [react-glow](https://github.com/codaworks/react-glow)               |                                                               |
| [react-pdf-viewer](https://github.com/react-pdf-viewer/react-pdf-viewer) | A React component to view a PDF document.                                                                             |
| [react-switch](https://github.com/markusenglund/react-switch)         | A draggable toggle-switch component for React. Check out the demo at:                                                   |
| [sorting-visualizer](https://github.com/sadanandpai/sorting-visualizer) | Sorting Algorithms Visualizer.                                                                                      |
| [svgr](https://github.com/gregberge/svgr)                           | Transform SVGs into React components 🦁.                                                                              |
| [tooltips](https://github.com/zkreations/tooltips)                  | A lightweight and powerful solution that doesn't rely on JavaScript and compresses to just 0.7kb (Brotli). Easy to customize and implement, with no impact on performance. |

#### Algorithms and patterns

| **Project Title**                                                     | **Description**                                                                                                         |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code)             | Short code snippets for all your development needs.                                                                      |
| [30-seconds-of-css](https://github.com/Chalarangelo/30-seconds-of-css)               | Short CSS code snippets for all your development needs.                                                                  |
| [30-seconds-of-react](https://github.com/Chalarangelo/30-seconds-of-react)           | Short React code snippets for all your development needs.                                                                |
| [css-cheat-sheet](https://github.com/AdamMarsden/css-cheat-sheet)                   | CSS Cheat Sheet - A reference for CSS goodness.                                                                          |
| [css-docs](https://github.com/eludadev/css-docs)                                  | CSS Selectors, Flexbox, Grid, Box Model, visually explained.                                                            |
| [css-reference](https://github.com/jgthms/css-reference)                         | CSS Reference: a free visual guide to the most popular CSS properties.                                                 |
| [es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)                     | ES2015 [ES6] cheatsheet containing tips, tricks, best practices and code snippets.                                     |
| [essential-js-design-patterns](https://github.com/addyosmani/essential-js-design-patterns) | Repo for my 'Learning JavaScript Design Patterns' book.                                                                |
| [javascript](https://github.com/TheAlgorithms/Javascript)                       | Algorithms and Data Structures implemented in JavaScript for beginners, following best practices.                   |
| [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)         | 📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings.         |
| [javascript-fundamentals](https://github.com/GoranKukic/javascript-fundamentals)     |                                                                                                                          |
| [javascript-patterns](https://github.com/chuanxshi/javascript-patterns)             | JavaScript Design Patterns.                                                                                            |
| [javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices) | 📗🌐 🚢 Comprehensive and exhaustive JavaScript & Node.js testing best practices (July 2023).                          |
| [jstips](https://github.com/loverajoel/jstips)                                  | This is about useful JS tips!                                                                                          |
| [modern-js-cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet)           | Cheatsheet for the JavaScript knowledge you will frequently encounter in modern projects.                              |
| [nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)             | ✅ The Node.js best practices list (July 2023).                                                                         |
| [react-pdf-viewer](https://github.com/react-pdf-viewer/react-pdf-viewer)           | A React component to view a PDF document.                                                                              |
| [wtfjs](https://github.com/denysdovhan/wtfjs)                                    | 🤪 A list of funny and tricky JavaScript examples.                                                                     |

#### Projects and demos

| **Project Title**                                                     | **Description**                                                                                                         |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [30-days-of-react-native](https://github.com/fangwei716/30-days-of-react-native)         | 30 days of React Native demos.                                                                                          |
| [Astro-Theme-Creek](https://github.com/robertguss/Astro-Theme-Creek)                   | A theme for Astro.                                                                                                      |
| [Astro-Express-Blog-Demo](https://github.com/Nealyang/React-Express-Blog-Demo)           | 🔥 React full stack+Express+Mongo implementation blog website tutorial 🌚.                                              |
| [Astro-Landing-Page-Starter](https://github.com/cssninjaStudio/fresh)               | 🚀 Free Astro Landing page starter.                                                                                     |
| [Astro-Paper](https://github.com/satnaing/astro-paper)                        | A minimal, accessible and SEO-friendly Astro blog theme.                                                                |
| [Astroship](https://github.com/nextacular/nextacular)                       | An open-source starter kit that will help you build full-stack multi-tenant SaaS platforms efficiently and help you focus on developing your core SaaS features. Built on top of popular and modern t… |
| [Awesome-JavaScript-Projects](https://github.com/Vishal-raj-1/Awesome-JavaScript-Projects) | This Repository contains awesome vanilla JavaScript projects.                                                           |
| [Enatega-Food-Delivery-Solution](https://github.com/Ninjas-Code-official/Enatega-Food-Delivery-Solution) | A fully functional white label Restaurant🍽/Food Delivery🍔/Grocery App🛒 built using React Native with Customer, Rider App and Dashboard. |
| [FEM-easybank-landing-page](https://github.com/DLee1993/FEM-easybank-landing-page)       | A Fronted challenge from frontend mentor.                                                                              |
| [JavaScript-Design-Patterns](https://github.com/chuanxshi/javascript-patterns)            | JavaScript Design Patterns.                                                                                            |
| [JavaScript-Testing-Best-Practices](https://github.com/goldbergyoni/javascript-testing-best-practices) | 📗🌐 🚢 Comprehensive and exhaustive JavaScript & Node.js testing best practices (July 2023).                          |
| [JavaScript-Fundamentals](https://github.com/GoranKukic/javascript-fundamentals)        |                                                                                                                          |
| [JavaScript-Algorithms](https://github.com/trekhleb/javascript-algorithms)              | 📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings.         |
| [medusa-reviews-tutorial](https://github.com/shahednasser/medusa-reviews-tutorial)      | Code for How to Add Product Reviews to Your Medusa Server and Next.js Storefront.                                       |
| [nextjs-starter-medusa](https://github.com/medusajs/nextjs-starter-medusa)            | A performant frontend ecommerce starter template with Next.js 14 and Medusa.                                           |
| [react-demos](https://github.com/ruanyf/react-demos)                          | a collection of simple demos of React.js.                                                                              |
| [shopify-react-astro](https://github.com/cassidoo/shopify-react-astro)               | A demo of a Shopify site using Astro and React.                                                                        |
| [styled-qr-code-generator](https://github.com/lyqht/styled-qr-code-generator)        | Web app to generate customized QR codes easily 👾.                                                                     |
| [template-ecommerce](https://github.com/payloadcms/template-ecommerce)              |                                                                                                                          |
| [the-big-spring-nextjs](https://github.com/themefisher/bigspring-light-nextjs)      | The Bigspring Next.js Template Perfect For Creative Agency, Marketing Agency, Design Studios, Digital Marketing Agencies, Saas and other business service websites. |
| [wtfjs](https://github.com/denysdovhan/wtfjs)                                  | 🤪 A list of funny and tricky JavaScript examples.                                                                     |

#### Courses

| **Project Title**                                                     | **Description**                                                                                                         |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)             | 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days; please just follow your own pace… |
| [30-Days-Of-React](https://github.com/Asabeneh/30-Days-Of-React)                 | 30 Days of React challenge is a step-by-step guide to learn React in 30 days. These videos may help too: [link](https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw) |
| [bulletproof-react](https://github.com/alan2207/bulletproof-react)                 | 🛡️ ⚛️ A simple, scalable, and powerful architecture for building production-ready React applications.                   |
| [computer-science](https://github.com/ossu/computer-science)                   | 🎓 Path to a free self-taught education in Computer Science!                                                              |
| [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)                   | freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.                                       |
| [frontend-bootcamp](https://github.com/microsoft/frontend-bootcamp)              | Frontend Workshop from HTML/CSS/JS to TypeScript/React/Redux.                                                           |
| [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch)            | 🛠️⚡ Step-by-step tutorial to build a modern JavaScript stack.                                                          |
| [nextjs-roadmap](https://github.com/Blazity/nextjs-roadmap)                 | 🤓 Roadmap showcasing the journey to becoming a proficient Next.js Product Engineer in 2023.                             |
| [system-design-primer](https://github.com/donnemartin/system-design-primer)          | Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.                |
| [understanding-astro-book](https://github.com/understanding-astro/understanding-astro-book) | Learn to build remarkably fast websites with Astro ✨.                                                                  |
| [web-development-course-list](https://github.com/andrews1022/web-development-course-list) | A list of Udemy courses from Brad Traversy's Web Development 2021 video.                                                |
