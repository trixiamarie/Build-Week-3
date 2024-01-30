import React from "react";
import "../../Style/SinglePostHomeComponent.css";
import { BiWorld } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { BiSolidHeartCircle } from "react-icons/bi";
import { MdLightbulbCircle } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { RiRepeat2Fill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { PolliceInSuLinkedin } from "../../SVG/svgTrixia";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeuserFriendsAction, userFriendsAction } from "../../Action/userFriendsActions";

export default function SinglePostHomePageComponent({ post }) {
  const friendsSaved = useSelector(state => state.userFriends)
  const dispatch = useDispatch();
 
  const areyoufriends = friendsSaved.find(x => x._id == post.user._id)


  const calculateTimeElapsed = (post) => {
    const createdDate = new Date(post.createdAt);
    const currentDate = new Date();
  
    const timeDifference = Math.abs(currentDate - createdDate) / 1000; 
  
    if (timeDifference < 60) {
        return "ora";
    } else if (timeDifference < 3600) {
        const minutes = Math.floor(timeDifference / 60);
        return `${minutes} ${minutes === 1 ? 'minuto' : 'minuti'} fa`;
    } else if (timeDifference < 86400) {
        const hours = Math.floor(timeDifference / 3600);
        return `${hours} ${hours === 1 ? 'ora' : 'ore'} fa `;
    } else {
        
        const day = createdDate.getDate();
        const month = createdDate.getMonth() + 1; 
        const year = createdDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
};


  return (
    <div className="card-home-post mt-2">
      <div className="card-home-post-header d-flex  align-items-center justify-content-between">
        <div className="card-home-post-header-left d-flex align-items-center">
          <div className="card-home-post-logo">
          <Link to={`/profile/${post.user._id}`}>
            <img
              className="img-fluid w-100"
              src={`https://picsum.photos/100?random=${Math.round(Math.random() * 30) }`}
              alt=""
            /></Link>
            {/* {post.image && <img src={post.image} alt={post.title} />} */}
          </div>
          <div className="user-info-post ms-3">
          <Link to={`/profile/${post.user._id}`}>
            <p className="nome-post my-0">{post.user.name ? post.user.name + ' ' + post.user.surname : post.user.username}</p></Link>
            <p className="followers-user-post my-0">
              {Math.round(Math.random() * 12434)} follower
            </p>
            <p className="ore-post my-0">
              {calculateTimeElapsed(post)}<b> ·</b> <BiWorld />{" "}
            </p>
          </div>
        </div>
        <div className="card-home-post-header-right">
          {/* <BsThreeDots className="fs-4 mx-3"/><IoMdClose className="fs-4"/> */}
          {areyoufriends ?  <div className="home-post-segui"  onClick={() => dispatch(removeuserFriendsAction(post.user))}>
            <span>-</span> Smetti di seguire
          </div>: <div className="home-post-segui"  onClick={() => dispatch(userFriendsAction(post.user))}>
            <span>+</span> Segui
          </div>}
        
        </div>
      </div>
      <div className="home-post-body mb-3">{post.text}</div>
      <div className="image-post">
        <img
          className="img-fluid w-100"
          src={post.image ? post.image : `https://picsum.photos/600?random=${Math.round(Math.random() * 30) }`}
          alt=""
        />
      </div>
      <div className="img-footer-post-home d-flex justify-content-between mx-3 my-2 py-1">
        <div className="img-footer-post-home-left d-flex align-items-center">
          <BiSolidHeartCircle className="text-danger" />
          <MdLightbulbCircle className="text-warning" />
          <AiFillLike className="text-primary" />
          <p className="my-0 ms-2 text-secondary">
            {Math.round(Math.random() * 100)}
          </p>
        </div>
        <div className="img-footer-post-home-right">
          <p className="my-0 ms-2">
            {Math.round(Math.random() * 500)} commenti <b> · </b>{" "}
            {Math.round(Math.random() * 500)} diffusioni post
          </p>
        </div>
      </div>
      <div className="d-none d-xl-flex card-home-post-footer d-flex justify-content-between">
        <div className="like-btn-post-footer text-center btn-post-footer">
          <PolliceInSuLinkedin/>
          <p className="fw-bold text-secondary m-0 ms-1">Consiglia</p>
        </div>
        <div className="comment-btn-post-footer text-center btn-post-footer">
          <FaRegCommentDots className="fs-5 me-1" style={{ color: "#666666" }} />
          <p className="fw-bold text-secondary m-0">Commenta</p>
        </div>
        <div className="diffondi-btn-post-footer text-center btn-post-footer m-0">
          <RiRepeat2Fill className="fs-5  me-1" style={{ color: "#666666" }} />
          <p className="fw-bold text-secondary m-0">Diffondi il post</p>
        </div>
        <div className="invia-btn-post-footer text-center btn-post-footer">
          <IoIosSend className="fs-5  me-1" style={{ color: "#666666" }} />
          <p className="fw-bold text-secondary m-0">Invia</p>
        </div>
      </div>
    </div>
  );
}
