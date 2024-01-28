import React, { useEffect, useState } from "react";
import CardJobs from "./CardJobs";
import FooterHomeComponent from "../ComponentiComuni/FooterHomeComponent";
import EsperienzaComponent from "../ComponentiProfilo/EsperienzaComponent";
import { UseSelector, useSelector } from "react-redux";

export default function JobsList({ setDettaglioJob, dettaglioJob}) {
  const [paginaCorrente, setPaginaCorrente] = useState(1);
  const risultatiSearch = useSelector((state) => state.search.data);
  let indiceRisultati;

  console.log(risultatiSearch);

  return (
    <div className="overflow-y-scroll" style={{ height: "79vh" }}>
      {/* 
        25 risultati a pagina */}

      {risultatiSearch
        .slice((paginaCorrente - 1) * 25, paginaCorrente * 25)
        .map((ele) => (
          <CardJobs key={ele._id} impiego={ele} setDettaglioJob={setDettaglioJob} dettaglioJob={dettaglioJob}/>
        ))}

      <div className="mt-3">
        <FooterHomeComponent />
      </div>
    </div>
  );
}
