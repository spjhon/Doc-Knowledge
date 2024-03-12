---
sidebar_position: 8
---

# Notas NPM (Node Package Manager)

Use this in the CMD of windows

Look for NPM version

`npm -v`

Update NPM

`npm install -g npm@latest`

Check dependeices installed

`npm list`

Check node js version

`node -v`

Sí, exactamente. La diferencia en el comportamiento que has observado se debe a cómo se clasifican las dependencias en npm: dependencias de desarrollo (--save-dev) y dependencias de producción (--save).

Dependencias de Desarrollo (--save-dev):

Estas son dependencias necesarias solo durante el desarrollo y la construcción del proyecto.
Ejemplos típicos son las herramientas de construcción (ts-node, typescript en este caso), linters, pruebas unitarias, etc.
No son necesarias para la ejecución del proyecto en producción.
Dependencias de Producción (--save):

Estas son las dependencias necesarias para la ejecución del proyecto en producción.
Incluyen bibliotecas y módulos que el código en producción requiere para funcionar correctamente.
axios es un ejemplo de una dependencia de producción, ya que es una biblioteca que tu aplicación usa en tiempo de ejecución.

Entonces si se esta trabajando con las dependencias globales se puede ejecutar directamente los comandos desde el cli (por ejemplo ts-node -v o ts-node index.ts) pero si se esta trabajando con las dependencias locales se debe de utilizar npm para consultar o npx para ejecutar (por ejemplo npm ts-node -v y para ejecutar npx ts-node index.ts).

Y tener en cuenta de instalar --save para las dependencias normales y --save-dev para las dependencias de desarrollador.

Comando a tener en cuenta npm install ts-node typescript --save-dev.
