import React from 'react';
import { HiOutlinePencil } from "react-icons/hi2";
import { IoAddSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import '../../Style/greg.css';
import MettiEsperienza from './ComponentiProfiloAtomizzati/MettiEsperienza';


export default function EsperienzaComponent() {



  return (
    <>
    
    {  <div  className='border rounded px-4 pt-3 pb-0 bg-white my-2' >


      <div className='d-flex justify-content-between alig-items-start'>
        <h4>Esperienza</h4>

        <div className='text-secondary fs-5 d-flex'>

          <div className="matita-btn">
            <IoAddSharp className=' ' onClick={() => { console.log("ciao") }} />
          </div>



        </div>
      </div>



      <div className='esperienze mt-2 mb-0 pb-0'>

        <MettiEsperienza />
        <MettiEsperienza />
        <MettiEsperienza />




      </div>
    </div>}
    </>
  )
}
