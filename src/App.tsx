//@ts-nocheck

// import { Provider } from "react-redux";
// import LoginForm from "./interview-exersises/Login/LoginForm";
// import { store } from "./interview-exersises/redux/CounterSlice";
import { ThemeProvider } from "./interview-exersises/26 08 2025/Exercise4";
import View from "./interview-exersises/26 08 2025/ViewLightDark";

function App() {
  return (
    <ThemeProvider>
      <View />
    </ThemeProvider>
  );
}

export default App;
