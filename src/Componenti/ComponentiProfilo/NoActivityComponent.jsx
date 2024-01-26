import React from "react";
import "../../Style/NoActivityComponent.css"

export default function NoActivityComponent() {
  return (
    <div className="no-activity-component">
      <p className="my-0 fw-bold text-black">Non hai ancora pubblicato nulla</p>
      <p className="small">I post che condividi appariranno qui</p>
    </div>
  );
}
