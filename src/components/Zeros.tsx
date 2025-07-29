//@ts-nocheck
// Mover los ceros al final
// Escribir una función que tome un array de valores y retorne el mismo array pero moviendo los ceros al final.

// Ejemplo:

// moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]

export default function Zeros() {
  function moverCeros(arrayToChange: []) {
    const zeros = arrayToChange.filter((item) => item === 0);
    const arrayWithoutZeros = arrayToChange.filter((item) => item != 0);

    const newArray = arrayWithoutZeros.concat(zeros);
    console.log(newArray);
    return arrayWithoutZeros
  }

  moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]
  return <div>Zeros</div>;
}
