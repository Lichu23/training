// Muestre un número en pantalla (inicialmente 0).

import { useState } from "react"

// Tenga dos botones: “Incrementar” y “Decrementar”.

// Cada botón actualiza el número correctamente usando useState.

export const Exercise1 = ()  => {

  const [counter, setCounter] = useState(0)
  

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>Sum</button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>Sub</button>
    </div>
  )
}
