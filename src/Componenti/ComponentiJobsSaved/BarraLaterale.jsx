import React from 'react'
import { Container } from 'react-bootstrap'
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { useSelector } from 'react-redux';


export default function BarraLaterale() {

  const preferiti = useSelector(state=>state.jobsSaved)
  return (
    <Container className='bg-white border border-secondary-subtle rounded w-25 h-25 pt-4 px-0 '>
      <Container className='d-flex primoDivGreg border-bottom pb-3'>
      <PiBookmarkSimpleFill className='fs-5 text me-2'/>
      <h3 className='fs-5 '>I miei elementi </h3>
      </Container>
      <Container className='pt-3 px-0 secondoDivGreg'>
        <div className='d-flex justify-content-between mx-3 '>
           <h3 className='fs-5 '>Le mie offerte di lavoro</h3>
           <p className='fs-5 align-self-start text-black'>{preferiti.length}</p>
        </div>       
      </Container>

    </Container>
  )
}
