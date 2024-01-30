import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Modal } from "react-bootstrap";
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
    <Card
    md={12}
    className="rounded-3 border border-1 bg-white mb-2"
  ><CardHeader className="bg-white border-bottom-0 pt-4">
      <h6 className="mb-0">Altri profili consultati</h6>
      </CardHeader>
      <CardBody className="softLine py-0 px-3">
      {profileToShow.map((profile, index) => (
        <CardUtenteComponent profile={profile} index={index} key={index} />
      ))}</CardBody>
      <CardFooter
        className="text-center bg-white"

        onClick={() => setModalShow(true)}
      >
        <p className="text-secondary m-0 p-0" style={{fontWeight:"500"}}>Mostra tutto</p>
      </CardFooter>

      <ModaleAltriProfiliComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}
