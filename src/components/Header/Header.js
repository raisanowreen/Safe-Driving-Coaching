import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    textDecoration: "none"
  }
    return (
        <div>
          <small className="text-warning ms-3"><i className="fas fa-phone-alt me-1"></i>Contact: 88889999</small>
          <small className="text-warning ms-3">Email: xyz@gmail.com</small>
<div>
<Navbar className="w-100 mx-auto mt-2 rounded" bg="white" variant="dark">
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
      
        </div>
    );
};

export default Header;