//@ts-nocheck

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeView() {

    const {theme, setTheme} = useContext(ThemeContext)

  return (
      <div className={`${theme === "dark" ? "bg-black h-dvh text-white" : ""}`}>
        <h1>ThemeView</h1>
        <p>El tema actual es:{theme}</p>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>
  );
}
