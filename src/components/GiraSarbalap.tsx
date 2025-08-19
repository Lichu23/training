// Gira sarbalap
// Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena,
// pero con todas las palabras de cinco o más letras invertidas (como el nombre de esta Kata).
// Las cadenas pasadas solo consistirán en letras y espacios. Los espacios solo se incluirán cuando haya más
// de una palabra presente.

// Ejemplos
// girar("Esto es una prueba"); // => "Esto es una abeurp"

export default function GiraSarbalap() {
  function girar(text: string) {
    const newArray: string[] = [];
    const textModifed = text.trim().split(" ")
    for (let i = 0; i < textModifed.length; i++) {
      if (textModifed[i].length >= 5) {
        const sarbalap = textModifed[i].split("").reverse().join("");
        newArray.push(sarbalap);
      } else {
        newArray.push(textModifed[i]);
      }
    }

    return newArray.join(" ");
  }
  console.log(`text sarbalap:`, girar("Esto es una prueba")); // => "Esto es una abeurp"

  return <div>GiraSarbalap</div>;
}
