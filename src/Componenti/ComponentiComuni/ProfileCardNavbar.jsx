import React from 'react'
import "../../Style/NavbarStyle.css";
import { Button } from 'react-bootstrap';

export default function ProfileCardNavbar(props) {
  return (
    <div className='ProfileCardNavbar'>
        <div>
            <img className="PCNImage" src={props.user.image}/>
            <div>
                <p>{props.user.name}{props.user.surname}</p>
                <p>{props.user.title}</p>
            </div>
        </div>
        <Button className='btn btn-outline-primary'>Visualizza Profilo</Button>
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
