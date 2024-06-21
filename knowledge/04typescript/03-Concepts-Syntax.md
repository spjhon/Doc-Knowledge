# Concepts and Syntax

## Whats a type?

**Un "type" es una descripción de cómo podría ser la forma de un valor de JavaScript. Por forma "shape" me refiero a qué propiedades y métodos existen en un valor, y cómo lo describiría el operador typeof integrado.**

Osea, cuando se le adjudica un type a un valor, se le abren las puertas a los metodos y propiedades embeded en javascript, entonces una ayuda de typescript es cuando reconoce estos types y el programador por error intente ejecutar propiedades o metodos que no corresponden, por ejemplo un toString() a un number o como el typeof operator muestra resultados.

Cuando asignas un tipo a un valor en TypeScript, estás estableciendo expectativas sobre las propiedades y métodos que ese valor debería tener.

The most basic types in TypeScript correspond to the seven basic kinds of primitives
in JavaScript:

- null
- undefined
- boolean // true or false
- string // "", "Hi!", "abc123",
- number // 0, 2.1, -4, …
- bigint // 0n, 2n, -4n, …
- symbol // Symbol(), Symbol("hi")

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

La primera es la deteccion de errores en la sintaxis, por ejemplo:

```typescript
let let wat;
// ~~~
// Error: ',' expected.
```

Se puede observar un error en la sintaxis que va a dar un error al momento de que typescript intente convertir el codigo en puro javascript al compilar.

### Type errors

Type errors occur when your syntax is valid but the TypeScript type checker has
detected an error with the program’s types.

This is allowed:

```typescript
let firstName = "Carole";
firstName = "Joan";
```

This is NOT allowed:

```typescript
let lastName = "King";
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.
```

La verificación de TypeScript sobre si un valor puede ser proporcionado a una llamada de función o variable se llama asignabilidad "assignability": si ese valor es asignable al tipo esperado al que se pasa. Este será un término importante en capítulos posteriores mientras comparamos objetos más complejos.

```typescript
let lastName = "King";
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.
```

#### Type Annotations

TypeScript proporciona una sintaxis para declarar el tipo de una variable sin tener que asignarle un valor inicial, llamada "Type Annotation". Una anotación de tipo se coloca después del nombre de una variable e incluye dos puntos seguidos del nombre de un tipo.

En el siguiente ejemplo se puede observar como una variable puede evolucionar y cambiar su type y typescript lo va a permitir

```typescript
let rocker; // Type: any

rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok

rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok

rocker.toUpperCase();
// ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.
```

Aunque es permitido, lo mejor es desde un principio decirle a typescript que type la variable es al ser creada esto es un "type annotation" donde explicitamente se le dice que type es la variable.

```typescript
let rocker: string;
rocker = "Joan Jett";
```

```typescript
let myNumber: number = 10;
let myString: string = "Hello, TypeScript!";
```

Functions can also have type annotations for their parameters and return types:

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

#### Type Shapes

TypeScript also knows what member properties should exist on objects. Estos shapes junto con javascript ayudan a darle forma a objects o functions para que typescript pegue el grito cuando alguna propiedad que no existe en un object intente ser invocada.

```typescript
let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};
cher.middleName;
// ~~~~~~~~~~
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.
// Como se puede observar typescript tambien pega el grito al analizar object y sus keys
```

#### Modules

Module
A file with a top-level export or import

Script
Any file that is not a module

```typescript
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

```typescript
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

La idea de estos dos conceptos es permitir a typescript inferir los types en variables o funciones complejas.

### Union Types

Observando este codigo se puede apreciar que la variable puede tomar mas de un tipo de data type de acuerdo a las condicones dadas.

```typescript
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
//En este codigo, typescript esta infiriendo los posibles data types que pueden salir, no es algo explicito
```

In this example, thinker starts off null but is known to potentially contain a string instead.

Ahora vamos a **DECLARAR** las UNION TYPES:

```typescript
//De esta forma se le esta diciendo que la variable thinker puede tener uno de dos valores e inicialmente es null
//Esto es lo que se llama una declaracion explicita
let thinker: string | null = null;
if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // Ok
}
```

#### Union Properties

When a value is known to be a union type, TypeScript will only allow you to access member properties that exist on all possible types in the union. It will give you a type-checking error if you try to access a type that doesn’t exist on **all possible types.**

Osea que solo va a aceptar propiedades si estan disponibles en **ambos** tipo de data type que pueda terminar siendo la condicion.

```typescript
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

Ahora si se requiere accesar a una propiedad que solo esta en uno de los data type, pues toca narrownizar la variable.

### Narrowing types

Ahora existen los type guards que permite definir un data type mas especifico para permitir utilizar metodos que solo se encuentran en un solo tipo de data type. Esto se aplica a una variable que haya sido defined, declared, or previously inferred.

Un **type guard** es una forma de utilizar logica para narrownizar una variable.

#### Assignment Narrowing

de la siguiente forma es que se puede narrownizar una variable.

```typescript
//Originalmente se le asigna un number y un string pero luego se le deja una sola asignacion, typescript entiende que en cualquier
//momento se le puede reducir o narrownizar la varialbe a una mas especifica con el fin de poder aplicar propiedades especificas
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
admiral.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.
```

Aqui se puede observar como cuando no hay condicion sino que se asigna directamente el type anotation, pues typescript narrowniza automaticamente la variable.

```typescript
let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase(); // Ok: string
inventor.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.
```

#### Conditional Checks

Utilizando un if se puede narrownizar una variable que tenga condiciones

```typescript
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

```typescript
let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof researcher === "string") {
  researcher.toUpperCase(); // Ok: string
}
```

Logical negations from ! and else statements work as well:

```typescript
typeof researcher === "string"
  ? researcher.toUpperCase() // Ok: string
  : researcher.toFixed(); // Ok: number
```

El siguiente es un ejemplo practico de como se puede narrownizar los parametros de una funcion y que typescript sepa que data type es al momento de aplicar diferentes argumentos:

```typescript
// Function to process either a string or a number
function processInput(input: string | number): void {
  if (typeof input === "string") {
    // If input is a string, convert it to uppercase
    console.log(input.toUpperCase());
  } else {
    // If input is a number, double it
    console.log(input * 2);
  }
}

// Testing the function with different types of input
processInput("hello"); // Output: HELLO
processInput(5); // Output: 10
```

El void se explica mas adelante y es una forma de decirle a typescript que la funcion no retorna nada, solo ejecuta el codigo.

### Literal Types

Osea los `const`.

more specific versions of primitive types, osea que una constante que tiene el valor "valor" pues va a ser ese data type y ya para typescript y se le pueden adicionar otros strings como su valor pero solo los que uno indique para que typescritp entienda.

Por ejemplo:

• number: 0 | 1 | 2 | ... | 0.1 | 0.2 | ...
• string: "" | "a" | "b" | "c" | ... | "aa" | "ab" | "ac" | ...

Por supuesto pueden haber combinaciones de union y literals en las delcaraciones de types anotations en typescript:

```typescript
let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"'
```

### Strict Null Checking

Algo importante y es algo que se presenta en otros lenguajes de programacion el que se debe de chekear si hay un potencial null o no ya que el no hacer este chekeo puede implicar error, typescript viene equipado para evitar que esto suceda, aunque se puede desactivar para permitir los valores de null y undefined ser agregados a toda definicon de variables.

Resulta que el NULL da muchos mas problemas de los que resuelve entonces si esta opcion se desactiva en la configuracion de typescript, se agregaria automaticamente los types null y undefined a todas las definiciones de typos en las variables.

Si se deja activo, se produce este tipo de proteccion de data types:

```typescript
let nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;
nameMaybe.toLowerCase();
// Potential runtime error: Cannot read property 'toLowerCase' of undefined.
```

Without strict null checking enabled, it’s much harder to know whether your code is safe from errors due to accidentally null or undefined values.

#### Truthiness Narrowing

Por medio de los operadores logicos && y el truthiness que se maneja en los if, se pueden inferir y narrownizar varios data types, osea que si alguno de sus posibles types es verdadero y el resto es falso, se puede hacer la inferencia y typescript lo va a reconocer, por ejemplo:

```typescript
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
if (geneticist) {
  geneticist.toUpperCase(); // Ok: string
}
geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.
```

Logical operators that perform truthiness checking work as well, namely && and ?.:

```typescript
geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined
```

#### Variables Without Initial Values

**Variables declared without an initial value default to undefined in JavaScript.**, typescript avisa si se intenta utilizar alguna propiedad en una variable sin tipo alguno, por ejemplo:

```typescript
let mathematician: string;
mathematician?.length;
// Error: Variable 'mathematician' is used before being assigned.
mathematician = "Mark Goldberg";
mathematician.length; // Ok
```

**Nota:** The ?. is called the optional chaining operator in TypeScript (as well as in JavaScript), and it's used to access properties or methods of an object when it's possible that the object itself might be null or undefined.

### Type Aliases

Para evitar tener que hacer type anotations a muchas variables que tienen el mismo tipo de de types, se puede asiganr esto a una sola variable y ser reutilizada:

```typescript
type RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;
```

OJO, el type no corresponde a javascritp vanilla, osea que para javascript RawData no existe!.

#### Combining Type Aliases

```typescript
type Id = number | string;
// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null;
```

## Objects

How to describe complex object shapes and how TypeScript checks their assignability.

### Object Types

Cuando se crea un object, se le describe como un object literal o un object shape.

Una ventaja de typescript es que suelta un error si se intenta accesar a un object con keys o methods que no existen dentor del object definido:

```typescript
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

#### Declaring Object Types

Sin embargo tambien se pueden definir dentro de los objects, los type anotations por cada key o method que contenga el object.

```typescript
//Aqui se esta definiendo un object type que luego va a tener valores que concuerden con su data type
let poetLater: {
  born: number,
  name: string,
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

```typescript
type Poet = {
  born: number,
  name: string,
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

NO ES LO MISMO QUE LAS INTERFACES, pero son bastante parecidas y lo mas estandar es utilizar **interfaces**

### Structural Typing

Esta forma estructural dicta que si la key de un object fue declarada ya sea por medio de un aliases o una interfaz, estas pueden ser utilizadas en otros objects:

```typescript
type WithFirstName = {
  firstName: string,
};
type WithLastName = {
  lastName: string,
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

#### Usage Checking

Tener en cuenta que cuando se crea un type para un object, al momento de utilizar las keys para crear un object, se deben de utilizar todas las keys definidas en el type del object de lo contrario bota error

```typescript
type FirstAndLastNames = {
  first: string,
  last: string,
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

Los tipos incompatibles entre ambos no están permitidos tampoco. Por ejemplo esto daria un error:

```typescript
type TimeRange = {
  start: Date,
};
const hasStartString: TimeRange = {
  start: "1879-02-13",
  // Error: Type 'string' is not assignable to type 'Date'.
};
```

#### Excess Property Checking

Typescript arrojaria error si se utilizan mas proiedades que las descritas en el aliases (osea un exceso de propiedades):

```typescript
type Poet = {
  born: number,
  name: string,
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

Como los objects se pueden anidar, tambien se puede y se debe hacer con los type anotations:

```typescript
type Poem = {
  author: {
    firstName: string,
    lastName: string,
  },
  name: string,
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

```typescript
type Author = {
  firstName: string,
  lastName: string,
};

type Poem = {
  author: Author,
  name: string,
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

#### Optional Object types properties

Tambien se puede crear propiedades opcionales en caso que el object que se cree no necesariamente necesite la propiedad en cuestion

```typescript
type Book = {
  author?: string,
  pages: number,
};
// Ok
const ok: Book = {
  author: "Rita Dove",
  pages: 80,
};

const ok2: Book = {
  pages: 80,
};

const missing: Book = {
  author: "Rita Dove",
};
// Error: Property 'pages' is missing in type
// '{ author: string; }' but required in type 'Book'.
```

### Unions of Object Types

#### Inferred Object-Type Unions

Typescript infiere automaicamente si una variable contiene uno de varios shapes de obejcts en su interior.
The type system infers the possible shapes of an object based on its usage.
This poem value always has a name property of type string, and may or may not have pages and rhymes properties:

```typescript
const poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
// Type:
// {
// name: string;
// pages: number;
// rhymes?: undefined;
// }
// |
// {
// name: string;
// pages?: undefined;
// rhymes: boolean;
// }
poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined
```

Depending on a random condition (Math.random() > 0.5), poem is assigned one of two possible shapes of objects:

- If the condition is true, poem will have the shape `{ name: "The Double Image", pages: 7 }`.
- If the condition is false, poem will have the shape `{ name: "Her Kind", rhymes: true }`.

The TypeScript type system infers that poem can be of one of these two shapes, creating a union type for poem. The inferred type for poem is a union of these two shapes.

Aquí, la variable poem puede ser de dos tipos de objetos diferentes, dependiendo del resultado de la expresión Math.random() > 0.5. Si esa expresión es verdadera, poem será un objeto con propiedades name y pages, y si es falsa, poem será un objeto con propiedades name y rhymes.

Además, dado que cada objeto puede tener diferentes propiedades, TypeScript también considera estas diferencias. Si intentas acceder a una propiedad que no está presente en ambos tipos de objetos, TypeScript la considerará como undefined. Por lo tanto, si intentas acceder a las propiedades pages o rhymes de poem, TypeScript te indicará que pueden ser del tipo respectivo o undefined.

#### Explicit Object-Type Unions

TypeScript’s type system will only allow access to properties that exist on all of those union types.

Esta teoría trata sobre cómo puedes ser más explícito en TypeScript al definir uniones de tipos de objetos. En lugar de dejar que TypeScript infiera los tipos, puedes definir explícitamente una unión de tipos de objetos, lo que te brinda más control sobre los tipos de tus objetos.

This version of the previous poem variable is explicitly typed to be a union type that always has the always property along with either pages or rhymes. Accessing names is allowed because it always exists, but pages and rhymes aren’t guaranteed to exist:

```typescript
type PoemWithPages = {
  name: string,
  pages: number,
};
type PoemWithRhymes = {
  name: string,
  rhymes: boolean,
};
type Poem = PoemWithPages | PoemWithRhymes;
const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
poem.name; // Ok
poem.pages;
// ~~~~~
// Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
poem.rhymes;
// ~~~~~~
// Property 'rhymes' does not exist on type 'Poem'.
// Property 'rhymes' does not exist on type 'PoemWithPages'.
```

Restricting access to potentially nonexistent members of objects can be a good thing for code safety.

#### Narrowing Object Types

Continuing the explicitly typed poem example, check whether "pages" in poem acts as a type guard for TypeScript to indicate that it is a PoemWithPages. If poem is not a PoemWithPages, then it must be a PoemWithRhymes:

```typescript
if ('pages' in poem) {
  // poem es del tipo PoemWithPages
  console.log(poem.pages); // Accediendo a la propiedad 'pages'
} else {
  // poem es del tipo PoemWithRhymes
  console.log(poem.rhymes); // Accediendo a la propiedad 'rhymes'
}
```

Note that TypeScript won’t allow truthiness existence checks like if (poem.pages). Attempting to access a property of an object that might not exist is considered a type error, even if used in a way that seems to behave like a type guard:

```typescript
if (poem.pages) {
  /* ... */
}
// ~~~~~
// Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
```

#### Discriminated Unions

this Poem type describes an object that can be either a new PoemWithPages type or a new PoemWithRhymes type, and the type property indicates which one. If poem.type is "pages", then TypeScript is able to infer that the type of poem must be PoemWithPages. Without that type narrowing, neither property is guaranteed to exist on the value:

```typescript
type PoemWithPages = {
  name: string,
  pages: number,
  type: "pages",
};

type PoemWithRhymes = {
  name: string,
  rhymes: boolean,
  type: "rhymes",
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };

if (poem.type === "pages") {
  console.log(`It's got pages: ${poem.pages}`); // Ok
} else {
  console.log(`It rhymes: ${poem.rhymes}`);
}

poem.type; // Type: 'pages' | 'rhymes'
poem.pages;
// ~~~~~
// Error: Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
```

### Intersection Types

Intersection types are typically used with aliased object types to create a new type that combines multiple existing object types.
The following Artwork and Writing types are used to form a combined WrittenArt type that has the properties genre, name, and pages:

```typescript
type Artwork = {
  genre: string,
  name: string,
};

type Writing = {
  pages: number,
  name: string,
};

type WrittenArt = Artwork & Writing;
// Equivalent to:
// {
// genre: string;
// name: string;
// pages: number;
// }
```

This ShortPoem type always has an author property, then is also a discriminated union on a type property:

```typescript
type ShortPoem = { author: string } & (
  | { kigo: string, type: "haiku" }
  | { meter: number, type: "villanelle" }
);

// Ok
const morningGlory: ShortPoem = {
  author: "Fukuda Chiyo-ni",
  kigo: "Morning Glory",
  type: "haiku",
};

const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle",
};

// Error: Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
// Type '{ author: string; type: "villanelle"; }' is not assignable to
// type '{ author: string; } & { meter: number; type: "villanelle"; }'.
// Property 'meter' is missing in type '{ author: string; type: "villanelle"; }'
// but required in type '{ meter: number; type: "villanelle"; }'.
```

**NOTA:** try to keep code as simple as possible when using them.
In the case of the previous code snippet’s ShortPoem, it would be much more readable to split the type into a series of aliased object types to allow TypeScript to print those names, En el siguiente ejemplo se puede observar como se genera el mismo error de arriba pero el mensaje de error es mucho mas leible para entender el origne del problema.

```typescript
type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string, type: "haiku" };
type Villanelle = ShortPoemBase & { meter: number, type: "villanelle" };
type ShortPoem = Haiku | Villanelle;

const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle",
};
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'Villanelle'.
// Property 'meter' is missing in type
// '{ author: string; type: "villanelle"; }'
// but required in type '{ meter: number; type: "villanelle"; }'.
```

## Functions

### Function Parameters

As with variables, TypeScript allows you to declare the type of function parameters with a type annotation. Now we can use a : string to tell TypeScript that the song parameter is of type string:

```typescript
function sing(song: string) {
  console.log(`Singing: ${song}!`);
}
```

Much better: now we know what type song is meant to be!.

#### Required Parameters

If a function is called with a wrong number of arguments, TypeScript will protest in the form of a type error. This singTwo function requires two parameters, so passing one argument and passing three arguments are both not allowed:

```typescript
function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`);
}
// Logs: "Ball and Chain / undefined"
singTwo("Ball and Chain");
// ~~~~~~~~~~~~~~~~
// Error: Expected 2 arguments, but got 1.
// Logs: "I Will Survive / Higher Love"
singTwo("I Will Survive", "Higher Love"); // Ok
// Logs: "Go Your Own Way / The Chain"
singTwo("Go Your Own Way", "The Chain", "Dreams");
// ~~~~~~~~
// Error: Expected 2 arguments, but got 3.
```

#### Optional Parameters

TypeScript allows annotating a parameter as optional by adding a ? before the : in its type annotation—similar to optional object type properties.

In the following announceSong function, the singer parameter is marked optional. Its type is string | undefined, and it doesn’t need to be provided by callers of the function. If singer is provided, it may be a string value or undefined:

```typescript
function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);
  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}
announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok
```

These optional parameters are always implicitly able to be undefined.

#### Default Parameters

If a parameter has a default value and doesn’t have a type annotation, TypeScript will infer the parameter’s type based on that default value.
In the following rateSong function, rating is inferred to be of type number, but is an optional number | undefined in the code that calls the function:

```typescript
function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars!`);
}
rateSong("Photograph"); // Ok
rateSong("Set Fire to the Rain", 5); // Ok
rateSong("Set Fire to the Rain", undefined); // Ok
rateSong("At Last!", "100");
// ~~~~~
// Error: Argument of type '"100"' is not assignable
// to parameter of type 'number | undefined'.
```

#### Rest Parameters

TypeScript allows declaring the types of these rest parameters similarly to regular parameters, except with a [] syntax added at the end to indicate it’s an array of arguments.

Here, singAllTheSongs is allowed to take zero or more arguments of type string for
its songs rest parameter:

```typescript
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}
singAllTheSongs("Alicia Keys"); // Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok
singAllTheSongs("Ella Fitzgerald", 2000);
// ~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
```

#### Return Types

In this example, singSongs is understood by TypeScript to return a number:

```typescript
// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}
```

If a function contains multiple return statements with different values, TypeScript will infer the return type to be a union of all the possible returned types.

This getSongAt function would be inferred to return string | undefined because its two possible returned values are typed string and undefined, respectively:

```typescript
// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}
```

##### Explicit Return Types

Function declaration return type annotations are placed after the `)` following the list of parameters.
For a function declaration, that falls just before the `{`:

```typescript
function singSongsRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
```

For arrow functions (also known as lambdas), that falls just before the =>:

```typescript
const singSongsRecursive = (songs: string[], count = 0): number =>
  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
```

### Function Types

Function type syntax looks similar to an arrow function, but with a type instead of the body.

This nothingInGivesString variable’s type describes a function with no parameters
and a returned string value:

```typescript
let nothingInGivesString: () => string;
```

This inputAndOutput variable’s type describes a function with a string[] parameter, an optional count parameter, and a returned number value:

```typescript
let inputAndOutput: (songs: string[], count?: number) => number;
```

Function types are frequently used to describe callback parameters (parameters meant to be called as functions).

For example, the following runOnSongs snippet declares the type of its getSongAt parameter to be a function that takes in an index: number and returns a string. Passing getSongAt matches that type, but logSong fails for taking in a string as its parameter instead of a number:

```typescript
const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}
function getSongAt(index: number) {
  return `${songs[index]}`;
}
runOnSongs(getSongAt); // Ok
function logSong(song: string) {
  return `${song}`;
}
runOnSongs(logSong);
// ~~~~~~~
// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.
```

When complaining that two function types aren’t assignable to each other, TypeScript will typically give three levels of detail, with increasing levels of specificity:

1. The first indentation level prints out the two function types.
2. The next indentation level specifies which part is mismatched.
3. The last indentation level is the precise assignability complaint of the mis‐
   matched part.

In the previous code snippet, those levels are:

1. logSongs: (strong: string) => string is the provided type being assigned to
   the getSongAt: (index: number) => string recipient
2. The song parameter of logSong being assigned to the index parameter of
   getSongAt
3. song’s number type is not assignable to index’s string type

#### Function Type Parentheses

In union types, parentheses may be used to indicate which part of an annotation is the function return or the surrounding union type:

```typescript
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;
```

##### Parameter Type Inferences

TypeScript can infer the types of parameters in a function provided to a location with a declared type.

This singer variable is known to be a function that takes in a parameter of type string, so the song parameter in the function later assigned to singer is known to be a string:

```typescript
let singer: (song: string) => string;
singer = function (song) {
  // Type of song: string
  return `Singing: ${song.toUpperCase()}!`; // Ok
};
```

the song and index parameters here are inferred by TypeScript to be string and number, respectively:

```typescript
const songs = ["Call Me", "Jolene", "The Chain"];
// song: string
// index: number
songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});
```

### Function Type Aliases

Types aliases can be used for functions types as well.

This StringToNumber type aliases a function that takes in a string and returns a number, which means it can be used later to describe the types of variables:

```typescript
type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // Ok
stringToNumber = (input) => input.toUpperCase();
// ~~~~~~~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type 'number'.
```

This usesNumberToString function has a single parameter which is itself the Number ToString aliased function type:

```typescript
type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`); // Ok
usesNumberToString((input) => input * 2);
// ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.
```

### More Return Types

#### Void Returns

Some functions aren’t meant to return any value.

TypeScript allows using a void keyword to refer to the return type of such a function that returns nothing.

Functions whose return type is void may not return a value. This logSong function is declared as returning void, so it’s not allowed to return a value:

```typescript
function logSong(song: string | undefined): void {
  if (!song) {
    return; // Ok
  }
  console.log(`${song}`);
  return true;
  // Error: Type 'boolean' is not assignable to type 'void'.
}
```

This songLogger variable represents a function that takes in a song: string and doesn’t return a value:

```typescript
let songLogger: (song: string) => void;
songLogger = (song) => {
  console.log(`${songs}`);
};
songLogger("Heart of Glass"); // Ok
```

Note that although JavaScript functions all return undefined by default if no real value is returned, void is not the same as undefined.

Trying to assign a value of type void to a value whose type instead includes undefined is a type error:

```typescript
function returnsVoid() {
  return;
}
let lazyValue: string | undefined;
lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.
```

Functions provided to forEach can return any value they want. records.push(record) in the following saveRecords function returns a number (the returned value from an array’s .push()), yet is still allowed to be the returned value for the arrow function passed to newRecords.forEach:

```typescript
const records: string[] = [];
function saveRecords(newRecords: string[]) {
  newRecords.forEach((record) => records.push(record));
}
saveRecords(["21", "Come On Over", "The Bodyguard"]);
```

The void type is not JavaScript. It’s a TypeScript keyword used to declare return types of functions.

#### Never Returns

Some functions not only don’t return a value, but aren’t meant to return at all.
Never-returning functions are those that always throw an error or run an infinite
loop (hopefully intentionally!).

This fail function only ever throws an error, so it can help TypeScript’s control flow analysis with type narrowing param to string:

```typescript
function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }
  // Here, param is known to be type string
  param.toUpperCase(); // Ok
}
```

never is not the same as void. void is for a function that returns nothing. never is for a function that never returns.

### Function Overloads

Some JavaScript functions are able to be called with drastically different sets of parameters that can’t be represented just by optional and/or rest parameters.

This createDate function is meant to be called either with one timestamp parameter or with three parameters—month, day, and year. Calling with either of those numbers of arguments is allowed, but calling with two arguments would cause a type error because no overload signature allows for two arguments. In this example, the first two lines are the overload signatures, and the third line is the implementation signature:

```typescript
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
 return day === undefined || year === undefined
 ? new Date(monthOrTimestamp)
 : new Date(year, monthOrTimestamp, day);
}
createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok
createDate(4, 1);
// Error: No overload expects 2 arguments, but overloads
// do exist that expect either 1 or 3 arguments.
```

## Commands

Recordar que para trabajar localmente se debe de instalar las dependencias con --save-dev y utiliza el comando npm para consultar versiones y el comando npx para ejecutar comandos.

ts-node y DENO: ejecuta un archivo ts sin necesidad de compilarlo (aunque under the hood stils hace compilacion)
TSC: Compila el archivo ts en vanilla js
TSC --help: muestra todos los comandos para el compilador de typescript
TSC --init: Crea un archivo tsconfig.json para la configuracino del compilador de typescript
Interface: Define la interface de un object
as: Es para darle la referencia a un object que utilice esa interfas especifica
":" en parametros de las funcones: Lo que permite es añadir type chekcers a los parametros de las funciones
