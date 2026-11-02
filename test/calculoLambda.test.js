import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  TRUE,
  FALSE,
  NOT,
  aBooleano,
  deNumero,
  aNumero,
  repetir,
  factorial,
} from '../src/calculoLambda.js';

test('NOT invierte los booleanos de Church', () => {
  assert.equal(aBooleano(NOT(TRUE)), false);
  assert.equal(aBooleano(NOT(FALSE)), true);
  assert.equal(aBooleano(NOT(NOT(TRUE))), true);
});

test('numerales de Church ida y vuelta', () => {
  for (const n of [0, 1, 5, 10]) assert.equal(aNumero(deNumero(n)), n);
});

test('un numeral funciona como ciclo de n iteraciones', () => {
  assert.equal(repetir(5, (x) => x + 2, 0), 10);
  assert.equal(repetir(0, (x) => x + 2, 7), 7);
});

test('factorial con el combinador Z', () => {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(5), 120);
  assert.equal(factorial(10), 3628800);
});
