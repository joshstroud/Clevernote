import React from "react";
import ReactDOM from "react-dom";
import { testUserAuth } from "./tests/test_user_auth";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  testUserAuth(store);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
