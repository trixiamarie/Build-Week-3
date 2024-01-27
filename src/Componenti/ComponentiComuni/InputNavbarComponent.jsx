import React from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function InputNavbarComponent() {
  return (
    <>
        <Container className="d-flex justify-content-flex-start align-items-center ContainerNavbarCustom">
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
            />
          </div>
        </Container>
    </>
  )
}
