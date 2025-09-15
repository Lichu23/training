//@ts-nocheck
// Ejercicio 2 (Práctico)
// Crea un componente funcional en React que consuma una API para mostrar una lista de usuarios. El componente debe:

import { useEffect, useState } from "react"

// Usar el hook useState para almacenar los datos de los usuarios.
// Usar el hook useEffect para hacer una llamada a la API https://jsonplaceholder.typicode.com/users al montar el componente.
// Mostrar los nombres de los usuarios en una lista (<ul> con <li>).
// Mostrar un mensaje de "Cargando..." mientras los datos se obtienen de la API.
// Manejar errores básicos (por ejemplo, mostrar un mensaje si la llamada a la API falla).


export default function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(() => {
        async function getUsers() {
          try {
              setLoading(true)
            const res =  await fetch(url)
            if(!res.ok) {
                setErrorMessage("Ocurrio un error al obtener los usuarios")
            }
            const data = await res.json()
            
            setUsers(data)
          } catch (error) {
            setErrorMessage(`Ocurrio un error al obtener los datos ${error}`)
            console.log(error)
          } finally {
            setLoading(false)
          }
        }
        getUsers()
    }, [])

    if(loading) return <p>Cargando usuarios...</p>
  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            {errorMessage && <p>Ocurrio un error al obtener los usuarios</p>}
        </ul>
    </div>
  )
}
