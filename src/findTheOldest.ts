//@ts-nocheck
// Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que devuelva
// una lista con el desarrollador con más edad.
// En caso de que haya más de uno compartiendo el podio, devolver todos los elementos que lo compartan en el array.

/* [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
] */

const desarrolladores = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

function getOldest(array) {

  const allAges = array.map((desarrollador) => {
    const ages = desarrollador.age
    return ages
  });

  const maxAge = (Math.max(...allAges))

  const oldestDevelopers = array.filter((developer) => {
    return developer.age >= maxAge
  })

  return oldestDevelopers
}

console.log(`QUien/es son los mas viejos?:`, getOldest(desarrolladores))
