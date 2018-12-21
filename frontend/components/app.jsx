import React from "react";
import LoginGreetingContainer from "./test/login_greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import MainPageContainer from "./main_page/main_page_container";
import TestPage from "./test/test_page";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/app" component={MainPageContainer} />
      <Route path="/logout" component={LoginGreetingContainer} />
      {/* <ProtectedRoute path="/app" component={TestPage} /> */}
      <Route component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
