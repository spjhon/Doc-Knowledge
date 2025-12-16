---
sidebar_position: 15
---

# 14. Metaprogramming

Metaprogramming es algo asi como escribir código para manipular código, ya que el código normal lo que normalmente hace es manipular data type

Los temas de **metaprogramación** cubiertos en este capítulo incluyen:

* **§14.1 Control de la enumerabilidad, capacidad de eliminación y configurabilidad de las propiedades de los objetos**
* **§14.2 Control de la extensibilidad de los objetos y creación de objetos "sellados" (*sealed*) y "congelados" (*frozen*)**
* **§14.3 Consulta y establecimiento de los prototipos de los objetos**
* **§14.4 Ajuste fino del comportamiento de sus tipos con Símbolos conocidos (*well-known Symbols*)**
* **§14.5 Creación de DSLs (*domain-specific languages* o lenguajes específicos de dominio) con funciones de etiqueta de plantilla (*template tag functions*)**
* **§14.6 Sondeo de objetos con métodos *reflect***
* **§14.7 Control del comportamiento de los objetos con *Proxy***

## 14.1 Property Attributes

Las propiedades de un objeto JavaScript tienen nombres y valores, por supuesto, pero cada propiedad también tiene **tres atributos asociados** que especifican cómo se comporta esa propiedad y qué puedes hacer con ella:

⚙️ Atributos de Propiedad

* **`writable`**
        - Este atributo especifica si el valor de una propiedad **puede o no cambiar**.
* **`enumerable`**
        - Este atributo especifica si la propiedad es **enumerada** por el bucle **`for/in`** y el método **`Object.keys()`**.
* **`configurable`**
        - Este atributo especifica si una propiedad **puede ser eliminada** (`delete`) y también si los propios **atributos** de la propiedad (`writable`, `enumerable`, `configurable`) **pueden ser cambiados**.

📝 Comportamiento Predeterminado

Las propiedades definidas en object literals o mediante asignación ordinaria a un objeto son, por defecto, **`writable: true`**, **`enumerable: true`** y **`configurable: true`**.

Sin embargo, muchas de las propiedades definidas por la biblioteca estándar de JavaScript (por ejemplo, métodos en `Array.prototype` o `Object.prototype`) **no** lo son.

Los atributos existen para todos los objetos. El punto clave es recordar:

* Asignación simple: Todos son true.
* Object.defineProperty() / Object.create() (segundo arg): Todos son false si se omiten, dándote control para crear propiedades inmutables por defecto.

## 14.2. Object Extensibility

Para determinar si un objeto es extensible, pásalo a **`Object.isExtensible()`**. Para hacer que un objeto **no sea extensible**, pásalo a **`Object.preventExtensions()`**.

Una vez que hayas hecho esto, cualquier intento de **añadir una nueva propiedad** al objeto:

* Lanzará un **`TypeError`** en modo estricto (*strict mode*).
* Simplemente fallará silenciosamente **sin un error** en modo no estricto.

🛑 Importante

Ten en cuenta que hacer un objeto **no extensible** *solo* previene la adición de **nuevas propiedades**. No afecta a la capacidad de modificar, eliminar o cambiar los atributos de las propiedades ya existentes.

El propósito del atributo de **extensibilidad** es poder "bloquear" los objetos en un estado conocido y prevenir la manipulación externa.

El atributo de extensibilidad de los objetos se utiliza a menudo junto con los atributos **`configurable`** y **`writable`** de las propiedades. JavaScript define funciones que facilitan el establecimiento conjunto de estos atributos:

🔒 Control de Bloqueo de Objetos

1. `Object.seal()` (Sellado)

* Funciona como `Object.preventExtensions()`.
* Además de hacer que el objeto sea **no extensible**, también hace que todas las **propiedades propias** del objeto sean **no configurables** (`configurable: false`).
* **Implica que:**

        * No se pueden añadir **nuevas propiedades**.
        * Las propiedades existentes no se pueden **eliminar** ni **configurar** (no se pueden cambiar sus atributos `writable` o `enumerable`).
        * Sin embargo, las propiedades existentes que son **escribibles** (`writable: true`) aún se pueden **establecer** (su valor puede cambiar).
* **Inversión:** No hay forma de "des-sellar" un objeto sellado.
* **Verificación:** Puedes usar **`Object.isSealed()`** para determinar si un objeto está sellado.

### 2. `Object.freeze()` (Congelación)

* Bloquea los objetos de manera aún más estricta.
* Además de hacer que el objeto sea **no extensible** y que sus propiedades sean **no configurables**, también hace que todas las propiedades de datos propias del objeto sean de **solo lectura** (`writable: false`).
* **Implica que:**

        * No se pueden añadir **nuevas propiedades**.
        * Las propiedades existentes no se pueden **eliminar** ni **configurar**.
        * Las propiedades de datos existentes **no pueden cambiar de valor**.
        * (Nota: Si el objeto tiene propiedades *accessor* con métodos *setter*, estas no se ven afectadas y aún pueden invocarse mediante la asignación a la propiedad).
* **Verificación:** Usa **`Object.isFrozen()`** para determinar si un objeto está congelado.

**⚠️ Importante:**

Es fundamental entender que **`Object.seal()`** y **`Object.freeze()`** afectan **solamente al objeto** que se les pasa: no tienen efecto sobre el **prototipo** de ese objeto. Si quieres bloquear completamente un objeto, probablemente también necesites sellar o congelar los objetos en la **cadena de prototipos**.

## 14.3 The prototype Attribute

La propiedad prototype de un object es muy importante ya que es la que define de donde hereda las propiedades y metodos.

    - Objects creados de forma literal heredan de Object.prototype

Pero entonces key y prototype están al mismo nivel?, en Object?

Sí.
**`keys` y `prototype` están al mismo nivel dentro de `Object`.**
Pero cumplen roles completamente distintos.

Míralo así:

        ```js
        Object
        ├── keys           // propiedad estática (función)
        ├── values         // propiedad estática (función)
        ├── entries        // propiedad estática (función)
        ├── assign         // propiedad estática (función)
        └── prototype      // objeto prototipo base para instancias
        ```

📌 **Los dos son propiedades de `Object`**

1. `Object.keys`

* Es una **función estática**.
* Solo vive en `Object`, NO se hereda.
* Solo sirve si la llamas explícitamente:

        ```js
        Object.keys({ a: 1 })   // ['a']
        ```

### 2. `Object.prototype`

* Es un **objeto prototipo**, no una función.
* Es lo que reciben por defecto todos los objetos creados con `{}` o `new Object()`.

        ```js
        const obj = {};
        Object.getPrototypeOf(obj) === Object.prototype; // true
        ```

⭐ Entonces la estructura real es esta:

        ```js
        Object (Function)
        │
        ├─ keys             ← función estática
        ├─ values
        ├─ entries
        ├─ assign
        ├─ ...
        └─ prototype        ← prototipo para objetos creados
        ```

Y luego:

            ```js
            obj = {} 
            → hereda de → Object.prototype 
            → que hereda de → null
            ```

✔ Resumen en una frase

**Sí: `Object.keys` y `Object.prototype` están al mismo nivel dentro de `Object` como propiedades.
La diferencia es que uno es un método estático y el otro es el prototipo que usarán los objetos creados.**

***

Exacto, **`prototype` es el “molde” que recibe un objeto nuevo**, pero **qué prototipo recibe depende de cómo se creó ese objeto**.

Vamos uno por uno porque este concepto es CRUCIAL para entender JavaScript profundo.

✅ **1. Objetos creados con object literal `{}`**

    ```js
    const obj = {};
    ```

El prototipo es SIEMPRE:

    ```js
    Object.getPrototypeOf(obj) === Object.prototype; // true
    ```

**Porque `{}` es azúcar sintáctico de `new Object()`**.

✅ **2. Objetos creados con `new FunciónConstructora()`**

    ```js
    function Persona() {}
    Persona.prototype.saludar = function() {}

    const juan = new Persona();
    ```

El prototipo que recibe es:

    ```js
    Object.getPrototypeOf(juan) === Persona.prototype; // true
    ```

✨ En este caso NO viene de `Object.prototype`, sino de lo que la función constructora tenga en su `.prototype`.

✅ **3. Objetos creados con `Object.create(prototype)`**

Aquí tú eliges el prototipo.

    ```js
    const proto = { hola() {} };
    const obj = Object.create(proto);
    ```

Entonces:

    ```js
    Object.getPrototypeOf(obj) === proto; // true
    ```

Esto es la forma más explícita de controlar herencia.

✅ **4. Objetos devueltos por una *factory function***

Ejemplo:

    ```js
    function createUser(name) {
    return { name };
    }

    const user = createUser("Juan");
    ```

¿Prototipo?

➡️ Devuelven **objetos literales**, así que:

    ```js
    Object.getPrototypeOf(user) === Object.prototype;
    ```

A menos que la función fábrica haga algo distinto:

    ```js
    function createAdmin(name) {
    return Object.create(adminProto, {
        name: { value: name, writable: true }
    });
    }
    ```

Ahí el prototipo sería:

    ```js
    Object.getPrototypeOf(admin) === adminProto;
    ```

🧠 **EN RESUMEN – La regla universal**

✔ Cada vez que creas un objeto, su prototipo viene de *una de estas formas*:

| Cómo se crea el objeto                        | Prototipo asignado       |
| --------------------------------------------- | ------------------------ |
| `{}`                                          | `Object.prototype`       |
| `new F()`                                     | `F.prototype`            |
| `Object.create(x)`                            | `x` (lo defines tú)      |
| `factory()` que devuelve `{}`                 | `Object.prototype`       |
| `factory()` que devuelve `Object.create(...)` | el que el creador decida |

⭐ **La idea clave**

> **El `.prototype` SOLO importa en funciones constructoras (o clases).
> Los objetos NO tienen `.prototype`, tienen `[[Prototype]]` (interno).**

## 14.4. Well-Known Symbols

El tipo **`Symbol`** se añadió a JavaScript en ES6, y una de las razones principales para hacerlo fue **añadir extensiones de forma segura** al lenguaje sin romper la compatibilidad con el código ya implementado en la web.

JavaScript define well-known symbols:
→ Son claves únicas que el motor usa para habilitar comportamientos internos.

Ejemplos más conocidos:

* Symbol.iterator
* Symbol.asyncIterator
* Symbol.toStringTag
* Symbol.hasInstance
* Symbol.toPrimitive
* Symbol.species
* Symbol.isConcatSpreadable
* Symbol.unscopables

Son como interruptores ocultos que activan capacidades internas del lenguaje.

Vimos un ejemplo de esto en el Capítulo 12, donde aprendimos que puedes hacer que una clase sea **iterable** implementando un método cuyo "nombre" es el Símbolo **`Symbol.iterator`**.

**`Symbol.iterator`** es el ejemplo más conocido de los **"Símbolos conocidos"** (*well-known Symbols*). Estos son un conjunto de valores `Symbol` almacenados como propiedades de la función constructora **`Symbol()`** que se utilizan para permitir que el código JavaScript controle ciertos **comportamientos de bajo nivel** de objetos y clases.

Las subsecciones siguientes describen cada uno de estos Símbolos conocidos y explican cómo se pueden usar.

### 14.4.1 Symbol.iterator and Symbol.asyncIterator

Explicado en las secciones finales de Asyncronous Javascipt en el capitulo 13

🔥 1. Symbol.iterator — vuelve un objeto **iterable**

Cuando un objeto tiene:

    ```js
    obj[Symbol.iterator] = function() { ... }
    ```

El objeto pasa a ser iterable y puede usarse en:

* `for...of`
* spread `[...]`
* destructuring
* `Array.from()`

Ejemplo:

    ```js
    const obj = {
    arr: [1, 2, 3],
    [Symbol.iterator]() {
        let i = 0;
        return {
        next: () => ({
            value: this.arr[i],
            done: i++ >= this.arr.length
        })
        };
    }
    };

    for (const n of obj) console.log(n);
    ```

👉 *Esto te convierte el objeto en iterable.*

🔥 2. Symbol.asyncIterator — para usar `for await...of`

Es igual que `Symbol.iterator`, pero las llamadas a `.next()` pueden ser asíncronas.

    ```js
    obj[Symbol.asyncIterator] = async function* () {
    yield 1;
    await new Promise(r => setTimeout(r, 1000));
    yield 2;
    };
    ```

Uso:

    ```js
    for await (const v of obj) console.log(v);
    ```

### 14.4.2 Symbol.hasInstance

🔥 3. Symbol.hasInstance — controla cómo funciona `instanceof`

Puedes personalizar `instanceof`.

    ```js
    class MiClase {
    static [Symbol.hasInstance](instancia) {
        return instancia.esEspecial === true;
    }
    }

    console.log({ esEspecial: true } instanceof MiClase); // true
    ```

### 14.4.3 Symbol.toStringTag

🔥 4. Symbol.toStringTag — controla el resultado de `Object.prototype.toString`

Solo sirve cuando haces:

    ```js
    Object.prototype.toString.call(obj)
    ```

Ejemplo:

    ```js
    const obj = {
    [Symbol.toStringTag]: "MiObjeto"
    };

    console.log(Object.prototype.toString.call(obj));
    // → "[object MiObjeto]"
    ```

### 14.4.4 Symbol.species

Vamos a hacerlo **súper claro** porque `Symbol.species` es uno de los Symbols menos conocidos pero más útiles cuando trabajas con **clases que extienden otras clases**, especialmente `Array`, `Map`, `Set`, `Promise`, etc.

🧬 ¿Qué es `Symbol.species`?

Es un *getter estático* que define **qué constructor debe usarse** cuando un método interno crea un *nuevo objeto derivado*.

Ejemplos de métodos que crean nuevos objetos:

* `array.map()`
* `array.filter()`
* `array.slice()`
* `promise.then()`
* `promise.catch()`

Normalmente, si extiendes una clase, esos métodos intentan crear objetos **de tu clase hija**, no de la clase padre.

`Symbol.species` permite **controlar** qué constructor debe usarse en esos casos.

👀 Ejemplo sencillo sin `Symbol.species`

    ```js
    class Lista extends Array {}

    const l = new Lista(1, 2, 3);

    const resultado = l.map(x => x * 2);

    console.log(resultado instanceof Lista); // true ❗
    ```

¿Por qué?

Porque `Array.prototype.map()` dice:

> Crear un nuevo array usando `new this.constructor[...]`.

Y `this.constructor` es `Lista`.

Es decir, **`.map()` devuelve un `Lista`, no un `Array`**.

🚦 ¿Por qué puede ser un problema?

Porque a veces no quieres que tus métodos devuelvan tu clase personalizada.
Ejemplo:

* Quieres que tu clase agregue funcionalidades nuevas,
* pero que los métodos como `.map()` devuelvan un **Array normal**.

O lo contrario:

* Extiendes `Promise`,
* pero quieres que `.then()` devuelva una `Promise` normal.

🔧 Solución: usar `Symbol.species`

Puedes definirlo así:

    ```js
    class Lista extends Array {
    static get [Symbol.species]() {
        return Array;
    }
    }
    ```

Ahora prueba:

    ```js
    const l = new Lista(1, 2, 3);

    const resultado = l.map(x => x * 2);

    console.log(resultado instanceof Lista); // false
    console.log(resultado instanceof Array); // true
    ```

✔️ Ahora `.map()` vuelve a devolver un **Array normal**

Tu clase “Lista” ya no se propaga en las cadenas de métodos.

🧠 ¿Qué significa eso en palabras simples?

* **Symbol.species = constructor a usar para objetos derivados.**
* Dice internamente:
  *“Cuando crees una copia o derivado de mí, usa ese constructor, no el mío.”*

⚡ Caso real: Promises

JavaScript usa esto internamente para que las subclases de Promise *no rompan la cadena*.

Mira este ejemplo:

    ```js
    class P extends Promise {}

    const p = new P(resolve => resolve(123));

    const res = p.then(x => x);

    console.log(res instanceof P);      // false
    console.log(res instanceof Promise); // true
    ```

¿Por qué?

Porque en `Promise`:

    ```js
    static get [Symbol.species]() { return this; }
    ```

Pero internamente `then()` usa:

    ```js
    new this.constructor[Symbol.species](...)
    ```

Y para las subclases, la spec impone que sea `Promise`, no `P`.

⚙️ ¿Dónde usarías tú `Symbol.species`?

✔️ Cuando crees clases que extienden estructuras de datos (`Array`, `Map`, `Set`)
✔️ Cuando quieras evitar que métodos derivados devuelvan tu clase personalizada
✔️ Para mantener coherencia en librerías funcionales
✔️ Cuando implementas colecciones custom

🎯 Resumen ultrapráctico

`Symbol.species`:

* Es un getter estático
* Retorna un constructor
* Ese constructor se usa para métodos que crean nuevos objetos
* Permite controlar si `.map()`, `.filter()`, `.slice()`, `.then()` etc.
  devuelven tu clase o la clase base.

Si quieres, te puedo mostrar:

✅ cómo se implementa en `Map` y `Set`
✅ cómo afecta a tus propias clases con métodos custom
✅ un ejemplo visual paso a paso del flujo interno de `map()` usando `Symbol.species`

### 14.4.5 Symbol.isConcatSpreadable

🔥 Symbol.isConcatSpreadable — controla si un objeto se expande en `concat`

    ```js
    let arr = [1, 2];
    let obj = { 0: 3, 1: 4, length: 2, [Symbol.isConcatSpreadable]: true };

    console.log(arr.concat(obj)); // [1, 2, 3, 4]
    ```

Si pones `false`, no se expande.

### 14.4.6 Pattern-Matching Symbols

🎭 ¿Qué son los *Pattern-Matching Symbols*?

Son **Symbols especiales** que permiten que TÚ definas cómo un objeto debe comportarse cuando se usa en:

✔️ `instanceof`

✔️ `RegExp.match()` / `String.prototype.match()`
✔️ `RegExp.search()` / `String.prototype.search()`
✔️ `RegExp.replace()` / `String.prototype.replace()`
✔️ `RegExp.split()` / `String.prototype.split()`
✔️ En general: *acciones que dependen de patrones y matching*

Estos símbolos permiten “inyectar” comportamiento personalizado en lugar de usar solo *expresiones regulares*.

🔥 Lista de Pattern-Matching Symbols

Hay **cuatro** principales:

1. `Symbol.match`

    Define cómo debe comportarse un objeto cuando se usa con `str.match()`.

2. `Symbol.replace`

    Define qué ocurre cuando se usa en `str.replace()`.

3. `Symbol.search`

    Define cómo se comporta en `str.search()`.

4. `Symbol.split`

    Define cómo dividir cadenas usando un objeto personalizado.

🎯 ¿Por qué existen?

Porque antes de estos Symbols, **solo las RegExp podían ser usadas en esos métodos**.

Ahora, puedes usar cualquier objeto mientras implemente estos Symbols.

🧠 Explicado en palabras simples

* **Symbol.match**
  → “Si alguien hace `'hola'.match(obj)`, ejecuta este método.”

* **Symbol.replace**
  → “Si alguien hace `'hola'.replace(obj, fn)`, ejecuta esto.”

* **Symbol.search**
  → “Si buscan dentro de un string usando este objeto, usa este método.”

* **Symbol.split**
  → “Si dividen un string usando este objeto, usa este método.”

📦 Ejemplo simple de cada uno (todos compactos y claros)

1. `Symbol.match`

        ```js
        const matcher = {
        [Symbol.match](str) {
            return str.includes("hola") ? ["hola"] : null;
        }
        };

        console.log("hola mundo".match(matcher)); // ["hola"]
        ```

2. `Symbol.replace`

        ```js
        const replacer = {
        [Symbol.replace](str, value) {
            return str.toUpperCase() + value;
        }
        };

        console.log("hola".replace(replacer, "!")); // "HOLA!"
        ```

3. `Symbol.search`

        ```js
        const buscador = {
        [Symbol.search](str) {
            return str.indexOf("xyz");
        }
        };

        console.log("abcxyz123".search(buscador)); // 3
        ```

4. `Symbol.split`

        ```js
        const divisor = {
        [Symbol.split](str) {
            return str.split("").reverse(); 
        }
        };

        console.log("hola".split(divisor)); // ["a", "l", "o", "h"]
        ```

🧬 Resumen final

Los **Pattern-Matching Symbols** permiten:

* Sobrescribir el comportamiento de strings cuando usan `.match()`, `.replace()`, `.search()`, `.split()`.
* Usar objetos normales como si fueran RegExps.
* Crear comportamientos totalmente personalizados para matching.

Son ideales cuando necesitas:

* Parsers
* Tokenizers
* Validadores
* Reglas dinámicas de procesamiento de strings
* Sistemas estilo lenguaje (plantillas, DSL, comandos, etc.)

### 14.4.7 Symbol.toPrimitive

Symbol.toPrimitive — controla conversión a número o string

Te permite decidir qué pasa cuando el objeto se convierte a:

* string
* number
* default

Ejemplo:

    ```js
    const obj = {
    x: 10,
    [Symbol.toPrimitive](hint) {
        if (hint === "number") return this.x;
        if (hint === "string") return `Valor=${this.x}`;
        return this.x;
    }
    };

    console.log(+obj);    // 10
    console.log(`${obj}`); // "Valor=10"
    ```

### 14.4.8 Symbol.unscopables

🔥 Symbol.unscopables — evita que ciertas props se expongan en `with`

Es oscuro pero real.

    ```js
    const obj = {
    hidden: 1,
    [Symbol.unscopables]: {
        hidden: true
    }
    };
    ```

## 14.5 Template Tags

🏷️ ¿Qué son los *Template Tags*?

Son una característica avanzada de JavaScript que te permite **interceptar** un template literal antes de que JS lo convierta en un string.

En otras palabras:

> Un **tag** es una función que recibe el contenido de un template literal **desglosado**, antes de que se arme el string final.

Esto te permite:

* modificar cómo se construye el string,
* sanitizar entradas,
* hacer internacionalización,
* crear DSLs (mini lenguajes),
* procesar interpolaciones de forma personalizada.

📌 ¿Cómo se usan?

    ```js
    tag`Hola ${nombre}, tienes ${edad} años`
    ```

Aquí:

* `tag` → es una **función**
* `` `Hola ${nombre}, tienes ${edad} años` `` → es el **template literal**
* Pero NO se produce un string automático.
  *La función `tag` controla todo.*

🧠 ¿Cómo funciona internamente?

Un template tag siempre recibe **dos tipos de argumentos**:

1. **Un array de strings estáticos**, llamadas `strings`.
2. **Los valores interpolados**, llamados `values`.

Ejemplo:

    ```js
    function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    }

    let nombre = "Juan";
    let edad = 30;

    tag`Hola ${nombre}, tienes ${edad} años`;
    ```

Salida:

    ```js
    [ "Hola ", ", tienes ", " años" ]
    [ "Juan", 30 ]
    ```

JS separa el template así:

    ```js
    "Hola "         --> strings[0]
    "${nombre}"     --> values[0]
    ", tienes "     --> strings[1]
    "${edad}"       --> values[1]
    " años"         --> strings[2]
    ```

🔥 Ejemplo básico: recompone el string

    ```js
    function tag(strings, ...values) {
    return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ""), "");
    }

    let r = tag`Hola ${"Ana"}, tienes ${20} años`;
    console.log(r); // "Hola Ana, tienes 20 años"
    ```

🛡️ Caso real: Sanitización contra XSS

    ```js
    function safeHTML(strings, ...values) {
    return strings.reduce((result, s, i) => {
        let val = values[i];
        if (typeof val === "string") {
        val = val
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        return result + s + (val ?? "");
    }, "");
    }

    let userInput = "<script>alert('hack')</script>";
    console.log(safeHTML`Hola ${userInput}!`);
    ```

Salida segura:

    ```js
    Hola &lt;script&gt;alert('hack')&lt;/script&gt;!
    ```

🎨 Uso avanzado: crear mini lenguajes (DSLs)

    ```js
    function sql(strings, ...values) {
    return {
        query: strings.join("?"),
        params: values
    };
    }

    let name = "Ana";
    let minAge = 18;

    console.log(sql`SELECT * FROM users WHERE name = ${name} AND age > ${minAge}`);
    ```

Salida:

    ```js
    {
    query: "SELECT * FROM users WHERE name = ? AND age > ?",
    params: ["Ana", 18]
    }
    ```

Ideal para sistemas ORM.

📦 Uso avanzado: Tagged templates para internacionalización (i18n)

    ```js
    function i18n(strings, ...values) {
    // devolver traducción dinámica aquí...
    }
    ```

📌 Resumen final

**Tagged Template Literals**:

* Permiten interceptar y procesar templates.
* Son funciones especiales que reciben:
  ✔️ Lista de strings
  ✔️ Valores interpolados
* Permiten:

  * Sanitizar HTML
  * Crear lenguajes personalizados
  * Manipulación avanzada de cadenas
  * Internacionalización
  * Formato dinámico

Son una herramienta superpoderosa para crear APIs elegantes basadas en strings.

## 14.6 The Reflect API

🔍 ¿Qué es la Reflect API?

`Reflect` es un **objeto estático** introducido en ES6 cuya misión es:

> Reunir en un solo lugar las operaciones de bajo nivel sobre objetos
> (las mismas que antes estaban repartidas en Object y en operadores del lenguaje).

En pocas palabras:

* Da una forma **estándar y consistente** de hacer operaciones internas del lenguaje.
* Hace que esas operaciones se comporten como **funciones puras** (sin sintaxis especial).
* Permite trabajar junto con **Proxies**, ya que sus métodos coinciden con los *traps* del proxy.

✨ ¿Qué problema vino a resolver?

Antes de `Reflect`, JavaScript tenía muchas operaciones que:

* estaban mal distribuidas (unas en `Object`, otras eran operadores),
* tenían comportamiento inconsistente (algunas lanzan errores, otras devuelven booleanos),
* no eran interceptables por Proxies.

`Reflect` unifica y estandariza estas operaciones.

📦 ¿Qué tipo de cosas hace Reflect?

Todo lo que podrías hacer con:

* asignación de propiedades (`obj.prop = x`)
* lectura de propiedades (`obj[prop]`)
* `delete obj.prop`
* `Object.defineProperty`
* `Object.getOwnPropertyDescriptor`
* `Object.setPrototypeOf`
* llamada de funciones (`func.apply`)
* instanciación con `new`

…pero en forma de métodos.

🧠 Idea clave:

> **Reflect convierte operaciones del lenguaje en funciones.**

🧰 Métodos principales (explicación simple)

✔️ **Reflect.get(obj, prop[, receiver])**

Como `obj[prop]`, pero en forma de función.

✔️ **Reflect.set(obj, prop, value[, receiver])**

Como `obj[prop] = value`.

Retorna **true/false**, nunca lanza error.

✔️ **Reflect.has(obj, prop)**

Equivalente a `prop in obj`.

✔️ **Reflect.deleteProperty(obj, prop)**

Equivalente a `delete obj[prop]`.

✔️ **Reflect.ownKeys(obj)**

Retorna todas las keys:

* strings
* symbols
* incluyendo no-enumerables
* *sin* consultar la cadena de prototipos.

Es como `Object.getOwnPropertyNames()` + `Object.getOwnPropertySymbols()`.

✔️ **Reflect.getOwnPropertyDescriptor(obj, prop)**

Como `Object.getOwnPropertyDescriptor`.

✔️ **Reflect.defineProperty(obj, prop, descriptor)**

Como `Object.defineProperty`, pero devuelve `true/false` sin lanzar excepción.

✔️ **Reflect.getPrototypeOf(obj)**

✔️ **Reflect.setPrototypeOf(obj, proto)**

Idénticos a los de `Object`.

✔️ **Reflect.apply(fn, thisArg, argsArray)**

Equivalente a `fn.apply(thisArg, argsArray)` pero más seguro.

✔️ **Reflect.construct(fn, argsArray[, newTarget])**

Hace lo mismo que `new fn(...args)`, pero como función.
Permite crear instancias programáticamente.

🧪 Ejemplos rápidos

⭐ Elegante reemplazo de `delete`

    ```js
    Reflect.deleteProperty(obj, "x");
    ```

⭐ Crear un objeto con new, pero sin usar new

    ```js
    let inst = Reflect.construct(Date, []);
    ```

⭐ Leer propiedades con Reflect

    ```js
    Reflect.get(obj, "nombre");
    ```

⭐ Evitar errores que sí lanza defineProperty

    ```js
    if (!Reflect.defineProperty(obj, "x", { value: 1 })) {
    console.log("No se pudo definir");
    }
    ```

🤝 Reflect + Proxy (lo más importante)

Cada *trap* de un `Proxy` tiene un método equivalente en `Reflect`.

Ejemplo:

    ```js
    let obj = { x: 1 };

    let prox = new Proxy(obj, {
    get(target, prop, receiver) {
        console.log("Leyendo", prop);
        return Reflect.get(target, prop, receiver);
    }
    });
    ```

Esto mantiene el comportamiento estándar mientras interceptas la operación.

📌 Resumen final

La **Reflect API**:

* expone operaciones básicas del lenguaje como funciones,
* hace el comportamiento más consistente,
* mejora la interacción con Proxies,
* evita errores que antes se lanzaban,
* permite hacer metaprogramación más clara.

Es la capa “meta” de JS para manipular objetos y comportamiento interno del lenguaje.

## 14.7. Proxy Objects

La clase **`Proxy`**, disponible en ES6 y versiones posteriores, es la característica de metaprogramación **más poderosa** de JavaScript.

Nos permite escribir código que **altera el comportamiento fundamental** de los objetos JavaScript.

-🛡️ Sobre `Proxy`

`Proxy` esencialmente actúa como un "interceptador" o "intermediario" para un objeto. Permite definir *handlers* (manejadores) que pueden interceptar operaciones fundamentales realizadas en el objeto, como:

* Obtener el valor de una propiedad (`get`).
* Establecer el valor de una propiedad (`set`).
* Eliminar una propiedad (`deleteProperty`).
* Llamar a una función (`apply`).
* Usar el operador `new` (`construct`).

### 14.7.1 Proxy Invariants
