import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { SimpleApp } from "./SimpleApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Comment out App to use create slice functionality.
// Comment out SimpleApp to use createAction, createReducer functionality.
root.render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <SimpleApp />
    </Provider>
  </StrictMode>
);
