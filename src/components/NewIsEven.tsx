//@ts-nocheck

// Elementos pares
// Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos
// que aparecen una cantidad pares de veces.

// ["A","B","A","C","C","C","C"] // -> ["A","C"]
// [1,2,3,1,2] // -> [1,2]

export default function NewIsEven() {

  function isEven(array: []) {
    const count = array.reduce((acc, item) => {
      if (acc[item]) {
        acc[item]++;
      } else {
        acc[item] = 1;
      }

      return acc;
    }, {});
    
    const pares = Object.keys(count).filter((key) => {
        return count[key] % 2 === 0
    })

    console.log(pares)
  }

  isEven(["A", "B", "A", "C", "C", "C", "C"]);
  return <div>NewIsEven</div>;
}
