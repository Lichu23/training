export const CountVowel = () => {
  // 1ejercicio:
  // Crear una countVowels que cuente cuantas vocales hay en un string,
  // Ignora mayusculas/minusculas.
  // EJ: countVowel("Hola mundo") // => 4

  const vocales = ["a", "e", "i", "o", "u"];

  function countVowel(palabra: string) {
    const wordLower = palabra.toLocaleLowerCase();

    let count = 0;
    for (const letra of wordLower) {
      // console.log(letra)
      if (vocales.includes(letra)) {
        count++;
      }
    }
    console.log(count);
  }
  countVowel("aaaa");

  return (
    <div>
      <h1 className="text-black">Hola mundo</h1>
    </div>
  );
};
