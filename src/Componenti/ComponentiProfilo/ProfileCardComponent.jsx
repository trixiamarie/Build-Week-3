import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { RiPencilLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbInfoSquareFilled } from "react-icons/tb";
import { FiCornerUpRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getProfileData, getExperiences } from "../../Action/profileActions";
import { idAle, BEARER_TOKEN } from "../../Config";
import { getUserData } from "../../Action/userActions";
import { getAllPostsData } from "../../Action/postsActions";
import "../../Style/ProfileCardComponent.css"


export default function ProfileCardComponent() {
  const listFriends = useSelector(state => state.userFriends)
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData.data);
  const profile = useSelector((state) => state.profile);
  let [nContatti, setNContatti] = useState(Math.floor(Math.random() * 200));
  const amici = useSelector((state) => state.userFriends);
  const { idUrl } = useParams();

  const [showChangeImage, setShowChangeImage] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [loaderImageProfile, setLoaderImageProfile] = useState(false)

  // Aggiorniamo l'URL corrente quando la location cambia
  useEffect(() => {
    dispatch(getProfileData(idUrl));
    dispatch(getExperiences(idUrl));

    setNContatti(Math.floor(Math.random() * 200));
  }, [idUrl]);

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* roba di gregorio per mostrare o meno le icone */
  const icone = useRef();

  const mostraIcone = () => {
    icone.current.classList.remove("d-none");
  };

  const nascondiIcone = () => {
    icone.current.classList.add("d-none");
  };

  const updateProfile = (data) => {
    axios
      .put(`https://striveschool-api.herokuapp.com/api/profile/`, data, {
        headers: {
          Authorization: "Bearer " + BEARER_TOKEN,
        },
      })
      .then(function (response) {
        console.log(response);
        dispatch(getAllPostsData());
        dispatch(getUserData());
        dispatch(getProfileData());
      })
      .catch(function (error) {
        console.log(error);
      });
    handleClose();
  };
  const [modProfile, setModProfile] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(new Blob([reader.result], { type: file.type }));
    };
    reader.readAsArrayBuffer(file);
  };

  const handleProfileImage = (e) => {
    loadProfileImage(e);
  };

  const loadProfileImage = async (e) => {
    e.preventDefault();
    setLoaderImageProfile(true);
    const formData = new FormData();
    if (profileImage) {
      console.log(profileImage);
      formData.append("profile", profileImage);

      try {
        console.log(formData);
        const response = await axios
          .post(
            `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`,
            formData,
            {
              headers: {
                Authorization: "Bearer " + BEARER_TOKEN,
              },
            }
          )
          .then(() => {
            dispatch(getProfileData(idUrl));
            dispatch(getUserData());
            setShowChangeImage(false);
            setLoaderImageProfile(false)
          });

        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error:", error);
        setLoaderImageProfile(false)
      }
    }
  };

  return (
    <>
      <Card
        className="position-relative"
        style={{ marginBottom: "0.5rem" }}
        onMouseEnter={mostraIcone}
        onMouseLeave={nascondiIcone}
      >
        <Card.Img
          variant="top"
          src="https://picsum.photos/800/200"
          style={{ height: "14rem" }}
        />
        <Image
          roundedCircle
          className="border border-white border-5 position-absolute ms-3"
          src={profile.profileData.data.image}
          style={{
            height: "12rem",
            width: "12rem",
            top: "5rem",
            left: "2rem ",
          }}
          onClick={() => setShowChangeImage(true)}
        />

        {idUrl == idAle ? (
          <div
            className="matita-btn m-4"
            style={{ color: "black", zIndex: "9999" }}
          >
            <RiPencilLine
              className="text-dark "
              style={{ color: "black", zIndex: "9999" }}
            />
          </div>
        ) : null}
        <Card.Body>
          <Row xs={1} className="my-3" style={{ height: "2rem" }}>
            <div ref={icone}>
              {idUrl ? null : (
                <RiPencilLine
                  className="matita-btn float-end matita-in-culo"
                  onClick={handleShow}
                />
              )}
            </div>
            {/* <Col
              ref={icone}
              className="offset-11 matita-btn"
              onClick={handleShow}
            >
              {idUrl == idAle ? <RiPencilLine/> : null}
            </Col> */}
          </Row>
          <Row className=" justify-content-between">
            <Col>
              <h1 className="text-truncate" style={{ maxWidth: "450px" }}>
                {profile.profileData.data.name}{" "}
                {profile.profileData.data.surname}
              </h1>
              <h2 className="text-secondary fs-4"></h2>
              <p className="">
                {profile.profileData.data.area}&middot;{" "}
                <span className="text-primary fw-bold">
                  Informazione di contatto
                </span>
              </p>
              <p className="text-primary fw-bold">
                {profile.profileData.data._id === user._id
                  ? amici.length
                  : nContatti}{" "}
                contatti
              </p>
            </Col>
            <Col xs={5}>
              {profile.profileExperiences.data.length > 0 && (
                <Row>
                  <Col xs={3}>
                    <Image
                      fluid
                      rounded
                      className=" float-end"
                      src={
                        profile.profileExperiences.data[0].image
                          ? profile.profileExperiences.data[0].image
                          : "https://kodilan.com/img/empty-company-logo.8437254b.png"
                      }
                    />
                  </Col>
                  <Col>
                    <p className=" fs-6 m-0 text-truncate">
                      {profile.profileExperiences.data[0].role}
                    </p>
                    <p className=" fs-6 m-0 fs-semibold">
                      {profile.profileExperiences.data[0].company}
                    </p>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>

          <Dropdown className="d-inline">
            <Dropdown.Toggle className="d-none d-md-inline rounded-5 me-3 fw-semibold fs-6 px-3">
              Disponibile per
            </Dropdown.Toggle>

            <Dropdown.Menu className="fs-6 shadow-sm rounded-4 ">
              <Dropdown.Item className="my-2 ">
                <span className="fw-bold">Cambiare Lavoro</span>
                <br />
                <span className="text-secondary">
                  Mostra ai recruiter e ad altri che sei disponibile a lavorare
                </span>
              </Dropdown.Item>
              <Dropdown.Item className="my-2">
                <span className="fw-bold">Selezione del personale</span>
                <br />
                <span className="text-secondary">
                  Fai sapere che stai facendo selezione e attrai candidati
                  qualificati
                </span>
              </Dropdown.Item>
              <Dropdown.Item className="my-2">
                <span className="fw-bold">Servizi offerti</span>
                <br />
                <span className="text-secondary">
                  Metti in risalto i servizi che offri così i nuovi clienti
                  potranno
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button
            variant="outline-primary"
            className="d-none d-md-inline rounded-5 me-3 fw-semibold fs-6 px-3"
          >
            Aggiungi sezione del profilo
          </Button>
          <Dropdown className="d-none d-md-inline">
            <Dropdown.Toggle
              variant="outline-secondary"
              className="rounded-5 me-3 fw-semibold fs-6 px-3 "
            >
              Altro
            </Dropdown.Toggle>

            <Dropdown.Menu className="fs-6 shadow-sm rounded-4 ">
              <Dropdown.Item className="my-2">
                <FiCornerUpRight className="text-secondary fs-2 me-2" />
                Invia il profilo in un messaggio
              </Dropdown.Item>
              <Dropdown.Item className="my-2">
                <MdOutlineFileDownload className="text-secondary fs-2 me-2" />{" "}
                Salva come PDF
              </Dropdown.Item>
              <Dropdown.Item className="my-2">
                <TbInfoSquareFilled className="  text-secondary fs-2 me-2" />
                Informazioni su questo profilo
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>

      {/* Modale modifica profilo */}
      <Modal show={show} onHide={handleClose} size="lg" scrollable="true">
        <Modal.Header closeButton>
          <Modal.Title>Mofidica presentazione</Modal.Title>
        </Modal.Header>
        <p className="text-secondary mx-3">* Indica che è obbligatorio</p>
        <Modal.Body className="mx-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01" className="fs-6 my-3">
              <Form.Label className="text-secondary">Nome*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                defaultValue={profile.profileData.data.name}
                onChange={(e) =>
                  setModProfile({ ...modProfile, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="validationCustom02" className="fs-6 my-3">
              <Form.Label className="text-secondary">Cognome*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue={profile.profileData.data.surname}
                onChange={(e) =>
                  setModProfile({ ...modProfile, surname: e.target.value })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom03" className="fs-6 my-3">
              <Form.Label className="text-secondary">
                Nome aggiuntivo
              </Form.Label>
              <Form.Control type="text" placeholder="" defaultValue="" />
            </Form.Group>
            <p className="text-secondary">Pronuncia del nome</p>
            <p>
              <TbInfoSquareFilled /> Può essere aggiunta solo usando la nostra
              app per dispositivi mobili
            </p>
            <Form.Group controlId="validationCustom04"  className="fs-6 my-3">
              <Form.Label className="text-secondary">
                Inserisci pronomi personalizzati
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

           

            <p className="fs-5">
              Scopri di più sui{" "}
              <span className="text-primary fw-semibold ">
                pronomi di genere
              </span>
            </p>
            <Form.Group controlId="validationCustom04"  className="fs-6 my-3">
              <Form.Label className="text-secondary">Sommario*</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                defaultValue={profile.profileData.data.title}
                onChange={(e) =>
                  setModProfile({ ...modProfile, title: e.target.value })
                }
              />
            </Form.Group>


            <Form.Group controlId="validationCustom06"  className="fs-6 my-3">
              <Form.Label className="text-secondary">Località*</Form.Label>
              <Form.Control
                type="text"
                placeholder={profile.profileData.data.area}
                onChange={(e) =>
                  setModProfile({ ...modProfile, area: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="outline-primary" className="fw-semibold fs-5 my-4">
              <FaPlus /> Aggiungi un nuovo grado di formazione
            </Button>

            <Form.Group controlId="validationCustom05"  className="fs-6 my-3">
              <Form.Label className="text-secondary">Bio*</Form.Label>
              <Form.Control
                type="text"
                placeholder={profile.profileData.data.bio}
                onChange={(e) =>
                  setModProfile({ ...modProfile, bio: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="validationCustom06"  className="fs-6 my-3">
              <Form.Label className="text-secondary">email*</Form.Label>
              <Form.Control
                type="text"
                placeholder={profile.profileData.data.email}
                onChange={(e) =>
                  setModProfile({ ...modProfile, email: e.target.value })
                }
              />
            </Form.Group>
            <h3 className='mt-4'>Posizione attuale</h3>
            <Button variant="outline-primary" className="fw-semibold fs-5 my-4">
              <FaPlus /> Aggiungi una nuova posizione lavorativa
            </Button>


            <Form.Group controlId="validationCustom04">
              <Form.Label className="text-secondary">Settore</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Ricerca e sviluppo" />
            </Form.Group>
         
            <p className='text-secondary my-2 fs-5' >Scopri di più sulle <span className='text-primary fw-semibold'>opzioni relative al settore</span></p>

            <h3 className='mt-4'>Formazione</h3>
            <Form.Group controlId="validationCustom07"  className="fs-6 my-3">
              <Form.Label className="text-secondary">Formazione</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  profile.profileExperiences.data.length > 0 &&
                  profile.profileExperiences.data[0].company
                }
                required
              />
            </Form.Group>
            <Button variant="outline-primary" className="fw-semibold fs-5 my-4">
              <FaPlus /> Aggiungi un nuovo grado di formazione
            </Button>

            <h3 className='mt-4'>Informazioni di contatto</h3>   
            <p className="text-secondary">Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>
            <Button variant="outline-primary" className="fw-semibold fs-5 my-4">
              Modifica le informazioni di contatto
            </Button>

            

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="fw-semibold fs-5 rounded-5 mt-2 px-4" 
            onClick={() => updateProfile(modProfile)}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modale modifica foto profilo */}
      <Modal
        data-bs-theme="dark"
        className="text-white"
        show={showChangeImage}
        onHide={() => setShowChangeImage(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Foto Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image
            roundedCircle
            className="border border-white border-5  ms-3"
            src={profile.profileData.data.image}
            style={{
              height: "12rem",
              width: "12rem",
              top: "5rem",
              left: "2rem ",
            }}
            onClick={() => setShowChangeImage(true)}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between flex-direction-row">
          <Form.Control
            type="file"
            className="w-50"
            onChange={handleFileChange}
          />
          <div>
            <Button
              variant="success"
              className="me-2"
              disabled={loaderImageProfile}
              onClick={(e) => {
                handleProfileImage(e);
                
              }}
            >
              { loaderImageProfile ? "Loading" : "Save"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowChangeImage(false)}
            >
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
