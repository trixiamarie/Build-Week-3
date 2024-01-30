import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import "../../Style/Matteo.css"
import { useParams } from 'react-router-dom';

export default function PubblicazioniComponent() {

  const { idUrl } = useParams()
  const [isOpen, setIsOpen] = useState(false);
  //informazioni saranno props fetchate?
  const informazioni = "Switchable Anionic Surfactants (SAS) were used for delaminating flexible packaging waste composed of various plastic layers and aluminium, thereby promoting the recycling of such waste streams from a circular economy perspective. The delamination protocol was optimized on de-pulped food and beverage cartons containing low-density polyethylene (LDPE) and aluminium, varying the carboxylic acid and its counterion constituting the SAS (C8single bondC18 carboxylic acids as the anionic part; inorganic bases and primary, secondary and tertiary amines as the cationic one) their molar ratio (carboxylic acid: base molar ratio from 1:1 to 1:3), SAS concentration (0.15, 0.3 and 0.5 wt%), time (0.5–3 h) and material weight in input (1–10 wt%). High-quality LDPE and aluminium were separated and recovered by using a diluted solution of a surfactant based on lauric acid and triethanolamine (C12-TEA), with performances not achievable with other anionic or cationic surfactants available on the market. The C12-TEA solution was then applied to a large variety of multilayer waste materials composed of polypropylene and aluminium, polyolefins/polyethylene terephthalate/aluminium, giving a material separation dependant on the structure and composition of the material in input. At the end of the process, lauric acid was recovered from the aqueous solution used for washing the separated materials by tuning its water solubility with CO2.Switchable Anionic Surfactants (SAS) were used for delaminating flexible packaging waste composed of various plastic layers and aluminium, thereby promoting the recycling of such waste streams from a circular economy perspective. The delamination protocol was optimized on de-pulped food and beverage cartons containing low-density polyethylene (LDPE) and aluminium, varying the carboxylic acid and its counterion constituting the SAS (C8single bondC18 carboxylic acids as the anionic part; inorganic bases and primary, secondary and tertiary amines as the cationic one) their molar ratio (carboxylic acid: base molar ratio from 1:1 to 1:3), SAS concentration (0.15, 0.3 and 0.5 wt%), time (0.5–3 h) and material weight in input (1–10 wt%). High-quality LDPE and aluminium were separated and recovered by using a diluted solution of a surfactant based on lauric acid and triethanolamine (C12-TEA), with performances not achievable with other anionic or cationic surfactants available on the market. The C12-TEA solution was then applied to a large variety of multilayer waste materials composed of polypropylene and aluminium, polyolefins/polyethylene terephthalate/aluminium, giving a material separation dependant on the structure and composition of the material in input. At the end of the process, lauric acid was recovered from the aqueous solution used for washing the separated materials by tuning its water solubility with CO2."

  return (
    <>

      <Card className="mt-2">
        <Card.Body style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.17)"}}>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Pubblicazioni</h4>
            <div className="d-flex">
            { idUrl ? null : <> <div className="ale-plus-btn">
                <FaPlus className="mx-auto" />
              </div>
              <div className="matita-btn">
                <RiPencilLine />
              </div></>}
            </div>
          </div>

          <div className="softLine">
            <div className="mt-2">
              <span className="fw600">Recycling of multilayer packaging waste with switchable anionic surfactants</span><br></br>
              <span className="fs14 fw400">Resources, Conservation and Recycling · 1 nov 2023</span>
              <div className="d-flex" style={{padding: "10px 0px 20px 0px" }}>
                <span className="mostraPubb">
                  <a>Mostra Pubblicazioni </a><BsBoxArrowUpRight style={{marginLeft: "5px"}}/>
                </span>
              </div>

              {informazioni.length < 100 || isOpen ? (
              <p className="fs14">{informazioni}</p>
              ) : (
                <div className="fs14">
                  <p>{informazioni.substring(0, 100)} 
                  <span>
                    <span className="pointer" onClick={() => setIsOpen(!isOpen)}>
                      ...vedi altro
                    </span>
                  </span>
                  </p>
                </div>
              )}                          
            </div>
          </div>
          
            
        </Card.Body>
        
          <Card.Body className="mostraComp">
          {/* Card.Link da cambiare con un link o un navigate */}
          <Card.Link ><b style={{color: "#00000099"}} >Mostra Tutte le Pubblicazioni <FaArrowRightLong /></b></Card.Link>
          </Card.Body>
      </Card>
            

    </>
  )
}
