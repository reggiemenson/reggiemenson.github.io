import React, { useState } from 'react'


const Home = () => {


  return (<section className="hero is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            {/* <a className="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </a> */}
            <span className="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <a className="navbar-item">
                Projects
              </a>
              <a className="navbar-item">
                Experience
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container">
        <p className="title main">
          {/* Bold and enlarge first name */}
          <span className="first">Reggie</span> Tachie-Menson
        </p>
        <p className="subtitle">
          Software Developer
        </p>
      </div>
    </div>
  </section>
  )
}

export default Home