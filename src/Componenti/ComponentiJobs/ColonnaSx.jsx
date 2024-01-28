import React from 'react'
import { Container } from 'react-bootstrap'
import BarraSuperioreColonnaSx from './BarraSuperioreColonnaSx'
import JobsList from './JobsList'

export default function ColonnaSx({setDettaglioJob, dettaglioJob}) {
  
  return (
    <>
    <div className='p-0 m-0'>
    <BarraSuperioreColonnaSx/>
    <JobsList setDettaglioJob={setDettaglioJob} dettaglioJob={dettaglioJob}/>    
    </div>
    </>
  )
}
