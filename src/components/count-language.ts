//@ts-nocheck
// Contar los lenguajes
// Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función
// que cuente la cantidad de desarrolladores que hay para cada lenguaje.

const developers = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

function getLanguageCount(array) {
  const languagesMount = array.map((developer) => {
      return developer.language
  })

  const result = languagesMount.reduce((acc, currentValue) => {
    if(acc[currentValue]) {
      acc[currentValue]++
    } else {
      acc[currentValue] = 1
    }
    return acc
  }, {})

  return result
}

console.log(`Cuantos developers por cada lenguaje hay?:`,getLanguageCount(developers))

// => { C: 2, JavaScript: 1, Ruby: 1 }
