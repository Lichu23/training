//@ts-nocheck

// 📝 Ejercicio práctico 1:

import { useEffect, useState } from "react";
import UserItem from "./UserItem";

// Crea un componente UsersList que:

// Tenga un state users, un loading y un error.

// Use useEffect para hacer un fetch a https://jsonplaceholder.typicode.com/users.

// Pase la lista de usuarios a un componente hijo UserItem como props para renderizar el nombre.

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) {
          setError("Ocurrio un error al obtener la data");
        }
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(`Ourrio un error: ${error}`);
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  if(loading) return <p>Cargando Usuarioss...</p>
  if(error) return <p>Ocurrio un error</p>


  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
            <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
