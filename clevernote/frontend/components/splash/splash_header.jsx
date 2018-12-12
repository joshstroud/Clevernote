import React from "react";

const SplashHeader = props => {
  return (
    <header className="global-header">
      <a href="#">
        <img
          className="global-logo"
          src={window.images.evernoteLogo}
          alt="Evernote logo"
        />
      </a>
      <nav className="utility-nav">
        <ul>
          <li>
            <a href="#">Sign up</a>
          </li>
          <li>or</li>
          <li>
            <a href="#" className="button-outline">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SplashHeader;
