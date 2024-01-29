import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Dropdown, ListGroup, FormControl, InputGroup } from 'react-bootstrap'
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { removeuserFriendsAction } from '../../Action/userFriendsActions.js';
import { useDispatch } from 'react-redux';

export default function CardAmicoComponente({ ele }) { 

    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(removeuserFriendsAction(ele))
    }

  return (
    <>
        <div className="d-flex justify-content-between align-items-center lineLight" style={{padding: "8px 8px 8px 24px", positon: "relative"}}>
           
            <div className="d-flex">
               
                <img
                // src={image}
                src={ele.image}
                className="img-fluid "
                alt="..."
                style={{ width: 60, height: 60 }}
                />
               
                <div className="ms-2">
                    {/* {name}{surname} */}
                    <span className="fs16">{ele.name}{ele.surname}</span>
                    <br></br>
                    {/* {title} */}
                    <span className="fs14">{ele.title}</span>
                    <br></br>
                    <span className="fs12">Collegati 3 giorni fa</span>
                </div>
            </div>
            <div className="rete-btn">
                <button className="btn-messaggio">Messaggio</button>
            
                <Dropdown>
                    <Dropdown.Toggle variant="text" id="dropdown-custom-1"  style={{border: "none"}}>
                        <button id="threeDots"><HiOutlineDotsHorizontal style={{width: "24px", height: "24px"}}/></button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=""> 
                        <Dropdown.Item eventKey="1" className=''>
                            <div className="d-flex gap-2 align-items-center text-center" onClick={handleDelete}>
                                <div>
                                    <FaTrashAlt />
                                </div>
                                <div>
                                    Rimuovi collegamento
                                </div>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
          </div>
            
        </div>
    </>
    
  )
}
