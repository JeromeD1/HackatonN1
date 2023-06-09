import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.scss";

import Home from "./screens/Home";

import CharacterCardsList from "./screens/CharacterCardsList";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Swipe from "./components/Swipe/PageSwipe";
import Tchat from "./components/Tchat/Tchat";
// import CardsList from "./screens/CharacterCardsList"
import Etoiles from "./components/Etoiles";
import "./components/Etoiles.scss";


//TEST LOGINFORM
import LoginForm from "./components/Loginform";
import './components/Loginform.css';
import Profil from "./components/Profile/Profil"

function App() {

  return (
    <>
    <div className="app">

    
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/tchat" element={<Tchat />} />
        <Route path="/cardsList" element={<CharacterCardsList />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>




        {/* <Route path="/characters" element={<CharacterCardsList />} />   */}
      
      {/* <CharacterCardsList/> */}
    

      
      {/* <Footer /> */}

    </div>


    </>
  );
}

export default App;