import "../../Style/NavbarStyle.css";
import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Navbar } from "react-bootstrap";
import { BiSolidGrid } from "react-icons/bi";
import SidebarNavbarComponent from "./SidebarNavbarComponent";
import { useSelector } from "react-redux";
import InputNavbarComponent from "./InputNavbarComponent";
import IconNavbarComponent from "./IconNavbarComponent";
import DropdownCardNavbar from "./DropdownCardNavbar";
import { IoMdArrowDropdown } from "react-icons/io";

export default function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user.userData.data);

  return (
    <Navbar
      expand="md"
      className="NavbarCustom fixed-top"
      style={{ zIndex: "2", borderBottom: "1px solid #E8E8E8" }}
    >
      <Container>
        <InputNavbarComponent />
        <Container className="d-flex ContainerNavbarCustom">
          <IconNavbarComponent />

          <DropdownCardNavbar user={user} />
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
