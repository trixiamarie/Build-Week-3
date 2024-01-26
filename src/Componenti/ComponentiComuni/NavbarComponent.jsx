import "../../Style/NavbarStyle.css";
import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaLinkedin } from "react-icons/fa";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { HiMiniHome } from "react-icons/hi2";
import { MdPeople } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { BiSolidGrid } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import SidebarNavbarComponent from "./SidebarNavbarComponent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCardNavbar from "./ProfileCardNavbar";

export default function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector(state => state.user.userData.data)
  console.log(user)

  return (
    <Navbar
      expand="md"
      className="NavbarCustom fixed-top"
      style={{ zIndex: "2", borderBottom: "1px solid #E8E8E8" }}
    >
      <Container>
        <Container className="d-flex justify-content-flex-start ContainerNavbarCustom">
          <Link to={"/"}>
            <div md={1} className="LogoContainer">
              <FaLinkedin className="Logo" />
            </div>
          </Link>
          <div
            className="d-none d-md-block"
            md={4}
            style={{
              display: "flex",
              width: "20rem",
              alignItems: "center",
            }}
          >
            <InputGroup className="mx-1">
              <InputGroup.Text className="border-0 InputCustomNavbar">
                {" "}
                <IoMdSearch className="IconSearchCustom" />
              </InputGroup.Text>

              <Form.Control
                className="InputCustomNavbar"
                placeholder="Cerca"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="d-block d-md-none" md={4}>
            <input
              type="text"
              className="border-0 InputCustomNavbar search-click"
              name=""
              placeholder="search here..."
            />
          </div>
        </Container>
        <Container className="d-flex ContainerNavbarCustom">
          <div className="d-flex align-items-start">
            <Link to={"/"}>
              <div className="text-center HoverIcon">
                <HiMiniHome className="Icon" />
                <p className="d-none d-md-block">Home</p>
              </div>
            </Link>
            <div className="text-center HoverIcon">
              <MdPeople className="Icon" />
              <p className="d-none d-md-block">Rete</p>
            </div>
            <Link to={"/jobs"}>
              <div className="text-center HoverIcon">
                <MdOutlineWork className="Icon" />
                <p className="d-none d-md-block">Lavoro</p>
              </div>
            </Link>
            <div className="text-center HoverIcon">
              <RiMessage3Fill className="Icon" />
              <p className="d-none d-md-block">Messaggistica</p>
            </div>
            <div className="text-center HoverIcon">
              <BsBellFill className="Icon" />
              <p className="d-none d-md-block">Notifiche</p>
            </div>
          </div>


            <div
              md={1}
              className="text-center HoverIcon dropdown-toggle"
              style={{ borderRight: "1px solid #E8E8E8" }}
              id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            >
             <img
        src={user.image} 
        alt="LinkedIn Logo"
        style={{borderRadius:"50%", height:"1.5rem", width:"1.5rem"}}
      />
              {/* <FaUserCircle /> */}
              <p>
                Tu <IoMdArrowDropdown />
              </p>
            </div>

            {/* <ProfileCardNavbar user={user} class="dropdown-menu" aria-labelledby="dropdownMenuButton"/> */}
          
          <div className="d-none d-lg-flex" md={2} style={{ display: "flex" }}>
            <div>
              <div
                md={1}
                className="text-center HoverIcon"
                style={{ width: "7.146rem" }}
              >
                <button onClick={handleShow} className="btnOffCanvasCustom">
                  <BiSolidGrid className="Icon" />
                  <p>
                    Per le aziende <IoMdArrowDropdown />
                  </p>
                </button>
              </div>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                style={{
                  overflowY: "auto",
                  top: "3.31rem",
                  height: "100vh",
                  width: "23.75rem",
                  border: "1px solid #E8E8E8",
                  borderRadius: "0.5rem 0rem 0rem 0.5rem",
                }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title style={{ paddingLeft: " 0.5rem" }}>
                    Per le aziende
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body
                  style={{
                    overflowY: "auto",
                    top: "3.31rem",
                    height: "100vh",
                    margin: "auto",
                  }}
                >
                  <SidebarNavbarComponent />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
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
