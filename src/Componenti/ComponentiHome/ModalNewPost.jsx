import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BEARER_TOKEN } from "../../Config";
import { getAllPostsData } from "../../Action/postsActions";
import axios from "axios";
import { PulseSpinner } from "react-spinners-kit";

const ModalNewPost = ({ show, setShow }) => {
  const [postText, setPostText] = useState("");
  const [loadingPost, setLoadingPost] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();

  const handleTextChange = (e) => setPostText(e.target.value);

  const handleClose = () => setShow(false);

  // Funzione per gestire l'invio del post (da implementare)
  const handlePostText = async (e) => {
    e.preventDefault();

    try {
      axios
        .post(
          `https://striveschool-api.herokuapp.com/api/posts/`,
          { text: postText },
          {
            headers: {
              Authorization: "Bearer " + BEARER_TOKEN,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data._id);
          handlePostImage(e, response.data._id);
        });

      // Invia l'immagine solo dopo che il testo del post è stato inviato con successo
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handlePostImage = (e, id) => {
    // console.log("post image");
    e.preventDefault();

    const formData = new FormData();
    if (imageFile) {
      console.log(imageFile);
      formData.append("post", imageFile);

      try {
        console.log(formData);
        axios.post(
          `https://striveschool-api.herokuapp.com/api/posts/${id}`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + BEARER_TOKEN,
            },
          }
        ) .then(response => {
            setLoadingPost(false);
            setShow(false);
            dispatch(getAllPostsData());
        });

      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(new Blob([reader.result], { type: file.type }));
    };
    reader.readAsArrayBuffer(file);
  };

  const handlePublish =  (e) => {
    e.preventDefault();
    setLoadingPost(true);
    handlePostText(e);

  };

  const user = useSelector((state) => state.user.userData.data);

  return (
    <Modal show={show} onHide={handleClose} className="">
      <Modal.Header closeButton>
        <div className="d-flex align-items-center">
          <img
            width={48}
            height={48}
            className="rounded-circle me-2 object-fit-cover"
            alt="user"
            src={user.image}
          />
          <div>
            <p className="fw-bold mb-0">{user.name + " " + user.surname}</p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              className="border-1"
              placeholder="Di cosa vorresti parlare?"
              as="textarea"
              value={postText}
              onChange={handleTextChange}
              rows={6}
            />
            <Form.Label className="mt-3">Allega:</Form.Label>
            <Form.Control
              className=""
              type="file"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handlePublish} disabled={loadingPost}>
        {loadingPost ?  <PulseSpinner loading={loadingPost}/> : "Pubblica"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNewPost;
