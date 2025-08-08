// String termina con
// Hacer una función que reciba 2 strings (siempre los va a recibir),
// y devuelva si el primero termina con el segundo. Ejemplos:

// func("abc", "bc"); // returns true
// func("abc", "d"); // returns false

export default function StringEndsWith() {
  function isEndsEqual(first: string, second: string) {
    //manera optimizada: return first.endsWith(second) 

    //Como lo resolvi yo:
    const secondLenght = second.length + 1
    let pasadas = 0;
    const finalFirstLetters = [];
    const reverseLetters = first.split("").reverse().join("");

    for (const letter of reverseLetters) {
      pasadas++;
      if (pasadas >= secondLenght) {
        break
      }

      console.log(`Push numero:${pasadas}`);
      finalFirstLetters.push(letter);
    }


     const finalCleanLetter = finalFirstLetters.reverse().join("")

     if(finalCleanLetter !== second) {
        return false
     }

     return true
  }

  const equal = isEndsEqual("abc", "bc");
  console.log(`"abc" termina igual que "bc" ? ${equal}`)
  return <div>StringEndsWith</div>;
}
