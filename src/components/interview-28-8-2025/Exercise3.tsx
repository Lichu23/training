//@ts-nocheck
import { ThemeContext } from "./ContextExercise";
import { useContext } from "react";

export default function ThemeView() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black text-white"} h-dvh`}>
      <h1 className="text-3xl">El tema es {theme}</h1>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}
