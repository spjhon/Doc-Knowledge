function getAllProperties(obj: Object) {
  let props = new Set();

  while (obj) {
    for (const prop of Object.getOwnPropertyNames(obj)) {
      props.add(prop);
    }
    for (const sym of Object.getOwnPropertySymbols(obj)) {
      props.add(sym);
    }
    obj = Object.getPrototypeOf(obj);
  }

  return [...props];
}

const obj = {}

console.log(getAllProperties(obj));