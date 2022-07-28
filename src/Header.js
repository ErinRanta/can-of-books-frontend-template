import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{color: "white", margin:"10px"}}>Home</Link></NavItem>
        <NavItem><Link to="/About.js" className="nav-link" style={{color: "white", margin:"10px"}}>About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
