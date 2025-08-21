// Usando map, crea un nuevo array donde cada número se multiplique por 10.

// Usando forEach, imprime en consola cada número multiplicado por 100.

// Usando reduce, calcula la suma de todos los números.

export default function NumbersArrayIterator() {
  const numbers = [1, 2, 3, 4, 5];

  const numbersMap = numbers.map((number) => {
    return number * 10;
  });
  console.log(numbersMap);

  numbers.forEach((number) => {
    console.log(number * 100);
  });

  const numbersReduce = numbers.reduce(
    (acc, currentValue) => acc + currentValue
  );
  console.log(numbersReduce);

  return (
    <>
      <div>Total Reduce:{numbersReduce}</div>
      <div>Numeros * 10: {numbersMap.join(" ")}</div>
    </>
  );
}
