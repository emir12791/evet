import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { config } from '../../helpers/config'
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className='topbar'>
    <container>
        <Row>
            <Col md={10} className='d-none d-md-block '> {config.project.slogan}</Col>
            <Col md={2} className='text-center text-md-end'>LOGIN</Col>
        </Row>

    </container>
    
    
    </div>
  )
}

export default Topbar
