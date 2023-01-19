import React from "react";
import MeAbout from "../../img/gamers.jpeg"
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h3>Software Developer Graduates</h3>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={MeAbout} alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
