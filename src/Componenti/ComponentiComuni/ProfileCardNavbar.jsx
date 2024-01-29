import React from 'react'
import "../../Style/NavbarStyle.css";
import { BsSlashSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function ProfileCardNavbar() {
  const user = useSelector((state) => state.user.userData.data);
  return (
    <div className='ProfileCardNavbar' style={{width:"17rem"}}>
        <div style={{margin:"0.5rem", display:"flex"}}>
            <img className="PCNImage" src={user.image}/>
            <div className='PCNNameTitle'>
               <Link to={"/profile"}><p>{user.name} {user.surname}</p></Link> 
                <p>{user.title}</p>
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
