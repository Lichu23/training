//@ts-nocheck
// Marquesina
// Tu familia tiene una tienda y acaban de adquirir una marquesina para ayudar a conseguir más negocios.

// Crea una función llamada "marquesina()" que acepte una cadena de texto como argumento y devuelva un array de cadenas de texto, donde cada letra de la cadena de entrada sea rotada al final.

// marquesina("Hola"); // => ["olaH", "laHo", "aHol", "Hola"]
// Nota
// La cadena original debe estar incluida en el array de salida. El orden es importante.
// Cada elemento del array de salida debe ser la versión rotada del elemento anterior.

export default function MarquesinaView() {
  function marquesina(text: string) {
    const textLenght = text.length;
    const textArray = text.split("");
    const newArray = []
    for (let index = 0; index <= textLenght - 1; index++) {

      const lastLetter = textArray.pop();
      textArray.unshift(lastLetter);
      newArray.push(textArray.join(""))
    }
    console.log(newArray);
    return newArray
  }

  marquesina("Hola");

  return <div>Marquesina</div>;
}
