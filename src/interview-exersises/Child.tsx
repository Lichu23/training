//@ts-nocheck

import { useState } from "react";

export default function Child({  changeMessage }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col">
      <h2>Child</h2>
      <input
      className="border"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => changeMessage(inputValue)}>New Message</button>
    </div>
  );
}
