import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import ModaleComp from './ModaleCompComponent';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function CompetenzeComponent() {
  const { idUrl } = useParams()
 
  return (
    <>

      <Card className="mt-2">
        <Card.Body style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.17)", paddingLeft:"1.5rem", paddingRight:"1.5"}} >
        <div className="d-flex justify-content-between align-items-center">
        <p style={{fontSize:"1.25rem", fontWeight:"500"}} className='m-0'>Competenze</p>
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
          <div className="mt-2 fs14">
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
        </div>
          

        </Card.Body>
        
        <Card.Body className="mostraComp">
          {/* Card.Link da cambiare con un link o un navigate */}
          <Card.Link><b style={{color: "#00000099"}}>Mostra Tutte le Compentenze <FaArrowRightLong /></b></Card.Link>
        </Card.Body>
      </Card>
            

    </>
    
  )
}
