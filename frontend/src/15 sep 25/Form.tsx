//@ts-nocheck
// Ejercicio 3 (Práctico - Último)
// Crea un componente funcional en React que implemente un formulario controlado para registrar un nombre y un correo electrónico. El componente debe:

// Usar useState para manejar los valores de los inputs (nombre y correo).
// Validar que el nombre tenga al menos 3 caracteres y que el correo tenga un formato válido (usando una expresión regular simple).
// Mostrar mensajes de error debajo de cada input si la validación falla.
// Tener un botón de "Enviar" que esté deshabilitado si hay errores de validación.
// Al hacer clic en "Enviar", mostrar una alerta con los datos ingresados (puedes usar alert o console.log).

import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
console.log(email.includes("@"))
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim() === "") {
      return setNameError("El campo no puede estar vaccio");
    }
    if (email.trim() === "") {
      return setEmailError("El campo no puede estar vaccio");
    }

    if (name.length <= 3) {
      return setNameError("El nombre tiene que tener al menos 3 caracteres");
    }

    if (!email.includes("@")) {
      return setEmailError("El email tiene que tener @ para ser valido");
    }

    alert("Formulario subido correctamente");
    setName("");
    setEmail("");
  }

  return (
    <div>
      <h1>Form</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-fit"
        action=""
      >
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            className="border"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="nombre"
          />
          {nameError && <p>{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          {emailError && <p>{emailError}</p>}
        </div>

        <button disabled={nameError || emailError} className="border rounded-xl">Submit</button>
      </form>
    </div>
  );
}
