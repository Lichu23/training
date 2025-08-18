import { useState } from "react";

//@ts-nocheck
export default function MapForReduce() {
  //   const numbers = [1, 2, 3, 4, 5];

  //   const numbersSquared = numbers.map((number) => {
  //     return number * number;
  //   });

  //   numbers.forEach((number) => {
  //     console.log(number * 10);
  //   });

  //   const numbersReduce = numbers.reduce((acc, currentValue) => {
  //     return (acc = acc + currentValue);
  //   }, 0);

  //   console.log(numbersReduce);
  //   return <div>MapForReduce</div>;

  // Escribe un pequeño componente en React que tenga un input de texto y un botón.
  // Cuando el usuario escriba un valor y lo compare con un número fijo (por ejemplo 10), muestra en pantalla:

  // Si usas ==: “Con doble igual es true/false”

  // Si usas ===: “Con triple igual es true/false”

  // 👉 Así demostrarías en la práctica la diferencia.

  const [inputValue, setInputValue] = useState("");
  const [compareDouble, setCompareDouble] = useState<boolean | null>(null);
  const [compareTriple, setCompareTriple] = useState<boolean | null>(null);
  function compareValuesFunc1() {
    const value = inputValue;

    setCompareDouble(value == 10);
    setCompareTriple(value === 10);
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={compareValuesFunc1}>Comparar ==</button>

        <p>Doble igual (==): {String(compareDouble)}</p>
        <p>Triple igual (===): {String(compareTriple)}</p>
    </div>
  );
}
