import React from "react";
import { LinkedinLogoHome } from "../../SVG/svgTrixia";

export default function FooterHomeComponent() {
  const FooterListLi = [
    "Informazioni",
    "Accessiblità",
    "Talent Solutions",
    "Linee guida della community",
    "Carriera",
    "Soluzioni di marketing",
    "Privacy e condizioni",
    "Opzioni per gli annunci pubblicitari",
    "Pubblicità",
    "Sales Solutions",
    "Mobile",
    "Piccole Imprese",
    "Centro Sicurezza",
  ];

  return (
    <>
    <div style={{position:"sticky", top: "22rem"}}>
      <ul className="FooterListCustomHome mt-3" >
        {FooterListLi.map((x, index) => (
          <li key={index}>
            <a>{x}</a>
          </li>
        ))}
      </ul>
      <div className="d-flex align-items-center justify-content-center">
        <svg
          role="img"
          aria-hidden="false"
          aria-label="LinkedIn"
          class="global-footer-compact__linkedin-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="14"
          viewBox="0 0 56 14"
          data-supported-dps="56x14"
          data-test-icon="linkedin-logo-blue-xxsmall"
        >
          <svg>
            <image
              href={`https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr`}
              x="0"
              y="0"
              width="56"
              height="14"
            ></image>
          </svg>
        </svg>
        <p style={{fontSize:"0.75rem", margin:"0px  0px 0px 0.5rem"}}>LinkedIn Corporation © 2024</p>
      </div>
      </div>
    </>
  );
}
