import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Dropdown, ListGroup, FormControl, InputGroup } from 'react-bootstrap'
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { removeuserFriendsAction } from '../../Action/userFriendsActions.js';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function CardAmicoComponente({ ele }) { 
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(removeuserFriendsAction(ele))
    }

  return (
    <>
        <div className="d-flex justify-content-between align-items-center lineLight mt-2">
           
            <div className="d-flex" onClick={()=>navigate("/profile/"+ele._id)}>
               <Link to={"/profile/" + ele._id}>
                <img
                // src={image}
                src={ele.image}
                alt="..."
                style={{ width: 60, height: 60, borderRadius:"50%"}}
                />
               </Link>
                <div className="ms-2">
                    {/* {name}{surname} */}
                    <Link to={"/profile/" + ele._id}><span className="fs16">{ele.name+" "+ ele.surname}</span></Link>
                    <br></br>
                    {/* {title} */}
                    <span className="fs14">{ele.title}</span>
                    <br></br>
                    <span className="fs12">Collegati 3 giorni fa</span>
                </div>
            </div>
            <div className="rete-btn">
                <button className="btn-messaggio " style={{backgroundColor: "white"}}>Messaggio</button>
            
                <Dropdown>
                    <Dropdown.Toggle variant="text" id="dropdown-custom-1"  style={{border: "none"}}>
                        <button style={{backgroundColor: "white"}} id="threeDots"><HiOutlineDotsHorizontal 
                        style={{width: "24px",height: "24px"}}/>
                        </button>
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
