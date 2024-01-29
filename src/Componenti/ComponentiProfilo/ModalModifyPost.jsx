import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BEARER_TOKEN } from '../../Config';
import axios from 'axios';
import { getAllPostsData } from '../../Action/postsActions';

export default function ModalModifyPost(props) {
  const [postText, setPostText] = useState(props.post.text);
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleTextChange = (e) => setPostText(e.target.value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleClose = () => setShow(false);

  const handlePost = async (e) => {
    e.preventDefault();

    console.log("Posting:", postText);
    console.log(props.post._id);
    const formMod = document.getElementById('FormMod');
    console.log(formMod);
  
    const formData = new FormData(formMod);
    formData.append('text', postText);
    console.log(formData);
  
    if (imageFile) {
      formData.append('image', imageFile);
    }
  
    try {
      const response = await axios.put(
        `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + BEARER_TOKEN,
          },
        }
      );
  
      console.log('Success:', response.data);
  
      dispatch(getAllPostsData());
    } catch (error) {
      console.error('Error:', error);
    }
  
    setShow(false);
  };
  
  

  return (
    <Modal show={show} onHide={handleClose} className=''>
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
        <Form id="FormMod">
          <Form.Group>
            <Form.Control
              className="border-1"
              placeholder="Di cosa vorresti parlare?"
              as="textarea"
              value={postText}
              onChange={(e) => handleTextChange(e)}
              rows={6}
              type="text"
              name='text'
            />
            <Form.Label className='mt-3'>Allega:</Form.Label>
            <Form.Control
            name='image'
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
        <Button variant="primary" onClick={handlePost}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
