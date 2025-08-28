//@ts-nocheck
// Encontrar la media
// Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que encuentre la
// media de edad entre los inscriptos.

const desarrolladores = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

function findAverage(array) {
  const ages = array.map((desarrollador) => {
    return desarrollador.age;
  });

  const agesLength = ages.length;

  const media = ages.reduce((acc, currentVal) => {
    const totalAges = acc + currentVal;

    return totalAges / agesLength;
  });

  return media
}

console.log(`Cual es la edad media entre 30 y 70?:`, findAverage(desarrolladores))
