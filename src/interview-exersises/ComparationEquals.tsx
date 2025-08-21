//@ts-nocheck
import React, { useState } from "react";

export default function ComparationEquals() {
  const [inputValue, setInputValue] = useState("");
  const [doble, setDoble] = useState(null);
  const [triple, setTriple] = useState(null);
  function handleCompare() {
    if (inputValue.trim() === "") return;

    const value = inputValue;

    setDoble(value == 10);

    setTriple(value === 10);
  }

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCompare}>Comparar</button>
      <p>Doble Igual: {String(doble)}</p>
      <p>Triple Igual: {String(triple)}</p>
    </div>
  );
}
