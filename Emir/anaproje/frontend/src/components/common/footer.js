import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container className="konteyners">
        <div  className='logos'>
            <Nav.Link as={Link} to="/">
              <Image src="/images/logo/altlogo.png" className="img-fluid" alt={config.project.name}/>
            </Nav.Link>
            </div>  
            <div className="haks">
              © 2022 - Copyright by Techproeducation, All rights reserved.
            </div>
      </Container>
   </footer>
  );
};







export default Footer;
