import React from "react";
import "./Config/Reactotron";
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from "./Store";
import { Provider } from "react-redux";

import GlobalStyles from "./Styles";
import Routes from "./routes";
import MasterPage from "./Templates/MasterPage";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
