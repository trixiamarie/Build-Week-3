import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import ProfileCardComponent from '../Componenti/ComponentiProfilo/ProfileCardComponent';
import AnalisiComponent from '../Componenti/ComponentiProfilo/AnalisiComponent';
import RisorseComponent from '../Componenti/ComponentiProfilo/RisorseComponent';
import InformazioniComponent from '../Componenti/ComponentiProfilo/InformazioniComponent';
import AttivitaComponent from '../Componenti/ComponentiProfilo/AttivitaComponent';
import EsperienzaComponent from '../Componenti/ComponentiProfilo/EsperienzaComponent';
import FormazioneComponent from '../Componenti/ComponentiProfilo/FormazioneComponent';
import LicenzeComponent from '../Componenti/ComponentiProfilo/LicenzeComponent';
import CompetenzeComponent from '../Componenti/ComponentiProfilo/CompetenzeComponent';
import PubblicazioniComponent from '../Componenti/ComponentiProfilo/PubblicazioniComponent';
import LingueComponent from '../Componenti/ComponentiProfilo/LingueComponent';
import InteressiComponent from '../Componenti/ComponentiProfilo/InteressiComponent';
import LinguaLinkComponent from '../Componenti/ComponentiProfilo/LinguaLinkComponent';
import AltriProfiliComponent from '../Componenti/ComponentiProfilo/AltriProfiliComponent';
import PotrestiConoscereComponent from '../Componenti/ComponentiProfilo/PotrestiConoscereComponent';
import PotrebbeInteressartiComponent from '../Componenti/ComponentiProfilo/PotrebbeInteressartiComponent';
import InPrimoPianoComponent from '../Componenti/ComponentiProfilo/InPrimoPianoComponent';
import SottoNavbarComponent from '../Componenti/ComponentiProfilo/SottoNavbarComponent';
import FooterProfileComponent from '../Componenti/ComponentiComuni/FooterProfileComponent';
import Ads2Component from '../Componenti/ComponentiComuni/Ads2Component';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function Profile() {

  const user = useSelector((state) => state.user.userData.data);

  useEffect(() => {
    document.title = user.name +" " + user.surname + " | LinkedIn";

    return () => {
      document.title = '';
    };
  }, []);

  return (<>
    <SottoNavbarComponent />
    <Container>
        <Row style={{marginTop:"4.809rem"}}>
            <Col md={{span:8}}> {/* colonna Main */}
              {/* <div style={{height:"10rem",  border:"1px solid black"}}></div> */}
              <ProfileCardComponent />
              <AnalisiComponent/>
              <RisorseComponent/>
              <InformazioniComponent/>
              <AttivitaComponent/>
              <InPrimoPianoComponent />
              <EsperienzaComponent/>
              <FormazioneComponent/>
              <LicenzeComponent/>
              <CompetenzeComponent/>
              <PubblicazioniComponent/>
              <LingueComponent/>
              <InteressiComponent/>
            </Col>
            <Col md={{span:4}}> {/* colonna Sidebar */}
              {/* <div style={{height:"10rem", border:"1px solid black"}}></div> */}
              <LinguaLinkComponent />
              <AltriProfiliComponent/>
              <PotrestiConoscereComponent/>
              <PotrebbeInteressartiComponent/>
              <Ads2Component/>
            </Col>
        </Row>
    </Container>
    <FooterProfileComponent/>
    </>
  )
}
