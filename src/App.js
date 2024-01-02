import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import BubbleSort from "./components/BubbleSort";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BubbleSort />
      </div>
    </Provider>
  );
}

export default App;
