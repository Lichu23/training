
// Es letra
// Estamos intentando de enseñarle a unos JavaScript developers que en realidad '1' y 1
//  no son lo mismo. Para eso necesitamos que implementes una función que reciba un
// string y devuelva un booleano indicando si el string es una letra o no.

export default function IsLetter() {

  function isLetter(character:string) {
    
    if(typeof character !== "string") {
      return false
    }

    return character >= "a" && character <= "z"
  }

  console.log(isLetter("a"))
  return <div>IsLetter</div>;
}




//Diferenciando por types:
// esUnaLetra("a"); // true
// esUnaLetra("1"); // false

export function IsLetterTypes() {
  function isLetter(character: string) {
    const type = typeof character

    const uno = 1
    const typeNumber = typeof uno
    if(type === typeNumber) {
      return true
    } 

    return false
  }

  console.log(isLetter("a"))
  return <div>IsLetter</div>;
}
