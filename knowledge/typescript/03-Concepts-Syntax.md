# Concepts and Syntax

## Whats a type?

Un "type" es una descripción de cómo podría ser la forma de un valor de JavaScript. Por forma "shape" me refiero a qué propiedades y métodos existen en un valor, y cómo lo describiría el operador typeof integrado.

The most basic types in TypeScript correspond to the seven basic kinds of primitives
in JavaScript:

• null
• undefined
• boolean // true or false
• string // "", "Hi!", "abc123",
• number // 0, 2.1, -4, …
• bigint // 0n, 2n, -4n, …
• symbol // Symbol(), Symbol("hi")

## Whats a type system?

A type system is the set of rules for how a programming language understands what
types the constructs in a program may have.

EL sistema de types posee dos importantes distinciones: 

### Syntax errors

La priera es la deteccion de errores en la sintaxis, por ejemplo:

```ts
let let wat;
// ~~~
// Error: ',' expected.
```

Se puede observar un error en la sintaxis que va a dar un error al momento de que typescript intente convertir el codigo en puro javascript.

### Type errors

Type errors occur when your syntax is valid but the TypeScript type checker has
detected an error with the program’s types.

## Commands

Recordar que para trabajar localmente se debe de instalar las dependencias con --save-dev y utiliza el comando npm para consultar versiones y el comando npx para ejecutar comandos.

ts-node y DENO: ejecuta un archivo ts sin necesidad de compilarlo (aunque under the hood stils hace compilacion)
TSC: Compila el archivo ts en vanilla js
TSC --help: muestra todos los comandos para el compilador de typescript
TSC --init: Crea un archivo tsconfig.json para la configuracino del compilador de typescript
Interface: Define la interface de un object
as: Es para darle la referencia a un object que utilice esa interfas especifica
":" en parametros de las funcones: Lo que permite es añadir type chekcers a los parametros de las funciones
