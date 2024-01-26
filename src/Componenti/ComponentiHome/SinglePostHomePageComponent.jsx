import React from "react";
import "../../Style/SinglePostHomeComponent.css";
import { BiWorld } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { BiSolidHeartCircle } from "react-icons/bi";
import { MdLightbulbCircle } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

export default function SinglePostHomePageComponent({ post }) {
  return (
    <div className="card-home-post">
      <div className="card-home-post-header d-flex  align-items-center justify-content-between">
        <div className="card-home-post-header-left d-flex align-items-center">
          <div className="card-home-post-logo">
            <img className="img-fluid" src="https://picsum.photos/100" alt="" />
            {/* {post.image && <img src={post.image} alt={post.title} />} */}
          </div>
          <div className="user-info-post ms-3">
            <p className="nome-post my-0">nome cognome</p>
            <p className="followers-user-post my-0">
              {Math.round(Math.random() * 12434)} follower
            </p>
            <p className="ore-post my-0">
              {Math.round(Math.random() * 20)} ore <b>·</b> <BiWorld />{" "}
            </p>
          </div>
        </div>
        <div className="card-home-post-header-right">
          {/* <BsThreeDots className="fs-4 mx-3"/><IoMdClose className="fs-4"/> */}
          <div className="home-post-segui">
            <span>+</span> Segui
          </div>
        </div>
      </div>
      <div className="home-post-body mb-3">testom dfvsldfk sdfs f</div>
      <div className="image-post">
        <img className="img-fluid" src="https://picsum.photos/600" alt="" />
      </div>
      <div className="img-footer-post-home d-flex justify-content-between px-3 py-2">
        <div className="img-footer-post-home-left d-flex align-items-center">
          <BiSolidHeartCircle className="text-danger" />
          <MdLightbulbCircle className="text-warning" />
          <AiFillLike className="text-primary" />
          <p className="my-0 ms-2">{Math.round(Math.random() * 100)}</p>
        </div>
        <div className="img-footer-post-home-right">
          <p className="my-0 ms-2">
            {Math.round(Math.random() * 500)} commenti <b> · </b>{" "}
            {Math.round(Math.random() * 500)} diffusioni post
          </p>
        </div>
      </div>
      <div className="card-home-post-footer p-4">
        <div className="like-btn-post-footer d-flex flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="thumbs-up-outline-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="#666666"
            width="24"
            height="24"
          >
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
          </svg>
          <p className="fw-bold text-secondary">Consiglia</p>
        </div>
        <div className="comment-btn-post-footer">
        <FaRegCommentDots />
        </div>
      </div>
    </div>
  );
}
