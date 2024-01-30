import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

export default function MessagisticaComponent() {
  const user = useSelector((state) => state.user.userData.data);
  console.log(user);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        className="me-2 bg-white text-dark d-flex justify-content-between"
        style={{
          width: "18rem",
          border: "1px solid grey",
          position: "fixed",
          borderRadius: "0.5rem 0.5rem 0rem 0rem",
          right: "0px",
          bottom:"0px",
            alignItems:"center",
          zIndex: "99",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={user.image}
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            alt="imagineuser"
            className="mx-1"
          />
          <p className="p-0 m-0" style={{fontSize:"0.8rem", fontWeight:"500"}}>Messaggistica</p>
        </div>
        <div className="d-flex">
          <BsThreeDots className="mx-1"/>
          <FaPenToSquare className="mx-1" />
          <IoIosArrowUp className="mx-1" />
        </div>
      </Button>
      <Offcanvas
         style={{
          width: "18rem",
          border: "1px solid grey",
          position: "fixed",
          borderRadius: "0.5rem 0.5rem 0rem 0rem",
          right: "0px",
          bottom:"0px",

          zIndex: "99",
        }}
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
