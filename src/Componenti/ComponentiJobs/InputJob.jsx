import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';
import SottoNavbarJob from './SottoNavbarJob';

export default function InputJob() {

    const[query, setQuery]= useState("");
    
    const handleQuery = e => {
        setQuery(e.target.value)
        console.log(query)
    }

    const[toggle, setToggle]= useState("");
    const tog = () =>{
      setToggle()
    }

    
  return (
    <>
    <SottoNavbarJob></SottoNavbarJob>
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
                placeholder="non preoccupart è voluto"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleQuery}
              />
            </InputGroup>
          </div>
    </>
  )
}
