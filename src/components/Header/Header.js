import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    textDecoration: "none"
  }
    return (
        <div>
<Navbar className="w-75 mx-auto mt-5 rounded" bg="white" variant="dark">
    <Container>
    <Nav className="mx-auto">
      <NavLink  style={headerStyle} className="text-success m-3" to="/home">Home</NavLink>
      <NavLink  style={headerStyle} className="text-success m-3" to="/about">About</NavLink>
      <NavLink  style={headerStyle} className="text-success m-3" to="/allservices">Services</NavLink>
      <NavLink  style={headerStyle} className="text-success m-3" to="/portfolio">Portfolio</NavLink>
    </Nav>
    </Container>
  </Navbar>
      
        </div>
    );
};

export default Header;