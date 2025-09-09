//@ts-nocheck
// Crear un componente UserFilter.

import { useEffect, useState } from "react";

// Hacer un fetch a https://jsonplaceholder.typicode.com/users usando useEffect.

// Guardar los usuarios en un state users.

// Tener un input para filtrar por nombre (name) en tiempo real.

// Mostrar los usuarios filtrados en un <ul>.

export default function UserFilter() {
  const [users, setUsers] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    const filterName = users.filter((user) => {
        const userName = user.name.toLowerCase()

        return userName.includes(inputSearch.toLowerCase())
    })

    setFilteredUsers(inputSearch ? filterName : users)
  }, [inputSearch, users]);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    async function getusers() {
      const res = await fetch(url);
      const data = await res.json();

      setUsers(data);
    }
    getusers();
  }, []);
  return (
    <div>
      <label htmlFor="search-name">Search Name</label>
      <input
        type="text"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
