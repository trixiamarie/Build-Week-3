import React, { useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";

export default function FormazioneComponent() {

  const icone = useRef();

  const mostraIcone = () => {
    icone.current.classList.remove('d-none');
  };

  const nascondiIcone = () => {
    icone.current.classList.add('d-none');
  };



  return (
    <div className='border rounded px-4 pt-3 pb-0 bg-white'>


      <div className='d-flex justify-content-between alig-items-start'>
        <h4>Formazione</h4>

        <div className='text-secondary fs-5 d-flex'>

          <div className="matita-btn">
            <IoAddSharp className=' ' onClick={() => { console.log("ciao") }} />
          </div>



        </div>
      </div>



      <div className='formazione mt-2 mb-0 pb-0'>
        <div
          className='border-bottom mt-3 d-flex justify-content-between'
          onMouseEnter={mostraIcone}
          onMouseLeave={nascondiIcone}
        >
          <div className="card mb-0 border border-0" style={{ maxWidth: 540 }}>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="https://pbs.twimg.com/profile_images/1509787646515630107/F1mM213e_400x400.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ width: 60, height: 60 }}
                />
              </div>
              <div className="flex-grow-1">
                <div className="card-body ps-2 pt-1">
                  <h5 className="card-title mb-1">IFOA - Training Institute of Corporate Professionals</h5>
                  <div className="card-text">
                    <p className='mb-0 '>Full Stack Developer</p>
                    <small className='mb-0 text-secondary'>nov 2023 -  mag 2024</small>
                  </div>
                  <p className="text-body-secondary">
                    Ravenna, Emilia Romagna, Italia
                  </p>
                  <div className='d-flex'>
                  <img
                  src="data:image/jpeg;base64,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"
                  className="img-fluid rounded"
                  alt="..."
                  style={{ width: 100}}
                />
                <div className='ms-2'>
                <h6 className='mb-1'>Corso Full Stack Developer | Campus Digitale</h6>
                <p className='text-secondary my-0'>Presentazione del corso e degli argomenti trattati</p>
                </div>
              </div>
                </div>
                
              </div>
              
            </div>
          </div>

          <div ref={icone} className='fs-5 me-2 d-flex text-secondary d-none'>
            <div className="matita-btn">
              <RiPencilLine />
            </div>
            <div className="matita-btn">
              <FaTrash className='gregTrash' />
            </div>
          </div>
        </div>




      </div>

      <div className='formazione mt-2 mb-0 pb-0'>
        <div
          className='border-bottom mt-3 d-flex justify-content-between'
          onMouseEnter={mostraIcone}
          onMouseLeave={nascondiIcone}>
          <div className="card mb-0 border border-0" style={{ maxWidth: 540 }}>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Seal_of_the_University_of_Bologna.svg/1200px-Seal_of_the_University_of_Bologna.svg.png"
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ width: 60, height: 60 }}
                />
              </div>
              <div className="flex-grow-1">
                <div className="card-body ps-2 pt-1">
                  <h5 className="card-title mb-1">Alma Mater Studiorum - Università di Bologna</h5>
                  <div className="card-text">
                    <p className='mb-0 '>Laurea Magistrale LM, Chimica, metodologie di sintesi e chimica bio-organica</p>
                    <small className='mb-0 text-secondary'>set 2019 - lug 2022</small>
                  </div>
                  <p className="mb-2">
                 Ho un cazzo GIGANTESCO!!! DIOSTRANCANE 8=======D
                  </p>
                  <p><span className='fw-medium'>Titolo tesi:</span> Sviluppo di metodologie alternative e sostenibili per il riciclo di polimeri biodegradabili a base di amido</p>
                </div>                
              </div>
            </div>
          </div>
          <div ref={icone} className='fs-5 me-2 d-flex text-secondary d-none'>
            <div className="matita-btn">
              <RiPencilLine />
            </div>
            <div className="matita-btn">
              <FaTrash className='gregTrash' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
