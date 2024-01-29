import React, { useEffect } from "react";
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

export default function AttivitaComponent() {

  const {idUrl} = useParams()
  const allPosts = useSelector(state => state.posts.data)
  const userData = useSelector(state => state.user.userData.data)
  console.log(allPosts)
  console.log(userData)
  const userPosts = allPosts.filter(post => post.user._id === userData._id)

const dispatch = useDispatch();
  
useEffect(() => {
dispatch(getUserData())
dispatch(getAllPostsData())
}, [])



  return (
    <div className="attivita-component mt-2">
      <div className="attivita-component-main pb-3 ">
        <div>
          <h4>Attività</h4>
          <div>
          { idUrl ? null : <div className="crea-un-post-btn">Crea un post</div>}
           { idUrl ? null : <div className="matita-btn">
             <RiPencilLine />
            </div>}
          </div>
        </div>
        <p style={{marginTop:"0.5rem"}}>178 follower</p>
        {userPosts.length > 0 ? userPosts.slice(0,3).map( post => {
          return (
            <AttivitaSinglePostComponent key={post._id} post={post}/>
          )
        }) : <NoActivityComponent />}
      </div>
      <div className="attivita-component-button ">
        <p>Mostra tutti i commenti</p>
        <CgArrowRight className="freccia-dx" />
      </div>
    </div>
  );
}
