# HOOKS

useState
:Es el hook mas basico puede tomar cualquier DATATYPE y se puede pasar compo props.

useEffect
:La idea es que con useEffect se salte la re-renderizacion de un componente para hacer otras cosas, el useEffect puede dispararse de tres formas:

- en el renderizado inicial
- siempre que un componente se ejecute
- cuando un state en especifico cambie

Ver videos de Stephen Gridder en la seccion de books con api para mas info.

useRef
:Allows a component to get a reference to a DOM element that it creates.  es un hook que se utiliza para mantener mutable un objeto mutable que persiste a lo largo de los re-renderizados del componente, pero sin provocar un re-render cuando cambia su valor.

useContext
:para crear un provider y pasar states entre componentes.

useReducer
:Defines state in a component, just like useState, es parecido a redux, entendiendo este, se entiende redux

useDispatch
: es para traer el dispatch desde una store de redux y poder enviar un type y un payload a travez de actions

useSelector
: Este es para traer un state del store y asi utilizarlo
