import React from 'react'
import CardJobs from './CardJobs'
import { Container } from 'react-bootstrap'
import BarraSuperioreColonnaSx from './BarraSuperioreColonnaSx'
import JobsList from './JobsList'
import { useState } from 'react'

export default function ColonnaSx({setDettaglioJob}) {
  return (
    <>
    <div className='p-0 border border-secondary-subtle'>
    <BarraSuperioreColonnaSx/>
    <JobsList setDettaglioJob={setDettaglioJob}/>    
    </div>
    </>
  )
}
