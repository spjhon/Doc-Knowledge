# Routing en react

Para hacerlo desde 0 sin utilizar librerias

- Se tiene en cuenta los paths a partir de "/"
- Se utiliza el window.location.pathname
- Entonces se utiliza un componente llamado Link para navegar dentro de la app, si esta por fuera se utiliza los anchor normales.
- En cuanto a la navegacion existen dos tipos de navegacion, la navegacion del usuario y la navegacion programatica.
- Ahora la funcion dentro del archivo navigation.jsx hace dos cosas:

1. Call pushState to update address bar
2. Update "currentPath" sisnce pushState doent trigger a popstate event.

- Se crea tambien un archivo llamado Link, esta funcion (componente) es la que se va a usar en los anchor para la navegacion interna dentro de la app.
