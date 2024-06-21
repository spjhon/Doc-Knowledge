---
sidebar_position: 4
---

# Parseo de dataTypes a otros dataTypes

En JavaScript, el término "parse" generalmente se refiere a la conversión de datos de un formato a otro. Aquí están los principales tipos de parse que se utilizan en JavaScript:

1. **Parseo de JSON**:

   - **JSON.parse()**: Convierte una cadena JSON en un objeto de JavaScript.

     ```javascript
     const jsonString = '{"name":"John", "age":30}';
     const obj = JSON.parse(jsonString);
     console.log(obj.name); // John
     ```

   - **JSON.stringify()**: Convierte un objeto de JavaScript en una cadena JSON.

     ```javascript
     const obj = { name: "John", age: 30 };
     const jsonString = JSON.stringify(obj);
     console.log(jsonString); // '{"name":"John","age":30}'
     ```

2. **Parseo de números**:

   - **parseInt()**: Convierte una cadena en un número entero, permite especificar la base (radix).

     ```javascript
     const num = parseInt("123"); // 123
     const hexNum = parseInt("7B", 16); // 123 en base 16
     ```

   - **parseFloat()**: Convierte una cadena en un número de punto flotante.

     ```javascript
     const num = parseFloat("123.45"); // 123.45
     ```

3. **Parseo de fechas**:

   - **Date.parse()**: Analiza una cadena de fecha y devuelve el número de milisegundos desde el 1 de enero de 1970 00:00:00 UTC.

     ```javascript
     const timestamp = Date.parse("2023-05-20T00:00:00Z"); // 1684531200000
     ```

   - **new Date()**: Puede aceptar una cadena de fecha y hora y devolver un objeto `Date`.

     ```javascript
     const date = new Date("2023-05-20T00:00:00Z");
     console.log(date); // Sat May 20 2023 02:00:00 GMT+0200 (Central European Summer Time)
     ```

4. **Parseo de expresiones regulares**:

   - **RegExp constructor**: Crea un objeto `RegExp` que puede ser utilizado para buscar coincidencias en cadenas.

     ```javascript
     const regex = new RegExp("\\d+", "g");
     const str = "There are 123 apples";
     const matches = str.match(regex); // ["123"]
     ```

5. **Parseo de URLs**:
   - **URL constructor**: Crea un objeto URL que facilita el análisis y manipulación de componentes de URL.

     ```javascript
     const url = new URL("https://example.com/path?name=John&age=30");
     console.log(url.hostname); // example.com
     console.log(url.searchParams.get("name")); // John
     ```

Estos son los métodos de parseo más comunes en JavaScript. Cada uno tiene su uso específico y es importante seleccionar el correcto según el tipo de datos que necesitas analizar o convertir.
