---
sidebar_position: 1
---

# The big O

Información extraída mas que todo del libro: **JavaScript Data Structures and Algorithms An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals. Por, Sammie Bae**

Mide el peor caso para un algoritmo que involucra tiempo y memoria.

n representa el numero de inputs y la pregunta es cuando ese n tiende al infinito, que se hace?

* O(n^n) Este es el peor caso en donde con poquitos data input se demora mucho
* O(n^3) Este es menos malo
* O(n^2) Menos malo

Este es que es un loop dentro de un loop, por cada nivel se va aumentando el exponencial de n

* O(n) este es bueno por que se demora igual por cada input

Este indica que tiene que hacer una operacion por cada input asi que si se meten muchos imputs va a tener que hacer muchas operaciones

* O(1) este es el ideal por que se demora igual sin importar el tamaño de n

Un ejemplo de este es cuando se accesa un array con un index, solo hace la operacion una vez y ya sin importar el tamaño del array

* O(log n) Este es cuando la operacion hace que los loops sean menos que la cantidad de inputs

## 1. Rules

"Representemos la complejidad de un algoritmo como f(n). n representa el número de entradas, f(n)tiempo​ representa el tiempo necesario y f(n)espacio​ representa el espacio (memoria adicional) que el algoritmo requiere. El objetivo del análisis de algoritmos es comprender su eficiencia calculando f(n). Sin embargo, calcular f(n) puede ser un desafío. La notación Big-O proporciona algunas reglas fundamentales que ayudan a los desarrolladores a computar f(n):

### 1.1. Coefficient Rule: “Get Rid of Constants”

Regla del coeficiente: Si f(n) es O(g(n)), entonces kf(n) es O(g(n)), para cualquier constante k>0. Esta regla elimina los coeficientes que no están relacionados con el tamaño de la entrada, n. Esto se debe a que, a medida que n se acerca al infinito, el otro coeficiente se vuelve insignificante.

La idea es eliminar las constantes y datos que no dependan del numero de entradas n.

* This means that both 5f(n) and f(n) have the same Big-O notation of O(f(n)).

Aquí tienes un ejemplo de un bloque de código con una complejidad de tiempo de O(n):

```javascript
1 function a(n) {
2   var count = 0;
3   for (var i = 0; i < n; i++) {
4     count += 1;
5   }
6   return count;
7 }

```

Este bloque de código tiene una f(n)=n. Esto se debe a que suma a count n veces. Por lo tanto, esta función es O(n) en complejidad de tiempo.

```javascript
1 function a(n) {
2   var count = 0;
3   for (var i = 0; i < 5 * n; i++) {
4     count += 1;
5   }
6   return count;
7 }

```

Este bloque tiene una f(n)=5n. Esto se debe a que se ejecuta desde 0 hasta 5n. Sin embargo, los dos primeros ejemplos tienen una notación Big-O de O(n)."

¿Por qué ambos son O(n)?

Como mencionaba el texto anterior sobre la Regla del Coeficiente, en el análisis de algoritmos ignoramos las constantes.

* En el primer caso, tienes 1n.
* En el segundo caso, tienes 5n.

**Desde el punto de vista de Big-O, lo que importa es que si n se duplica, el tiempo de ejecución también se duplica (crecimiento lineal). No importa si uno es 5 veces más lento que el otro; ambos pertenecen a la misma "familia" de velocidad.**

El siguiente bloque de código muestra otra función con una complejidad de tiempo lineal, pero con una operación adicional en la línea 6:

```js
1 function a(n){
2   var count = 0;
3   for (var i = 0; i < n; i++){
4     count += 1;
5   }
6   count += 3;
7   return count;
8 }
```

Por último, este bloque de código tiene una f(n)=n+1. Hay un +1 debido a la última operación (count += 3). Esto todavía tiene una notación Big-O de O(n). Esto se debe a que esa operación única no depende de la entrada n. A medida que n se acerca al infinito, dicha operación se vuelve insignificante."

¿Por qué count += 3 es solo +1?

En el análisis de algoritmos, no contamos el valor que sumas (el número 3), sino la cantidad de instrucciones que el procesador debe ejecutar.

* El bucle for ejecuta la línea 4 n veces.
* La línea 6 se ejecuta 1 sola vez, sin importar si n es diez o diez millones.

Resumen de la "limpieza" de Big-O:

Para obtener el Big-O final de cualquier función, aplicamos estos dos pasos:

* Eliminar las constantes: n+1 se convierte en n.
* Eliminar los coeficientes: 5n se convierte en n.

De ahí que, para los científicos de la computación, un algoritmo que hace n pasos, uno que hace 5n y uno que hace n+100 son todos, en esencia, igual de eficientes: son O(n).

### 1.2. Sum Rule: “Add Big-Os Up”

Regla de la suma: Si f(n) es O(h(n)) y g(n) es O(p(n)), entonces f(n)+g(n) es O(h(n)+p(n)). Simplemente establece que si una complejidad de tiempo resultante es la suma de dos complejidades diferentes, la notación Big-O resultante es también la suma de ambas.

Lo que dice es que si un algoritmo esta compuesto por algoritmos mas pequeños, estos se pueden sumar normalmente, despues por supuesto de eliminar las constantes y coeficientes.

```js
1 function a(n){
2 var count =0;
3 for (var i=0;i<n;i++){
4 count+=1;
5 }
6 for (var i=0;i<5*n;i++){
7 count+=1;
8 }
9 return count;
10 }
```

In this example, line 4 has f(n) = n, and line 7 has f(n) = 5n. This results in 6n. However, when applying the coefficient rule, the final result is O(n) = n.

### 1.3. Product Rule: “Multiply Big-Os”

Regla del producto: Si f(n) es O(h(n)) y g(n) es O(p(n)), entonces f(n)g(n) es O(h(n)p(n)). De manera similar, la Big-O se multiplica cuando las complejidades de tiempo se multiplican.

Esta es la regla que indica que el exonencial sube a medida que se anida el codigo especialmente en loops

```js
1 function (n){
2 var count =0;
3 for (var i=0;i<n;i++){
4 count+=1;
5 for (var i=0;i<5*n;i++){
6 count+=1;
7 }
8 }
9 return count;
10 }
```

In this example, f(n) = 5n*n because line 7 runs 5n times for a total of n iterations. Therefore, this results in a total of 5n2 operations. Applying the coefficient rule, the result is that O(n)=n2.

### 1.4. Polynomial Rule: “Big-O to the Power of k”

Regla polinómica: Si f(n) es un polinomio de grado k, entonces f(n) es O(nk). Intuitivamente, establece que las complejidades polinómicas tienen una Big-O del mismo grado polinómico.

```js
1 function a(n){
2 var count =0;
3 for (var i=0;i<n*n;i++){
4 count+=1;
5 }
6 return count;
7 }
```

In this example, f(n) = nˆ2 because line 4 runs n*n iterations.

### 1.4. Otras reglas

* Regla transitiva: Si f(n) es O(g(n)) y g(n) es O(h(n)), entonces f(n) es O(h(n)). Es una forma sencilla de decir que la misma complejidad de tiempo tiene la misma Big-O.

* Regla del logaritmo de una potencia: log(nk) es O(logn) para cualquier constante k>0. Con esta regla, las constantes dentro de una función logarítmica también se ignoran en la notación Big-O.

Se debe prestar especial atención a las tres primeras reglas y a la regla polinómica, ya que son las más utilizadas. Analizaré cada una de esas reglas en las siguientes secciones."

Concepto clave: El "Infinito"

Como menciona el texto en la Regla del Coeficiente, en programación no nos importa si un algoritmo tarda 2n o 5n. Lo que nos importa es que crece de forma lineal. Cuando n (la cantidad de datos) es un número gigantesco como un billón, el hecho de que esté multiplicado por 2 o por 5 deja de ser relevante comparado con la velocidad a la que crece la función.

Lo que se mide es **TIME COMPLEXITY Y SPACE COMPLEXITY**

El espacio se tiene en cuenta cuando se necesita crear espacios en memoria adiconales por cada operacion lo cual conlleva a gastar recursos de memoria.

## 2. Big O en Algoritmos Recursivos
