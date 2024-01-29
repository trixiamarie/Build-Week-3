import React from 'react'
import { Link } from "react-router-dom";
import {
    BelleNotificheLinkedin,
    HomeLinkedin,
    MessagesLinkedin,
    UsersLinkedin,
    WorkBagLinkedin,
  } from "../../SVG/svgTrixia";

export default function IconNavbarComponent() {
  return (
    <>
     <div className="d-flex align-items-start">
            <Link to={"/"}>
              <div className="text-center HoverIcon">
                <HomeLinkedin className="Icon" />
                <p className="d-none d-md-block">Home</p>
              </div>
            </Link>
            <Link to={"/rete"}>
            <div className="text-center HoverIcon">
              <UsersLinkedin className="Icon" />
              <p className="d-none d-md-block">Rete</p>
            </div></Link>
            <Link to={"/jobs"}>
              <div className="text-center HoverIcon">
                <WorkBagLinkedin className="Icon" />
                <p className="d-none d-md-block">Lavoro</p>
              </div>
            </Link>
            <div className="text-center HoverIcon">
              <MessagesLinkedin className="Icon" />
              <p className="d-none d-md-block">Messaggistica</p>
            </div>
            <div className="text-center HoverIcon">
              <BelleNotificheLinkedin className="Icon" />
              <p className="d-none d-md-block">Notifiche</p>
            </div>
          </div>
    </>
  )
}
