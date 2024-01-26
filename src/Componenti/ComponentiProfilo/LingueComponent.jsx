import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaArrowRightLong } from "react-icons/fa6";
import "../../Style/Matteo.css"

export default function LingueComponent() {
  return (
    <>
    <Card className="mt-2">
        <Card.Body style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.17)"}} className="softLine">
          <h4>Lingue</h4>
            {/* componente figlio da ciclare*/}
            <div className="mt-2">
              <span className="fw600">Inglese</span>
              <p className="fs14" style={{color: "#00000099"}}>Conoscenza professionale</p>
            </div>
            <div className="mt-2">
              <span className="fw600">Inglese</span>
              <p className="fs14" style={{color: "#00000099"}}>Conoscenza professionale</p>
            </div>
            {/* componente figlio da ciclare*/}
          </Card.Body>
        
        <Card.Body className="mostraComp">
          {/* Card.Link da cambiare con un link o un navigate */}
          <Card.Link href="#"><b style={{color: "#00000099"}}>Mostra Tutte le Lingue <FaArrowRightLong /></b></Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}
