import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loading from "./components/Loading";
import { Provider } from "react-redux";
import configureStore from "./config/configureStore";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// if (process.env.NODE_ENV === "production") disableReactDevTools();

const { persistor, store } = configureStore();

function Main() {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
}

// ReactDOM.render(
//   <Provider store={store}>

//   </Provider>
//   ,document.getElementById('root')
// );

persistor.subscribe(() => {
  /* Hydrate React components when persistor has synced with redux store */

  const { bootstrapped } = persistor.getState();

  if (bootstrapped) {
    ReactDOM.hydrate(<Main />, document.getElementById("root"));
  } else {
    ReactDOM.hydrate(<Loading />, document.getElementById("root"));
  }
});
