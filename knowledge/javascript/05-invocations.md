---
sidebar_position: 5
---

# Invocation in javascript

In this section its a small cheat-sheet of how different features of javascript are invoke and used, the most importanst are FUNCTIONS, OBJECTS, EXPORTS/IMPORTS.

## Import/Export Features

Different ways and usage of import/export statements.

### Exports

```js

// 📁 sayHi.js basic export function
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// Utilizar el type module para importar a un html
<!doctype html>
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>


// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

// 📁 say.js in this example both funcions are exported at the bottom of the file
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // a list of exported variables

//Export using "as"
// 📁 say.js
...
export {sayHi as hi, sayBye as bye};

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

//Exportando clases como default
// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}
//There may be only one export default per file.

//Aqui se le agrega el default en la parte de abajo
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
// same as if we added "export default" before the function
export {sayHi as default};


```

### Imports

```js
//Basic Import
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

//Importar todo
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');

//Using "as"
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!



```

### Core features

[Sacado de javascript.injo](https://javascript.info/modules-intro)

- Always “use strict”
- Module-level scope
- A module code is evaluated only the first time when imported
- import.meta
- In a module, “this” is undefined

#### Browser-specific features

- Module scripts are deferred (aplazados)
- Async works on inline scripts
- External scripts: External scripts that have `type="module"` are different in two aspects.
- No “bare” modules allowed
