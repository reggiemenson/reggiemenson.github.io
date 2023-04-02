import React from "react";

import UserIcon from "./svg/UserIcon";
import EducationIcon from "./svg/EducationIcon";
import IndustryIcon from "./svg/IndustryIcon";

const About = () => {
  return (
    <section className="section about-section">
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile is-parent about tile-top">
            <div className="tile is-child is-paddingless intro">
              <figure className="image is-square">
                <UserIcon />
              </figure>
              <h3 className="title">Introduction</h3>
              <p className="">Welcome to my site!</p>
              <br />
              <p>
                A long time ago, I started a journey that began with me writing
                as a young contributor in finance and the markets. I then
                proceeded to take on the challenge of entrepreneurship,
                ultimately using that experience to guide my work today,
                choosing to focus on making impactful contributions to business
                development through technology.
              </p>
              <br />
              <p>
                If you'd like to speak more about potential opportunities to
                take a look at the <a href="#contact">contact section</a> at the
                bottom of the page. You may find more detail on past work and
                snippets of hobby work from time to time on my profiles.
              </p>
              <br />
              <p>
                Take a look at some of the early mini-projects that I’ve been
                involved with further below; in some cases, as an individual and
                in others, alongside some talented colleagues and friends.
              </p>
            </div>
          </div>
          <div className="horizontal"></div>
          <div className="tile about-panel">
            <div className="tile is-parent about tile-left">
              <div className="tile is-child">
                <figure className="image is-square">
                  <EducationIcon />
                </figure>
                <h3 className="subtitle">Education</h3>
                <ul>
                  <li>
                    <span className="institution">General Assembly</span>
                    <br />
                    Software Engineering Immersive
                  </li>
                  <li>
                    <span className="institution">University of Cape Town</span>
                    <br />
                    Bachelor of Arts: English and Media & Writing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-horizontal"></div>
    </section>
  );
};

export default About;
