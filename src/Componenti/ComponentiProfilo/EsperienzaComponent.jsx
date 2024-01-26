import React from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { IoAddSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../../Style/greg.css";
import MettiEsperienza from "./ComponentiProfiloAtomizzati/MettiEsperienza";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EsperienzaComponent() {
  /* const [ id, setId] = useState(useParams()); */
  const [id, setId] = useState("6551e7bbc55e7e0018f83bfb");
  const [esperienze, setEsperienze] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2JmMmMwNTgzNTAwMTg1MjMwZGMiLCJpYXQiOjE3MDYxNzQ1OTIsImV4cCI6MTcwNzM4NDE5Mn0.CyKBDIwBzHkgovr4Z3UIy0SAkGIt3ZvpUsSwkxUWMOg",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setEsperienze(res.data);
      })
      .catch((err) => console.log(console.error()));
  }, [id]);

  return (
    <>
      {esperienze.length > 0 && (
        <div className="border rounded px-4 pt-3 pb-0 bg-white my-2">
          <div className="d-flex justify-content-between alig-items-start">
            <h4>Esperienza</h4>

            <div className="text-secondary fs-5 d-flex">
              <div className="matita-btn">
                <IoAddSharp
                  className=" "
                  onClick={() => {
                    console.log("ciao");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="esperienze mt-2 mb-0 pb-0">
            {esperienze.map((ele) => (
              <MettiEsperienza key={ele._id} esperienza={ele} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
