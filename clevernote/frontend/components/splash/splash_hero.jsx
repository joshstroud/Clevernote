import React from "react";

const SplashHero = props => {
  return (
    <section className="hero top-sign-up green pattern-background">
      <div className="content">
        <h1>Feel organized without the effort</h1>
        <div className="description">
          Evernote helps you capture and prioritize ideas, projects, and to-do
          lists, so nothing falls through the cracks.
        </div>
        <a href="#" className="button-primary white">
          Sign up for free
        </a>
      </div>
      <img src={window.images.homepageHero} alt />
    </section>
  );
};

export default SplashHero;
