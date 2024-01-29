import React from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardUtenteComponent from "./CardUtenteComponent";

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
  const allProfiles = useSelector((state) => state.allProfiles.data);
  console.log(allProfiles);
  const n = Math.floor((Math.random() * allProfiles.length) / 2);
  const profileToShow = allProfiles.slice(n, n + 6);

  return (
    <Col
      md={12}
      className="rounded border border-secondary-subtle p-3 bg-white mb-2"
    >
      <h6 className="ms-1 mb-3">Altri profili consultati</h6>
      {profileToShow.map((profile, index) => (
        <CardUtenteComponent profile={profile} index={index} key={index} />
      ))}
      <Button
        className="w-100 text-center border-top rounded-top-0 bg-white"
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
