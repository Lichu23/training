//@ts-nocheck

// Crea un componente de React que reciba una lista de nombres como props y muestre:

// Todos los nombres en una lista ordenada (<ol>).

// Un input de texto que permita filtrar los nombres en tiempo real (case insensitive).

// Si no hay coincidencias, mostrar el mensaje: "No se encontraron resultados.".



import React from 'react'

export default function Exercise1({filteredNames}) {

    if(filteredNames.length === 0 ) return <p>No se encontraron resultados</p>

  return (
    <div>
        <ol>
            {filteredNames.map((nombre) => (
                <li key={nombre}>{nombre}</li>
            ))}
        </ol>
    </div>
  )
}
