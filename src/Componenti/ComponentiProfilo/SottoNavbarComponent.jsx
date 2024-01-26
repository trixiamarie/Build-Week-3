import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../Style/SottoNavbarComponent.css";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function SottoNavbarComponent() {

  const userData = useSelector(state => state.user.userData.data)

  // const username = "Vincenzo Arpaia";
  // const lavoro = "Full-stack Developer Student";

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    console.log(innerWidth);
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    const sottoNavbarUsername = document.querySelector(
      ".sotto-navbar-btns div:first-of-type"
    );
    const sottoNavBarComponent = document.querySelector(
        ".sotto-navbar-component"
      );
    innerWidth < 768
      ? (sottoNavBarComponent.style.display = "none")
      : (sottoNavBarComponent.style.display = "block");

    innerWidth < 992
      ? (sottoNavbarUsername.innerHTML = "···")
      : (sottoNavbarUsername.innerText = "Altro");

    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  useEffect(() => {
    console.log(scrollPosition);
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
    const sottoNavBarComponent = document.querySelector(
      ".sotto-navbar-component"
    );

    scrollPosition > 200
      ? (sottoNavBarComponent.style.top = "50px")
      : (sottoNavBarComponent.style.top = "-20px");
  }, [scrollPosition]);

  return (
    <div className="sotto-navbar-component">
      <Container>
        <div className="sotto-navbar">
          <div className="sotto-navbar-sx">
            <div className="sotto-navbar-avatar" style={{backgroundImage: `url(${userData.image})`, backgroundSize: "cover" }}>
              {userData.image ? "" : userData.name.substring(0, 1)}
              <div className="avatar-pallino"></div>
            </div>
            <div className="sotto-navbar-info">
              <div className="sotto-navbar-username">{userData.name + ' ' + userData.surname}</div>
              <div className="sotto-navbar-lavoro">{userData.title}</div>
            </div>
          </div>
          <div className="sotto-navbar-btns">
            <div>Altro</div>
            <div>Aggiungi sezione del profilo</div>
            <div>Disponibile per</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
