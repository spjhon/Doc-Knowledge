---
sidebar_position: 2
---

# Diagramas recomendados para Nextjs

Para visualizar y comprender la arquitectura de una aplicación **Next.js** sin un enfoque orientado a clases, algunos tipos de diagramas que pueden ser muy útiles incluyen:

1. **Diagrama de Componentes (Componente-Interfaz)**:
   - Este diagrama muestra cómo se interconectan los diferentes componentes de la aplicación, tanto en el servidor como en el cliente. Puedes representar componentes como los de `Page`, `Layout`, y `Provider`, y cómo estos se integran para formar la estructura de tu app.
   - También puedes representar componentes específicos, como tus menús de navegación, modales o temas de interfaz.

2. **Diagrama de Flujo de Datos**:
   - Es ideal para representar cómo fluyen los datos en la aplicación, especialmente entre el cliente y el servidor, y cómo los datos pasan a través de componentes.
   - En Next.js, esto puede ser desde llamadas a la API, pasando por la serialización y deserialización en el server-side, hasta su consumo en el front-end.
   - Muestra también la interacción con servicios externos (por ejemplo, CMS, bases de datos o APIs).

3. **Diagrama de Secuencia**:
   - Si tienes procesos interactivos o multi-pasos (como carga de páginas, autenticación, o SSR/ISR), los diagramas de secuencia muestran cada paso entre el cliente, servidor, y posibles APIs externas. Esto es especialmente útil en aplicaciones que requieren renderizado tanto del lado del cliente como del servidor.

4. **Diagrama de Dependencias del Proyecto**:
   - Aquí puedes mostrar la estructura de carpetas y los módulos principales que usa la aplicación, como `pages`, `app`, `components`, `styles`, `locales`, etc.
   - Este diagrama ayuda a visualizar cómo se estructura la arquitectura de Next.js, indicando qué carpetas y archivos afectan el enrutamiento o el SSR, por ejemplo.

5. **Diagrama de Navegación o Diagrama de Páginas**:
   - Es útil para representar la estructura de rutas y navegación en Next.js. Puedes mostrar la jerarquía de rutas, los enlaces entre páginas, y cómo los usuarios interactúan con el enrutamiento.
   - Este tipo de diagrama es útil para proyectos con navegación compleja o multi-idiomas, ya que muestra cómo están conectadas las diferentes vistas.

6. **Diagrama de Contextos**:
   - Si estás utilizando `Context API` o `next-intl` para internacionalización y temas, un diagrama de contexto puede ayudarte a ver qué valores se comparten y cómo se propagan en toda la aplicación.
   - Representa los Providers y Consumers que interactúan en diferentes niveles de tu aplicación, lo cual facilita la visualización de la propagación de estado global o temas.

7. **Diagrama de Renderización**:
   - Muestra cómo se renderizan las páginas en Next.js, considerando `SSR`, `SSG`, `ISR` y `CSR`. Cada tipo de renderizado tiene un flujo de datos y efectos de rendimiento diferentes que pueden ser representados en un flujo.

Cada uno de estos diagramas te dará una perspectiva distinta de tu aplicación y, en conjunto, pueden ofrecer una comprensión integral de la arquitectura de tu proyecto.

1. **Component Diagram**
2. **Data Flow Diagram**
3. **Sequence Diagram**
4. **Project Dependency Diagram**
5. **Navigation Diagram (or Sitemap)**
6. **Context Diagram**
7. **Rendering Flow Diagram**
