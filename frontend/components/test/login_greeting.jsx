import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const LoginGreeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Redirect to="/" />
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default LoginGreeting;
