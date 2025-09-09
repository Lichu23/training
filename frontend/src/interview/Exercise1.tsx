// Ejercicio 1 – React (useState + useEffect)

// 👉 Enunciado:
// Crea un componente que:

// Tenga un input para escribir un nombre.

// Al presionar un botón, muestre en pantalla: "Hola, [nombre]!".

// Usa useEffect para loguear en consola cada vez que el nombre cambie.

// ⏱️ Tiempo estimado: 10-15 minutos

import React, { useEffect, useState } from "react";

export default function Exercise1() {
  const [inputValue, setInputValue] = useState("");
  const [saludo, setSaludo] = useState("");

  function showMessage() {
    if(inputValue.trim() === "") return
    setSaludo(`Hola, ${inputValue}`);
  }

  useEffect(() => {
    console.log(saludo)
  }, [saludo])

  return (
    <>
        {saludo === "" ? "": <h1>{saludo}</h1>}
      <input
        className=" border-2"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={showMessage}>Saludo</button>
    </>
  );
}
