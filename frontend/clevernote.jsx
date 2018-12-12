import React from "react";
import ReactDOM from "react-dom";
// import { testUserAuth } from "./tests/test_user_auth";
import { testNotes } from "./tests/test_notes";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = setupStoreWithUserLogin();

  testNotes(store);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

const setupStoreWithUserLogin = () => {
  let store = null;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  return store;
};
