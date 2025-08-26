//@ts-nocheck
// Crear un ThemeContext con un Provider que maneje theme y setTheme.

import { createContext, useState } from "react";

// Crear un componente que consuma ese contexto (ThemeView) y pueda cambiar entre "light" y "dark".

// Aplicar clases o estilos condicionales según el tema.

// Si quieres, podemos hacerlo uno a uno como antes: primero el Provider, luego el componente que consume el contexto,
// tú lo haces y yo te doy feedback.

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
