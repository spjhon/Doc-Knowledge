---
sidebar_position: 11
---

# 9. Classes

- **“Favor composition over inheritance.”**

- **“Prefiere la composición sobre la herencia.”**

Esta frase significa que, cuando sea posible, es mejor **crear objetos combinando funcionalidades pequeñas** (composición), que construir largas cadenas de herencia donde los objetos dependen de clases padre y abuelas (herencia clásica).

JavaScript, aunque tiene `class`, **no usa herencia clásica como Java o C#**, sino **herencia prototipal**.

---

📌 **Clases en JavaScript**

En JavaScript, una clase es realmente **una función especial** cuyo prototipo contiene los métodos compartidos por todas sus instancias.

> Es decir:
> **una clase no es un objeto en sí**, sino una **plantilla** (blueprint) que especifica:
>
> - qué propiedades tiene una instancia
> - qué métodos hereda del prototipo

Cuando creas un objeto con `new`, ese objeto **hereda** de `MiClase.prototype`.

---

# 🧱 **¿Por qué usar una factory function o una clase?**

Ambas existen para resolver problemas comunes cuando creas objetos complejos. Tus puntos están muy bien — aquí están traducidos y pulidos:

---

## 1. **Encapsulación**

Una factory function o clase encapsula la lógica de creación de objetos:

* variables internas
* métodos
* validaciones
* estados privados (closure o `#private`)

Esto mantiene la lógica organizada y fácil de mantener.

---

## 2. **Reusabilidad**

Cuando defines métodos en el prototipo (ya sea con `class` o con constructor+prototype), esos métodos:

* se definen **solo una vez**
* son **compartidos** por todas las instancias
* reducen consumo de memoria

Esto es automático con la sintaxis `class`.

---

## 3. **Interfaz Iterable**

Si un objeto implementa:

```js
*[Symbol.iterator]() { ... }
```

Entonces funciona con:

* `for...of`
* `...spread`
* `Array.from()`

Esto vuelve al objeto *compatible* con el ecosistema moderno de JavaScript.

Ejemplo:

```js
[...range(1, 3)]   // → [1, 2, 3]
```

---

## 4. **Legibilidad y expresividad**

Objetos bien diseñados permiten escribir código claro:

```js
range(1, 3).includes(2)
```

Mucho más limpio que hacer manualmente:

```js
function inRange(n, low, high) { ... }
```

---

## 5. **Method Chaining (Fluent API)**

Si devuelves `this` en tus métodos, puedes encadenar:

```js
contador.inc().inc().reset().inc()
```

Las clases y las factory functions permiten este estilo fluido.

---

## 6. **Extensibilidad**

Si usas prototipos o clases, puedes agregar métodos sin romper nada:

```js
Range.prototype.filter = function(f) { ... }
```

O en factory functions puedes extender el objeto devuelto sin modificar la función original.

---

# ⚔️ **Constructor Functions vs Factory Functions**

### **Constructor Functions (o `class` en ES6)**

Úsalas cuando:

* quieres herencia prototipal
* necesitas métodos compartidos y eficientes
* tu diseño es parecido a una clase tradicional
* quieres usar `instanceof`

Son ideales para objetos con muchas instancias y comportamiento común.

---

### **Factory Functions**

Úsalas cuando:

* quieres **privacidad real** con closures (algo que `class` no da sin `#private`)
* quieres evitar errores con `new`
* necesitas más flexibilidad
* quieres crear objetos configurables o dinámicos
* quieres composición en lugar de herencia

Son más seguras porque no dependen de `new`.

```js
function crearContador() {
  let count = 0; // privado

  return {
    inc() { count++; },
    get() { return count; }
  };
}
```

---

# 🧠 Diferenica fundamental (muy importante)

| Enfoque                 | Usa `new` | Tiene prototipo                  | Tiene `this`   | Tiene privacidad            |
| ----------------------- | --------- | -------------------------------- | -------------- | --------------------------- |
| **Constructor / Class** | ✔️ Sí     | ✔️ Sí                            | ✔️ Sí          | 🔸 Con `#private` solamente |
| **Factory Function**    | ❌ No      | ❌ No (a menos que tú lo asignes) | ❌ No necesario | ✔️ Con closure              |

---

# 🎯 En resumen final

### **Una clase organiza el comportamiento compartido mediante prototipos.**

### **Una factory function organiza lógica flexible y privada con closures.**

Ambas existen porque **no resuelven el mismo problema**:

* **Clase → eficiencia, herencia, métodos compartidos.**
* **Factory → composición, privacidad, flexibilidad.**

Y la regla clásica sigue siendo válida:

### 🔥 **“Prefiere composición sobre herencia.”**

Porque la composición evita acoplamiento fuerte, herencia profunda y diseños rígidos.

---

Si quieres, puedo darte:

* un ejemplo real comparando **class vs factory vs closure**
* un ejemplo de **composición vs herencia**
* o convertir tu código de range a cualquiera de los estilos.
