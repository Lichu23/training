//@ts-nocheck
// Isograma
// Un isograma es una palabra que no tiene letras repetidas. Consideraciones Adicionales:

// Un string vacío es un isograma.
// La función tiene que ser case insensitive e ignorar acentos.
// Si el string tiene mas de una palabra retornar false.
// Se tiene que hacer clean up del string antes de comparar.
// Ejemplos:

// func("Murciélago"); // returns true
// func("reto"); // returns false
// func("Casa"); // returns false
// func("PeRrO"); // returns false
// func("GaTo"); // returns true

export const IsIsograma = () => {
  function isograma(word: string) {
    const wordClean = word
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "").trim()

      const lenghtWord = wordClean.split(" ")


    if (lenghtWord.length >= 2) return false;

    if (wordClean === "") return true;

    const wordsRepeat = [];

    for (const letter of wordClean) {
      if (wordsRepeat.includes(letter)) {
        return false;
      }

      wordsRepeat.push(letter);
    }
    return true;
  }

  const isIsograma = isograma("Murciélago");

  console.log(`es isograma Murciélago? : `, isIsograma);
  return <div>isIsograma</div>;
};
