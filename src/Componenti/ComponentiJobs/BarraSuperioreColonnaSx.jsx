import React from "react";

export default function BarraSuperioreColonnaSx() {
  return (
    <div className="barraNavigazioneColonnaSxGreg py-3 px-3">
      <div className="d-flex justify-content-between">
        <div>
          <p className="mb-0">analyst qui: Italia</p>
          <small>2.066 risultati</small>
        </div>

        <div className="d-flex align-self-center">

            <small class="form-check-label">
            imposta avviso
          </small>
           <div class="form-check form-switch ms-1">
          
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
          />
        </div>  
        </div>
       
      </div>
    </div>
  );
}
