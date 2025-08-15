//@ts-nocheck
import { useEffect, useState } from "react";

export default function GetData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUser] = useState([]);

  function searchUsers() {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredUser(filtered);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <label htmlFor="searchUser">Search user</label>
      <input
        className="border rounded-xl"
        id="searchUser"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={searchUsers}>Search Users</button>
      {error && <p>Ocurrio un error al obtener los usuarios</p>}
      <ul>
        {(inputValue ? filteredUsers : users).map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
