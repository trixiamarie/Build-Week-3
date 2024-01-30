import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardJobs from '../ComponentiJobs/CardJobs';
import CardJobsSaved from './CardJobsSaved';


export default function () {
  let jobsSaved = useSelector(state=>state.jobsSaved )
  return (
    <Container className='bg-white border border-secondary-subtle rounded w-50'>
      <div className='border-bottom py-3 px-3'>
        <h2 className='fs-2 text fw-medium mb-3'>Le mie offerte di lavoro</h2> 
        <button type="button" className="btn btn-success rounded-pill me-3"><span className='fw-medium'>Salvate</span></button>
        <button type="button" class="btn btn-outline-secondary rounded-pill"><span className='fw-medium'>Archiviate</span></button>
      </div>
  
        {jobsSaved.map((ele,index)=> <CardJobsSaved impiego={ele} indice={index}/>)}

      
    </Container>
  )
}
