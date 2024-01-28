import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import LoadingHomeComponent from "../Componenti/ComponentiProfilo/LoadingHomeComponent";
import ProfileCardHome from "../Componenti/ComponentiHome/ProfileCardHomeComponent";
import UnderProfileCardComponent from "../Componenti/ComponentiHome/UnderProfileCardComponent";
import NewPostComponent from "../Componenti/ComponentiHome/NewPostComponent";
import HomePostComponent from "../Componenti/ComponentiHome/HomePostComponent";
import AltriProfiliComponent from "../Componenti/ComponentiProfilo/AltriProfiliComponent";
import FooterHomeComponent from "../Componenti/ComponentiComuni/FooterHomeComponent";
import AdsComponent from "../Componenti/ComponentiComuni/AdsComponent";
import LinkedinNotizie from "../Componenti/ComponentiProfilo/LinkedinNotizie.jsx";

export default function Home() {

  useEffect(() => {
    document.title = " Feed | LinkedIn";

    return () => {
      document.title = '';
    };
  }, []);

  return (
    <Container>
      <Row style={{marginTop:"4.809rem"}}>
        <Col className="d-none d-md-block" md={{ span: 3 }}>
          {/* <div style={{ height: "10rem", border: "1px solid black" }}></div> */}
          <ProfileCardHome />
          <UnderProfileCardComponent />
        </Col>
        <Col md={{ span: 6 }}>
          {/* Componenti Main*/}
          {/* <div style={{ height: "10rem", border: "1px solid black" }}></div> */}
          <NewPostComponent />
          <HomePostComponent />
        </Col>
        <Col className="d-none d-md-block" md={3} style={{position:"relative"}}>
          {/* Componenti Sidebar Destro*/}
          {/* <div style={{ height: "10rem", border: "1px solid black" }}></div> */}
          <LinkedinNotizie />
          <AdsComponent/>
          <FooterHomeComponent/>
        </Col>
      </Row>
      {/*<LoadingHomeComponent />*/}
    </Container>
  );
}
