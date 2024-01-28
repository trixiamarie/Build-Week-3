import React, { useState } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import "../../Style/Frank.css"; // Assicurati che il percorso al file CSS sia corretto

const LinkedinNotizie = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Card className="linkedinNotizieCard">
      <Card.Header className="fw-bold ">LinkedIn Notizie</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="bgHover border-0">
          <p className='testoTitolo'> ◦ 15 lavori in più rapida crescita in Italia</p>
          <p className='sottoTitolo mx-2'>Notizie principali • 356 lettori</p>
        </ListGroup.Item>
        <ListGroup.Item className="bgHover border-0">
          <p className='testoTitolo'> ◦ Via libera al ddl Beneficenza</p>
          <p className='sottoTitolo mx-2'>2 giorni fa</p>
        </ListGroup.Item>
        <ListGroup.Item className="bgHover border-0">
          <p className='testoTitolo'> ◦ Le città dei lavori in crescita</p>
          <p className='sottoTitolo mx-2'>2 giorni fa</p>
        </ListGroup.Item>
        <ListGroup.Item className="bgHover border-0">
          <p className='testoTitolo'> ◦ La protesta degli agricoltori si allarga</p>
          <p className='sottoTitolo mx-2'>3 giorni fa</p>
        </ListGroup.Item>
        <ListGroup.Item className="bgHover border-0">
          <p className='testoTitolo'> ◦ Italia in corsa agli Oscar</p>
          <p className='sottoTitolo mx-2'>5 giorni fa</p>
        </ListGroup.Item>

        {showAll && (
          <>
            <ListGroup.Item className="bgHover border-0">
              <p className='testoTitolo'> ◦ Che 2023 è stato per il mercato del li...</p>
              <p className='sottoTitolo mx-2'>1 giorno fa</p>
            </ListGroup.Item>
            <ListGroup.Item className="bgHover border-0">
              <p className='testoTitolo'> ◦ Una Ferrari a vela</p>
              <p className='sottoTitolo mx-2'>3 giorni fa</p>
            </ListGroup.Item>
            <ListGroup.Item className="bgHover border-0">
              <p className='testoTitolo'> ◦ Verso la doggy bag obbligatoria</p>
              <p className='sottoTitolo mx-2'>2 giorni fa</p>
            </ListGroup.Item>
            <ListGroup.Item className="bgHover border-0">
              <p className='testoTitolo'> ◦ Come sta l'industria della pasta</p>
              <p className='sottoTitolo mx-2'>3 giorni fa</p>
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" onClick={toggleShowAll} className="fs-6 bgHover">
          {showAll ? 'Meno dettagli' : 'Show more'}
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LinkedinNotizie;
