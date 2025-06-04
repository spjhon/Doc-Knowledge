---
sidebar_position: 0
---

# Index del conocimiento adquido en desarrollo web

- Se recomienda para cualquier reunion o un momento que se necesite tomar notas, utilizar el Cornell note-taking system and template.

- La finalidad de este flujo de conocimiento es tener a la mano todo el conocimiento necesario para crear un e-commerce en produccion.

Lo ideal para tener una gran fuente de conocimiento a la mano y que sea productiva, se debe de tener la informacion en las siguientes formas, esta estructura esta optimizada para lenguajes de programacion, modificar para otro tipo de conocimiento:

1. **Respositorio con un DOCUSAURO (anteriormente se utilizaba mindmaps pero no es seguro a futuro (vendor-lock)) que contiene conocimiento que se encuentra muy esparcido en otras fuentes, la idea es que sea un indexado del conocimiento, el core de la teoria y ejemplos esta en sus respectivos espacios, por ejemplo un libro tiene su propio repositorio con la teoria a profundiad pero en el docusaurio se encuentra que teoria se habla y en donde se encuentra para asi tener un conglomerado de todos los temas pertinentes en un solo lugar**

2. **Repositorios con Books, Docs, Cursos Udemy, Ejemplos Blogs, Ejemplos Youtube, Stars de github, estos repositorios tendran STORYBOOKS en donde sea necesario para mostrar ejemplos**

3. **Bookmarks con toda la documentacion de cada FRAMEWORK, LIBRERIA, ARTICULOS DE BLOGS, EJEMPLOS, GUIAS, GENERADORES Y CREADORES, ELEMENTOS UI LISTOS PARA UTILIZAR, UI LIBRARIES, entre otros.**

4. **Libreria de libros digitales, biblioteca en la cual cada libro leido tiene su repositorio con ejemplos y teoria que esta indexada en el docusaurio**

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

- Ante la teoria pero no como utilizar esta teoria se tiene los libros (repositorios github), cursos udemy (repositorios github), articulos de blogs (Examples repositorios github) y ejemplos youtube (repositorios github) que muestran la forma de aplicar la teoria (estructura de aprendizaje tutoriada que es diferente a una referencia de la teoria), sin embargo estos muestran ejemplos de herramientas trabajando juntas pero no todas herramientas, por ello se debe documentar en cada projecto que conocimiento se esta aplicando para futura referencia y comparacion con la teoria tratando cada parte como un MODULO.

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

### Libros leidos hasta el momento

JavaScript: The Definitive Guide
Seventh Edition
David Flanagan

The ninja javascript book
Css in depth
Learning Typescript

React 18 Design Patterns and Best Practices
Fourth Edition
Carlos Santana Roldán

Modern Front-end Architecture
Ryan Lanciaux

### Cursos de Udemy o  coursera hasta el momento

Universidad HTML, CSS javascript
React de stephen grider
Git crash course
Simple calculator REACT
