//@ts-nocheck
//Empezamos con Ejercicio 1: TodoList:

// Crear un componente TodoList.

// Tener un state todos (array de objetos con id y text).

// Tener un input y un botón para agregar nuevos todos.

// Cada todo debe poder eliminarse mediante un botón.

// Renderizar la lista en un <ul>.

// Hacelo y compartilo cuando lo termines, yo lo evaluo y damos feedback.

import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
}

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");

  const [items, setItems] = useState<Item[]>([]);
  console.log(items);
  console.log(inputValue);

  function addItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    const id = Math.floor(Math.random() * 99999);

    const newItem: Item = { id: id, text: inputValue };

    setItems([...items, newItem]);
    setInputValue("")

  }

  function deleteItem(itemId) {
    const filteredItems = items.filter((item) => item.id !== itemId)
    setItems(filteredItems)
  }

  return (
    <div>
      <form onSubmit={addItem} action="">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button>Agregar item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li className="text-black" key={item.id}>
            {item.text}
            <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
