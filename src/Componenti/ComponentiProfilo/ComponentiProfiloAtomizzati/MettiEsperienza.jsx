import React, { useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";

export default function MettiEsperienza() {
  const esperienzaRef = useRef();
  const icone = useRef();

  const mostraIcone = () => {
    icone.current.classList.remove('d-none');
  };

  const nascondiIcone = () => {
    icone.current.classList.add('d-none');
  };

  return (
    <div
      ref={esperienzaRef}
      className='esperienza border-bottom mt-3 d-flex justify-content-between'
      onMouseEnter={mostraIcone}
      onMouseLeave={nascondiIcone}
    >
      <div className="card mb-0 border border-0" style={{ maxWidth: 540 }}>
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              src="https://www.mediakey.tv/fileadmin/news_import/pam_02.png"
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: 60, height: 60 }}
            />
          </div>
          <div className="flex-grow-1">
            <div className="card-body ps-2 pt-1">
              <h5 className="card-title mb-1">Vice responsabile di punto vendita</h5>
              <div className="card-text">
                <p className='mb-0 '>Pam PANORAMA S.p.A. · Part-time</p>
                <small className='mb-0 text-secondary'>ott 2021 - set 2022 · 1 anno</small>
              </div>
              <p className="text-body-secondary">
                Ravenna, Emilia Romagna, Italia
              </p>
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
  );
}
