import React from 'react'
import { Navbar } from 'react-bootstrap/lib/'
import { Link } from 'react-router-dom'


const Header = ({ logo }) => {
  return (
    <Navbar className="header">
      <Navbar.Header>
      <Link to="/">
        <img src={ logo } className="App-logo" alt="logo" />
      </Link>
        <Navbar.Brand>

        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <a className="title" disabled>bxShr</a>
        </Navbar.Text>
        <Navbar.Text pullRight>

        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
