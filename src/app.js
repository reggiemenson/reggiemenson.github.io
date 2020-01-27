import React from 'react'
import ReactDOM from 'react-dom'
// import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import 'bulma'

const App = () => (
  <div>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)