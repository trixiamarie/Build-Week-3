import React from 'react'
import { Card } from 'react-bootstrap'

import { FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";



export default function UnderProfileCardComponent() {
  return (
    <>
    <Card
        className="border-top-0 border-bottom-0 rounded-0 pt-4 pb-2 px-3 d-none d-md-block"
        style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between lh-1">
          <span className="text-secondary">Collegamenti</span>
          <span className="text-primary">3</span>
        </div>
        <div className='my-2'>
          <span className="fw-bold">Espandi la tua rete</span>
        </div>
      </Card>
      <Card
        className="d-flex flex-row border-top-0 border-bottom-0 rounded-0 py-2 px-3 d-none d-md-block"
        style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <span className="text-secondary">Invito</span>
          <span className="text-primary">1</span>
        </div>
      </Card>
      <Card
        className="border-top border-bottom-0 rounded-0 py-4 px-3  d-none d-md-block"
        style={{ cursor: "pointer" }}>
        <span className="fw-light text-secondary">Raggiungi nuove vette professionali con Premium</span>
        <div className="d-flex align-items-center">
          <FaPlus style={{ color: "#575757", cursor: "pointer" }} />
          <span className="fw-bold homeSidebarHover ms-2">Prova Premium gratis</span>
        </div>
      </Card>
      <Card
        className="border-top rounded-bottom-3 rounded-top-0 py-4 px-3 d-flex flex-row align-items-center  d-none d-md-block"
        style={{ cursor: "pointer" }}>
        <FaBookmark style={{ color: "#575757" }} />
        <span className="fw-bold ms-3">I miei elementi</span>
      </Card>
      <Card className="bg-white mt-3 pt-4 pb-1 px-3 text-primary fw-bold rounded-bottom-0 d-none d-md-block">
        <div className="homeSidebarHover">
          <span style={{ cursor: "pointer" }}>Gruppi</span>
        </div>
        <div className="d-flex justify-content-between mt-3 homeSidebarHover">
          <span style={{ cursor: "pointer" }}>Eventi</span>
          <FaPlus style={{ color: "#575757", cursor: "pointer" }} />
        </div>
        <div className="my-3 homeSidebarHover">
          <span style={{ cursor: "pointer" }}>Hashtag seguiti</span>
        </div>
      </Card>
      <Card className="border-top-0 rounded-top-0 d-none d-md-block">
        <a
          href="/"
          className="text-secondary border-top text-decoration-none d-flex justify-content-center  py-2 fw-bold">
          Scopri di più
        </a>
      </Card>

    </>
  )
}