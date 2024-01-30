import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Modal } from "react-bootstrap";
import CardUtenteComponent from "./CardUtenteComponent";
import { useSelector } from "react-redux";

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
  const friends = useSelector((state) => state.userFriends);

  const allProfiles = useSelector((state) => state.allProfiles.data);
  const onlyProfiletoShow = allProfiles.filter(profile => !friends.some(friend => friend._id === profile._id));

  const n = Math.max(0, Math.floor((Math.random() * onlyProfiletoShow.length) - 7));
  const profileToShow = onlyProfiletoShow.slice(n, n + 6);

  return (
    <Card
      md={12}
      className="rounded-3 border border-1 bg-white"
    >
    <CardHeader className="bg-white border-bottom-0 pt-4">
      <h6 className="mb-0">Persone che potresti conoscere</h6>
      <p className="text-secondary m-0">Dalla scuola o università</p>
    </CardHeader>
<CardBody className="softLine py-0 px-3">
      {profileToShow.map((profile, index) => (
        <CardUtenteComponent profile={profile} key={index} />
      ))}
      </CardBody>
      <CardFooter
        className="text-center bg-white"
        onClick={() => setModalShow(true)}
      >
        <p className="text-secondary m-0 p-0" style={{fontWeight:"500"}}>Mostra tutto</p>
      </CardFooter>

      <ModalePotrestiConoscereComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}
