import React from 'react'
import { Card, CardBody, CardHeader, Container } from 'react-bootstrap'
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { useSelector } from 'react-redux';
import '../../Style/greg.css'


export default function BarraLaterale() {

  const preferiti = useSelector(state=>state.jobsSaved)
  return (
    <Card className='border rounded-3 border-1 bg-white'>
    <CardHeader className='cardHeaderSaved d-flex align-items-center bg-white'>
      <PiBookmarkSimpleFill className='fs-5 text me-2'/>
      <h3 className='fs-5 m-0'>I miei elementi </h3>
  </CardHeader>
  <CardBody style={{borderLeft:"6px solid #216DC4"}}>
      
        <div className='d-flex justify-content-between align-items-center mx-3 '>
           <h3 style={{color:"#216DC4"}} className='fs-5 m-0'>Le mie offerte di lavoro</h3>
           <p className='fs-5 m-0 align-self-start text-black'>{preferiti.length}</p>
        </div>  
      
        </CardBody>     
    </Card>
      
  )
}
