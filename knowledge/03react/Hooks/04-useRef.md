# useRef

## Resumen de ChatGPT

¡Exactamente! Con `useRef`, tienes acceso directo al elemento en el DOM, lo cual significa que puedes hacer todo tipo de manipulaciones como si estuvieras trabajando directamente con el DOM en JavaScript puro.

Aquí tienes algunas de las cosas que puedes hacer usando `useRef` en React:

1. **Acceder o Modificar el Valor de un Input**:
   - Puedes leer o escribir en el valor del input directamente usando la referencia (`inputRef.current.value = "nuevo valor"`).

2. **Modificar Propiedades o Atributos**:
   - Puedes cambiar propiedades como `checked` para un checkbox (`checkboxRef.current.checked = true`).
   - También puedes establecer atributos como `disabled`, `required`, y muchos otros.

3. **Aplicar Estilos**:
   - Puedes manipular el estilo del elemento, por ejemplo, `inputRef.current.style.color = "red"`.

4. **Invocar Métodos del DOM**:
   - Puedes llamar métodos del DOM como `.focus()`, `.click()`, o `.blur()` en el elemento referenciado.

5. **Escuchar Cambios en el Elemento**:
   - Puedes agregar o quitar clases, actualizar propiedades dinámicamente, y hacer cualquier tipo de manipulación que normalmente podrías hacer en JavaScript directo con el DOM.

### Ejemplos Prácticos

Aquí algunos ejemplos de cómo puedes manipular elementos usando `useRef`:

#### Cambiar el valor de un input

```js
const inputRef = useRef<HTMLInputElement>(null);

function updateInputValue() {
  if (inputRef.current) {
    inputRef.current.value = "Nuevo valor"; // Cambiar el valor del input
  }
}
```

#### Activar o desactivar un checkbox

```js
const checkboxRef = useRef<HTMLInputElement>(null);

function toggleCheckbox() {
  if (checkboxRef.current) {
    checkboxRef.current.checked = !checkboxRef.current.checked; // Cambiar el estado de checked
  }
}
```

#### Aplicar estilos o clases

```js
const divRef = useRef<HTMLDivElement>(null);

function applyStyles() {
  if (divRef.current) {
    divRef.current.style.backgroundColor = "lightblue"; // Cambiar el fondo
    divRef.current.classList.add("active"); // Agregar una clase
  }
}
```

### Nota sobre el Uso de `useRef`

Aunque `useRef` permite hacer manipulaciones de esta manera, React recomienda usarlo principalmente cuando no es posible lograr el mismo resultado a través de su flujo de renderizado (con `useState`, `props`, etc.). Manipular el DOM directamente puede ser útil, pero hay que usarlo con precaución para evitar desincronizaciones en el estado de la UI y posibles bugs.

Aquí tienes una lista de las situaciones donde `useRef` es útil o necesario, y donde es la mejor práctica para trabajar con el DOM en React:

### 1. **Acceder a Elementos del DOM para Manipulaciones Directas**

- **Ejemplos**: Para hacer clic, aplicar foco (`focus()`), o quitar foco (`blur()`) en un elemento de entrada.
- **Caso**: Necesitas abrir un selector de archivos (`input type="file"`) al hacer clic en un botón, o enfocar un campo de entrada al cargar el componente.

### 2. **Guardar un Valor entre Renders sin Provocar Re-renders**

- **Ejemplos**: Almacenar contadores, IDs de temporizadores, o valores acumulativos.
- **Caso**: Un temporizador que debes pausar o reiniciar sin provocar re-renders.

### 3. **Acceder a Elementos de Terceros o APIs de Animación**

- **Ejemplos**: Bibliotecas de gráficos o animaciones (como Canvas, Three.js, D3.js).
- **Caso**: Tienes un elemento Canvas o SVG donde necesitas manipular gráficos o hacer animaciones con una biblioteca externa que modifica el DOM.

### 4. **Mantener el Estado de una Variable Mutable en Funciones Asíncronas o en Efectos**

- **Ejemplos**: Guardar un valor entre renders dentro de un `useEffect` o en una función asíncrona.
- **Caso**: Necesitas mantener un valor de referencia (por ejemplo, si un componente aún está montado) para evitar errores de "fuga de memoria".

### 5. **Almacenamiento de Valores que Cambian pero que No Necesitan Causar Re-renders**

- **Ejemplos**: Estado de reproducción de un video/audio, el valor de la última acción del usuario, o un contador no visible.
- **Caso**: Tienes un contador que sigue actualizándose sin que sea necesario reflejarlo en la UI cada vez que cambia.

### 6. **Interacciones Condicionales o de Eventos que No Afectan el Estado de la UI**

- **Ejemplos**: Comportamientos como ocultar o mostrar elementos, verificar si un elemento está en el viewport.
- **Caso**: Necesitas verificar si un componente está visible en la pantalla o si una condición se cumple sin actualizar la UI.

### 7. **Persistir un Estado que No Es Necesario Compartir con Otros Componentes**

- **Ejemplos**: Guardar valores temporales específicos de un componente, como el último valor de entrada antes de perder el foco.
- **Caso**: El valor solo importa en el contexto de ese componente, y actualizar la UI sería innecesario o incluso contraproducente.

### En Resumen

`useRef` es ideal para **acceder y manipular el DOM sin que esto implique una actualización en la interfaz de usuario** o para **guardar valores entre renders sin hacer que React vuelva a renderizar el componente**. En todas estas situaciones, `useRef` permite una gestión más ligera y controlada, ideal para situaciones que no necesitan sincronizarse con el estado visual o la lógica de la UI en React.
