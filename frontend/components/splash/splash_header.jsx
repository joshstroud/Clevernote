import React from "react";
import { Link } from "react-router-dom";

const SplashHeader = props => {
  return (
    <header className="global-header">
      <Link to="/">
        <img
          className="global-logo"
          src={window.images.homeClevernoteLogo}
          alt="Evernote logo"
        />
      </Link>
      <nav className="utility-nav">
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>or</li>
          <li>
            <Link to="/login" className="button-outline">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SplashHeader;
