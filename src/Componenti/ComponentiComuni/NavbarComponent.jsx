import "../../Style/NavbarStyle.css";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { HiMiniHome } from "react-icons/hi2";
import { MdPeople } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { BiSolidGrid } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function NavbarComponent() {
  return (
    <Navbar className="NavbarCustom">
      <Container>
        <Container className="d-flex ContainerNavbarCustom">
          <div md={1} className="LogoContainer">
            <FaLinkedin className="Logo" />
          </div>
          <div
            md={4}
            style={{
              display: "flex",
              width: "20rem",
              alignItems: "center"
            }}
          >
            <InputGroup className="mx-1">
              <InputGroup.Text className="border-0 InputCustomNavbar">
                {" "}
                <IoMdSearch className="IconSearchCustom"/>
              </InputGroup.Text>

              <Form.Control className="InputCustomNavbar"
                placeholder="Cerca"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
        </Container>
        <Container className="d-flex ContainerNavbarCustom">
          <div className="d-flex" md={4}>
            <div className="text-center HoverIcon">
              <HiMiniHome className="Icon" />
              <p>Home</p>
            </div>
            <div className="text-center HoverIcon">
              <MdPeople className="Icon" />
              <p>Rete</p>
            </div>
            <div className="text-center HoverIcon">
              <MdOutlineWork className="Icon" />
              <p>Lavoro</p>
            </div>
            <div className="text-center HoverIcon">
              <RiMessage3Fill className="Icon" />
              <p>Messaggistica</p>
            </div>
            <div className="text-center HoverIcon">
              <BsBellFill className="Icon" />
              <p>Notifiche</p>
            </div>
          </div>
          <div md={1} className="text-center HoverIcon" style={{borderRight:"1px solid #E8E8E8"}}>
          {/*PROFILO DROPDOWN*/}
          <FaUserCircle />
          <p>Tu <IoMdArrowDropdown /></p>
          </div>
          <div md={2} style={{ display: "flex" }}>
            <div>{/*PER LE AZIENDE DORPDOWN*/}<div md={1} className="text-center HoverIcon" style={{width:"7.146rem"}}>
          {/*PROFILO DROPDOWN*/}
          <BiSolidGrid className="Icon"/>
          <p>Per le aziende <IoMdArrowDropdown /></p>
          </div></div>
            <div
              style={{
                fontSize: "0.7rem",
                width: "7rem",
                margin: "0.5rem 1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textDecoration: "underline",
                color: "#a8601a",
              }}
            >
              <p style={{ margin: "0px" }}>
                Fai crescere la tua
                <br />
                carriera con Premium
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}
