import React, { useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import { idAle, BEARER_TOKEN } from "../../../Config";
import { getExperiences } from "../../../Action/profileActions";
import { useDispatch } from "react-redux";

export default function MettiEsperienza({ esperienza, onUpdate }) {
  let { idUrl } = useParams();
  const dispatch = useDispatch();

  if (!idUrl) {
    idUrl = idAle;
  }
  let startM;
  let startY;
  let endM;
  let endY;
  const [pippo, setPippo] = useState(false);

  const [validated, setValidated] = useState(false);
  const [modExp, setModExp] = useState({
    role: esperienza.role,
    company: esperienza.company,
    startDate: esperienza.startDate,
    endDate: esperienza.endDate,
    description: esperienza.description,
    area: esperienza.area,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loadingExperience, setLoadingExperience] = useState(false);
  const [imageExperience, setImageExperience] = useState();

  const mediaInput = useRef();
  const mostraMediaInput = () => {
    mediaInput.current.classList.remove("d-none");
  };

  const nascondiMediaInput = () => {
    mediaInput.current.classList.add("d-none");
  };


  const addmodExp = (data) => {
    console.log(data)
    /* modifica esperienza chiamata PUT */
    axios
      .put(
        `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/${esperienza._id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + BEARER_TOKEN,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        console.log(
          "date inviate col put - inizio",
          response.data.startDate,
          " - fine ",
          response.data.endDate
        );
        onUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteExp = () => {
    /* eliminazione esperienza chiamata DELETE */
    axios
      .delete(
        `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/${esperienza._id}`,
        {
          headers: {
            Authorization: "Bearer " + BEARER_TOKEN,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        onUpdate(null);
      })
      .catch(function (error) {
        console.log(error);
      });

    handleClose();
  };

  function modExpDate() {
    console.log( startM, startY, endM, endY)
    if (
      startM !== "Mese" &&
      startY !== "Anno" &&
      endM !== undefined &&
      endY !== undefined
    ) {
      setModExp({
        ...modExp,
        startDate: startY + "-" + startM + "-01",
        endDate: endY + "-" + endM + "-01",
      });
      console.log(modExp.startDate);
      setPippo(!pippo);
    } else if (
      startM !== "Mese" &&
      startY !== "Anno" &&
      endM === undefined &&
      endY === undefined
    ) {
      setModExp({
        ...modExp,
        startDate: startY + "-" + startM + "-01",
        endDate: null,
      });
      console.log(modExp.startDate);
      setPippo(!pippo);
    } else {
      console.log("errore nelle date");
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageExperience(new Blob([reader.result], { type: file.type }));
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = (event) => {
    const form = event.target;
    console.log(
      " DATE AGGIORNATE DA INSERIRE inizio " +
        startM +
        "-" +
        startY +
        " fine " +
        endM +
        "-" +
        endY
    );

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setLoadingExperience(true);

      setValidated(true);
      modExpDate();
      
    }
    console.log(modExp);
  };

  const handleExperienceImage = () => {
    console.log("post experience image");

    const formData = new FormData();
    if (imageExperience) {
      console.log(imageExperience);
      formData.append("experience", imageExperience);
    }

    console.log(formData);
    axios
      .post(
        `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/${esperienza._id}/picture`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + BEARER_TOKEN,
          },
        }
      )
      .catch((err) => {
        console.error("Error:", err);
      })
      .finally((response) => {
        dispatch(getExperiences(idUrl));
        setLoadingExperience(false);
        setShowPutMod(false);
       
        

        // setImageExperience(null);
      });
  };

  useEffect(() => {
    handleExperienceImage();
    addmodExp(modExp);
  }, [pippo]);

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
              <div className="card-body ps-2 pt-0">
                <p style={{fontSize:"1rem", fontWeight:"500", padding:"0px"}} className="card-title mb-0">{esperienza.role}</p>
                <div className="card-text mb-0">
                  <p style={{fontSize:"0.875rem"}} className="mb-0 ">{esperienza.company}</p>
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
                    <span style={{fontSize:"0.875rem"}} className="fw-medium">Descrizione:</span>{" "}
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
              <div className="matita-btn" onClick={() => setShowPutMod(true)}>
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
          <Form noValidate validated={validated}>
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

            <Form.Label className="text-secondary">Tipo di impiego</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleziona</option>
              <option>A tempo pieno</option>
              <option>Part-Time</option>
              <option>Autonomo</option>
              <option>Freelance</option>
              <option>A contratto</option>
              <option>Stage</option>
              <option>Apprendistato</option>
              <option>Stagionale</option>
            </Form.Select>
            <p className="text-secondary my-2 fs-5">
              Scopri di più sui{" "}
              <span className="text-primary fw-semibold">tipi di impiego</span>
            </p>

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

            <Form.Label className="text-secondary">Tipo di località</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleziona</option>
              <option>In sede</option>
              <option>Ibrida</option>
            </Form.Select>
            <p className="text-secondary">
              Scegli un tipo di località (es. da remoto)
            </p>

            <Row className="align-items-end">
              <Col>
                <Form.Group
                  controlId="validationCustom03"
                  className="fs-6 my-3"
                >
                  <Form.Label className="text-secondary">
                    Data di inizio*
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => (startM = e.target.value)}
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => (startY = e.target.value)}
                  >
                    <option>Anno</option>
                    {anni().map((y, index) => (
                      <option key={index} value={y}>
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => (endM = e.target.value)}
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => (endY = e.target.value)}
                  >
                    <option>Anno</option>
                    {anni().map((y, index) => (
                      <option key={index} value={y}>
                        {y}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="validationCustom04">
              <Form.Label className="text-secondary">Settore</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Ricerca e sviluppo"
              />
            </Form.Group>
            <p className="text-secondary">
              LinkedIn utilizza le informazioni sul settore per fornire
              segnalazioni più pertinenti
            </p>
            <p className="text-secondary my-2 fs-5">
              Scopri di più sulle{" "}
              <span className="text-primary fw-semibold">
                opzioni relative al settore
              </span>
            </p>

            <Form.Group controlId="validationCustom04" className="mt-4">
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

            <Form.Group controlId="validationCustom04" className="mt-4">
              <Form.Label className="text-secondary">
                Sommario del profilo
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Baby pensionato"
              />
            </Form.Group>
            <p className="text-secondary">
              Compare sotto il tuo nome nella parte superiore del profilo
            </p>

            <h3>Competenze</h3>
            <p className="my-2 ">
              Ti consigliamo di aggiungere le 5 competenze più utilizzate in
              questo ruolo. Appariranno anche nella sezione Competenze.
            </p>

            <Button
              variant="outline-primary"
              className="fw-semibold fs-5 rounded-5 mt-2 mb-4"
            >
              <div className=" d-flex align-items-center mx-2">
                <FaPlus className="me-2" /> Aggiungi competenza
              </div>
            </Button>

            <h3>Media</h3>
            <p className="my-2 ">
              Aggiungi contenuti multimediali come immagini, documenti, siti o
              presentazioni. Scopri di più sui{" "}
              <span className="text-primary fw-semibold">
                tipi di file multimediali supportati
              </span>
            </p>
            <Button variant="outline-primary" className="fw-semibold fs-5 rounded-5 mt-2 mb-4" onClick={mostraMediaInput}>
              <div className=' d-flex align-items-center mx-2'>
              <FaPlus className="me-2" /> Aggiungi media
                </div>
            </Button> 

            <Form.Control type="file" onChange={handleFileChange} ref={mediaInput} className='d-none'/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={loadingExperience}
            type="button"
            onClick={handleSubmit}
            className="fw-semibold fs-5 rounded-5 mt-2 mb-4 px-4"
          >
            {loadingExperience ? "Loading..." : "Salva"}
          </Button>
        </Modal.Footer>
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
