// Ejercicio 1 (Práctico)
// Crea un componente funcional en React que implemente un contador simple. El componente debe:

// Mostrar un número inicial en 0.
// Tener dos botones: uno para incrementar el contador en 1 y otro para decrementarlo en 1.
// Usar el hook useState para manejar el estado del contador.
// Asegurarse de que el contador no pueda ser menor que 0 (es decir, no permitir números negativos).

import React, { useState } from 'react'

export default function Counter() {
  const [counter,setCounter] = useState(0)
  
  function increment() {
    setCounter((count) => count + 1)
  }

   function decrement() {
    if(counter === 0 ) return
    setCounter((count) => count - 1)
  }
    return (
    <div>
        <h1>Counter{counter}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
