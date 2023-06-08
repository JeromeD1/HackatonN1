import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.scss";

import Home from "./screens/Home";

import CharacterCardsList from "./screens/CharacterCardsList";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Swipe from "./components/Swipe/PageSwipe";
import Tchat from "./components/Tchat/Tchat";

//TEST LOGINFORM
import LoginForm from "./components/Loginform";
import './components/Loginform.css';

function App() {

  return (
    <>
    <div className="app">

    <Header />
    <Home />
    <LoginForm/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Swipe" element={<Swipe />} />
        <Route path="/Tchat" element={<Tchat />} />




        {/* <Route path="/characters" element={<CharacterCardsList />} />   */}
      
      {/* <CharacterCardsList/> */}
    

      </Routes>
      <Footer />

    </div>


    </>
  );
}

export default App;