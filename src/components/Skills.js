import React from 'react'


const Skills = () => {


  return (<section className="section">
    <div className="tile is-ancestor">
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child frontend-box">

          <div className="columns">
            <div className="column">
              <div className="container">
                <i className="fas fa-desktop"></i><i className="fas fa-tablet-alt"></i><i className="fas fa-mobile-alt"></i>
                <div className="subtitle">Front-End</div>
              </div>
              <div className="columns is-gapless">

                <div className="column">
                  <div>
                    <span>HTML</span>
                  </div>
                  <div>
                    <span>CSS</span>
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

                <div className="column">
                  <div>
                    <figure><i className="skills-icon devicon-html5-plain"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-css3-plain"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-javascript-plain"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-sass-original"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-babel-plain"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-react-original"></i></figure>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child backend-box">
          <div className="columns">
            <div className="column">
              <div className="container">
                <i className="fas fa-server"></i><i className="fas fa-database"></i>
                <div className="subtitle">Back-End</div>
              </div>
              <div className="columns">
                <div className="column">
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

                <div className="column">
                  <div>
                    <figure>  <i className="skills-icon devicon-express-original"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-nodejs-plain"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-mongodb-plain"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-python-plain"></i></figure>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child">
          <div className="columns">
            <div className="column">
              <div className="container">
                <i className="fas fa-laptop"></i>
                <div className="subtitle">Additional</div>
              </div>
              <div className="columns">
                <div className="column">
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

                <div className="column">
                  <div>
                    <figure><i className="skills-icon devicon-github-plain"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-git-plain"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-heroku-original"></i></figure>
                  </div>
                  <div>
                    <figure><i className="skills-icon devicon-trello-plain"></i></figure>
                  </div><div>
                    <figure><i className="skills-icon devicon-mocha-plain"></i></figure>
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