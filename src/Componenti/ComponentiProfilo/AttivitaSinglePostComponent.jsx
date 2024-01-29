import React, { useRef, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { BEARER_TOKEN } from "../../Config";
import { useDispatch } from "react-redux";
import { getAllPostsData } from "../../Action/postsActions";
import ModalNewPost from "../ComponentiHome/ModalNewPost";
import ModalModifyPost from "./ModalModifyPost";

export default function AttivitaSinglePostComponent({ post }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const calculateTimeElapsed = (post) => {
    const createdDate = new Date(post.createdAt);
    const currentDate = new Date();

    const timeDifference = Math.abs(currentDate - createdDate) / 1000;

    if (timeDifference < 60) {
      return "ora";
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} ${minutes === 1 ? "minuto" : "minuti"} fa`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} ${hours === 1 ? "ora" : "ore"} fa`;
    } else {
      const day = createdDate.getDate();
      const month = createdDate.getMonth() + 1;
      const year = createdDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
  };

  const handleDelete = async (post) => {
    console.log(post._id)
    const userConfirmed = window.confirm("Sei sicuro di voler cancellare questo post?");

    if (userConfirmed) {
    try {
      const response = await axios.delete(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          headers: {
            "Authorization": "Bearer " + BEARER_TOKEN,
          },
        }
      );
  
      console.log("Post cancellato con successo", response.data);
      dispatch(getAllPostsData())
    } catch (error) {
      console.error("Errore durante la cancellazione del post", error);
    }}
  };
  

  console.log(post);

  const icone = useRef();

  const mostraIcone = () => {
    icone.current.classList.remove("d-none");
  };

  const nascondiIcone = () => {
    icone.current.classList.add("d-none");
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-2 border-bottom border-1"  onMouseEnter={mostraIcone}
        onMouseLeave={nascondiIcone}>
        <div className="d-flex">
          <img className="me-2 mb-2" src={post.image ? post.image : `https://picsum.photos/600?random=${Math.round(Math.random() * 30)}`} alt="imageofuserspost" style={{ height: "50px", width: "50px"}}
          />
          <div className="d-flex flex-column">
          <p className="autore-commento m-0">
            <b>{post.user.name + " " + post.user.surname} </b>
            <span>
              ha pubblicato un post <b>·</b> {calculateTimeElapsed(post)}
            </span>
          </p>
          <p className="testo-commento m-0">{post.text}</p>
        </div>
        </div>
        <div ref={icone} className="d-flex d-none" >
        
          <div className="matita-btn">
            <RiPencilLine onClick={() => setShow(true)}/>
          </div>
          
          <div className="matita-btn">
            <FaTrash onClick={() => handleDelete(post)}/>
          </div>
          {show && <ModalModifyPost post={post} show={show} setShow={setShow} />}
        </div>
      </div>
    </>
  );
}
