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

At its core, TypeScript’s type system works by:
• Reading in your code and understanding all the types and values in existence
• For each value, seeing what type its initial declaration indicates it may contain
• For each value, seeing all the ways it’s used later on in code
• Complaining to the user if a value’s usage doesn’t match with its type

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

This is allowed:

```ts
let firstName = "Carole";
firstName = "Joan";
```

This is NOT allowed:

```ts
let lastName = "King";
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.
```

La verificación de TypeScript sobre si un valor puede ser proporcionado a una llamada de función o variable se llama asignabilidad "assignability": si ese valor es asignable al tipo esperado al que se pasa. Este será un término importante en capítulos posteriores mientras comparamos objetos más complejos.

#### Type Annotations

TypeScript proporciona una sintaxis para declarar el tipo de una variable sin tener que asignarle un valor inicial, llamada "Type Annotation". Una anotación de tipo se coloca después del nombre de una variable e incluye dos puntos seguidos del nombre de un tipo.

**Syntax:**

```ts
let rocker: string;
rocker = "Joan Jett";
```

**Syntax:**

```ts
let myNumber: number = 10;
let myString: string = "Hello, TypeScript!";
```

Functions can also have type annotations for their parameters and return types:

```ts
function add(x: number, y: number): number {
  return x + y;
}
```

#### Type Shapes

TypeScript also knows what member properties should exist on objects.

```ts
let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};
cher.middleName;
// ~~~~~~~~~~
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.
```

#### Modules

Module
A file with a top-level export or import

Script
Any file that is not a module

```ts
// a.ts
const shared = "Cher";
// ~~~~~~
// Cannot redeclare block-scoped variable 'shared'.
// b.ts
const shared = "Cher";
// ~~~~~~
// Cannot redeclare block-scoped variable 'shared'.
```

If you see these “Cannot redeclare…” errors in a TypeScript file, it may be because you have yet to add an export or import statement to the file.

If you need a file to be a module without an export or import statement, you can add an export {}; somewhere in the file to force it to be a module:

```ts
// a.ts and b.ts
const shared = "Cher"; // Ok
export {};
```

## Unions and literals

Two key concepts that TypeScript works with to make inferences on top of those values:

Unions:
Expanding a value’s allowed type to be two or more possible types.

Narrowing:
Reducing a value’s allowed type to not be one or more possible types.

### Union Types

Observando este codigo se puede apreciar que la variable puede tomar mas de un tipo de data type de acuerdo a las condicones dadas.

```ts
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
```

In this example, thinker starts off null but is known to potentially contain a string instead.

**Syntax:**

```ts
let thinker: string | null = null;
if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // Ok
}
```

#### Union Properties

When a value is known to be a union type, TypeScript will only allow you to access member properties that exist on all possible types in the union. It will give you a type-checking error if you try to access a type that doesn’t exist on all possible types.

Osea que solo va a aceptar propiedades si estan disponibles en ambos tipo de data type que pueda terminar siendo la condicion.

```ts
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;
physicist.toString(); // Ok
physicist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
physicist.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
```

### Narrowing types

Ahora existen los type guards que permite definir un data type mas especifico para permitir utilizar metodos que solo se encuentran en un solo tipo de data type.

de la siguiente forma es que se puede narrownizar una variable

```ts
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
admiral.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.
```

Aqui se puede observar como cuando no hay condicion sino que se asigna directamente el type anotation, pues typescript narrowniza automaticamente la variable.

```ts
let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase(); // Ok: string
inventor.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.
```

#### Conditional Checks

Utilizando un if se puede narrownizar una variable que tenga condiciones

```ts
// Type of scientist: number | string
let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (scientist === "Rosalind Franklin") {
  // Type of scientist: string
  scientist.toUpperCase(); // Ok
}
// Type of scientist: number | string
scientist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
```

Aqui observamos que con el if se puede utilizar un metodo que no esta disponible en una variable con varios data types

#### Typeof Checks

Se puede utilizar el typeof check para narrownizar las variables

```ts
let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof researcher === "string") {
  researcher.toUpperCase(); // Ok: string
}
```

Logical negations from ! and else statements work as well:

```ts
typeof researcher === "string"
  ? researcher.toUpperCase() // Ok: string
  : researcher.toFixed(); // Ok: number
```

### Literal Types

more specific versions of primitive types, osea que una constante que tiene el valor "valor" pues va a ser ese data type y ya para typescript y se le pueden adicionar otros strings como su valor pero solo los que uno indique para que typescritp entienda.

Por ejemplo:

• number: 0 | 1 | 2 | ... | 0.1 | 0.2 | ...
• string: "" | "a" | "b" | "c" | ... | "aa" | "ab" | "ac" | ...

Por supuesto pueden haber combinaciones de union y literals en las delcaraciones de types anotations en typescript:

```ts
let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"'
```

### Truthiness Narrowing

```ts
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
if (geneticist) {
  geneticist.toUpperCase(); // Ok: string
}
geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.
```

Logical operators that perform truthiness checking work as well, namely && and ?.:

```ts
geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined
```

### Type Aliases

Para evitar tener que hacer type anotations a muchas variables que tienen el mismo tipo de de types, se puede asiganr esto a una sola variable y ser reutilizada:

```ts
type RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;
```

OJO, el type no corresponde a javascritp vanilla, osea que para javascript RawData no existe!.

#### Combining Type Aliases

```ts
type Id = number | string;
// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null;
```

## Strict Null Checking

Resulta que el NULL da muchos mas problemas de los que resuelve entonces si esta opcion se desactiva en la configuracion de typescript, se agregaria automaticamente los types null y undefined a todas las definiciones de typos en las variables.

Si se deja activo, se produce este tipo de proteccion de data types:

```ts
let nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;
nameMaybe.toLowerCase();
// Potential runtime error: Cannot read property 'toLowerCase' of undefined.
```

Without strict null checking enabled, it’s much harder to know whether your code is safe from errors due to accidentally null or undefined values.

## Objects

How to describe complex object shapes and how TypeScript checks their assignability.

### Object Types

Una ventaja de typescript es que suelta un error si se intenta accesar a un object con keys o methods que no existen dentor del object definido:

```ts
const poet = {
  born: 1935,
  name: "Mary Oliver",
};
poet["born"]; // Type: number
poet.name; // Type: string
poet.end;
// ~~~
// Error: Property 'end' does not exist on
// type '{ born: number; name: string; }'.
```

### Declaring Object Types

Sin embargo tambien se pueden definir dentro de los objects, los type anotations por cada key o method que contenga el object.

```ts
let poetLater: {
  born: number;
  name: string;
};
// Ok
poetLater = {
  born: 1935,
  name: "Mary Oliver",
};
poetLater = "Sappho";
// Error: Type 'string' is not assignable to
// type '{ born: number; name: string; }'
```

#### Aliased Object Types

Al igual que con las variables tambien se pueden definir unos types por adelantado y re-utilizarlos a lo largo de la creacion de objects

```ts
type Poet = {
  born: number;
  name: string;
};
let poetLater: Poet;
// Ok
poetLater = {
  born: 1935,
  name: "Sara Teasdale",
};
poetLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'Poet'.
```

NO ES LO MISMO QUE LAS INTERFACES, pero son bastante parecidas y lo mas estandar es utilizar interfaces

#### Structural Typing

Esta forma estructural dicta que si la key de un object fue declarada ya sea por medio de un aliases o una interfaz, estas pueden ser utilizadas en otros objects:

```ts
type WithFirstName = {
  firstName: string;
};
type WithLastName = {
  lastName: string;
};
const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;
```

Ojo, esto solo sirve con los type internamente en typescript, javascript no deja hacer esta gracia.

##### Usage Checking

Tener en cuenta que cuando se crea un type para un object, al momento de utilizar las keys para crear un object, se deben de utilizar todas las keys definidas en el type del object de lo contrario bota error

```ts
type FirstAndLastNames = {
  first: string;
  last: string;
};

// Ok
const hasBoth: FirstAndLastNames = {
  first: "Sarojini",
  last: "Naidu",
};
const hasOnlyOne: FirstAndLastNames = {
  first: "Sappho",
};
// Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.
```

Por ejemplo esto daria un error

```ts
type TimeRange = {
  start: Date;
};
const hasStartString: TimeRange = {
  start: "1879-02-13",
  // Error: Type 'string' is not assignable to type 'Date'.
};
```

##### Excess Property Checking

Typescript arrojaria error si se utilizan mas proiedades que las descritas en el aliases (osea un exceso de propiedades):

```ts
type Poet = {
  born: number;
  name: string;
};
// Ok: all fields match what's expected in Poet
const poetMatch: Poet = {
  born: 1928,
  name: "Maya Angelou",
};

const extraProperty: Poet = {
  activity: "walking",
  born: 1935,
  name: "Mary Oliver",
};
// Error: Type '{ activity: string; born: number; name: string; }'
// is not assignable to type 'Poet'.
// Object literal may only specify known properties,
// and 'activity' does not exist in type 'Poet'.
```

#### Nested Object Types

Como los objects se pueden animar, tambien se puede y se debe hacer con los type anotations:

```ts
type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// Ok
const poemMatch: Poem = {
  author: {
    firstName: "Sylvia",
    lastName: "Plath",
  },
  name: "Lady Lazarus",
};
const poemMismatch: Poem = {
  author: {
    name: "Sylvia Plath",
  },
  // Error: Type '{ name: string; }' is not assignable
  // to type '{ firstName: string; lastName: string; }'.
  // Object literal may only specify known properties, and 'name'
  // does not exist in type '{ firstName: string; lastName: string; }'.
  name: "Tulips",
};
```

**Nota:** Tambien se puede utilizar los aliases afuera del nest para hacer un mejor chekeo de los types, es mas es RECOMENDABLE HACER ESTO:

```ts
type Author = {
 firstName: string;
 lastName: string;
};
type Poem = {
 author: Author;
 name: string;
};
const poemMismatch: Poem = {
 author: {
 name: "Sylvia Plath",
 },
 // Error: Type '{ name: string; }' is not assignable to type 'Author'.
 // Object literal may only specify known properties,
 // and 'name' does not exist in type 'Author'.
 name: "Tulips",
};
```

voy en la pagina 49
## Commands

Recordar que para trabajar localmente se debe de instalar las dependencias con --save-dev y utiliza el comando npm para consultar versiones y el comando npx para ejecutar comandos.

ts-node y DENO: ejecuta un archivo ts sin necesidad de compilarlo (aunque under the hood stils hace compilacion)
TSC: Compila el archivo ts en vanilla js
TSC --help: muestra todos los comandos para el compilador de typescript
TSC --init: Crea un archivo tsconfig.json para la configuracino del compilador de typescript
Interface: Define la interface de un object
as: Es para darle la referencia a un object que utilice esa interfas especifica
":" en parametros de las funcones: Lo que permite es añadir type chekcers a los parametros de las funciones
