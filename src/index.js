/* global document:false */

import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route } from 'react-router'
import createHashHistory from 'history/createHashHistory'
// import createBrowserHistory from 'history/createBrowserHistory'

import './stylesheets/index.css'

import Bundle from './libs/bundle'
import App from './containers/app'
import loadHome from 'bundle-loader?lazy!./containers/home.js' // eslint-disable-line
import loadAbout from 'bundle-loader?lazy!./containers/about.js' // eslint-disable-line

class Loading extends React.Component {
  render() {
    return <p>Loading</p>
  }
}

const Home = () => (
  <Bundle load={loadHome}>
    {
      Comp => (Comp
        ? <Comp />
        : <Loading />)
    }
  </Bundle>
)

const About = () => (
  <Bundle load={loadAbout}>
    {
      Comp => (Comp
        ? <Comp />
        : <Loading />)
    }
  </Bundle>
)

// https://www.npmjs.com/package/history
const history = createHashHistory()

// https://reacttraining.com/react-router/core/guides/quick-start
render((
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
), document.getElementById('root'))
