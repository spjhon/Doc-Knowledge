---
sidebar_position: 3
---

# 3. The Prop System

- Exercise 02 Grider [**Link al Repositorio**](https://github.com/spjhon/Udemy-React-StephenGrider/blob/Apps/002-Vite-Pads(basic%20components%20and%20pops)/README.md) se puede encontrar a mas profundidad y con ejemplos lo siguiente:

- Reglas de como pasar atributos html al componente e introduccion al sistema de props
![text for screen reader](../src/images/gridder%20diapositivas/013%20the%20prop%20system.jpg)
- Como reutilizar un componente y que este componente se adapte a la forma que uno desea y estos deseos se comunican a travez del sistema de props.
- Como colocar styles basicos al menos los que van in-line
- Valores predeterminados en los props en caso de que no llegue ningun prop.
- Utilizacion de una libreria para el estilizado llamada Bulma
- Se explica la jerarquia de los componente y que es un componente padre y que es un componente children
- Introduccion a destructuring (ver destructuring en javascript)
- Se explica como el sistema de imports y exports es escencial a la hora de modularizar los componentes (ver modules en javascript)
- Ojo con la inmutabilidad cuando se trabaja con los estados (recuerda el .slide() y el ...history en el ejemplo de tick-toc).
- JavaScript tiene una particularidad, si un object tiene dos llaves con el mismo nombre, una sobre-escribe a la otra (LAS LLAVES EN LOS OBJECTS DEBEN DE SER UNICAS).
- The **spread** syntax: The dots literally mean “gather the remaining parameters into an array”, cuando se utiliza como parametro
- Un underline element es un componente que el html que devuelve es el mismo que el nombre de la funcion y el nombre del componente.
- Un componente no puede retormar mas de un tag, en caso de varios tags envolvelos en un wrapper or a fragment.
- Se recomienda aplicar (ejemplo en github examples-react) atomic design in order to create the components.
La destructuración con [] indica que se están destructurando arrays, mientras que si se utiliza {} es que se está destructurando un objects.
- Se puede utilizar map para mapear todos los elementos que se encuentren en objetos, vengan de funciones, fetch, etc. (siempre agregar un key).
- En react los on son los eventos html que estan listados en w3schools.
- For small components that only have one or two state values, using useState directly is fine, but once a component starts to have large numbers of state values, using a custom hook to handle all the state values as a single object will make your code much more readable and easier to manage.
