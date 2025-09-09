//@ts-nocheck
import React, { useState, useEffect } from "react";

export default function Exercise2() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // ✅ Fetch inicial de productos
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // ✅ Agregar un nuevo producto
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!name || !price) return alert("Todos los campos son requeridos");

    const newProduct = { name, price: parseFloat(price) };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]); // actualizar lista en UI
        setName(""); // limpiar formulario
        setPrice("");
      })
      .catch((err) => console.error("Error adding product:", err));
  };

  console.log(name, price)
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>

      <h3>Agregar nuevo producto</h3>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}
