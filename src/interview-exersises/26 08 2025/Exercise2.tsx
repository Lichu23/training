//@ts-nocheck
//Crear un componente UserFilter.

import { useEffect, useState } from "react";

// Hacer un fetch a https://jsonplaceholder.typicode.com/users usando useEffect.

// Guardar los usuarios en un state users.

// Tener un input para filtrar por nombre (name) en tiempo real.

// Mostrar los usuarios filtrados en un <ul>.

export default function UserFilter() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const filter = users.filter((user) => {
      const userName = user.name.toLowerCase();

      return userName.includes(inputValue.toLowerCase());
    });

    setFilteredUsers(filter)
  }, [users, inputValue]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch(url);
      const data = await res.json();

      if (!data) {
        console.log("Error al obtener ususarios");
      }
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
