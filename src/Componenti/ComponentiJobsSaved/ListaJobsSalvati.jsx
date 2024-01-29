import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobsList from '../ComponentiJobs/JobsList';

export default function () {
  let jobsSaved = useSelector(state=>state.jobsSaved )
  return (
    <Container>
      <div className='border-bottom'>
        <h2>Le mie offerte di lavoro</h2> 
      </div>
      <div>
        {jobsSaved.map(ele=><JobsList key={ele._id}/>)}

      </div>
    </Container>
  )
}
