//@ts-nocheck
// Crea un componente LoginForm.x

import { useState } from "react";

// Debe tener dos inputs: email y password.

// Cuando el usuario haga submit:

// Validar que el email contenga un @.

// Validar que la contraseña tenga al menos 6 caracteres.

// Mostrar mensajes de error debajo de cada input si la validación falla.

// Si todo es correcto, mostrar un mensaje: "Login exitoso" en pantalla.

// 💡 Pistas:

// Usa useState para los valores de los inputs.

// Usa otro estado para los errores.

// onSubmit del <form> debe preventDefault() para no recargar la página.

// Empieza escribiendo el esqueleto del formulario y los estados, y luego agregamos la validación.
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  console.log(password);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") return;

    if (password.length <= 5) {
      return setErrorPassword("La contraseña debe tener al menos 6 caracteres");
    }

    if (!email.includes("@")) {
      return setErrorEmail("El email debe contener un '@'");
    }

    setSuccess(true);
    setErrorPassword("");
    setErrorEmail("");
    setEmail("");
    setPassword("");
  }

  if (success) return alert("Login exitoso");

  return (
    <div>
      <form onSubmit={submitForm} action="">
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          id="email"
        />
        {errorEmail && <p>{errorEmail}</p>}
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="password"
          type="password"
        />
        {errorPassword && <p>{errorPassword}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
