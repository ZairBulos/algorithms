# Algoritmos de Ordenamiento

Los algoritmos de ordenamiento realizan la operación de arreglar los registros de una tabla en algún orden secuencial de acuerdo a un criterio de ordenamiento. El ordenamiento se efectúa con base en el valor de algún campo en un grupo de datos. El ordenamiento puede estar dado de forma iterativa o recursiva según la naturaleza y forma de ejecucion del mismo.

## [Bubble Sort](bubble-sort.ts)

El algoritmo de ordenamiento burbuja consiste en comparar elementos adyacentes en una estructura, como un arreglo, y reorganizarlos si están en el orden incorrecto. Este proceso se repite hasta que toda la estructura esté ordenada. El orden se establece generalmente en función de una clave, y la estructura debe proporcionar acceso directo a sus componentes.

![](/images/bubble-sort.gif)

## [Selection Sort](selection-sort.ts)

El algoritmo de ordenamiento por selección busca el elemento más pequeño (en orden ascendente) o más grande (en orden descendente) en el arreglo en cada iteración. Luego, intercambia este elemento con el primero que no haya sido ordenado. Esto crea dos sub-listas, una ordenada y otra por ordenar.

![](/images/selection-sort.gif)

## [Insertion Sort](insertion-sort.ts)

El algoritmo de ordenamiento por inserción funciona dividiendo la colección en dos partes: una parte ordenada y una parte por ordenar. Inicialmente, la parte ordenada contiene un solo elemento, el primer elemento de la colección. Luego, en cada iteración, el algoritmo toma un elemento de la parte por ordenar y lo coloca en la posición correcta en la parte ordenada.

Es similar a organizar una mano de cartas: a medida que se recogen las cartas, se insertan en la posición correcta en la mano ordenada. El algoritmo sigue este proceso hasta que todos los elementos de la colección estén en la parte ordenada, y la colección completa está ordenada.

![](/images/insertion-sort.gif)

## [Shell Sort](merge-sort.ts)

El algoritmo de ordenamiento Shell Sort es una extensión y mejora del algoritmo de inserción. Opera dividiendo el arreglo en varias subsecuencias más pequeñas, que se ordenan independientemente utilizando el algoritmo de inserción. Luego, gradualmente reduce el espacio entre los elementos a ordenar y aplica repetidamente el algoritmo de inserción en subarreglos más pequeños hasta que todo el arreglo esté ordenado.

A diferencia del algoritmo de inserción, Shell Sort permite que los elementos distantes se comparen y muevan en una etapa temprana, lo que acelera la convergencia hacia una solución ordenada.

![](/images/shell-sort.gif)

## [Merge Sort](merge-sort.ts)

El algoritmo de ordenamiento Merge Sort se basa en la estrategia de dividir el arreglo en dos mitades, ordenar cada mitad por separado y luego combinar las mitades ordenadas en un solo arreglo ordenado. La clave de Merge Sort es la fusión de dos arreglos ordenados para crear un tercer arreglo ordenado.

El algoritmo Merge Sort se divide en dos pasos principales:

1. **División (Splitting)**: El arreglo original se divide en dos mitades aproximadamente iguales. Este proceso se repite de manera recursiva hasta que cada subarreglo contenga un solo elemento. Un arreglo de un solo elemento se considera automáticamente ordenado.

2. **Combinación (Merging)**: Las mitades ordenadas se fusionan para formar un solo arreglo ordenado. Durante este proceso, los elementos se comparan y colocan en su posición correcta en el nuevo arreglo.

![](/images/merge-sort.gif)

## [Quick Sort](quick-sort.ts)

El algoritmo de ordenamiento Quick Sort se basa en dividir el arreglo en subarreglos más pequeños, ordenar cada subarreglo por separado y luego combinar los subarreglos ordenados para obtener el arreglo final ordenado.

El algoritmo de Quick Sort opera de la siguiente manera:

1. **Elección del pivote (Pivot Selection)**: Se selecciona un elemento del arreglo, llamado "pivote". La elección del pivote puede influir en el rendimiento del algoritmo, pero comúnmente se elige el primer elemento, el último elemento o un elemento aleatorio del arreglo.

2. **Partición (Partitioning)**: Los elementos del arreglo se reorganizan de manera que todos los elementos menores o iguales al pivote estén a su izquierda, y todos los elementos mayores al pivote estén a su derecha. El pivote se coloca en su posición final en el arreglo. Este proceso se realiza de manera que no sea necesario ordenar los elementos en la partición.

3. **Recursión**: Se aplica el mismo algoritmo a las dos subparticiones generadas por el paso anterior (los elementos a la izquierda y a la derecha del pivote). Este proceso se repite de manera recursiva hasta que se haya ordenado todo el arreglo.

4. **Combinación**: No es necesario realizar una etapa de combinación explícita, ya que los elementos se organizan en su posición correcta durante la partición y recursión.

![](/images/quick-sort.gif)