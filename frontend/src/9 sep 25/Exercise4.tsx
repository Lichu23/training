//@ts-nocheck
// Crea un componente funcional llamado SearchFilter que:

import { useEffect, useState } from "react"

// Tenga un input de búsqueda y una lista de nombres (["Ana", "Pedro", "Maria", "Juan"]).

// Filtre la lista en tiempo real según lo que el usuario escribe.

// Use useState para manejar el input y mostrar solo los nombres que coincidan.

export default function Exercise4() {
  const [inputValue, setInputValue] = useState("")
  const [filteredNames, setFilteredNames] = useState(null)
  const [names, setNames] = useState(["Ana", "Pedro", "Maria", "Juan"])

  useEffect(() => {
    const inputSearchLower = inputValue.toLowerCase()
    const filteredSearchNames = names.filter((name) => name.toLowerCase().includes(inputSearchLower))
    
      setFilteredNames(inputValue ? filteredSearchNames : names)
  }, [inputValue, names])

  return (
    <div>
      <h1>Search Filter</h1>
      <label htmlFor="search">Search Name</label>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ul>
        {filteredNames?.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
