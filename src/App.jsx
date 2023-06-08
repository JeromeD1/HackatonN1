import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Home from "./screens/Home";

import "./App.css";
import CharacterCardsList from "./screens/CharacterCardsList";

function App() {

  // const [peoples, setPeoples] = useState([]);
  
  // useEffect(() => {
  //   fetch("https://miadil.github.io/starwars-api/api/all.json")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res) || setPeoples(res));
  // }, []);


  return (
    <>
      {/* {peoples.map(people =>(
    <img src={people.image} key={people.id} />
  ))} */}
    {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/characters" element={<Characters />} /> */}
      </Routes>
      <CharacterCardsList/>
    </>
  );
}

export default App;
