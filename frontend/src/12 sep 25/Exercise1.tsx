//@ts-nocheck



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
