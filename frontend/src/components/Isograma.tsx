//@ts-nocheck
// Isograma
// Un isograma es una palabra que no tiene letras repetidas. Consideraciones Adicionales:

// Un string vacío es un isograma.
// La función tiene que ser case insensitive e ignorar acentos.
// Si el string tiene mas de una palabra retornar false.
// Se tiene que hacer clean up del string antes de comparar.

export default function Isograma() {

  function isIsogrma(wordToChange: string) {
    if (wordToChange.trim() === "") return console.log(true);
    
    const wordNormalize = wordToChange.normalize("NFD");
    const wordWithoutAccent = wordNormalize
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

    if(wordWithoutAccent.includes(" ")) {
        return false
    }

    const letters = [];

    for (const letter of wordWithoutAccent) {
      const isograma = letters.includes(letter);
      if (isograma === true) {
        return false
      }
      letters.push(letter);
    }

    return true
  }

  console.log(`Es "GaTó" un isograma?: ${isIsogrma("GaTó")}`)

  return <div>Isograma</div>;
}
