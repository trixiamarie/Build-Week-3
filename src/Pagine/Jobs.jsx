import React from 'react'
import CardJobs from '../Componenti/ComponentiJobs/CardJobs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ColonnaDx from '../Componenti/ComponentiJobs/ColonnaDx';
import ColonnaSx from '../Componenti/ComponentiJobs/ColonnaSx';

export default function Jobs() {
  return (
    <>
      <Container className='mt-5 bg-white'>
      <Row>
        <Col xs={12} md={6}>
          <ColonnaSx/>
        </Col>
        <Col xs={12} md={6}>
          <div className="p-3">Contenuto Colonna Destra Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque rerum optio voluptate expedita itaque aperiam quis iure atque deserunt numquam magnam ad delectus, voluptates excepturi pariatur earum laudantium beatae accusantium.
          </div>
        </Col>
      </Row>
    </Container>
     
    </>
   
  )
}
