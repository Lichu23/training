//@ts-nocheck
// Marquesina
// Crea una función llamada "marquesina()" que acepte una cadena de texto
// como argumento y devuelva un array de cadenas de texto,
//  donde cada letra de la cadena de entrada sea rotada al final.

// marquesina("Hola"); // => ["olaH", "laHo", "aHol", "Hola"]

export default function MarquesinaComponent() {
  function marquesina(text: string) {
    const textClean = text.trim()
    console.log(textClean);
    const textLength = text.length;
    const textArray = textClean.split("");

    const newArray = [];

    for (let index = 0; index < textLength; index++) {
      const lastLetter = textArray.shift();
      textArray.push(lastLetter);
      newArray.push(textArray.join(""));
    }

    return newArray;
  }

  console.log(`marquesina para hola:`, marquesina("Hola"));
  return <div>MarquesinaComponent</div>;
}
