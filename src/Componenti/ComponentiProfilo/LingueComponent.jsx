import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaArrowRightLong } from "react-icons/fa6";
import "../../Style/Matteo.css"

export default function LingueComponent() {
  return (
    <>
    <Card>
        <Card.Body style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.17)"}} >
          <Card.Title>Lingue</Card.Title>
            {/* componente figlio da ciclare*/}
            <div style={{borderBottom: "1px solid rgb(0, 0, 0, 0.17)"}} className="mt-2">
              <span style={{fontSize: "16px"}}>Inglese</span>
              <p className="fs14" style={{color: "#00000099"}}>Conoscenza professionale</p>
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
