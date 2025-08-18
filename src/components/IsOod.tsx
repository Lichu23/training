//@ts-nocheck
// Encontrar al impar
// Dado un arreglo de números enteros, encontrar aquel que 
// aparece un número impar de veces.

// [7]; // => 7, porque aparece 1 vez (que es impar).
// [0]; // => 0, porque aparece 1 vez (que es impar).
// [1, 1, 2]; // => 2, porque aparece 1 vez (que es impar).
// [0, 1, 0, 1, 0]; // => 0, porque aparece 3 veces (que es impar).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]; // => 4, porque aparece 1 vez (que es impar).

export default function IsOod() {

  function isOod (array: []) {

    const oodNumbers = array.reduce((acc, currentValue) => {

      if(!acc[currentValue]) {
        acc[currentValue] = 1
      } else {
        acc[currentValue]++
      }

      return acc
    }, {})
    
    const ood = Object.keys(oodNumbers).filter((key) => {
     return oodNumbers[key] % 2 !== 0  
    })

    return ood.join("")
  }

console.log(`cual de estos numeros en el array aparecen de manera impar[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]:`, isOod([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
  return (
    <div>IsOod</div>
  )
}
