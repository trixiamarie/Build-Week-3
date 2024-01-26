import React from "react";
import CardJobs from "./CardJobs";
import FooterHomeComponent from "../ComponentiComuni/FooterHomeComponent";

export default function JobsList() {
  return (
    <div className="px-2 overflow-y-scroll " style={{ height: "35rem" }}>
{/* 
        25 risultati a pagina */}
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs /> <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs /> <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs /> <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs /> <CardJobs />
      <CardJobs />
      <CardJobs />
      <CardJobs />
      <div className="mt-3">
        <FooterHomeComponent />
      </div>
    </div>
  );
}
