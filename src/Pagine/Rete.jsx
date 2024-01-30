import React from "react";
import FooterHomeComponent from "../Componenti/ComponentiComuni/FooterHomeComponent";
import { Col, Container, Row } from "react-bootstrap";
import AdsComponent from "../Componenti/ComponentiComuni/AdsComponent";
import ProfiliRete from "../Componenti/Componenti Rete/ProfiliRete";
import PotrestiConoscereComponent from "../Componenti/ComponentiProfilo/PotrestiConoscereComponent";




export default function Rete() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "4.809rem" }}>
          <Col md={{ span: 8 }}>
            
            <ProfiliRete />
            
            {" "}
            
            {/* colonna Main */}
            {/* <div style={{height:"10rem",  border:"1px solid black"}}></div> */}
          </Col>
          <Col md={{ span: 4 }}>
            {" "}
            {/* colonna Sidebar */}
            {/* <div style={{height:"10rem", border:"1px solid black"}}></div> */}
              
            <PotrestiConoscereComponent/>
            <AdsComponent />
            <FooterHomeComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}
