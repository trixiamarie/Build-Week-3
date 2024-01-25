import "../../Style/FooterStyle.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoShieldHalf } from "react-icons/io5";

export default function FooterComponent() {
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

  const lingueArray = [
    { lingua: "العربية (Arabo)", value: "ar_AE", lang: "ar-ae" },
    { lingua: "Čeština (Ceco)", value: "cs_CZ", lang: "cs-cz" },
    { lingua: "Dansk (Danese)", value: "da_DK", lang: "da-dk" },
    { lingua: "Deutsch (Tedesco)", value: "de_DE", lang: "de-de" },
    { lingua: "English (Inglese)", value: "en_US", lang: "en-us" },
    { lingua: "Español (Spagnolo)", value: "es_ES", lang: "es-es" },
    { lingua: "Français (Francese)", value: "fr_FR", lang: "fr-fr" },
    { lingua: "हिंदी (Hindi)", value: "hi_IN", lang: "hi-in" },
    { lingua: "Bahasa Indonesia (Indonesiano)", value: "in_ID", lang: "in-id" },
    { lingua: "Italiano (Italiano)", value: "it_IT", lang: "it-it" },
    { lingua: "日本語 (Giapponese)", value: "ja_JP", lang: "ja-jp" },
    { lingua: "한국어 (Coreano)", value: "ko_KR", lang: "ko-kr" },
    { lingua: "Bahasa Malaysia (Malese)", value: "ms_MY", lang: "ms-my" },
    { lingua: "Nederlands (Olandese)", value: "nl_NL", lang: "nl-nl" },
    { lingua: "Norsk (Norvegese)", value: "no_NO", lang: "no-no" },
    { lingua: "Polski (Polacco)", value: "pl_PL", lang: "pl-pl" },
    { lingua: "Português (Portoghese)", value: "pt_BR", lang: "pt-br" },
    { lingua: "Română (Rumeno)", value: "ro_RO", lang: "ro-ro" },
    { lingua: "Русский (Russo)", value: "ru_RU", lang: "ru-ru" },
    { lingua: "Svenska (Svedese)", value: "sv_SE", lang: "sv-se" },
    { lingua: "ภาษาไทย (Tailandese)", value: "th_TH", lang: "th-th" },
    { lingua: "Tagalog (Tagalog)", value: "tl_PH", lang: "tl-ph" },
    { lingua: "Türkçe (Turco)", value: "tr_TR", lang: "tr-tr" },
    { lingua: "Українська (Ucraino)", value: "uk_UA", lang: "uk-ua" },
    { lingua: "简体中文 (Cinese (Semplificato))", value: "zh_CN", lang: "zh-cn"},
    {lingua: "正體中文 (Cinese (Tradizionale))", value: "zh_TW", lang: "zh-tw"}
  ];

  const footerItems = [
    {
      icon: <FaCircleQuestion className="IconFooter"/>,
      title: "Domande?",
      linkText: "Visita il nostro Centro assistenza.",
    },
    {
      icon: <IoSettingsSharp className="IconFooter"/>,
      title: "Gestisci il tuo account e la tua privacy",
      linkText: "Vai alle impostazioni",
    },
    {
      icon: <IoShieldHalf className="IconFooter"/>,
      title: "Trasparenza sui contenuti consigliati",
      linkText: "Scopri di più sui contenuti consigliati.",
    },
  ];
  
  console.log(footerItems);
  

  return (
    <footer className="FooterCustom">
      <div>
        <Container>
          <Row>
            <Col>
              <ul className="FooterListCustom">
                {FooterListLi.map((x, index) => (
                  <li key={index}>
                    <a>{x}</a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col>
              <div style={{ display: "flex" }}>
                <ul className="FooterListCustom2">
                {footerItems.map((x, index) => (
                    <li key={index}>
                 {x.icon}
                    <div>
                      <a>{x.title}</a>

                      <p>{x.linkText}</p>
                    </div>
                  </li>
                ))}
                </ul>

                <div className="SelectFooter">
                  <label>Seleziona lingua</label>

                  <select defaultValue="it_IT">
                    {lingueArray.map((x, index) => (
                      <option value={x.value} lang={x.lang} key={index}>
                        {x.lingua}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Col>
          </Row>
            <Row>
            <Col>
          <p style={{fontSize:"0.8rem", marginLeft:"2rem", color: "#656566"}}>
            LinkedIn Corporation © 2024
          </p></Col></Row>
        </Container>
      </div>
    </footer>
  );
}
