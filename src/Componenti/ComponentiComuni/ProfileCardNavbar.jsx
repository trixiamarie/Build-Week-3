import React from 'react'
import "../../Style/NavbarStyle.css";
import { BsSlashSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function ProfileCardNavbar(props) {
  return (
    <div className='ProfileCardNavbar' style={{width:"17rem"}}>
        <div style={{margin:"0.5rem", display:"flex"}}>
            <img className="PCNImage" src={props.user.image}/>
            <div className='PCNNameTitle'>
               <Link to={"/profile"}><p>{props.user.name} {props.user.surname}</p></Link> 
                <p>{props.user.title}</p>
            </div>
        </div>
        <Link to={"/profile"}><button className='btnPCN'>Visualizza Profilo</button></Link>
        <hr/>
        <div className='PCNDiv'>
        <p>Account</p>
        <p><BsSlashSquareFill style={{color:'#EAB458'}}/> Prova Premium Gratis</p>
        <p>Impostazioni e privacy</p>
        <p>Guida</p>
        <p>Lingua</p>
        </div>
        <hr/>
        <div className='PCNDiv'>
        <p>Gestici</p>
        <p>Post e attività</p>
        <p>Account per la pubblicazione di offerte</p>
        </div>
        <hr/>
        <div className='PCNDiv' >
        <p></p>
        <p>Esci</p></div>
        

    </div>
  )
}
