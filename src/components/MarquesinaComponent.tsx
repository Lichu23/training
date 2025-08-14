//@ts-nocheck
// Marquesina
// Crea una función llamada "marquesina()" que acepte una cadena de texto 
// como argumento y devuelva un array de cadenas de texto,
//  donde cada letra de la cadena de entrada sea rotada al final.

// marquesina("Hola"); // => ["olaH", "laHo", "aHol", "Hola"]

export default function MarquesinaComponent() {
    function marquesina (text:string) {
        const textLength = text.length
        const textArray = text.split("")
        const marquesinaTexts = []

        for (let index = 0; index < textLength; index++) {

            const lastLetter = textArray.pop()
            textArray.unshift(lastLetter)
            marquesinaTexts.push(textArray.join(""))
        }
        console.log(marquesinaTexts)
        return 
    }
    marquesina("Hola")
  return (
    <div>MarquesinaComponent</div>
  )
}
