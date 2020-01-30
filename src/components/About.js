import React, { useState } from 'react'


const About = () => {


  return (<section className="section about-section">
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile is-parent about tile-top">
          <div className="tile is-child">
            <i className="fas fa-user-circle fa-3x"></i>
            <h3 className="subtitle">Profile</h3>
            <p>
              My work with retail websites and analytics has meant gradual exposure to code through tracking tags and web content styling. I grew to be fascinated by the logic behind JavaScript which in turn inspired my curiosity in how tech affected user solutions. I’ve looked to develop my coding ability ever since!
            </p>
            <p>
              I was educated in the area of digital media and content writing for publication. Coming from a media background has helped me keep the way in which a message is delivered in mind when dealing with an audience. This approach aided my input in digital roles and I expanded my skills by delving into the creation of websites for content as well as SEO and analytical tools.
            </p>
          </div>
        </div>
        <div className="horizontal"></div>
        <div className="tile">
          <div className="tile is-parent about tile-left">
            <div className="tile is-child">
              <i className="fas fa-university fa-3x"></i>
              <h3 className="subtitle">Education</h3>
              <ul>
                <li>University of Cape Town<br />
                  Bachelor of Arts: English and Media & Writing
                </li>
                <li>
                  General Assembly, Software Engineering Immersive
                </li>
              </ul>
            </div>
          </div>
          <div className="vertical"></div>
          <div className="tile is-parent about tile-right">
            <div className="tile is-child">
              <i className="fas fa-building fa-3x"></i>
              <h3 className="subtitle">Industry Experience</h3>
              <div className="columns">
                <div className="column">
                  <i className="far fa-newspaper fa-5x"></i>
                  <h5>Media</h5>
                </div>
                <div className="column">
                  <i className="fas fa-archive fa-5x"></i>
                  <h5>Data Storage</h5>
                </div>
                <div className="column">
                  <i className="fas fa-shopping-cart fa-5x"></i>
                  <h5>Online Retail</h5>
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

export default About