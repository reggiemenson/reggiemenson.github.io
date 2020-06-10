import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import First from './components/First'
import Second from './components/Second'


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
    <Home/>
    <First
      scroll={scroll}
    // handleScroll={handleScroll}
    />
    <About/>
    <Skills/>
    <Second
      scroll={scroll}
    />
    <Projects/>
    <Contact/>
  </div>)
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)