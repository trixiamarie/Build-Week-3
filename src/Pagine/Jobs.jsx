<<<<<<< HEAD
import React, { useRef, useEffect, useState } from 'react';
import CardJobs from '../Componenti/ComponentiJobs/CardJobs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ColonnaDx from '../Componenti/ComponentiJobs/ColonnaDx';
import ColonnaSx from '../Componenti/ComponentiJobs/ColonnaSx';
import SottoNavbarJob from '../Componenti/ComponentiJobs/SottoNavbarJob';
import InputJob from '../Componenti/ComponentiJobs/InputJob';

=======
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ColonnaDx from "../Componenti/ComponentiJobs/ColonnaDx";
import ColonnaSx from "../Componenti/ComponentiJobs/ColonnaSx";
import SottoNavbarJob from "../Componenti/ComponentiJobs/SottoNavbarJob";
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07

export default function Jobs() {
  const [dettaglioJob, setDettaglioJob] = useState("r");
  const finestraDettaglio = useRef();
  useEffect(() => {
    finestraDettaglio.current.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [dettaglioJob]);

  useEffect(() => {
    document.title =
      "Offerte di lavoro per " +
      '"' +
      "da cambiare con termine del search" +
      '"' +
      " | Linkedin";

    return () => {
      document.title = "";
    };
  }, []);

  return (
    <div>
      <SottoNavbarJob></SottoNavbarJob>
      <Container className="bg-white pb-0" style={{ marginTop: "6.8rem" }}>
        <Row >
          <Col xs={12} md={5} className="p-0 border border-secondary-subtle">
            <ColonnaSx
              setDettaglioJob={setDettaglioJob}
              dettaglioJob={dettaglioJob}
            />
          </Col>
          <Col
            md={7}
            className="finestraDettaglioGreg d-sm-none  d-md-block overflow-y-scroll pt-5 px-3 border border-secondary-subtle border-start-0"
             ref={finestraDettaglio}
          >
            <ColonnaDx dettaglioJob={dettaglioJob}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
