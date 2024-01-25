import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import ModaleComp from './ModaleCompComponent';

import Card from 'react-bootstrap/Card';


export default function CompetenzeComponent() {
 
  return (
    <>

      <Card>
        <Card.Body style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.17)"}} >
          <Card.Title>Competenze</Card.Title>
            {/* componente figlio da ciclare*/}
            <div style={{borderBottom: "1px solid rgb(0, 0, 0, 0.17)"}} className="mt-2 fs14">
              <h6>Sviluppo Front-end</h6>
              <div className="d-flex">
                  <img className="me-2" width="24" height="24" src="https://media.licdn.com/dms/image/C560BAQGKHWgSsI9ZVg/company-logo_100_100/0/1631368771194?e=1714003200&amp;v=beta&amp;t=tt2HxpSFNG3R1ht_AbCqPf2Vingo-jA6Co68Kp3UTRU" alt="" ></img>
                  <p>IFOA - Training Institute of Corporate Professionals </p>
              </div>
              <div className="d-flex">
                <img className="me-2" width="24" height="24" src="https://media.licdn.com/dms/image/C560BAQGKHWgSsI9ZVg/company-logo_100_100/0/1631368771194?e=1714003200&amp;v=beta&amp;t=tt2HxpSFNG3R1ht_AbCqPf2Vingo-jA6Co68Kp3UTRU" alt="" ></img>
                <p>Competenze confermate da </p>
              </div>
              <div className="d-flex">
                <img className="me-2" width="24" height="24" src="https://media.licdn.com/dms/image/C560BAQGKHWgSsI9ZVg/company-logo_100_100/0/1631368771194?e=1714003200&amp;v=beta&amp;t=tt2HxpSFNG3R1ht_AbCqPf2Vingo-jA6Co68Kp3UTRU" alt="" ></img>
                <p>Confermata da 2 persone negli ultimi 6 mesi</p>
              </div>
                <ModaleComp></ModaleComp>
            </div>
            {/* componente figlio da ciclare*/}
          </Card.Body>
        
          <Card.Body className="mostraComp">
          {/* Card.Link da cambiare con un link o un navigate */}
          <Card.Link href="#"><b style={{color: "#00000099"}}>Mostra Tutte le Compentenze <FaArrowRightLong /></b></Card.Link>
        </Card.Body>
      </Card>
            

    </>
    
  )
}
