import React, { useState } from 'react';
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { BEARER_TOKEN } from '../../Config';
import { getAllPostsData } from '../../Action/postsActions';

const ModalNewPost = ({ show, setShow }) => {
    const [postText, setPostText] = useState('');
    const dispatch = useDispatch()
    
    const handleTextChange = (e) => setPostText(e.target.value);

  
    const handleClose = () => setShow(false);

    // Funzione per gestire l'invio del post (da implementare)
    const handlePost = () => {
        console.log("Posting:", postText);
        
    
        fetch('https://striveschool-api.herokuapp.com/api/posts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "authorization": "Bearer " + BEARER_TOKEN
              
            },
            body: JSON.stringify({ text: postText }),  
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              dispatch(getAllPostsData())
            })
            .catch(error => {
              console.error('Error:', error);
              
            });
    
        setShow(false);
    };


    const user = useSelector(state => state.user.userData.data)

    return (
        <Modal show={show} onHide={handleClose}
        className=''>
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
                        <p className="fw-bold mb-0">
                            {user.name + " " + user.surname}
                        </p>
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
                        <Form.Label className='mt-3'>Allega:</Form.Label>
                        <Form.Control
                            className=""
                            type="file"
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
};

export default ModalNewPost;
