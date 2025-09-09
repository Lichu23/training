//@ts-nocheck
// Continentes representados
// Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron 
// para asistir a una meetup. La función debe devolver true si existe al menos una persona
//  de cada continente (Africa, Americas, Asia, Europe, Oceania).

// Nota: Los continentes siempre estarán presentes y escritos correctamente.




export default function Continents() {

    const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']


    function continentesRepresentados(developers: []) {
        
        const continents = developers.map((developer) => developer.continent)

        // const continents = new Set(continentsMapped) //evitar duplicados
        console.log(continents)

        const continentsResuult = allContinents.every((originContinent) => {
            const result = continents.includes(originContinent)
            // const result = continents.has(originContinent) //si utilizamos Set
         

            return result
        })

        return continentsResuult

    }

    console.log(`existe al menos una persona de cada continente`, 
        continentesRepresentados([
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
])
)

    
  return (
    <div>Continents</div>
  )
}
