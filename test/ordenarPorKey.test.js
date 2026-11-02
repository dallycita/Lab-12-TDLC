import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ordenarPorKey } from '../src/ordenarPorKey.js';

const telefonos = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];

test('ordena por model (ejemplo del enunciado)', () => {
  assert.deepEqual(ordenarPorKey(telefonos, 'model'), [
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' },
    { make: 'Nokia', model: 216, color: 'Black' },
  ]);
});

test('ordena texto alfabéticamente', () => {
  assert.deepEqual(
    ordenarPorKey(telefonos, 'make').map((t) => t.make),
    ['Mi Max', 'Nokia', 'Samsung']
  );
});

test('ordena numéricamente, no como texto (216 va después de 7)', () => {
  assert.deepEqual(ordenarPorKey(telefonos, 'model').map((t) => t.model), [2, 7, 216]);
});

test('admite orden descendente', () => {
  assert.deepEqual(
    ordenarPorKey(telefonos, 'model', { descendente: true }).map((t) => t.model),
    [216, 7, 2]
  );
});

test('no modifica la lista original', () => {
  const copia = structuredClone(telefonos);
  ordenarPorKey(telefonos, 'model');
  assert.deepEqual(telefonos, copia);
});

test('los objetos sin la key quedan al final', () => {
  const lista = [{ a: 3 }, { b: 1 }, { a: 1 }];
  assert.deepEqual(ordenarPorKey(lista, 'a'), [{ a: 1 }, { a: 3 }, { b: 1 }]);
});

test('lista vacía devuelve lista vacía', () => {
  assert.deepEqual(ordenarPorKey([], 'model'), []);
});

test('rechaza entradas que no son arreglos', () => {
  assert.throws(() => ordenarPorKey(null, 'model'), TypeError);
});
