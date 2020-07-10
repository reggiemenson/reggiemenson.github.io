import React from 'react'

import UserIcon from './svg/UserIcon'
import EducationIcon from './svg/EducationIcon'
import IndustryIcon from './svg/IndustryIcon'

const About = () => {


  return (<section className="section about-section">
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile is-parent about tile-top">
          <div className="tile is-child is-paddingless intro">
            <figure className="image is-square">
              <UserIcon/>
            </figure>
            <h3 className="title">Introduction</h3>
            <p>
              My experience with data, retail websites and analytics resulted in the gradual exposure to code in my day-to-day. I grew to be fascinated by the logic behind JavaScript which in turn inspired my curiosity in how tech affected user solutions. I’ve looked to develop my coding ability ever since!
            </p>
            <p>
              I remain fascinated by growing businesses as a whole and endeavour to learn as much about the many processes that form a great product. My commercial work as a Python engineer allows me to combine creative process, problem solving and the business logic that underpins these organisations.
            </p>
            <p>
              Take a look at some of the mini-projects that I’ve been involved with further below; in some cases, as an individual and in others, alongside some talented colleagues and friends. If you’d like to get in contact, check out my <a href="#contact">contact details</a> at the bottom of the page.
            </p>
          </div>
        </div>
        <div className="horizontal"></div>
        <div className="tile about-panel">
          <div className="tile is-parent about tile-left">
            <div className="tile is-child">
              <figure className="image is-square">
                <EducationIcon/>
              </figure>
              <h3 className="subtitle">Education</h3>
              <ul>
                <li>
                  <span className="institution">General Assembly</span><br/>
                  Software Engineering Immersive
                </li>
                <li><span className="institution">University of Cape Town</span><br />
                  Bachelor of Arts: English and Media & Writing
                </li>
              </ul>
            </div>
          </div>
          <div className="vertical"></div>
          <div className="tile is-parent about tile-right">
            <div className="tile is-child">
              <figure className="image is-square">
                <IndustryIcon/>
              </figure>
              <h3 className="subtitle">Industry Experience</h3>
              <div className="columns is-mobile">
                <div className="column">
                  <i className="far fa-newspaper fa-4x"></i>
                  <h5>Media</h5>
                </div>
                <div className="column">
                  <i className="fas fa-archive fa-4x"></i>
                  <h5>Data Storage</h5>
                </div>
                <div className="column">
                  <i className="fas fa-shopping-cart fa-4x"></i>
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