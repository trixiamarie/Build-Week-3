import React from 'react'
import { Row, Col, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsImage } from "react-icons/bs";
import { TbArticleFilledFilled } from "react-icons/tb";
import '../../Style/NewPostComponent.css'


import { useState } from "react";

import { useSelector } from "react-redux";
import ModalNewPost from './ModalNewPost';


export default function NewPostComponent() {
  const [show, setShow] = useState(false);
	const user = useSelector(state =>state.user.userData.data)

  return (
    <div className="bg-white rounded-3 border border-1 p-3">
			<div className="d-flex align-items-center ">
			<Link to={'/profile'}>
				<img
					src={user.image}
					width={48}
					height={48}
					className="rounded-circle object-fit-cover me-2"
					alt="user"
				/></Link>
				<div className="flex-grow-1">
					<Button
						className="btnPostInput rounded-pill text-start w-100 text-black-50 fw-medium"
						variant="none"
						onClick={() => setShow(true)}
						style={{height:"48px", fontSize:"0.875rem", border:"1px solid #787878"}}
					>
						Avvia un post
					</Button>
					{show && <ModalNewPost show={show} setShow={setShow} />}
				</div>
				
			</div>
			<Row className="d-none d-lg-flex d-flex mt-3  align-items-center">
				<Col className=" col-5 d-flex justify-content-center p-0">
					<Button style={{padding: "0.8rem 0.5rem"}} variant="none" className="btnNewPost d-flex align-items-center fs-5">
					
					<BsImage style={{color:"#378FE9"}}/>
						<span style={{fontSize:"0.875rem", fontWeight:"500"}} className="ms-2 text-black-50">Contenuti multimediali</span>
					</Button>
				</Col>
				<Col className="col-3 d-flex justify-content-center p-0">
					<Button variant="none" style={{padding: "0.8rem 0.5rem"}} className="btnNewPost d-flex align-items-center ">
						<FaRegCalendarAlt style={{color:"#C37D16"}} fontSize={20} />
						<span style={{fontSize:"0.875rem", fontWeight:"500"}} className=" ms-2 text-black-50">Evento</span>
					</Button>
				</Col>
				<Col className="d-flex justify-content-center p-0">
					<Button variant="none" style={{padding: "0.8rem 0.5rem"}} className="btnNewPost d-flex align-items-center ">
						<TbArticleFilledFilled style={{color:"#E06847"}} fontSize={23} />
						<span style={{fontSize:"0.875rem", fontWeight:"500"}} className="ms-2 text-black-50">Scrivi un articolo</span>
					</Button>
				</Col>
			</Row>
		</div>
  )
}


