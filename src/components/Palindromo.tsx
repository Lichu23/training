//@ts-nocheck
// Palindromos
// Un palindromo es una palabra, frase, número o secuencia de caracteres que se lee
// igual al derecho o al reves.
// Ejemplo:

import { useState } from "react";

export default function Palindromo() {

    function isPalindromo(characteres) {

        const characteresToString = characteres.toString().toLowerCase()
        console.log(characteresToString)
        const characteresReverse = characteresToString.split("").reverse().join("")
        console.log(characteresReverse)

        if(characteresToString !== characteresReverse ) {
            return false
        }

        return true

    }

    console.log(`es palindromo radar?:`, isPalindromo(1221))

  return (
    <div>Palindromo</div>
  )
}

interface Item {
  id: number;
  text: string;
}

export const InterviewExersise = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  function createItem() {
    if (inputValue.trim() === "") return;

    const newId = Math.floor(Math.random() * 999);

    const newItem: Item = { id: newId, text: inputValue };

    setItems((prevItems) => [...prevItems, newItem]);
    setInputValue("");
  }

  function deleteItem(itemId: number) {
    const filteredItems = items.filter((item) => item.id !== itemId);
    setItems(filteredItems);
  }

  return (
    <>
      <input
        className="border border-black"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={createItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li className="flex gap-5" key={item.id}>
            {item.text}
            <button aria-label="Delete" onClick={() => deleteItem(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const InterviewExersise2 = () => {
  const products = [
    { id: 1, name: "Camisa", price: 25 },
    { id: 2, name: "Pantalón", price: 40 },
    { id: 3, name: "Zapatos", price: 60 },
    { id: 4, name: "Gorra", price: 15 },
  ];

  const productsMoreThan20 = products.filter((product) => product.price >= 20);
  const productsName = productsMoreThan20.map((product) => product.name);
  console.log(productsName);
  const productsPrice = productsMoreThan20.reduce(
    (acc, product) => acc + product.price,
    0
  );

  //simplificado
//   const result = products
//   .filter(product => product.price >= 20)
//   .map(product => product.name);

//   const totalPrice = products
//   .filter(product => product.price >= 20)
//   .reduce((sum, product) => sum + product.price, 0);


  console.log(productsPrice);

  return(
    <p>hola</p>
  )
};
