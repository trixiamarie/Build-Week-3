import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function BarraSuperioreColonnaSx() {
  const risultatiSearch = useSelector(state => state.search.data);
  const query = useSelector(state => state.search.query);
  const filtro = useSelector(state => state.search.filtro);
  let [parola, setParola] = useState(query);

  useEffect(() => {
    setParola(query);
  }, [risultatiSearch]);

  return (
    <div className="barraNavigazioneColonnaSxGreg py-3 px-3">
      <div className="d-flex justify-content-between">
      {(filtro=="Lavoro"||!parola) &&<div>
          <p className="mb-0">
           Offerte di lavoro {parola&&<span>per: {parola}</span>}</p>
          <small>{risultatiSearch.length} risultati</small>
        </div>}
        {(filtro!=="Lavoro" && parola) &&<div>
          <p className="mb-0">
           Risultati per {filtro}: {parola}</p>
          <small>{risultatiSearch.length} risultati</small>
        </div>}        

        <div className="d-flex align-self-center">
          <small className="form-check-label">Imposta avviso</small>
          <div className="form-check form-switch p-0 ms-1">
            <label className="switch p-0 m-0">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
