import React from 'react';
import "./menubar.scss";
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { FiHome, FiBook } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { config } from '../../helpers/config';
import { Link } from 'react-router-dom';

const Menubar = ({ title }) => {
  return (
    <div className="Menubar">
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Nav.Link as={Link} to="/" className='logo'>
            <Image src="/images/logo/logo.png" className="img-fluid" alt={config.project.name}/>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className='sag'>
              <Nav.Link as={Link} to="/">
                <FiHome /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/library">
                <FiBook /> Library
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <FaMapMarkerAlt /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menubar;
