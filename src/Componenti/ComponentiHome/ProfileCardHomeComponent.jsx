import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "../../Style/Frank.css"
import { useSelector } from 'react-redux'




export default function ProfileCardHome() {
  const user = useSelector(state => state.user.userData.data)
  console.log(user)
  return (
    <Card className="position-relative rounded-bottom-sm-3 rounded-bottom-md-0 border-bottom">
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/D4E16AQFX1VYtIB7Gsw/profile-displaybackgroundimage-shrink_350_1400/0/1670241902799?e=1711584000&v=beta&t=Y1TCjyHZN68WHlbtVLAmIK98zJGu5kYfcfWhr95q0BA"
          className="mb-4"
        />
        <Card.Body className="p-4">
          <Link to="/profile" className="text-decoration-none text-dark">
            <img 
              src={user.image}
              alt="profilo"
              
              className="border border-3 border-white mb-3 rounded-circle mx-auto d-block ImgProfile"
            />
            <div className="d-flex flex-column text-center">
              <h3 className="fs-5">
              {user.name + " " + user.surname}
              </h3>
              <p className="mb-1 text-secondary">{user.title}</p>
            </div>
          </Link>
        </Card.Body>
      </Card>
  )
}