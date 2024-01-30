import React, { useEffect } from "react";
import FooterHomeComponent from "../Componenti/ComponentiComuni/FooterHomeComponent";
import { Col, Container, Row } from "react-bootstrap";
import AdsComponent from "../Componenti/ComponentiComuni/AdsComponent";
import ProfiliRete from "../Componenti/Componenti Rete/ProfiliRete";




export default function Rete() {

  useEffect(() => {
    document.title = " I miei collegamenti | LinkedIn";

    return () => {
      document.title = '';
    };
  }, []);

  useEffect(()=>{
    window.scrollTo({
      top: 0,
    
    })
   },{})

  return (
    <>
      <Container style={{zIndex:"0"}}>
        <Row style={{ marginTop: "4.809rem" }}>
          <Col md={{ span: 12 }} xl={9}>
            
            <ProfiliRete />
            
            {" "}
            
            {/* colonna Main */}
            {/* <div style={{height:"10rem",  border:"1px solid black"}}></div> */}
          </Col>
          <Col className="d-none d-xl-block" xl={{ span: 3 }}>
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
