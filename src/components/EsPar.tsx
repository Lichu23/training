//@ts-nocheck
// Elementos pares
// Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos que aparecen una cantidad pares de veces.

// ["A","B","A","C","C","C","C"] -> ["A","C"]
// [1,2,3,1,2] // -> [1,2]

export default function EsParView() {
  const lettersArray = ["A", "B", "A", "C", "C", "C", "C"];
  const pares = [];
  const impares = [];
  let lettersWithKey = {};
  console.log(lettersWithKey);

  function findEvenElements(array: string[]) {
    array.forEach((item) => {
      if (lettersWithKey[item]) {
        lettersWithKey[item]++;
      } else {
        lettersWithKey[item] = 1;
      }
    });
    const entries = Object.entries(lettersWithKey);

    entries.forEach((item) => {
      const count = item[0];
      if (item[1] % 2 === 0) {
        pares.push(count);
      } else {
        impares.push(count);
      }
    });
    console.log(pares);
  }

  findEvenElements(lettersArray);

  return <p>Hola</p>;
}
