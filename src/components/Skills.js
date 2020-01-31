import React from 'react'


const Skills = () => {


  return (<section className="section">
    <div className="tile is-ancestor">
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child frontend-box">

          <div className="columns is-multiline is-centered">
            <div className="column is-narrow">
              <div className="container skill-cat">
                <i className="fas fa-desktop skill-icon"></i><i className="fas fa-tablet-alt skill-icon"></i><i className="fas fa-mobile-alt skill-icon"></i>
                <div className="subtitle">Front-End</div>
              </div>
              <div className="columns is-multiline is-centered">

                <div className="column is-narrow">
                  <div>
                    <span>HTML5</span>
                  </div>
                  <div>
                    <span>CSS3</span>
                  </div>
                  <div>
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <span>SASS</span>
                  </div>
                  <div>
                    <span>Babel</span>
                  </div>
                  <div>
                    <span>React</span>
                  </div>
                </div>

                <div className="column is-narrow">
                  <div>
                    <figure><i className="skills-icon devicon-html5-plain fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-css3-plain fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-javascript-plain fa-2x"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-sass-original fa-2x"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-babel-plain fa-2x"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-react-original fa-2x"></i></figure>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child backend-box">
          <div className="columns is-multiline is-centered">
            <div className="column is-narrow">
              <div className="container skill-cat">
                <i className="fas fa-server skill-icon"></i><i className="fas fa-database skill-icon"></i>
                <div className="subtitle">Back-End</div>
              </div>
              <div className="columns is-multiline is-centered">
                <div className="column is-narrow">
                  <div>
                    <span>Express</span>
                  </div>
                  <div>
                    <span>Node.js</span>
                  </div>
                  <div>
                    <span>MongoDB</span>
                  </div>
                  <div>
                    <span>Python</span>
                  </div>
                </div>

                <div className="column is-narrow">
                  <div>
                    <figure>  <i className="skills-icon devicon-express-original fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-nodejs-plain fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-mongodb-plain fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-python-plain fa-2x"></i></figure>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child">
          <div className="columns is-multiline is-centered">
            <div className="column is-narrow">
              <div className="container skill-cat">
                <i className="fas fa-laptop skill-icon"></i>
                <div className="subtitle">Additional</div>
              </div>
              <div className="columns is-multiline is-centered">
                <div className="column is-narrow">
                  <div>
                    <span>Github</span>
                  </div>
                  <div>
                    <span>Git</span>
                  </div>
                  <div>
                    <span>Heroku</span>
                  </div>
                  <div>
                    <span>Trello</span>
                  </div>
                  <div>
                    <span>Mocha</span>
                  </div>
                </div>

                <div className="column is-narrow">
                  <div>
                    <figure><i className="skills-icon devicon-github-plain fa-2x"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-git-plain fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-heroku-original fa-2x"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-trello-plain fa-2x"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-mocha-plain fa-2x"></i></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="bottom-horizontal"></div>
  </section>)
}

export default Skills