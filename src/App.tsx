import { Provider } from "react-redux";
import { Cart } from "./interview-exersises/InterviewRedux/Cart";
import { store } from "./interview-exersises/InterviewRedux/store";

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
