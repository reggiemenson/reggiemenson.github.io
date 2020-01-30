import React, { useState } from 'react'


const Contact = () => {


  return (
    <footer className="footer">
      <div className="columns">
        <div className="column">
          <div className="content has-text-centered">
            <h4>
              <strong>Reggie Tachie-Menson</strong>
            </h4>
            <p><strong>Junior Developer</strong></p>
          </div>
        </div>
        <div className="column">
          <div className="content has-text-centered">
            <i className="fas fa-paper-plane fa-2x"></i>
            <span>
              mrmenson@gmail.com
            </span>
          </div>
        </div>
        <div className="column">
          <div className="content has-text-centered">
            <p>
              <i className="skills-icon devicon-github-plain fa-2x"></i>
              <span>GitHub</span>
            </p>
            <p>
              <i className="fab fa-linkedin fa-2x"></i>
              <span>LinkedIn</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Contact