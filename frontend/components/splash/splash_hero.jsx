import React from "react";
import { Link } from "react-router-dom";

const SplashHero = props => {
  return (
    <main className="splash-content-wrapper">
      <section className="hero top-sign-up green pattern-background">
        <div className="hero-content">
          <h1>Feel organized without the effort</h1>
          <div className="description">
            Evernote helps you capture and prioritize ideas, projects, and to-do
            lists, so nothing falls through the cracks.
          </div>
          <Link to="/signup" className="button-primary white">
            Sign up for free
          </Link>
        </div>
        <img src={window.images.homepageHero} className="hero-image" />
      </section>
    </main>
  );
};

export default SplashHero;
