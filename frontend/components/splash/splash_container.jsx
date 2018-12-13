import React from "react";
import SplashHeader from "./splash_header";
import SplashHero from "./splash_hero";
import SplashFooter from "./splash_footer";

const SplashContainer = () => {
  return (
    <div className="splash-container">
      <SplashHeader />
      <SplashHero />
      <SplashFooter />
    </div>
  );
};

export default SplashContainer;
