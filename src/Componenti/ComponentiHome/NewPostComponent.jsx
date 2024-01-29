import React from 'react'
import { Row, Col, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { BsJournalAlbum } from "react-icons/bs";



import { useState } from "react";

import { useSelector } from "react-redux";
import ModalNewPost from './ModalNewPost';


export default function NewPostComponent() {
  const [show, setShow] = useState(false);
	const user = useSelector(state =>state.user.userData.data)

  return (
    <div className="bg-white rounded-3 border border-1 p-3">
			<div className="d-flex align-items-center ">
				<img
					src={user.image}
					width={52}
					height={52}
					className="rounded-circle object-fit-cover me-2"
					alt="user"
				/>
				<div className="flex-grow-1">
					<Button
						className="rounded-pill text-start w-100 border border-secondary bg-body-tertiary text-black-50 fw-medium"
						variant="none"
						onClick={() => setShow(true)}
					>
						Avvia un post
					</Button>
					{show && <ModalNewPost show={show} setShow={setShow} />}
				</div>
				
			</div>
			<Row className="mt-2 px-3 align-items-center">
				<Col className=" col-5 d-flex justify-content-center">
					<Button variant="none" className="d-flex align-items-center">
						<CiImageOn className="text-primary" fontSize={20} />
						<span className="ms-2 text-black-50">Contenuti multimediali</span>
					</Button>
				</Col>
				<Col className="col-3 d-flex justify-content-center">
					<Button variant="none" className="d-flex align-items-center">
						<FaRegCalendarAlt className="text-warning" fontSize={20} />
						<span className="ms-2 text-black-50">Evento</span>
					</Button>
				</Col>
				<Col className="d-flex justify-content-center">
					<Button variant="none" className="d-flex align-items-center">
						<BsJournalAlbum className="text-danger" fontSize={20} />
						<span className="ms-2 text-black-50">Scrivi un articolo</span>
					</Button>
				</Col>
			</Row>
		</div>
  )
}


