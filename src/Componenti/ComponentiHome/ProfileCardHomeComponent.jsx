import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "../../Style/Frank.css"




export default function ProfileCardHome() {
  return (
    <Card className="position-relative mt-4 rounded-bottom-sm-3 rounded-bottom-md-0 border-bottom">
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/D4E16AQFX1VYtIB7Gsw/profile-displaybackgroundimage-shrink_350_1400/0/1670241902799?e=1711584000&v=beta&t=Y1TCjyHZN68WHlbtVLAmIK98zJGu5kYfcfWhr95q0BA"
          className="mb-4"
        />
        <Card.Body className="p-4">
          <Link to="/profile" className="text-decoration-none text-dark">
            <img 
              src="https://www.fbi.gov/image-repository/unabomber.jpeg"
              alt="profilo"
              
              className="border border-3 border-white mb-3 rounded-circle mx-auto d-block ImgProfile"
            />
            <div className="d-flex flex-column text-center">
              <h3 className="fs-5">
              UnaBomber
              </h3>
              <p className="mb-1 text-secondary">Full time Terrorist</p>
            </div>
          </Link>
        </Card.Body>
      </Card>
  )
}