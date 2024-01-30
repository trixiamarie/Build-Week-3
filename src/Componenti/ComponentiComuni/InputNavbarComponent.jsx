import React, { useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { getSearchQueryJob, setSearchQuery } from "../../Action/searchActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function InputNavbarComponent() {

const isJobs = (useLocation('/jobs').pathname === '/jobs');


  const [inputQuery, setInputQuery] = useState();
  const storeQuery = useSelector((state) => state.search.query);

  const dispatch = useDispatch();


  const handleQuery = (e) => {
    if(isJobs){
      setInputQuery();
    dispatch(setSearchQuery(e.target.value.trim()))
    
    };
  };

  const handleEnter = (e) => {
    e.preventDefault();
    
    if(isJobs){
      dispatch(getSearchQueryJob());}
  };

 
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
              className="InputNAVCOMP border-0 InputCustomNavbar search-click"
              name=""
            />
          </div>
        </Container>
    </>
  );
}
