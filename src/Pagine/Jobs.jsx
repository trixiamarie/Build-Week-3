import React, { useRef, useEffect, useState } from 'react';
import CardJobs from '../Componenti/ComponentiJobs/CardJobs';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ColonnaDx from '../Componenti/ComponentiJobs/ColonnaDx';
import ColonnaSx from '../Componenti/ComponentiJobs/ColonnaSx';
import SottoNavbarJob from '../Componenti/ComponentiJobs/SottoNavbarJob';
import InputJob from '../Componenti/ComponentiJobs/InputJob';
import { useSelector } from 'react-redux';


export default function Jobs() {
  const [dettaglioJob, setDettaglioJob] = useState("r");
  const finestraDettaglio = useRef();
  const risultatiSearch = useSelector(state => state.search.data);
  const query = useSelector(state => state.search.query);
  const filtro = useSelector(state => state.search.filtro);
  let [parola, setParola] = useState(query);

  useEffect(() => {
    setParola(query);
  }, [risultatiSearch]);

  useEffect(() => {
    finestraDettaglio.current.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [dettaglioJob]);


  /* {(filtro=="Lavoro"||!parola) &&<div>
          <p className="mb-0">
           Offerte di lavoro {parola&&<span>per: {parola}</span>}</p>
          <small>{risultatiSearch.length} risultati</small>
        </div>}
        {(filtro=="Azienda"&&parola)&&<div>
          <p className="mb-0">
           Risultati per Azienda: {parola}</p>
          <small>{risultatiSearch.length} risultati</small>
        </div>}
        {(filtro=="Categoria"&&parola)&&<div>
          <p className="mb-0">
           Risultati per Categoria: {parola}</p>
          <small>{risultatiSearch.length} risultati</small>
        </div>} */

  useEffect(() => {
    if (filtro == "Lavoro" || !parola) {
      document.title = `Offerte di lavoro `;
      if (parola) {
        document.title += ` per: ${parola}`
      }
      if (filtro !== "Lavoro" && parola) {
        document.title = `Risultati per ${filtro}: ${parola}`
      }
    }


  }, [risultatiSearch]);

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
            <ColonnaDx dettaglioJob={dettaglioJob} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
