import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Dropdown, ListGroup, FormControl, InputGroup } from 'react-bootstrap'
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

export default function CardAmicoComponente({ name, surname, title, image }) { 
  return (
    <>
        <div className="d-flex justify-content-between align-items-center lineLight" style={{padding: "8px 8px 8px 24px", positon: "relative"}}>
           
            <div className="d-flex">
               
                <img
                // src={image}
                src={image}
                className="img-fluid "
                alt="..."
                style={{ width: 60, height: 60 }}
                />
               
                <div className="ms-2">
                    {/* {name}{surname} */}
                    <span className="fs16">{name}{surname}</span>
                    <br></br>
                    {/* {title} */}
                    <span className="fs14">{title}</span>
                    <br></br>
                    <span className="fs12">Collegati 3 giorni fa</span>
                </div>
            </div>
            <div className="rete-btn">
                <button className="btn-messaggio">Messaggio</button>
            
                <Dropdown >
                    <Dropdown.Toggle variant="text" id="dropdown-custom-1"  >
                        <button id="threeDots"><HiOutlineDotsHorizontal style={{width: "24px", height: "24px"}}/></button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=""> 
                    <Dropdown.Item eventKey="1" className=''>
                        <div className="d-flex gap-2 align-items-center text-center">
                            <div><MdDeleteOutline />
                            </div> 
                            <p>Rimuovi collegamento</p> 
                        </div>
                        
                    
                    </Dropdown.Item>
                    
                    </Dropdown.Menu>
                </Dropdown>
          </div>
            
        </div>
    </>
    
  )
}
