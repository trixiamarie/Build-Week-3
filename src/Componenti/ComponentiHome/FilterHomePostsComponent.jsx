import React, { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";

export default function FilterHomePostsComponent() {
  const [filterActive, setFilterActive] = useState("rilevanti");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const testoBottone =
    filterActive === "rilevanti"
      ? "Più rilevanti per primi"
      : "Più recenti per primi";

  return (
    <div className="filter-posts-home d-flex align-items-center justify-content-between w-100">
      <div className="d-none d-lg-block filter-home-line"> </div>
      <div className="posts-filter d-flex">
        Seleziona la visualizzazione del feed:{" "}
        <div
          className="filter-posts-home-btn mx-2"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          <b>{testoBottone}</b> <IoCaretDownSharp />
        </div>
      </div>
      {isFilterVisible && (
        <div className="filter-box">
          <div
            className={`selection-filter ${
              filterActive === "rilevanti" ? "filtro-attivo" : ""
            }`}
            onClick={() => {
              setFilterActive("rilevanti");
              setIsFilterVisible(!isFilterVisible);
            }}
          >
            Più rilevanti per primi
          </div>
          <div
            className={`selection-filter ${
              filterActive !== "rilevanti" ? "filtro-attivo" : ""
            }`}
            onClick={() => {
              setFilterActive("recenti");
              setIsFilterVisible(!isFilterVisible);
            }}
          >
            Più recenti per primi
          </div>

          <div className="filter-info px-3">
            Questa opzione influirà soltanto sulla visualizzazione del tuo feed
            attuale su questo dispositivo. Puoi modificare la visualizzazione
            predefinita nelle <b>Impostazioni</b>.
          </div>
        </div>
      )}
    </div>
  );
}
