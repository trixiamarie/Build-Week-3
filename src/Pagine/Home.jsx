import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import LoadingHomeComponent from '../Componenti/ComponentiProfilo/LoadingHomeComponent';

export default function Home() {
  return (
    <Container>
        <Row>
        <Col md={{span:3}}>
        {/* Componenti Sidebar Sinistro */}
        <div style={{height:"10rem",  border:"1px solid black"}}></div>
        </Col>
            <Col md={{span:6}}>
            {/* Componenti Main*/}
            <div style={{height:"10rem",  border:"1px solid black"}}></div>
            </Col>
            <Col md={3}>
            {/* Componenti Sidebar Destro*/}
            <div style={{height:"10rem", border:"1px solid black"}}></div></Col>
        </Row>
    <LoadingHomeComponent />
    </Container>

  )
}

