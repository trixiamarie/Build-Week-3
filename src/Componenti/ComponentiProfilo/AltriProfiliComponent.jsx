import React from "react";
import { Button, Col, Modal, Card } from "react-bootstrap";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function ModaleAltriProfiliComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function AltriProfiliComponent() {
  const [modalShow, setModalShow] = React.useState(false);
  const allProfiles = useSelector(state => state.allProfiles.data)
  console.log(allProfiles)
const n = Math.floor(Math.random()*allProfiles.length/2)
  const profileToShow = allProfiles.slice(n, n+6)

  return (
    <Col md={12} className="rounded-1 border border-secondary-subtle p-3">
    <h6 className="ms-1 mb-3">Altri profili consultati</h6>
    {profileToShow.map((profile) => (
      <Card key={profile.id} className=" shadow-sm">
        <Card.Body className="d-flex align-items-center">
          <Link to={`/profile/${profile.id}`} className="text-decoration-none text-dark d-flex align-items-center">
            <img 
              src={profile.image}
              alt="Profilo di ${profile.name}"
              width={50}
              height={50}
              className="border border-3 border-white rounded-circle me-3"
            />
            <div className="flex-grow-1">
              <h5 className="fs-6 mb-1">{`${profile.name} ${profile.surname}`}</h5>
              <p className="mb-2 text-muted">{profile.title}</p>
              <button className="btn btn-sm btn-outline-primary rounded-pill">Visualizza</button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    ))}
      <Button
        className="w-100 text-center border-top rounded-top-0"
        variant="light"
        onClick={() => setModalShow(true)}
      >
        <b className="text-secondary">Mostra tutto</b>
      </Button>

      <ModaleAltriProfiliComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>
  );
}

