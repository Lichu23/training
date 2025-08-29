//@ts-nocheck
// Encontrar al aislado
// Dado un array de números enteros, pares o impares, de al menos 3 elementos,
// donde todos los elementos son pares o todos los elementos son impares, excepto uno.
// Escribir una función que tome como parametro el array y devuelva el elemento aislado.

// [2, 4, 0, 100, 4, 11, 2602, 36]  =>  11
// [160, 3, 1719, 19, 11, 13, -21]  =>  160

function findSolo(array) {
  const even = [];

  const odd = [];
  
  if (array.length <= 2) return;

  for (const number of array) {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  }
  if (even.length > odd.length) return odd[0];
  if (odd.length > even.length) return even[0];
}

console.log(`Give the solo:`, findSolo([160, 3, 1719, 19, 11, 13, -21]));
