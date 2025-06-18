---
sidebar_position: 1
---

# Memo

Excelente observación — y te lo aclaro porque ahí hay un concepto **fundamental en cómo funciona React** y una confusión común.

La respuesta corta es: **No, React no evita automáticamente renderizar los componentes hijos si los props no cambian — a menos que se lo indiques explícitamente, por ejemplo con `React.memo`**.

---

## 📌 ¿Cómo funciona el render en React por defecto?

Cuando un componente **padre se renderiza** (ya sea porque cambió su estado, sus props o algún context), **React por defecto vuelve a renderizar todos sus componentes hijos**.

👉 **Incluso si las props de esos hijos no cambiaron.**

¿Por qué?
Porque React **no compara props por defecto** en componentes funcionales normales.

**Solo actualiza el DOM si el resultado cambió**, pero sí vuelve a ejecutar la función del componente hijo en memoria. Y eso puede ser costoso si el componente tiene cálculos, renders pesados o JSX grande.

---

## 📦 Ejemplo sin `React.memo`

```javascript
function Hijo({ valor }) {
  console.log("Se renderiza hijo");
  return <div>{valor}</div>;
}

function Padre() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <Hijo valor="Hola" />
    </div>
  );
}
```

**Cada vez que das click:**

* `Padre` se renderiza.
* `Hijo` también se vuelve a ejecutar (aunque sus props no hayan cambiado).

---

## 📌 ¿Qué hace `React.memo` entonces?

`React.memo` **memoriza el resultado del render de un componente hijo** y **solo lo vuelve a ejecutar si sus props cambian** (comparadas superficialmente con `===`).

👉 Es decir: **evita reejecutar la función del componente hijo en memoria** si no cambió nada relevante.

**Con `React.memo`:**

```javascript
const Hijo = React.memo(function Hijo({ valor }) {
  console.log("Se renderiza hijo");
  return <div>{valor}</div>;
});
```

Ahora, si das click en el botón:

* `Padre` se renderiza.
* `Hijo` **NO se vuelve a renderizar**, porque sus props siguen siendo `"Hola"`.

---

## 📌 Entonces, para resumir

| Comportamiento                      | Componente funcional normal | Con `React.memo`               |
| :---------------------------------- | :-------------------------- | :----------------------------- |
| Se renderiza si cambia el padre     | ✔️ Sí                       | ❌ Solo si cambian sus props    |
| React compara props automáticamente | ❌ No                        | ✔️ Sí, comparación superficial |

---

## 📌 Nota: en class components antes había `shouldComponentUpdate`

Que servía para lo mismo: evitar renders innecesarios. En componentes funcionales, `React.memo` cumple ese papel.

---

## 📌 Conclusión

👉 **React por defecto renderiza todo el árbol de componentes funcionales en memoria cuando cambia un padre**, independientemente de si cambian los props de los hijos.

👉 Si quieres evitar ese comportamiento para optimizar rendimiento cuando los props no cambian, debes usar `React.memo`.

---

Si quieres, te puedo hacer un diagrama o una demo interactiva con logs para que veas cómo React renderiza con y sin `React.memo`. ¿Te gustaría?
