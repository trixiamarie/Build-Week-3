import React from 'react'
import { Button, Dropdown, FormControl, InputGroup } from 'react-bootstrap'
import CardAmicoComponente from './CardAmicoComponente'
import {useSelector} from 'react-redux';

export default function ProfiliRete() {
  const listFriends = useSelector(state => state.userFriends)
  console.log(listFriends)


  return (
    <>
      


        <p>30 collegamenti</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
        <div className='d-flex '>
           <Dropdown>
            <span> </span>
          <Dropdown.Toggle variant="" id="dropdown-sort">
            Ordina per: Aggiunti di recente
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Aggiunti di recente</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <InputGroup>
        <FormControl
          placeholder="Cerca per nome"
          aria-label="Cerca per nome"
          
        />
        <Button variant=" text-primary">
          Esegui la ricerca usando i filtri
        </Button>
      </InputGroup> 
        </div>
        {listFriends.map((x, index)=> 
        <CardAmicoComponente key={index} name={x.name} surname={x.surname} image={x.image} title={x.title} index={index}/>)}
        
        
        
    
   
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