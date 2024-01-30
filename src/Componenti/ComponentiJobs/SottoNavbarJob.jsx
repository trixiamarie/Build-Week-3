import React from 'react'
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../Style/SottoNavbarJob.css";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
// import InputJob from './InputJob';


import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function SottoNavbarJob() {

    const userData = useSelector(state => state.user.userData.data)

  //gestione del toggle
  const [radioValue, setRadioValue] = useState('1');
  //stato dove memorizzo search|company|category
  //lascio search come valore iniziale perché i bottone sarà setta su lavoro
  const [endPoint, setEndPoint] = useState("search");

  const radios = [
    { name: 'Lavoro', value: '1' , endPoint: "search"},
    { name: 'Compagnia', value: '2' , endPoint: "company"},
    { name: 'Categoria', value: '3' , endPoint: "category"},
  ];


  useEffect(()=>{
    console.log(endPoint)
  },[endPoint])



  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(innerWidth);
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    const sottoNavbarUsername = document.querySelector(
      ".sotto-navbar-btns div:first-of-type"
    );
    const sottoNavBarJob = document.querySelector(
        ".sotto-navbar-job"
      );
    innerWidth < 768
      ? (sottoNavBarJob.style.display = "none")
      : (sottoNavBarJob.style.display = "block");

    innerWidth < 992
      ? (sottoNavbarUsername.innerHTML = "···")
      : (sottoNavbarUsername.innerText = "Altro");

    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);


  return (
    <div className="sotto-navbar-job">
      <Container>
        {/* <InputJob></InputJob> */}
        <div className="sotto-navbar">
          <div className="sotto-navbar-sx">
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={'outline-success'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  onClick={()=> setEndPoint(radio.endPoint)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
          <div className="sotto-navbar-btns">
            <div>Altro</div>
            <div>Aggiungi sezione del profilo</div>
            <div>Disponibile per</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
