---
sidebar_position: 95
---

# Notas DOM Document Object Model

## **Event-Targets**

- La estructura más externa del entorno del navegador es la ventana o window, que representa una instancia de la ventana del navegador en la que se carga la página web.

- Dentro de la ventana (window) se encuentra el objeto document, que representa el documento HTML actualmente cargado en la ventana. El objeto document proporciona métodos y propiedades para acceder y manipular los elementos y el contenido del documento.

- Dentro del documento (document), la raíz es el elemento `<html>`, que contiene todos los demás elementos de la página.

- document.documentElement is used to obtain a reference to the root element of the HTML document, which is typically the `<html>` element.

- el root es un selector CSS que tiene mas espcividad que el HTML, sin embargo representan lo mismo.

- La comunicación entre el DOM y el navegador se realiza a través de APIs (Interfaces de Programación de Aplicaciones). Estas APIs proporcionan métodos y eventos que permiten interactuar con el DOM y realizar diversas operaciones, como manipular elementos, cambiar estilos, agregar o eliminar contenido, entre otros.

- La diferencia entre NODE y ELEMENT es que los node son mas cosas dentro del arbol del DOM (buscar imagen adjunta) como los comentarios y el texto y muchas mas cosas, los elementos son solo la coleccion de tags. In simple words, an element is a node that's written using a tag in the HTML document.

- Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

- Si en algun momento deseas ver todo lo que hace que un elemento exista y los metodos y propiedades disponibles utilizar console.dir si por el contrario se necesita el evento solo se imprime el evento una vez se pasa como argumento y se convierte en parametro de la funcion que que es invocada por medio del addEventListener()

- Estos elementos HTML heredan propiedades y funciones de sus padres que en el caso de los nodosHTML seria.

- Toda la comunicacion interna sucede por medio de interfaces que proporcionan las propiedades y metodos que permiten que exitan los elementos y poder manipularlos.

- OJO con las propiedades y metodos ya que de acuerdo a lo que retornen cambia el set de propiedades y metoods que se pueden aplicar (obviamente) y saber diferenciar cuando regresa un nodo o cuando regresa un elemento o cuando regresa alguna otra cosa.

- GRACIAS AL DOM SE PUEDE MANIPULAR ELEMENTOS HTML:

Desde el elemento general (cuando se crea con un getelementbyid por ejemplo) se crea un OBJETO y se puede aplicar:
Las propiedades del HTML element que estan en w3 schoools
Las propiedades de attr que estan en w3schools para accesara y modificar atributos
Las propiedades de collection que estan en w3schhools se aplican a lo que retorna ciertos queries que retornan arrays
    The getElementsByTagName() Method
    The getElementsByClassName() Method
    The children Property
Las propiedades de style que estan en w3schools para poder modificar los estilos desde javascript
Las propiedades de nodelist son aquellas que se aplican a lo que retorna
    The childNodes() Method
    The querySelectorAll() Method
    The getElementsByName() Method
Las propiedades de HTMLtokenList que es basicamete todo lo que se puede hacer con classList, manipulacion de classes.

- Un elemento puede estar hecho de diferentes interfaces no tiene que ser directament jerarquico.

## **Events**

- Los eventos se pueden adiconar tanto a elementos como a nodos

- Si se le aplica un handler a un elemento, sus hijos van a adoptar el evento tambien.

- Tener cuidado con la forma en que funciona el bubble ya que hay que tener en cuenta los elementos dentro del elemento al que se le aplica el event handler para eso es muy util stopPropagation() o la otra posibilidad es usar event caputre.

- Otro truco es event delegation para asi asignar un handler a muchos elementos anidados

- Un truco, cuando le asignamos un click a un elemento como un div, al hacerle click en alguno de sus elementos se va a disparar el click con la ventaja que en el objeto de evento esta registrado el target que puede ser cualquier elemento dentro del div.

-The event object is created automatically by the browser when an event occurs, and it is passed as an argument to the event handler or callback function.

- Los eventos se pueden dar: desde HTML: `<element onload="myScript">`, desde JavaScript: `object.onload = function(){myScript};`, o desde eventListener: `object.addEventListener("load", myScript);`

## **Coockies**

Cookies vs Local Storage
Cookies are for client-server (browser-server) applications.

Local storage are for client (browser) applications.

Cookies are associated with websites. If the data is for client use, sending cookies in every HTTP header is waste of bandwith.

Some users have cookies disabled as a rule in their browsers.

A Cookie has a size limit of 4 Kilobytes. Local Storage has a limit of 5 Megabytes per domain.

A Cookie have expiration date. Local Storage has not.
