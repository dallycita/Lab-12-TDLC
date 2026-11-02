import { test } from 'node:test';
import assert from 'node:assert/strict';
import { transpuesta } from '../src/transpuesta.js';

test('transpone la matriz 3x3 del enunciado', () => {
  assert.deepEqual(
    transpuesta([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
  );
});

test('transpone matrices no cuadradas (2x3 -> 3x2)', () => {
  assert.deepEqual(
    transpuesta([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ]
  );
});

test('transponer dos veces devuelve la matriz original', () => {
  const X = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  assert.deepEqual(transpuesta(transpuesta(X)), X);
});

test('matriz vacía y vector fila', () => {
  assert.deepEqual(transpuesta([]), []);
  assert.deepEqual(transpuesta([[1, 2, 3]]), [[1], [2], [3]]);
});

test('no modifica la matriz original', () => {
  const X = [
    [1, 2],
    [3, 4],
  ];
  transpuesta(X);
  assert.deepEqual(X, [
    [1, 2],
    [3, 4],
  ]);
});

test('rechaza matrices con filas de distinta longitud', () => {
  assert.throws(() => transpuesta([[1, 2], [3]]), RangeError);
});
