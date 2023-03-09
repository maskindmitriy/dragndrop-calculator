import React from 'react'
import {Header} from "../Header/Header";
import {Sidebar} from "../Sidebar/Sidebar";
import {Canvas} from "../Canvas/Canvas";
import {Col, Container, Row} from 'react-bootstrap';

export function HomePage() {
  return (
    <Container>
      <Row className='d-flex align-items-end m-0 mt-4 mb-3'>
        <Col/>
        <Col className='p-0 d-flex justify-content-center'><Header/></Col>
      </Row>
      <Row>
        <Col className='p-0 d-flex justify-content-center'><Sidebar/></Col>
        <Col className='p-0 d-flex justify-content-center'><Canvas/></Col>
      </Row>
    </Container>
  )
}