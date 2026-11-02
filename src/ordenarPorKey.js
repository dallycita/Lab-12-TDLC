// Problema 2: ordenar una lista de diccionarios (objetos) según una key,
// usando únicamente funciones lambda (arrow functions).

// Compara dos valores primitivos: números de forma numérica y el resto
// como texto, respetando acentos y mayúsculas del español.
const compararValores = (a, b) =>
  typeof a === 'number' && typeof b === 'number'
    ? a - b
    : String(a).localeCompare(String(b), 'es', { numeric: true });

// Los objetos que no tienen la key se envían al final, conservando su orden.
const tieneKey = (key) => (obj) => Object.hasOwn(obj, key);

/**
 * Devuelve una nueva lista ordenada por `key`, sin modificar la original.
 * El ordenamiento es estable: los elementos con el mismo valor mantienen
 * su orden relativo.
 *
 * @param {Array<Object>} lista
 * @param {string} key
 * @param {{ descendente?: boolean }} [opciones]
 * @returns {Array<Object>}
 */
export const ordenarPorKey = (lista, key, { descendente = false } = {}) => {
  if (!Array.isArray(lista)) throw new TypeError('La lista debe ser un arreglo.');
  const signo = descendente ? -1 : 1;
  const conKey = tieneKey(key);

  return lista.toSorted((a, b) =>
    conKey(a) && conKey(b)
      ? signo * compararValores(a[key], b[key])
      : Number(!conKey(a)) - Number(!conKey(b))
  );
};
