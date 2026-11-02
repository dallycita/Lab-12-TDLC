# Laboratorio 12: programación funcional con lambdas

Implementación en **JavaScript (Node.js)** de ejercicios de programación funcional. Todas las soluciones usan funciones lambda (arrow functions) y funciones de orden superior (`map`, `filter`, `toSorted`). Ninguna modifica sus datos de entrada.

## Video

[Ver video explicativo en YouTube](https://youtu.be/Qa7IxLkI5E4)

## Requisitos

- Node.js 20 o superior (no hay dependencias externas)

## Uso

```bash
npm start   # ejecuta los ejemplos de todos los problemas
npm test    # ejecuta las pruebas con el runner integrado de Node
```

## Estructura

```
src/
  calculoLambda.js      Problema 1: booleanos y numerales de Church, combinador Z
  ordenarPorKey.js      Problema 2: ordenar lista de objetos por una key
  transpuesta.js        Problema 3: matriz transpuesta
  eliminarElementos.js  Problema 4: eliminar elementos de una lista
  index.js              Programa principal con los ejemplos
test/                   Pruebas de cada problema (node:test)
teoria/
  Problema1.pdf         Respuestas teóricas del problema 1
```

## Problemas

### 1. Cálculo lambda
Las respuestas están en [`teoria/Problema1.pdf`](teoria/Problema1.pdf): reducción-β de NOT, recursión con el combinador Y, ciclos y cuándo conviene la programación funcional. `src/calculoLambda.js` permite ejecutar esas definiciones.

### 2. Ordenar por key
```js
ordenarPorKey(lista, 'model');                       // ascendente
ordenarPorKey(lista, 'model', { descendente: true });
```
Compara números como números y texto con `localeCompare`. Los objetos sin la key quedan al final. El ordenamiento es estable.

### 3. Transpuesta
```js
transpuesta([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```
Funciona con matrices no cuadradas y rechaza filas de distinta longitud.

### 4. Eliminar elementos
```js
eliminarElementos(['rojo', 'verde', 'amarillo'], ['amarillo', 'cafe']); // ['rojo', 'verde']
```
Los elementos que no están en la lista se ignoran. Usa un `Set` para que la búsqueda sea O(n + m).
