import React from 'react'
import { Card, CardFooter } from 'react-bootstrap'
import "../../Style/Frank.css"
import { FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



export default function UnderProfileCardComponent() {

  const friends = useSelector(state => state.userFriends)
  

  return (
    <>
    <Card
        className="border-top-0 border-bottom-0 rounded-0 d-none d-md-block"
        style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between lh-1 bgHover pt-4 pb-2 px-3" style={{ height: "50%" }}>
          <span className="text-secondary ">Collegamenti</span>
          <span className="text-primary">{friends.length}</span>
        </div>
        <div className='my-2'>
          <Link to={'/rete'}><span className="fw-bold py-2 px-3">Espandi la tua rete</span></Link>
        </div>
        <div className="d-flex justify-content-between py-2 px-3 bgHover">
          <span className="text-secondary ">Invito</span>
          <span className="text-primary">1</span>
        </div>
      </Card>
      <Card
        className="d-flex flex-row border-top-0 border-bottom-0 rounded-0  d-none d-md-block"
        style={{ cursor: "pointer" }}>
          
        
      </Card>
      <Card
        className="border-top border-bottom-0 rounded-0 py-4 px-3 d-none d-md-block bgHover"
        style={{ cursor: "pointer" }}>
        <span className="fw-light text-secondary">Raggiungi nuove vette professionali con Premium</span>
        <div className="d-flex align-items-center ">
          <FaPlus style={{ color: "#575757", cursor: "pointer" }} />
          <span className="fw-bold bgHover ms-2">Prova Premium gratis</span>
        </div>
      </Card>
      <Card
        className="border-top rounded-bottom-3 rounded-top-0 py-4 px-3 d-flex flex-row align-items-center  d-none d-md-block bgHover"
        style={{ cursor: "pointer" }}>
        <FaBookmark style={{ color: "#575757" }} />
        <span className="fw-bold ms-3">I miei elementi</span>
      </Card>
      <Card className=" rounded-1 d-none d-md-block text-primary my-3"
        style={{ cursor: "pointer" }}>
        <div className="d-flex  lh-1 underlineHover pt-4 pb-2 px-3 " style={{ height: "50%" }}>
          <span className="fw-bold ">Gruppi</span>
          
        </div>
        <Link to={'/rete'}> <div className='py-2 px-3 d-flex align-items-center justify-content-between '>
         <span className="fw-bold underlineHover">Espandi la tua rete</span>
          <div className='rounded-circle plus bgHover'>
            <FaPlus className="mx-auto" style={{ color: "#575757", cursor: "pointer" }} />
          </div>
          
        </div></Link>
        <div className="py-2 px-3 underlineHover">
          <span className="fw-bold">Invito</span>
          
        </div> 

        <CardFooter
          href="/"
          className="text-secondary bg-white text-decoration-none d-flex justify-content-center fw-bold py-3 bgHover">
          Scopri di più
        </CardFooter>
      </Card>
      

    </>
  )
}

/*
className="bg-white mt-3 pt-4 pb-1 px-3 text-primary fw-bold rounded-bottom-0 d-none d-md-block">
        <div className="bgHover">
          <span className='bgHover' style={{ cursor: "pointer" }}>Gruppi</span>
        </div>
        <div className="d-flex justify-content-between mt-3 bgHover">
          <span style={{ cursor: "pointer" }}>Eventi</span>
          <FaPlus style={{ color: "#575757", cursor: "pointer" }} />
        </div>
        <div className="my-3 bgHover">
          <span style={{ cursor: "pointer" }}>Hashtag seguiti</span>
        </div>

*/