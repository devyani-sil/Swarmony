import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaSearch, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-gradient-to-r from-gray-800 to-gray-200 shadow-lg sticky top-0 z-50" style={{ height: '80px' }}>
      <Container className="justify-between">
        <Navbar.Brand as={Link} to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-24" />
          {/* <span className="font-bold text-xl">Your Brand</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto space-x-8">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-item">About Us</Nav.Link>
            <Nav.Link as={Link} to="/collab" className="nav-item">Collab's</Nav.Link>
            <Nav.Link as={Link} to="/delve" className="nav-item">Delve</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="nav-item">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/search" className="nav-item">
              <input type="text" placeholder="Search..." className="bg-transparent border border-black text-white px-2 py-1" />
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="nav-item"><FaUser /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
