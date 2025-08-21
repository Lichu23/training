

import { Provider } from "react-redux";
import Counter from "./interview-exersises/redux/Counter";
import { store } from "./interview-exersises/redux/CounterSlice";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>

  );
}

export default App;
