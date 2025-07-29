//@ts-nocheck

//Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con
// solo los elementos que aparecen una cantidad pares de veces.

// ["A","B","A","C","C","C","C"] // -> ["A","C"]
// [1,2,3,1,2] // -> [1,2]

export default function IsPar() {
  function isParFunction(array: []) {
    const values = array.reduce((acc, currrentValue) => {
      acc[currrentValue] = (acc[currrentValue] | 0) + 1;
      return acc;
    }, {});

    const entriesValues = Object.entries(values);
    const valuesPares = entriesValues.filter((value) => value[1] % 2 === 0);
    const objectPares = valuesPares.map((value) => value[0]);

    if (objectPares.length === 0) {
      console.log("false");
    } else {
      console.log(objectPares);
    }
  }
  isParFunction(["A","A", "B","C", "C", "C", "C"]);
  return <div>IsPar</div>;
}
