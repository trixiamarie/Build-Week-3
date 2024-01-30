import React from 'react'
import { Button, Card, CardBody, CardHeader, Dropdown, Form, FormControl, InputGroup } from 'react-bootstrap'
import CardAmicoComponente from './CardAmicoComponente'
import {useSelector} from 'react-redux';
import { IoMdSearch } from "react-icons/io";

import "../../Style/Frank.css"


import { useState } from 'react';


export default function ProfiliRete() {
  const listFriends = useSelector(state => state.userFriends)
  console.log(listFriends)

  const[query, setQuery] = useState("");

  const hanldeQuery = (e) =>{
    setQuery(e.target.value.toLowerCase())
    console.log(query)
  }

  return (
    <>

    <Card className='card-home-post pt-1'>
    <CardHeader className='bg-white'>
        <p>{listFriends.length + " " }collegamenti</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
        <div className='d-flex '>
           <Dropdown>
            <span> </span>
          <Dropdown.Toggle variant=""  className='d-none d-lg-block ordina1'>
            Ordina per: Aggiunti di recente <span className='fs12'> ▼</span> 
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdownMenu'>
            <Dropdown.Item href="#/action-1" className='outline-none'>Add History </Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='d-flex'>
      <InputGroup className="mx-1 InputCustomRete d-none d-md-flex"
          md={4}
          style={{
            display: "flex",
            width: "20rem",
            alignItems: "center",
          }}>
              <InputGroup.Text className="border-0 InputCustomNavbar">
                {" "}
                <IoMdSearch className="IconSearchCustom" />
              </InputGroup.Text>

                <Form.Control
                  className="InputCustomNavbar"
                  placeholder="Cerca per nome"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange = {hanldeQuery}
                />
              
       
      </InputGroup> 
      <div className="d-flex d-md-none" md={4}>
            <input
              type="text"
              className="InputNAVCOMP border-0 InputCustomNavbar search-click"
              name=""
            />
          </div>
       <Button variant="text-primary" className='d-flex outline-none ordina z-0' style={{fontSize:"0.875rem", padding: "0.5rem 0rem"}}>
          Esegui la ricerca usando i filtri
        </Button>
        </div></div>
        </CardHeader>
        <CardBody>
        {listFriends.filter((x)=>  x.name.toLowerCase().startsWith(query) || x.surname.toLowerCase().startsWith(query)  ).map((x, index)=> 
        <CardAmicoComponente key={index} ele={x} />)}
        </CardBody>
        </Card>
   
    </>
  )
}


/*

 <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div>
        <img 
            src="https://www.google.it/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fit%2Fs%2Ffoto%2Fprofilo&psig=AOvVaw2G6_oqDWnMxybTZTaWcJCq&ust=1706610313241000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiFmYKxgoQDFQAAAAAdAAAAABAH.png" 
            alt="Felipe Pizarro"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
          />
        </div>
        <div>
          <h5>Felipe Pizarro</h5>
          <p>Full Stack in formazione presso Epicode | React JS | JAVA | Javascript | Bootstrap | HTML/CSS</p>
          <small>Collegati 3 giorni fa</small>
        </div>
        
          <Button variant="outline-primary border-2 rounded-pill">Messaggio</Button>
          
          <Dropdown >
            <Dropdown.Toggle variant="text" id="dropdown-custom-1"  >
            <BsThreeDots />
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
        
      </ListGroup.Item>
      
    </ListGroup>
*/