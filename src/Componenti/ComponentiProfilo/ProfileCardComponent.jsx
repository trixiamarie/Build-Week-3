import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { RiPencilLine } from "react-icons/ri";

export default function ProfileCardComponent() {
  return (
    <Card className='position-relative'>
    <Card.Img variant="top" src="https://rerouting.ca/wp-content/uploads/2021/03/Simple-Technology-LinkedIn-Banner.png" />
    <Image roundedCircle className='border border-white border-5 position-absolute ms-3 w-25' src='https://www.fbi.gov/image-repository/unabomber.jpeg'/>
    <Button variant='light' className='rounded-circle position-absolute top-0 end-0 m-3'>
      <RiPencilLine className=' text-primary fs-5'/>
    </Button>
    <Card.Body>
      <Row className='mt-3 mb-5'>
        <Col className='offset-11'>
        <RiPencilLine className='text-secondary fs-3'/>
        </Col>
      </Row>
      <Row className=' justify-content-between'>
        <Col>
        <h1>UnaBomber</h1>
        <h2 className='text-secondary fs-4'>Full time Terrorist</h2>
        <p className=''>Lincoln, Montana, USA &middot; <span className='text-primary fw-bold'>Informazione di contatto</span></p>
        <p className='text-primary fw-bold'>178 contatti</p>
        </Col>
        <Col xs={5}>
          <Row >
            <Col xs={3}>
            <Image fluid rounded  className=' float-end'src='https://pbs.twimg.com/profile_images/1509787646515630107/F1mM213e_400x400.jpg'/>
            </Col>
            <Col>
            <p className=' fs-5 fw-semibold m-0'>IFOA - Training Istitute of Self Made Man</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button className='rounded-5 me-3 fw-semibold fs-5 px-3'>Disponibile per</Button>
      <Button variant='outline-primary' className='rounded-5 me-3 fw-semibold fs-5 px-3'>Aggiungi sezione del profilo</Button>
      <Button variant='outline-secondary' className='rounded-5 me-3 fw-semibold fs-5 px-3' >Altro</Button>
      
      
     
    </Card.Body>
  </Card>
  )
}
