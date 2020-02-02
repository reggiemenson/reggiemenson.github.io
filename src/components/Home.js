import React, { useState, useEffect } from 'react'

import Image from './Background'

const Home = () => {
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    setloaded(true)
  }, [])

  return (<section className="hero is-fullheight">
    <div className="hero-head">
      <nav className="navbar is-fixed-top is-transparent is-boxed">
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
              <div className="navbar-custom">
                <a className="navbar-item is-active">
                  Top
                </a>
                <a className="navbar-item two">
                  Profile
                </a>
                <a className="navbar-item three">
                  Projects
                </a>
                <a className="navbar-item four">
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
          {loaded && <div className="underline"></div>}
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