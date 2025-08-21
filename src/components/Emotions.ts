//@ts-nocheck
// Ordenar emociones
// Tendrás una función llamada "ordenarEmociones" que devolverá un arreglo de emociones ordenadas. Tiene dos parámetros, el primer parámetro llamado "emociones"
//  esperará un arreglo de emociones donde una emoción será una de las siguientes:

// ":D" -> Súper Feliz
// ":)" -> Feliz
// ":|" -> Normal
// ":(" -> Triste
// "T_T" -> Súper Triste
// Y el segundo parámetro se llama orden, si este parámetro es true, entonces el orden de las emociones será descendente (de Súper Feliz a Súper Triste),
// si es false, entonces será ascendente (de Súper Triste a Súper Feliz)

export default function Emotions() {
  const arrEmotions = [":D", "T_T", ":("];

  function sortEmotions(array, order) {
    const rank = {
      ":D": 5,
      ":)": 4,
      ":|": 3,
      ":(": 2,
      T_T: 1,
    };

    return array.sort((a, b) => {
      return order ? rank[b] - rank[a] : rank[a] - rank[b];
    });
  }

  //redo
  return console.log("Sort emotions:", sortEmotions(arrEmotions, true));
}

Emotions();
