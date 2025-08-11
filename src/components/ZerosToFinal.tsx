//@ts-nocheck
// Mover los ceros al final
// Escribir una función que tome un array de valores y retorne el mismo array pero
// moviendo los ceros al final.

// Ejemplo:

// moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]
// Bonus: Implementar la función sin usar una variable de contador

export default function ZerosToFinal() {
  function moveZeros(array: []) {
    const zeros = [];
    const arrayWithoutZeros = [];

    for (const element of array) {
      if (element === 0) {
        zeros.push(element);
      }

      arrayWithoutZeros.push(element);
    }

    const arrayClean = arrayWithoutZeros.filter((item) => item != 0);
    

    arrayClean.push(zeros);
    const result = arrayClean.flat();

    return result;
  }

;
console.log(`Move zeros to the final array:`,   moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
  return <div>ZerosToFinal</div>;
}
