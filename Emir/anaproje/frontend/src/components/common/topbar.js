import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { config } from '../../helpers/config'
import "./topbar.scss"
import UserMenu from "./user-menu"

const Topbar = () => {
  return (
    <div className='topbar'>
      <Container>
          <div  className='soltaraf'>
              <Nav.Link className="telemoji" href={`tel:${config.contact.phone1}`}>📞</Nav.Link>
              <Nav.Link className="tel" href={`tel:${config.contact.phone1}`}>{config.contact.phone1}</Nav.Link>
              <Nav.Link className="mailemoji" href={`mailto:${config.contact.email}`}>✉️</Nav.Link>              
              <Nav.Link className="mail" href={`mailto:${config.contact.email}`}>{config.contact.email}</Nav.Link>              
             </div>
          <div  className='sagtaraf' >
              <UserMenu/>
          </div>


      </Container>
      </div>
  )
}

export default Topbar