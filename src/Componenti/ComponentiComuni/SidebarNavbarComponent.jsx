import "../../Style/NavbarStyle.css";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { GruppiSVG, LearningSVG, MarketplaceSVG, PubblicaOffertaSVG, PubblicizzaSVG, TalentInsightsSVG, TrovaLeadSVG } from "../../SVG/svgTrixia";

export default function SidebarNavbarComponent() {
  const itemsArray = [
    {
      titolo: "Assumi su LinkedIn",
      desc: "Trova, attrai e assumi",
    },
    {
      titolo: "Vendi con LinkedIn",
      desc: "Sblocca nuove opportunità di vendita",
    },
    {
      titolo: "Offerta di lavoro gratuita",
      desc: "Raggiungi i migliori candidati con la tua offerta di lavoro",
    },
    {
      titolo: "Fai pubblicità su LinkedIn",
      desc: "Acquisisci clienti e fai crescere la tua azienda",
    },
    {
      titolo: "Impara con LinkedIn",
      desc: "Corsi per formare i tuoi dipendenti",
    },
    {
      titolo: "Centro amministrazione",
      desc: "Gestisci i dettagli di fatturazione e account",
    },
  ];

  const svgItems = [
    { svg: <LearningSVG />, title: "Learning"},
    { svg: <TalentInsightsSVG />, title: "Talent Insights" },
    { svg: <PubblicaOffertaSVG />, title: "Pubblica un'offerta di lavoro" },
    { svg: <PubblicizzaSVG />, title: "Pubblicizza" },
    { svg: <TrovaLeadSVG />, title: "Trova Lead" },
    { svg: <GruppiSVG />, title: "Gruppi" },
    { svg: <MarketplaceSVG />, title: "Marketplace dei servizi" },
  ];
  return (
    <>
      <Card style={{ width: "20.75rem" }}>
        <ListGroup style={{ color: "#252525", fontWeight: "500" }} variant="flush">
          <ListGroup.Item>Scopri altri prodotti LinkedIn</ListGroup.Item>
          <ListGroup.Item>
            <ul style={{listStyle:"none", display:"flex", flexWrap:"wrap", margin:"0px", padding:"0px"}}>
            {svgItems.map((x,index) => (
                <li key={index} style={{width:"4.375rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <div className="IconSVGSidebar">{x.svg}</div>
                    <p style={{fontSize:"0.75rem", color: "#656566", fontWeight:"normal", textAlign:"center"}}>{x.title}</p>
                </li>
            ))}
                
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: "20.75rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ color: "#252525", fontWeight: "500" }}>
            Scopri altro per il business
          </ListGroup.Item>
          <ListGroup.Item>
            <ul className="SideBarNavbarUl">
              {itemsArray.map((x, index) => (
                <li key={index}>
                  <a href="#placeholder">{x.titolo}</a>
                  <p>{x.desc}</p>
                </li>
              ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "#252525", fontWeight: "500", fontSize:"0.875rem" }}>
            Crea una pagina aziendale <FaPlus />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
