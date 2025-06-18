---
sidebar_position: 5
---

# useMemo

Claro — te lo explico con calma y de forma comprensiva. Vamos paso a paso:

---

## 📌 ¿Qué es `useMemo` en React?

`useMemo` es un **hook de React** que permite **memorizar (guardar en memoria)** el resultado de una función **para evitar volver a ejecutarla innecesariamente** en cada render.

👉 Es útil cuando tienes una operación costosa (por ejemplo, un cálculo largo o una transformación de datos) que no necesitas volver a hacer a menos que ciertas dependencias cambien.

👉 useMemo memoriza valores derivados o resultados de cálculos dentro de un componente funcional, para que no se vuelvan a calcular en cada render si no han cambiado sus dependencias.

👉 No memoriza componentes ni JSX completo, sino un valor o el resultado de una función, para eso esta React.memo.

---

## 📦 Sintaxis básica

```javascript
const valorMemorizado = useMemo(() => {
  // función cuyo resultado quieres memorizar
  return resultado;
}, [dependencias]);
```

* La función dentro de `useMemo` se ejecuta solo:

  1. **La primera vez que se renderiza el componente**
  2. **Cuando alguna de las dependencias cambia**

Si las dependencias no cambian entre renders, React devuelve el valor memorizado, evitando reejecutar la función.

---

## 📖 Ejemplo sencillo

```javascript
import { useMemo, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [otraCosa, setOtraCosa] = useState(0);

  const numeroPesado = useMemo(() => {
    console.log('Calculando...');
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <p>Resultado: {numeroPesado}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>
      <button onClick={() => setOtraCosa(otraCosa + 1)}>Cambiar otra cosa</button>
    </div>
  );
}
```

**¿Qué pasa aquí?**

* Cuando cambias `contador`, se recalcula `numeroPesado`.
* Cuando cambias `otraCosa`, **no se vuelve a ejecutar** el cálculo, porque `contador` no cambió.
* El `console.log('Calculando...')` solo aparece cuando realmente es necesario.

---

## 📌 ¿Por qué es útil?

### ✅ Evitar cálculos innecesarios

Cuando una operación es costosa o compleja, puedes evitar que se repita en cada render si su resultado no ha cambiado.

### ✅ Mejorar rendimiento

En componentes con muchos renders rápidos o listas grandes, `useMemo` ayuda a mantener fluida la experiencia evitando cálculos redundantes.

---

## 📌 ¿Cuándo **NO** usar `useMemo`?

Si el cálculo:

* Es muy ligero y rápido.
* No se ejecuta frecuentemente.
* No impacta en el rendimiento.

👉 En esos casos, usar `useMemo` sería añadir complejidad innecesaria.

---

## 📌 Diferencia entre `useMemo` y `useCallback`

* **`useMemo`**: memoriza el **resultado de una función**.
* **`useCallback`**: memoriza la **función en sí** (la referencia de la función) para no volver a crearla en cada render.

Ejemplo:

```javascript
const funcionMemorizada = useCallback(() => {
  hacerAlgo();
}, [dependencias]);
```

---

## 📌 Resumen

| Concepto            | Descripción                                         |
| :------------------ | :-------------------------------------------------- |
| ¿Qué es?            | Hook para memorizar el resultado de una función     |
| ¿Cuándo se ejecuta? | Al primer render y cuando cambian sus dependencias  |
| ¿Para qué sirve?    | Evitar cálculos innecesarios y mejorar rendimiento  |
| ¿Cuándo evitarlo?   | En cálculos ligeros o que no afectan el rendimiento |

---

## 📌 Diferencia entre React.memo y useMemo

👉 ¿Por qué existen los dos?

Porque resuelven problemas diferentes:

✔️ useMemo → rendimiento dentro de un componente.
✔️ React.memo → rendimiento en la renderización de un componente.

👉 Conclusión

✔️ Usa useMemo para evitar cálculos costosos repetidos en cada render.
✔️ Usa React.memo para evitar renders innecesarios de componentes hijos cuando sus props no cambian.

## 📌 ¿Qué es `useCallback` y para qué sirve?

**`useCallback` memoriza una función** (es decir, mantiene su referencia en memoria) para evitar que se cree una nueva instancia de esa función en cada render.

👉 React **recrea todas las funciones que declaras dentro de un componente funcional en cada render**.
Eso está bien en muchos casos, pero si pasas esa función como prop a un componente hijo memorizado con `React.memo`, **hará que ese hijo se vuelva a renderizar** porque la prop cambió (aunque la lógica interna de la función sea igual, la referencia es distinta).

Ahí es donde `useCallback` es útil.

---

## 📦 Resumen de diferencias

| Concepto  | `useCallback`                               | `useMemo`                                       | `React.memo`                                    |
| :-------- | :------------------------------------------ | :---------------------------------------------- | :---------------------------------------------- |
| Memoriza  | **Funciones**                               | **Valores o resultados de cálculos**            | **Renderizado de un componente funcional**      |
| Se usa en | Dentro de un componente funcional           | Dentro de un componente funcional               | En la exportación o definición de un componente |
| Optimiza  | Evita crear nuevas referencias de funciones | Evita recalcular valores pesados en cada render | Evita renders innecesarios de componentes hijos |
| Basado en | Cambios en **dependencias** (`[deps]`)      | Cambios en **dependencias** (`[deps]`)          | Cambios en **props**                            |

---
