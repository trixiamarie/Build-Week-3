import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

export default function ModaleComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <p onClick={handleShow}><b className="mostraDett">Mostra tutti i dettagli (4) <FaArrowRightLong /></b></p>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: "16px"}}>Sviluppo Front-end</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs14">
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
          <div className="d-flex">
            <div className="me-2" style={{width: "24px", height: "24px"}}>
              <MdPeopleAlt style={{fontSize: "20px"}}/>
            </div>
            <p>2 conferme</p>
          </div>
            
        </Modal.Body>
      </Modal>
    </>
  );
}