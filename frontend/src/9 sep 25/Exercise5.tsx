//@ts-nocheck
// Ejercicio 5:
// Crea un componente funcional llamado FetchData que:

import { useEffect, useState } from "react";

// Haga una llamada a la API https://jsonplaceholder.typicode.com/users al montar el componente.

// Muestre los nombres de los usuarios en una lista <ul>.

// Maneje errores y muestre un mensaje si la llamada falla.

// Use useEffect y useState.

export default function Exercise5() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) {
          console.log("Hubo un error al obtener los usuarios");
          setError();
          setLoading(false);
        }
        setUsers(data);
      } catch (error) {
        setLoading(false);
        setMessage(
          "Ocurrio un error al obtener los usuarios o no tienes una url valida"
        );
        setError(`Error:`, error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if(loading) return <p>Loading Users...</p>

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{message}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
