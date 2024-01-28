import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function BarraSuperioreColonnaSx() {
  const risultatiSearch = useSelector(state => state.search.data);
  const query = useSelector(state => state.search.query);
  let [parola, setParola] = useState(query);





  useEffect(() => {
    setParola(query);
  }, [risultatiSearch]);

  return (
    <div className="barraNavigazioneColonnaSxGreg py-3 px-3">
      <div className="d-flex justify-content-between">
        <div>
          <p className="mb-0">
            {parola ? parola : "Tutte le offerte"} qui: Italia
          </p>
          <small>{risultatiSearch.length} risultati</small>
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
