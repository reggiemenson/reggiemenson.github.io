import React, { useState } from 'react'


const About = () => {


  return (<section className="section">
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <h3 className="subtitle">Bio</h3>
            <p>
              My work with retail websites and analytics has meant gradual exposure to code through tracking tags and web content styling. I grew to be fascinated by the logic behind JavaScript which in turn inspired my curiosity in how tech affected user solutions. I’ve looked to develop my coding ability ever since!
            </p>
            <p>
              I was educated in the area of digital media and content writing for publication. Coming from a media background has helped me keep the way in which a message is delivered in mind when dealing with an audience. This approach aided my input in digital roles and I expanded my skills by delving into the creation of websites for content as well as SEO and analytical tools.
            </p>
          </div>
        </div>
        <div className="tile">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h3 className="subtitle">Education</h3>
              <ul>
                <li>University of Cape Town<br/>
              Bachelor of Arts: English and Media & Writing
                </li>
                <li>
              General Assembly, Software Engineering Immersive
                </li>
              </ul>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h3 className="subtitle">Industry</h3>
              <ul>
                <li>Financial Journalism</li>
                <li>Data Storage</li>
                <li>Online Retail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-4 is-parent is-vertical">
        <div className="tile is-child box">
          <div className="columns">
            <div className="column">
              <div>
                <figure><i className="skills-icon devicon-html5-plain"></i></figure>
                <span>HTML</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-css3-plain"></i></figure>
                <span>CSS</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-javascript-plain"></i></figure>
                <span>JavaScript</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-python-plain"></i></figure>
                <span>Python</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-bootstrap-plain"></i></figure>
                <span>Bootstrap</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-react-original"></i></figure>
                <span>React</span>
              </div>
            </div>

            <div className="column">
              <div>
                <figure>  <i className="skills-icon devicon-express-original"></i></figure>
                <span>Express</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-nodejs-plain"></i></figure>
                <span>Node.js</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-sass-original"></i></figure>
                <span>SASS</span>
              </div><div>
                <figure><i className="skills-icon devicon-babel-plain"></i></figure>
                <span>Babel</span>
              </div><div>
                <figure><i className="skills-icon devicon-mongodb-plain"></i></figure>
                <span>MongoDB</span>
              </div><div>
                <figure><i className="skills-icon devicon-git-plain"></i></figure>
                <span>Git</span>
              </div>
            </div>

            <div className="column">
              <div>
                <figure><i className="skills-icon devicon-github-plain"></i></figure>
                <span>Github</span>
              </div><div>
                <figure><i className="skills-icon devicon-heroku-original"></i></figure>
                <span>Heroku</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-mocha-plain"></i></figure>
                <span>Mocha</span>
              </div>
              <div>
                <figure><i className="skills-icon devicon-chrome-plain"></i></figure>
                <span>Chrome</span>
              </div><div>
                <figure><i className="skills-icon devicon-atom-original"></i></figure>
                <span>Atom</span>
              </div><div>
                <figure><i className="skills-icon devicon-trello-plain"></i></figure>
                <span>Trello</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-child box">
          <h3 className="subtitle">Interests</h3>
          <p>

          </p>
        </div>

      </div>
    </div>
  </section>)
}

export default About