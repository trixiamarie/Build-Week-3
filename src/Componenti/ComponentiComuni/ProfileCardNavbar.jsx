import React from 'react'
import "../../Style/NavbarStyle.css";

export default function ProfileCardNavbar(props) {
  return (
    <div className='ProfileCardNavbar' style={{width:"17rem"}}>
        <div style={{margin:"0.5rem", display:"flex"}}>
            <img className="PCNImage" src={props.user.image}/>
            <div className='PCNNameTitle'>
                <p>{props.user.name} {props.user.surname}</p>
                <p>{props.user.title}</p>
            </div>
        </div>
        <button className='btnPCN'>Visualizza Profilo</button>
        <hr/>
        <p>Account</p>
        <p>Prova Premium Gratis</p>
        <p>Impostazioni e privacy</p>
        <p>Guida</p>
        <p>Lingua</p>
        <hr/>
        <p>Gestici</p>
        <p>Post e attività</p>
        <p>Account per la pubblicazione di offerte</p>
        <hr/>
        <p>Esci</p>

    </div>
  )
}
