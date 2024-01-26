import React from 'react'
import CardJobs from './CardJobs'
import { Container } from 'react-bootstrap'
import BarraSuperioreColonnaSx from './BarraSuperioreColonnaSx'
import JobsList from './JobsList'

export default function ColonnaSx() {
  return (
    <>
    <div className='p-0'>
    <BarraSuperioreColonnaSx/>
    <JobsList/>    
    </div>
    </>
  )
}
