import React, { useEffect, useState, useRef } from "react";
import CardJobs from "./CardJobs";
import FooterHomeComponent from "../ComponentiComuni/FooterHomeComponent";
import EsperimentoPaginazione from "./EsperimentoPaginazione";
import { useSelector } from "react-redux";

export default function JobsList({ setDettaglioJob, dettaglioJob }) {
  const [paginaCorrente, setPaginaCorrente] = useState(1);
  const risultatiSearch = useSelector((state) => state.search.data);
  let indiceRisultati;
  let listaLavori = useRef();

  useEffect(()=>{
    listaLavori.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[paginaCorrente,risultatiSearch])

  console.log(risultatiSearch);

  return (
    <div className="overflow-y-scroll" style={{ height: "75vh" }} ref={listaLavori}>
      {/* 
        25 risultati a pagina */}

      {risultatiSearch
        .slice((paginaCorrente - 1) * 25, paginaCorrente * 25)
        .map((ele,index) => (
          <CardJobs
            key={ele._id}
            impiego={ele}
            setDettaglioJob={setDettaglioJob}
            dettaglioJob={dettaglioJob}
            indice={index}
          />
        ))}
      <div className="w-100 d-flex justify-content-center py-4">
        <EsperimentoPaginazione paginaCorrente={paginaCorrente} setPaginaCorrente={setPaginaCorrente}/>
      </div>

      <div className="mt-3">
        <FooterHomeComponent />
      </div>
    </div>
  );
}
