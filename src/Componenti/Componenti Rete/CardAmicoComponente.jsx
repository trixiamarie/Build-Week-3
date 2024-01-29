import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function CardAmicoComponente() {
  return (
    <>
        <div className="d-flex justify-content-between align-items-center lineLight" style={{padding: "8px 8px 8px 24px", positon: "relative"}}>
           
            <div className="d-flex">
               
                <img
                // src={image}
                src="https://www.market-research-companies.in//images/default.jpg"
                className="img-fluid "
                alt="..."
                style={{ width: 60, height: 60 }}
                />
               
                <div className="ms-2">
                    {/* {name}{surname} */}
                    <span className="fs16">Nome Profilo</span>
                    <br></br>
                    {/* {title} */}
                    <span className="fs14">Fullstack in formazione presso epicode</span>
                    <br></br>
                    <span className="fs12">Collegati 3 giorni fa</span>
                </div>
            </div>
            <div className="rete-btn">
                <button className="btn-messaggio">Messaggio</button>
                <button id="threeDots"><HiOutlineDotsHorizontal style={{width: "24px", height: "24px"}}/></button>
            </div>
            
        </div>
    </>
    
  )
}
