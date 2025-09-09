//@ts-nocheck
// Ejercicio 2:
// Crea un componente funcional llamado TodoList que:

import { useState } from "react"

// Tenga un input para ingresar tareas y un botón “Agregar”.

// Muestre las tareas agregadas en una lista (<ul>).

// Permita eliminar una tarea haciendo clic en un botón “Eliminar” junto a cada item.

export default function Exercise2() {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])

  function addItems() {
    if(inputValue.trim() === "") return
    const id = Math.floor(Math.random() * 999)

    const newItem = {id:id, text:inputValue}

    setItems([...items, newItem])
    setInputValue("")
  }

  function deleteItem(itemId) {
    const filteredItems = items.filter((item) => item.id !== itemId)

    setItems(filteredItems)
  }

  return (
    <div>
      <h1>TodoList</h1>

      <label htmlFor="input-item">Item Name</label>
      <input type="text" id="input-item" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItems}>Agregar</button>

      <ul>{items.map((item) => (
        <li key={item.id}>{item.text} <button className="bg-red-500 text-white text-base p-1 rounded-xl" onClick={() => deleteItem(item.id)}>Eliminar</button></li>
      ))}</ul>

    </div>
  )
}
