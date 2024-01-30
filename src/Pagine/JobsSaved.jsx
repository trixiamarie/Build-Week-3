import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import BarraLaterale from '../Componenti/ComponentiJobsSaved/BarraLaterale'
import ListaJobsSalvati from '../Componenti/ComponentiJobsSaved/ListaJobsSalvati';

export default function JobsSaved() {

  const dispatch = useDispatch();
  const lavoriSalvati = useSelector(state=> state.jobsSaved)
  return (
    <Container className='d-flex justify-content-start'  style={{ marginTop: "6.8rem" }}>
      <BarraLaterale/>
      <ListaJobsSalvati/>
      

    </Container>
  )
}



