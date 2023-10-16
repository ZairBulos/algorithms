# Algoritmos de Búsqueda

Los procesos de búsqueda involucran recorrer un arreglo completo con el fin de encontrar algo. Lo más común es buscar el menor o mayor elemento (cuando es puede establecer un orden), o buscar el índice de un elemento determinado.

## [Linear Search](linear-search.ts)

La búsqueda lineal, también conocida como búsqueda secuencial, comienza desde el principio de la lista y avanza elemento por elemento en orden secuencial hasta que el elemento deseado sea encontrado o se alcance el final de la lista. La búsqueda lineal es efectiva tanto en listas ordenadas como desordenadas, pero su rendimiento puede no ser óptimo en listas muy largas, ya que su complejidad es lineal en el peor de los casos.

## [Binary Search](binary-search.ts)

La búsqueda binaria es un algoritmo de búsqueda eficiente utilizado para encontrar un elemento en una lista ordenada. Este método aprovecha el hecho de que la lista está ordenada y opera dividiendo repetidamente el espacio de búsqueda a la mitad, comparando el elemento medio con el elemento buscado y descartando la mitad en la que el elemento buscado no puede estar. Luego, repite este proceso hasta que el elemento deseado sea encontrado o se determine que no está presente. La búsqueda binaria es especialmente eficiente para listas largas, ya que su complejidad es logarítmica, lo que significa que reduce significativamente el número de comparaciones necesarias en comparación con la búsqueda lineal.

## [Ternary Search](ternary-search.ts)

La búsqueda ternaria es un algoritmo de búsqueda utilizado para encontrar un elemento específico en un conjunto de datos ordenados. A diferencia de la búsqueda binaria, que divide el espacio de búsqueda en dos partes iguales, la búsqueda ternaria divide el espacio de búsqueda en tres partes aproximadamente iguales. Esto se logra calculando dos puntos intermedios en el rango de búsqueda.

El algoritmo de Ternary Search es eficiente en situaciones donde los datos están distribuidos de manera uniforme y su complejidad es logarítmica en base 3 (O(log3 n)), lo que lo hace más eficiente que la búsqueda binaria en tales casos. Sin embargo, en situaciones donde los datos no están uniformemente distribuidos, la búsqueda ternaria puede no ser tan eficiente.

## [Interpolation Search](interpolation-search.ts)

La búsqueda por interpolación es un algoritmo de búsqueda que se utiliza para encontrar un elemento específico en un conjunto de datos ordenados. A diferencia de la búsqueda binaria, que divide el espacio de búsqueda en dos partes iguales, la búsqueda por interpolación estima la posición del elemento deseado utilizando una fórmula y ajusta el rango de búsqueda en consecuencia.

El algoritmo de Interpolation Search es más eficiente que la búsqueda binaria en ciertos casos, especialmente cuando los datos no están uniformemente distribuidos y la posición del elemento deseado puede ser estimada de manera más precisa. Sin embargo, no es tan robusto como la búsqueda binaria, ya que asume una distribución uniforme de los datos.