import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>There is app area. <Link to="/home">home</Link><Link to="/about">about</Link></div>
    )
  }
}

export default App
