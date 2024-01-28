import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/CardUtenteStyle.css'
import { HiUserAdd } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";

export default function CardUtenteComponent(props) {
  return (
    <>
    <div key={props.key} className="CardUtente mt-2">
        <div className="d-flex">
          <Link to={`/profile/${props.profile.id}`} className="text-decoration-none text-dark d-flex">
            <img 
              src={props.profile.image}
              alt="Profilo di ${profile.name}"
              width={50}
              height={50}
              className="border border-3 border-white rounded-circle me-3"
            />
            <div className="flex-grow-1">
              <h5 className="fs-6 mb-1">{`${props.profile.name} ${props.profile.surname}`}</h5>
              <p className="mb-2 text-muted">{props.profile.title}</p>
              <button className="btnCardUtente rounded-pill mb-2"><HiUserAdd/> Collegati</button>
            </div>
          </Link>
        </div>
      </div>
      <hr style={{margin:"0px"}}/>
      </>
  )
}

//Per operatore ternario bottone Messaggio
// <button className="btnCardUtente rounded-pill mb-2"><BiLogoTelegram />Messaggio</button>