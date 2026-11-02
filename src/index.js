import { ordenarPorKey } from './ordenarPorKey.js';
import { transpuesta } from './transpuesta.js';
import { eliminarElementos } from './eliminarElementos.js';
import { TRUE, FALSE, NOT, aBooleano, repetir, factorial } from './calculoLambda.js';

const mostrar = (titulo, valor) => {
  console.log(`\n=== ${titulo} ===`);
  console.dir(valor, { depth: null });
};

// Problema 1 (demostración ejecutable)
mostrar('Problema 1: NOT con booleanos de Church', {
  'NOT TRUE': aBooleano(NOT(TRUE)),
  'NOT FALSE': aBooleano(NOT(FALSE)),
  'ciclo (5 veces +2 desde 0)': repetir(5, (x) => x + 2, 0),
  'factorial(5) con combinador Z': factorial(5),
});

// Problema 2
const telefonos = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];
mostrar("Problema 2: original", telefonos);
mostrar("Problema 2: ordenado por key = 'model'", ordenarPorKey(telefonos, 'model'));
mostrar("Problema 2: ordenado por key = 'make'", ordenarPorKey(telefonos, 'make'));

// Problema 3
const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
mostrar('Problema 3: X', X);
mostrar('Problema 3: X^T', transpuesta(X));

// Problema 4
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const aBorrar = ['amarillo', 'cafe', 'blanco'];
mostrar('Problema 4: lista inicial', colores);
mostrar('Problema 4: elementos a borrar', aBorrar);
mostrar('Problema 4: resultado', eliminarElementos(colores, aBorrar));
