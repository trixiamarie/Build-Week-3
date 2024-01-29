import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BEARER_TOKEN } from "../../Config";
import axios from "axios";
import { getAllPostsData } from "../../Action/postsActions";
import { PulseSpinner } from "react-spinners-kit";

export default function ModalModifyPost(props) {
  const [postText, setPostText] = useState(props.post.text);
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false);
  
  const handleTextChange = (e) => setPostText(e.target.value);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(new Blob([reader.result], { type: file.type }));
    };
    reader.readAsArrayBuffer(file);
  };

  const handleClose = () => setShow(false);

  const handlePostImage = async (e) => {
    console.log("post image");
    e.preventDefault();

    const formData = new FormData();
    if (imageFile) {
      console.log(imageFile);
      formData.append("post", imageFile);

      try {
        console.log(formData);
        const response = await axios.post(
          `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + BEARER_TOKEN,
            },
          }
        );

        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handlePostText = async (e) => {
    e.preventDefault();

    // console.log("post text");
    const body = {
      text: postText,
    };

    try {
      const response = await axios.put(
        `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`,
        body,
        {
          headers: {
            Authorization: "Bearer " + BEARER_TOKEN,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoadingPost(true)
    await handlePostImage(e);
    await handlePostText(e);
    setLoadingPost(false)
    setShow(false);
    dispatch(getAllPostsData());
  };

  return (
    <Modal show={show} onHide={handleClose} className="">
      <Modal.Header closeButton>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <img
              width={48}
              height={48}
              className="rounded-circle me-2 object-fit-cover"
              alt="user"
              src={props.post.user.image}
            />
            <div>
              <p className="fw-bold mb-0">
                {props.post.user.name + " " + props.post.user.surname}
              </p>
            </div>
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
        <Button variant="primary" onClick={handlePublish} disabled={loadingPost} >
        {loadingPost ? <PulseSpinner loading={loadingPost}/> : "pubblica"}
          
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
