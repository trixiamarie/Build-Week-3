import React from 'react'
import { Container, Col, Row } from "react-bootstrap";

export default function Profile() {
  return (
    <Container>
        <Row>
            <Col md={{span:8}}>
            {/* Componenti Main*/}
            <div style={{height:"10rem",  border:"1px solid black"}}></div>
            </Col>
            <Col md={{span:4}}>
            {/* Componenti Sidebar*/}
            <div style={{height:"10rem", border:"1px solid black"}}></div></Col>
        </Row>
    </Container>
  )
}
