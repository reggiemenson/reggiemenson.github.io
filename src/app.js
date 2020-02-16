import React from 'react'
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

const App = () => (
  <div>
    <Home/>
    <First/>
    <About/>
    <Skills/>
    <Second/>
    <Projects/>
    <Contact/>
  </div>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)