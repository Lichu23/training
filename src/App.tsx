//@ts-nocheck

// import { Provider } from "react-redux";
// import LoginForm from "./interview-exersises/Login/LoginForm";
// import { store } from "./interview-exersises/redux/CounterSlice";
import { ThemeProvider } from "./components/interview-28-8-2025/ContextExercise";
import ThemeView from "./components/interview-28-8-2025/Exercise3";

function App() {
  return (
    <ThemeProvider >
      <ThemeView />
    </ThemeProvider>
  );
}

export default App;
