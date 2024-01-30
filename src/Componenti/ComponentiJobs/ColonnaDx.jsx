import React, { useEffect } from "react";

export default function ColonnaDx({ dettaglioJob }) {
  return (
    <div
      className=""
      style={{ height: "79vh" }}
      dangerouslySetInnerHTML={{ __html: dettaglioJob }}
    ></div>
  );
}
