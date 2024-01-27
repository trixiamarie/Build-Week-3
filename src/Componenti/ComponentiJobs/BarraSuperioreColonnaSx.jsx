import React from "react";

export default function BarraSuperioreColonnaSx() {
  return (
    <div className="barraNavigazioneColonnaSxGreg py-3 px-3">
      <div className="d-flex justify-content-between">
        <div >
          <p className="mb-0">analyst qui: Italia</p>
          <small>2.066 risultati</small>
        </div>

        <div className="d-flex align-self-center">
          <small className="form-check-label">Imposta avviso</small>
          <div className="form-check form-switch p-0 ms-1">
            <label class="switch p-0 m-0">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
