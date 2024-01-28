import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MdRemoveRedEye } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaSatelliteDish } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

export default function RisorseComponent() {
 const { id } = useParams()



    
  return (
    <>
    {id ? null :
    <div className='border rounded-2 pt-3 bg-white'>
    <Container className='mx-2 mb-3'>
    <h3 className='m-0'>Risorse</h3>
    <p className='text-secondary m-0 d-flex align-items-center fs-6'><MdRemoveRedEye className='me-1' /> Solo per te</p>
    </Container>
    <Container>
        <Row className='flex-wrap mx-1'>
            <Col xs={12} >
                <Row>
                    <Col xs={1}  className='d-flex justify-content-center align-items-start p-0 pt-1'>
                      <FaSatelliteDish className='fs-3'/>
                    </Col>
                    <Col xs={11} >
                        <p className='fw-semibold m-0 fs-6'>Mostra la creazione di contenuti</p>
                        <p>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
                    </Col>
                </Row>
            </Col>
            <Col >
                <Row>
                    <Col xs={1}  className='d-flex justify-content-center align-items-start p-0 pt-1'>
                        <IoPeopleSharp className='fs-3'/>
                    </Col>
                    <Col xs={10}>
                        <p className='fw-semibold m-0 fs-6'>La mia rete</p>
                        <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                    </Col>
                </Row>
            </Col>
            
        </Row>
    </Container>
    <hr className='text-secondary m-1' />
<p className='text-center text-secondary fw-semibold my-2 fs-6 d-flex justify-content-center align-items-center'>Mostra tutte le risorse(5) <FaArrowRightLong className='fs-6 ms-2' /></p>
</div>}</>
  )
}
