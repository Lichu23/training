//@ts-nocheck
// Pedir detalles
// Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup,
// escribir una función que chequee por propiedades en null y en caso de encontrar,
// agregar una una propiedad question con el valor: Hi, could you please provide your <property name>.
// Solo se deberían devolver los desarrolladores que contienen la propiedad question.

const desarrolladores = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

function providerQuestion(developArr) {
  return developArr.map((dev) => {
    const nullsEntry = Object.entries(dev).find(
      ([key, value]) => value === null
    );

    if (nullsEntry) {
      const [propName] = nullsEntry;

      return {
        ...dev,
        question: `Hi, could you please provide your ${propName}`,
      };
    }

    return null;
  });
}

console.log(`Encuentra los nulls ya grega question prop:`, providerQuestion(desarrolladores))
/*
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
*/
