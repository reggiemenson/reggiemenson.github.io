import React from 'react'

import Image from './Background'

const Home = () => {

  return (<section className="hero is-fullheight" id="top">
    <div className="hero-head">
      <nav className="navbar is-fixed-top is-transparent is-boxed">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-custom">
                <a href="#top" className="navbar-item is-active">
                  Top
                </a>
                <a href="#profile" className="navbar-item two">
                  Profile
                </a>
                <a href="#projects" className="navbar-item three">
                  Projects
                </a>
                <a href="#contact" className="navbar-item four">
                  Contact
                </a>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container">
        <div className="title main">
          {/* Bold and enlarge first name */}
          <span className="first">Reggie</span> Tachie-Menson
          <div className="underline"></div>
        </div>
        <p className="subtitle">
          Junior Developer
        </p>
      </div>
    </div>
    <Image />
  </section>
  )
}

export default Home