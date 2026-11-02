import { test } from 'node:test';
import assert from 'node:assert/strict';
import { eliminarElementos } from '../src/eliminarElementos.js';

test('elimina los colores indicados (ejemplo del enunciado)', () => {
  assert.deepEqual(
    eliminarElementos(
      ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'],
      ['amarillo', 'cafe', 'blanco']
    ),
    ['rojo', 'verde', 'azul', 'gris', 'negro']
  );
});

test('ignora elementos a borrar que no están en la lista', () => {
  assert.deepEqual(eliminarElementos(['a', 'b'], ['z']), ['a', 'b']);
});

test('elimina todas las apariciones de un elemento repetido', () => {
  assert.deepEqual(eliminarElementos([1, 2, 1, 3, 1], [1]), [2, 3]);
});

test('casos borde: listas vacías', () => {
  assert.deepEqual(eliminarElementos([], ['a']), []);
  assert.deepEqual(eliminarElementos(['a'], []), ['a']);
});

test('no modifica las listas de entrada', () => {
  const lista = ['a', 'b', 'c'];
  const aBorrar = ['b'];
  eliminarElementos(lista, aBorrar);
  assert.deepEqual(lista, ['a', 'b', 'c']);
  assert.deepEqual(aBorrar, ['b']);
});

test('rechaza argumentos que no son arreglos', () => {
  assert.throws(() => eliminarElementos('abc', []), TypeError);
});
