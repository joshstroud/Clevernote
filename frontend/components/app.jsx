import React from "react";
import LoginGreetingContainer from "./test/login_greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import MainPage from "./main_page/main_page";
import TestPage from "./test/test_page";

const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    {/* <ProtectedRoute path="/app" component={MainPage} /> */}
    <ProtectedRoute path="/app" component={TestPage} />
  </div>
);

export default App;
