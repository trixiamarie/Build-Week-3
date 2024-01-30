import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaArrowRightLong } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import "../../Style/Matteo.css"
import { useParams } from 'react-router-dom';

export default function LingueComponent() {

  const { idUrl } = useParams()

  return (
    <>
      <Card className="mt-2">
        <Card.Body style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.17)", paddingLeft:"1.5rem", paddingRight:"1.5"}}>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Lingue</h4>
            <div className="d-flex">
            { idUrl ? null : <><div className="ale-plus-btn">
                <FaPlus className="mx-auto" />
              </div>
              <div className="matita-btn">
                <RiPencilLine />
              </div></>}
            </div>
          </div>
          
          <div className="softLine">
              <div className="mt-2">
                  <span className="fw600">Inglese</span>
                  <p className="fs14" style={{color: "#00000099"}}>Conoscenza professionale</p>
              </div>
              <div className="mt-2">
                <span className="fw600">Uzbeko</span>
                <p className="fs14" style={{color: "#00000099"}}>Conoscenza limitata al rimorchio</p>
              </div>
          </div>
        </Card.Body>
        
        <Card.Body className="mostraComp">
          {/* Card.Link da cambiare con un link o un navigate */}
          <Card.Link><b style={{color: "#00000099"}}>Mostra Tutte le Lingue <FaArrowRightLong /></b></Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}
