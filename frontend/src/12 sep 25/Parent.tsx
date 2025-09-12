//@ts-nocheck
import React, { useEffect, useState } from "react";
import Exercise1 from "./exercise1";

export default function Parent() {
  const nombres = ["Pepe", "Maria", "Lucas", "Gonzalo"];
  const [inputValue, setInputValue] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);


  useEffect(() => {
    const inputValueLower = inputValue.toLowerCase();

    const filterNames = nombres.filter((nombre) =>
      nombre.toLowerCase().includes(inputValueLower)
    );
   
    setFilteredNames(inputValue ? filterNames : nombres);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    
        <Exercise1 filteredNames={filteredNames} />
      
    </div>
  );
}
