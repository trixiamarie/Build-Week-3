import React from "react";
import CardJobs from "./CardJobs";
import FooterHomeComponent from "../ComponentiComuni/FooterHomeComponent";

export default function JobsList({setDettaglioJob}) {
  return (
    <div className="px-2 overflow-y-scroll" style={{ height: "79vh" }}>
{/* 
        25 risultati a pagina */}
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>
      <CardJobs setDettaglioJob={setDettaglioJob}/>

      
      <div className="mt-3">
        <FooterHomeComponent />
      </div>
    </div>
  );
}
