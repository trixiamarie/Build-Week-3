import React, { useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import { idAle, BEARER_TOKEN } from "../../../Config";

export default function MettiEsperienza({ esperienza, onUpdate }) {
  let { idUrl } = useParams();
  console.log(idUrl);
  if (!idUrl) {
    idUrl = idAle;
    console.log(idUrl);
  }

  const [validated, setValidated] = useState(false);
  const [modExp, setModExp] = useState({
    role: "",
    company: "",
    startDate: "2022-02-02",
    endDate: null,
    description: "",
    area: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addmodExp = (data) => {
    /* modifica esperienza chiamata PUT */
    axios
      .put(
        `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/${esperienza._id}`,
        data,
        {
          headers: {
            Authorization:
            "Bearer "+BEARER_TOKEN ,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        onUpdate(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });

      setShowPutMod(false)
      
  };

  const deleteExp = () => {
    /* eliminazione esperienza chiamata DELETE */
    axios
      .delete(
        `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/${esperienza._id}`,
        {
          headers: {
            Authorization:
            "Bearer "+BEARER_TOKEN ,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        onUpdate(null)
      })
      .catch(function (error) {
        console.log(error);
      });

    handleClose();
    
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(modExp);
    setValidated(true);
    addmodExp(modExp);
  };

  const mesi = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ];

  const anni = () => {
    const arr = [];
    for (let y = 2024; y > 1924; y--) {
      arr.push(y);
    }
    return arr;
  };

  const [showPutMod, setShowPutMod] = useState(false);

  const icone = useRef();

  const mostraIcone = () => {
    icone.current.classList.remove("d-none");
  };

  const nascondiIcone = () => {
    icone.current.classList.add("d-none");
  };

  useEffect(() => {

    console.log('use Effect', modExp);

  }, [modExp]);


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
                    }) + " - "}
                    {esperienza.endDate
                      ? new Date(esperienza.endDate).toLocaleDateString("it", {
                          month: "long",
                          year: "numeric",
                        })
                      : " Presente"}
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
          {idUrl == idAle && (
            <>
              {" "}
              <div
                className="matita-btn"
                onClick={() => setShowPutMod(true)}
              >
                <RiPencilLine />
              </div>
              <div className="matita-btn" onClick={handleShow}>
                <FaTrash className="gregTrash" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* modale chiamata PUT - modifica esperienza */}
      <Modal
        className=""
        size="lg"
        show={showPutMod}
        onHide={() => setShowPutMod(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Modifica esperienza
          </Modal.Title>
        </Modal.Header>
        <p className="text-secondary mx-3">* Indica che è obbligatorio</p>
        <Modal.Body className="mx-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01" className="fs-6 my-3">
              <Form.Label className="text-secondary">Qualifica*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Esempio: Full StackDeveloper"
                defaultValue={esperienza.role}
                onChange={(e) => setModExp({ ...modExp, role: e.target.value })}
              />
            </Form.Group>
            {/* tipo di impiego select */}
            <Form.Group controlId="validationCustom02" className="fs-6 my-3">
              <Form.Label className="text-secondary">Nome azienda*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Esempio: Microsoft"
                defaultValue={esperienza.company}

                onChange={(e) =>
                  setModExp({ ...modExp, company: e.target.value })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom03" className="fs-6 my-3">
              <Form.Label className="text-secondary">Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Cava dei Selci, Italia"
                defaultValue={esperienza.area}
                onChange={(e) => setModExp({ ...modExp, area: e.target.value })}
              />
            </Form.Group>
            {/* tipo di località select */}
            {/* checkbox Attualmente ricopro questo incarico */}
            {/* Select data inizio e fine  */}
            <Row className="align-items-end">
              <Col>
                <Form.Group
                  controlId="validationCustom03"
                  className="fs-6 my-3"
                >
                  <Form.Label className="text-secondary">
                    Data di inizio*
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Mese</option>
                    {mesi.map((m, index) => (
                      <option key={index} value={index + 1}>
                        {m}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="validationCustom03"
                  className="fs-6 my-3"
                >
                  <Form.Label className="text-secondary"></Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Anno</option>
                    {anni().map((y, index) => (
                      <option key={index} value={index + 1}>
                        {y}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="align-items-flex-end">
              <Col>
                <Form.Group
                  controlId="validationCustom03"
                  className="fs-6 my-3"
                >
                  <Form.Label className="text-secondary">
                    Data di fine*
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Mese</option>
                    {mesi.map((m, index) => (
                      <option key={index} value={index + 1}>
                        {m}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="validationCustom03"
                  className="fs-6 my-3"
                >
                  <Form.Label className="text-secondary"></Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Anno</option>
                    {anni().map((y, index) => (
                      <option key={index} value={index + 1}>
                        {y}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="validationCustom04">
              <Form.Label className="text-secondary">Settore</Form.Label>
              <Form.Control type="text" placeholder="Ricerca e sviluppo" />
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Label className="text-secondary">Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: "100px" }}
                defaultValue={esperienza.description}
                onChange={(e) =>
                  setModExp({ ...modExp, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Label className="text-secondary">Sommario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Baby pensionato"

              />
            </Form.Group>

            <h3>Competenze</h3>
            <Button variant="outline-primary" className="fw-semibold fs-5">
              <FaPlus /> Aggiungi competenza
            </Button>

            <h3>Media</h3>
            <Button variant="outline-primary" className="fw-semibold fs-5">
              <FaPlus /> Aggiungi media
            </Button>

            <Button type="button" onClick={handleSubmit}>
              Salva
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* modale chiamate DELETE - eliminazione esperienza */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancella esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sei sicuro di voler rimuove definitivamente questa esperienza dal tuo
          profilo?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={deleteExp}>
            Sì
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
