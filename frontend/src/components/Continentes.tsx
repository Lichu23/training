//@ts-nocheck

// Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron para asistir a una meetup.
// La función debe devolver true si existe al menos una persona de cada continente (Africa, Americas, Asia, Europe, Oceania).

// Nota: Los continentes siempre estarán presentes y escritos correctamente.

export default function Continentes() {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  
  function continentesRepresentados(users: []) {
    const usersContinents = users.map((user) => user.continent);
    const continentsFromUsers = new Set(usersContinents);

    const result = continents.every((continent) => continentsFromUsers.has(continent))
    
    if(result === true) {
      console.log("es true")
    } else {
      console.log("es false")
    }
  }

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
  ]); // true
  return <div>Continentes</div>;
}
