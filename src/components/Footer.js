import React from 'react'

import PlaneIcon from './svg/PlaneIcon'


const Contact = () => {


  return (
    <footer className="footer" id="contact">
      <div className="column">
        <div className="test-logo-c">
          <figure className="image is-square">
            <PlaneIcon />
          </figure>
          <h3 className="title">Contact</h3>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column foot-links">
              <div className="tile is-ancester is-vertical">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content has-text-centered">
                      <a href="https://github.com/reggiemenson" target="_blank" rel="noopener noreferrer">
                        <i className="skills-icon devicon-github-plain fa-2x" />
                        <span className="social">github.com/reggiemenson</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column foot-links">
              <div className="tile is-ancester is-vertical">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="content has-text-centered">
                      <a href="https://linkedin.com/in/reggiemenson" target="_blank" rel="noopener noreferrer">
                        <i className="skills-icon fab fa-linkedin fa-2x" />
                        <span className="social">linkedin.com/in/reggiemenson</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Contact



