import React, { useState } from "react";
import "../../Style/InformazioniComponent.css";
import { useSelector } from "react-redux";

// const informazioni = `Laureato in Chimica con esperienza di ricerca sull'upcycling di materiali plastici. Attualmente, sto sviluppando competenze come full stack web developer con l'obiettivo di combinare la mia profonda curiosità per la tecnologia con la visione di un futuro sostenibile.
// Durante il mio percorso formativo, ho affinato le mie abilità in diverse tecnologie e linguaggi di programmazione, dimostrando versatilità e una spiccata propensione all'apprendimento continuo.Dinamico ed eclettico, non limito la mia crescita al solo ambito professionale. Nutro numerose passioni e interessi, come la produzione musicale e la modellazione per la stampa 3D.`;

export default function InformazioniComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const informazioni = useSelector(state => state.user.userData.data.bio)


  return ( informazioni ?
    <div className="informazioni-component p-3 mt-2">
      <h4>Informazioni</h4>
      {informazioni.length < 150 || isOpen ? (
        <p>{informazioni}</p>
      ) : (
        <>
          {" "}
          <p>{informazioni.substring(0, 150) + "..."} </p>
          <div className="vedi-altro">
          <p>...</p>
            <p className="vedi-altro-btn" onClick={() => setIsOpen(!isOpen)}>
              ...vedi altro
            </p>
          </div>
        </>
      )}
    </div> : ""
  );
}