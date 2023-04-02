import React from "react";

import SkillIcon from "./svg/SkillIcon";

const Skills = () => {
  return (
    <section id="skill" className="section">
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile is-parent skills">
            <div className="tile is-child header">
              <figure className="image is-square">
                <SkillIcon />
              </figure>
              <h3 className="subtitle sub-skills">Skills</h3>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child frontend-box">
                  <div className="columns is-multiline is-centered">
                    <div className="column is-narrow">
                      <div className="container skill-cat">
                        <i className="fas fa-desktop skill-icon"></i>
                        <i className="fas fa-tablet-alt skill-icon"></i>
                        <i className="fas fa-mobile-alt skill-icon"></i>
                        <div className="subtitle">Front-End</div>
                      </div>
                      <div className="columns is-multiline">
                        <div className="column">
                          <div className="tile is-ancester is-vertical">
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">CSS3</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon devicon-css3-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">JavaScript</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon devicon-javascript-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">SASS</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon devicon-sass-original fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Babel</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon devicon-babel-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">React.js</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon devicon-react-original fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">
                                  Node Package Manager
                                </span>
                                <figure className="tech-skills">
                                  <i className="skills-icon fab fa-npm fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Yarn</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon fab fa-yarn fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Webpack</span>
                                <figure className="tech-skills">
                                  <i className="skills-icon devicon-webpack-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-4 is-parent">
                <div className="tile is-child backend-box">
                  <div className="columns is-multiline is-centered">
                    <div className="column is-narrow">
                      <div className="container skill-cat">
                        <i className="fas fa-server skill-icon"></i>
                        <i className="fas fa-database skill-icon"></i>
                        <div className="subtitle">Back-End</div>
                      </div>
                      <div className="columns is-multiline is-centered">
                        <div className="column">
                          <div className="tile is-ancester is-vertical">
                            <div className="tile is-parent  skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Express</span>
                                <figure>
                                  <i className="skills-icon devicon-express-original fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Node.js</span>
                                <figure>
                                  <i className="skills-icon devicon-nodejs-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">MongoDB</span>
                                <figure>
                                  <i className="skills-icon devicon-mongodb-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Python</span>
                                <figure>
                                  <i className="skills-icon devicon-python-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Django</span>
                                <figure>
                                  <i className="skills-icon devicon-django-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">PostgreSQL</span>
                                <figure>
                                  <i className="skills-icon devicon-postgresql-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-4 is-parent">
                <div className="tile is-child">
                  <div className="columns is-multiline is-centered">
                    <div className="column is-narrow">
                      <div className="container skill-cat">
                        <i className="fas fa-laptop skill-icon"></i>
                        <div className="subtitle">Additional</div>
                      </div>
                      <div className="columns is-multiline is-centered">
                        <div className="column">
                          <div className="tile is-ancester is-vertical">
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Github</span>
                                <figure>
                                  <i className="skills-icon devicon-github-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                            <div className="tile is-parent skill-tile">
                              <div className="tile is-child tech-line">
                                <span className="tech-skills">Git</span>
                                <figure>
                                  <i className="skills-icon devicon-git-plain fa-2x"></i>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-horizontal"></div>
    </section>
  );
};

export default Skills;
