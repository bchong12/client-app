import React from "react";
import Routes from "./routes";
import { Provider } from 'react-redux'
import store from './Redux/store'
import "./App.css";

function App() {
  return <div className="App">
    <Provider store={store}>
      {Routes}
    </Provider>
  </div>;
}

export default App;
