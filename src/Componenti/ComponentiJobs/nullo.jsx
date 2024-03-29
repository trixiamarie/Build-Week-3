import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Nullo() {
  const totalPages = 20; // Numero totale di pagine
  const [currentPage, setCurrentPage] = useState(1); // Pagina attuale (inizializzata a 1)

  const handlePageClick = (page) => {
    setCurrentPage(page);
    // Aggiungi qui la logica per caricare i dati della nuova pagina o eseguire altre azioni necessarie.
  };

  const pageItems = Array.from({ length: totalPages }, (_, index) => (
    <Pagination.Item
      key={index}
      active={index + 1 === currentPage}
      onClick={() => handlePageClick(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ));

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageClick(1)} />
      <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)} />
      {pageItems}
      <Pagination.Next onClick={() => handlePageClick(currentPage + 1)} />
      <Pagination.Last onClick={() => handlePageClick(totalPages)} />
    </Pagination>
  );
}

export default Nullo;
