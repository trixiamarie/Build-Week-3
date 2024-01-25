import React from "react";
import { Button, Col, Modal } from "react-bootstrap";

function ModalePotrestiConoscereComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
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

export default function PotrestiConoscereComponent() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Col md={12} className=" my-3 rounded-1 border border-secondary-subtle">
      <h6 className="ms-1 mb-0">Persone che potresti conoscere</h6>
      <p className="ms-1 text-secondary">Dalla scuola o università di {}</p>
      <Button
        className="w-100 text-center"
        variant="light"
        onClick={() => setModalShow(true)}
      >
        <b className="text-secondary">Mostra tutto</b>
      </Button>

      <ModalePotrestiConoscereComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>
  );
}
