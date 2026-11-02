// Problema 3: matriz transpuesta de una lista de listas usando funciones lambda.

const esRectangular = (X) => X.every((fila) => Array.isArray(fila) && fila.length === X[0].length);

/**
 * Calcula la transpuesta de X: el elemento (i, j) pasa a la posición (j, i).
 * Devuelve una nueva lista de listas y no modifica la original.
 *
 * @param {Array<Array<*>>} X
 * @returns {Array<Array<*>>}
 */
export const transpuesta = (X) => {
  if (!Array.isArray(X)) throw new TypeError('La matriz debe ser un arreglo de arreglos.');
  if (X.length === 0) return [];
  if (!esRectangular(X)) throw new RangeError('Todas las filas deben tener la misma longitud.');

  return X[0].map((_, j) => X.map((fila) => fila[j]));
};
