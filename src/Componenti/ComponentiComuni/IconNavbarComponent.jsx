import React from 'react'
import { Link } from "react-router-dom";
import {
    BelleNotificheLinkedin,
    HomeLinkedin,
    MessagesLinkedin,
    UsersLinkedin,
    UsersLinkedinReverse,
    WorkBagLinkedin,
  } from "../../SVG/svgTrixia";
import { useLocation } from 'react-router-dom';

export default function IconNavbarComponent() {

  const location = useLocation();
  const isHome = location.pathname === '/';
  const isJobs = location.pathname === '/jobs';
 
  const isRete = location.pathname === '/rete';

  return (
    <>
     <div className="d-flex align-items-start">
            <Link to={"/"}>
              <div className="text-center HoverIcon" style={{borderBottom: isHome ? "2px solid black" : null, color: isHome? "black" : null}}>
                <HomeLinkedin className="Icon" />
                <p className="d-none d-md-block">Home</p>
              </div>
            </Link>
            <Link to={"/rete"}>
            <div className="text-center HoverIcon" style={{borderBottom: isRete ? "2px solid black" : null, color: isRete? "black" : null}}>
            {isRete ? <UsersLinkedinReverse className="Icon"/> : <UsersLinkedin className="Icon" />}
              <p className="d-none d-md-block">Rete</p>
            </div></Link>
            <Link to={"/jobs"}>
              <div className="text-center HoverIcon" style={{borderBottom: isJobs ? "2px solid black" : null, color: isJobs? "black" : null}}>
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
