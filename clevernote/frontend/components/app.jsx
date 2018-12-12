import React from "react";
import LoginGreetingContainer from "./test/login_greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
