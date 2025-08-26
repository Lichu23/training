//@ts-nocheck
import React, { useContext } from "react";
import { ThemeContext } from "./Exercise4";

export default function View() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-black text-white h-screen"
          : "bg-white text-black h-screen"
      }`}
    >
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <p>El tema actual es: {theme}</p>
    </div>
  );
}
