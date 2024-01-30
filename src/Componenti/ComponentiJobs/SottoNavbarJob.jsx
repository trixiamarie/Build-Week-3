import React from 'react'
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../Style/SottoNavbarJob.css";
<<<<<<< HEAD
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
// import InputJob from './InputJob';


import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function SottoNavbarJob() {

    const userData = useSelector(state => state.user.userData.data)
=======
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from 'react-redux';
import { getSearchCategory, getSearchCompany, getSearchQueryJob } from '../../Action/searchActions';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {useNavigate} from 'react-router-dom'

export default function SottoNavbarJob() {
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const filtro = useSelector(state => state.search.filtro);
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07

  //gestione del toggle
  const [radioValue, setRadioValue] = useState('1');
  //stato dove memorizzo search|company|category
  //lascio search come valore iniziale perché i bottone sarà setta su lavoro
  const [endPoint, setEndPoint] = useState("search");

<<<<<<< HEAD
  const radios = [
    { name: 'Lavoro', value: '1' , endPoint: "search"},
    { name: 'Compagnia', value: '2' , endPoint: "company"},
    { name: 'Categoria', value: '3' , endPoint: "category"},
=======

  const job = getSearchQueryJob()
  const company = getSearchCompany()
  const category = getSearchCategory()
  
  const radios = [
    { name: 'Lavoro', value: '1' , endPoint: "search", ajax: job},
    { name: 'Azienda', value: '2' , endPoint: "company", ajax: company},
    { name: 'Categoria', value: '3' , endPoint: "category", ajax: category},
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07
  ];


  useEffect(()=>{
    console.log(endPoint)
  },[endPoint])
<<<<<<< HEAD

=======
 
  useEffect(()=>{
console.log(filtro);
  },[filtro])
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07


  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(innerWidth);
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
<<<<<<< HEAD
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
=======
    // const sottoNavbarUsername = document.querySelector(
    //   ".sotto-navbar-btns div:first-of-type"
    // );
    // const sottoNavBarJob = document.querySelector(
    //     ".sotto-navbar-job"
    //   );
    // innerWidth < 768
    //   ? (sottoNavBarJob.style.display = "block")
    //   : (sottoNavBarJob.style.display = "block");

    // innerWidth < 768
    //   ? (sottoNavbarUsername.innerHTML = "···")
    //   : (sottoNavbarUsername.innerText = "Aggiungi ai Preferiti");
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07

    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);


  return (
    <div className="sotto-navbar-job">
      <Container>
<<<<<<< HEAD
        {/* <InputJob></InputJob> */}
=======
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07
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
<<<<<<< HEAD
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  onClick={()=> setEndPoint(radio.endPoint)}
=======
                  checked={radio.name === filtro}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  onClick={()=> { console.log("bottoni miei"); dispatch(radio.ajax) } }
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
<<<<<<< HEAD
          <div className="sotto-navbar-btns">
            <div>Altro</div>
            <div>Aggiungi sezione del profilo</div>
            <div>Disponibile per</div>
=======
          <div>
            { innerWidth < 768 ? <div id="cuoricino-sotto-nav" onClick={()=>navigate('/jobs_saved')}><IoIosHeartEmpty /></div> : <div className="sotto-navbar-job-btns" onClick={()=>navigate('/jobs_saved')}>Mostra Preferiti</div> }
>>>>>>> 7603aa25fc8281db7a886491e80ff531bffe1e07
          </div>
        </div>
      </Container>
    </div>
  )
}
