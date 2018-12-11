import {
  login,
  signup,
  logout
} from "../util/session_api_util"

export const testUserAuth = () => {
  testSessionApiUtil();
}

const testSessionApiUtil = () => {
  window.login = login;
  window.signup = signup;
  window.logout = logout;
}

const user = {
  email: "josh@gmail.com",
  password: "password"
}