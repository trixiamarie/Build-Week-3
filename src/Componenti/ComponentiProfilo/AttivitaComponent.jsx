import React from "react";
import "../../Style/AttivitaComponent.css";
import { CgArrowRight } from "react-icons/cg";
import { RiPencilLine } from "react-icons/ri";

export default function AttivitaComponent() {
  const username = "Vincenzo Arpaia";

  return (
    <div className="attivita-component mt-2">
      <div className="attivita-component-main pb-3 ">
        <div>
          <h4>Attività</h4>
          <div>
            <div className="crea-un-post-btn">Crea un post</div>
            <div className="matita-btn">
            <RiPencilLine />
            </div>
          </div>
        </div>
        <p>178 follower</p>
        <div className="comment-body">
          <p className="autore-commento m-0">
            <b>{username} </b>
            <span>
              ha commentato un post <b>·</b> 1s
            </span>
          </p>
          <p className="testo-commento m-0">👏💪👏</p>
        </div>
      </div>
      <div className="attivita-component-button ">
        <p>Mostra tutti i commenti</p>
        <CgArrowRight className="freccia-dx" />
      </div>
    </div>
  );
}
