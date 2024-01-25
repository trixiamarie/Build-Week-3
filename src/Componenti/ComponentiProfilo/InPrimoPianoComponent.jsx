import React from "react";
import { RiPencilLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import "../../Style/InPrimoPianoComponent.css";
import CardPrimoPianoComponent from "./CardPrimoPianoComponent";

export default function InPrimoPianoComponent() {
  return (
    <div className="in-primo-piano-component mt-2">
      <div className="in-primo-piano-header">
        <h4>In primo piano</h4>
        <div>
          <div className="ale-plus-btn">
            <FaPlus className="mx-auto" />
          </div>
          <div className="matita-btn">
            <RiPencilLine />
          </div>
        </div>
      </div>
      <div className="in-primo-piano-main d-flex overflow-auto">
        <CardPrimoPianoComponent titolo="graphic design portfolio" sottotitolo="Dribbble" img="https://picsum.photos/250/150"/>
        <CardPrimoPianoComponent titolo="coding portfolio" sottotitolo="GitHub" img="https://picsum.photos/250/150"/>
        <CardPrimoPianoComponent titolo="Tutte le volte che mi hanno insultato..." sottotitolo="intervista a Gesu" img="https://picsum.photos/250/150"/>
      </div>
    </div>
  );
}
