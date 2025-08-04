//@ts-nocheck
// Elementos pares
// Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos que aparecen una cantidad pares de veces.

// ["A","B","A","C","C","C","C"] -> ["A","C"]
// [1,2,3,1,2] // -> [1,2]

export default function EsPar() {
  function isEven(array: []) {
    const pares = array.reduce((acc, item) => {
      if (acc[item]) {
        acc[item]++;
      } else {
        acc[item] = 1;
      }
      return acc;
    }, {});

    const evens = Object.keys(pares).filter(key => {
      return pares[key] % 2 === 0 //acceder al valor asociado a esa key en el objeto original
    })

    return evens
  }

  
  console.log(`cuales son par de este array [1, 1, 1, 2, 2, 3, 3, 3, 3]:`, isEven([1, 1, 1, 2, 2, 3, 3, 3, 3]))
  console.log(`cuales son par de este array ["A","B","A","C","C","C","C"]:`, isEven(["A","B","A","C","C","C","C"]))
  return <div>EsPar</div>;
}
