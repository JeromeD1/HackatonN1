import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.scss";

import CharacterCardsList from "./screens/CharacterCardsList";

function App() {

  return (
    <>
      <CharacterCardsList/>
    </>
  );
}

export default App;
