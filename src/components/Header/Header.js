import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container>
        <Navbar variant="light" bg="light">
          <Container>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Navbar.Brand href="/about">About</Navbar.Brand>
            <Navbar.Brand href="/services">Services</Navbar.Brand>
            <Navbar.Brand href="/portfolio">Portfolio</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
        </div>
    );
};

export default Header;