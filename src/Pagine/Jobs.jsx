import React from 'react'
import CardJobs from '../Componenti/ComponentiJobs/CardJobs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ColonnaDx from '../Componenti/ComponentiJobs/ColonnaDx';
import ColonnaSx from '../Componenti/ComponentiJobs/ColonnaSx';

export default function Jobs() {
  return (
    <>
      <Container className='bg-white ' style={{marginTop:"4.809rem"}}>
      <Row>
        <Col xs={12} md={5} className='p-0'>
          <ColonnaSx/>
        </Col>
        <Col xs={12} md={7}>
          <ColonnaDx/>
        </Col>
      </Row>
    </Container>
     
    </>
   
  )
}
