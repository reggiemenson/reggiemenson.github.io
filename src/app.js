import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Footer'
import Skills from './components/Skills'
import First from './components/FirstDraw'
import Second from './components/SecondDraw'


import 'bulma'
import './styles/main.scss'

const App = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    setScroll(window.scrollY)
  }

  return (<div>
    <Home />
    <First
      scroll={scroll}
    />
    <About />
    <Skills />
    <Second
      scroll={scroll}
    />
    <Projects />
    <Contact />
  </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)