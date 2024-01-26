import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import LoadingHomeComponent from '../Componenti/ComponentiProfilo/LoadingHomeComponent';
import ProfileCardHome from '../Componenti/ComponentiHome/ProfileCardHomeComponent';
import UnderProfileCardComponent from '../Componenti/ComponentiHome/UnderProfileCardComponent';
import NewPostComponent from '../Componenti/ComponentiHome/NewPostComponent';
import HomePostComponent from '../Componenti/ComponentiHome/HomePostComponent';
import AltriProfiliComponent from '../Componenti/ComponentiProfilo/AltriProfiliComponent';
import FooterComponent from '../Componenti/ComponentiComuni/FooterComponent';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3 }}>
          <div style={{ height: "10rem", border: "1px solid black" }}></div>
          <ProfileCardHome />
          <UnderProfileCardComponent />
        </Col>
        <Col md={{ span: 6 }}>
          {/* Componenti Main*/}
          <div style={{ height: "10rem", border: "1px solid black" }}></div>
          <NewPostComponent />
          <HomePostComponent />
        </Col>
        <Col md={3}>
          {/* Componenti Sidebar Destro*/}
          <div style={{ height: "10rem", border: "1px solid black" }}></div></Col>
        <AltriProfiliComponent />
        {/* <FooterComponent/> */}
      </Row>
      {/*<LoadingHomeComponent />*/}
    </Container>

  )
}

