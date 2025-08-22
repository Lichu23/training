//@ts-nocheck

// import { Provider } from "react-redux";
// import LoginForm from "./interview-exersises/Login/LoginForm";
// import { store } from "./interview-exersises/redux/CounterSlice";
import { ThemeProvider } from "./interview-exersises/theme-context/ThemeProvider";
import ThemeView from "./interview-exersises/theme-context/ThemeView";

function App() {
  return (
    <ThemeProvider >
      <ThemeView />
    </ThemeProvider>
  );
}

export default App;
