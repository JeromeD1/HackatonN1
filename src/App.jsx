import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.scss";

import Home from "./screens/Home";

import CharacterCardsList from "./screens/CharacterCardsList";

import Header from "./components/Header";
import Footer from "./components/Footer";

//TEST LOGINFORM
import LoginForm from "./components/Loginform";
import './components/Loginform.css';

function App() {

  return (
    <>
    <div className="app">

    <Header />
    {/* <Home /> */}
    {/* <LoginForm/> */}
      <Routes>
        <Route path="/" element={<Home />} />




        {/* <Route path="/characters" element={<CharacterCardsList />} />   */}
      
      {/* <CharacterCardsList/> */}
    

      </Routes>
      <Footer />

    </div>


    </>
  );
}

export default App;