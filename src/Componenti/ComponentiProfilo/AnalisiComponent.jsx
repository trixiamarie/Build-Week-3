import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MdRemoveRedEye } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams } from 'react-router-dom';


export default function AnalisiComponent() {

    const {idUrl} = useParams()
    console.log(idUrl)

    return (
        <>
        {idUrl ? null : <div className='border rounded-2 pt-3 bg-white' style={{marginBottom: "0.5rem"}}>
            <Container className='mx-2 mb-3'>
            <p style={{fontSize:"1.25rem", fontWeight:"500"}} className='m-0'>Analisi</p>
            <p className='text-secondary m-0 d-flex align-items-center fs-6'><MdRemoveRedEye className='me-1' /> Solo per te</p>
            </Container>
            <Container>
                <Row className='flex-wrap mx-1'>
                    <Col xs={12} md={4}>
                        <Row>
                            <Col xs={1}  className='d-flex justify-content-center align-items-start p-0 pt-1'>
                                <IoPeopleSharp className='fs-6'/>
                            </Col>
                            <Col xs={11} >
                                <p className='fw-semibold m-0 fs-6'>37 visualizzazioni del profilo</p>
                                <p>Scopri chi ha visitato il tuo profilo.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row>
                            <Col xs={1}  className='d-flex justify-content-center align-items-start p-0 pt-1'>
                                <MdOutlineBarChart className='fs-6'/>
                            </Col>
                            <Col xs={10}>
                                <p className='fw-semibold m-0 fs-6'>72 impressioni del post</p>
                                <p>Scopri chi sta interagendo con i tuoi post.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row>
                            <Col xs={1} className='d-flex justify-content-center align-items-start p-0 pt-1'>
                                <FaMagnifyingGlass className='fs-6'/>
                            </Col>
                            <Col xs={10}>
                                <p className='fw-semibold m-0 fs-6'>4 comparse nei motori di ricerca</p>
                                <p>Vedi quante volte compari nei risultati di ricerca.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr className='text-secondary m-1' />
        <p className='text-center text-secondary fw-semibold my-2 fs-6 d-flex justify-content-center align-items-center'>Mostra tutte le analisi <FaArrowRightLong className='fs-6 ms-2' /></p>
    </div>}
    </>
    )
}
