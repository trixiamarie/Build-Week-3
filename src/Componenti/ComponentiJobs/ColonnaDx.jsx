import React, { useEffect } from "react";

export default function ColonnaDx({ dettaglioJob }) {
  return (
    <div
      className="descrizioneLavoro"
      style={{ height: "79vh" }}
      dangerouslySetInnerHTML={{ __html: dettaglioJob }}
    ></div>
  );
}
