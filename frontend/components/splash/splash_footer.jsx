import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faEnvelope,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SplashFooter = props => {
  return (
    <footer className="splash-footer">
      <div>
        <img
          className="splash-footer-josh-image"
          src="http://josh-stroud.com/images/josh_stroud.jpg"
          alt=""
        />
      </div>
      <div className="splash-footer-heading">Made with love by Josh Stroud</div>
      <div className="splash-footer-body">
        Josh is a full-stack software engineer passionate about learning,
        skillful communication, and mindfulness.
        <br />
        <br />
        He recently graduated from
        <a href="http://appacademy.io"> App Academy</a>, a prestigious
        full-stack web development program with a 3% acceptance rate. Josh built
        this application in 10 days using Ruby on Rails, Javascript, React,
        HTML5, and CSS.
        <br />
        <br />
        Thanks to his training as a product design engineer at UC Berkeley and
        his experience at several hardware startups, Josh thinks like an
        engineer. He uses rigorous systems thinking to solve technical problems
        with ease. <br /> <br />
        Josh dreams of using his technical skills to do good and make an impact
        in the world.
      </div>

      <div className="splash-footer-icons-row">
        <a href="https://github.com/joshstroud/Clevernote/wiki">
          <FontAwesomeIcon className="splash-footer-icon" icon={faFileAlt} />
          <div className="splash-footer-icon-text">Design Docs</div>
        </a>

        <a href="http://josh-stroud.com">
          <FontAwesomeIcon className="splash-footer-icon" icon={faBriefcase} />
          <div className="splash-footer-icon-text">Portfolio</div>
        </a>
        <a href="http://github.com/joshstroud">
          <FontAwesomeIcon className="splash-footer-icon" icon={faGithub} />
          <div className="splash-footer-icon-text">Github</div>
        </a>
        <a href="http://linkedin.com/in/joshstroud">
          <FontAwesomeIcon className="splash-footer-icon" icon={faLinkedinIn} />
          <div className="splash-footer-icon-text">LinkedIn</div>
        </a>
        <a href="mailto:josh.e.stroud@gmail.com">
          <FontAwesomeIcon className="splash-footer-icon" icon={faEnvelope} />
          <div className="splash-footer-icon-text">Email</div>
        </a>
      </div>
    </footer>
  );
};

export default SplashFooter;
