import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";

export default function CardJobs({ setDettaglioJob, impiego, dettaglioJob }) {
  function prova() {
    setDettaglioJob(impiego.description);
  }
  const [nCandidati, setNCandidati] = useState(
    Math.floor(Math.random() * 25) + 1
  );
  console.log(impiego);

  return (
    <div
      className={
        "lavoroGreg pt-3 d-flex justify-content-between border-bottom px-2 " +
        (dettaglioJob === impiego.description ? " lavoroSelezionato" : " bg-white")
      }
      onClick={prova}
    >
      <div
        className={
          "card mb-0 border border-0 " +
          (dettaglioJob === impiego.description ? " lavoroSelezionato" : " bg-white")
        }
        style={{ maxWidth: 540 }}
      >
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              src="https://www.market-research-companies.in//images/default.jpg"
              className="img-fluid "
              alt="..."
              style={{ width: 60, height: 60 }}
            />
          </div>
          <div className="flex-grow-1 mx-1">
            <div className="card-body ps-2 pt-1">
              <h5 className="card-title mb-1 text-primary">{impiego.title}</h5>
              <div className="card-text mb-0">
                <p className="mb-0 ">{impiego.company_name}</p>
              </div>
              <p className="text-body-secondary mb-2">
                {impiego.candidate_required_location} {impiego.job_type ?  " - ("+impiego.job_type.replace(/_/g, "-") +")" : ""}
              </p>

              <small className="mb-1 mt-2 text-body-secondary">
                Promosso ·
                <span className="fw-medium text-success">
                  {" " + nCandidati} candidati
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="fs-5 me-2 d-flex text-secondary">
        <div className="matita-btn">
          <IoIosHeartEmpty />
        </div>
      </div>
    </div>
  );
}
