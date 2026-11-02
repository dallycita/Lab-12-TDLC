// Problema 4: eliminar de una lista los elementos indicados, usando funciones lambda.

/**
 * Devuelve los elementos de `lista` que no aparecen en `aBorrar`.
 * Los elementos de `aBorrar` que no están en `lista` simplemente se ignoran.
 * Conserva el orden original y no modifica ninguna de las dos listas.
 *
 * @param {Array<*>} lista
 * @param {Array<*>} aBorrar
 * @returns {Array<*>}
 */
export const eliminarElementos = (lista, aBorrar) => {
  if (!Array.isArray(lista) || !Array.isArray(aBorrar)) {
    throw new TypeError('Ambos argumentos deben ser arreglos.');
  }
  // Un Set da búsquedas O(1), así el filtro completo es O(n + m).
  const borrar = new Set(aBorrar);
  return lista.filter((elemento) => !borrar.has(elemento));
};
