// Apoyo al Problema 1: codificaciones de Church escritas como lambdas de JavaScript.
// Permiten ejecutar las reducciones-β descritas en teoria/Problema1.pdf.

// Booleanos de Church
export const TRUE = (x) => (y) => x;
export const FALSE = (x) => (y) => y;
export const NOT = (p) => p(FALSE)(TRUE);

// Convierte un booleano de Church a booleano de JavaScript para poder mostrarlo.
export const aBooleano = (b) => b(true)(false);

// Numerales de Church: n = λf.λx.f(f(...f(x))) — n aplicaciones de f.
// Un numeral ya es un "ciclo": repite f exactamente n veces.
export const CERO = (f) => (x) => x;
export const SUC = (n) => (f) => (x) => f(n(f)(x));
export const aNumero = (n) => n((k) => k + 1)(0);
export const deNumero = (k) => (k === 0 ? CERO : SUC(deNumero(k - 1)));

// Ciclo "for" de n iteraciones expresado con un numeral de Church.
export const repetir = (n, f, inicial) => deNumero(n)(f)(inicial);

// Combinador Z: versión del combinador Y para lenguajes con evaluación estricta
// (como JavaScript). Y = λf.(λx.f(x x))(λx.f(x x)) entraría en un ciclo infinito.
export const Z = (f) => ((x) => f((v) => x(x)(v)))((x) => f((v) => x(x)(v)));

// Factorial sin que la función se nombre a sí misma: la recursión la da Z.
export const factorial = Z((fact) => (n) => (n === 0 ? 1 : n * fact(n - 1)));
