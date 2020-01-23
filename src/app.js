import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </HashRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)