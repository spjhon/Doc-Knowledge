---
sidebar_position: 1
---

# useState

- Que es state?:
![anatomia basica state](../../src/images/gridder%20diapositivas/003%20que%20es%20useState.jpg)

- Anatomia basica de state:
![anatomia basica state](../../src/images/gridder%20diapositivas/017%20anatomia%20basica%20de%20useState.jpg)

- Esta es una guia practica de como utilizar un event:
![text for screen reader](../../src/images/gridder%20diapositivas/015%20Como%20manejar%20eventos%20como%20click.jpg)

- **If you want to cutomize, use PORPS, if you want to change something on the screen use STATE**

## Tips

En react se maneja el sistema de states para poder rastrear el estado de un componente en un determinado momento o debido a las acciones de un usuario

- Un set en react es un peticion de hacer un re-render con los nuevos states.
- Ojo con los objects y los arrays ya que estos son los que mutan.
- React no renderiza o print bools, nulls o undefined, entonces es util para esconder divs, o decir que no renderizen.
-algo interesante a tener en cuenta cuando al onClick se le pasa el handleclick directamente sin funciones arrow, devuleve el event object.
- Todo handleClick debe de ser definido en donde esta el state que modificay pasarlo por el sistema de props
- Si se llama el componente que use useState varias veces, habran varios estados diferentes.
- Las funciones que utilicen "use" se consideran "hooks" como por ejemplo useState
- La clave de react es la re-renderizacion de un componente y como sus estados van cambiando.
- Conditional Rendering
- Uso basico de useState
- INMUTABILIDAD DEL STATE Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre.
- Utilizacion del .map para el mapeo de elementos.
- Como pasar imagenes a un objeto para ser manipuladas
- Sistema de eventos y el sistema de state
- Como utilizar y donde poner handleClicks
- Component lifecicle (look for useEffect)
- Re-rendering of a component
- fetching con axios
- event object management
- En las diapositivas de grider desde la 23 hasta la 30 del repositorio de grider se explica como modificar arrays y objects cuando estos estan en el state
- Tener en cuenta que hay procedimientos para add, update, delete etc diferentes tanto para arrays como para objects.
- Collapsing two handlers into one
- Se puede poner una funcion en el inicializador de useState pero no debe aceptar argumentos y debe de devolver un valor para asi asignarlo al state inicial, por supuesto con el datatype adecuado.
- Los states no retornan un valor, solo se encargan del set y el valor.
- En cuanto a la inicializacion de states en useState, se pueden pasar funciones que retornen el state inicial pero hay que pasar la funcion solamente (osea el nombre de la funcion sin los parentesis) ya que si se pasa al parametro de useState un funcion con sus parentesis, se estaria llamandno la funcion cada vez que se renderice el componente y seria ineficienrte.

- **OJO**:

Actualización del Estado
El setter (setState) puede recibir dos tipos de argumentos:

- Un nuevo valor para el estado.
- Una función que recibe el estado anterior y devuelve el nuevo estado. (updater function). **Importante** sobre los updaterFunctions que son funciones que entran como argumetno a un setState: Si pasas una función, React SIEMPRE le pasa como primer argumento el valor actual del state.
