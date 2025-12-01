---
sidebar_position: 13
---

# 10. Módulos

Anteriormente el modulaje se hacia por medio de classes, objects and closures ya que import an export son relativamente recientes, por eso el require() se utiliza y quedo adaptado a node como una forma de sortear estos problemas.

## 10.1. Modules with Classes, Objects, and Closures

Como se vio en la sección de clases, una clase puede actuar como un modulo haciendo encapsulamientos de sus métodos y propiedades.

- La forma antigua

Se explica que las clases tienen cierta modularidad pero que llega solo hasta cierto punto y se llega a la conclusion que las funciones ofrecen una mejor forma de esconder implementaciones y que no haya exposición de propiedades y métodos que deberían estar escondidos.

- Se presenta un ejemplo de como una clase puede ser implementada en una función y que se exporte el "extends"
- Luego se presenta otra función que exporta solo funciones que se desee exponer y escondiendo las implementaciones.
El siguiente es un excelente ejemplo de como crear una función que esconda ciertas cosas (por medio de closures) y exponga otras (por medio del return)

```javascript
// This is how we could define a stats module
const stats = (function () {
  // Utility functions private to the module
  const sum = (x, y) => x + y;
  const square = (x) => x * x;
  // A public function that will be exported
  function mean(data) {
    return data.reduce(sum) / data.length;
  }
  // A public function that we will export
  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }
  // We export the public function as properties of an object
  return { mean, stddev };
})();
// And here is how we might use the module
stats.mean([1, 3, 5, 7, 9]); // => 5
stats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
```

### 10.1.1. Automating Closure-Based Modularity

Se busca modularizar un archivo como tal y eso se hace con algo de codigo extra y se explica de donde viene el **required()**.

- Hay un muy simple ejemplo de como por ejemplo Node, junta cada modulo en una funcion que se auto ejecuta para dejar listos cada uno de los modulos y asi exponer los return necesarios para utilizar esas funciones.

El ejemplo que encontraste en el libro "JavaScript: The Definitive Guide" es una simplificación del sistema de módulos de Node.js. Este ejemplo ilustra cómo podría funcionar un sistema de módulos básico usando funciones autoejecutables (IIFE) y un objeto global para almacenar módulos.

## 10.2. Modules in Node

In Node, each file is an independent module with a private namespace.

### 10.2.1. Node Exports

Node defines a global exports object that is always defined.

### 10.2.2. Node Imports

Un módulo de **Node** importa otro módulo llamando a la función **`require()`**. El argumento de esta función es el nombre del módulo a importar, y el valor de retorno es cualquier valor (típicamente una función, clase u objeto) que ese módulo **exporte**.

Cuando un módulo exporta una **única función o clase**, todo lo que tienes que hacer es requerirlo. Cuando un módulo exporta un objeto con múltiples propiedades, tienes dos opciones: puedes importar el objeto completo, o solo importar las propiedades específicas (usando la **asignación por desestructuración**) del objeto que planeas usar.

### 10.2.3. Node-Style Modules on the Web

Los módulos con un objeto **`exports`** y una función **`require()`** vienen incorporados en **Node**. Pero si estás dispuesto a procesar tu código con una **herramienta de empaquetado** (*bundling tool*) como **webpack**, también es posible usar este estilo de módulos para código destinado a ejecutarse en navegadores web. Hasta hace poco, esto era muy común, y puedes ver mucho código web que todavía lo utiliza.

Sin embargo, ahora que JavaScript tiene su propia sintaxis de módulos estándar, los desarrolladores que usan empaquetadores prefieren utilizar los módulos oficiales de JavaScript con las declaraciones **`import`** y **`export`**.

## 10.3. Modules in ES6

El código dentro de un **módulo ES6** (al igual que el código dentro de cualquier definición de clase ES6) está automáticamente en **modo estricto** (ver §5.6.3). Esto significa que, cuando empieces a usar módulos ES6, nunca más tendrás que escribir **`"use strict"`**.

Y significa que el código en los módulos no puede usar la sentencia **`with`**, el objeto **`arguments`** o variables no declaradas.

Los módulos ES6 son incluso ligeramente más estrictos que el modo estricto: en modo estricto, en funciones invocadas como funciones, **`this`** es `undefined`. En los módulos, **`this`** es **`undefined`** incluso en el **código de nivel superior** (*top-level code*). (En contraste, los *scripts* en navegadores web y Node establecen **`this`** al objeto global).

### 10.3.1. ES6 Exports

Solo utilizando export a una variable, función o clase se puede exportar estos elementos:

```javascript
export const PI = Math.PI;
export function degreesToRadians(d) { return d * PI / 180; }
export class Circle {
constructor(r) { this.r = r; }
area() { return PI * this.r * this.r; }
}
```

o exportar todo junto al final

```javascript
export { Circle, degreesToRadians, PI };
```

Es común escribir módulos que exportan un **único valor** (típicamente una función o una clase), y en este caso, solemos usar **`export default`** en lugar de **`export`** con nombre:

```javascript
export default class BitSet {
// implementación omitida
}
```

### 10.3.2. ES6 Imports

Forma mas simple de importación

```javascript
import BitSet from './bitset.js';
```

Para importar valores de un módulo que exporta múltiples valores, utilizamos una sintaxis ligeramente diferente:

```javascript
import { mean, stddev } from "./stats.js";
```

Así se importa todo

```javascript
import * as stats from "./stats.js";
```

Así se importa combinado

```javascript
import Histogram, { mean, stddev } from "./histogram-stats.js";
```

### 10.3.3. Imports and Exports with Renaming

Si dos modulos importan el mismo nombre entonces se puede renombrar las importaciones

```javascript
import { render as renderImage } from "./imageutils.js";
import { render as renderUI } from "./ui.js";
```

Asi se renombra un default

```javascript
import { default as Histogram, mean, stddev } from "./histogram-stats.js";
```

Tambien se puede renombrar al momento de exportar

```javascript
export {
layout as calculateLayout,
render as renderLayout
};
```

### 10.3.4. Re-Exports

- Si se desea importar de otro lado y luego re-exportar se haría asi:

```javascript
export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";

// O tambien
export * from "./stats/mean.js";
export * from "./stats/stddev.js";

// O tambien
export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";


// O tambien
// Import the mean() function from ./stats.js and make it the
// default export of this module
export { mean as default } from "./stats.js"


//o Tambien
// The average.js module simply re-exports the stats/mean.js default export
export { default } from "./stats/mean.js"
```

### 10.3.5. JavaScript Modules on the Web

Curiosamente modules es algo relativamente nuevo en javascript, por eso se debe tener este codigo en el HTML:

```javascript
 <script type="module">
```

- Recordar que los módulos siempre se ejecutan en "strict mode"
- Los módulos en un browser se ejecutan como scripts con el atributo defer
- Un dato interesante es que los script normales pueden cargasen desde cualquier lado pero lo que son de tipo modulo solo pueden cargarse desde el mismo origen que el del HTML que los invoca.

### 10.3.6. Dynamic Imports with import()

Con los módulos importados **estáticamente**, tienes la garantía de que los valores que importas en un módulo estarán listos para ser utilizados antes de que cualquier código de tu módulo comience a ejecutarse.

Se pueden utilizar **promesas** o **`async/await`** (para realizar importaciones dinámicas):

```javascript
import("./stats.js").then(stats => {
 let average = stats.mean(data);
})

async analyzeData(data) {
 let stats = await import("./stats.js");
 return {
 average: stats.mean(data),
 stddev: stats.stddev(data)
 };
}
```

- **`import()`** no es una función, es un **operador**.

### 10.3.7. import.meta.url

`import.meta.url` es una de esas características de JavaScript moderno (ESM) que **solo existe dentro de módulos**, y que te permite saber **la URL completa del archivo actual** que se está ejecutando.

Es básicamente **la forma moderna de saber “dónde estoy”** dentro del sistema de módulos de JavaScript.

✅ ¿Qué es `import.meta`?

`import.meta` es un **objeto especial** disponible **únicamente en módulos ES (ESM)**.
Contiene metainformación del módulo actual.

Uno de sus campos más usados es:

```js
import.meta.url
```

✅ ¿Qué es `import.meta.url`?

Es una **URL absoluta** que apunta al archivo actual.

Ejemplo:

```js
console.log(import.meta.url);
```

En distintos entornos:

En navegador

Si el módulo fue cargado desde:

```html
<script type="module" src="/js/utils.js"></script>
```

`import.meta.url` →

```js
http://localhost:3000/js/utils.js
```

En Node.js (ESM)

Si corres:

```bash
node index.mjs
```

`import.meta.url` →

```js
file:///C:/proyecto/index.mjs
```

🔥 ¿Para qué sirve?

1. **Obtener la ruta del archivo actual**

    Muy útil en Node cuando quieres trabajar con rutas de archivos.

    ```js
    import { fileURLToPath } from 'url';
    import { dirname } from 'path';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    console.log(__dirname);
    ```

    Esto reemplaza las variables antiguas de CommonJS:

    - `__dirname`
    - `__filename`

2. **Importar recursos relativos al archivo**

    Ejemplo: cargar un JSON, imagen o WASM relativo a dónde está el módulo.

    ```js
    const url = new URL('./data.json', import.meta.url);
    const data = await fetch(url).then(r => r.json());
    ```

3. **Crear URLs absolutas para assets**

    En el navegador:

    ```js
    const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;
    document.querySelector("img").src = logoUrl;
    ```

    Esto asegura rutas correctas aunque cambie el bundler o la estructura.

4. **Detectar si un módulo es el “archivo principal”**

    En Node (ESM), el equivalente moderno a `if (require.main === module)`:

    ```js
    if (import.meta.url === `file://${process.argv[1]}`) {
    console.log("Ejecutado directamente");
    }
    ```

🤔 ¿Por qué no existe en scripts normales?

Porque **solo los módulos tienen concepto de “URL propia”**.
Los scripts tradicionales no son cargados como módulos y no cuentan con este mecanismo.

📌 Resumen final

| Propiedad         | Significado                              |
| ----------------- | ---------------------------------------- |
| `import.meta`     | Metainformación del módulo actual        |
| `import.meta.url` | URL absoluta del archivo JS en ejecución |
| Disponible en     | **Módulos ES (ESM)**, no en scripts      |

Usos principales:

- Obtener ruta del archivo actual (reemplazo de `__dirname`/`__filename`).
- Construir rutas absolutas para assets.
- Cargar archivos relativos al módulo.
- Verificar si un archivo es ejecutado directamente.
