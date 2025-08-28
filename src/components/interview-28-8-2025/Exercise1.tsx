//@ts-nocheck
// Debe tener un estado todos (array de objetos con id y text).

import { useState } from "react";

// Tener un input y un botón para agregar nuevos todos.

// Cada todo debe poder eliminarse mediante un botón.

// Renderizar la lista en un <ul>.

// Hazlo, compártelo cuando lo termines, y te doy feedback antes de pasar al siguiente.

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {

    if(inputValue.trim() === "") return 
    const id = Math.floor(Math.random() * 9999);

    setTodos([...todos, { id: id, text: inputValue }]);
    setInputValue("")
  }

  function deleteTodo(todoId) {
    const filteredTodo = todos.filter((todo) => todo.id !== todoId)

    setTodos(filteredTodo)
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        className="border"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Agregar</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
