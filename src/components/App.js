import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import icon from '../assets/images/webpack-icon.svg'
import './app.sass'

const Home = props => (
  <div>
    <h2>{props.name}</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App
