import React from "react";
import "../../Style/NoActivityComponent.css"

export default function NoActivityComponent({id, userId}) {
  return (
    id === userId ? (
      <div className="no-activity-component">
        <p className="my-0 fw-bold text-black">Non hai ancora pubblicato nulla</p>
        <p className="small">I post che condividi appariranno qui</p>
      </div>
    ) : (
      <div className="no-activity-component">
        <p className="my-0 fw-bold text-black">Questo utente ancora pubblicato nulla</p>
        <p className="small">I post che condivide sto coglione appariranno qui</p>
      </div>
    )
  );
}
