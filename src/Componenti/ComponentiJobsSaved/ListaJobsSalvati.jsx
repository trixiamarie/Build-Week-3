import React from 'react'
import { Card, CardBody, CardHeader, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardJobs from '../ComponentiJobs/CardJobs';
import CardJobsSaved from './CardJobsSaved';


export default function () {
  let jobsSaved = useSelector(state=>state.jobsSaved )
  return (
    
      <Card className='CardJobsSaveds border rounded-3 border-1 py-3 px-3 bg-white'>
      <CardHeader className='bg-white'>
        <h2 className='fs-2 text fw-medium mb-3'>Le mie offerte di lavoro</h2> 
        <button type="button" className="btn btn-success rounded-pill me-3"><span className='fw-medium'>Salvate</span></button>
        <button type="button" class="btn btn-outline-secondary rounded-pill"><span className='fw-medium'>Archiviate</span></button></CardHeader>
    <CardBody className='CardContainerJobsSavedss'>
  
        {jobsSaved.map((ele,index)=> <CardJobsSaved impiego={ele} indice={index}/>)}

      </CardBody>
      </Card>
    
  )
}
