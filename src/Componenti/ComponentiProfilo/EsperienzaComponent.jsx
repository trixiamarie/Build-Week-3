import React from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { IoAddSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../../Style/greg.css";
import MettiEsperienza from "./ComponentiProfiloAtomizzati/MettiEsperienza";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Row, Col, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../../Action/profileActions";
import { idAle, BEARER_TOKEN } from "../../Config";
import { PulseSpinner } from "react-spinners-kit";

export default function EsperienzaComponent() {
  const esperienze = useSelector(
    (state) => state.profile.profileExperiences.data
  );

  let { idUrl } = useParams();

  if (!idUrl) {
    idUrl = idAle;
  }
  const [loadingExperience, setLoadingExperience] = useState();
  const [imageExperience, setImageExperience] = useState();
  const [showPostMod, setshowPostMod] = useState(false);
  const [validated, setValidated] = useState(false);
  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    startDate: "2022-02-02",
    endDate: null,
    description: "",
    area: "",
  });
  const dispatch = useDispatch();

  const addnewExp = (data) => {
    axios
      .post(
        `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/`,
        data,
        {
          headers: {
            Authorization: "Bearer " + BEARER_TOKEN,
          },
        }
      )
      .then((response) => {
        console.log(response);
        handleExperienceImage(response.data._id);
      })
      .catch(function (error) {
        console.log(error);
        setImageExperience(false);
        setshowPostMod(false);
        setLoadingExperience(false)
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageExperience(new Blob([reader.result], { type: file.type }));
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(newExp);
    setValidated(true);
    setLoadingExperience(true);
    addnewExp(newExp);
  };

  const handleExperienceImage = (idExperience) => {
    console.log("post experience image");
    const formData = new FormData();
    if (imageExperience) {
      console.log(imageExperience);
      formData.append("experience", imageExperience);

      
        console.log(formData);
        axios.post(
          `https://striveschool-api.herokuapp.com/api/profile/${idUrl}/experiences/${idExperience}/picture`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + BEARER_TOKEN,
            },
          }
        ).then(response => {
          dispatch(getExperiences(idUrl));
          setLoadingExperience(false);
          setshowPostMod(false);
        })
        .catch(err => {
          console.error("Error:", err);


        })

    }
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

  useEffect(() => {
    console.log(idUrl);
    dispatch(getExperiences(idUrl));
    console.log(idUrl);
  }, [idUrl]);

  const updateExperiences = (updatedExperience) => {
    dispatch(getExperiences(idUrl));
  };

  return (
    <>
      {esperienze.length > 0 ? (
        <div className="border rounded px-4 pt-3 pb-0 bg-white my-2">
          <div className="d-flex justify-content-between alig-items-start">
            <h4>Esperienza</h4>

            <div className="text-secondary fs-5 d-flex">
              {idUrl == idAle && (
                <div
                  className="matita-btn"
                  onClick={() => {
                    setshowPostMod(true);
                    console.log("modale PUT exp");
                  }}
                >
                  <IoAddSharp />
                </div>
              )}
            </div>
          </div>
          {esperienze.length > 0 && (
            <div className="esperienze mt-2 mb-0 pb-0">
              {esperienze.map((ele) => (
                <MettiEsperienza
                  key={ele._id}
                  esperienza={ele}
                  onUpdate={updateExperiences}
                />
              ))}
            </div>
          )}
        </div>
      ) : null}

      {/* modale per aggiungere una nuova esperienza chiamata POST */}
      <Modal
        size="lg"
        show={showPostMod}
        onHide={() => setshowPostMod(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Aggiungi esperienza
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
                onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
              />
            </Form.Group>
            {/* tipo di impiego select */}
            <Form.Group controlId="validationCustom02" className="fs-6 my-3">
              <Form.Label className="text-secondary">Nome azienda*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Esempio: Microsoft"
                onChange={(e) =>
                  setNewExp({ ...newExp, company: e.target.value })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom03" className="fs-6 my-3">
              <Form.Label className="text-secondary">Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Cava dei Selci, Italia"
                onChange={(e) => setNewExp({ ...newExp, area: e.target.value })}
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
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Label className="text-secondary">Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: "100px" }}
                onChange={(e) =>
                  setNewExp({ ...newExp, description: e.target.value })
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
            {/* <Button variant="outline-primary" className="fw-semibold fs-5">
              <FaPlus /> Aggiungi media
            </Button> */}
            <FormControl type="file" onChange={handleFileChange} />

            <Button
              type="button"
              onClick={handleSubmit}
              disabled={loadingExperience}
            >
              {loadingExperience ? (
                <PulseSpinner loading={loadingExperience} />
              ) : (
                "Salva"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
