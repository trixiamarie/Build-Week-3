import React, { useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function MettiEsperienza({ esperienza }) {
  const [lgShow, setLgShow] = useState(false);
  
  const icone = useRef();

  const mostraIcone = () => {
    icone.current.classList.remove("d-none");
  };

  const nascondiIcone = () => {
    icone.current.classList.add("d-none");
  };

  return (
    <>
      <div
        className="esperienza border-bottom mt-3 d-flex justify-content-between"
        onMouseEnter={mostraIcone}
        onMouseLeave={nascondiIcone}
      >
        <div className="card mb-0 border border-0" style={{ maxWidth: 540 }}>
          <div className="d-flex">
            <div className="flex-shrink-0">
              <img
                src={
                  esperienza.image
                    ? esperienza.image
                    : "https://kodilan.com/img/empty-company-logo.8437254b.png"
                }
                className="img-fluid "
                alt="..."
                style={{ width: 60, height: 60 }}
              />
            </div>
            <div className="flex-grow-1 mx-1">
              <div className="card-body ps-2 pt-1">
                <h5 className="card-title mb-1">{esperienza.role}</h5>
                <div className="card-text mb-0">
                  <p className="mb-0 ">{esperienza.company}</p>
                  <small className="mb-0 text-secondary">
                    {new Date(esperienza.startDate).toLocaleDateString("it", {
                      month: "long",
                      year: "numeric",
                    }) + " - " } 
                        {esperienza.endDate ? new Date(esperienza.endDate).toLocaleDateString("it", {
                      month: "long",
                      year: "numeric",
                    }):" Presente"}
                  </small>
                </div>
                <p className="text-body-secondary mb-2">{esperienza.area}</p>
                {esperienza.description.length > 0 && (
                  <p className="mb-1 mt-2">
                    <span className="fw-medium">Descrizione:</span>{" "}
                    {esperienza.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div ref={icone} className="fs-5 me-2 d-flex text-secondary d-none">
          <div className="matita-btn" onClick={() => setLgShow(true)}>
            <RiPencilLine />
          </div>
          <div className="matita-btn">
            <FaTrash className="gregTrash" />
          </div>
        </div>
      </div>

      <Modal
      className="d-none"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}
