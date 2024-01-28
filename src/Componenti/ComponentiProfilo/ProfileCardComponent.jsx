import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, Form, Image, InputGroup, Modal, Row } from 'react-bootstrap'
import { RiPencilLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { MdOutlineFileDownload } from "react-icons/md";
import { TbInfoSquareFilled } from "react-icons/tb";
import { FiCornerUpRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";


export default function ProfileCardComponent() {

  const { idUrl } = useParams()

  console.log(idUrl)

  const user = useSelector(state => state.user.userData)
  /* const [ id, setId] = useState(useParams()); */
  const [id, setId] = useState("6551e7bbc55e7e0018f83bfb");
  const [esperienze, setEsperienze] = useState([]);
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



  useEffect(() => {
    axios
      .get(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2JmMmMwNTgzNTAwMTg1MjMwZGMiLCJpYXQiOjE3MDYxNzQ1OTIsImV4cCI6MTcwNzM4NDE5Mn0.CyKBDIwBzHkgovr4Z3UIy0SAkGIt3ZvpUsSwkxUWMOg",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setEsperienze(res.data[0]);
      })
      .catch((err) => console.log(console.error()));
  }, [id]);
  return (
    <>
      <Card className='position-relative' style={{marginBottom: "0.5rem"}}>
        <Card.Img variant="top" src="https://picsum.photos/800/200" />
        <Image roundedCircle className='border border-white border-5 position-absolute ms-3 w-25' src={user.image} style={{ marginTop: '4rem' }} />

        { idUrl ? null : <div className="matita-btn position-absolute top-0 end-0 m-4 bg-white text-primary">
          <RiPencilLine />
        </div> }
        <Card.Body>
          <Row xs={1} className='my-3 '>
            { idUrl ? null :<Col className='offset-11 matita-btn' onClick={handleShow}>

             <RiPencilLine /> 

            </Col>}
          </Row>
          <Row className=' justify-content-between'>
            <Col>
              <h1>{user.name} {user.surname}</h1>
              <h2 className='text-secondary fs-4'></h2>
              <p className=''>qui ci va l'area{user.area}&middot; <span className='text-primary fw-bold'>Informazione di contatto</span></p>
              <p className='text-primary fw-bold'>178 contatti</p>
            </Col>
            <Col xs={5}>
              <Row >
                <Col xs={3}>
                  <Image fluid rounded className=' float-end' src={esperienze.image} />
                </Col>
                <Col>
                  <p className=' fs-6 m-0'>{esperienze.role}</p>
                  <p className=' fs-6 m-0 fs-semibold'>{esperienze.company}</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Dropdown className='d-inline' >
            <Dropdown.Toggle className='rounded-5 me-3 fw-semibold fs-6 px-3'>Disponibile per
            </Dropdown.Toggle>

            <Dropdown.Menu className='fs-6 shadow-sm rounded-4 '>
              <Dropdown.Item className='my-2'>
                <span className='fw-bold'>Cambiare Lavoro</span>
                <br />
                <span className='text-secondary'>Mostra ai recruiter e ad altri che sei disponibile a lavorare</span>
              </Dropdown.Item>
              <Dropdown.Item className='my-2'>
                <span className='fw-bold'>Selezione del personale</span>
                <br />
                <span className='text-secondary'>Fai sapere che stai facendo selezione e attrai candidati qualificati</span>
              </Dropdown.Item>
              <Dropdown.Item className='my-2'>
                <span className='fw-bold'>Servizi offerti</span>
                <br />
                <span className='text-secondary'>Metti in risalto i servizi che offri così i nuovi clienti potranno</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant='outline-primary' className='rounded-5 me-3 fw-semibold fs-6 px-3'>Aggiungi sezione del profilo</Button>
          <Dropdown className='d-inline'>
            <Dropdown.Toggle variant='outline-secondary' className='rounded-5 me-3 fw-semibold fs-6 px-3 '>
              Altro
            </Dropdown.Toggle>

            <Dropdown.Menu className='fs-6 shadow-sm rounded-4 '>
              <Dropdown.Item className='my-2'><FiCornerUpRight className='text-secondary fs-2 me-2' />Invia il profilo in un messaggio</Dropdown.Item>
              <Dropdown.Item className='my-2'><MdOutlineFileDownload className='text-secondary fs-2 me-2' /> Salva come PDF</Dropdown.Item>
              <Dropdown.Item className='my-2'><TbInfoSquareFilled className='  text-secondary fs-2 me-2' />Informazioni su questo profilo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </Card.Body>
      </Card>


      {/* Modale modifica profilo */}
      <Modal show={show} onHide={handleClose} size='lg' scrollable='true' >
        <Modal.Header closeButton>
          <Modal.Title>Mofidica presentazione</Modal.Title>
        </Modal.Header>
        <p className='text-secondary mx-3'>* Indica che è obbligatorio</p>
        <Modal.Body className='mx-3'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
           
          <Form.Group  controlId="validationCustom01" className='fs-6 my-3'>
              <Form.Label className='text-secondary'>Nome*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                defaultValue={user.name}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom02" className='fs-6 my-3'>
              <Form.Label className='text-secondary' >Cognome*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue={user.surname}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationCustom03" className='fs-6 my-3'>
              <Form.Label className='text-secondary' >Nome aggiuntivo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                defaultValue=""
              />
            </Form.Group>
            <p className='text-secondary'>Pronuncia del nome</p>
            <p><TbInfoSquareFilled/> Può essere aggiunta solo usando la nostra app per dispositivi mobili</p>
            <Form.Group controlId="validationCustom04">
              <Form.Label className='text-secondary' >Inserisci pronomi personalizzati</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Label className='text-secondary' >Sommario*</Form.Label>
              <Form.Control type="text" placeholder="" required defaultValue={user.title} />
            </Form.Group>

            <p className='fs-5'>Scopri di più sui <span className='text-primary fw-semibold '>pronomi di genere</span></p>
           
            <h3>Posizione attuale</h3>
            <Button variant='outline-primary' className='fw-semibold fs-5'><FaPlus /> Aggiungi una nuova posizione lavorativa</Button>

            

         
            <Form.Group controlId="validationCustom05">
              <Form.Label className='text-secondary' >Settore*</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="validationCustom06">
              <Form.Label className='text-secondary' >Settore*</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="validationCustom07">
              <Form.Label className='text-secondary'>Formazione</Form.Label>
              <Form.Control type="text" placeholder={esperienze.company} required />
            </Form.Group>

            <Form.Group controlId="validationCustom08">
              <Form.Label className='text-secondary'>Località</Form.Label>
              <Form.Control type="text" placeholder={user.area} required />
            </Form.Group>

            <Form.Group controlId="validationCustom09">
              <Form.Label className='text-secondary'>Formazione</Form.Label>
              <Form.Control type="text" placeholder={esperienze.company} required />
            </Form.Group>


          

            <Button type="submit">Submit form</Button>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" className='rounded-5 fs-5 px-3' onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
