import React from "react";

export default function CardPrimoPianoComponent({titolo, sottotitolo, img}) {
  return (
    <div className="in-primo-piano-card">
      <div className="in-primo-piano-card-head">
        <p>Link</p>
      </div>
      <div className="in-primo-piano-card-img">
        <img src={img} alt="foto a caso" />
      </div>
      <div className="in-primo-piano-card-bottom p-2">
        <p className="in-primo-piano-titolo m-0">{titolo.toUpperCase()}</p>
        <p className="in-primo-piano-sottotitolo">{sottotitolo}</p>
      </div>
    </div>
  );
}
