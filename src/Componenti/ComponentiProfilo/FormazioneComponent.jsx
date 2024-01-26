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
    <div className='border rounded px-4 pt-3 pb-0 bg-white my-2'>


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
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz2qFFUif3Gh3a7EnYLrovw-mJEtHydUkQg"
                        className="img-fluid rounded"
                        alt="..."
                        style={{ width: 100 }}
                      />
                    </div>

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
