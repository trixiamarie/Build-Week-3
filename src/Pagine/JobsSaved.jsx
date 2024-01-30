import React, { useEffect } from 'react';
import { Container, Col, Row } from "react-bootstrap";

import BarraLaterale from '../Componenti/ComponentiJobsSaved/BarraLaterale'
import ListaJobsSalvati from '../Componenti/ComponentiJobsSaved/ListaJobsSalvati';
import AdsComponent from '../Componenti/ComponentiComuni/AdsComponent';
import FooterHomeComponent from '../Componenti/ComponentiComuni/FooterHomeComponent';

export default function JobsSaved() {

  useEffect(() => {
    document.title = " Le mie offerte | LinkedIn";

    return () => {
      document.title = '';
    };
  }, []);

  return (
    <Container>
    <Row style={{marginTop: "3.313rem"}}>
      <Col className='d-none d-md-block' md={3} style={{marginTop: "1.5rem"}}>
      <BarraLaterale/>
      </Col>
      <Col md={9} lg={6} style={{marginTop: "1.5rem"}}>
      <ListaJobsSalvati/>
      </Col>
      <Col>
        <AdsComponent className='d-none d-lg-block' lg={3}/>
        <FooterHomeComponent/>
      </Col>

    </Row></Container>
  )
}



