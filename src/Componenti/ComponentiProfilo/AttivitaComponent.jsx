import React, { useEffect, useState } from "react";
import "../../Style/AttivitaComponent.css";
import { CgArrowRight } from "react-icons/cg";
import { RiPencilLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Action/userActions";
import { getProfileData } from "../../Action/profileActions";
import { useSelector } from "react-redux";
import { getAllPostsData } from "../../Action/postsActions";
import AttivitaSinglePostComponent from "./AttivitaSinglePostComponent";
import NoActivityComponent from "./NoActivityComponent";
import { useParams } from "react-router-dom";
import ModalNewPost from "../ComponentiHome/ModalNewPost";

export default function AttivitaComponent() {
  const { idUrl } = useParams();
  const allPosts = useSelector((state) => state.posts.data);
  const userData = useSelector((state) => state.user.userData.data);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [show, setShow] = useState(false);
  let userPosts = [];

  if (!idUrl) {
    userPosts = showAllPosts
      ? allPosts.filter((post) => post.user._id === userData._id)
      : allPosts.filter((post) => post.user._id === userData._id).slice(0, 3);
  } else {
    userPosts = showAllPosts
      ? allPosts.filter((post) => post.user._id === idUrl)
      : allPosts.filter((post) => post.user._id === idUrl).slice(0, 3);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getAllPostsData());
  }, [idUrl]);

  return (
    <div className="attivita-component mt-2">
      <div className="attivita-component-main pb-3 ">
        <div className=" levati d-flex justify-content-between align-items-center">
        <p style={{fontSize:"1.25rem", fontWeight:"500"}} className='m-0'>Attività</p>
          <div className="d-flex align-items-center">
            {idUrl ? null : (
              <div className="crea-un-post-btn" onClick={() => setShow(true)}>
                Crea un post
              </div>
            )}
            {idUrl ? null : (
              <div className="matita-btn">
                <RiPencilLine />
              </div>
            )}
            {show && <ModalNewPost show={show} setShow={setShow} />}
          </div>
        </div>
        <p style={{ marginTop: "0.5rem" }}>178 follower</p>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <AttivitaSinglePostComponent key={post._id} post={post} />
          ))
        ) : (
          <NoActivityComponent userId={userData._id} id={idUrl}/>
        )}
      </div>
      <div
        className="attivita-component-button "
        onClick={() => setShowAllPosts(!showAllPosts)}
      >
        <p>
          {showAllPosts ? "Mostra meno commenti" : "Mostra tutti i commenti"}
        </p>
        <CgArrowRight className="freccia-dx" />
      </div>
    </div>
  );
}
