import React from 'react'
import icon from '../assets/images/webpack-icon.svg'
import './app.sass'

const App = props => (
  <div>
    <h1>{props.name}</h1>
    <img className="logo" src={icon} />
  </div>
)

export default App
