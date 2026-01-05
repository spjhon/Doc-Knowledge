---
sidebar_position: 94
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

En el ecosistema de npm (Node Package Manager), tanto `npm` como `npx` son herramientas importantes, pero tienen funciones diferentes:

1. **npm**: `npm` es el administrador de paquetes de Node.js que se utiliza principalmente para instalar y administrar dependencias de proyectos. Algunas de las funciones comunes de `npm` incluyen:

   - Instalación de dependencias: `npm install <paquete>`
   - Instalación de dependencias de desarrollo: `npm install --save-dev <paquete>`
   - Ejecución de scripts definidos en el archivo `package.json`: `npm run <script-name>`
   - Publicación de paquetes en el registro de npm: `npm publish`

   En resumen, `npm` se utiliza para instalar paquetes y administrar las dependencias de un proyecto Node.js.

2. **npx**: `npx` es un ejecutor de comandos que viene incluido con `npm` desde la versión 5.2.0 en adelante. La función principal de `npx` es ejecutar paquetes binarios temporales (o directamente desde el registro de npm) sin tener que instalarlos globalmente. Algunos casos de uso típicos de `npx` son:

   - Ejecutar herramientas de línea de comandos sin necesidad de instalarlas globalmente: `npx create-react-app my-app`
   - Ejecutar scripts únicos de paquetes que no están instalados globalmente: `npx mocha tests/test.js`
   - Actualizar una herramienta temporalmente antes de ejecutarla: `npx npm-check --update`

   `npx` ayuda a evitar problemas relacionados con la versión de las herramientas que podrían surgir al usar versiones globales o locales de paquetes específicos.

En resumen, la principal diferencia es que `npm` se utiliza para instalar y administrar paquetes de manera global o local en un proyecto, mientras que `npx` se usa para ejecutar paquetes binarios temporales o comandos directamente desde el registro de npm sin necesidad de instalarlos permanentemente.

## Comandos Importantes para iniciar un nuevo projecto

npx server@latest
npm install --save-dev eslint eslint-plugin-react eslint-plugin-tailwindcss eslint-plugin-import eslint-config-molindo @typescript-eslint/parser @typescript-eslint/eslint-plugin
