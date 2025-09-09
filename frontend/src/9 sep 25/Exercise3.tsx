// Crea un componente funcional llamado ToggleTheme que:

import { useState } from "react"

// Tenga un botón para alternar entre modo claro y modo oscuro.

// Cambie el color de fondo y el texto según el tema.

// Use useState para manejar el tema.

export default function Exercise3() {
  const [theme, setTheme] = useState<"light" | "dark">("light")


  return (
    <div className={`${theme === "light" ? "text-black bg-white  h-dvh" : "text-white bg-black h-dvh"}`}>
      <h1>Theme</h1>
      <p>Hola gente</p>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
    </div>
  )
}
