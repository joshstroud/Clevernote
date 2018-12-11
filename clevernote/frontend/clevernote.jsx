import React from "react";
import ReactDOM from "react-dom";
import { testUserAuth } from "./tests/test_user_auth";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  testUserAuth(store);
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Clevernote</h1>, root);
});
