import React, { useState } from 'react'


const About = () => {


  return (
    <div className="section">
      <div className="container">
        <div className="tile is-ancester">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box">
              <h3 className="subtitle">Bio</h3>
              <p>
                I love making things work. I’ve been fascinated by the logic behind JavaScript since my introduction within digital roles. It also inspired my curiosity in how tech affected user solutions. I embrace change and love to learn more which is why I’m excited to continue my career as a junior developer.
              </p>
            </div>
            {/* <div className="tile is-child box"> */}
            <div className="tile is-parent">
              <div className="tile is-child box">
                <h3 className="subtitle">Little icons</h3>
                <p>
                  Info
                </p>
              </div>
              <div className="tile is-child box">
                <h3 className="subtitle">Little icons 2</h3>
                <p>
                  Info
                </p>
              </div>
            </div>

          </div>
          {/* </div> */}
          <div className="tile is-4 is-parent is-vertical">
            <div className="tile is-child box">
              Some Small Info
            </div>
            <div className="tile is-child box">
              <h3 className="subtitle">Little icons 3</h3>
              <p>
                Info
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About