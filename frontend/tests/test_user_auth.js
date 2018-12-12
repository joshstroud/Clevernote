import * as SessionApiUtil from "../util/session_api_util"

import {
  login,
  signup,
  logout
} from "../actions/session_actions"

export const testUserAuth = (store) => {
  // testSessionApiUtil();
  testRedux();
  setupStoreTesting(store);

}

const testSessionApiUtil = () => {
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
}

const testRedux = () => {
  window.login = login;
  window.signup = signup;
  window.logout = logout;
}

const setupStoreTesting = (store) => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}

const user = {
  email: "josh@gmail.com",
  password: "password"
}