import React from "react";
import Filterbox from "../../components/filter/filterbox";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from 'next/image'


import { Container } from "@mui/material";
import { db } from "../api/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { FilterContext } from "../../components/filter/filterbox";

function Filterpros() {
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [type, setType] = useState(null);
  const [fees, setFees] = useState(null);
  const [coed, setCoed] = useState(null);
  const [board, setBoard] = useState(null);

  const Showdata = () => {
    const [schools, setSchools] = useState([]);
    const schoolsCollectionRef = collection(db, "schools");

    useEffect(() => {
      const getSchools = async () => {
        const q = query(
          collection(db, "schools"),
          where("board", "==", board),
          where("type", "==", coed)
        );
        const data = await getDocs(q);
        setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getSchools();
    }, []);

    // if(schools==[]){console.log("schools=" , schools )}

    function W (){
      if (board && coed && schools.length == 0) {
        return <div >
        <img style={{maxWidth : '600px'}} src={"https://firebasestorage.googleapis.com/v0/b/adept-amp-324009.appspot.com/o/No%20data-rafiki.png?alt=media&token=5d66e3c5-ac1d-4cb3-bb01-03012302e1a8"}/>
        </div>
      }
      else{
        return <>
        <p>select all the feilds</p></>
      }
    }

    console.log(schools)

    return (
      <>

        {board && coed && schools.length !== 0 ? (
          
          <Container className="App">
            {schools.map((schools) => {
              return (
                <>
                  <h1>Name: {schools.name}</h1>
                  <p> About: {schools.about}</p>
                  <a>city: {schools.city}</a>
                </>
              );
            })}
          </Container>
        ) : (
          <> <W/> </>
        )}
      </>
    );
  };

  return (
    <FilterContext.Provider
      value={{
        board: board,
        setBoard: setBoard,
        city: city,
        setCity: setCity,
        state: state,
        setState: setState,
        type: type,
        setType: setType,
        fees: fees,
        setFees: setFees,
        coed: coed,
        setCoed: setCoed,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            border: "1px solid grey",
            display: "inline-block",
            p: 2,
            m: 3,
            borderRadius: "10px",
            maxWidth: "220px",
          }}
        >
          <p> select all the feilds to enable search </p>
          <Filterbox />
        </Box>

        <Showdata />
      </Box>
    </FilterContext.Provider>
  );
}

export default Filterpros;
