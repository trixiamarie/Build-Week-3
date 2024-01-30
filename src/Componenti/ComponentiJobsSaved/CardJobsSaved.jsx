import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  jobsSavedAction,
  removejobsSavedAction,
} from "../../Action/jobsSavedActions";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CardJobsSaved({
  impiego,
  indice,
}) {
  const dispatch = useDispatch();
  const [lgShow, setLgShow] = useState(false);
  


  function prova() {
   
    /*   window.scrollTo({
    top: 0,
    behavior: "smooth",
  }); */
  }
  const [nCandidati, setNCandidati] = useState(
    Math.floor(Math.random() * 25) + 1
  );

  return (
    <>
      <div
        className={
          "lavoroGreg pt-2 d-flex justify-content-between border-bottom px-2 "
        }
        
      >
        <div className={"card mb-0 border border-0"} style={{ maxWidth: 540 }} onClick={() => setLgShow(true)}>
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
                <h5 className="card-title mb-1">{impiego.title}</h5>
                <div className="card-text mb-0">
                  <p className="mb-0 ">{impiego.company_name}</p>
                </div>
                <small className="text-body-secondary mb-0">
                  {impiego.category}
                  {impiego.job_type
                    ? " (" + impiego.job_type.replace(/_/g, "-") + ")"
                    : ""}
                </small>
                <p className="text-body-secondary mb-2">
                  {impiego.candidate_required_location}
                </p>

                <small className="mb-1 mt-1 text-body-secondary">
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
          <div
            className="matita-btn"
            onClick={() => dispatch(removejobsSavedAction(impiego))}
          >
            <IoMdHeart />{" "}
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Job Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          dangerouslySetInnerHTML={{ __html: impiego.description }}
        ></Modal.Body>
      </Modal>
    </>
  );
}
