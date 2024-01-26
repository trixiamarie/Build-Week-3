import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';



export default function ProfileCardHome() {
  return (
    <Card className="position-relative mt-4 rounded-bottom-sm-3 rounded-bottom-md-0 border-bottom">
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/D4E16AQFX1VYtIB7Gsw/profile-displaybackgroundimage-shrink_350_1400/0/1670241902799?e=1711584000&v=beta&t=Y1TCjyHZN68WHlbtVLAmIK98zJGu5kYfcfWhr95q0BA"
          className="mb-4"
        />
        <Card.Body className="p-4">
          <Link to="/profile/me" className="text-decoration-none text-dark">
            <img
              src=""
              alt="profilo"
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                marginTop: "-85px",
                marginInline: "auto",
                display: "block",
              }}
              className="border border-3 border-white mb-3"
            />
            <div className="d-flex flex-column text-center">
              <h3 className="fs-5">
                
              </h3>
              <p className="mb-1 text-secondary"></p>
            </div>
          </Link>
        </Card.Body>
      </Card>
  )
}