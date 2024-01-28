import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { RiPencilLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import '../../Style/LinguaLinkComponent.css'
import { useParams } from "react-router-dom";

export default function LinguaLinkComponent() {

  const { id } = useParams()
  const user = useSelector((state) => state.user.userData.data);

  const username =
    `${user.name.toLowerCase()}${user.surname.toLowerCase()}`.replace(
      /\s/g,
      ""
    );

  return (
    <>
    {id ? null :
    <div className="LLContainer bg-white rounded border border-1 p-3">
      <div className="language-section d-flex justify-content-between">
        <p>Lingua del profilo</p>
        <RiPencilLine style={{fontSize:"1.5rem", cursor:"pointer"}}/>
      </div>
      <Row className="d-flex justify-content-between">
      <Col>
<Button className="btnCustomLL">Italiano</Button>
      </Col>
      <Col>
 <Button className="btnCustomLL2">Inglese</Button>
      </Col>
      
     
      </Row>
      <hr />
      <div>
      <div className="profile-section d-flex justify-content-between">
        <p>Public profile & URL</p>
        <RiPencilLine style={{fontSize:"1.5rem", cursor:"pointer"}}/>
        </div>
        <p className="ps-p">www.linkedin.com/in/{username}</p>
      </div>
    </div>
    }
    </>
  );
}
