import React from "react";
import FooterHomeComponent from "../Componenti/ComponentiComuni/FooterHomeComponent";
import { Col, Container, Row } from "react-bootstrap";
import AdsComponent from "../Componenti/ComponentiComuni/AdsComponent";

export default function Rete() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "4.809rem" }}>
          <Col md={{ span: 8 }}>
            {" "}
            {/* colonna Main */}
            {/* <div style={{height:"10rem",  border:"1px solid black"}}></div> */}
          </Col>
          <Col md={{ span: 4 }}>
            {" "}
            {/* colonna Sidebar */}
            {/* <div style={{height:"10rem", border:"1px solid black"}}></div> */}
            <AdsComponent />
            <FooterHomeComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}
