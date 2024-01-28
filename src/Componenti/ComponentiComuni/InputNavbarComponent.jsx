import React from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { getSearchJob } from '../../Action/searchActions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function InputNavbarComponent() {

  const [query, setQuery] = useState();

  const dispatch = useDispatch()

  const handleQuery = (e) =>{
    setQuery(e.target.value)
  }
  const handleEnter = (e) =>{
    e.preventDefault()
    dispatch(getSearchJob(query))
    console.log("input all'enter", query)
  }

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
             <Form onSubmit={handleEnter}>
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
                  onChange = {handleQuery}
                />
              </InputGroup>
            </Form>
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
