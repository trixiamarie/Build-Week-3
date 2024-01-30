import React, { useRef, useEffect, useState } from 'react';
import CardJobs from '../Componenti/ComponentiJobs/CardJobs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ColonnaDx from '../Componenti/ComponentiJobs/ColonnaDx';
import ColonnaSx from '../Componenti/ComponentiJobs/ColonnaSx';
import SottoNavbarJob from '../Componenti/ComponentiJobs/SottoNavbarJob';
import InputJob from '../Componenti/ComponentiJobs/InputJob';


export default function Jobs() {

  const [dettaglioJob, setDettaglioJob] = useState("r") 

  return (
 
    <div>
      <InputJob></InputJob>
    
      <Container className='bg-white ' style={{marginTop:"4.809rem"}}>
      <Row>
        <Col xs={12} md={5} className='p-0'>
          <ColonnaSx setDettaglioJob={setDettaglioJob}/>
        </Col>
        <Col xs={12} md={7} className='d-sm-none d-md-block'>
          <ColonnaDx dettaglioJob={dettaglioJob}/>
        </Col>
      </Row>
    </Container>
     
    </div>
      
  )
}
